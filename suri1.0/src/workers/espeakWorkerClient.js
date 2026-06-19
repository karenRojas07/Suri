const DEFAULT_VOICE = "es";
const DEFAULT_RATE_WPM = 170;
const DEFAULT_PITCH = 50;
const DEFAULT_AMPLITUDE = 100;

const MESPEAK_SCRIPT_URL = new URL("../../assets/vendor/mespeak/mespeak.js", self.location.href).href;
const MESPEAK_CONFIG_URL = new URL("../../assets/vendor/mespeak/mespeak_config.json", self.location.href).href;
const MESPEAK_VOICE_URLS = {
  "es-la": new URL("../../assets/vendor/mespeak/voices/es-la.json", self.location.href).href,
  "es": new URL("../../assets/vendor/mespeak/voices/es.json", self.location.href).href
};

let initPromise = null;
let meSpeakRef = null;
let loadedVoices = new Set();
let defaultVoice = DEFAULT_VOICE;

function postStatus(status, detail) {
  self.postMessage({ type: "status", status, detail: detail || "" });
}

function normalizeVoice(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return DEFAULT_VOICE;
  if (raw.startsWith("es-la")) return "es-la";
  if (raw.startsWith("es")) return "es";
  return "es";
}

function normalizeRate(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return DEFAULT_RATE_WPM;
  return Math.max(90, Math.min(320, Math.round(n)));
}

function sanitizeText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 4000);
}

function installWorkerDomStubs() {
  if (typeof self.window === "undefined") {
    self.window = self;
  }

  if (typeof self.document !== "undefined") return;

  const fakeNode = {
    appendChild: () => {},
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  self.document = {
    currentScript: { src: MESPEAK_SCRIPT_URL },
    getElementsByTagName: () => [fakeNode],
    createElement: () => ({
      canPlayType: () => "",
      addEventListener: () => {},
      removeEventListener: () => {},
      load: () => {},
      play: () => Promise.resolve(),
      pause: () => {}
    })
  };
}

function loadScriptOnce() {
  installWorkerDomStubs();

  try {
    self.importScripts(MESPEAK_SCRIPT_URL);
  } catch (error) {
    throw new Error(`No se pudo cargar meSpeak en Worker: ${error?.message || String(error)}`);
  }

  const meSpeakGlobal = self.meSpeak || globalThis.meSpeak || null;
  if (!meSpeakGlobal || typeof meSpeakGlobal.speak !== "function") {
    throw new Error("meSpeak no quedo disponible dentro del Worker");
  }

  meSpeakRef = meSpeakGlobal;
}

function waitForCondition(check, timeoutMs = 9000, intervalMs = 120) {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const tick = () => {
      let ok = false;
      try {
        ok = Boolean(check());
      } catch {
        ok = false;
      }

      if (ok) {
        resolve(true);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        reject(new Error("Timeout esperando inicializacion de meSpeak en Worker"));
        return;
      }

      setTimeout(tick, intervalMs);
    };

    tick();
  });
}

function loadVoice(voiceId) {
  const target = normalizeVoice(voiceId);
  if (loadedVoices.has(target)) {
    defaultVoice = target;
    return Promise.resolve(target);
  }

  const url = MESPEAK_VOICE_URLS[target] || MESPEAK_VOICE_URLS[DEFAULT_VOICE];

  return new Promise((resolve, reject) => {
    try {
      meSpeakRef.loadVoice(url, (success, message) => {
        if (!success) {
          reject(new Error(message || `No se pudo cargar voz ${target} en Worker`));
          return;
        }

        loadedVoices.add(target);
        defaultVoice = target;
        resolve(target);
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function ensureInitialized(payload = {}) {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    postStatus("loading", "Cargando eSpeak cliente en Web Worker...");

    loadScriptOnce();

    // loadConfig existe en meSpeak pero algunos builds lo resuelven internamente.
    try {
      meSpeakRef.loadConfig?.(MESPEAK_CONFIG_URL);
    } catch {
      // Continuar: la carga de voz suele ser suficiente.
    }

    await waitForCondition(() => Boolean(meSpeakRef && meSpeakRef.speak), 6000, 100);

    const voice = normalizeVoice(payload.voice);
    await loadVoice(voice);

    postStatus("ready", `eSpeak Worker listo (${defaultVoice.toUpperCase()})`);
  })().catch((error) => {
    initPromise = null;
    throw error;
  });

  return initPromise;
}

async function synthesize(payload = {}) {
  await ensureInitialized(payload);
  postStatus("generating", "Generando audio eSpeak en Worker...");

  const text = sanitizeText(payload.text);
  if (!text) {
    throw new Error("No se recibio texto para sintetizar en eSpeak Worker");
  }

  const voice = normalizeVoice(payload.voice || defaultVoice);
  const rateWpm = normalizeRate(payload.rateWpm);

  if (!loadedVoices.has(voice)) {
    await loadVoice(voice);
  }

  const wav = await new Promise((resolve, reject) => {
    try {
      const id = meSpeakRef.speak(text, {
        voice,
        speed: rateWpm,
        pitch: DEFAULT_PITCH,
        amplitude: DEFAULT_AMPLITUDE,
        rawdata: "array"
      }, (success, _jobId, data) => {
        if (!success || !data) {
          reject(new Error("eSpeak Worker no devolvio datos de audio"));
          return;
        }
        resolve(data);
      });

      if (!id) {
        reject(new Error("eSpeak Worker no inicio la sintesis"));
      }
    } catch (error) {
      reject(error);
    }
  });

  let uint8 = null;
  if (wav instanceof Uint8Array) {
    uint8 = wav;
  } else if (wav instanceof ArrayBuffer) {
    uint8 = new Uint8Array(wav);
  } else if (Array.isArray(wav)) {
    uint8 = new Uint8Array(wav);
  }

  if (!uint8 || !uint8.byteLength) {
    throw new Error("eSpeak Worker devolvio audio vacio");
  }

  const wavBuffer = uint8.buffer.slice(uint8.byteOffset, uint8.byteOffset + uint8.byteLength);
  postStatus("generated", "Audio eSpeak generado en Worker");
  return wavBuffer;
}

function stopSynthesis() {
  try {
    meSpeakRef?.stop?.();
  } catch {
    // Ignorar errores de parada.
  }
}

self.onmessage = async (event) => {
  const { id, type, payload } = event.data || {};

  try {
    if (type === "init") {
      await ensureInitialized(payload || {});
      self.postMessage({ type: "inited", id });
      return;
    }

    if (type === "synthesize") {
      const wavBuffer = await synthesize(payload || {});
      self.postMessage({ type: "synthesized", id, wavBuffer }, [wavBuffer]);
      return;
    }

    if (type === "stop") {
      stopSynthesis();
      self.postMessage({ type: "stopped", id });
    }
  } catch (error) {
    const message = error?.message || "Error desconocido en eSpeak Worker";
    postStatus("error", message);
    self.postMessage({ type: "error", id, message });
  }
};
