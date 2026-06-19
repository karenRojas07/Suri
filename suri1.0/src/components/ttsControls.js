export function mountTtsControls(container, model) {
  if (!container) return null;

  container.innerHTML = `
    <div class="tts-controls">
      <div class="tts-row">
        <button class="btn-action" id="ttsListenBtn" type="button">Escuchar</button>
        <button class="btn-action" id="ttsStopBtn" type="button">Detener</button>
        <button class="btn-action" id="ttsLoadBtn" type="button">Cargar Kokoro</button>
      </div>

      <div class="tts-row">
        <select class="tts-select" id="ttsVoiceSelect" title="Voz Kokoro"></select>
        <label class="tts-checkbox" for="ttsSpeedInput">Velocidad</label>
        <input class="tts-speed" id="ttsSpeedInput" type="number" min="0.7" max="1.6" step="0.05" title="Velocidad" />
        <label class="tts-checkbox" for="ttsPitchInput">Tono</label>
        <input class="tts-speed" id="ttsPitchInput" type="number" min="0.5" max="2" step="0.05" title="Tono fallback" />
      </div>

      <div class="tts-row">
        <label class="tts-checkbox" for="ttsFallbackLangInput">Idioma fallback</label>
        <select class="tts-select" id="ttsFallbackLangInput" title="Idioma fallback">
          <option value="es-ES">Espanol (Espana)</option>
          <option value="es-MX">Espanol (Mexico)</option>
          <option value="es-CO">Espanol (Colombia)</option>
          <option value="es-AR">Espanol (Argentina)</option>
        </select>
        <label class="tts-checkbox" for="ttsFallbackEnabledInput">
          <input id="ttsFallbackEnabledInput" type="checkbox" />
          Fallback navegador
        </label>
        <label class="tts-checkbox" for="ttsAutoReadInput">
          <input id="ttsAutoReadInput" type="checkbox" />
          Auto lectura
        </label>
      </div>

      <div class="tts-status" id="ttsStatusText">Inicializando...</div>
    </div>
  `;

  const listenBtn = container.querySelector("#ttsListenBtn");
  const stopBtn = container.querySelector("#ttsStopBtn");
  const loadBtn = container.querySelector("#ttsLoadBtn");
  const voiceSelect = container.querySelector("#ttsVoiceSelect");
  const speedInput = container.querySelector("#ttsSpeedInput");
  const pitchInput = container.querySelector("#ttsPitchInput");
  const fallbackLangInput = container.querySelector("#ttsFallbackLangInput");
  const fallbackEnabledInput = container.querySelector("#ttsFallbackEnabledInput");
  const autoReadInput = container.querySelector("#ttsAutoReadInput");
  const statusText = container.querySelector("#ttsStatusText");

  function languageBadge(language) {
    const lang = String(language || "").toLowerCase();
    if (lang.includes("spanish") || lang === "es" || lang.startsWith("es-")) return "ES";
    if (lang.includes("english") || lang === "en" || lang.startsWith("en-")) return "EN";
    if (!lang) return "N/A";
    return "OTRO";
  }

  function normalizeVoiceEntries(voices) {
    if (!Array.isArray(voices) || voices.length === 0) {
      return [{ id: "af_heart", language: "" }];
    }

    return voices.map((entry) => {
      if (typeof entry === "string") return { id: entry, language: "" };
      return {
        id: entry?.id || "af_heart",
        language: entry?.language || ""
      };
    });
  }

  function renderVoices(voices, selectedVoice) {
    const list = normalizeVoiceEntries(voices);
    voiceSelect.innerHTML = list
      .map((voice) => `<option value="${voice.id}">${voice.id} (${languageBadge(voice.language)})</option>`)
      .join("");

    const ids = list.map((v) => v.id);
    voiceSelect.value = ids.includes(selectedVoice) ? selectedVoice : ids[0];
  }

  function setStatus(message, isError = false) {
    statusText.textContent = message;
    statusText.style.color = isError ? "#b91c1c" : "#64748b";
  }

  speedInput.value = String(model.prefs.speed);
  pitchInput.value = String(model.prefs.fallbackPitch);
  fallbackLangInput.value = model.prefs.fallbackLang || "es-ES";
  fallbackEnabledInput.checked = Boolean(model.prefs.fallbackEnabled);
  autoReadInput.checked = Boolean(model.prefs.autoRead);
  renderVoices(model.voices || [], model.prefs.voice);
  setStatus("Listo");

  return {
    setStatus,
    renderVoices,
    refs: {
      listenBtn,
      stopBtn,
      loadBtn,
      voiceSelect,
      speedInput,
      pitchInput,
      fallbackLangInput,
      fallbackEnabledInput,
      autoReadInput
    }
  };
}
