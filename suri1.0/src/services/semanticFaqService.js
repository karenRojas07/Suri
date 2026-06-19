import { DEFAULT_JSON_FAQS } from "./defaultFaqs.js";

const MODEL_ID = "Xenova/multilingual-e5-small";
const HF_VERSION = "3.5.1";
const FAQS_STORAGE_KEY = "suriSemanticFaqsV1";
const FAQS_DEFAULT_VERSION_KEY = "suriSemanticFaqsDefaultVersion";
const FAQS_DEFAULT_VERSION = "2";

export let JSON_FAQs = [];

const cache = {
  extractor: null,
  initPromise: null,
  backend: "wasm",
  faqFingerprint: "",
  indexedFaqs: [],
  faqVectors: []
};

const COURTESY_FAQS = [
  {
    id: "courtesy_greeting_morning",
    tema: "Saludos y cordialidad",
    patterns: ["buenos dias", "muy buenos dias", "hola buenos dias"],
    respuesta: "Buenos dias. Claro que si, estoy aqui para ayudarte con mucho gusto. Cuentame que necesitas y lo revisamos juntos."
  },
  {
    id: "courtesy_greeting_afternoon",
    tema: "Saludos y cordialidad",
    patterns: ["buenas tardes", "muy buenas tardes", "hola buenas tardes"],
    respuesta: "Buenas tardes. Con gusto te ayudo. Dime tu consulta y busco la mejor respuesta en la base local."
  },
  {
    id: "courtesy_greeting_evening",
    tema: "Saludos y cordialidad",
    patterns: ["buenas noches", "muy buenas noches", "hola buenas noches"],
    respuesta: "Buenas noches. Estoy listo para ayudarte. Puedes hacerme tu pregunta cuando quieras."
  },
  {
    id: "courtesy_basic_hello",
    tema: "Saludos y cordialidad",
    patterns: ["hola", "hola suri", "que tal", "como estas", "buen dia", "saludos"],
    respuesta: "Hola. Me alegra saludarte. Estoy listo para ayudarte con informacion y preguntas frecuentes."
  },
  {
    id: "courtesy_how_are_you",
    tema: "Saludos y cordialidad",
    patterns: ["como estas", "comoe estas", "como te encuentras", "como vas", "que tal estas"],
    respuesta: "Estoy muy bien y listo para ayudarte. Gracias por preguntar. Puedes decirme tu consulta y la reviso contigo."
  },
  {
    id: "courtesy_who_are_you",
    tema: "Presentacion de Suri",
    patterns: ["quien eres", "quien eres tu", "cual es tu nombre", "como te llamas", "que eres"],
    respuesta: "Soy Suri, un asistente virtual masculino pensado para ayudarte de forma amable con informacion, preguntas frecuentes y orientacion inicial."
  },
  {
    id: "courtesy_what_do_you_know",
    tema: "Capacidades de Suri",
    patterns: ["que sabes", "que sabes hacer", "en que me puedes ayudar", "que puedes hacer", "para que sirves"],
    respuesta: "Puedo ayudarte con preguntas frecuentes, orientarte sobre temas disponibles en la base local y responder interacciones iniciales de forma clara y amable."
  },
  {
    id: "courtesy_help_request",
    tema: "Saludos y cordialidad",
    patterns: ["ayudame", "por favor ayudame", "me ayudas", "necesito ayuda", "puedes ayudarme", "por favor me ayudas"],
    respuesta: "Claro que si. Estoy para ayudarte. Escribeme tu pregunta con confianza y te respondo de la forma mas clara posible."
  },
  {
    id: "courtesy_thanks",
    tema: "Saludos y cordialidad",
    patterns: ["gracias", "muchas gracias", "te agradezco", "muy amable", "gracias suri"],
    respuesta: "Con gusto. Para eso estoy. Si necesitas algo mas, aqui sigo atento para ayudarte."
  }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function invalidateFaqCache() {
  cache.faqFingerprint = "";
  cache.indexedFaqs = [];
  cache.faqVectors = [];
}

function sanitizeFaq(item, idx) {
  const source = item && typeof item === "object" ? item : {};
  const related = source.faqsRelacionadas ?? source.faq_relacionada ?? source.faqRelacionada ?? source.relatedFaqIds;
  const sourceName = source.fuente ?? source.fuente_primaria ?? source.source;
  const pagesRaw = source.pagina ?? source.paginas;
  const pages = Array.isArray(pagesRaw)
    ? pagesRaw
    : (typeof pagesRaw === "string" ? pagesRaw.split(",") : []);
  const relatedList = Array.isArray(related)
    ? related
    : (typeof related === "string" ? related.split(",") : []);
  return {
    id: String(source.id || `faq-${idx + 1}`),
    activo: source.activo !== false,
    tema: String(source.tema || "General"),
    fuente: String(sourceName || ""),
    pagina: pages
      .map((value) => Number.parseInt(String(value || "").trim(), 10))
      .filter((value) => Number.isFinite(value) && value > 0),
    pregunta: String(source.pregunta || ""),
    variaciones: Array.isArray(source.variaciones) ? source.variaciones.map((v) => String(v || "")) : [],
    respuesta: String(source.respuesta || ""),
    tags: Array.isArray(source.tags) ? source.tags.map((t) => String(t || "")) : [],
    faqsRelacionadas: relatedList.map((v) => String(v || "").trim()).filter(Boolean),
    prioridad: Number.isFinite(Number(source.prioridad)) ? Number(source.prioridad) : 5
  };
}

function normalizeFaqs(list) {
  if (!Array.isArray(list)) {
    throw new Error("JSON_FAQs debe ser un arreglo.");
  }

  const normalized = list.map((item, idx) => sanitizeFaq(item, idx));

  for (const faq of normalized) {
    if (!faq.id || !faq.pregunta || !faq.respuesta) {
      throw new Error("Cada FAQ debe tener id, pregunta y respuesta.");
    }
  }

  return normalized;
}

function loadFaqsFromStorage() {
  try {
    const raw = localStorage.getItem(FAQS_STORAGE_KEY);
    const storedVersion = localStorage.getItem(FAQS_DEFAULT_VERSION_KEY);

    if (!raw) {
      localStorage.setItem(FAQS_DEFAULT_VERSION_KEY, FAQS_DEFAULT_VERSION);
      return normalizeFaqs(clone(DEFAULT_JSON_FAQS));
    }

    const parsed = normalizeFaqs(JSON.parse(raw));

    // Migracion suave: si hay una base antigua minima y no hay version marcada, actualiza a la nueva base por defecto.
    if (!storedVersion && parsed.length <= 10) {
      localStorage.setItem(FAQS_DEFAULT_VERSION_KEY, FAQS_DEFAULT_VERSION);
      return normalizeFaqs(clone(DEFAULT_JSON_FAQS));
    }

    if (!storedVersion) {
      localStorage.setItem(FAQS_DEFAULT_VERSION_KEY, FAQS_DEFAULT_VERSION);
    }

    return parsed;
  } catch {
    localStorage.setItem(FAQS_DEFAULT_VERSION_KEY, FAQS_DEFAULT_VERSION);
    return normalizeFaqs(clone(DEFAULT_JSON_FAQS));
  }
}

function persistFaqs() {
  localStorage.setItem(FAQS_STORAGE_KEY, JSON.stringify(JSON_FAQs));
  localStorage.setItem(FAQS_DEFAULT_VERSION_KEY, FAQS_DEFAULT_VERSION);
}

JSON_FAQs = loadFaqsFromStorage();

export function getJsonFaqs() {
  return clone(JSON_FAQs);
}

export function setJsonFaqs(nextFaqs) {
  JSON_FAQs = normalizeFaqs(nextFaqs);
  persistFaqs();
  invalidateFaqCache();
  return {
    total: JSON_FAQs.length,
    activas: JSON_FAQs.filter((faq) => faq.activo).length
  };
}

export function resetJsonFaqs() {
  JSON_FAQs = normalizeFaqs(clone(DEFAULT_JSON_FAQS));
  persistFaqs();
  invalidateFaqCache();
  return {
    total: JSON_FAQs.length,
    activas: JSON_FAQs.filter((faq) => faq.activo).length
  };
}

function hashText(input) {
  let hash = 0;
  const text = String(input || "");
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}

function getActiveFaqs() {
  return JSON_FAQs
    .filter((faq) => faq && faq.activo)
    .map((faq) => ({
      id: String(faq.id || ""),
      activo: Boolean(faq.activo),
      tema: String(faq.tema || ""),
      fuente: String(faq.fuente || ""),
      pagina: Array.isArray(faq.pagina) ? faq.pagina.map((v) => Number(v)).filter((v) => Number.isFinite(v) && v > 0) : [],
      pregunta: String(faq.pregunta || ""),
      variaciones: Array.isArray(faq.variaciones) ? faq.variaciones.map((v) => String(v || "")) : [],
      respuesta: String(faq.respuesta || ""),
      tags: Array.isArray(faq.tags) ? faq.tags.map((t) => String(t || "")) : [],
      faqsRelacionadas: Array.isArray(faq.faqsRelacionadas) ? faq.faqsRelacionadas.map((v) => String(v || "").trim()).filter(Boolean) : [],
      prioridad: Number.isFinite(Number(faq.prioridad)) ? Number(faq.prioridad) : 0
    }));
}

function buildSemanticFaqText(faq) {
  return [
    `tema: ${faq.tema}`,
    `fuente: ${faq.fuente || ""}`,
    `pagina: ${(Array.isArray(faq.pagina) ? faq.pagina : []).join(", ")}`,
    `pregunta: ${faq.pregunta}`,
    `variaciones: ${faq.variaciones.join(" | ")}`,
    `tags: ${faq.tags.join(", ")}`,
    `faqs relacionadas: ${(Array.isArray(faq.faqsRelacionadas) ? faq.faqsRelacionadas : []).join(", ")}`,
    `respuesta: ${faq.respuesta}`
  ].join("\n");
}

function normalizeComparableText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\b(el|la|los|las|un|una|unos|unas|de|del|al)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getCourtesyMatch(question) {
  const normalizedQuestion = normalizeComparableText(question);
  if (!normalizedQuestion) return null;

  return COURTESY_FAQS.find((item) => item.patterns.some((pattern) => {
    const normalizedPattern = normalizeComparableText(pattern);
    return (
      normalizedQuestion === normalizedPattern
      || normalizedQuestion.startsWith(`${normalizedPattern} `)
      || normalizedQuestion.endsWith(` ${normalizedPattern}`)
      || normalizedQuestion.includes(normalizedPattern)
    );
  })) || null;
}

function isDirectTextMatch(question, faq) {
  const normalizedQuestion = normalizeComparableText(question);
  if (!normalizedQuestion) return false;

  const candidates = [faq?.pregunta, ...(Array.isArray(faq?.variaciones) ? faq.variaciones : [])]
    .map((item) => normalizeComparableText(item))
    .filter(Boolean);

  return candidates.some((candidate) => (
    candidate === normalizedQuestion
    || candidate.includes(normalizedQuestion)
    || normalizedQuestion.includes(candidate)
  ));
}

function getFaqFingerprint(faqs) {
  return hashText(JSON.stringify(faqs));
}

function cosineSimilarity(a, b) {
  if (!a?.length || !b?.length || a.length !== b.length) return 0;

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function flattenToVector(output) {
  if (!output) return [];

  const data = output?.data || output;

  if (ArrayBuffer.isView(data)) {
    return Array.from(data);
  }

  if (Array.isArray(data)) {
    let current = data;
    while (Array.isArray(current) && Array.isArray(current[0])) {
      current = current[0];
    }
    return Array.isArray(current) ? current.map((x) => Number(x) || 0) : [];
  }

  return [];
}

async function getExtractor() {
  if (cache.extractor) return cache.extractor;
  if (cache.initPromise) return cache.initPromise;

  cache.initPromise = (async () => {
    const { pipeline, env } = await import(`https://cdn.jsdelivr.net/npm/@huggingface/transformers@${HF_VERSION}`);

    env.useBrowserCache = true;
    env.allowLocalModels = false;

    try {
      cache.extractor = await pipeline("feature-extraction", MODEL_ID, {
        device: "webgpu",
        dtype: "fp32"
      });
      cache.backend = "webgpu";
    } catch {
      cache.extractor = await pipeline("feature-extraction", MODEL_ID, {
        device: "wasm",
        dtype: "fp32"
      });
      cache.backend = "wasm";
    }

    return cache.extractor;
  })();

  return cache.initPromise;
}

async function embedText(extractor, text, kind) {
  const prefixed = `${kind}: ${String(text || "").trim()}`;
  const output = await extractor(prefixed, {
    pooling: "mean",
    normalize: true
  });
  return flattenToVector(output);
}

async function ensureFaqIndex(extractor) {
  const activeFaqs = getActiveFaqs();
  const fingerprint = getFaqFingerprint(activeFaqs);

  if (cache.faqFingerprint === fingerprint && cache.faqVectors.length === activeFaqs.length) {
    return { faqs: cache.indexedFaqs, vectors: cache.faqVectors };
  }

  const vectors = [];
  for (const faq of activeFaqs) {
    const semanticText = buildSemanticFaqText(faq);
    const vector = await embedText(extractor, semanticText, "passage");
    vectors.push(vector);
  }

  cache.faqFingerprint = fingerprint;
  cache.indexedFaqs = activeFaqs;
  cache.faqVectors = vectors;

  return { faqs: cache.indexedFaqs, vectors: cache.faqVectors };
}

export async function precargarBusquedaSemantica() {
  const extractor = await getExtractor();
  await ensureFaqIndex(extractor);
  return {
    backend: cache.backend,
    totalFaqs: cache.indexedFaqs.length
  };
}

export async function busquedasemantica(preguntaUsuario, opciones = {}) {
  const highThreshold = Number(opciones?.umbralAlto ?? 0.78);
  const mediumThreshold = Number(opciones?.umbralMedio ?? 0.62);
  const lowSuggestionThreshold = Number(opciones?.umbralSugerenciaBaja ?? 0.48);
  const directMarginThreshold = Number(opciones?.margenDirecto ?? 0.08);
  const maxSugerencias = Math.max(1, Math.min(10, Number(opciones?.maxSugerencias ?? 3)));

  try {
    const pregunta = String(preguntaUsuario || "").trim();

    if (!pregunta) {
      return {
        tipo: "error",
        mensaje: "La pregunta no puede estar vacia.",
        respuesta: null,
        preguntaDetectada: null,
        tema: null,
        score: 0,
        sugerencias: [],
        resultado: null
      };
    }

    const courtesyMatch = getCourtesyMatch(pregunta);
    if (courtesyMatch) {
      return {
        tipo: "respuesta_directa",
        mensaje: "Encontre una interaccion cordial reconocida.",
        respuesta: courtesyMatch.respuesta,
        preguntaDetectada: pregunta,
        tema: courtesyMatch.tema,
        score: 1,
        sugerencias: [],
        resultado: courtesyMatch
      };
    }

    const extractor = await getExtractor();
    const { faqs, vectors } = await ensureFaqIndex(extractor);

    if (!faqs.length) {
      return {
        tipo: "no_encontrado",
        mensaje: "No hay preguntas frecuentes activas para consultar.",
        respuesta: null,
        preguntaDetectada: null,
        tema: null,
        score: 0,
        sugerencias: [],
        resultado: null
      };
    }

    const questionVector = await embedText(extractor, pregunta, "query");

    const ranking = faqs.map((faq, idx) => {
      const score = cosineSimilarity(questionVector, vectors[idx]);
      return {
        faq,
        score: Number.isFinite(score) ? score : 0
      };
    });

    ranking.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.faq.prioridad || 0) - (a.faq.prioridad || 0);
    });

    const top = ranking[0];
    const second = ranking[1];
    const topScore = Number((top?.score || 0).toFixed(4));
    const secondScore = Number((second?.score || 0).toFixed(4));
    const scoreMargin = Number((topScore - secondScore).toFixed(4));
    const directTextMatch = Boolean(top && isDirectTextMatch(pregunta, top.faq));

    if (top && ((topScore >= highThreshold && (scoreMargin >= directMarginThreshold || topScore >= 0.9)) || directTextMatch)) {
      return {
        tipo: "respuesta_directa",
        mensaje: directTextMatch
          ? "Encontre una coincidencia textual clara en la base local."
          : "Encontre una respuesta con alta confianza.",
        respuesta: top.faq.respuesta,
        preguntaDetectada: top.faq.pregunta,
        tema: top.faq.tema,
        score: topScore,
        sugerencias: [],
        resultado: top.faq
      };
    }

    if (top && topScore >= lowSuggestionThreshold) {
      const sugerencias = ranking
        .filter((item, idx) => idx < maxSugerencias && item.score >= lowSuggestionThreshold)
        .map((item) => ({
          id: item.faq.id,
          pregunta: item.faq.pregunta,
          tema: item.faq.tema,
          score: Number(item.score.toFixed(4)),
          respuesta: item.faq.respuesta,
          prioridad: item.faq.prioridad
        }));

      const hasMediumConfidence = topScore >= mediumThreshold;

      return {
        tipo: "sugerencias",
        mensaje: hasMediumConfidence
          ? "No estoy completamente seguro. Te dejo opciones cercanas para elegir."
          : "No encontre una coincidencia suficientemente confiable. Quizá te refieras a una de estas preguntas.",
        respuesta: null,
        preguntaDetectada: top.faq.pregunta,
        tema: top.faq.tema,
        score: topScore,
        sugerencias,
        resultado: top.faq
      };
    }

    return {
      tipo: "no_encontrado",
      mensaje: "No encontre una coincidencia clara en la base local. Reformula tu pregunta.",
      respuesta: null,
      preguntaDetectada: null,
      tema: null,
      score: topScore,
      sugerencias: [],
      resultado: null
    };
  } catch (error) {
    return {
      tipo: "error",
      mensaje: error?.message || "Error durante la busqueda semantica.",
      respuesta: null,
      preguntaDetectada: null,
      tema: null,
      score: 0,
      sugerencias: [],
      resultado: null
    };
  }
}
