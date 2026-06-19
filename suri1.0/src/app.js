import { getKokoroTtsService } from "./services/kokoroTtsService.js";
import { mountTtsControls } from "./components/ttsControls.js";
import { getWhisperSttService } from "./services/whisperSttService.js";
import { AudioRecorder } from "./utils/audioRecorder.js";
import {
  busquedasemantica,
  precargarBusquedaSemantica,
  getJsonFaqs,
  setJsonFaqs,
  resetJsonFaqs
} from "./services/semanticFaqService.js";

const tts = getKokoroTtsService();
const stt = getWhisperSttService();
const mountNode = document.getElementById("ttsControlsMount");
const userInput = document.getElementById("userInput");
const btnMic = document.getElementById("btnMic");
const sttStatus = document.getElementById("sttStatus");

const IS_ANIMATIONS_PAGE = /\/suri_animaciones\.html$/i.test(window.location.pathname);
const AVATAR_CONFIG_STORAGE_KEY = IS_ANIMATIONS_PAGE ? "suriAnimacionesConfig" : "suriAvatarConfig";

const AVATAR_MODEL_STORAGE_KEY = IS_ANIMATIONS_PAGE ? "suriAnimacionesModelUrl" : "suriAvatarModelUrl";
const AVATAR_MODEL_DEFAULT_URL = "./assets/avatar/SURI_Animations_2.glb";
const FALLBACK_AVATAR_MODEL_CATALOG = [
  { url: "./assets/avatar/SURI_Animations_2.glb", label: "Suri Animations 2", short: "S2", defaultAnimation: "idle" },
  { url: "./assets/avatar/Suri_Animations.glb", label: "Suri Animations", short: "SA", defaultAnimation: "idle" },
  { url: "./assets/avatar/suri_avatar.glb", label: "Suri base", short: "S", defaultAnimation: "idle" },
  { url: "./assets/avatar/Meshy_AI_Tech_Savvy_Meerkat_0610041201_generate.glb", label: "Meshy tech", short: "T", defaultAnimation: "idle" },
  { url: "./assets/avatar/Meshy_AI_Meshy_Merged_Animations.glb", label: "Meshy merged", short: "M", defaultAnimation: "idle" }
];

