export class AudioRecorder {
  constructor({ maxDurationMs = 30000 } = {}) {
    this.maxDurationMs = maxDurationMs;
    this.stream = null;
    this.recorder = null;
    this.chunks = [];
    this.timeoutId = null;
  }

  static getSupportedMimeType() {
    const candidates = [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/ogg;codecs=opus",
      "audio/mp4"
    ];

    for (const type of candidates) {
      if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return "";
  }

  async start() {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("Tu navegador no soporta captura de micrófono.");
    }

    if (this.recorder && this.recorder.state === "recording") {
      throw new Error("Ya existe una grabación en curso.");
    }

    const audioConstraints = {
      channelCount: { ideal: 1 },
      sampleRate: { ideal: 16000 },
      sampleSize: { ideal: 16 },
      echoCancellation: { ideal: true },
      noiseSuppression: { ideal: true },
      autoGainControl: { ideal: true }
    };

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints });
    } catch {
      // Fallback conservador para navegadores que no soportan constraints detallados.
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    this.chunks = [];

    const mimeType = AudioRecorder.getSupportedMimeType();
    const options = mimeType ? { mimeType } : undefined;

    this.recorder = new MediaRecorder(this.stream, options);
    this.recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.chunks.push(event.data);
      }
    };

    this.recorder.start();
    this.timeoutId = window.setTimeout(() => {
      if (this.recorder && this.recorder.state === "recording") {
        this.recorder.stop();
      }
    }, this.maxDurationMs);
  }

  async stop() {
    if (!this.recorder) {
      throw new Error("No hay una grabación activa.");
    }

    if (this.recorder.state === "inactive") {
      const mimeType = this.recorder.mimeType || "audio/webm";
      const blob = new Blob(this.chunks, { type: mimeType });
      this.cleanup();
      return blob;
    }

    const recorder = this.recorder;
    const mimeType = recorder.mimeType || "audio/webm";

    const blob = await new Promise((resolve, reject) => {
      recorder.onstop = () => {
        try {
          resolve(new Blob(this.chunks, { type: mimeType }));
        } catch (error) {
          reject(error);
        }
      };

      recorder.onerror = () => {
        reject(new Error("Error durante la grabación de audio."));
      };

      recorder.stop();
    });

    this.cleanup();
    return blob;
  }

  cancel() {
    if (this.recorder && this.recorder.state !== "inactive") {
      this.recorder.stop();
    }
    this.cleanup();
  }

  cleanup() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (this.stream) {
      for (const track of this.stream.getTracks()) {
        track.stop();
      }
    }

    this.stream = null;
    this.recorder = null;
    this.chunks = [];
  }

  static async blobToMonoFloat32(blob, targetSampleRate = 16000) {
    const audioContext = new AudioContext();

    try {
      const arrayBuffer = await blob.arrayBuffer();
      const decoded = await audioContext.decodeAudioData(arrayBuffer);
      const mono = AudioRecorder.mixToMono(decoded);
      return AudioRecorder.downsample(mono, decoded.sampleRate, targetSampleRate);
    } finally {
      await audioContext.close();
    }
  }

  static mixToMono(audioBuffer) {
    const channels = audioBuffer.numberOfChannels;
    if (channels === 1) {
      return audioBuffer.getChannelData(0);
    }

    const length = audioBuffer.length;
    const output = new Float32Array(length);

    for (let c = 0; c < channels; c += 1) {
      const input = audioBuffer.getChannelData(c);
      for (let i = 0; i < length; i += 1) {
        output[i] += input[i] / channels;
      }
    }

    return output;
  }

  static downsample(input, srcRate, dstRate) {
    if (srcRate === dstRate) return new Float32Array(input);

    const ratio = srcRate / dstRate;
    const newLength = Math.round(input.length / ratio);
    const result = new Float32Array(newLength);

    for (let i = 0; i < newLength; i += 1) {
      const pos = i * ratio;
      const left = Math.floor(pos);
      const right = Math.min(left + 1, input.length - 1);
      const alpha = pos - left;
      result[i] = input[left] * (1 - alpha) + input[right] * alpha;
    }

    return result;
  }

  static preprocessForSpeech(input, sampleRate = 16000, options = {}) {
    const source = input instanceof Float32Array ? input : new Float32Array(input || []);
    if (!source.length) return source;

    const sensitivity = AudioRecorder.normalizeSensitivity(options?.sensitivity);
    const highPassed = AudioRecorder.highPassFilter(source, sampleRate, 110);
    const gated = AudioRecorder.applyNoiseGate(highPassed, sensitivity);
    const trimmed = AudioRecorder.trimSilence(gated, sampleRate, sensitivity);
    return AudioRecorder.normalizePeak(trimmed, 0.92, 6);
  }

  static normalizeSensitivity(value) {
    const raw = String(value || "").trim().toLowerCase();
    if (["low", "baja", "agresiva"].includes(raw)) return "low";
    if (["high", "alta", "suave"].includes(raw)) return "high";
    return "medium";
  }

  static highPassFilter(input, sampleRate = 16000, cutoffHz = 110) {
    if (!input.length) return input;

    const output = new Float32Array(input.length);
    const dt = 1 / Math.max(1, sampleRate);
    const rc = 1 / (2 * Math.PI * Math.max(20, cutoffHz));
    const alpha = rc / (rc + dt);

    output[0] = input[0];
    for (let i = 1; i < input.length; i += 1) {
      output[i] = alpha * (output[i - 1] + input[i] - input[i - 1]);
    }

    return output;
  }

  static applyNoiseGate(input, sensitivity = "medium") {
    if (!input.length) return input;

    const absSamples = new Float32Array(input.length);
    for (let i = 0; i < input.length; i += 1) {
      absSamples[i] = Math.abs(input[i]);
    }

    const sorted = Array.from(absSamples).sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length * 0.5)] || 0;
    const p75 = sorted[Math.floor(sorted.length * 0.75)] || median;
    const sensitivityFactor = sensitivity === "high"
      ? 0.75
      : (sensitivity === "low" ? 1.35 : 1);
    const threshold = Math.max(0.003, median * 2.2, p75 * 0.4) * sensitivityFactor;

    const lowBandGain = sensitivity === "low"
      ? 0.06
      : (sensitivity === "high" ? 0.72 : 0.52);
    const midBandGain = sensitivity === "low"
      ? 0.32
      : (sensitivity === "high" ? 0.9 : 0.78);

    const output = new Float32Array(input.length);
    for (let i = 0; i < input.length; i += 1) {
      const value = input[i];
      const amp = Math.abs(value);
      if (amp < threshold) {
        output[i] = value * lowBandGain;
      } else if (amp < threshold * 1.8) {
        output[i] = value * midBandGain;
      } else {
        output[i] = value;
      }
    }

    return output;
  }

  static trimSilence(input, sampleRate = 16000, sensitivity = "medium") {
    if (!input.length) return input;

    const threshold = sensitivity === "high"
      ? 0.0022
      : (sensitivity === "low" ? 0.0038 : 0.0028);
    let start = 0;
    let end = input.length - 1;

    while (start < input.length && Math.abs(input[start]) < threshold) {
      start += 1;
    }
    while (end > start && Math.abs(input[end]) < threshold) {
      end -= 1;
    }

    if (start >= end) {
      return input;
    }

    const pad = Math.round(Math.max(1, sampleRate) * 0.12);
    const safeStart = Math.max(0, start - pad);
    const safeEnd = Math.min(input.length, end + pad);
    return input.slice(safeStart, safeEnd);
  }

  static normalizePeak(input, targetPeak = 0.92, maxGain = 6) {
    if (!input.length) return input;

    let peak = 0;
    for (let i = 0; i < input.length; i += 1) {
      const amp = Math.abs(input[i]);
      if (amp > peak) peak = amp;
    }

    if (!Number.isFinite(peak) || peak <= 0) {
      return input;
    }

    const gain = Math.min(maxGain, targetPeak / peak);
    if (gain <= 1.001) {
      return input;
    }

    const output = new Float32Array(input.length);
    for (let i = 0; i < input.length; i += 1) {
      const value = input[i] * gain;
      output[i] = Math.max(-1, Math.min(1, value));
    }
    return output;
  }
}
