import { AudioRecorder } from "../utils/audioRecorder.js";

const STT_WARM_KEY = "suriWhisperWarmV1";
const WHISPER_WORKER_URL = new URL("../workers/whisperWorker.js?v=20260618c", import.meta.url);
const DEFAULT_STT_CONFIG = {
  model: "onnx-community/whisper-small",
  sensitivity: "medium",
  language: "spanish",
  task: "transcribe"
};
const ALLOWED_STT_MODELS = new Set([
  "onnx-community/whisper-base",
  "onnx-community/whisper-small"
]);

class WhisperSttService {
  constructor() {
    this.worker = null;
    this.requestId = 0;
    this.pending = new Map();
    this.initPromise = null;
    this.backend = null;
    this.activeModel = DEFAULT_STT_CONFIG.model;
    this.sttConfig = { ...DEFAULT_STT_CONFIG };
    this.listeners = new Set();
    this.isWarm = localStorage.getItem(STT_WARM_KEY) === "1";
  }

  normalizeConfig(input = {}) {
    const modelRaw = String(input?.model || this.sttConfig.model || DEFAULT_STT_CONFIG.model).trim();
    const model = ALLOWED_STT_MODELS.has(modelRaw) ? modelRaw : DEFAULT_STT_CONFIG.model;

    const sensitivityRaw = String(input?.sensitivity || this.sttConfig.sensitivity || DEFAULT_STT_CONFIG.sensitivity).trim().toLowerCase();
    const sensitivity = ["low", "medium", "high"].includes(sensitivityRaw) ? sensitivityRaw : DEFAULT_STT_CONFIG.sensitivity;

    const languageRaw = String(input?.language || this.sttConfig.language || DEFAULT_STT_CONFIG.language).trim().toLowerCase();
    const language = ["spanish", "english"].includes(languageRaw) ? languageRaw : DEFAULT_STT_CONFIG.language;

    const taskRaw = String(input?.task || this.sttConfig.task || DEFAULT_STT_CONFIG.task).trim().toLowerCase();
    const task = ["transcribe", "translate"].includes(taskRaw) ? taskRaw : DEFAULT_STT_CONFIG.task;

    return {
      model,
      sensitivity,
      language,
      task
    };
  }

  setConfig(input = {}) {
    this.sttConfig = this.normalizeConfig(input);
    return { ...this.sttConfig };
  }

  getConfig() {
    return { ...this.sttConfig };
  }

  onStatusChange(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  emit(status, detail) {
    for (const listener of this.listeners) {
      listener({ status, detail: detail || "" });
    }
  }

  ensureWorker() {
    if (this.worker) return;

    this.worker = new Worker(WHISPER_WORKER_URL, { type: "module" });

    this.worker.onmessage = (event) => {
      const msg = event.data || {};

      if (msg.type === "status") {
        this.emit(msg.status, msg.detail);
        return;
      }

      const request = this.pending.get(msg.id);
      if (!request) return;

      if (msg.type === "error") {
        this.pending.delete(msg.id);
        request.reject(new Error(msg.message || "Error STT"));
        return;
      }

      if (["inited", "transcribed", "disposed"].includes(msg.type)) {
        this.pending.delete(msg.id);
        request.resolve(msg);
      }
    };
  }

  async ensureInitialized(options = {}) {
    const runtime = this.normalizeConfig(options);
    this.sttConfig = runtime;

    if (this.worker && this.backend && this.activeModel === runtime.model) {
      return { backend: this.backend, model: this.activeModel };
    }

    if (this.initPromise) return this.initPromise;

    this.ensureWorker();

    this.initPromise = this.send("init", { model: runtime.model })
      .then((res) => {
        this.backend = res.backend || null;
        this.activeModel = res.model || runtime.model;
        this.isWarm = true;
        localStorage.setItem(STT_WARM_KEY, "1");
        return res;
      })
      .catch((err) => {
        this.initPromise = null;
        throw err;
      });

    return this.initPromise;
  }

  async preload(options = null) {
    return this.ensureInitialized(options || this.sttConfig);
  }

  hasWarmCacheHint() {
    return this.isWarm;
  }

  send(type, payload) {
    if (!this.worker) throw new Error("Whisper Worker no inicializado.");

    const id = ++this.requestId;
    const p = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });

    this.worker.postMessage({ id, type, payload });
    return p;
  }

  async transcribeBlob(blob, { language = "spanish", task = "transcribe", allowWebSpeechFallback = false } = {}) {
    const runtime = this.normalizeConfig({ ...this.sttConfig, language, task });
    this.sttConfig = runtime;

    try {
      await this.ensureInitialized(runtime);
      const mono16k = await AudioRecorder.blobToMonoFloat32(blob, 16000);
      const prepared = AudioRecorder.preprocessForSpeech(mono16k, 16000, {
        sensitivity: runtime.sensitivity
      });

      const result = await this.send("transcribe", {
        audioBuffer: prepared.buffer,
        language: runtime.language,
        task: runtime.task,
        model: runtime.model,
        sensitivity: runtime.sensitivity
      });

      return {
        text: result.text || "",
        backend: result.backend || this.backend || "unknown",
        model: result.model || this.activeModel || runtime.model,
        source: "whisper"
      };
    } catch (error) {
      if (allowWebSpeechFallback) {
        const fallbackText = await this.tryWebSpeechFallback();
        if (fallbackText) {
          return {
            text: fallbackText,
            backend: "webspeech",
            source: "fallback"
          };
        }
      }
      throw error;
    }
  }

  async tryWebSpeechFallback() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return "";

    this.emit("fallback", "Whisper falló. Usando fallback Web Speech.");

    return new Promise((resolve) => {
      const recognition = new SpeechRecognition();
      recognition.lang = "es-ES";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript || "";
        resolve(transcript.trim());
      };

      recognition.onerror = () => resolve("");
      recognition.onend = () => resolve("");

      try {
        recognition.start();
      } catch {
        resolve("");
      }
    });
  }
}

let singleton = null;

export function getWhisperSttService() {
  if (!singleton) singleton = new WhisperSttService();
  return singleton;
}
