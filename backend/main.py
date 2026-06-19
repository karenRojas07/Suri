import json
import logging
import os
import re
import unicodedata
from copy import deepcopy
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Any, Literal
from urllib import error as urllib_error
from urllib import request as urllib_request

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

# --- Logging Setup ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

APP_TITLE = "SURI API"
OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions"
DEFAULT_OPENAI_MODEL = "gpt-4o-mini"
DEFAULT_SYSTEM_PROMPT = "Eres Suri y respondes de forma clara y util."
FRONTEND_MISSING_DETAIL = "Frontend no disponible. Verifica backend/static/index.html."


class SemanticConfig(BaseModel):
    umbralAlto: float = 0.78
    umbralMedio: float = 0.62
    umbralSugerenciaBaja: float = 0.48
    margenDirecto: float = 0.08
    maxSugerencias: int = 3


class ChatAskRequest(BaseModel):
    userText: str = Field(min_length=1)
    responseMode: Literal["faqs", "llm", "hybrid"] = "faqs"
    faqSimilarityThreshold: float = 0.78
    semanticOptions: SemanticConfig | None = None
    llmProvider: Literal["mock", "openai", "gemini"] = "mock"


class FaqsUpdateRequest(BaseModel):
    faqs: list[dict[str, Any]]


class ConfigUpdateRequest(BaseModel):
    config: dict[str, Any]


COURTESY_FAQS = [
    {
        "tema": "Saludos y cordialidad",
        "patterns": ["buenos dias", "muy buenos dias", "hola buenos dias"],
        "respuesta": "Buenos dias. Claro que si, estoy aqui para ayudarte con mucho gusto. Cuentame que necesitas y lo revisamos juntos.",
    },
    {
        "tema": "Saludos y cordialidad",
        "patterns": ["buenas tardes", "muy buenas tardes", "hola buenas tardes"],
        "respuesta": "Buenas tardes. Con gusto te ayudo. Dime tu consulta y busco la mejor respuesta en la base local.",
    },
    {
        "tema": "Saludos y cordialidad",
        "patterns": ["buenas noches", "muy buenas noches", "hola buenas noches"],
        "respuesta": "Buenas noches. Estoy listo para ayudarte. Puedes hacerme tu pregunta cuando quieras.",
    },
    {
        "tema": "Saludos y cordialidad",
        "patterns": ["hola", "hola suri", "que tal", "como estas", "buen dia", "saludos"],
        "respuesta": "Hola. Me alegra saludarte. Estoy listo para ayudarte con informacion y preguntas frecuentes.",
    },
    {
        "tema": "Saludos y cordialidad",
        "patterns": ["gracias", "muchas gracias", "te agradezco", "muy amable", "gracias suri"],
        "respuesta": "Con gusto. Para eso estoy. Si necesitas algo mas, aqui sigo atento para ayudarte.",
    },
]


@dataclass
class SemanticOptions:
    umbral_alto: float = 0.78
    umbral_medio: float = 0.62
    umbral_sugerencia_baja: float = 0.48
    margen_directo: float = 0.08
    max_sugerencias: int = 3


