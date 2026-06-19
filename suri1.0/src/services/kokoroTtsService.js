const PREFS_KEY = "suriTtsPrefs";
const PREFS_VERSION = 2;
const TTS_WARM_KEY = "suriKokoroWarmV1";
const IS_ANIMATIONS_PAGE = typeof window !== "undefined"
  ? /\/suri_animaciones\.html$/i.test(window.location.pathname)
  : false;
const TTS_MODEL_CONFIG_KEYS = IS_ANIMATIONS_PAGE
  ? ["suriAnimacionesConfig", "suriAvatarConfig"]
  : ["suriAvatarConfig", "suriAnimacionesConfig"];
const ALLOWED_DTYPE_VALUES = new Set(["fp32", "fp16", "q8", "q4", "q4f16", "q8f16", "uint8", "uint8f16", "quantized"]);
const ALLOWED_TTS_ENGINES = new Set(["browser", "kokoro", "espeak-wasm", "mespeak-js"]);
const DEFAULT_TTS_ENGINE = "espeak-wasm";
const DEFAULT_MODEL_OPTIONS = {
  modelId: "onnx-community/Kokoro-82M-ONNX",
  dtype: "q8"
};
const DEFAULT_ESPEAK_OPTIONS = {
  voice: "es",
  rateWpm: 170
};
const DEFAULT_MESPEAK_OPTIONS = {
  voice: "es-la",
  rateWpm: 170,
  pitch: 50,
  amplitude: 100
};
const MESPEAK_SCRIPT_URL = "./assets/vendor/mespeak/mespeak.js";
const MESPEAK_CONFIG_URL = "mespeak_config.json";
const MESPEAK_VOICE_URL_CANDIDATES = [
  "voices/es-la.json",
  "voices/es.json"
];

