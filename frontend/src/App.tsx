import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import './App.css'

type MainTab = 'chat' | 'config' | 'faqs' | 'info'
type ResponseMode = 'faqs' | 'hybrid' | 'llm'
type Provider = 'mock' | 'openai' | 'gemini'
type AvatarState = 'idle' | 'thinking' | 'speaking' | 'suggesting' | 'not_found' | 'listening'

interface FaqSuggestion {
  id: string
  pregunta: string
  tema: string
  score: number
  respuesta: string
}

interface FaqResult {
  tipo?: string
  score?: number
  resultado?: { fuente?: string }
  sugerencias?: FaqSuggestion[]
}

interface ChatAskApiResponse {
  answer: string
  responseMethod: 'faq' | 'llm'
  faqResult?: FaqResult | null
  suggestions?: FaqSuggestion[]
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  text: string
  timestamp?: number
  meta?: string
  suggestions?: FaqSuggestion[]
  repeatable?: boolean
}

interface FaqRecord {
  id: string
  activo: boolean
  tema: string
  fuente: string
  pagina: number[]
  pregunta: string
  variaciones: string[]
  respuesta: string
  tags: string[]
  faqsRelacionadas: string[]
  prioridad: number
}

interface AppConfig {
  ai: {
    provider: Provider
    primaryModel: string
    secondaryModel: string
    apiKey: string
    systemPrompt: string
    responseMode: ResponseMode
    faqSimilarityThreshold: number
  }
  speech: {
    enabled: boolean
    autoRead: boolean
    repeatCount: number
    lang: string
    rate: number
    pitch: number
  }
  voice: {
    lang: string
    rate: number
    pitch: number
    primary: {
      lang: string
      rate: number
      pitch: number
      engine: string
      browserVoice: string
    }
    secondary: {
      lang: string
      rate: number
      pitch: number
      engine: string
      browserVoice: string
    }
    tts: {
      engine: string
      primaryEngine: string
      secondaryEngine: string
    }
  }
  listening: {
    mode: string
    model: string
    sensitivity: string
    language: string
    task: string
  }
  avatar: {
    modelUrl: string
    scale: number
    welcomeBubble: string
    defaultIdleState: string
    initialExpression: string
    initialGesture: string
    initialPlaybackRef: string
    refreshPlaybackRef: string
    modelCatalog: Array<{
      url: string
      label: string
      short: string
      defaultAnimation: string
    }>
    chatAnimationRefs: string[]
    bubbleAnimationRules: Array<{ contains: string; animationRef: string; priority?: number }>
    animationKeywordMap: Record<string, string>
  }
  ui: {
    backgroundImageUrl: string
    logoUrl: string
    mode: string
  }
}

interface AppInfoResponse {
  ok: boolean
  summary: {
    faqTotal: number
    faqActivas: number
    topics: number
    responseMode: ResponseMode
    llmProvider: string
  }
  topics: Record<string, number>
}

const DEFAULT_CONFIG: AppConfig = {
  ai: {
    provider: 'mock',
    primaryModel: 'mock-default',
    secondaryModel: 'mock-default',
    apiKey: '',
    systemPrompt: 'Eres Suri y respondes de forma clara y util.',
    responseMode: 'faqs',
    faqSimilarityThreshold: 0.78,
  },
  speech: {
    enabled: true,
    autoRead: true,
    repeatCount: 1,
    lang: 'es-CO',
    rate: 1,
    pitch: 1,
  },
  voice: {
    lang: 'es-ES',
    rate: 1.1,
    pitch: 1.2,
    primary: {
      lang: 'es-ES',
      rate: 1.1,
      pitch: 1.2,
      engine: 'espeak-wasm',
      browserVoice: '',
    },
    secondary: {
      lang: 'es-MX',
      rate: 1,
      pitch: 1.1,
      engine: 'browser',
      browserVoice: '',
    },
    tts: {
      engine: 'espeak-wasm',
      primaryEngine: 'espeak-wasm',
      secondaryEngine: 'browser',
    },
  },
  listening: {
    mode: 'normal',
    model: 'onnx-community/whisper-small',
    sensitivity: 'medium',
    language: 'spanish',
    task: 'transcribe',
  },
  avatar: {
    modelUrl: '/assets/avatar/SURI_Animations_2.glb',
    scale: 0.65,
    welcomeBubble: 'Hola, soy Suri. Estoy listo para ayudarte.',
    defaultIdleState: 'idle',
    initialExpression: 'happy',
    initialGesture: 'rest',
    initialPlaybackRef: '',
    refreshPlaybackRef: '',
    modelCatalog: [],
    chatAnimationRefs: [],
    bubbleAnimationRules: [],
    animationKeywordMap: {},
  },
  ui: {
    backgroundImageUrl: '/assets/fondo.png',
    logoUrl: '/assets/logo.png',
    mode: 'embedded',
  },
}

const PRESET_QUESTIONS = [
  '¿Qué es la DIARI?',
  '¿Por qué se creó la DIARI?',
  '¿Qué significa control fiscal en tiempo real?',
  '¿Qué cambió con el Acto Legislativo 04 de 2019?',
]

const DEFAULT_AVATAR_MODEL_CATALOG = [
  { url: './assets/avatar/SURI_Animations_2.glb', label: 'Suri Animations 2', short: 'S2', defaultAnimation: 'idle' },
  { url: './assets/avatar/Suri_Animations.glb', label: 'Suri Animations', short: 'SA', defaultAnimation: 'idle' },
  { url: './assets/avatar/suri_avatar.glb', label: 'Suri base', short: 'S', defaultAnimation: 'idle' },
  { url: './assets/avatar/Meshy_AI_Tech_Savvy_Meerkat_0610041201_generate.glb', label: 'Meshy tech', short: 'T', defaultAnimation: 'idle' },
  { url: './assets/avatar/Meshy_AI_Meshy_Merged_Animations.glb', label: 'Meshy merged', short: 'M', defaultAnimation: 'idle' },
]

const DEFAULT_AVATAR_PLAYBACK_OPTIONS = [
  'idle',
  'walking',
  'thinking',
  'listening',
  'speaking',
  'speaking_explain',
  'suggesting',
  'tablet_reading',
  'wave_hello',
  'petting',
  'celebrate',
  'not_found',
  'error',
]

const VOICE_ENGINE_OPTIONS = [
  { value: 'espeak-wasm', label: 'eSpeak' },
  { value: 'mespeak-js', label: 'meSpeak.js' },
  { value: 'kokoro', label: 'Kokoro' },
  { value: 'browser', label: 'Navegador (Web Speech)' },
]

const VOICE_LANG_OPTIONS = [
  { value: 'es-CO', label: 'Español (Colombia)' },
  { value: 'es-ES', label: 'Español (España)' },
  { value: 'es-MX', label: 'Español (México)' },
  { value: 'es-AR', label: 'Español (Argentina)' },
  { value: 'en-US', label: 'English (United States)' },
  { value: 'en-GB', label: 'English (United Kingdom)' },
]