class ConfigService:
    def __init__(self, config_file: Path) -> None:
        self.config_file = config_file
        self._config = self._load_config()

    @property
    def config(self) -> dict[str, Any]:
        return deepcopy(self._config)

    def _load_config(self) -> dict[str, Any]:
        with self.config_file.open("r", encoding="utf-8") as handle:
            payload = json.load(handle)
        if not isinstance(payload, dict):
            raise ValueError("La configuracion principal debe ser un objeto JSON.")
        return payload

    def save(self, payload: dict[str, Any]) -> dict[str, Any]:
        if not isinstance(payload, dict):
            raise ValueError("La configuracion enviada debe ser un objeto JSON.")
        self._config = payload
        with self.config_file.open("w", encoding="utf-8") as handle:
            json.dump(self._config, handle, ensure_ascii=False, indent=2)
        return self.config

    def build_json_data(self, faqs: list[dict[str, Any]]) -> dict[str, Any]:
        cfg = self._config
        ai = cfg.get("ai", {})
        voice = cfg.get("voice", {})
        listening = cfg.get("listening", {})
        avatar = cfg.get("avatar", {})
        ui = cfg.get("ui", {})

        voz = {
            "lang": voice.get("lang", "es-ES"),
            "rate": voice.get("rate", 1.1),
            "pitch": voice.get("pitch", 1.2),
            "primary": voice.get("primary", {}),
            "secondary": voice.get("secondary", {}),
            "tts": voice.get("tts", {}),
        }
        escucha = {
            "mode": listening.get("mode", "normal"),
            "model": listening.get("model", "onnx-community/whisper-small"),
            "sensitivity": listening.get("sensitivity", "medium"),
            "language": listening.get("language", "spanish"),
            "task": listening.get("task", "transcribe"),
        }

        return {
            "general": {
                "provider": ai.get("provider", "mock"),
                "primaryModel": ai.get("primaryModel", "mock-default"),
                "secondaryModel": ai.get("secondaryModel", "mock-default"),
                "apiKey": ai.get("apiKey", ""),
                "systemPrompt": ai.get("systemPrompt", ""),
                "responseMode": ai.get("responseMode", "faqs"),
                "faqSimilarityThreshold": ai.get("faqSimilarityThreshold", 0.78),
                "uiMode": ui.get("mode", "embedded"),
            },
            "voz": voz,
            "voice": deepcopy(voz),
            "escucha": escucha,
            "listening": deepcopy(escucha),
            "avatar": {
                "scale": avatar.get("scale", 0.65),
                "modelUrl": avatar.get("modelUrl", ""),
                "initialExpression": avatar.get("initialExpression", "happy"),
                "initialGesture": avatar.get("initialGesture", "rest"),
                "initialPlaybackRef": avatar.get("initialPlaybackRef", ""),
                "initialSequence": avatar.get("initialSequence", []),
                "defaultIdleState": avatar.get("defaultIdleState", "idle"),
                "welcomeBubble": avatar.get("welcomeBubble", ""),
                "bubbleAnimationRules": avatar.get("bubbleAnimationRules", []),
                "animationKeywordMap": avatar.get("animationKeywordMap", {}),
                "backgroundImageUrl": ui.get("backgroundImageUrl", ""),
                "logoUrl": ui.get("logoUrl", ""),
                "avatar3dOffsetX": ui.get("avatar3dOffsetX", 0),
                "avatar3dOffsetY": ui.get("avatar3dOffsetY", 0),
                "avatar3dOffset": ui.get("avatar3dOffset", 0),
                "modelCatalog": avatar.get("modelCatalog", []),
            },
            "faqs": deepcopy(faqs),
        }