function toUniqueList(values) {
  const out = [];
  const seen = new Set();
  for (const value of values) {
    const key = String(value || "").trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  return out;
}

function readStoredJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function readFirstStoredJson(keys = []) {
  for (const key of keys) {
    const data = readStoredJson(key);
    if (data && typeof data === "object") {
      return data;
    }
  }
  return null;
}

function normalizeTtsEngine(value, fallbackModelId = "") {
  const raw = String(value || "").trim().toLowerCase();
  if (ALLOWED_TTS_ENGINES.has(raw)) return raw;

  const modelHint = String(fallbackModelId || "").toLowerCase();
  if (modelHint.includes("mespeak")) return "mespeak-js";
  if (modelHint.includes("espeak")) return "espeak-wasm";
  if (modelHint.includes("browser") || modelHint.includes("webspeech")) return "browser";
  return DEFAULT_TTS_ENGINE;
}

function getConfiguredTtsOptions() {
  const storedConfig = readFirstStoredJson(TTS_MODEL_CONFIG_KEYS);
  const config = storedConfig?.tts || storedConfig?.voice?.tts || {};
  const modelId = String(config?.modelId || config?.model || DEFAULT_MODEL_OPTIONS.modelId).trim();
  const dtype = String(config?.dtype || DEFAULT_MODEL_OPTIONS.dtype).trim().toLowerCase();
  const engine = normalizeTtsEngine(config?.engine, modelId);
  const espeakVoice = String(config?.espeakVoice || config?.voiceCode || DEFAULT_ESPEAK_OPTIONS.voice).trim().toLowerCase();
  const espeakRateRaw = Number(config?.espeakRateWpm || config?.rateWpm || DEFAULT_ESPEAK_OPTIONS.rateWpm);
  const espeakRateWpm = Number.isFinite(espeakRateRaw)
    ? Math.max(90, Math.min(320, Math.round(espeakRateRaw)))
    : DEFAULT_ESPEAK_OPTIONS.rateWpm;
  const meSpeakVoice = String(config?.meSpeakVoice || config?.mespeakVoice || DEFAULT_MESPEAK_OPTIONS.voice).trim().toLowerCase();
  const meSpeakRateRaw = Number(config?.meSpeakRateWpm || config?.mespeakRateWpm || DEFAULT_MESPEAK_OPTIONS.rateWpm);
  const meSpeakRateWpm = Number.isFinite(meSpeakRateRaw)
    ? Math.max(90, Math.min(320, Math.round(meSpeakRateRaw)))
    : DEFAULT_MESPEAK_OPTIONS.rateWpm;
  const meSpeakPitchRaw = Number(config?.meSpeakPitch || config?.mespeakPitch || DEFAULT_MESPEAK_OPTIONS.pitch);
  const meSpeakPitch = Number.isFinite(meSpeakPitchRaw)
    ? Math.max(0, Math.min(99, Math.round(meSpeakPitchRaw)))
    : DEFAULT_MESPEAK_OPTIONS.pitch;
  const meSpeakAmplitudeRaw = Number(config?.meSpeakAmplitude || config?.mespeakAmplitude || DEFAULT_MESPEAK_OPTIONS.amplitude);
  const meSpeakAmplitude = Number.isFinite(meSpeakAmplitudeRaw)
    ? Math.max(0, Math.min(200, Math.round(meSpeakAmplitudeRaw)))
    : DEFAULT_MESPEAK_OPTIONS.amplitude;

  return {
    engine,
    modelId: modelId || DEFAULT_MODEL_OPTIONS.modelId,
    dtype: ALLOWED_DTYPE_VALUES.has(dtype) ? dtype : DEFAULT_MODEL_OPTIONS.dtype,
    espeakVoice: espeakVoice || DEFAULT_ESPEAK_OPTIONS.voice,
    espeakRateWpm,
    meSpeakVoice: meSpeakVoice || DEFAULT_MESPEAK_OPTIONS.voice,
    meSpeakRateWpm,
    meSpeakPitch,
    meSpeakAmplitude
  };
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Documento no disponible para cargar script"));
      return;
    }

    const existing = document.querySelector(`script[data-suri-src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "1") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`No se pudo cargar script: ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.setAttribute("data-suri-src", src);
    script.addEventListener("load", () => {
      script.setAttribute("data-loaded", "1");
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(`No se pudo cargar script: ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

function waitForCondition(fn, timeoutMs = 6000, intervalMs = 120) {
  return new Promise((resolve, reject) => {
    const started = Date.now();

    const tick = () => {
      let ok = false;
      try {
        ok = Boolean(fn());
      } catch {
        ok = false;
      }

      if (ok) {
        resolve(true);
        return;
      }

      if (Date.now() - started >= timeoutMs) {
        reject(new Error("Timeout esperando inicializacion de meSpeak"));
        return;
      }

      setTimeout(tick, intervalMs);
    };

    tick();
  });
}

const TTS_OPTIONS = getConfiguredTtsOptions();
const MODEL_OPTIONS = {
  modelId: TTS_OPTIONS.modelId,
  dtype: TTS_OPTIONS.dtype
};

const DEFAULT_PREFS = {
  voice: "am_liam",
  speed: 1.34,
  autoRead: true,
  fallbackEnabled: true,
  fallbackLang: "es-MX",
  fallbackPitch: 1.32,
  prefsVersion: PREFS_VERSION
};

const MALE_VOICE_HINTS = [
  "raul",
  "pablo",
  "jorge",
  "enrique",
  "miguel",
  "alejandro",
  "carlos",
  "david",
  "alvaro",
  "raul",
  "male",
  "man"
];

const SPANISH_VOICE_HINTS = [
  "spanish",
  "espanol",
  "español",
  "castellano"
];

const SPANISH_TEXT_HINTS = [
  " que ",
  " de ",
  " la ",
  " el ",
  " y ",
  " en ",
  " por ",
  " para ",
  " una ",
  " un ",
  " con ",
  " no ",
  " gracias",
  "hola",
  "buenos",
  "buenas",
  "respuesta",
  "pregunta"
];

function safeLower(value) {
  return String(value || "").toLowerCase();
}

function getSpeechSynthesisVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices();
}

function isSpanishSpeechVoice(voice) {
  const lang = safeLower(voice?.lang);
  return lang === "es" || lang.startsWith("es-");
}

function isLikelyMaleSpeechVoice(voice) {
  const haystack = `${voice?.name || ""} ${voice?.voiceURI || ""}`.toLowerCase();
  return MALE_VOICE_HINTS.some((hint) => haystack.includes(hint));
}

function isSpanishVoiceEntry(entry) {
  const lang = safeLower(entry?.language || entry?.lang);
  const haystack = `${entry?.id || ""} ${entry?.name || ""} ${entry?.language || ""}`.toLowerCase();
  return lang === "es"
    || lang.startsWith("es-")
    || SPANISH_VOICE_HINTS.some((hint) => haystack.includes(hint));
}

function isLikelySpanishText(text) {
  const value = String(text || "").toLowerCase();
  if (!value) return false;
  if (/[áéíóúñ¿¡]/i.test(value)) return true;
  return SPANISH_TEXT_HINTS.some((hint) => value.includes(hint));
}

function pickPreferredBrowserVoice(preferredLang = "es-ES") {
  const voices = getSpeechSynthesisVoices();
  if (!voices.length) return null;

  const targetLang = safeLower(preferredLang);
  const spanishVoices = voices.filter(isSpanishSpeechVoice);
  const maleSpanishVoices = spanishVoices.filter(isLikelyMaleSpeechVoice);

  const exactMale = maleSpanishVoices.find((voice) => safeLower(voice.lang) === targetLang);
  if (exactMale) return exactMale;

  if (maleSpanishVoices.length) return maleSpanishVoices[0];

  const exactSpanish = spanishVoices.find((voice) => safeLower(voice.lang) === targetLang);
  if (exactSpanish) return exactSpanish;

  if (spanishVoices.length) return spanishVoices[0];

  return voices.find((voice) => safeLower(voice.lang) === targetLang) || voices[0] || null;
}

function splitLongText(text, maxLen = 260) {
  const clean = String(text || "").trim();
  if (!clean) return [];
  if (clean.length <= maxLen) return [clean];

  const pieces = clean
    .split(/(?<=[.!?\n])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const chunks = [];
  let current = "";

  for (const part of pieces) {
    if ((current + " " + part).trim().length <= maxLen) {
      current = (current + " " + part).trim();
      continue;
    }

    if (current) chunks.push(current);

    if (part.length <= maxLen) {
      current = part;
      continue;
    }

    for (let i = 0; i < part.length; i += maxLen) {
      chunks.push(part.slice(i, i + maxLen));
    }
    current = "";
  }

  if (current) chunks.push(current);
  return chunks;
}

class KokoroTtsService {
  constructor() {
    this.worker = null;
    this.requestId = 0;
    this.pending = new Map();
    this.initPromise = null;
    this.espeakWorker = null;
    this.espeakRequestId = 0;
    this.espeakPending = new Map();
    this.espeakInitPromise = null;
    this.meSpeakInitPromise = null;
    this.userInteracted = false;
    this.currentAudio = null;
    this.currentText = "";
    this.currentEngine = null;
    this.currentPlaybackResolve = null;
    this.currentPlaybackReject = null;
    this.currentBlobUrl = null;
    this.status = "idle";
    this.statusDetail = "Listo";
    this.voices = [];
    this.voiceCatalog = [];
    this.listeners = new Set();
    this.isWarm = localStorage.getItem(TTS_WARM_KEY) === "1";
    this.traceSeq = 0;
    this.lastTrace = null;
    this.ttsOptions = { ...TTS_OPTIONS };

    this.prefs = this.loadPrefs();
    this.installUserGestureHooks();
  }

  logDebug(message, meta) {
    if (typeof console === "undefined") return;
    if (meta !== undefined) {
      console.info(`[SURI TTS] ${message}`, meta);
      return;
    }
    console.info(`[SURI TTS] ${message}`);
  }

  logWarn(message, meta) {
    if (typeof console === "undefined") return;
    if (meta !== undefined) {
      console.warn(`[SURI TTS] ${message}`, meta);
      return;
    }
    console.warn(`[SURI TTS] ${message}`);
  }

  logError(message, error, meta) {
    if (typeof console === "undefined") return;
    console.error(`[SURI TTS] ${message}`, {
      error: error?.message || String(error || "desconocido"),
      stack: error?.stack || null,
      ...(meta || {})
    });
  }

  startTrace(text, options = {}) {
    return {
      id: ++this.traceSeq,
      startedAt: new Date().toISOString(),
      textLength: String(text || "").length,
      options,
      steps: []
    };
  }

  traceStep(trace, step, data = {}) {
    if (!trace) return;
    const entry = {
      at: new Date().toISOString(),
      step,
      ...data
    };
    trace.steps.push(entry);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("suri:tts-trace-step", {
        detail: {
          traceId: trace.id,
          step,
          entry
        }
      }));
    }
  }

  finishTrace(trace, outcome, data = {}) {
    if (!trace) return;

    trace.endedAt = new Date().toISOString();
    trace.outcome = outcome;
    trace.engine = this.currentEngine || null;
    trace.result = data;

    this.lastTrace = trace;
    if (typeof window !== "undefined") {
      window.__suriTtsLastTrace = trace;
    }

    if (typeof console !== "undefined") {
      console.groupCollapsed(`[SURI TTS TRACE #${trace.id}] ${outcome}`);
      console.info("Resumen", {
        engine: trace.engine,
        textLength: trace.textLength,
        startedAt: trace.startedAt,
        endedAt: trace.endedAt,
        steps: trace.steps.length
      });
      console.table(trace.steps);
      if (data && Object.keys(data).length) {
        console.info("Resultado", data);
      }
      console.groupEnd();
    }
  }

  loadPrefs() {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      if (!raw) return { ...DEFAULT_PREFS };
      const parsed = JSON.parse(raw);

      const parsedVersion = Number(parsed?.prefsVersion || 0);
      if (parsedVersion !== PREFS_VERSION) {
        return {
          ...DEFAULT_PREFS,
          autoRead: parsed?.autoRead ?? DEFAULT_PREFS.autoRead,
          fallbackEnabled: parsed?.fallbackEnabled ?? DEFAULT_PREFS.fallbackEnabled,
          prefsVersion: PREFS_VERSION
        };
      }

      return {
        ...DEFAULT_PREFS,
        ...parsed,
        speed: Number.isFinite(parsed?.speed) ? Number(parsed.speed) : DEFAULT_PREFS.speed,
        fallbackPitch: Number.isFinite(parsed?.fallbackPitch) ? Number(parsed.fallbackPitch) : DEFAULT_PREFS.fallbackPitch,
        prefsVersion: PREFS_VERSION
      };
    } catch {
      return { ...DEFAULT_PREFS };
    }
  }

  savePrefs() {
    this.prefs.prefsVersion = PREFS_VERSION;
    localStorage.setItem(PREFS_KEY, JSON.stringify(this.prefs));
  }

  installUserGestureHooks() {
    const unlock = () => {
      this.userInteracted = true;
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("keydown", unlock);
    };

    document.addEventListener("pointerdown", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });
  }

  notifyStatus(status, detail) {
    this.status = status;
    this.statusDetail = detail || "";
    for (const fn of this.listeners) {
      fn({ status, detail: this.statusDetail, engine: this.currentEngine });
    }
  }

  onStatusChange(fn) {
    this.listeners.add(fn);
    fn({ status: this.status, detail: this.statusDetail, engine: this.currentEngine });
    return () => this.listeners.delete(fn);
  }

  getStatus() {
    return {
      status: this.status,
      detail: this.statusDetail,
      isPlaying: this.status === "playing",
      isPaused: this.status === "paused",
      text: this.currentText,
      engine: this.currentEngine,
      traceId: this.lastTrace?.id || null
    };
  }

  getLastTrace() {
    return this.lastTrace;
  }

  getPreferences() {
    return { ...this.prefs };
  }

  getVoices() {
    return [...this.voices];
  }

  getVoiceCatalog() {
    return [...this.voiceCatalog];
  }

  getPreferredEngine() {
    return normalizeTtsEngine(this.ttsOptions?.engine, this.ttsOptions?.modelId);
  }

  getEspeakVoice() {
    return String(this.ttsOptions?.espeakVoice || DEFAULT_ESPEAK_OPTIONS.voice).trim() || DEFAULT_ESPEAK_OPTIONS.voice;
  }

  getEspeakRateWpm() {
    const value = Number(this.ttsOptions?.espeakRateWpm || DEFAULT_ESPEAK_OPTIONS.rateWpm);
    return Number.isFinite(value) ? Math.max(90, Math.min(320, Math.round(value))) : DEFAULT_ESPEAK_OPTIONS.rateWpm;
  }

  getMeSpeakVoice() {
    return String(this.ttsOptions?.meSpeakVoice || DEFAULT_MESPEAK_OPTIONS.voice).trim() || DEFAULT_MESPEAK_OPTIONS.voice;
  }

  getMeSpeakRateWpm() {
    const value = Number(this.ttsOptions?.meSpeakRateWpm || DEFAULT_MESPEAK_OPTIONS.rateWpm);
    return Number.isFinite(value) ? Math.max(90, Math.min(320, Math.round(value))) : DEFAULT_MESPEAK_OPTIONS.rateWpm;
  }

  getMeSpeakPitch() {
    const value = Number(this.ttsOptions?.meSpeakPitch || DEFAULT_MESPEAK_OPTIONS.pitch);
    return Number.isFinite(value) ? Math.max(0, Math.min(99, Math.round(value))) : DEFAULT_MESPEAK_OPTIONS.pitch;
  }

  getMeSpeakAmplitude() {
    const value = Number(this.ttsOptions?.meSpeakAmplitude || DEFAULT_MESPEAK_OPTIONS.amplitude);
    return Number.isFinite(value) ? Math.max(0, Math.min(200, Math.round(value))) : DEFAULT_MESPEAK_OPTIONS.amplitude;
  }

  findSpanishVoice() {
    return this.voiceCatalog.find((v) => isSpanishVoiceEntry(v));
  }

  isCurrentVoiceSpanish() {
    const selected = this.voiceCatalog.find((v) => v.id === this.prefs.voice);
    if (!selected) return false;
    return isSpanishVoiceEntry(selected);
  }

  applySpanishVoicePreference() {
    const spanish = this.findSpanishVoice();
    if (spanish && this.prefs.voice !== spanish.id) {
      this.prefs.voice = spanish.id;
      this.savePrefs();
      this.notifyStatus("ready", `Voz española seleccionada: ${spanish.id}`);
    }
  }

  ensureValidKokoroVoice() {
    const availableVoices = this.getVoices();
    if (!availableVoices.length) {
      return this.prefs.voice || DEFAULT_PREFS.voice;
    }

    if (availableVoices.includes(this.prefs.voice)) {
      return this.prefs.voice;
    }

    const previousVoice = this.prefs.voice;
    const spanish = this.findSpanishVoice();
    const nextVoice = spanish?.id || availableVoices[0] || DEFAULT_PREFS.voice;

    this.prefs.voice = nextVoice;
    this.savePrefs();
    this.logWarn("Voz Kokoro no disponible; se ajusta automaticamente", {
      previousVoice,
      nextVoice,
      availableVoices: availableVoices.length
    });

    return nextVoice;
  }

  setVoice(voice) {
    this.prefs.voice = voice || DEFAULT_PREFS.voice;
    this.savePrefs();
  }

  setSpeed(speed) {
    const safe = Math.max(0.7, Math.min(1.6, Number(speed) || 1));
    this.prefs.speed = safe;
    this.savePrefs();
  }

  setAutoRead(enabled) {
    this.prefs.autoRead = Boolean(enabled);
    this.savePrefs();
  }

  setFallbackEnabled(enabled) {
    this.prefs.fallbackEnabled = Boolean(enabled);
    this.savePrefs();
  }

  setFallbackLang(lang) {
    const value = String(lang || "").trim();
    this.prefs.fallbackLang = value || DEFAULT_PREFS.fallbackLang;
    this.savePrefs();
  }

  setFallbackPitch(pitch) {
    const safe = Math.max(0.5, Math.min(2, Number(pitch) || 1));
    this.prefs.fallbackPitch = safe;
    this.savePrefs();
  }

  async ensureWorkerInitialized() {
    if (this.initPromise) return this.initPromise;

    this.worker = new Worker("./src/workers/kokoroWorker.js", { type: "module" });

    this.worker.onmessage = (event) => {
      const msg = event.data || {};

      if (msg.type === "status") {
        this.notifyStatus(msg.status, msg.detail);
        return;
      }

      if (msg.type === "inited" || msg.type === "voices") {
        this.voices = Array.isArray(msg.voices) ? msg.voices : this.voices;
        this.voiceCatalog = Array.isArray(msg.voiceCatalog) ? msg.voiceCatalog : this.voiceCatalog;
        this.applySpanishVoicePreference();
      }

      const request = this.pending.get(msg.id);
      if (!request) return;

      if (msg.type === "error") {
        this.pending.delete(msg.id);
        request.reject(new Error(msg.message || "Error en Kokoro"));
        return;
      }

      if (["inited", "synthesized", "voices", "disposed"].includes(msg.type)) {
        this.pending.delete(msg.id);
        request.resolve(msg);
      }
    };

    this.initPromise = this.sendToWorker("init", MODEL_OPTIONS)
      .then((response) => {
        this.voices = Array.isArray(response.voices) ? response.voices : this.voices;
        this.voiceCatalog = Array.isArray(response.voiceCatalog) ? response.voiceCatalog : this.voiceCatalog;
        this.applySpanishVoicePreference();
        this.isWarm = true;
        localStorage.setItem(TTS_WARM_KEY, "1");
        this.logDebug("Modelo Kokoro inicializado", {
          modelId: MODEL_OPTIONS.modelId,
          dtype: MODEL_OPTIONS.dtype,
          voiceCount: this.voiceCatalog.length
        });
        return response;
      })
      .catch((error) => {
        this.notifyStatus("error", `Kokoro no disponible: ${error.message}`);
        this.logError("Fallo al inicializar Kokoro", error, {
          modelId: MODEL_OPTIONS.modelId,
          dtype: MODEL_OPTIONS.dtype
        });
        this.initPromise = null;
        throw error;
      });

    return this.initPromise;
  }

  async ensureEspeakWorkerInitialized() {
    if (this.espeakInitPromise) return this.espeakInitPromise;

    this.espeakInitPromise = Promise.resolve().then(() => {
      if (!("speechSynthesis" in window)) {
        throw new Error("Web Speech no disponible para perfil eSpeak");
      }

      this.espeakWorker?.terminate?.();
      this.espeakWorker = null;
      this.espeakPending.clear();

      this.logDebug("Perfil eSpeak inicializado con backend Web Speech", {
        voice: this.getEspeakVoice(),
        rateWpm: this.getEspeakRateWpm()
      });
      this.notifyStatus("ready", "Perfil eSpeak listo (Web Speech)");
      return true;
    }).then(() => {
      this.isWarm = true;
      localStorage.setItem(TTS_WARM_KEY, "1");
      return true;
    }).catch((error) => {
      this.notifyStatus("error", `eSpeak no disponible: ${error.message}`);
      this.logError("Fallo al inicializar perfil eSpeak (Web Speech)", error, {
        voice: this.getEspeakVoice(),
        rateWpm: this.getEspeakRateWpm()
      });
      this.espeakWorker?.terminate?.();
      this.espeakWorker = null;
      this.espeakPending.clear();
      this.espeakInitPromise = null;
      throw error;
    });

    return this.espeakInitPromise;
  }

  async ensureMeSpeakInitialized() {
    if (this.meSpeakInitPromise) return this.meSpeakInitPromise;

    this.meSpeakInitPromise = (async () => {
      this.currentEngine = "mespeak";
      this.notifyStatus("loading", "Cargando meSpeak.js...");

      await loadScriptOnce(MESPEAK_SCRIPT_URL);

      const meSpeak = window.meSpeak;
      if (!meSpeak || typeof meSpeak.loadConfig !== "function") {
        throw new Error("meSpeak.js no esta disponible despues de cargar el script");
      }

      // En este build, loadConfig es un no-op; usar loadCustomConfig si existe.
      if (typeof meSpeak.loadCustomConfig === "function") {
        await new Promise((resolve, reject) => {
          let settled = false;
          const done = (ok, message) => {
            if (settled) return;
            settled = true;
            if (ok) {
              resolve(true);
              return;
            }
            reject(new Error(message || "No se pudo cargar configuracion meSpeak"));
          };

          try {
            meSpeak.loadCustomConfig(MESPEAK_CONFIG_URL, (success, message) => done(success, message));
            setTimeout(() => done(true), 1200);
          } catch (error) {
            reject(error);
          }
        });
      } else if (!meSpeak.isConfigLoaded()) {
        meSpeak.loadConfig(MESPEAK_CONFIG_URL);
        await waitForCondition(() => meSpeak.isConfigLoaded(), 9000, 120);
      }

      const configuredVoice = this.getMeSpeakVoice();
      const runtimeBase = new URL("./assets/vendor/mespeak/", window.location.href);
      const voiceCandidates = toUniqueList([
        configuredVoice,
        "es-la",
        "es",
        `voices/${configuredVoice}.json`,
        ...MESPEAK_VOICE_URL_CANDIDATES,
        new URL(`voices/${configuredVoice}.json`, runtimeBase).href,
        new URL("voices/es-la.json", runtimeBase).href,
        new URL("voices/es.json", runtimeBase).href
      ]);

      const tryLoadVoice = (voiceUrl) => new Promise((resolve, reject) => {
        try {
          meSpeak.loadVoice(voiceUrl, (success, message) => {
            if (success) {
              resolve(message || voiceUrl);
              return;
            }
            reject(new Error(message || `No se pudo cargar voz ${voiceUrl}`));
          });
        } catch (error) {
          reject(error);
        }
      });

      let selectedVoiceId = "";
      let lastVoiceError = null;
      for (const voiceUrl of voiceCandidates) {
        try {
          selectedVoiceId = await tryLoadVoice(voiceUrl);
          break;
        } catch (error) {
          lastVoiceError = error;
        }
      }

      if (!selectedVoiceId) {
        throw new Error(
          `No se pudo cargar voz meSpeak en espanol: ${lastVoiceError?.message || "desconocido"}. `
          + `Candidatos: ${voiceCandidates.join(", ")}`
        );
      }

      meSpeak.setDefaultVoice(selectedVoiceId);

      this.isWarm = true;
      localStorage.setItem(TTS_WARM_KEY, "1");
      this.logDebug("meSpeak inicializado", {
        voice: selectedVoiceId,
        canPlay: Boolean(meSpeak.canPlay?.())
      });
      this.notifyStatus("ready", `meSpeak listo (${selectedVoiceId})`);
    })()
      .catch((error) => {
        this.notifyStatus("error", `meSpeak no disponible: ${error.message}`);
        this.logError("Fallo al inicializar meSpeak", error, {
          script: MESPEAK_SCRIPT_URL,
          config: MESPEAK_CONFIG_URL
        });
        this.meSpeakInitPromise = null;
        throw error;
      });

    return this.meSpeakInitPromise;
  }

  async preload() {
    if (this.getPreferredEngine() === "mespeak-js") {
      await this.ensureMeSpeakInitialized();
      return;
    }

    if (this.getPreferredEngine() === "espeak-wasm") {
      await this.ensureEspeakWorkerInitialized();
      return;
    }

    await this.ensureWorkerInitialized();
    await this.requestVoices();
  }

  hasWarmCacheHint() {
    return this.isWarm;
  }

  sendToWorker(type, payload) {
    if (!this.worker) throw new Error("Worker no inicializado");

    const id = ++this.requestId;
    const p = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });

    this.worker.postMessage({ id, type, payload });
    return p;
  }

  sendToEspeakWorker(type, payload) {
    if (!this.espeakWorker) throw new Error("Worker eSpeak no inicializado");

    const id = ++this.espeakRequestId;
    const p = new Promise((resolve, reject) => {
      this.espeakPending.set(id, { resolve, reject });
    });

    this.espeakWorker.postMessage({ id, type, payload });
    return p;
  }

  async requestVoices() {
    try {
      await this.ensureWorkerInitialized();
      const response = await this.sendToWorker("voices", {});
      this.voices = Array.isArray(response.voices) ? response.voices : this.voices;
      this.voiceCatalog = Array.isArray(response.voiceCatalog) ? response.voiceCatalog : this.voiceCatalog;
      this.applySpanishVoicePreference();
      return this.getVoices();
    } catch {
      return [];
    }
  }

  async playBlob(blob, engine = "kokoro") {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }

    if (this.currentBlobUrl) {
      URL.revokeObjectURL(this.currentBlobUrl);
      this.currentBlobUrl = null;
    }

    const url = URL.createObjectURL(blob);
    this.currentBlobUrl = url;
    const audio = new Audio(url);
    this.currentAudio = audio;
    this.currentEngine = engine;

    this.notifyStatus("playing", "Reproduciendo audio");

    try {
      await audio.play();
      await new Promise((resolve, reject) => {
        this.currentPlaybackResolve = resolve;
        this.currentPlaybackReject = reject;
        audio.onended = () => resolve();
        audio.onerror = () => reject(new Error("No se pudo reproducir el audio generado"));
      });
    } finally {
      if (this.currentBlobUrl === url) {
        URL.revokeObjectURL(url);
        this.currentBlobUrl = null;
      }
      this.currentPlaybackResolve = null;
      this.currentPlaybackReject = null;
      if (this.currentAudio === audio) {
        this.currentAudio = null;
      }
    }
  }

  pause() {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
      this.notifyStatus("paused", "Lectura pausada");
      return true;
    }

    if ("speechSynthesis" in window && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      this.currentEngine = this.currentEngine || "browser";
      window.speechSynthesis.pause();
      this.notifyStatus("paused", "Lectura pausada");
      return true;
    }

    return false;
  }

  resume() {
    if (this.currentAudio && this.currentAudio.paused) {
      const playPromise = this.currentAudio.play();
      this.notifyStatus("playing", "Reproduciendo audio");
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch((error) => {
          this.notifyStatus("error", error?.message || "No se pudo reanudar la reproducción");
        });
      }
      return true;
    }

    if ("speechSynthesis" in window && window.speechSynthesis.paused) {
      this.currentEngine = this.currentEngine || "browser";
      window.speechSynthesis.resume();
      this.notifyStatus("playing", "Reproduciendo audio");
      return true;
    }

    return false;
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    this.currentText = "";
    this.currentEngine = null;

    if (this.currentPlaybackReject) {
      const reject = this.currentPlaybackReject;
      this.currentPlaybackReject = null;
      this.currentPlaybackResolve = null;
      reject(new Error("__SURI_TTS_STOPPED__"));
    }

    if (this.currentBlobUrl) {
      URL.revokeObjectURL(this.currentBlobUrl);
      this.currentBlobUrl = null;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    try {
      window.meSpeak?.stop?.();
    } catch {
      // Ignorar errores de parada en meSpeak.
    }

    try {
      this.espeakWorker?.postMessage({ type: "stop" });
    } catch {
      // Ignorar errores de parada en worker eSpeak.
    }

    this.notifyStatus("idle", "Lectura detenida");
  }

  async speakWithMeSpeak(content, trace = null) {
    this.currentEngine = "mespeak";
    this.traceStep(trace, "mespeak_selected", {
      voice: this.getMeSpeakVoice(),
      rateWpm: this.getMeSpeakRateWpm(),
      pitch: this.getMeSpeakPitch(),
      amplitude: this.getMeSpeakAmplitude()
    });

    await this.ensureMeSpeakInitialized();

    const meSpeak = window.meSpeak;
    if (!meSpeak || typeof meSpeak.speak !== "function") {
      throw new Error("meSpeak no esta disponible para sintetizar");
    }

    const parts = splitLongText(content, 240);
    this.traceStep(trace, "mespeak_parts_ready", { parts: parts.length });

    for (let index = 0; index < parts.length; index += 1) {
      const part = parts[index];
      this.currentEngine = "mespeak";
      this.notifyStatus("generating", "Generando audio meSpeak");
      this.traceStep(trace, "mespeak_synthesize_start", {
        index,
        length: part.length
      });

      let stream = null;
      try {
        stream = await new Promise((resolve, reject) => {
          const id = meSpeak.speak(part, {
            voice: this.getMeSpeakVoice(),
            speed: Math.max(90, Math.min(320, Math.round(this.getMeSpeakRateWpm() * this.prefs.speed))),
            pitch: this.getMeSpeakPitch(),
            amplitude: this.getMeSpeakAmplitude(),
            rawdata: "array"
          }, (success, _jobId, data) => {
            if (!success || !data) {
              reject(new Error("meSpeak no devolvio stream de audio"));
              return;
            }
            resolve(data);
          });

          if (!id) {
            reject(new Error("meSpeak no inicio la sintesis"));
          }
        });
      } catch (error) {
        throw new Error(`meSpeak no pudo sintetizar: ${error?.message || "desconocido"}`);
      }

      if (!stream) {
        throw new Error("meSpeak devolvio audio vacio");
      }

      let uint8 = null;
      if (stream instanceof Uint8Array) {
        uint8 = stream;
      } else if (stream instanceof ArrayBuffer) {
        uint8 = new Uint8Array(stream);
      } else if (Array.isArray(stream)) {
        uint8 = new Uint8Array(stream);
      } else {
        throw new Error("Formato de audio meSpeak no reconocido");
      }

      this.traceStep(trace, "mespeak_synthesize_ok", {
        index,
        bytes: uint8.byteLength
      });

      const blob = new Blob([uint8.buffer.slice(uint8.byteOffset, uint8.byteOffset + uint8.byteLength)], { type: "audio/wav" });
      await this.playBlob(blob, "mespeak");
      this.traceStep(trace, "mespeak_playback_ok", { index });

      if (this.status === "idle") {
        this.traceStep(trace, "interrupted_idle_after_mespeak_chunk", { index });
        return;
      }
    }

    this.currentEngine = "mespeak";
    this.notifyStatus("idle", "Listo");
  }

  async speakWithEspeak(content, trace = null) {
    this.currentEngine = "espeak";
    this.traceStep(trace, "espeak_selected", {
      voice: this.getEspeakVoice(),
      rateWpm: this.getEspeakRateWpm()
    });

    await this.ensureEspeakWorkerInitialized();

    const parts = splitLongText(content, 220);
    this.traceStep(trace, "espeak_parts_ready", { parts: parts.length, backend: "web-speech" });

    const voiceCode = String(this.getEspeakVoice() || "es").toLowerCase();
    const lang = voiceCode.startsWith("en") ? "en-US" : (this.prefs.fallbackLang || "es-ES");
    const voice = pickPreferredBrowserVoice(lang);
    const rate = Math.max(0.65, Math.min(1.9, (this.getEspeakRateWpm() / 170) * this.prefs.speed));

    window.speechSynthesis.cancel();

    for (let index = 0; index < parts.length; index += 1) {
      const part = parts[index];
      this.currentEngine = "espeak";
      this.notifyStatus("playing", "Reproduciendo perfil eSpeak (Web Speech)");

      await new Promise((resolve, reject) => {
        const utterance = new SpeechSynthesisUtterance(part);
        utterance.lang = lang;
        utterance.rate = rate;
        utterance.pitch = 1.0;
        if (voice) utterance.voice = voice;

        utterance.onstart = () => {
          this.traceStep(trace, "espeak_synthesize_start", {
            index,
            length: part.length,
            backend: "web-speech",
            lang,
            voice: utterance.voice?.name || utterance.voice?.voiceURI || "desconocida"
          });
        };

        utterance.onend = () => {
          this.traceStep(trace, "espeak_playback_ok", { index, backend: "web-speech" });
          resolve();
        };

        utterance.onerror = (event) => {
          reject(new Error(`Error Web Speech (perfil eSpeak): ${event?.error || "desconocido"}`));
        };

        window.speechSynthesis.speak(utterance);
      });
    }

    this.currentEngine = "espeak";
    this.notifyStatus("idle", "Listo");
  }

  async speakWithBrowser(text, trace = null) {
    if (!("speechSynthesis" in window)) {
      throw new Error("speechSynthesis no disponible en este navegador");
    }

    this.currentEngine = "browser";
    this.traceStep(trace, "browser_selected", {
      lang: this.prefs.fallbackLang,
      speed: this.prefs.speed,
      pitch: this.prefs.fallbackPitch
    });

    window.speechSynthesis.cancel();

    const chunks = splitLongText(text, 220);
    this.traceStep(trace, "browser_chunks_ready", { chunks: chunks.length });

    for (const chunk of chunks) {
      await new Promise((resolve, reject) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        utterance.lang = this.prefs.fallbackLang || "es-ES";
        utterance.rate = this.prefs.speed;
        utterance.pitch = this.prefs.fallbackPitch || 1.2;
        utterance.voice = pickPreferredBrowserVoice(this.prefs.fallbackLang || "es-ES");

        utterance.onstart = () => {
          this.traceStep(trace, "browser_chunk_start", {
            length: chunk.length,
            voice: utterance.voice?.name || utterance.voice?.voiceURI || "desconocida"
          });
          this.currentEngine = "browser";
          this.notifyStatus("playing", "Reproduciendo audio del navegador");
        };

        utterance.onend = () => {
          this.traceStep(trace, "browser_chunk_end", { length: chunk.length });
          resolve();
        };

        utterance.onerror = (event) => {
          const reason = event?.error || "desconocido";
          this.traceStep(trace, "browser_chunk_error", {
            length: chunk.length,
            error: reason
          });
          reject(new Error(`Error Web Speech: ${reason}`));
        };

        window.speechSynthesis.speak(utterance);
      });
    }

    this.currentEngine = "browser";
    this.notifyStatus("idle", "Listo");
  }

  async fallbackSpeak(text, force = false, trace = null) {
    this.traceStep(trace, "fallback_enter", {
      force,
      fallbackEnabled: Boolean(this.prefs.fallbackEnabled),
      autoRead: Boolean(this.prefs.autoRead)
    });

    if (!this.prefs.fallbackEnabled && !force) {
      this.logWarn("Fallback cancelado: fallbackEnabled=false");
      this.traceStep(trace, "fallback_blocked_disabled");
      return;
    }
    if (!force && !this.prefs.autoRead) {
      this.logWarn("Fallback cancelado: autoRead=false y force=false");
      this.traceStep(trace, "fallback_blocked_autoread");
      return;
    }
    if (!("speechSynthesis" in window)) {
      this.logWarn("Fallback cancelado: speechSynthesis no disponible");
      this.traceStep(trace, "fallback_blocked_no_speech_synthesis");
      return;
    }

    this.currentEngine = "browser";
    this.traceStep(trace, "fallback_selected_browser_engine");
    this.notifyStatus("fallback", "Usando Web Speech API");
    this.logWarn("Usando fallback del navegador", {
      lang: this.prefs.fallbackLang,
      speed: this.prefs.speed,
      pitch: this.prefs.fallbackPitch,
      force
    });
    window.speechSynthesis.cancel();

    const chunks = splitLongText(text, 220);
    this.traceStep(trace, "fallback_chunks_ready", { chunks: chunks.length });
    for (const chunk of chunks) {
      await new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        utterance.lang = this.prefs.fallbackLang || "es-ES";
        utterance.rate = this.prefs.speed;
        utterance.pitch = this.prefs.fallbackPitch || 1.45;
        utterance.voice = pickPreferredBrowserVoice(this.prefs.fallbackLang || "es-ES");
        utterance.onstart = () => {
          this.traceStep(trace, "fallback_chunk_start", {
            length: chunk.length,
            voice: utterance.voice?.name || utterance.voice?.voiceURI || "desconocida"
          });
          this.notifyStatus("playing", "Reproduciendo audio del navegador");
        };
        utterance.onend = () => {
          this.traceStep(trace, "fallback_chunk_end", { length: chunk.length });
          resolve();
        };
        utterance.onerror = (event) => {
          this.traceStep(trace, "fallback_chunk_error", {
            length: chunk.length,
            error: event?.error || "desconocido"
          });
          this.logWarn("Error en Web Speech fallback", {
            error: event?.error || "desconocido",
            chunkPreview: chunk.slice(0, 80)
          });
          resolve();
        };
        window.speechSynthesis.speak(utterance);
      });
    }

    this.traceStep(trace, "fallback_completed");
    this.notifyStatus("idle", "Listo");
  }

  async speak(text, { force = false } = {}) {
    const content = String(text || "").trim();
    if (!content) return;
    const trace = this.startTrace(content, {
      force,
      autoRead: Boolean(this.prefs.autoRead),
      fallbackEnabled: Boolean(this.prefs.fallbackEnabled),
      selectedVoice: this.prefs.voice,
      userInteracted: Boolean(this.userInteracted)
    });
    const finalize = (outcome, data = {}) => {
      this.finishTrace(trace, outcome, data);
    };

    this.traceStep(trace, "speak_requested");

    if (!force && !this.prefs.autoRead) {
      this.logWarn("Lectura omitida: autoRead=false y force=false");
      this.traceStep(trace, "blocked_autoread_disabled");
      finalize("blocked_autoread_disabled");
      return;
    }

    if (!this.userInteracted) {
      this.notifyStatus("blocked", "Haz clic en la pagina para habilitar audio");
      this.logWarn("Bloqueado por politica de autoplay: falta interaccion del usuario");
      this.traceStep(trace, "blocked_autoplay_policy");
      finalize("blocked_autoplay_policy");
      return;
    }

    this.stop();
    this.currentText = content;
    this.traceStep(trace, "state_reset_before_synthesis");

    const preferredEngine = this.getPreferredEngine();
    this.traceStep(trace, "engine_selected", { preferredEngine });

    if (preferredEngine === "browser") {
      try {
        await this.speakWithBrowser(content, trace);
        finalize("browser_completed", {
          lang: this.prefs.fallbackLang,
          speed: this.prefs.speed,
          pitch: this.prefs.fallbackPitch
        });
        return;
      } catch (browserError) {
        if (String(browserError?.message || "") === "__SURI_TTS_STOPPED__") {
          this.notifyStatus("idle", "Lectura detenida");
          this.traceStep(trace, "stopped_by_user_or_new_request");
          finalize("stopped");
          return;
        }

        this.traceStep(trace, "browser_error", {
          error: browserError?.message || String(browserError || "desconocido"),
          stack: browserError?.stack || null
        });
        this.notifyStatus("error", `Navegador fallo: ${browserError.message}`);
        this.logError("Error durante sintesis en navegador", browserError, {
          lang: this.prefs.fallbackLang,
          speed: this.prefs.speed,
          pitch: this.prefs.fallbackPitch,
          textLength: content.length
        });
        finalize("browser_failed_no_fallback", {
          error: browserError?.message || "desconocido"
        });
        return;
      }
    }

    if (preferredEngine === "espeak-wasm") {
      try {
        await this.speakWithEspeak(content, trace);
        finalize("espeak_completed", {
          voice: this.getEspeakVoice(),
          rateWpm: this.getEspeakRateWpm()
        });
        return;
      } catch (espeakError) {
        if (String(espeakError?.message || "") === "__SURI_TTS_STOPPED__") {
          this.notifyStatus("idle", "Lectura detenida");
          this.traceStep(trace, "stopped_by_user_or_new_request");
          finalize("stopped");
          return;
        }

        this.traceStep(trace, "espeak_error", {
          error: espeakError?.message || String(espeakError || "desconocido"),
          stack: espeakError?.stack || null
        });
        this.notifyStatus("error", `eSpeak fallo: ${espeakError.message}`);
        this.logError("Error durante sintesis eSpeak-NG", espeakError, {
          voice: this.getEspeakVoice(),
          rateWpm: this.getEspeakRateWpm(),
          textLength: content.length
        });
        finalize("espeak_failed_no_fallback", {
          error: espeakError?.message || "desconocido"
        });
        return;
      }
    }

    if (preferredEngine === "mespeak-js") {
      try {
        await this.speakWithMeSpeak(content, trace);
        finalize("mespeak_completed", {
          voice: this.getMeSpeakVoice(),
          rateWpm: this.getMeSpeakRateWpm(),
          pitch: this.getMeSpeakPitch(),
          amplitude: this.getMeSpeakAmplitude()
        });
        return;
      } catch (meSpeakError) {
        if (String(meSpeakError?.message || "") === "__SURI_TTS_STOPPED__") {
          this.notifyStatus("idle", "Lectura detenida");
          this.traceStep(trace, "stopped_by_user_or_new_request");
          finalize("stopped");
          return;
        }

        this.traceStep(trace, "mespeak_error", {
          error: meSpeakError?.message || String(meSpeakError || "desconocido"),
          stack: meSpeakError?.stack || null
        });
        this.notifyStatus("error", `meSpeak fallo: ${meSpeakError.message}`);
        this.logError("Error durante sintesis meSpeak", meSpeakError, {
          voice: this.getMeSpeakVoice(),
          rateWpm: this.getMeSpeakRateWpm(),
          textLength: content.length
        });
        finalize("mespeak_failed_no_fallback", {
          error: meSpeakError?.message || "desconocido"
        });
        return;
      }
    }

    const spanishVoice = this.findSpanishVoice();

    // Aunque la voz no sea española, priorizamos Kokoro (modelo cargado).
    // Solo caeremos a navegador si Kokoro realmente falla en síntesis/reproducción.
    if (!this.isCurrentVoiceSpanish()) {
      const selected = this.voiceCatalog.find((v) => v.id === this.prefs.voice);
      this.logWarn("Voz Kokoro no espanola; se mantiene Kokoro para priorizar el modelo cargado", {
        selectedVoice: this.prefs.voice,
        selectedVoiceLanguage: selected?.language || "desconocido"
      });
      this.traceStep(trace, "voice_non_spanish_kokoro_attempt", {
        selectedVoice: this.prefs.voice,
        selectedVoiceLanguage: selected?.language || "desconocido"
      });
    }

    try {
      this.currentEngine = "kokoro";
      this.traceStep(trace, "kokoro_selected");
      await this.ensureWorkerInitialized();
      let voiceToUse = this.ensureValidKokoroVoice();
      if (spanishVoice && voiceToUse !== spanishVoice.id) {
        voiceToUse = spanishVoice.id;
        this.prefs.voice = voiceToUse;
        this.savePrefs();
        this.traceStep(trace, "kokoro_spanish_voice_selected", { voice: voiceToUse });
      }
      this.traceStep(trace, "kokoro_worker_ready", {
        voices: this.voiceCatalog.length,
        selectedVoice: voiceToUse
      });
      this.logDebug("Iniciando sintesis Kokoro", {
        voice: voiceToUse,
        speed: this.prefs.speed,
        textLength: content.length
      });
      const parts = splitLongText(content, 260);
      this.traceStep(trace, "kokoro_parts_ready", { parts: parts.length });

      for (let index = 0; index < parts.length; index += 1) {
        const part = parts[index];
        this.notifyStatus("generating", "Generando audio Kokoro");
        this.traceStep(trace, "kokoro_synthesize_start", {
          index,
          length: part.length,
          voice: voiceToUse
        });
        let response;
        try {
          response = await this.sendToWorker("synthesize", {
            text: part,
            voice: voiceToUse,
            speed: this.prefs.speed
          });
        } catch (synthError) {
          this.traceStep(trace, "kokoro_synthesize_error", {
            index,
            error: synthError?.message || "desconocido"
          });

          // Reintento unico: refresca voces y corrige voz invalida antes de caer a fallback.
          await this.requestVoices();
          voiceToUse = this.ensureValidKokoroVoice();
          this.traceStep(trace, "kokoro_synthesize_retry", {
            index,
            voice: voiceToUse
          });
          response = await this.sendToWorker("synthesize", {
            text: part,
            voice: voiceToUse,
            speed: this.prefs.speed
          });
          this.traceStep(trace, "kokoro_synthesize_retry_ok", {
            index,
            bytes: response?.wavBuffer?.byteLength || 0
          });
        }
        this.traceStep(trace, "kokoro_synthesize_ok", {
          index,
          bytes: response?.wavBuffer?.byteLength || 0
        });

        const blob = new Blob([response.wavBuffer], { type: "audio/wav" });
        await this.playBlob(blob);
        this.traceStep(trace, "kokoro_playback_ok", { index });

        if (this.status === "idle") {
          this.traceStep(trace, "interrupted_idle_after_chunk", { index });
          finalize("interrupted_idle");
          return;
        }
      }

      this.notifyStatus("idle", "Listo");
      finalize("kokoro_completed");
    } catch (error) {
      if (String(error?.message || "") === "__SURI_TTS_STOPPED__") {
        this.notifyStatus("idle", "Lectura detenida");
        this.traceStep(trace, "stopped_by_user_or_new_request");
        finalize("stopped");
        return;
      }
      this.traceStep(trace, "kokoro_error", {
        error: error?.message || String(error || "desconocido"),
        stack: error?.stack || null
      });
      this.notifyStatus("error", `Kokoro fallo: ${error.message}`);
      this.logError("Error durante sintesis Kokoro", error, {
        voice: this.prefs.voice,
        speed: this.prefs.speed,
        textLength: content.length
      });
      finalize("kokoro_failed_no_fallback", {
        error: error?.message || "desconocido"
      });
    }
  }
}

let singleton = null;

export function getKokoroTtsService() {
  if (!singleton) singleton = new KokoroTtsService();
  return singleton;
}