const LISTEN_MODE_OPTIONS = [
  { value: 'normal', label: 'Normal (mejor precisión)' },
  { value: 'fast', label: 'Rápido (menor latencia)' },
]

const LISTEN_MODEL_OPTIONS = [
  { value: 'onnx-community/whisper-small', label: 'Whisper Small (recomendado)' },
  { value: 'onnx-community/whisper-base', label: 'Whisper Base' },
]

const LISTEN_SENSITIVITY_OPTIONS = [
  { value: 'medium', label: 'Media' },
  { value: 'high', label: 'Alta (capta voz más suave)' },
  { value: 'low', label: 'Baja (filtra más ruido)' },
]

const UI_MODE_OPTIONS = [
  { value: 'embedded', label: 'embedded' },
  { value: 'floating', label: 'floating' },
]

function normalizeAvatarModelCatalog(models: unknown): AppConfig['avatar']['modelCatalog'] {
  if (!Array.isArray(models)) return DEFAULT_AVATAR_MODEL_CATALOG

  const normalized = models
    .map((model) => ({
      url: String((model as { url?: string })?.url || '').trim(),
      label: String((model as { label?: string })?.label || '').trim(),
      short: String((model as { short?: string })?.short || '').trim(),
      defaultAnimation: String((model as { defaultAnimation?: string })?.defaultAnimation || '').trim(),
    }))
    .filter((model) => model.url)

  return normalized.length ? normalized : DEFAULT_AVATAR_MODEL_CATALOG
}

function deepMergeConfig(input?: Partial<AppConfig>): AppConfig {
  const source = input ?? {}
  const voiceSource = source.voice ?? {}
  const avatarSource = source.avatar ?? {}

  const speechSeed = source.speech ?? {}
  const fallbackSpeechLang = voiceSource.primary?.lang || voiceSource.lang || DEFAULT_CONFIG.speech.lang
  const fallbackSpeechRate = voiceSource.primary?.rate ?? voiceSource.rate ?? DEFAULT_CONFIG.speech.rate
  const fallbackSpeechPitch = voiceSource.primary?.pitch ?? voiceSource.pitch ?? DEFAULT_CONFIG.speech.pitch

  return {
    ai: { ...DEFAULT_CONFIG.ai, ...(source.ai ?? {}) },
    speech: {
      ...DEFAULT_CONFIG.speech,
      lang: fallbackSpeechLang,
      rate: fallbackSpeechRate,
      pitch: fallbackSpeechPitch,
      ...speechSeed,
    },
    voice: {
      ...DEFAULT_CONFIG.voice,
      ...voiceSource,
      primary: { ...DEFAULT_CONFIG.voice.primary, ...(voiceSource.primary ?? {}) },
      secondary: { ...DEFAULT_CONFIG.voice.secondary, ...(voiceSource.secondary ?? {}) },
      tts: { ...DEFAULT_CONFIG.voice.tts, ...(voiceSource.tts ?? {}) },
    },
    listening: { ...DEFAULT_CONFIG.listening, ...(source.listening ?? {}) },
    avatar: {
      ...DEFAULT_CONFIG.avatar,
      ...avatarSource,
      modelCatalog: normalizeAvatarModelCatalog(avatarSource.modelCatalog),
      chatAnimationRefs: Array.isArray(avatarSource.chatAnimationRefs)
        ? avatarSource.chatAnimationRefs.map((item) => String(item)).filter(Boolean)
        : DEFAULT_CONFIG.avatar.chatAnimationRefs,
      bubbleAnimationRules: Array.isArray(avatarSource.bubbleAnimationRules)
        ? avatarSource.bubbleAnimationRules
            .map((rule) => ({
              contains: String(rule?.contains || ''),
              animationRef: String(rule?.animationRef || ''),
              priority: Number(rule?.priority || 0),
            }))
            .filter((rule) => rule.contains && rule.animationRef)
        : DEFAULT_CONFIG.avatar.bubbleAnimationRules,
      animationKeywordMap:
        avatarSource.animationKeywordMap && typeof avatarSource.animationKeywordMap === 'object'
          ? Object.fromEntries(
              Object.entries(avatarSource.animationKeywordMap).map(([key, value]) => [String(key), String(value)]),
            )
          : DEFAULT_CONFIG.avatar.animationKeywordMap,
    },
    ui: { ...DEFAULT_CONFIG.ui, ...(source.ui ?? {}) },
  }
}