class FaqService:
    def __init__(self, data_file: Path, default_data_file: Path | None = None) -> None:
        self.data_file = data_file
        self.default_data_file = default_data_file or data_file
        self._faqs = self._load_faqs_with_fallback()

    @property
    def faqs(self) -> list[dict[str, Any]]:
        return self._faqs

    def reload(self) -> list[dict[str, Any]]:
        self._faqs = self._load_faqs_with_fallback()
        return self._faqs

    def _load_faqs_with_fallback(self) -> list[dict[str, Any]]:
        try:
            loaded = self._load_faqs()
        except Exception:
            loaded = []

        if loaded:
            return loaded

        return self._restore_from_default_file()

    def _restore_from_default_file(self) -> list[dict[str, Any]]:
        with self.default_data_file.open("r", encoding="utf-8") as handle:
            source = json.load(handle)

        if not isinstance(source, list):
            raise ValueError("El archivo default de FAQs debe contener un arreglo JSON.")

        summary = self.save_faqs(source)
        if summary.get("total", 0) <= 0:
            raise ValueError("No se pudieron restaurar FAQs desde el dataset base.")

        return self._load_faqs()

    def _load_faqs(self) -> list[dict[str, Any]]:
        with self.data_file.open("r", encoding="utf-8") as handle:
            source = json.load(handle)

        if not isinstance(source, list):
            raise ValueError("El archivo de FAQs debe contener un arreglo JSON.")

        normalized: list[dict[str, Any]] = []
        for idx, item in enumerate(source):
            if not isinstance(item, dict):
                continue

            related = item.get("faqsRelacionadas") or item.get("faq_relacionada") or item.get("faqRelacionada") or item.get("relatedFaqIds")
            pagina = item.get("pagina") or item.get("paginas") or []

            if isinstance(related, str):
                related_list = [v.strip() for v in related.split(",") if v.strip()]
            elif isinstance(related, list):
                related_list = [str(v).strip() for v in related if str(v).strip()]
            else:
                related_list = []

            if isinstance(pagina, str):
                pagina_list = [int(v.strip()) for v in pagina.split(",") if v.strip().isdigit()]
            elif isinstance(pagina, list):
                pagina_list = [int(v) for v in pagina if str(v).isdigit()]
            else:
                pagina_list = []

            normalized.append(
                {
                    "id": str(item.get("id") or f"faq-{idx + 1}"),
                    "activo": item.get("activo", True) is not False,
                    "tema": str(item.get("tema") or "General"),
                    "fuente": str(item.get("fuente") or item.get("fuente_primaria") or item.get("source") or ""),
                    "pagina": pagina_list,
                    "pregunta": str(item.get("pregunta") or ""),
                    "variaciones": [str(v) for v in item.get("variaciones", []) if str(v).strip()],
                    "respuesta": str(item.get("respuesta") or ""),
                    "tags": [str(v) for v in item.get("tags", []) if str(v).strip()],
                    "faqsRelacionadas": related_list,
                    "prioridad": int(item.get("prioridad") or 5),
                }
            )

        return [faq for faq in normalized if faq["pregunta"] and faq["respuesta"]]

    def save_faqs(self, items: list[dict[str, Any]]) -> dict[str, int]:
        if not isinstance(items, list):
            raise ValueError("Las FAQs deben enviarse como lista.")

        self._faqs = []
        for idx, item in enumerate(items):
            if not isinstance(item, dict):
                continue
            normalized = {
                "id": str(item.get("id") or f"faq-{idx + 1}"),
                "activo": item.get("activo", True) is not False,
                "tema": str(item.get("tema") or "General"),
                "fuente": str(item.get("fuente") or item.get("fuente_primaria") or ""),
                "pagina": item.get("pagina") if isinstance(item.get("pagina"), list) else [],
                "pregunta": str(item.get("pregunta") or ""),
                "variaciones": item.get("variaciones") if isinstance(item.get("variaciones"), list) else [],
                "respuesta": str(item.get("respuesta") or ""),
                "tags": item.get("tags") if isinstance(item.get("tags"), list) else [],
                "faqsRelacionadas": item.get("faqsRelacionadas") if isinstance(item.get("faqsRelacionadas"), list) else [],
                "prioridad": int(item.get("prioridad") or 5),
            }
            if normalized["pregunta"] and normalized["respuesta"]:
                self._faqs.append(normalized)

        with self.data_file.open("w", encoding="utf-8") as handle:
            json.dump(self._faqs, handle, ensure_ascii=False, indent=2)

        active_count = len([faq for faq in self._faqs if faq["activo"]])
        return {"total": len(self._faqs), "activas": active_count}

    def reset_to_default(self) -> dict[str, int]:
        summary = {
            "total": len(self._restore_from_default_file()),
            "activas": len([faq for faq in self._faqs if faq.get("activo", True)]),
        }
        self._faqs = self._load_faqs_with_fallback()
        return summary

    @staticmethod
    def _normalize_text(value: str) -> str:
        text = unicodedata.normalize("NFD", str(value or ""))
        text = "".join(ch for ch in text if unicodedata.category(ch) != "Mn")
        text = text.lower()
        text = re.sub(r"[^a-z0-9\s]", " ", text)
        text = re.sub(r"\b(el|la|los|las|un|una|unos|unas|de|del|al)\b", " ", text)
        text = re.sub(r"\s+", " ", text).strip()
        return text

    @staticmethod
    def _token_similarity(a: str, b: str) -> float:
        set_a = set(a.split())
        set_b = set(b.split())
        if not set_a or not set_b:
            return 0.0
        intersection = len(set_a.intersection(set_b))
        union = len(set_a.union(set_b))
        return intersection / union if union else 0.0

    @staticmethod
    def _string_similarity(a: str, b: str) -> float:
        if not a or not b:
            return 0.0
        return SequenceMatcher(None, a, b).ratio()

    def _score_faq(self, question_norm: str, faq: dict[str, Any]) -> float:
        q = self._normalize_text(faq.get("pregunta", ""))
        variations = [self._normalize_text(v) for v in faq.get("variaciones", [])]
        tags = " ".join(self._normalize_text(v) for v in faq.get("tags", []))
        topic = self._normalize_text(faq.get("tema", ""))

        base_similarity = max(
            self._string_similarity(question_norm, q),
            self._token_similarity(question_norm, q),
        )

        variation_similarity = 0.0
        if variations:
            variation_similarity = max(
                max(self._string_similarity(question_norm, v) for v in variations),
                max(self._token_similarity(question_norm, v) for v in variations),
            )

        topic_similarity = max(
            self._token_similarity(question_norm, topic),
            self._token_similarity(question_norm, tags),
        )

        score = (0.62 * base_similarity) + (0.28 * variation_similarity) + (0.10 * topic_similarity)
        return max(0.0, min(1.0, score))

    def _is_direct_text_match(self, question_norm: str, faq: dict[str, Any]) -> bool:
        candidates = [self._normalize_text(faq.get("pregunta", ""))]
        candidates.extend(self._normalize_text(v) for v in faq.get("variaciones", []))
        candidates = [c for c in candidates if c]

        for candidate in candidates:
            if candidate == question_norm:
                return True
            if candidate and (candidate in question_norm or question_norm in candidate):
                return True
        return False

    def _courtesy_match(self, question_norm: str) -> dict[str, Any] | None:
        for item in COURTESY_FAQS:
            for pattern in item["patterns"]:
                p = self._normalize_text(pattern)
                if not p:
                    continue
                if question_norm == p or question_norm.startswith(f"{p} ") or question_norm.endswith(f" {p}") or p in question_norm:
                    return item
        return None

    def busqueda_semantica(self, pregunta_usuario: str, options: SemanticOptions | None = None) -> dict[str, Any]:
        opts = options or SemanticOptions()
        pregunta = str(pregunta_usuario or "").strip()

        if not pregunta:
            return {
                "tipo": "error",
                "mensaje": "La pregunta no puede estar vacia.",
                "respuesta": None,
                "preguntaDetectada": None,
                "tema": None,
                "score": 0,
                "sugerencias": [],
                "resultado": None,
            }

        question_norm = self._normalize_text(pregunta)
        courtesy = self._courtesy_match(question_norm)
        if courtesy:
            return {
                "tipo": "respuesta_directa",
                "mensaje": "Encontre una interaccion cordial reconocida.",
                "respuesta": courtesy["respuesta"],
                "preguntaDetectada": pregunta,
                "tema": courtesy["tema"],
                "score": 1,
                "sugerencias": [],
                "resultado": courtesy,
            }

        active = [faq for faq in self._faqs if faq.get("activo", True)]
        if not active:
            return {
                "tipo": "no_encontrado",
                "mensaje": "No hay preguntas frecuentes activas para consultar.",
                "respuesta": None,
                "preguntaDetectada": None,
                "tema": None,
                "score": 0,
                "sugerencias": [],
                "resultado": None,
            }

        ranking: list[dict[str, Any]] = []
        for faq in active:
            score = round(self._score_faq(question_norm, faq), 4)
            ranking.append({"faq": faq, "score": score})

        ranking.sort(key=lambda item: (item["score"], item["faq"].get("prioridad", 0)), reverse=True)

        top = ranking[0]
        second = ranking[1] if len(ranking) > 1 else None
        top_score = top["score"]
        second_score = second["score"] if second else 0
        margin = round(top_score - second_score, 4)
        direct_match = self._is_direct_text_match(question_norm, top["faq"])

        if top and ((top_score >= opts.umbral_alto and (margin >= opts.margen_directo or top_score >= 0.9)) or direct_match):
            return {
                "tipo": "respuesta_directa",
                "mensaje": "Encontre una coincidencia textual clara en la base local." if direct_match else "Encontre una respuesta con alta confianza.",
                "respuesta": top["faq"]["respuesta"],
                "preguntaDetectada": top["faq"]["pregunta"],
                "tema": top["faq"]["tema"],
                "score": top_score,
                "sugerencias": [],
                "resultado": top["faq"],
            }

        if top and top_score >= opts.umbral_sugerencia_baja:
            max_items = max(1, min(10, int(opts.max_sugerencias)))
            suggestions = [
                {
                    "id": item["faq"]["id"],
                    "pregunta": item["faq"]["pregunta"],
                    "tema": item["faq"]["tema"],
                    "score": item["score"],
                    "respuesta": item["faq"]["respuesta"],
                    "prioridad": item["faq"].get("prioridad", 5),
                }
                for item in ranking[:max_items]
                if item["score"] >= opts.umbral_sugerencia_baja
            ]

            has_medium = top_score >= opts.umbral_medio
            return {
                "tipo": "sugerencias",
                "mensaje": "No estoy completamente seguro. Te dejo opciones cercanas para elegir." if has_medium else "No encontre una coincidencia suficientemente confiable. Quiza te refieras a una de estas preguntas.",
                "respuesta": None,
                "preguntaDetectada": top["faq"]["pregunta"],
                "tema": top["faq"]["tema"],
                "score": top_score,
                "sugerencias": suggestions,
                "resultado": top["faq"],
            }

        return {
            "tipo": "no_encontrado",
            "mensaje": "No encontre una coincidencia clara en la base local. Reformula tu pregunta.",
            "respuesta": None,
            "preguntaDetectada": None,
            "tema": None,
            "score": top_score,
            "sugerencias": [],
            "resultado": None,
        }


