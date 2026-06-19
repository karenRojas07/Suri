import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1";

const originalWarn = console.warn.bind(console);
console.warn = (...args) => {
  const text = String(args?.[0] || "").toLowerCase();
  if (text.includes("unable to determine content-length from response headers")) {
    return;
  }
  originalWarn(...args);
};

env.useBrowserCache = true;
env.allowLocalModels = false;

const DEFAULTS = {
  task: "automatic-speech-recognition",
  model: "onnx-community/whisper-small",
  dtype: "q8"
};
const ALLOWED_MODELS = new Set([
  "onnx-community/whisper-base",
  "onnx-community/whisper-small"
]);

let asr = null;
let initPromise = null;
let backend = "wasm";
let activeModel = DEFAULTS.model;
let activeConfig = { device: "wasm", dtype: DEFAULTS.dtype };
let lastInitError = null;
let lastInitErrorAt = 0;
const INIT_RETRY_COOLDOWN_MS = 20000;

function normalizeModelId(value) {
  const model = String(value || "").trim();
  return ALLOWED_MODELS.has(model) ? model : DEFAULTS.model;
}

function normalizeLanguage(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (["spanish", "es", "es-es", "es_mx", "es-mx"].includes(raw)) return "es";
  if (["english", "en", "en-us", "en_us", "en-gb", "en_gb"].includes(raw)) return "en";
  return "es";
}

function postStatus(status, detail) {
  self.postMessage({ type: "status", status, detail: detail || "" });
}

async function loadPipeline(config, modelId, progressCallback) {
  return pipeline(DEFAULTS.task, modelId, {
    dtype: config.dtype,
    device: config.device,
    progress_callback: progressCallback
  });
}

async function initializeWithCandidates(candidates, modelId = DEFAULTS.model) {
  let lastError = null;

  for (const candidate of candidates) {
    try {
      asr = await loadPipeline(candidate, modelId, (progress) => {
        const pct = typeof progress?.progress === "number" ? Math.round(progress.progress) : null;
        const engineLabel = `${candidate.device.toUpperCase()} / ${String(candidate.dtype).toUpperCase()}`;
        postStatus("loading", pct != null
          ? `Cargando modelo ${pct}% (${engineLabel})`
          : `Preparando ${engineLabel}...`);
      });

      activeConfig = { ...candidate };
      backend = candidate.device;
      activeModel = modelId;
      postStatus("ready", `Whisper listo (${candidate.device.toUpperCase()} / ${String(candidate.dtype).toUpperCase()})`);
      return { backend, model: activeModel };
    } catch (error) {
      lastError = error;
      asr = null;
    }
  }

  throw lastError || new Error("No fue posible inicializar Whisper.");
}

async function ensureInitialized(options = {}) {
  const requestedModel = normalizeModelId(options?.model);

  if (asr && activeModel === requestedModel) {
    return { backend, model: activeModel };
  }

  if (asr && activeModel !== requestedModel) {
    resetPipeline();
    lastInitError = null;
    lastInitErrorAt = 0;
  }

  if (initPromise) return initPromise;

  const now = Date.now();
  if (lastInitError && (now - lastInitErrorAt) < INIT_RETRY_COOLDOWN_MS) {
    throw lastInitError;
  }

  const isWindows = typeof navigator !== "undefined"
    && /windows/i.test(String(navigator.userAgent || ""));
  const candidates = isWindows
    ? [
      { device: "wasm", dtype: "q8" },
      { device: "wasm", dtype: "fp32" },
      { device: "webgpu", dtype: "q8" }
    ]
    : [
      { device: "webgpu", dtype: "q8" },
      { device: "wasm", dtype: "q8" },
      { device: "wasm", dtype: "fp32" }
    ];

  initPromise = (async () => {
    postStatus("loading", `Cargando ${requestedModel.includes("small") ? "Whisper Small" : "Whisper Base"} ONNX...`);

    try {
      const result = await initializeWithCandidates(candidates, requestedModel);
      lastInitError = null;
      lastInitErrorAt = 0;
      return result;
    } catch (error) {
      if (requestedModel !== DEFAULTS.model) {
        postStatus("loading", "El modelo seleccionado falló. Reintentando con Whisper Small...");
        try {
          const fallbackResult = await initializeWithCandidates(candidates, DEFAULTS.model);
          lastInitError = null;
          lastInitErrorAt = 0;
          return fallbackResult;
        } catch (fallbackError) {
          lastInitError = fallbackError;
          lastInitErrorAt = Date.now();
          throw fallbackError;
        }
      }

      lastInitError = error;
      lastInitErrorAt = Date.now();
      throw error;
    } finally {
      initPromise = null;
    }
  })();

  return initPromise;
}

function looksLikeRuntimeKernelError(error) {
  const message = String(error?.message || "").toLowerCase();
  return message.includes("reading 'dc'")
    || message.includes("cannot read properties of null")
    || message.includes("model execution");
}

function resetPipeline() {
  asr = null;
  initPromise = null;
}

async function transcribe(payload) {
  const { audioBuffer, language = "spanish", task = "transcribe", model = DEFAULTS.model } = payload;

  if (!audioBuffer) {
    throw new Error("No se recibió audio para transcribir.");
  }

  await ensureInitialized({ model });
  postStatus("transcribing", "Transcribiendo audio...");

  const audio = new Float32Array(audioBuffer);
  if (audio.length === 0) {
    throw new Error("El audio recibido está vacío.");
  }

  const durationSec = audio.length / 16000;
  const chunkLength = durationSec <= 8 ? 8 : 15;
  const strideLength = durationSec <= 8 ? 2 : 5;
  const normalizedLanguage = normalizeLanguage(language);

  const inferenceOptions = {
    language: normalizedLanguage,
    task,
    return_timestamps: false
  };

  if (durationSec > 9) {
    inferenceOptions.chunk_length_s = chunkLength;
    inferenceOptions.stride_length_s = strideLength;
  }

  let output;
  try {
    output = await asr(audio, inferenceOptions);
  } catch (error) {
    if (!looksLikeRuntimeKernelError(error)) {
      throw error;
    }

    postStatus("loading", "Error interno de ejecución detectado. Reintentando con modo compatible...");
    resetPipeline();

    await initializeWithCandidates([
      { device: "wasm", dtype: "fp32" }
    ], normalizeModelId(model));

    output = await asr(audio, inferenceOptions);
  }

  const text = typeof output === "string" ? output : output?.text || "";
  postStatus("ready", "Transcripción lista");
  return { text: String(text).trim(), backend, model: activeModel };
}

self.onmessage = async (event) => {
  const { id, type, payload } = event.data || {};

  try {
    if (type === "init") {
      const ready = await ensureInitialized(payload || {});
      self.postMessage({ type: "inited", id, backend: ready.backend, model: ready.model });
      return;
    }

    if (type === "transcribe") {
      const result = await transcribe(payload || {});
      self.postMessage({ type: "transcribed", id, ...result });
      return;
    }

    if (type === "dispose") {
      resetPipeline();
      backend = "wasm";
      activeModel = DEFAULTS.model;
      activeConfig = { device: "wasm", dtype: DEFAULTS.dtype };
      lastInitError = null;
      lastInitErrorAt = 0;
      self.postMessage({ type: "disposed", id });
    }
  } catch (error) {
    postStatus("error", error?.message || "Error de transcripción");
    self.postMessage({
      type: "error",
      id,
      message: error?.message || "Error de transcripción"
    });
  }
};