function parseStoredAvatarConfig() {
  try {
    const raw = localStorage.getItem(AVATAR_CONFIG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function normalizeListeningConfig(input = {}) {
  const modeRaw = String(input?.mode || "normal").trim().toLowerCase();
  const mode = ["normal", "fast"].includes(modeRaw) ? modeRaw : "normal";

  const modelRaw = String(input?.model || "").trim();
  let model = ["onnx-community/whisper-base", "onnx-community/whisper-small"].includes(modelRaw)
    ? modelRaw
    : "onnx-community/whisper-small";

  const sensitivityRaw = String(input?.sensitivity || "").trim().toLowerCase();
  let sensitivity = ["low", "medium", "high"].includes(sensitivityRaw) ? sensitivityRaw : "medium";

  const languageRaw = String(input?.language || "spanish").trim().toLowerCase();
  const language = ["spanish", "english"].includes(languageRaw) ? languageRaw : "spanish";

  const taskRaw = String(input?.task || "transcribe").trim().toLowerCase();
  const task = ["transcribe", "translate"].includes(taskRaw) ? taskRaw : "transcribe";

  if (mode === "fast") {
    model = "onnx-community/whisper-base";
    sensitivity = "low";
  }

  return {
    mode,
    model,
    sensitivity,
    language,
    task
  };
}

function normalizeModelCatalog(models) {
  if (!Array.isArray(models)) return [];
  return models
    .map((model) => ({
      url: String(model?.url || "").trim(),
      label: String(model?.label || "").trim(),
      short: String(model?.short || "").trim(),
      defaultAnimation: String(model?.defaultAnimation || "").trim()
    }))
    .filter((model) => model.url);
}

function getLocalConfigCatalog() {
  const cfg = parseStoredAvatarConfig();
  return normalizeModelCatalog(cfg?.avatar?.modelCatalog);
}

function getConfiguredModelUrl() {
  const cfg = parseStoredAvatarConfig();
  const fromConfig = String(cfg?.avatar?.modelUrl || "").trim();
  if (fromConfig) return fromConfig;

  const fromStorage = String(localStorage.getItem(AVATAR_MODEL_STORAGE_KEY) || "").trim();
  if (fromStorage) return fromStorage;

  return AVATAR_MODEL_DEFAULT_URL;
}

function getModelInfoFromCatalog(catalog, modelUrl) {
  const targetUrl = String(modelUrl || "").trim();
  return normalizeModelCatalog(catalog).find((item) => item.url === targetUrl) || null;
}

const storedCatalog = getLocalConfigCatalog();
const initialAvatarModelUrl = getConfiguredModelUrl();
localStorage.setItem(AVATAR_MODEL_STORAGE_KEY, initialAvatarModelUrl);
const initialAvatarModelInfo = {
  ...(getModelInfoFromCatalog(storedCatalog.length ? storedCatalog : FALLBACK_AVATAR_MODEL_CATALOG, initialAvatarModelUrl) || {}),
  defaultAnimation: "idle"
};

let isRecording = false;
let maxRecordTimeoutId = null;
let silenceMonitorIntervalId = null;
let silenceAudioContext = null;
let silenceSourceNode = null;
let silenceAnalyser = null;
const recorder = new AudioRecorder({ maxDurationMs: 30000 });

function stopSilenceMonitor() {
  if (silenceMonitorIntervalId) {
    clearInterval(silenceMonitorIntervalId);
    silenceMonitorIntervalId = null;
  }
  if (silenceSourceNode) {
    try {
      silenceSourceNode.disconnect();
    } catch {
      // noop
    }
  }
  silenceSourceNode = null;
  silenceAnalyser = null;
  if (silenceAudioContext) {
    silenceAudioContext.close().catch(() => {});
  }
  silenceAudioContext = null;
}

function startSilenceMonitor() {
  stopSilenceMonitor();
  const stream = recorder.stream;
  if (!stream) return;

  try {
    const ACtx = window.AudioContext || window.webkitAudioContext;
    if (!ACtx) return;
    silenceAudioContext = new ACtx();
    silenceSourceNode = silenceAudioContext.createMediaStreamSource(stream);
    silenceAnalyser = silenceAudioContext.createAnalyser();
    silenceAnalyser.fftSize = 1024;
    silenceSourceNode.connect(silenceAnalyser);

    const samples = new Uint8Array(silenceAnalyser.fftSize);
    const minSpeechMs = 700;
    const silenceMsToStop = 1400;
    const rmsThreshold = 0.013;
    const startedAt = performance.now();
    let lastVoiceAt = startedAt;
    let heardVoice = false;

    silenceMonitorIntervalId = window.setInterval(() => {
      if (!isRecording || !silenceAnalyser) return;

      silenceAnalyser.getByteTimeDomainData(samples);
      let sum = 0;
      for (let i = 0; i < samples.length; i += 1) {
        const normalized = (samples[i] - 128) / 128;
        sum += normalized * normalized;
      }
      const rms = Math.sqrt(sum / samples.length);
      const now = performance.now();

      if (rms >= rmsThreshold) {
        heardVoice = true;
        lastVoiceAt = now;
        return;
      }

      const elapsed = now - startedAt;
      const silentFor = now - lastVoiceAt;
      if (heardVoice && elapsed >= minSpeechMs && silentFor >= silenceMsToStop) {
        stopRecordingFlow(true);
      }
    }, 120);
  } catch {
    stopSilenceMonitor();
  }
}

async function preloadAiModels() {
  const listeningRuntime = typeof stt.getConfig === "function"
    ? stt.getConfig()
    : normalizeListeningConfig();
  const hadWarmTts = typeof tts.hasWarmCacheHint === "function" ? tts.hasWarmCacheHint() : false;
  const hadWarmStt = typeof stt.hasWarmCacheHint === "function" ? stt.hasWarmCacheHint() : false;

  if (hadWarmTts || hadWarmStt) {
    setSttStatus("Inicializando modelos desde cache local...");
  } else {
    setSttStatus("Inicializando modelos por primera vez...");
  }

  await Promise.allSettled([
    typeof tts.preload === "function" ? tts.preload() : tts.ensureWorkerInitialized(),
    typeof stt.preload === "function" ? stt.preload(listeningRuntime) : stt.ensureInitialized(listeningRuntime),
    precargarBusquedaSemantica()
  ]);

  setSttStatus("Modelos de voz listos.");
}

Object.defineProperty(window, "JSON_FAQs", {
  configurable: true,
  get() {
    return getJsonFaqs();
  },
  set(value) {
    setJsonFaqs(value);
  }
});
window.busquedasemantica = busquedasemantica;
window.__suriFaqsGet = getJsonFaqs;
window.__suriFaqsSet = setJsonFaqs;
window.__suriFaqsReset = resetJsonFaqs;
window.__suriSttApplyConfig = (listeningConfig = null) => {
  const stored = parseStoredAvatarConfig();
  const fromStorage = (stored?.listening && typeof stored.listening === "object")
    ? stored.listening
    : (stored?.escucha && typeof stored.escucha === "object" ? stored.escucha : {});
  const source = listeningConfig && typeof listeningConfig === "object" ? listeningConfig : fromStorage;
  const normalized = normalizeListeningConfig(source);
  if (typeof stt.setConfig === "function") {
    stt.setConfig(normalized);
  }
  return normalized;
};

const avatar3DReady = import("./avatar3d/suriAvatar3d.js")
  .then(({ initSuriAvatar3D }) => initSuriAvatar3D({
    containerId: "avatar3dStage",
    modelUrl: initialAvatarModelUrl,
    defaultAnimation: initialAvatarModelInfo?.defaultAnimation || ""
  }))
  .then((avatar) => {
    window.__suriAvatar3D = avatar;
    if (!avatar) {
      console.warn("Avatar 3D: no se encontro contenedor o no se pudo inicializar.");
    }
  })
  .catch((error) => {
    window.__suriAvatar3D = null;
    console.error("Avatar 3D: fallo al cargar modulo/inicializar:", error);
  });

function setSttStatus(message, tone = "normal") {
  if (!sttStatus) return;
  sttStatus.textContent = message;
  sttStatus.style.color = tone === "error" ? "#b91c1c" : "#667085";
}

function setMicVisualState(recording) {
  if (!btnMic) return;
  btnMic.classList.toggle("recording", recording);
  btnMic.innerHTML = recording
    ? '<i class="fa-solid fa-stop"></i>'
    : '<i class="fa-solid fa-microphone"></i>';
  btnMic.title = recording ? "Detener grabación" : "Hablar";
}

stt.onStatusChange(({ status, detail }) => {
  const map = {
    loading: "Cargando Whisper...",
    transcribing: "Transcribiendo audio...",
    ready: "Listo para hablar",
    fallback: "Fallback de voz activado",
    error: "Error de voz a texto"
  };
  const text = detail || map[status] || "";
  if (!text) return;
  setSttStatus(text, status === "error" ? "error" : "normal");
});

async function startRecordingFlow() {
  if (!btnMic) return;

  try {
    setSttStatus("Solicitando permiso de micrófono...");
    await recorder.start();

    isRecording = true;
    setMicVisualState(true);
    setSttStatus("Grabando... máximo 30 segundos.");
    window.dispatchEvent(new CustomEvent("suri:voice-capture-start"));
    startSilenceMonitor();

    maxRecordTimeoutId = window.setTimeout(() => {
      if (isRecording) {
        stopRecordingFlow(true);
      }
    }, 30000);
  } catch (error) {
    const msg = error?.name === "NotAllowedError"
      ? "Permiso de micrófono denegado."
      : (error?.message || "No se pudo iniciar la grabación.");
    setSttStatus(msg, "error");
    window.dispatchEvent(new CustomEvent("suri:voice-capture-error", { detail: { message: msg } }));
    isRecording = false;
    setMicVisualState(false);
  }
}

async function stopRecordingFlow(autoStopped = false) {
  if (!isRecording) return;
  isRecording = false;

  if (maxRecordTimeoutId) {
    clearTimeout(maxRecordTimeoutId);
    maxRecordTimeoutId = null;
  }
  stopSilenceMonitor();

  setMicVisualState(false);

  try {
    setSttStatus(autoStopped ? "Límite alcanzado. Procesando audio..." : "Procesando audio...");
    window.dispatchEvent(new CustomEvent("suri:voice-capture-processing"));
    const blob = await recorder.stop();

    const transcribeStart = performance.now();
    const result = await stt.transcribeBlob(blob, {
      language: typeof stt.getConfig === "function" ? stt.getConfig().language : "spanish",
      task: typeof stt.getConfig === "function" ? stt.getConfig().task : "transcribe",
      allowWebSpeechFallback: false
    });
    const elapsedMs = Math.max(0, Math.round(performance.now() - transcribeStart));

    if (userInput) {
      userInput.value = result.text || "";
      userInput.focus();
      userInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (!result.text) {
      setSttStatus("No se detectó texto. Intenta nuevamente.", "error");
      window.dispatchEvent(new CustomEvent("suri:voice-capture-error", { detail: { message: "Sin texto detectado" } }));
      return;
    }

    setSttStatus(`Transcripción lista en ${elapsedMs} ms. Enviando consulta...`);
    window.dispatchEvent(new CustomEvent("suri:voice-capture-ready", { detail: { text: result.text } }));
  } catch (error) {
    setSttStatus(`Error al transcribir: ${error?.message || "desconocido"}`, "error");
    window.dispatchEvent(new CustomEvent("suri:voice-capture-error", { detail: { message: error?.message || "error de transcripción" } }));
  }
}

if (btnMic) {
  btnMic.addEventListener("click", async () => {
    if (!isRecording) {
      await startRecordingFlow();
      return;
    }
    await stopRecordingFlow(false);
  });
}

const schedulePreload = window.requestIdleCallback
  ? (fn) => window.requestIdleCallback(fn, { timeout: 2500 })
  : (fn) => window.setTimeout(fn, 300);

schedulePreload(() => {
  preloadAiModels().catch((error) => {
    setSttStatus(`No se pudo completar precarga: ${error?.message || "desconocido"}`, "error");
  });
});

let lastTtsStatus = "idle";
const dispatchTtsRuntimeStatus = ({ status, detail, engine }) => {
  const msgMap = {
    idle: "Listo",
    loading: "Cargando modelo Kokoro...",
    ready: "Modelo listo",
    generating: "Generando audio...",
    generated: "Audio generado",
    playing: "Reproduciendo",
    paused: "En pausa",
    blocked: "Interactua con la pagina para habilitar audio",
    fallback: "Fallback Web Speech activo",
    error: "Error de TTS"
  };

  const text = detail || msgMap[status] || "Estado desconocido";
  window.dispatchEvent(new CustomEvent("suri:tts-status", {
    detail: {
      status,
      detail: text,
      engine: engine || null
    }
  }));

  if (status === "paused" && lastTtsStatus !== "paused") {
    window.dispatchEvent(new CustomEvent("suri:speak-pause"));
  }

  if (status === "playing" && lastTtsStatus === "paused") {
    window.dispatchEvent(new CustomEvent("suri:speak-resume"));
  }

  lastTtsStatus = status;
  return text;
};

// El puente TTS debe existir siempre, aunque no se monte el panel de controles.
window.__suriTtsSpeak = (text, options = {}) => tts.speak(text, options);
window.__suriTtsStop = () => tts.stop();
window.__suriTtsPause = () => tts.pause();
window.__suriTtsResume = () => tts.resume();
window.__suriTtsGetStatus = () => tts.getStatus();
window.__suriTtsGetLastTrace = () => tts.getLastTrace();
window.__suriTtsApplyConfig = (voiceConfig = null) => {
  const fromStorage = parseStoredAvatarConfig()?.voice;
  const source = voiceConfig && typeof voiceConfig === "object" ? voiceConfig : (fromStorage || {});

  const normalizeEngine = (value, fallback = "espeak-wasm") => {
    const raw = String(value || "").trim().toLowerCase();
    return ["browser", "mespeak-js", "espeak-wasm", "kokoro"].includes(raw) ? raw : fallback;
  };

  const primary = source?.primary && typeof source.primary === "object" ? source.primary : {};
  const secondary = source?.secondary && typeof source.secondary === "object" ? source.secondary : {};
  const ttsProfile = source?.tts && typeof source.tts === "object" ? source.tts : {};

  const primaryEngine = normalizeEngine(
    primary.engine || ttsProfile.primaryEngine || ttsProfile.engine,
    normalizeEngine(tts.ttsOptions?.engine, "espeak-wasm")
  );
  const secondaryEngine = normalizeEngine(secondary.engine || ttsProfile.secondaryEngine, "browser");
  const lang = String(primary.lang || source?.lang || tts.prefs?.fallbackLang || "es-ES").trim() || "es-ES";
  const rateRaw = Number(primary.rate ?? source?.rate ?? tts.prefs?.speed ?? 1.1);
  const rate = Number.isFinite(rateRaw) ? Math.max(0.7, Math.min(1.6, rateRaw)) : 1.1;
  const pitchRaw = Number(primary.pitch ?? source?.pitch ?? tts.prefs?.fallbackPitch ?? 1.2);
  const pitch = Number.isFinite(pitchRaw) ? Math.max(0.5, Math.min(1.8, pitchRaw)) : 1.2;

  const languageCode = lang.split(/[-_]/)[0]?.toLowerCase() || "es";
  const isEnglish = languageCode === "en";

  tts.ttsOptions.engine = primaryEngine;
  tts.ttsOptions.primaryEngine = primaryEngine;
  tts.ttsOptions.secondaryEngine = secondaryEngine;
  tts.ttsOptions.espeakVoice = isEnglish ? "en" : "es";
  tts.ttsOptions.espeakRateWpm = Math.round(170 * rate);
  tts.ttsOptions.meSpeakVoice = isEnglish ? "en-us" : "es-la";
  tts.ttsOptions.meSpeakRateWpm = Math.round(175 * rate);
  tts.ttsOptions.meSpeakPitch = Math.round(((pitch - 0.5) / 1.3) * 99);
  tts.prefs.speed = rate;
  tts.prefs.fallbackLang = lang;
  tts.prefs.fallbackPitch = pitch;

  return {
    primaryEngine,
    secondaryEngine,
    lang,
    rate,
    pitch
  };
};
window.__suriTtsPreviewConfig = async ({ text = "", engine, lang, rate, pitch } = {}) => {
  const content = String(text || "").trim();
  if (!content) return;

  const snapshot = {
    prefs: { ...tts.prefs },
    ttsOptions: { ...tts.ttsOptions }
  };

  const safeEngine = ["browser", "mespeak-js", "espeak-wasm", "kokoro"].includes(String(engine || "").trim().toLowerCase())
    ? String(engine).trim().toLowerCase()
    : snapshot.ttsOptions.engine;
  const safeLang = String(lang || snapshot.prefs.fallbackLang || "es-ES").trim() || "es-ES";
  const safeRate = Number.isFinite(Number(rate)) ? Math.max(0.7, Math.min(1.6, Number(rate))) : snapshot.prefs.speed;
  const safePitch = Number.isFinite(Number(pitch)) ? Math.max(0.5, Math.min(1.8, Number(pitch))) : snapshot.prefs.fallbackPitch;

  const languageCode = safeLang.split(/[-_]/)[0]?.toLowerCase() || "es";
  const isEnglish = languageCode === "en";

  tts.ttsOptions.engine = safeEngine;
  tts.ttsOptions.primaryEngine = safeEngine;
  tts.ttsOptions.espeakVoice = isEnglish ? "en" : "es";
  tts.ttsOptions.espeakRateWpm = Math.round(170 * safeRate);
  tts.ttsOptions.meSpeakVoice = isEnglish ? "en-us" : "es-la";
  tts.ttsOptions.meSpeakRateWpm = Math.round(175 * safeRate);
  tts.ttsOptions.meSpeakPitch = Math.round(((safePitch - 0.5) / 1.3) * 99);
  tts.prefs.speed = safeRate;
  tts.prefs.fallbackLang = safeLang;
  tts.prefs.fallbackPitch = safePitch;

  try {
    await tts.speak(content, { force: true });
  } finally {
    tts.ttsOptions = snapshot.ttsOptions;
    tts.prefs = snapshot.prefs;
  }
};

window.__suriTtsApplyConfig();
window.__suriSttApplyConfig();

// Si no hay panel visual de TTS, igual publicamos estado para chat/burbujas.
if (!mountNode) {
  tts.onStatusChange(({ status, detail, engine }) => {
    dispatchTtsRuntimeStatus({ status, detail, engine });
  });
}

if (mountNode) {
  const ui = mountTtsControls(mountNode, {
    prefs: tts.getPreferences(),
    voices: tts.getVoiceCatalog()
  });

  const { refs, setStatus, renderVoices } = ui;

  const updateStatus = ({ status, detail, engine }) => {
    const text = dispatchTtsRuntimeStatus({ status, detail, engine });
    setStatus(text, status === "error");
  };

  tts.onStatusChange(updateStatus);

  async function refreshVoices() {
    await tts.requestVoices();
    const prefs = tts.getPreferences();
    const voiceCatalog = tts.getVoiceCatalog();
    renderVoices(voiceCatalog, prefs.voice);
  }

  refs.loadBtn.addEventListener("click", async () => {
    try {
      await tts.ensureWorkerInitialized();
      await refreshVoices();
      setStatus("Modelo Kokoro cargado");
    } catch (error) {
      setStatus(`Error al cargar modelo: ${error.message}`, true);
    }
  });

  refs.voiceSelect.addEventListener("change", () => {
    tts.setVoice(refs.voiceSelect.value);
    setStatus(`Voz activa: ${refs.voiceSelect.value}`);
  });

  refs.speedInput.addEventListener("change", () => {
    tts.setSpeed(Number(refs.speedInput.value));
    setStatus(`Velocidad: ${Number(refs.speedInput.value).toFixed(2)}`);
  });

  if (refs.pitchInput) {
    refs.pitchInput.addEventListener("change", () => {
      tts.setFallbackPitch(Number(refs.pitchInput.value));
      setStatus(`Tono fallback: ${Number(refs.pitchInput.value).toFixed(2)}`);
    });
  }

  if (refs.fallbackLangInput) {
    refs.fallbackLangInput.addEventListener("change", () => {
      tts.setFallbackLang(refs.fallbackLangInput.value);
      setStatus(`Idioma fallback: ${refs.fallbackLangInput.value}`);
    });
  }

  if (refs.fallbackEnabledInput) {
    refs.fallbackEnabledInput.addEventListener("change", () => {
      tts.setFallbackEnabled(refs.fallbackEnabledInput.checked);
      setStatus(refs.fallbackEnabledInput.checked ? "Fallback activado" : "Fallback desactivado");
    });
  }

  refs.autoReadInput.addEventListener("change", () => {
    tts.setAutoRead(refs.autoReadInput.checked);
    setStatus(refs.autoReadInput.checked ? "Auto lectura activada" : "Auto lectura desactivada");
  });

  refs.stopBtn.addEventListener("click", () => {
    tts.stop();
  });

  refs.listenBtn.addEventListener("click", async () => {
    const lastAssistant = document.querySelector("#chatMessages .message.assistant:last-of-type");
    const text = lastAssistant?.textContent?.trim() || "No hay una respuesta del asistente para leer.";
    await tts.speak(text, { force: true });
  });

  refreshVoices();
}