BASE_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = BASE_DIR / "backend"
DATA_DIR = BACKEND_DIR / "data"
STATIC_DIR = BACKEND_DIR / "static"
ASSETS_DIR = STATIC_DIR / "assets"
INDEX_HTML_PATH = STATIC_DIR / "index.html"

FAQS_PATH = DATA_DIR / "faqs_diari_control_fiscal.json"
DEFAULT_FAQS_PATH = DATA_DIR / "default_faqs_diari_control_fiscal.json"
CONFIG_PATH = DATA_DIR / "app_config.json"

faq_service = FaqService(data_file=FAQS_PATH, default_data_file=DEFAULT_FAQS_PATH)
config_service = ConfigService(config_file=CONFIG_PATH)


def ensure_faq_base_loaded() -> None:
    if faq_service.faqs:
        return
    faq_service.reset_to_default()


app = FastAPI(title=APP_TITLE)


@app.get("/api/hello")
async def hello() -> dict[str, str]:
    return {"message": "SURI backend activo"}


@app.get("/api/health")
async def health_check() -> dict[str, str]:
    return {"status": "healthy"}


@app.get("/api/config")
async def get_config() -> dict[str, Any]:
    return {
        "ok": True,
        "config": config_service.config,
    }


@app.post("/api/config")
async def update_config(payload: ConfigUpdateRequest) -> dict[str, Any]:
    saved = config_service.save(payload.config)
    return {
        "ok": True,
        "config": saved,
    }


