import { KokoroTTS } from "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js";

const originalWarn = console.warn.bind(console);
console.warn = (...args) => {
  const text = String(args?.[0] || "").toLowerCase();
  if (text.includes("unable to determine content-length from response headers")) {
    return;
  }
  originalWarn(...args);
};

const DEFAULT_MODEL_ID = "onnx-community/Kokoro-82M-ONNX";
const DEFAULT_DTYPE = "q8";

let tts = null;
let voices = [];
let voiceCatalog = [];
let initPromise = null;

function buildVoiceCatalog() {
  const source = tts?.voices || {};
  voiceCatalog = Object.entries(source).map(([id, meta]) => ({
    id,
    language: String(meta?.language || "").toLowerCase(),
    gender: String(meta?.gender || "").toLowerCase(),
    name: String(meta?.name || id)
  }));
  voices = voiceCatalog.map((v) => v.id);
}

function postStatus(status, detail) {
  self.postMessage({ type: "status", status, detail: detail || "" });
}

async function ensureInitialized(options = {}) {
  if (tts) return;
  if (initPromise) return initPromise;

  const modelId = options.modelId || DEFAULT_MODEL_ID;
  const dtype = options.dtype || DEFAULT_DTYPE;

  initPromise = (async () => {
    postStatus("loading", "Cargando modelo Kokoro...");

    tts = await KokoroTTS.from_pretrained(modelId, {
      dtype,
      device: "wasm",
      progress_callback: (progress) => {
        const pct = typeof progress?.progress === "number" ? Math.round(progress.progress) : null;
        postStatus("loading", pct != null ? `Cargando modelo ${pct}%` : "Descargando artefactos del modelo...");
      }
    });

    buildVoiceCatalog();
    postStatus("ready", "Modelo Kokoro listo");
  })();

  return initPromise;
}

async function synthesize({ text, voice, speed }) {
  await ensureInitialized();
  postStatus("generating", "Generando audio...");

  const audio = await tts.generate(text, { voice, speed });
  const blob = typeof audio?.toBlob === "function"
    ? audio.toBlob()
    : new Blob([audio?.toWav?.() || new ArrayBuffer(0)], { type: "audio/wav" });

  const wavBuffer = await blob.arrayBuffer();
  postStatus("generated", "Audio generado");
  return wavBuffer;
}

self.onmessage = async (event) => {
  const { id, type, payload } = event.data || {};

  try {
    if (type === "init") {
      await ensureInitialized(payload || {});
      self.postMessage({ type: "inited", id, voices, voiceCatalog });
      return;
    }

    if (type === "voices") {
      await ensureInitialized();
      self.postMessage({ type: "voices", id, voices, voiceCatalog });
      return;
    }

    if (type === "synthesize") {
      const wavBuffer = await synthesize(payload || {});
      self.postMessage({ type: "synthesized", id, wavBuffer }, [wavBuffer]);
      return;
    }

    if (type === "dispose") {
      tts = null;
      voices = [];
      voiceCatalog = [];
      initPromise = null;
      self.postMessage({ type: "disposed", id });
    }
  } catch (error) {
    postStatus("error", error?.message || "Error desconocido en Kokoro Worker");
    self.postMessage({
      type: "error",
      id,
      message: error?.message || "Error desconocido"
    });
  }
};
