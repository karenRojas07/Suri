export const AVATAR_STATES = {
  idle: "idle",
  listening: "listening",
  thinking: "thinking",
  petting: "petting",
  speaking: "speaking",
  speaking_explain: "speaking_explain",
  suggesting: "suggesting",
  not_found: "not_found",
  celebrate: "celebrate",
  wave_hello: "wave_hello",
  tablet_reading: "tablet_reading",
  celebrating: "celebrating",
  error: "error"
};

export class AvatarStateController {
  constructor(adapter) {
    this.adapter = adapter;
    this.current = AVATAR_STATES.idle;
  }

  setState(nextState, meta = {}) {
    const state = AVATAR_STATES[nextState] ? nextState : AVATAR_STATES.idle;
    this.current = state;
    this.adapter?.onStateChange?.(state, meta);
  }

  onSemanticResult(result) {
    if (!result || !result.tipo) {
      this.setState(AVATAR_STATES.error, { reason: "resultado_invalido" });
      return;
    }

    if (result.tipo === "respuesta_directa") {
      this.setState(AVATAR_STATES.speaking_explain, { score: result.score, tema: result.tema });
      return;
    }

    if (result.tipo === "sugerencias") {
      this.setState(AVATAR_STATES.suggesting, { score: result.score, count: (result.sugerencias || []).length });
      return;
    }

    if (result.tipo === "no_encontrado") {
      this.setState(AVATAR_STATES.not_found, { score: result.score });
      return;
    }

    this.setState(AVATAR_STATES.error, { reason: result.mensaje || "error_semantico" });
  }
}