@app.get("/api/faqs")
async def list_faqs() -> dict[str, Any]:
    ensure_faq_base_loaded()
    faqs = faq_service.faqs
    return {
        "total": len(faqs),
        "activas": len([faq for faq in faqs if faq.get("activo", True)]),
        "faqs": faqs,
    }


@app.post("/api/faqs")
async def update_faqs(payload: FaqsUpdateRequest) -> dict[str, Any]:
    summary = faq_service.save_faqs(payload.faqs)
    return {
        "ok": True,
        **summary,
    }


@app.post("/api/faqs/reload")
async def reload_faqs() -> dict[str, Any]:
    faqs = faq_service.reload()
    return {
        "ok": True,
        "total": len(faqs),
    }


@app.post("/api/faqs/reset")
async def reset_faqs() -> dict[str, Any]:
    summary = faq_service.reset_to_default()
    return {
        "ok": True,
        **summary,
    }


@app.get("/api/app-info")
async def get_app_info() -> dict[str, Any]:
    ensure_faq_base_loaded()
    faqs = faq_service.faqs
    active_faqs = [faq for faq in faqs if faq.get("activo", True)]
    summary_by_topic: dict[str, int] = {}
    for faq in active_faqs:
        topic = str(faq.get("tema") or "General")
        summary_by_topic[topic] = summary_by_topic.get(topic, 0) + 1

    return {
        "ok": True,
        "summary": {
            "faqTotal": len(faqs),
            "faqActivas": len(active_faqs),
            "topics": len(summary_by_topic),
            "responseMode": config_service.config.get("ai", {}).get("responseMode", "faqs"),
            "llmProvider": config_service.config.get("ai", {}).get("provider", "mock"),
        },
        "topics": summary_by_topic,
        "jsonData": config_service.build_json_data(faqs),
    }