function csvToList(value: string): string[] {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function pagesFromCsv(value: string): number[] {
  return String(value || '')
    .split(',')
    .map((item) => Number.parseInt(item.trim(), 10))
    .filter((item) => Number.isFinite(item) && item > 0)
}

function listToCsv(value: string[] | number[]): string {
  return Array.isArray(value) ? value.map((item) => String(item)).join(', ') : ''
}

function normalizeBrowserVoiceName(value: unknown): string {
  return String(value || '').trim()
}

function isSpanishBrowserVoice(voice: SpeechSynthesisVoice): boolean {
  const lang = String(voice?.lang || '').toLowerCase()
  return lang === 'es' || lang.startsWith('es-')
}

function isLikelyMaleBrowserVoice(voice: SpeechSynthesisVoice): boolean {
  const haystack = `${voice?.name || ''} ${voice?.voiceURI || ''}`.toLowerCase()
  const maleHints = ['raul', 'pablo', 'jorge', 'enrique', 'miguel', 'alejandro', 'carlos', 'david', 'male', 'man']
  return maleHints.some((hint) => haystack.includes(hint))
}

function normalizeFaqRecord(input: Partial<FaqRecord>): FaqRecord {
  return {
    id: String(input.id || ''),
    activo: input.activo !== false,
    tema: String(input.tema || 'General'),
    fuente: String(input.fuente || ''),
    pagina: Array.isArray(input.pagina) ? input.pagina.filter((n) => Number.isFinite(Number(n))).map((n) => Number(n)) : [],
    pregunta: String(input.pregunta || ''),
    variaciones: Array.isArray(input.variaciones) ? input.variaciones.map((v) => String(v)).filter(Boolean) : [],
    respuesta: String(input.respuesta || ''),
    tags: Array.isArray(input.tags) ? input.tags.map((v) => String(v)).filter(Boolean) : [],
    faqsRelacionadas: Array.isArray(input.faqsRelacionadas) ? input.faqsRelacionadas.map((v) => String(v)).filter(Boolean) : [],
    prioridad: Number(input.prioridad || 5),
  }
}

function applyTopicParentChildLinks(records: FaqRecord[]): { faqs: FaqRecord[]; linkedParents: number } {
  const cloned = records.map((faq) => ({ ...faq, faqsRelacionadas: [...faq.faqsRelacionadas] }))
  const alreadyLinked = cloned.some((faq) => faq.faqsRelacionadas.length > 0)
  if (alreadyLinked) {
    return { faqs: cloned, linkedParents: cloned.filter((faq) => faq.faqsRelacionadas.length > 0).length }
  }

  const byTopic = new Map<string, FaqRecord[]>()
  for (const faq of cloned) {
    const topic = String(faq.tema || 'General')
    if (!byTopic.has(topic)) byTopic.set(topic, [])
    byTopic.get(topic)!.push(faq)
  }

  let linkedParents = 0
  for (const topicFaqs of byTopic.values()) {
    if (topicFaqs.length < 2) continue
    const sorted = [...topicFaqs].sort((a, b) => (b.prioridad || 0) - (a.prioridad || 0))
    const parent = sorted[0]
    const children = sorted.slice(1, 6).map((item) => item.id).filter(Boolean)
    if (children.length) {
      parent.faqsRelacionadas = children
      linkedParents += 1
    }
  }

  return { faqs: cloned, linkedParents }
}

function pickAnimation(actions: Map<string, THREE.AnimationAction>, state: AvatarState): THREE.AnimationAction | null {
  const hints: Record<AvatarState, string[]> = {
    idle: ['idle', 'breath', 'stand', 'default', 'walking'],
    listening: ['listen', 'ready', 'alert', 'idle', 'walking'],
    thinking: ['think', 'ponder', 'inspect', 'idle', 'walking'],
    speaking: ['speak', 'talk', 'chat', 'answer', 'walking'],
    suggesting: ['suggest', 'guide', 'present', 'explain', 'walking'],
    not_found: ['confused', 'error', 'sad', 'shrug', 'walking'],
  }

  const names = [...actions.keys()]
  for (const hint of hints[state]) {
    const hit = names.find((name) => name.includes(hint))
    if (hit) return actions.get(hit) ?? null
  }

  const first = names[0]
  return first ? actions.get(first) ?? null : null
}

function AvatarViewport({
  modelUrl,
  scale,
  state,
  backgroundImageUrl,
  welcomeBubble,
  defaultIdleState,
  initialPlaybackRef,
}: {
  modelUrl: string
  scale: number
  state: AvatarState
  backgroundImageUrl: string
  welcomeBubble: string
  defaultIdleState: AvatarState
  initialPlaybackRef: string
}) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const actionsRef = useRef<Map<string, THREE.AnimationAction>>(new Map())
  const activeActionRef = useRef<THREE.AnimationAction | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const frameRef = useRef<number>(0)
  const modelRef = useRef<THREE.Object3D | null>(null)

  useEffect(() => {
    const host = rootRef.current
    if (!host) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(34, host.clientWidth / host.clientHeight, 0.1, 100)
    camera.position.set(0, 1.2, 4.5)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(host.clientWidth, host.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.innerHTML = ''
    host.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const key = new THREE.DirectionalLight(0xffffff, 2.0)
    key.position.set(2, 4, 4)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xdbeafe, 0.9)
    fill.position.set(-3, 2, 1)
    scene.add(fill)
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))

    const clock = new THREE.Clock()
    const animate = () => {
      const mixer = mixerRef.current
      if (mixer) mixer.update(clock.getDelta())
      renderer.render(scene, camera)
      frameRef.current = window.requestAnimationFrame(animate)
    }

    const onResize = () => {
      if (!rootRef.current || !rendererRef.current || !cameraRef.current) return
      const w = rootRef.current.clientWidth
      const h = rootRef.current.clientHeight
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
    }

    window.addEventListener('resize', onResize)
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      window.cancelAnimationFrame(frameRef.current)
      renderer.dispose()
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement)
      scene.clear()
      mixerRef.current = null
      actionsRef.current.clear()
      activeActionRef.current = null
      modelRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!sceneRef.current) return

    const loader = new GLTFLoader()
    const scene = sceneRef.current

    if (modelRef.current) {
      scene.remove(modelRef.current)
      modelRef.current = null
    }

    actionsRef.current.clear()
    mixerRef.current = null
    activeActionRef.current = null

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene
        modelRef.current = model

        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        model.position.sub(center)

        const maxDim = Math.max(size.x, size.y, size.z) || 1
        const fitScale = (2.2 / maxDim) * Math.max(0.2, scale || 0.65)
        model.scale.setScalar(fitScale)

        // Recalcula bounds tras escalar y sube el modelo para evitar recorte inferior.
        const scaledBox = new THREE.Box3().setFromObject(model)
        const targetFloorY = -0.45
        model.position.y += targetFloorY - scaledBox.min.y

        scene.add(model)

        if (gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model)
          mixerRef.current = mixer

          const map = new Map<string, THREE.AnimationAction>()
          for (const clip of gltf.animations) {
            map.set(clip.name.toLowerCase(), mixer.clipAction(clip))
          }
          actionsRef.current = map

          const preferredInitial = String(initialPlaybackRef || '').trim().toLowerCase()
          const first = preferredInitial ? map.get(preferredInitial) || pickAnimation(map, defaultIdleState) : pickAnimation(map, defaultIdleState)
          if (first) {
            first.reset().fadeIn(0.18).play()
            activeActionRef.current = first
          }
        }
      },
      undefined,
      () => {
        const fallback = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.55, 1.2, 8, 16),
          new THREE.MeshStandardMaterial({ color: 0xc98d42, roughness: 0.72, metalness: 0.05 }),
        )
        fallback.position.set(0, 0.1, 0)
        scene.add(fallback)
        modelRef.current = fallback
      },
    )
  }, [modelUrl, scale, initialPlaybackRef, defaultIdleState])

  useEffect(() => {
    const actions = actionsRef.current
    if (!actions.size) return

    const next = pickAnimation(actions, state)
    if (!next) return

    if (activeActionRef.current && activeActionRef.current !== next) {
      activeActionRef.current.fadeOut(0.18)
    }

    if (state === 'idle' || state === 'listening' || state === 'thinking') {
      next.enabled = true
      next.reset().fadeIn(0.18).play()
      next.timeScale = 0.3
    } else {
      next.enabled = true
      next.reset().fadeIn(0.18).play()
      next.timeScale = 1
    }

    activeActionRef.current = next
  }, [state])

  return (
    <aside className="avatar-panel">
      {backgroundImageUrl ? <img className="avatar-bg" src={backgroundImageUrl} alt="fondo" /> : null}
      <div className="avatar-canvas" ref={rootRef} />
      <div className="avatar-bubble">{welcomeBubble || 'Hola, soy Suri. Estoy listo para ayudarte.'}</div>
    </aside>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('chat')
  const [status, setStatus] = useState('Inicializando...')
  const [loading, setLoading] = useState(true)
  const [avatarState, setAvatarState] = useState<AvatarState>(deepMergeConfig().avatar.defaultIdleState as AvatarState)
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([])

  const [config, setConfig] = useState<AppConfig>(deepMergeConfig())
  const [configJson, setConfigJson] = useState(JSON.stringify(DEFAULT_CONFIG, null, 2))

  const [faqs, setFaqs] = useState<FaqRecord[]>([])
  const [appInfo, setAppInfo] = useState<AppInfoResponse | null>(null)

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'boot', role: 'assistant', text: 'Hola, soy SURI. Escribe tu consulta.', timestamp: Date.now() },
  ])
  const [userInput, setUserInput] = useState('')
  const [sending, setSending] = useState(false)
  const [recognizing, setRecognizing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const canSubmit = useMemo(() => {
    return Boolean(userInput.trim()) && !sending && !loading
  }, [loading, sending, userInput])

  const faqMentalMap = useMemo(() => {
    const byId = new Map<string, FaqRecord>()
    for (const faq of faqs) {
      if (faq.id) byId.set(String(faq.id), faq)
    }

    const relations: Array<{ parent: FaqRecord; children: FaqRecord[] }> = []
    for (const faq of faqs) {
      const childIds = Array.isArray(faq.faqsRelacionadas) ? faq.faqsRelacionadas : []
      if (!childIds.length) continue
      const children = childIds.map((id) => byId.get(String(id))).filter((item): item is FaqRecord => Boolean(item))
      if (!children.length) continue
      relations.push({ parent: faq, children })
    }

    return relations
  }, [faqs])

  const canSpeak = config.speech.enabled && typeof window !== 'undefined' && 'speechSynthesis' in window
  const avatarModelCatalog = config.avatar.modelCatalog.length ? config.avatar.modelCatalog : DEFAULT_AVATAR_MODEL_CATALOG
  const avatarStateOptions: AvatarState[] = ['idle', 'listening', 'thinking', 'speaking', 'suggesting', 'not_found']
  const expressionOptions = ['happy', 'neutral', 'curious', 'excited', 'calm', 'surprised']
  const gestureOptions = ['rest', 'wave', 'point', 'explain', 'listen']
  const browserVoiceOptions = browserVoices.length > 0 ? browserVoices : []

  const pickBrowserVoiceForProfile = (profile: 'primary' | 'secondary') => {
    const voices = browserVoices.length ? browserVoices : window.speechSynthesis.getVoices()
    if (!voices.length) return null

    const profileConfig = profile === 'primary' ? config.voice.primary : config.voice.secondary
    const preferredLang = profileConfig.lang || config.speech.lang
    const explicitVoiceName = normalizeBrowserVoiceName(profileConfig.browserVoice)
    const otherProfileVoiceName = normalizeBrowserVoiceName(profile === 'primary' ? config.voice.secondary.browserVoice : config.voice.primary.browserVoice)

    const explicit = explicitVoiceName
      ? voices.find((voice) => voice.name === explicitVoiceName)
      : null
    if (explicit) return explicit

    const sameLang = voices.filter((voice) => String(voice.lang || '').toLowerCase() === String(preferredLang || '').toLowerCase())
    const spanishSameLang = sameLang.filter(isSpanishBrowserVoice)
    const nonRepeated = sameLang.filter((voice) => voice.name !== otherProfileVoiceName)

    if (profile === 'primary') {
      const preferredMaleSpanish = spanishSameLang.find(isLikelyMaleBrowserVoice)
      if (preferredMaleSpanish) return preferredMaleSpanish

      if (spanishSameLang.length) return spanishSameLang[0]
      if (nonRepeated.length) return nonRepeated[0]
    } else {
      const preferredFemaleSpanish = spanishSameLang.find((voice) => !isLikelyMaleBrowserVoice(voice))
      if (preferredFemaleSpanish) return preferredFemaleSpanish

      if (nonRepeated.length) return nonRepeated[0]
      if (spanishSameLang.length) return spanishSameLang.find((voice) => voice.name !== otherProfileVoiceName) || spanishSameLang[0] || null
    }

    return voices.find((voice) => String(voice.lang || '').toLowerCase() === String(preferredLang || '').toLowerCase()) || voices[0] || null
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    const refreshVoices = () => {
      setBrowserVoices(window.speechSynthesis.getVoices())
    }

    refreshVoices()
    window.speechSynthesis.addEventListener('voiceschanged', refreshVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', refreshVoices)
    }
  }, [])

  const formatTime = (value?: number) => {
    if (!value) return ''
    return new Date(value).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
  }

  const speakAssistantText = (text: string, repeatCount = 1, profile: 'primary' | 'secondary' = 'primary') => {
    if (!canSpeak) return
    const safeText = String(text || '').trim()
    if (!safeText) return

    const profileConfig = profile === 'primary' ? config.voice.primary : config.voice.secondary
    const preferredLang = profileConfig.lang || config.speech.lang
    const preferredRate = profileConfig.rate ?? config.speech.rate
    const preferredPitch = profileConfig.pitch ?? config.speech.pitch
    const preferred = pickBrowserVoiceForProfile(profile)

    window.speechSynthesis.cancel()
    for (let index = 0; index < Math.max(1, repeatCount); index += 1) {
      const utterance = new SpeechSynthesisUtterance(safeText)
      utterance.lang = preferredLang
      utterance.rate = preferredRate
      utterance.pitch = preferredPitch
      if (preferred) utterance.voice = preferred
      window.speechSynthesis.speak(utterance)
    }
  }

  const repeatMessage = (message?: ChatMessage) => {
    if (!message || !message.repeatable) return
    speakAssistantText(message.text, config.speech.repeatCount, 'secondary')
  }

  const copyMessageText = async (message: ChatMessage) => {
    try {
      await navigator.clipboard.writeText(message.text)
      setStatus('Respuesta copiada')
    } catch {
      setStatus('No se pudo copiar la respuesta')
    }
  }

  useEffect(() => {
    if (!messagesEndRef.current) return
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, sending])

  const startMicInput = () => {
    if (recognizing || sending || loading) return
    if (typeof window === 'undefined') return

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      setStatus('Tu navegador no soporta reconocimiento de voz.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'es-CO'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    setRecognizing(true)
    setStatus('Escuchando...')

    recognition.onresult = (event) => {
      const transcript = String(event.results?.[0]?.[0]?.transcript || '').trim()
      if (transcript) {
        setUserInput(transcript)
        void ask(transcript)
      }
    }

    recognition.onerror = () => {
      setStatus('No se pudo usar el micrófono.')
    }

    recognition.onend = () => {
      setRecognizing(false)
    }

    recognition.start()
  }

  const loadConfig = async () => {
    const response = await fetch('/api/config')
    if (!response.ok) throw new Error('No se pudo cargar /api/config')
    const data = (await response.json()) as { config?: Partial<AppConfig> }
    const next = deepMergeConfig(data.config)

    const cleanedModelUrl = String(next.avatar.modelUrl || '').trim()
    if (cleanedModelUrl.startsWith('./')) {
      next.avatar.modelUrl = cleanedModelUrl.slice(1)
    }

    const cleanedBg = String(next.ui.backgroundImageUrl || '').trim()
    const cleanedLogo = String(next.ui.logoUrl || '').trim()
    next.ui.backgroundImageUrl = cleanedBg || '/assets/fondo.png'
    next.ui.logoUrl = cleanedLogo || '/assets/logo.png'
    next.ui.mode = ['embedded', 'floating'].includes(String(next.ui.mode || '').trim()) ? String(next.ui.mode).trim() : 'embedded'

    setConfig(next)
    setConfigJson(JSON.stringify(next, null, 2))
    setAvatarState((next.avatar.defaultIdleState || 'idle') as AvatarState)
  }

  const loadFaqs = async () => {
    const response = await fetch('/api/faqs')
    if (!response.ok) throw new Error('No se pudo cargar /api/faqs')
    const data = (await response.json()) as { faqs?: FaqRecord[] }
    const sourceFaqs = Array.isArray(data.faqs) ? data.faqs.map((item) => normalizeFaqRecord(item)) : []
    const linked = applyTopicParentChildLinks(sourceFaqs)
    setFaqs(linked.faqs)
    if (linked.linkedParents > 0) {
      setStatus(`Sincronizado (relaciones cargadas: ${linked.linkedParents})`)
    }
  }

  const loadAppInfo = async () => {
    const response = await fetch('/api/app-info')
    if (!response.ok) throw new Error('No se pudo cargar /api/app-info')
    const data = (await response.json()) as AppInfoResponse
    setAppInfo(data)
  }

  const reloadAll = async () => {
    setStatus('Sincronizando con backend...')
    await Promise.all([loadConfig(), loadFaqs(), loadAppInfo()])
    setStatus('Sincronizado')
  }

  useEffect(() => {
    const bootstrap = async () => {
      try {
        await reloadAll()
      } catch (error) {
        setStatus(error instanceof Error ? error.message : 'No se pudo inicializar')
      } finally {
        setLoading(false)
      }
    }
    void bootstrap()
  }, [])

  const ask = async (questionRaw: string) => {
    const question = questionRaw.trim()
    if (!question || sending) return

    setMessages((prev) => [...prev, { id: `${Date.now()}-u`, role: 'user', text: question, timestamp: Date.now() }])
    setUserInput('')
    setSending(true)
    setAvatarState('thinking')
    setStatus('Consultando...')

    try {
      const response = await fetch('/api/chat/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userText: question,
          responseMode: config.ai.responseMode,
          faqSimilarityThreshold: config.ai.faqSimilarityThreshold,
          llmProvider: config.ai.provider,
        }),
      })

      if (!response.ok) {
        const detail = await response.text()
        throw new Error(`Error ${response.status}: ${detail}`)
      }

      const data = (await response.json()) as ChatAskApiResponse
      const faqResult = data.faqResult ?? null
      const score = faqResult?.score
      const fuente = faqResult?.resultado?.fuente
      const metaParts = [
        data.responseMethod ? `metodo: ${data.responseMethod}` : '',
        typeof score === 'number' ? `similitud: ${Math.round(score * 100)}%` : '',
        fuente ? `fuente: ${fuente}` : '',
      ].filter(Boolean)

      const suggestions = data.suggestions || faqResult?.sugerencias || []

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-a`,
          role: 'assistant',
          text: data.answer || 'No fue posible generar respuesta',
          timestamp: Date.now(),
          meta: metaParts.join(' | '),
          suggestions,
          repeatable: true,
        },
      ])

      if (config.speech.autoRead) {
        speakAssistantText(data.answer || 'No fue posible generar respuesta', 1)
      }

      if (faqResult?.tipo === 'sugerencias') setAvatarState('suggesting')
      else if (faqResult?.tipo === 'no_encontrado') setAvatarState('not_found')
      else setAvatarState('speaking')

      setStatus('Respuesta lista')
      window.setTimeout(() => setAvatarState(config.avatar.defaultIdleState as AvatarState), 1800)
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-e`, role: 'assistant', text: 'No pude responder en este momento.', timestamp: Date.now(), repeatable: true },
      ])
      if (config.speech.autoRead) {
        speakAssistantText('No pude responder en este momento.', 1)
      }
      setAvatarState('not_found')
      setStatus(error instanceof Error ? error.message : 'Error no controlado')
      window.setTimeout(() => setAvatarState(config.avatar.defaultIdleState as AvatarState), 1800)
    } finally {
      setSending(false)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await ask(userInput)
  }

  const saveConfig = async () => {
    setStatus('Guardando configuracion...')
    const response = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ config }),
    })
    if (!response.ok) throw new Error('No se pudo guardar la configuracion')
    await loadAppInfo()
    setStatus('Configuracion guardada')
  }

  const applyConfigJson = async () => {
    const parsed = deepMergeConfig(JSON.parse(configJson) as Partial<AppConfig>)
    setConfig(parsed)
    const response = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ config: parsed }),
    })
    if (!response.ok) throw new Error('No se pudo persistir el JSON')
    await loadAppInfo()
    setStatus('JSON aplicado')
  }

  const saveFaqs = async () => {
    setStatus('Guardando FAQs...')
    const response = await fetch('/api/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ faqs }),
    })
    if (!response.ok) throw new Error('No se pudieron guardar FAQs')
    await Promise.all([loadFaqs(), loadAppInfo()])
    setStatus('FAQs guardadas')
  }

  const resetFaqs = async () => {
    setStatus('Restaurando FAQs base...')
    const response = await fetch('/api/faqs/reset', { method: 'POST' })
    if (!response.ok) throw new Error('No se pudieron restaurar FAQs')
    await Promise.all([loadFaqs(), loadAppInfo()])
    setStatus('FAQs restauradas')
  }

  const addFaqRow = () => {
    setFaqs((prev) => [
      ...prev,
      {
        id: `faq-${Date.now()}`,
        activo: true,
        tema: 'General',
        fuente: '',
        pagina: [],
        pregunta: '',
        variaciones: [],
        respuesta: '',
        tags: [],
        faqsRelacionadas: [],
        prioridad: 5,
      },
    ])
  }

  const removeFaqRow = (index: number) => {
    setFaqs((prev) => prev.filter((_, i) => i !== index))
  }

  const updateFaqField = (index: number, field: keyof FaqRecord, value: string | boolean) => {
    setFaqs((prev) =>
      prev.map((faq, i) => {
        if (i !== index) return faq
        if (field === 'activo') return { ...faq, activo: Boolean(value) }
        if (field === 'pagina') return { ...faq, pagina: pagesFromCsv(String(value)) }
        if (field === 'variaciones') return { ...faq, variaciones: csvToList(String(value)) }
        if (field === 'tags') return { ...faq, tags: csvToList(String(value)) }
        if (field === 'faqsRelacionadas') return { ...faq, faqsRelacionadas: csvToList(String(value)) }
        if (field === 'prioridad') return { ...faq, prioridad: Number(value) || 0 }
        return { ...faq, [field]: value }
      }),
    )
  }

  const loadParentChildRelations = () => {
    setFaqs((prev) => {
      const linked = applyTopicParentChildLinks(prev)
      setStatus(`Relaciones padre-hija cargadas: ${linked.linkedParents}`)
      return linked.faqs
    })
  }

  return (
    <main className="shell">
      <section className="panel">
        <header className="header">
          <div className="brand-wrap">
            {config.ui.logoUrl ? <img className="logo" src={config.ui.logoUrl} alt="logo" /> : null}
            <div className="brand-copy">
              <h1>SURI 2.0</h1>
              <p>Asistente DIARI - Interfaz restaurada</p>
              <span className="brand-status">Backend sincronizado</span>
            </div>
          </div>
          <div className="actions">
            <button type="button" onClick={() => void reloadAll()} disabled={loading || sending}>Recargar</button>
            <button
              type="button"
              onClick={() => {
                setMessages([{ id: `reset-${Date.now()}`, role: 'system', text: 'Chat reiniciado.', timestamp: Date.now() }])
                setAvatarState(config.avatar.defaultIdleState as AvatarState)
                setStatus('Chat reiniciado')
                if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                  window.speechSynthesis.cancel()
                }
              }}
            >
              Reiniciar chat
            </button>
          </div>
        </header>

        <nav className="tabs">
          <button type="button" className={activeTab === 'chat' ? 'active' : ''} onClick={() => setActiveTab('chat')}>Chat</button>
          <button type="button" className={activeTab === 'config' ? 'active' : ''} onClick={() => setActiveTab('config')}>Configuracion</button>
          <button type="button" className={activeTab === 'faqs' ? 'active' : ''} onClick={() => setActiveTab('faqs')}>FAQs</button>
          <button type="button" className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Info</button>
        </nav>

        {activeTab === 'chat' && (
          <section className="chat-layout">
            <AvatarViewport
              modelUrl={config.avatar.modelUrl || '/assets/avatar/SURI_Animations_2.glb'}
              scale={config.avatar.scale}
              state={avatarState}
              backgroundImageUrl={config.ui.backgroundImageUrl || '/assets/fondo.png'}
              welcomeBubble={config.avatar.welcomeBubble}
              defaultIdleState={(config.avatar.defaultIdleState as AvatarState) || 'idle'}
              initialPlaybackRef={config.avatar.initialPlaybackRef || ''}
            />
            <section className="tab-content chat-pane">
              <div className="messages">
                {messages.map((message) => (
                  <article key={message.id} className={`bubble ${message.role}`}>
                    <header className="bubble-head">
                      <strong>{message.role === 'user' ? 'Tu' : message.role === 'assistant' ? 'SURI' : 'Sistema'}</strong>
                      <span>{formatTime(message.timestamp)}</span>
                    </header>
                    <p>{message.text}</p>
                    {message.meta && <small>{message.meta}</small>}
                    {Array.isArray(message.suggestions) && message.suggestions.length > 0 && (
                      <div className="suggestions">
                        {message.suggestions.map((item) => (
                          <button key={`${message.id}-${item.id}`} type="button" onClick={() => { void ask(item.pregunta) }}>
                            {item.tema}: {item.pregunta}
                          </button>
                        ))}
                      </div>
                    )}
                    {message.role === 'assistant' ? (
                      <div className="message-actions">
                        <button type="button" onClick={() => repeatMessage(message)} disabled={!canSpeak}>
                          Repetir
                        </button>
                        <button type="button" onClick={() => void copyMessageText(message)}>
                          Copiar
                        </button>
                      </div>
                    ) : null}
                  </article>
                ))}
                {sending ? <article className="bubble assistant pending"><p>SURI está preparando su respuesta...</p></article> : null}
                <div ref={messagesEndRef} />
              </div>

              <div className="quick-actions">
                <button
                  type="button"
                  onClick={() => {
                    setMessages([{ id: `reset-${Date.now()}`, role: 'system', text: 'Chat reiniciado.', timestamp: Date.now() }])
                    setAvatarState(config.avatar.defaultIdleState as AvatarState)
                    setStatus('Chat reiniciado')
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel()
                    }
                  }}
                >
                  Limpiar chat
                </button>
                <button type="button" onClick={() => repeatMessage([...messages].reverse().find((entry) => entry.role === 'assistant'))} disabled={!canSpeak}>
                  Repetir última respuesta
                </button>
              </div>

              <form className="composer" onSubmit={onSubmit}>
                <button
                  type="button"
                  className={`mic-button ${recognizing ? 'recording' : ''}`}
                  onClick={() => { void startMicInput() }}
                  aria-label="Hablar con SURI"
                  title="Hablar con SURI"
                  disabled={loading || sending}
                >
                  {recognizing ? '■' : '🎤'}
                </button>
                <input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Escribe tu consulta"
                  disabled={loading || sending}
                />
                <button type="submit" disabled={!canSubmit}>{sending ? 'Enviando...' : 'Enviar'}</button>
              </form>
              <p className="status">{status}</p>
            </section>
          </section>
        )}

        {activeTab === 'config' && (
          <section className="tab-content">
            <h2>Configuracion AI y Avatar</h2>
            <h3>Chat y voz</h3>
            <div className="form-grid">
              <label>
                Modo de respuesta
                <select
                  value={config.ai.responseMode}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, responseMode: e.target.value as ResponseMode } }))}
                >
                  <option value="faqs">FAQs</option>
                  <option value="hybrid">Hibrido</option>
                  <option value="llm">LLM</option>
                </select>
              </label>
              <label>
                Proveedor
                <select
                  value={config.ai.provider}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, provider: e.target.value as Provider } }))}
                >
                  <option value="mock">Mock</option>
                  <option value="openai">OpenAI</option>
                  <option value="gemini">Gemini</option>
                </select>
              </label>
              <label>
                Umbral de similitud
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.01}
                  value={config.ai.faqSimilarityThreshold}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      ai: { ...prev.ai, faqSimilarityThreshold: Math.max(0, Math.min(1, Number(e.target.value) || 0)) },
                    }))
                  }
                />
              </label>
              <label>
                Voz activa
                <select
                  value={config.speech.enabled ? 'si' : 'no'}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, enabled: e.target.value === 'si' } }))}
                >
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label>
                Auto lectura
                <select
                  value={config.speech.autoRead ? 'si' : 'no'}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, autoRead: e.target.value === 'si' } }))}
                >
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label>
                Repeticiones al repetir
                <input
                  type="number"
                  min={1}
                  max={3}
                  step={1}
                  value={config.speech.repeatCount}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, repeatCount: Math.max(1, Math.min(3, Number(e.target.value) || 1)) } }))}
                />
              </label>
              <label>
                Idioma voz
                <select
                  value={config.speech.lang}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, lang: e.target.value } }))}
                >
                  {VOICE_LANG_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Velocidad voz
                <input
                  type="number"
                  min={0.7}
                  max={1.4}
                  step={0.05}
                  value={config.speech.rate}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, rate: Math.max(0.7, Math.min(1.4, Number(e.target.value) || 1)) } }))}
                />
              </label>
              <label>
                Tono voz
                <input
                  type="number"
                  min={0.7}
                  max={1.4}
                  step={0.05}
                  value={config.speech.pitch}
                  onChange={(e) => setConfig((prev) => ({ ...prev, speech: { ...prev.speech, pitch: Math.max(0.7, Math.min(1.4, Number(e.target.value) || 1)) } }))}
                />
              </label>
            </div>

            <h3>Voz primaria y secundaria</h3>
            <div className="form-grid">
              <label>
                Voz primaria idioma
                <select
                  value={config.voice.primary.lang}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, primary: { ...prev.voice.primary, lang: e.target.value } } }))}
                >
                  {VOICE_LANG_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz primaria engine
                <select
                  value={config.voice.primary.engine}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, primary: { ...prev.voice.primary, engine: e.target.value } } }))}
                >
                  {VOICE_ENGINE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz primaria navegador
                <select
                  value={config.voice.primary.browserVoice}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, primary: { ...prev.voice.primary, browserVoice: e.target.value } } }))}
                >
                  <option value="">Automatica</option>
                  {browserVoiceOptions.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz primaria velocidad
                <input
                  type="number"
                  step={0.05}
                  min={0.5}
                  max={1.8}
                  value={config.voice.primary.rate}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, primary: { ...prev.voice.primary, rate: Number(e.target.value) || 1 } } }))}
                />
              </label>
              <label>
                Voz primaria tono
                <input
                  type="number"
                  step={0.05}
                  min={0.5}
                  max={1.8}
                  value={config.voice.primary.pitch}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, primary: { ...prev.voice.primary, pitch: Number(e.target.value) || 1 } } }))}
                />
              </label>
              <label>
                Voz secundaria idioma
                <select
                  value={config.voice.secondary.lang}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, secondary: { ...prev.voice.secondary, lang: e.target.value } } }))}
                >
                  {VOICE_LANG_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz secundaria engine
                <select
                  value={config.voice.secondary.engine}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, secondary: { ...prev.voice.secondary, engine: e.target.value } } }))}
                >
                  {VOICE_ENGINE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz secundaria navegador
                <select
                  value={config.voice.secondary.browserVoice}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, secondary: { ...prev.voice.secondary, browserVoice: e.target.value } } }))}
                >
                  <option value="">Automatica</option>
                  {browserVoiceOptions.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Voz secundaria velocidad
                <input
                  type="number"
                  step={0.05}
                  min={0.5}
                  max={1.8}
                  value={config.voice.secondary.rate}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, secondary: { ...prev.voice.secondary, rate: Number(e.target.value) || 1 } } }))}
                />
              </label>
              <label>
                Voz secundaria tono
                <input
                  type="number"
                  step={0.05}
                  min={0.5}
                  max={1.8}
                  value={config.voice.secondary.pitch}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, secondary: { ...prev.voice.secondary, pitch: Number(e.target.value) || 1 } } }))}
                />
              </label>
              <label>
                TTS engine general
                <input
                  value={config.voice.tts.engine}
                  onChange={(e) => setConfig((prev) => ({ ...prev, voice: { ...prev.voice, tts: { ...prev.voice.tts, engine: e.target.value } } }))}
                />
              </label>
            </div>

            <h3>Configuracion SURI (respuestas y estados)</h3>
            <div className="form-grid">
              <label>
                Estado idle por defecto
                <select
                  value={config.avatar.defaultIdleState}
                  onChange={(e) => {
                    const nextIdleState = e.target.value as AvatarState
                    setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, defaultIdleState: nextIdleState } }))
                    setAvatarState(nextIdleState)
                  }}
                >
                  {avatarStateOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Expresion inicial
                <select
                  value={config.avatar.initialExpression}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, initialExpression: e.target.value } }))}
                >
                  {expressionOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Gesto inicial
                <select
                  value={config.avatar.initialGesture}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, initialGesture: e.target.value } }))}
                >
                  {gestureOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Animación inicial
                <select
                  value={config.avatar.initialPlaybackRef || ''}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, initialPlaybackRef: e.target.value } }))}
                >
                  <option value="">Automática</option>
                  {DEFAULT_AVATAR_PLAYBACK_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Animación de refresh
                <select
                  value={config.avatar.refreshPlaybackRef || ''}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, refreshPlaybackRef: e.target.value } }))}
                >
                  <option value="">Automática</option>
                  {DEFAULT_AVATAR_PLAYBACK_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Animaciones para chat
                <select
                  multiple
                  size={Math.min(8, DEFAULT_AVATAR_PLAYBACK_OPTIONS.length)}
                  value={config.avatar.chatAnimationRefs}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      avatar: {
                        ...prev.avatar,
                        chatAnimationRefs: Array.from(e.currentTarget.selectedOptions).map((option) => option.value),
                      },
                    }))
                  }
                >
                  {DEFAULT_AVATAR_PLAYBACK_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              Reglas burbuja a animacion (JSON)
              <textarea
                rows={4}
                value={JSON.stringify(config.avatar.bubbleAnimationRules, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value)
                    if (Array.isArray(parsed)) {
                      setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, bubbleAnimationRules: parsed } }))
                    }
                  } catch {
                    // Se mantiene estado previo hasta JSON valido.
                  }
                }}
              />
            </label>
            <label className="block">
              Mapa keyword a animacion (JSON)
              <textarea
                rows={4}
                value={JSON.stringify(config.avatar.animationKeywordMap, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value)
                    if (parsed && typeof parsed === 'object') {
                      setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, animationKeywordMap: parsed as Record<string, string> } }))
                    }
                  } catch {
                    // Se mantiene estado previo hasta JSON valido.
                  }
                }}
              />
            </label>

            <h3>Escucha (STT)</h3>
            <div className="form-grid">
              <label>
                Modo escucha
                <select
                  value={config.listening.mode}
                  onChange={(e) => setConfig((prev) => ({ ...prev, listening: { ...prev.listening, mode: e.target.value } }))}
                >
                  {LISTEN_MODE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Modelo escucha
                <select
                  value={config.listening.model}
                  onChange={(e) => setConfig((prev) => ({ ...prev, listening: { ...prev.listening, model: e.target.value } }))}
                >
                  {LISTEN_MODEL_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Sensibilidad
                <select
                  value={config.listening.sensitivity}
                  onChange={(e) => setConfig((prev) => ({ ...prev, listening: { ...prev.listening, sensitivity: e.target.value } }))}
                >
                  {LISTEN_SENSITIVITY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Idioma escucha
                <input
                  value={config.listening.language}
                  onChange={(e) => setConfig((prev) => ({ ...prev, listening: { ...prev.listening, language: e.target.value } }))}
                />
              </label>
              <label>
                Tarea escucha
                <input
                  value={config.listening.task}
                  onChange={(e) => setConfig((prev) => ({ ...prev, listening: { ...prev.listening, task: e.target.value } }))}
                />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Modelo principal
                <input
                  value={config.ai.primaryModel}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, primaryModel: e.target.value } }))}
                />
              </label>
              <label>
                Modelo secundario
                <input
                  value={config.ai.secondaryModel}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, secondaryModel: e.target.value } }))}
                />
              </label>
              <label>
                API Key
                <input
                  value={config.ai.apiKey}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, apiKey: e.target.value } }))}
                />
              </label>
              <label>
                Modelo avatar
                <select
                  value={config.avatar.modelUrl}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, modelUrl: e.target.value } }))}
                >
                  {avatarModelCatalog.map((model) => (
                    <option key={model.url} value={model.url}>
                      {model.label || model.url} {model.short ? `(${model.short})` : ''}
                    </option>
                  ))}
                  {!avatarModelCatalog.some((model) => model.url === config.avatar.modelUrl) ? (
                    <option value={config.avatar.modelUrl}>{config.avatar.modelUrl}</option>
                  ) : null}
                </select>
              </label>
              <label>
                Escala avatar
                <input
                  type="number"
                  step={0.05}
                  min={0.2}
                  max={2}
                  value={config.avatar.scale}
                  onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, scale: Number(e.target.value) || 0.65 } }))}
                />
              </label>
              <label>
                Fondo avatar
                <input
                  value={config.ui.backgroundImageUrl}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ui: { ...prev.ui, backgroundImageUrl: e.target.value } }))}
                />
              </label>
              <label>
                Modo UI
                <select
                  value={config.ui.mode || 'embedded'}
                  onChange={(e) => setConfig((prev) => ({ ...prev, ui: { ...prev.ui, mode: e.target.value } }))}
                >
                  {UI_MODE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              Burbuja de bienvenida
              <textarea
                rows={3}
                value={config.avatar.welcomeBubble}
                onChange={(e) => setConfig((prev) => ({ ...prev, avatar: { ...prev.avatar, welcomeBubble: e.target.value } }))}
              />
            </label>
            <label className="block">
              Prompt del sistema
              <textarea
                rows={5}
                value={config.ai.systemPrompt}
                onChange={(e) => setConfig((prev) => ({ ...prev, ai: { ...prev.ai, systemPrompt: e.target.value } }))}
              />
            </label>
            <div className="actions">
              <button type="button" onClick={() => void loadConfig()}>Recargar</button>
              <button type="button" onClick={() => void saveConfig()}>Guardar</button>
            </div>

            <h3>JSON configuracion</h3>
            <textarea className="json" rows={12} value={configJson} onChange={(e) => setConfigJson(e.target.value)} />
            <div className="actions">
              <button type="button" onClick={() => void applyConfigJson()}>Aplicar JSON</button>
            </div>
          </section>
        )}

        {activeTab === 'faqs' && (
          <section className="tab-content">
            <div className="actions">
              <button type="button" onClick={addFaqRow}>Agregar fila</button>
              <button type="button" onClick={loadParentChildRelations}>Cargar relaciones padre-hija</button>
              <button type="button" onClick={() => void saveFaqs()}>Guardar FAQs</button>
              <button type="button" onClick={() => void resetFaqs()}>Reset base</button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Activo</th>
                    <th>ID</th>
                    <th>Tema</th>
                    <th>Fuente</th>
                    <th>Variaciones</th>
                    <th>Pregunta</th>
                    <th>Respuesta</th>
                    <th>Tags</th>
                    <th>Paginas</th>
                    <th>FAQs hijas (IDs)</th>
                    <th>Prioridad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((faq, index) => (
                    <tr key={faq.id || `${index}`}>
                      <td>
                        <input type="checkbox" checked={faq.activo} onChange={(e) => updateFaqField(index, 'activo', e.target.checked)} />
                      </td>
                      <td><input value={faq.id} onChange={(e) => updateFaqField(index, 'id', e.target.value)} /></td>
                      <td><input value={faq.tema} onChange={(e) => updateFaqField(index, 'tema', e.target.value)} /></td>
                      <td><input value={faq.fuente} onChange={(e) => updateFaqField(index, 'fuente', e.target.value)} /></td>
                      <td><input value={listToCsv(faq.variaciones)} onChange={(e) => updateFaqField(index, 'variaciones', e.target.value)} /></td>
                      <td><textarea rows={2} value={faq.pregunta} onChange={(e) => updateFaqField(index, 'pregunta', e.target.value)} /></td>
                      <td><textarea rows={2} value={faq.respuesta} onChange={(e) => updateFaqField(index, 'respuesta', e.target.value)} /></td>
                      <td><input value={listToCsv(faq.tags)} onChange={(e) => updateFaqField(index, 'tags', e.target.value)} /></td>
                      <td><input value={listToCsv(faq.pagina)} onChange={(e) => updateFaqField(index, 'pagina', e.target.value)} /></td>
                      <td><input value={listToCsv(faq.faqsRelacionadas)} onChange={(e) => updateFaqField(index, 'faqsRelacionadas', e.target.value)} /></td>
                      <td><input type="number" value={faq.prioridad} onChange={(e) => updateFaqField(index, 'prioridad', e.target.value)} /></td>
                      <td><button type="button" onClick={() => removeFaqRow(index)}>Eliminar</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Mapa mental FAQ (padre-hija)</h3>
            {faqMentalMap.length === 0 ? (
              <p>No hay relaciones definidas en faqsRelacionadas.</p>
            ) : (
              <div className="faq-map-grid">
                {faqMentalMap.map((entry, idx) => (
                  <article key={`${entry.parent.id}-${idx}`} className="faq-map-card">
                    <h4>Padre: {entry.parent.id}</h4>
                    <p>{entry.parent.pregunta}</p>
                    <div className="faq-map-children">
                      {entry.children.map((child) => (
                        <span key={`${entry.parent.id}-${child.id}`} className="faq-child-pill">
                          {child.id}: {child.pregunta}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'info' && (
          <section className="tab-content">
            <h2>Informacion principal</h2>
            {!appInfo ? (
              <p>No disponible</p>
            ) : (
              <>
                <div className="cards">
                  <article><h3>FAQ Total</h3><p>{appInfo.summary.faqTotal}</p></article>
                  <article><h3>FAQ Activas</h3><p>{appInfo.summary.faqActivas}</p></article>
                  <article><h3>Temas</h3><p>{appInfo.summary.topics}</p></article>
                  <article><h3>Modo</h3><p>{appInfo.summary.responseMode}</p></article>
                </div>
                <h3>Temas por frecuencia</h3>
                <ul className="topics">
                  {Object.entries(appInfo.topics).map(([topic, count]) => (
                    <li key={topic}><span>{topic}</span><strong>{count}</strong></li>
                  ))}
                </ul>
              </>
            )}
          </section>
        )}
      </section>
    </main>
  )
}

export default App