def _build_llm_mock_answer(user_text: str) -> str:
    return (
        "Como modo mock de LLM, interpreto tu consulta asi: "
        f'"{user_text.strip()}". '
        "Para respuestas generativas reales integra un proveedor LLM."
    )


def _build_faq_fallback_response(semantic_result: dict[str, Any], note: str | None = None) -> dict[str, Any]:
    result_type = str(semantic_result.get("tipo") or "")
    base_answer = semantic_result.get("mensaje") or "No encontre una FAQ adecuada para tu consulta."

    if result_type == "respuesta_directa":
        base_answer = semantic_result.get("respuesta") or base_answer

    if note:
        base_answer = f"{base_answer}\n\n{note}"

    payload: dict[str, Any] = {
        "answer": base_answer,
        "responseMethod": "faq",
        "faqResult": semantic_result,
    }

    if result_type == "sugerencias":
        payload["suggestions"] = semantic_result.get("sugerencias", [])

    return payload


def _is_knowledge_inventory_query(user_text: str) -> bool:
    normalized = faq_service._normalize_text(user_text)
    hints = [
        "informacion que tiene guardada",
        "que informacion tiene guardada",
        "que informacion tienes guardada",
        "que informacion tienes",
        "que sabes",
        "que tienes guardado",
        "que datos tienes",
        "que informacion manejas",
    ]
    return any(hint in normalized for hint in hints)


def _build_knowledge_inventory_response() -> dict[str, Any]:
    ensure_faq_base_loaded()
    faqs = faq_service.faqs
    active_faqs = [faq for faq in faqs if faq.get("activo", True)]

    by_topic: dict[str, int] = {}
    for faq in active_faqs:
        topic = str(faq.get("tema") or "General")
        by_topic[topic] = by_topic.get(topic, 0) + 1

    top_topics = sorted(by_topic.items(), key=lambda item: item[1], reverse=True)[:6]
    topic_lines = [f"- {topic}: {count}" for topic, count in top_topics]
    detail = "\n".join(topic_lines) if topic_lines else "- No hay temas activos cargados."

    return {
        "answer": (
            "Esta es la informacion que tengo guardada actualmente en mi base local:\n"
            f"- FAQs totales: {len(faqs)}\n"
            f"- FAQs activas: {len(active_faqs)}\n"
            f"- Temas activos: {len(by_topic)}\n"
            "Temas con mas contenido:\n"
            f"{detail}"
        ),
        "responseMethod": "faq",
        "faqResult": {
            "tipo": "inventario_base_local",
            "score": 1.0,
            "resultado": {"fuente": "base_faq_local"},
        },
    }


def _call_openai_chat(*, user_text: str, model: str, api_key: str, system_prompt: str) -> str:
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_text},
        ],
        "temperature": 0.25,
    }

    req = urllib_request.Request(
        url=OPENAI_CHAT_COMPLETIONS_URL,
        data=json.dumps(payload).encode("utf-8"),
        method="POST",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
        },
    )

    try:
        with urllib_request.urlopen(req, timeout=45) as response:
            raw = response.read().decode("utf-8")
        parsed = json.loads(raw)
    except urllib_error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="ignore")
        raise HTTPException(status_code=502, detail=f"OpenAI HTTP {exc.code}: {detail[:400]}") from exc
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"No se pudo conectar con OpenAI: {exc}") from exc

    content = (
        parsed.get("choices", [{}])[0]
        .get("message", {})
        .get("content", "")
    )
    answer = str(content or "").strip()
    if not answer:
        raise HTTPException(status_code=502, detail="OpenAI no devolvio contenido en la respuesta.")
    return answer


@app.post("/api/chat/ask")
async def chat_ask(payload: ChatAskRequest) -> dict[str, Any]:
    ensure_faq_base_loaded()
    user_text = payload.userText.strip()

    if _is_knowledge_inventory_query(user_text):
        return _build_knowledge_inventory_response()

    options = payload.semanticOptions or SemanticConfig()
    semantic_result = faq_service.busqueda_semantica(
        user_text,
        options=SemanticOptions(
            umbral_alto=options.umbralAlto,
            umbral_medio=options.umbralMedio,
            umbral_sugerencia_baja=options.umbralSugerenciaBaja,
            margen_directo=options.margenDirecto,
            max_sugerencias=options.maxSugerencias,
        ),
    )

    if payload.responseMode == "faqs":
        if semantic_result.get("tipo") == "respuesta_directa":
            return {
                "answer": semantic_result.get("respuesta") or semantic_result.get("mensaje"),
                "responseMethod": "faq",
                "faqResult": semantic_result,
            }

        if semantic_result.get("tipo") == "sugerencias":
            return {
                "answer": semantic_result.get("mensaje"),
                "responseMethod": "faq",
                "faqResult": semantic_result,
                "suggestions": semantic_result.get("sugerencias", []),
            }

        return {
            "answer": semantic_result.get("mensaje") or "No encontre una FAQ adecuada para tu consulta.",
            "responseMethod": "faq",
            "faqResult": semantic_result,
        }

    if payload.responseMode == "hybrid":
        score = float(semantic_result.get("score") or 0)
        if semantic_result.get("tipo") == "respuesta_directa" and score >= payload.faqSimilarityThreshold:
            return {
                "answer": semantic_result.get("respuesta") or semantic_result.get("mensaje"),
                "responseMethod": "faq",
                "faqResult": semantic_result,
            }

    ai_config = config_service.config.get("ai", {})
    provider = str(payload.llmProvider or ai_config.get("provider") or "mock").lower()
    model = str(ai_config.get("primaryModel") or DEFAULT_OPENAI_MODEL).strip()
    api_key = str(ai_config.get("apiKey") or os.getenv("OPENAI_API_KEY") or "").strip()
    system_prompt = str(ai_config.get("systemPrompt") or DEFAULT_SYSTEM_PROMPT).strip()

    if provider == "openai":
        if not api_key:
            logger.warning("OpenAI sin API key. Se responde con fallback FAQ.")
            return _build_faq_fallback_response(
                semantic_result,
                note="Use la base de conocimientos local porque OpenAI no tiene API key configurada.",
            )
        try:
            llm_answer = _call_openai_chat(
                user_text=user_text,
                model=model,
                api_key=api_key,
                system_prompt=system_prompt,
            )
        except HTTPException as exc:
            logger.warning("OpenAI fallo (%s). Se responde con fallback FAQ.", exc.detail)
            return _build_faq_fallback_response(
                semantic_result,
                note="Use la base de conocimientos local porque el proveedor OpenAI no estuvo disponible.",
            )
    elif provider == "gemini":
        logger.warning("Gemini no implementado. Se responde con fallback FAQ.")
        return _build_faq_fallback_response(
            semantic_result,
            note="Use la base de conocimientos local porque Gemini aun no esta implementado.",
        )
    else:
        llm_answer = _build_llm_mock_answer(user_text)

    return {
        "answer": llm_answer,
        "responseMethod": "llm",
        "faqResult": semantic_result if payload.responseMode == "hybrid" else None,
    }

# --- Static Files Setup ---
os.makedirs(STATIC_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)
app.mount("/assets", StaticFiles(directory=ASSETS_DIR), name="assets")

# --- Catch-all for React Routes ---
@app.get("/{full_path:path}")
async def serve_react(full_path: str):
    if INDEX_HTML_PATH.exists():
        logger.info(f"Serving React frontend for path: /{full_path}")
        return FileResponse(INDEX_HTML_PATH)
    logger.error("Frontend not built. index.html missing.")
    raise HTTPException(
        status_code=404,
        detail=FRONTEND_MISSING_DETAIL,
    )