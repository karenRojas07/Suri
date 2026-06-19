import * as THREE from "https://esm.sh/three@0.164.1";
import { GLTFLoader } from "https://esm.sh/three@0.164.1/examples/jsm/loaders/GLTFLoader.js";
import { TransformControls } from "https://esm.sh/three@0.164.1/examples/jsm/controls/TransformControls.js";
import { AvatarStateController, AVATAR_STATES } from "./stateController.js";

const DEFAULT_ANIMATION_BY_STATE = {
  idle: "idle",
  listening: "listening",
  thinking: "thinking",
  petting: "petting",
  speaking: "speaking",
  speaking_explain: "speaking_explain",
  suggesting: "suggesting",
  not_found: "not_found",
  celebrate: "celebrate",
  celebrating: "celebrate",
  wave_hello: "wave_hello",
  tablet_reading: "tablet_reading",
  error: "not_found"
};

const STATE_ANIMATION_HINTS = {
  idle: ["idle", "breath", "breathing", "stand", "base", "default", "loop"],
  listening: ["listen", "listening", "ready", "attent", "alert"],
  thinking: ["think", "thinking", "ponder", "inspect", "search", "analy"],
  petting: ["idle", "breath", "breathing", "listen", "ready", "gentle", "calm"],
  speaking: ["talk", "speak", "speaking", "chat", "answer", "narrat"],
  speaking_explain: ["explain", "present", "lecture", "teach", "gesture", "hands", "demo"],
  suggesting: ["suggest", "offer", "present", "guide"],
  not_found: ["confused", "shrug", "no", "error", "sad"],
  celebrate: ["celebrate", "victory", "happy", "cheer"],
  wave_hello: ["wave", "hello", "greet", "welcome"],
  tablet_reading: ["read", "reading", "tablet", "explain", "present"]
};

const MODEL_STATE_ANIMATION_PROFILES = {
  "suri_animations_2.glb": {
    default: { clip: "walking", paused: true, progress: 0.08 },
    idle: { clip: "walking", paused: true, progress: 0.08 },
    petting: { clip: "walking", paused: true, progress: 0.12 },
    wave_hello: { clip: "walking", timeScale: 0.32 },
    thinking: { clip: "walking", paused: true, progress: 0.24 },
    listening: { clip: "walking", paused: true, progress: 0.24 },
    speaking: { clip: "walking", timeScale: 0.3 },
    speaking_explain: { clip: "walking", timeScale: 0.36 },
    tablet_reading: { clip: "walking", timeScale: 0.34 },
    suggesting: { clip: "walking", timeScale: 0.3 },
    not_found: { clip: "walking", paused: true, progress: 0.58 },
    error: { clip: "walking", paused: true, progress: 0.58 }
  }
};

function getModelFileName(value) {
  return String(value || "").split(/[\\/]/).pop().toLowerCase();
}

function safeLower(value) {
  return String(value || "").toLowerCase();
}

function visemeFromChar(ch) {
  const c = safeLower(ch);
  if (["a", "á"].includes(c)) return "viseme_a";
  if (["e", "é"].includes(c)) return "viseme_e";
  if (["i", "í", "y"].includes(c)) return "viseme_i";
  if (["o", "ó"].includes(c)) return "viseme_o";
  if (["u", "ú"].includes(c)) return "viseme_u";
  if (["m", "b", "p"].includes(c)) return "viseme_mbp";
  if (["f", "v"].includes(c)) return "viseme_fv";
  if (["l"].includes(c)) return "viseme_l";
  if (["r"].includes(c)) return "viseme_rr";
  if (["t", "d", "n", "s", "z", "c", "k", "q"].includes(c)) return "viseme_th";
  return "viseme_sil";
}

function quatFromEuler(x, y, z) {
  return new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z, "XYZ"));
}

function quatTrackValues(...quaternions) {
  return quaternions.flatMap((quat) => [quat.x, quat.y, quat.z, quat.w]);
}

function vecTrackValues(...vectors) {
  return vectors.flatMap((vector) => [vector.x, vector.y, vector.z]);
}

export class SuriAvatar3D {
  constructor({ container, modelUrl = "./assets/avatar/suri_avatar.glb", defaultAnimation = "" } = {}) {
    this.container = container;
    this.modelUrl = modelUrl;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();
    this.mixer = null;
    this.actions = new Map();
    this.activeAction = null;
    this.model = null;
    this.morphMeshes = [];
    this.speechTimer = null;
    this.frameId = 0;
    this.horizontalOffset = 0;
    this.verticalOffset = 0;
    this.baseModelX = 0;
    this.baseModelY = 0;
    this.baseModelRotation = { x: 0, y: 0, z: 0 };
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.currentYaw = 0;
    this.currentPitch = 0;
    this.dragSensitivity = 0.01;
    this.pitchLimit = 0.35;
    this.yawLimit = 1.35;
    this.onPointerDown = null;
    this.onPointerMove = null;
    this.onPointerUp = null;
    this.onWheel = null;
    this.defaultModelAnimation = safeLower(defaultAnimation);
    this.currentModelKey = getModelFileName(modelUrl);
    this.stateController = new AvatarStateController(this);
    this.proceduralClipCache = new Map();
    this.runtimeClipCache = new Map();
    this.runtimeClipSources = new Map();
    this.sanitizedClipCache = new Map();
    this.boneRestPose = new Map();
    this.transformControls = null;
    this.boneEditEnabled = false;
    this.boneEditMode = "rotate";
    this.transformDraggingChangedHandler = null;
    this.transformObjectChangeHandler = null;
    this.raycaster = new THREE.Raycaster();
    this.pointerNdc = new THREE.Vector2();
    this.zoomSpeed = 0.0042;
    this.minCameraDistance = 2.2;
    this.maxCameraDistance = 8.8;
    this.baseFitScale = 1;
    this.userScaleMultiplier = 1;
  }

  async init() {
    if (!this.container) return;

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(33, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
    this.camera.position.set(0, 1.35, 4.1);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.innerHTML = "";
    this.container.appendChild(this.renderer.domElement);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(2, 4, 4);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.9);
    fillLight.position.set(-3, 2, 1);
    this.scene.add(fillLight);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    await this.loadModel();
    this.onResize();
    window.addEventListener("resize", () => this.onResize());
    this.renderLoop();
  }

  async loadModel() {
    const loader = new GLTFLoader();

    this.stopSpeech();
    this.resetView();
    this.clearCurrentModel();
    this.currentModelKey = getModelFileName(this.modelUrl);

    try {
      const gltf = await loader.loadAsync(this.modelUrl);
      this.model = gltf.scene;

      // Centra y encuadra automaticamente modelos con escalas/origen variados.
      const box = new THREE.Box3().setFromObject(this.model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      this.model.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const targetHeight = 2.2;
      const fitScale = targetHeight / maxDim;
      this.baseFitScale = fitScale;
      this.applyModelScale();

      const scaledHeight = size.y * fitScale;
      this.model.position.y -= (scaledHeight * 0.5) - 1.34;
      this.baseModelX = this.model.position.x;
      this.baseModelY = this.model.position.y;
      this.baseModelRotation = {
        x: this.model.rotation.x,
        y: this.model.rotation.y,
        z: this.model.rotation.z
      };

      const fov = THREE.MathUtils.degToRad(this.camera.fov);
      const fitDistance = (scaledHeight * 0.8) / Math.tan(fov * 0.5);
      const defaultDistance = Math.max(3.2, fitDistance + 1.2);
      this.minCameraDistance = Math.max(1.8, fitDistance * 0.58);
      this.maxCameraDistance = Math.max(defaultDistance + 2.8, fitDistance + 3.6);
      this.camera.position.set(0, 1.35, defaultDistance);
      this.applyCenterOffset();

      this.scene.add(this.model);
      this.captureBoneRestPose();

      this.captureMorphTargets(this.model);
      this.bindAnimations(gltf.animations || []);
      if (gltf.animations?.length) {
        console.info("Avatar 3D: clips de animacion detectados:", gltf.animations.map((clip) => clip.name));
      } else {
        console.info("Avatar 3D: el GLB no reporto clips de animacion.");
      }
      this.playDefaultAnimation(gltf.animations || [], this.defaultModelAnimation);
      this.setupPointerInteraction();
      this.setupTransformControls();
      this.setState(AVATAR_STATES.idle);
    } catch (error) {
      console.error("No se pudo cargar el GLB del avatar 3D:", error);
      const geo = new THREE.CapsuleGeometry(0.55, 1.2, 8, 16);
      const mat = new THREE.MeshStandardMaterial({ color: 0xc98d42, roughness: 0.72, metalness: 0.05 });
      const fallback = new THREE.Mesh(geo, mat);
      fallback.position.set(0, 0.1, 0);
      this.scene.add(fallback);
    }
  }

  clearCurrentModel() {
    this.teardownTransformControls();
    this.removePointerInteraction();

    if (this.model && this.scene) {
      this.scene.remove(this.model);
      this.model.traverse((node) => {
        if (!node.isMesh) return;
        if (node.geometry) {
          node.geometry.dispose();
        }
        if (Array.isArray(node.material)) {
          for (const material of node.material) {
            material?.dispose?.();
          }
        } else if (node.material) {
          node.material.dispose?.();
        }
      });
    }

    this.model = null;
    this.morphMeshes = [];
    this.mixer = null;
    this.actions = new Map();
    this.activeAction = null;
    this.proceduralClipCache = new Map();
    this.runtimeClipCache = new Map();
    this.runtimeClipSources = new Map();
    this.sanitizedClipCache = new Map();
    this.boneRestPose = new Map();
    this.boneEditEnabled = false;
    this.boneEditMode = "rotate";
    this.resetView();
    this.horizontalOffset = 0;
    this.verticalOffset = 0;
    this.baseModelX = 0;
    this.baseModelY = 0;
  }

  removePointerInteraction() {
    if (!this.renderer?.domElement) return;

    const canvas = this.renderer.domElement;
    if (this.onPointerDown) {
      canvas.removeEventListener("pointerdown", this.onPointerDown);
      this.onPointerDown = null;
    }
    if (this.onPointerMove) {
      window.removeEventListener("pointermove", this.onPointerMove);
      this.onPointerMove = null;
    }
    if (this.onPointerUp) {
      window.removeEventListener("pointerup", this.onPointerUp);
      this.onPointerUp = null;
    }
    if (this.onWheel) {
      canvas.removeEventListener("wheel", this.onWheel);
      this.onWheel = null;
    }
  }

  captureMorphTargets(root) {
    root.traverse((node) => {
      if (!node.isMesh) return;
      if (node.morphTargetDictionary && node.morphTargetInfluences) {
        this.morphMeshes.push(node);
      }
    });
  }

  bindAnimations(clips) {
    if (!clips.length || !this.model) return;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.actions = new Map();
    this.activeAction = null;

    for (const clip of clips) {
      const action = this.mixer.clipAction(clip);
      action.clampWhenFinished = false;
      action.loop = THREE.LoopRepeat;
      this.actions.set(safeLower(clip.name), action);
    }
  }

  getStateAnimationProfile(state) {
    const profile = MODEL_STATE_ANIMATION_PROFILES[this.currentModelKey];
    if (!profile) return null;
    return profile[state] || profile.default || null;
  }

  playConfiguredAction(config) {
    const clipName = safeLower(config?.clip || "");
    if (!clipName) return false;

    const action = this.actions.get(clipName);
    if (!action) return false;

    const clipDuration = action.getClip?.().duration || 0;
    const progress = Number.isFinite(config.progress) ? Math.max(0, Math.min(1, config.progress)) : 0;

    action.enabled = true;
    action.reset();
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.clampWhenFinished = false;
    action.timeScale = Number.isFinite(config.timeScale) ? config.timeScale : 1;
    action.time = clipDuration > 0 ? clipDuration * progress : 0;
    action.paused = false;
    action.fadeIn(0.18).play();

    if (this.activeAction && this.activeAction !== action) {
      this.activeAction.fadeOut(0.18);
    }

    if (config.paused) {
      action.paused = true;
    }

    this.activeAction = action;
    return true;
  }

  playDefaultAnimation(clips, presetAnimation = "") {
    if (!clips?.length) return;

    const defaultProfile = this.getStateAnimationProfile(AVATAR_STATES.idle);
    if (defaultProfile && this.playConfiguredAction(defaultProfile)) {
      return;
    }

    const preset = safeLower(presetAnimation);
    if (preset) {
      const presetAction = this.actions.get(preset);
      if (presetAction) {
        presetAction.reset().fadeIn(0.12).play();
        this.activeAction = presetAction;
        return;
      }
    }

    const preferredNames = [
      "idle",
      "base",
      "breathing",
      "breath",
      "stand",
      "loop",
      "animation",
      "default"
    ];

    for (const name of preferredNames) {
      const action = this.actions.get(name);
      if (action) {
        action.reset().fadeIn(0.12).play();
        this.activeAction = action;
        return;
      }
    }

    const firstClip = clips[0];
    const fallbackAction = this.actions.get(safeLower(firstClip?.name));
    if (fallbackAction) {
      fallbackAction.reset().fadeIn(0.12).play();
      this.activeAction = fallbackAction;
    }
  }

  playAnimation(name) {
    if (!this.mixer || !name) return;

    const requestedName = safeLower(name);
    const action = this.actions.get(requestedName);
    if (!action) return;

    action.reset().fadeIn(0.18).play();
    if (this.activeAction && this.activeAction !== action) {
      this.activeAction.fadeOut(0.18);
    }
    this.activeAction = action;
  }

  playAnimationAdvanced(name, options = {}) {
    if (!this.mixer || !name) return false;

    const requestedName = safeLower(name);
    const action = this.actions.get(requestedName);
    if (!action) return false;

    const baseClip = action.getClip?.() || null;
    const playbackAction = (options.rootMotionLocked && baseClip)
      ? this.mixer.clipAction(this.getSanitizedClip(baseClip, options))
      : action;
    if (!playbackAction) return false;

    const clipDuration = playbackAction.getClip?.().duration || baseClip?.duration || 0;
    const progress = Number.isFinite(options.progress)
      ? Math.max(0, Math.min(1, Number(options.progress)))
      : 0;
    const timeScale = Number.isFinite(options.timeScale) ? Number(options.timeScale) : 1;
    const loop = options.loop === false ? THREE.LoopOnce : THREE.LoopRepeat;
    const repetitions = options.loop === false ? 1 : Infinity;

    playbackAction.enabled = true;
    playbackAction.reset();
    playbackAction.setLoop(loop, repetitions);
    playbackAction.clampWhenFinished = options.clampWhenFinished ?? (options.loop === false);
    playbackAction.timeScale = timeScale;
    playbackAction.time = clipDuration > 0 ? clipDuration * progress : 0;
    playbackAction.paused = Boolean(options.paused);
    playbackAction.fadeIn(0.18).play();

    if (this.activeAction && this.activeAction !== playbackAction) {
      this.activeAction.fadeOut(0.18);
    }

    this.activeAction = playbackAction;
    return true;
  }

  getSanitizedClip(clip, options = {}) {
    if (!clip) return clip;

    const lockPosition = options.lockPosition !== false;
    const lockVertical = options.lockVertical !== false;
    const removeScaleTracks = options.removeScaleTracks !== false;
    const rootBoneNames = Array.isArray(options.rootBoneNames) && options.rootBoneNames.length
      ? options.rootBoneNames
      : ["Hips", "Armature", "Root", "mixamorigHips"];
    const rootNamesLower = rootBoneNames.map((name) => safeLower(name));

    const cacheKey = [
      clip.uuid || clip.name,
      lockPosition ? "p1" : "p0",
      lockVertical ? "v1" : "v0",
      removeScaleTracks ? "s1" : "s0",
      rootNamesLower.join("|")
    ].join("::");

    if (this.sanitizedClipCache.has(cacheKey)) {
      return this.sanitizedClipCache.get(cacheKey);
    }

    const tracks = [];
    for (const track of clip.tracks || []) {
      const name = String(track?.name || "");
      const lower = safeLower(name);

      if (removeScaleTracks && lower.endsWith(".scale")) {
        continue;
      }

      const isRootTrack = rootNamesLower.some((root) => lower.startsWith(`${root}.`));
      if (isRootTrack && lockPosition && lower.endsWith(".position")) {
        continue;
      }

      if (isRootTrack && lockVertical && lower.endsWith(".position") && !lockPosition) {
        const cloned = track.clone?.() || track;
        if (Array.isArray(cloned.values) || ArrayBuffer.isView(cloned.values)) {
          const values = Array.from(cloned.values);
          const baseY = Number(values[1] || 0);
          for (let i = 1; i < values.length; i += 3) {
            values[i] = baseY;
          }
          cloned.values = values;
        }
        tracks.push(cloned);
        continue;
      }

      tracks.push(track.clone?.() || track);
    }

    const sanitized = new THREE.AnimationClip(`${clip.name}_locked`, clip.duration, tracks);
    this.sanitizedClipCache.set(cacheKey, sanitized);
    return sanitized;
  }

  findAnimationByHints(state) {
    const hints = STATE_ANIMATION_HINTS[state] || [];
    if (!hints.length || !this.actions.size) return "";

    const keys = Array.from(this.actions.keys());
    for (const hint of hints) {
      const found = keys.find((key) => key.includes(hint));
      if (found) return found;
    }

    return "";
  }

  getAnimationNames() {
    return Array.from(this.actions.keys());
  }

  getAnimationCatalog() {
    return Array.from(this.actions.keys()).map((id) => {
      const isRuntime = id.startsWith("runtime:");
      const displayName = isRuntime ? id.slice("runtime:".length) : id;
      const runtimeSource = this.runtimeClipSources.get(id) || null;

      return {
        id,
        name: displayName,
        source: isRuntime ? "editor" : "glb",
        editable: Boolean(isRuntime),
        duration: Number(this.actions.get(id)?.getClip?.()?.duration || 0),
        keyframes: runtimeSource?.keyframes?.length || 0
      };
    });
  }

  inspectRig() {
    const reporte = {
      modelUrl: this.modelUrl || "",
      currentModelKey: this.currentModelKey || "",
      tieneSkinnedMesh: false,
      tieneSkeleton: false,
      tieneBones: false,
      tieneSkinIndex: false,
      tieneSkinWeight: false,
      totalBones: 0,
      totalSkinnedMeshes: 0,
      totalAnimations: 0,
      skinnedMeshes: [],
      bones: [],
      animations: []
    };

    const collectedBones = new Map();
    const seenBoneUuids = new Set();

    if (!this.model) {
      return reporte;
    }

    this.model.traverse((obj) => {
      if (obj.isSkinnedMesh) {
        reporte.tieneSkinnedMesh = true;
        reporte.totalSkinnedMeshes += 1;

        const skeleton = obj.skeleton;
        const bones = skeleton?.bones || [];

        if (skeleton) reporte.tieneSkeleton = true;
        if (bones.length > 0) reporte.tieneBones = true;

        const hasSkinIndex = Boolean(obj.geometry?.attributes?.skinIndex);
        const hasSkinWeight = Boolean(obj.geometry?.attributes?.skinWeight);

        if (hasSkinIndex) reporte.tieneSkinIndex = true;
        if (hasSkinWeight) reporte.tieneSkinWeight = true;

        reporte.totalBones += bones.length;

        reporte.skinnedMeshes.push({
          name: obj.name || "(sin nombre)",
          boneCount: bones.length,
          hasSkinIndex,
          hasSkinWeight,
          skeletonUuid: skeleton?.uuid || null,
          materialName: Array.isArray(obj.material) ? obj.material.map((m) => m?.name || null) : (obj.material?.name || null)
        });

        bones.forEach((bone, index) => {
          if (!bone || seenBoneUuids.has(bone.uuid)) return;
          seenBoneUuids.add(bone.uuid);
          collectedBones.set(bone.uuid, {
            index,
            name: bone.name || `(bone_${index}_sin_nombre)`,
            uuid: bone.uuid,
            parent: bone.parent?.name || null,
            position: {
              x: Number(bone.position.x.toFixed(4)),
              y: Number(bone.position.y.toFixed(4)),
              z: Number(bone.position.z.toFixed(4))
            },
            rotation: {
              x: Number(bone.rotation.x.toFixed(4)),
              y: Number(bone.rotation.y.toFixed(4)),
              z: Number(bone.rotation.z.toFixed(4))
            }
          });
        });
      }

      if (obj.isBone && !seenBoneUuids.has(obj.uuid)) {
        seenBoneUuids.add(obj.uuid);
        collectedBones.set(obj.uuid, {
          index: collectedBones.size,
          name: obj.name || `(bone_${collectedBones.size}_sin_nombre)`,
          uuid: obj.uuid,
          parent: obj.parent?.name || null,
          position: {
            x: Number(obj.position.x.toFixed(4)),
            y: Number(obj.position.y.toFixed(4)),
            z: Number(obj.position.z.toFixed(4))
          },
          rotation: {
            x: Number(obj.rotation.x.toFixed(4)),
            y: Number(obj.rotation.y.toFixed(4)),
            z: Number(obj.rotation.z.toFixed(4))
          }
        });
      }
    });

    reporte.bones = Array.from(collectedBones.values());
    reporte.totalBones = reporte.bones.length;
    reporte.totalAnimations = this.actions.size || 0;
    reporte.animations = Array.from(this.actions.entries()).map(([name, action]) => ({
      name,
      duration: Number(action?.getClip?.().duration?.toFixed?.(3) || action?.getClip?.().duration || 0),
      tracks: Array.from(action?.getClip?.().tracks || []).map((track) => track.name)
    }));

    this.rigReport = reporte;

    return reporte;
  }

  playAnimationByStateHints(state, options = {}) {
    const byHints = this.findAnimationByHints(state);
    if (byHints) {
      return this.playAnimationAdvanced(byHints, options);
    }

    return this.playProceduralAnimation(state, options);
  }

  getPrimarySkinnedMesh() {
    let found = null;
    if (!this.model) return null;

    this.model.traverse((obj) => {
      if (!found && obj.isSkinnedMesh) {
        found = obj;
      }
    });

    return found;
  }

  getBoneByName(name) {
    const targetName = safeLower(name);
    if (!targetName || !this.model) return null;

    const skinnedMesh = this.getPrimarySkinnedMesh();
    const skeletonBone = skinnedMesh?.skeleton?.getBoneByName?.(name)
      || skinnedMesh?.skeleton?.bones?.find((bone) => safeLower(bone.name) === targetName)
      || null;
    if (skeletonBone) return skeletonBone;

    let found = null;
    this.model.traverse((obj) => {
      if (found || !obj.isBone) return;
      if (safeLower(obj.name) === targetName) {
        found = obj;
      }
    });

    return found;
  }

  setupTransformControls() {
    if (!this.scene || !this.camera || !this.renderer?.domElement) return;

    this.teardownTransformControls();

    this.transformControls = new TransformControls(this.camera, this.renderer.domElement);
    this.transformControls.setSize(0.7);
    this.transformControls.enabled = false;
    this.transformControls.visible = false;
    this.transformControls.setMode(this.boneEditMode);

    this.transformDraggingChangedHandler = (event) => {
      this.isDragging = Boolean(event?.value);
      if (this.renderer?.domElement) {
        this.renderer.domElement.style.cursor = this.isDragging ? "grabbing" : (this.boneEditEnabled ? "crosshair" : "grab");
      }
    };

    this.transformObjectChangeHandler = () => {
      const bone = this.transformControls?.object;
      if (!bone || !bone.isBone) return;

      const detail = this.getBonePose(bone.name);
      if (!detail) return;
      window.dispatchEvent(new CustomEvent("suri:bone-transform", { detail }));
    };

    this.transformControls.addEventListener("dragging-changed", this.transformDraggingChangedHandler);
    this.transformControls.addEventListener("objectChange", this.transformObjectChangeHandler);
    this.scene.add(this.transformControls);
  }

  teardownTransformControls() {
    if (!this.transformControls) return;

    if (this.transformDraggingChangedHandler) {
      this.transformControls.removeEventListener("dragging-changed", this.transformDraggingChangedHandler);
    }
    if (this.transformObjectChangeHandler) {
      this.transformControls.removeEventListener("objectChange", this.transformObjectChangeHandler);
    }

    if (this.scene) {
      this.scene.remove(this.transformControls);
    }

    this.transformControls.dispose?.();
    this.transformControls = null;
    this.transformDraggingChangedHandler = null;
    this.transformObjectChangeHandler = null;
  }

  setBoneEditMode(mode = "rotate") {
    const nextMode = ["rotate", "translate"].includes(mode) ? mode : "rotate";
    this.boneEditMode = nextMode;
    if (this.transformControls) {
      this.transformControls.setMode(nextMode);
    }
    return this.boneEditMode;
  }

  attachBoneEditor(boneName) {
    const bone = this.getBoneByName(boneName);
    if (!bone || !this.transformControls) return false;

    this.transformControls.attach(bone);
    this.transformControls.visible = this.boneEditEnabled;
    this.transformControls.enabled = this.boneEditEnabled;
    return true;
  }

  setBoneEditEnabled(enabled, options = {}) {
    this.boneEditEnabled = Boolean(enabled);
    this.setBoneEditMode(options.mode || this.boneEditMode || "rotate");

    if (!this.transformControls) {
      this.setupTransformControls();
    }
    if (!this.transformControls) return false;

    this.transformControls.enabled = this.boneEditEnabled;
    this.transformControls.visible = this.boneEditEnabled;

    if (!this.boneEditEnabled) {
      this.transformControls.detach();
      if (this.renderer?.domElement) {
        this.renderer.domElement.style.cursor = "grab";
      }
      return true;
    }

    const boneName = String(options.boneName || "").trim();
    if (boneName) {
      const attached = this.attachBoneEditor(boneName);
      if (!attached) return false;
    }

    if (this.renderer?.domElement) {
      this.renderer.domElement.style.cursor = "crosshair";
    }

    return true;
  }

  pickBoneFromPointerEvent(event) {
    if (!this.model || !this.camera || !this.renderer?.domElement) return "";

    const canvas = this.renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
    const y = -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);

    this.pointerNdc.set(x, y);
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);

    const skinnedMeshes = [];
    this.model.traverse((obj) => {
      if (obj.isSkinnedMesh) {
        skinnedMeshes.push(obj);
      }
    });

    if (!skinnedMeshes.length) return "";

    const intersections = this.raycaster.intersectObjects(skinnedMeshes, false);
    if (!intersections.length) return "";

    const hitPoint = intersections[0].point;
    const tempBonePos = new THREE.Vector3();
    let bestBone = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const mesh of skinnedMeshes) {
      const bones = mesh.skeleton?.bones || [];
      for (const bone of bones) {
        if (!bone?.isBone || !bone.name) continue;
        bone.getWorldPosition(tempBonePos);
        const dist = tempBonePos.distanceToSquared(hitPoint);
        if (dist < bestDistance) {
          bestDistance = dist;
          bestBone = bone;
        }
      }
    }

    if (!bestBone) return "";

    this.attachBoneEditor(bestBone.name);
    const detail = this.getBonePose(bestBone.name);
    if (detail) {
      window.dispatchEvent(new CustomEvent("suri:bone-selected", { detail }));
    }

    return bestBone.name;
  }

  captureBoneRestPose() {
    this.boneRestPose = new Map();
    if (!this.model) return;

    this.model.traverse((obj) => {
      if (!obj.isBone) return;
      this.boneRestPose.set(obj.name, {
        position: obj.position.clone(),
        rotation: obj.rotation.clone(),
        quaternion: obj.quaternion.clone()
      });
    });
  }

  listRigBoneNames() {
    if (!this.model) return [];

    const names = [];
    this.model.traverse((obj) => {
      if (obj.isBone && obj.name) {
        names.push(obj.name);
      }
    });

    return names.sort((a, b) => a.localeCompare(b));
  }

  getBonePose(name) {
    const bone = this.getBoneByName(name);
    if (!bone) return null;

    return {
      name: bone.name,
      position: {
        x: Number(bone.position.x.toFixed(6)),
        y: Number(bone.position.y.toFixed(6)),
        z: Number(bone.position.z.toFixed(6))
      },
      rotation: {
        x: Number(bone.rotation.x.toFixed(6)),
        y: Number(bone.rotation.y.toFixed(6)),
        z: Number(bone.rotation.z.toFixed(6))
      }
    };
  }

  stopAllActions() {
    if (!this.actions?.size) return;
    this.actions.forEach((action) => {
      action?.stop?.();
    });
    this.activeAction = null;
  }

  setBonePose(name, pose = {}, options = {}) {
    const bone = this.getBoneByName(name);
    if (!bone) return false;

    if (options.stopAnimations !== false) {
      this.stopAllActions();
    }

    const rotation = pose.rotation || {};
    const position = pose.position || {};

    if (Number.isFinite(rotation.x)) bone.rotation.x = Number(rotation.x);
    if (Number.isFinite(rotation.y)) bone.rotation.y = Number(rotation.y);
    if (Number.isFinite(rotation.z)) bone.rotation.z = Number(rotation.z);

    if (Number.isFinite(position.x)) bone.position.x = Number(position.x);
    if (Number.isFinite(position.y)) bone.position.y = Number(position.y);
    if (Number.isFinite(position.z)) bone.position.z = Number(position.z);

    bone.updateMatrixWorld(true);
    return true;
  }

  resetBonePose(name) {
    const bone = this.getBoneByName(name);
    if (!bone) return false;

    const rest = this.boneRestPose.get(bone.name);
    if (!rest) return false;

    bone.position.copy(rest.position);
    bone.quaternion.copy(rest.quaternion);
    bone.rotation.setFromQuaternion(rest.quaternion);
    bone.updateMatrixWorld(true);
    return true;
  }

  resetAllBonesToRest() {
    if (!this.model) return false;

    let changed = false;
    this.model.traverse((obj) => {
      if (!obj.isBone || !obj.name) return;
      const rest = this.boneRestPose.get(obj.name);
      if (!rest) return;
      obj.position.copy(rest.position);
      obj.quaternion.copy(rest.quaternion);
      obj.rotation.setFromQuaternion(rest.quaternion);
      changed = true;
    });

    if (changed) {
      this.model.updateMatrixWorld(true);
    }

    return changed;
  }

  createRuntimeClipFromKeyframes(clipName, keyframes = [], options = {}) {
    if (!this.model || !Array.isArray(keyframes) || !keyframes.length) return null;

    const sanitizedName = String(clipName || "runtime_clip").trim() || "runtime_clip";
    const perBone = new Map();

    keyframes.forEach((frame) => {
      const boneName = String(frame?.boneName || "").trim();
      const bone = this.getBoneByName(boneName);
      if (!bone) return;

      const t = Number(frame.time);
      const time = Number.isFinite(t) ? Math.max(0, t) : 0;

      if (!perBone.has(bone.name)) {
        perBone.set(bone.name, []);
      }

      perBone.get(bone.name).push({
        time,
        rotation: frame.rotation || null,
        position: frame.position || null,
        bone
      });
    });

    const tracks = [];
    let maxTime = 0;

    perBone.forEach((frames, boneName) => {
      frames.sort((a, b) => a.time - b.time);
      if (!frames.length) return;

      maxTime = Math.max(maxTime, frames[frames.length - 1].time || 0);
      const rest = this.boneRestPose.get(boneName);
      const baseRot = rest?.rotation || frames[0].bone.rotation;
      const basePos = rest?.position || frames[0].bone.position;

      const times = [];
      const rotValues = [];
      const posValues = [];
      let hasRot = false;
      let hasPos = false;

      if (frames[0].time > 0) {
        times.push(0);
        const q0 = quatFromEuler(baseRot.x, baseRot.y, baseRot.z);
        rotValues.push(q0.x, q0.y, q0.z, q0.w);
        posValues.push(basePos.x, basePos.y, basePos.z);
      }

      frames.forEach((frame) => {
        times.push(frame.time);

        const rx = Number.isFinite(frame.rotation?.x) ? Number(frame.rotation.x) : baseRot.x;
        const ry = Number.isFinite(frame.rotation?.y) ? Number(frame.rotation.y) : baseRot.y;
        const rz = Number.isFinite(frame.rotation?.z) ? Number(frame.rotation.z) : baseRot.z;
        const q = quatFromEuler(rx, ry, rz);
        rotValues.push(q.x, q.y, q.z, q.w);
        hasRot = hasRot || !!frame.rotation;

        const px = Number.isFinite(frame.position?.x) ? Number(frame.position.x) : basePos.x;
        const py = Number.isFinite(frame.position?.y) ? Number(frame.position.y) : basePos.y;
        const pz = Number.isFinite(frame.position?.z) ? Number(frame.position.z) : basePos.z;
        posValues.push(px, py, pz);
        hasPos = hasPos || !!frame.position;
      });

      if (hasRot) {
        tracks.push(new THREE.QuaternionKeyframeTrack(`${boneName}.quaternion`, times, rotValues));
      }
      if (hasPos) {
        tracks.push(new THREE.VectorKeyframeTrack(`${boneName}.position`, times, posValues));
      }
    });

    if (!tracks.length) return null;

    const configuredDuration = Number(options?.duration);
    const duration = Number.isFinite(configuredDuration)
      ? Math.max(configuredDuration, maxTime || 0.1)
      : Math.max(maxTime, 0.1);

    const clip = new THREE.AnimationClip(sanitizedName, duration, tracks);
    const key = `runtime:${safeLower(sanitizedName)}`;

    const normalizedFrames = keyframes
      .map((frame) => ({
        boneName: String(frame?.boneName || "").trim(),
        time: Number.isFinite(Number(frame?.time)) ? Math.max(0, Number(frame.time)) : 0,
        rotation: frame?.rotation
          ? {
            x: Number(frame.rotation.x || 0),
            y: Number(frame.rotation.y || 0),
            z: Number(frame.rotation.z || 0)
          }
          : null,
        position: frame?.position
          ? {
            x: Number(frame.position.x || 0),
            y: Number(frame.position.y || 0),
            z: Number(frame.position.z || 0)
          }
          : null,
        poseName: typeof frame?.poseName === "string" ? frame.poseName : ""
      }))
      .filter((frame) => frame.boneName)
      .sort((a, b) => a.time - b.time);

    this.runtimeClipCache.set(key, clip);
    this.runtimeClipSources.set(key, {
      name: sanitizedName,
      duration,
      keyframes: normalizedFrames
    });

    if (this.mixer) {
      const existing = this.actions.get(key);
      if (existing) {
        existing.stop();
        this.actions.delete(key);
      }

      const action = this.mixer.clipAction(clip);
      action.clampWhenFinished = false;
      action.loop = THREE.LoopRepeat;
      this.actions.set(key, action);
    }

    return clip;
  }

  getRuntimeClipData(clipNameOrId) {
    const raw = String(clipNameOrId || "").trim();
    if (!raw) return null;

    const key = raw.startsWith("runtime:") ? safeLower(raw) : `runtime:${safeLower(raw)}`;
    const source = this.runtimeClipSources.get(key);
    if (!source) return null;

    return {
      id: key,
      name: source.name,
      duration: source.duration,
      keyframes: source.keyframes.map((frame) => ({
        boneName: frame.boneName,
        time: frame.time,
        rotation: frame.rotation ? { ...frame.rotation } : null,
        position: frame.position ? { ...frame.position } : null,
        poseName: frame.poseName || ""
      }))
    };
  }

  playRuntimeClipByName(clipName, options = {}) {
    if (!this.mixer) return false;
    const key = `runtime:${safeLower(clipName)}`;
    const clip = this.runtimeClipCache.get(key);
    if (!clip) return false;

    let action = null;
    if (options.rootMotionLocked) {
      const sanitizedClip = this.getSanitizedClip(clip, options);
      action = this.mixer.clipAction(sanitizedClip);
    } else {
      if (!this.actions.has(key)) {
        this.actions.set(key, this.mixer.clipAction(clip));
      }
      action = this.actions.get(key);
    }
    if (!action) return false;

    const loop = options.loop === false ? THREE.LoopOnce : THREE.LoopRepeat;
    const repetitions = options.loop === false ? 1 : Infinity;
    const progress = Number.isFinite(options.progress)
      ? Math.max(0, Math.min(1, Number(options.progress)))
      : 0;

    action.reset();
    action.enabled = true;
    action.setLoop(loop, repetitions);
    action.clampWhenFinished = options.clampWhenFinished ?? (options.loop === false);
    action.timeScale = Number.isFinite(options.timeScale) ? Number(options.timeScale) : 1;
    action.time = clip.duration > 0 ? clip.duration * progress : 0;
    action.paused = Boolean(options.paused);
    action.fadeIn(0.18).play();

    if (this.activeAction && this.activeAction !== action) {
      this.activeAction.fadeOut(0.18);
    }

    this.activeAction = action;
    return true;
  }

  createAndPlayRuntimeClip(clipName, keyframes = [], options = {}) {
    const clip = this.createRuntimeClipFromKeyframes(clipName, keyframes, options);
    if (!clip) return false;
    return this.playRuntimeClipByName(clip.name, options);
  }

  createProceduralClip(kind = "greeting") {
    const normalized = safeLower(kind);
    if (this.proceduralClipCache.has(normalized)) {
      return this.proceduralClipCache.get(normalized);
    }

    const hips = this.getBoneByName("Hips") || this.getBoneByName("hips");
    const spine = this.getBoneByName("Spine") || this.getBoneByName("Spine01") || this.getBoneByName("Spine02");
    const spine01 = this.getBoneByName("Spine01");
    const spine02 = this.getBoneByName("Spine02");
    const neck = this.getBoneByName("neck") || this.getBoneByName("Neck");
    const head = this.getBoneByName("Head");
    const headFront = this.getBoneByName("headfront");
    const leftShoulder = this.getBoneByName("LeftShoulder");
    const leftArm = this.getBoneByName("LeftArm");
    const leftForeArm = this.getBoneByName("LeftForeArm");
    const leftHand = this.getBoneByName("LeftHand");
    const rightShoulder = this.getBoneByName("RightShoulder");
    const rightArm = this.getBoneByName("RightArm");
    const rightForeArm = this.getBoneByName("RightForeArm");
    const rightHand = this.getBoneByName("RightHand");
    const leftUpLeg = this.getBoneByName("LeftUpLeg");
    const rightUpLeg = this.getBoneByName("RightUpLeg");

    const tracks = [];
    const addQuaternionTrack = (bone, values) => {
      if (!bone) return;
      tracks.push(new THREE.QuaternionKeyframeTrack(`${bone.name}.quaternion`, values.times, values.data));
    };

    const addVectorTrack = (bone, values) => {
      if (!bone) return;
      tracks.push(new THREE.VectorKeyframeTrack(`${bone.name}.position`, values.times, values.data));
    };

    const makeQuat = (x, y, z) => quatFromEuler(x, y, z);

    if (normalized === "greeting" || normalized === "wave_hello") {
      return null;
    }

    if (normalized === "thinking") {
      const times = [0, 0.3, 0.6, 1.0, 1.4, 1.8, 2.2];
      if (hips) {
        addVectorTrack(hips, {
          times,
          data: vecTrackValues(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0.01, 0),
            new THREE.Vector3(0, -0.01, 0),
            new THREE.Vector3(0, 0.01, 0),
            new THREE.Vector3(0, -0.01, 0),
            new THREE.Vector3(0, 0.005, 0),
            new THREE.Vector3(0, 0, 0)
          )
        });
      }
      addQuaternionTrack(spine, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.1, 0.02, 0.02),
          makeQuat(-0.12, 0.02, 0.05),
          makeQuat(-0.14, 0.04, 0.06),
          makeQuat(-0.12, 0.02, 0.05),
          makeQuat(-0.1, 0.02, 0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(neck, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.12, 0.06, 0.02),
          makeQuat(-0.18, 0.1, 0.04),
          makeQuat(-0.22, 0.12, 0.05),
          makeQuat(-0.18, 0.1, 0.04),
          makeQuat(-0.12, 0.06, 0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(head, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.12, 0.12, 0.02),
          makeQuat(-0.25, 0.18, 0.04),
          makeQuat(-0.28, 0.2, 0.05),
          makeQuat(-0.24, 0.18, 0.04),
          makeQuat(-0.15, 0.12, 0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftShoulder, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.08, 0.02, 0.45),
          makeQuat(-0.16, 0.03, 0.92),
          makeQuat(-0.2, 0.04, 1.15),
          makeQuat(-0.16, 0.03, 0.92),
          makeQuat(-0.1, 0.02, 0.52),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.08, 0.02, 0.25),
          makeQuat(-0.12, 0.02, 0.45),
          makeQuat(-0.14, 0.02, 0.55),
          makeQuat(-0.12, 0.02, 0.45),
          makeQuat(-0.1, 0.02, 0.3),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftForeArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.02, 0.04, 0.7),
          makeQuat(0.04, 0.06, 1.05),
          makeQuat(0.05, 0.08, 1.12),
          makeQuat(0.04, 0.06, 1.05),
          makeQuat(0.02, 0.04, 0.8),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightShoulder, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.06, -0.02, -0.35),
          makeQuat(-0.12, -0.03, -0.72),
          makeQuat(-0.18, -0.04, -1.0),
          makeQuat(-0.12, -0.03, -0.72),
          makeQuat(-0.08, -0.02, -0.4),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.06, -0.02, -0.2),
          makeQuat(-0.12, -0.03, -0.42),
          makeQuat(-0.14, -0.04, -0.52),
          makeQuat(-0.12, -0.03, -0.42),
          makeQuat(-0.08, -0.02, -0.25),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightForeArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.02, -0.04, -0.55),
          makeQuat(0.04, -0.06, -0.92),
          makeQuat(0.05, -0.08, -1.02),
          makeQuat(0.04, -0.06, -0.92),
          makeQuat(0.02, -0.04, -0.62),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftHand, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.05, 0.05, 0.15),
          makeQuat(0.03, 0.04, 0.2),
          makeQuat(0.02, 0.03, 0.18),
          makeQuat(0.03, 0.04, 0.2),
          makeQuat(0.05, 0.05, 0.15),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightHand, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.05, -0.04, -0.15),
          makeQuat(0.03, -0.03, -0.2),
          makeQuat(0.02, -0.02, -0.18),
          makeQuat(0.03, -0.03, -0.2),
          makeQuat(0.05, -0.04, -0.15),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftUpLeg, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.02, 0, 0.02),
          makeQuat(0.04, 0, 0.03),
          makeQuat(0.05, 0, 0.04),
          makeQuat(0.04, 0, 0.03),
          makeQuat(0.02, 0, 0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightUpLeg, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.02, 0, -0.02),
          makeQuat(-0.04, 0, -0.03),
          makeQuat(-0.05, 0, -0.04),
          makeQuat(-0.04, 0, -0.03),
          makeQuat(-0.02, 0, -0.02),
          makeQuat(0, 0, 0)
        )
      });

      const clip = new THREE.AnimationClip("procedural_thinking", 2.2, tracks);
      this.proceduralClipCache.set(normalized, clip);
      return clip;
    }

    if (normalized === "speaking_explain" || normalized === "response" || normalized === "explain") {
      const times = [0, 0.25, 0.55, 0.9, 1.25, 1.6, 1.95, 2.3];
      if (hips) {
        addVectorTrack(hips, {
          times,
          data: vecTrackValues(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0.02, 0),
            new THREE.Vector3(0, 0.01, 0),
            new THREE.Vector3(0, 0.03, 0),
            new THREE.Vector3(0, 0.01, 0),
            new THREE.Vector3(0, 0.025, 0),
            new THREE.Vector3(0, 0.01, 0),
            new THREE.Vector3(0, 0, 0)
          )
        });
      }
      addQuaternionTrack(spine, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.06, 0.02, 0.03),
          makeQuat(-0.03, 0.02, -0.02),
          makeQuat(-0.08, 0.04, 0.04),
          makeQuat(-0.04, 0.03, -0.02),
          makeQuat(-0.07, 0.03, 0.03),
          makeQuat(-0.03, 0.02, -0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(neck, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.08, 0.05, 0.02),
          makeQuat(-0.03, 0.08, 0.01),
          makeQuat(-0.1, 0.1, 0.03),
          makeQuat(-0.04, 0.08, 0.01),
          makeQuat(-0.08, 0.06, 0.02),
          makeQuat(-0.04, 0.04, 0.01),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(head, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.06, -0.04, 0.02),
          makeQuat(0.02, 0.03, -0.03),
          makeQuat(-0.08, -0.06, 0.03),
          makeQuat(0.02, 0.03, -0.03),
          makeQuat(-0.05, -0.03, 0.02),
          makeQuat(0.01, 0.02, -0.02),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(headFront, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.05, -0.03, 0.02),
          makeQuat(0.02, 0.02, -0.02),
          makeQuat(-0.06, -0.04, 0.03),
          makeQuat(0.02, 0.02, -0.02),
          makeQuat(-0.04, -0.03, 0.02),
          makeQuat(0.01, 0.01, -0.01),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftShoulder, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.12, 0.06, -0.45),
          makeQuat(-0.08, 0.05, -0.82),
          makeQuat(-0.15, 0.06, -0.48),
          makeQuat(-0.08, 0.05, -0.82),
          makeQuat(-0.12, 0.05, -0.5),
          makeQuat(-0.1, 0.05, -0.62),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.24, 0.1, -0.9),
          makeQuat(-0.18, 0.08, -1.12),
          makeQuat(-0.26, 0.12, -0.95),
          makeQuat(-0.2, 0.1, -1.1),
          makeQuat(-0.22, 0.1, -0.92),
          makeQuat(-0.2, 0.09, -1.0),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftForeArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.08, 0.02, 0.6),
          makeQuat(-0.04, 0.02, 0.95),
          makeQuat(-0.08, 0.04, 0.65),
          makeQuat(-0.04, 0.02, 0.92),
          makeQuat(-0.06, 0.02, 0.75),
          makeQuat(-0.04, 0.02, 0.88),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(leftHand, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.06, 0.14, 0.18),
          makeQuat(0.03, 0.2, 0.24),
          makeQuat(0.06, 0.16, 0.2),
          makeQuat(0.03, 0.22, 0.26),
          makeQuat(0.05, 0.14, 0.18),
          makeQuat(0.02, 0.18, 0.22),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightShoulder, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.1, -0.05, 0.4),
          makeQuat(-0.14, -0.06, 0.75),
          makeQuat(-0.08, -0.05, 0.45),
          makeQuat(-0.12, -0.05, 0.82),
          makeQuat(-0.1, -0.04, 0.48),
          makeQuat(-0.12, -0.05, 0.7),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(-0.18, -0.08, 0.72),
          makeQuat(-0.22, -0.1, 0.95),
          makeQuat(-0.16, -0.08, 0.78),
          makeQuat(-0.2, -0.1, 1.0),
          makeQuat(-0.17, -0.08, 0.82),
          makeQuat(-0.19, -0.09, 0.92),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightForeArm, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.06, -0.02, -0.5),
          makeQuat(0.08, -0.03, -0.82),
          makeQuat(0.06, -0.02, -0.55),
          makeQuat(0.08, -0.03, -0.88),
          makeQuat(0.06, -0.02, -0.58),
          makeQuat(0.08, -0.03, -0.76),
          makeQuat(0, 0, 0)
        )
      });
      addQuaternionTrack(rightHand, {
        times,
        data: quatTrackValues(
          makeQuat(0, 0, 0),
          makeQuat(0.04, -0.1, -0.18),
          makeQuat(0.02, -0.16, -0.25),
          makeQuat(0.04, -0.12, -0.2),
          makeQuat(0.02, -0.18, -0.28),
          makeQuat(0.04, -0.1, -0.18),
          makeQuat(0.02, -0.14, -0.24),
          makeQuat(0, 0, 0)
        )
      });

      const clip = new THREE.AnimationClip("procedural_explain", 2.3, tracks);
      this.proceduralClipCache.set(normalized, clip);
      return clip;
    }

    return null;
  }

  playProceduralAnimation(kind = "greeting", options = {}) {
    const clip = this.createProceduralClip(kind);
    if (!clip || !this.mixer) return false;

    const key = `procedural:${safeLower(kind)}`;
    if (!this.actions.has(key)) {
      this.actions.set(key, this.mixer.clipAction(clip));
    }

    const action = this.actions.get(key);
    if (!action) return false;

    const loop = options.loop === false ? THREE.LoopOnce : THREE.LoopRepeat;
    const repetitions = options.loop === false ? 1 : Infinity;
    const progress = Number.isFinite(options.progress)
      ? Math.max(0, Math.min(1, Number(options.progress)))
      : 0;

    action.reset();
    action.enabled = true;
    action.setLoop(loop, repetitions);
    action.clampWhenFinished = options.clampWhenFinished ?? (options.loop === false);
    action.timeScale = Number.isFinite(options.timeScale) ? Number(options.timeScale) : 1;
    action.time = clip.duration > 0 ? clip.duration * progress : 0;
    action.paused = Boolean(options.paused);
    action.fadeIn(0.18).play();

    if (this.activeAction && this.activeAction !== action) {
      this.activeAction.fadeOut(0.18);
    }

    this.activeAction = action;
    return true;
  }

  setMorphTarget(targetName, value = 0) {
    for (const mesh of this.morphMeshes) {
      const idx = mesh.morphTargetDictionary[targetName];
      if (idx == null) continue;
      mesh.morphTargetInfluences[idx] = value;
    }
  }

  clearVisemes() {
    const names = [
      "viseme_sil", "viseme_a", "viseme_e", "viseme_i", "viseme_o", "viseme_u",
      "viseme_mbp", "viseme_fv", "viseme_l", "viseme_rr", "viseme_th", "viseme_ch", "viseme_wq"
    ];

    for (const name of names) {
      this.setMorphTarget(name, 0);
    }
  }

  speakFromText(text = "", options = {}) {
    this.stopSpeech();
    const requestedState = safeLower(options.avatarState || options.state || "") || AVATAR_STATES.speaking;
    const stateToUse = AVATAR_STATES[requestedState] ? requestedState : AVATAR_STATES.speaking;
    this.setState(stateToUse, { source: "tts" });

    this.speechText = String(text || "");
    this.speechChars = Array.from(this.speechText);
    this.speechIndex = 0;
    this.speechPaused = false;

    this.startSpeechTimer();
  }

  startSpeechTimer() {
    if (!Array.isArray(this.speechChars) || this.speechIndex >= this.speechChars.length) {
      this.stopSpeech();
      this.setState(AVATAR_STATES.idle, { source: "tts_end" });
      return;
    }

    if (this.speechTimer) {
      clearInterval(this.speechTimer);
    }

    this.speechPaused = false;
    this.speechTimer = window.setInterval(() => {
      if (this.speechIndex >= this.speechChars.length) {
        this.stopSpeech();
        this.setState(AVATAR_STATES.idle, { source: "tts_end" });
        return;
      }

      this.clearVisemes();
      const viseme = visemeFromChar(this.speechChars[this.speechIndex]);
      this.setMorphTarget(viseme, 0.85);
      this.speechIndex += 1;
    }, 70);
  }

  pauseSpeech() {
    if (!this.speechTimer) return false;
    clearInterval(this.speechTimer);
    this.speechTimer = null;
    this.speechPaused = true;
    this.clearVisemes();
    return true;
  }

  resumeSpeech() {
    if (!this.speechPaused) return false;
    this.startSpeechTimer();
    return true;
  }

  stopSpeech() {
    if (this.speechTimer) {
      clearInterval(this.speechTimer);
      this.speechTimer = null;
    }
    this.speechPaused = false;
    this.speechText = "";
    this.speechChars = [];
    this.speechIndex = 0;
    this.clearVisemes();
  }

  setState(state, meta = {}) {
    this.stateController.setState(state, meta);
  }

  onStateChange(state) {
    if (this.playProceduralAnimation(state, { loop: false, timeScale: 1 })) {
      return;
    }

    const stateProfile = this.getStateAnimationProfile(state);
    if (stateProfile && this.playConfiguredAction(stateProfile)) {
      return;
    }

    const animationName = DEFAULT_ANIMATION_BY_STATE[state] || "idle";
    const normalized = safeLower(animationName);

    if (
      this.actions.has(normalized)
      || (normalized === "idle" && this.defaultModelAnimation && this.actions.has(this.defaultModelAnimation))
    ) {
      this.playAnimation(normalized);
      return;
    }

    const byStateHints = this.findAnimationByHints(state);
    if (byStateHints) {
      this.playAnimation(byStateHints);
      return;
    }

    if (state === AVATAR_STATES.speaking_explain) {
      const bySpeakingHints = this.findAnimationByHints(AVATAR_STATES.speaking);
      if (bySpeakingHints) {
        this.playAnimation(bySpeakingHints);
        return;
      }
    }

    const idleByHints = this.findAnimationByHints(AVATAR_STATES.idle);
    if (idleByHints) {
      this.playAnimation(idleByHints);
      return;
    }

    if (this.defaultModelAnimation && this.actions.has(this.defaultModelAnimation)) {
      this.playAnimation(this.defaultModelAnimation);
      return;
    }

    this.playAnimation("idle");
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;

    const w = Math.max(this.container.clientWidth, 1);
    const h = Math.max(this.container.clientHeight, 1);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.horizontalOffset, 0.95 + this.verticalOffset, 0);
    this.renderer.setSize(w, h);
  }

  applyCenterOffset() {
    if (this.model) {
      this.model.position.x = this.baseModelX + this.horizontalOffset;
      this.model.position.y = this.baseModelY + this.verticalOffset;
    }
    if (this.camera) {
      this.camera.lookAt(this.horizontalOffset, 0.95 + this.verticalOffset, 0);
    }
  }

  applyModelScale() {
    if (!this.model) return;
    const scalar = this.baseFitScale * this.userScaleMultiplier;
    this.model.scale.setScalar(Math.max(0.0001, scalar));
  }

  setScaleMultiplier(scale = 1) {
    const n = Number(scale);
    this.userScaleMultiplier = Number.isFinite(n)
      ? Math.max(0.2, Math.min(2.5, n))
      : 1;
    this.applyModelScale();
  }

  setVerticalOffset(offset = 0) {
    const n = Number(offset);
    this.verticalOffset = Number.isFinite(n)
      ? Math.max(-1.5, Math.min(1.5, n))
      : 0;
    this.applyCenterOffset();
  }

  setHorizontalOffset(offset = 0) {
    const n = Number(offset);
    this.horizontalOffset = Number.isFinite(n)
      ? Math.max(-1.5, Math.min(1.5, n))
      : 0;
    this.applyCenterOffset();
  }

  setCenterOffset(offsetX = 0, offsetY = 0) {
    const x = Number(offsetX);
    const y = Number(offsetY);
    this.horizontalOffset = Number.isFinite(x)
      ? Math.max(-1.5, Math.min(1.5, x))
      : 0;
    this.verticalOffset = Number.isFinite(y)
      ? Math.max(-1.5, Math.min(1.5, y))
      : 0;
    this.applyCenterOffset();
  }

  renderLoop() {
    if (!this.renderer || !this.scene || !this.camera) return;

    const tick = () => {
      this.frameId = requestAnimationFrame(tick);
      const dt = this.clock.getDelta();
      if (this.mixer) this.mixer.update(dt);
      this.updateModelRotationSmoothing();
      this.renderer.render(this.scene, this.camera);
    };

    tick();
  }

  updateModelRotationSmoothing() {
    if (!this.model) return;

    this.currentYaw += (this.targetYaw - this.currentYaw) * 0.14;
    this.currentPitch += (this.targetPitch - this.currentPitch) * 0.14;

    this.model.rotation.y = this.baseModelRotation.y + this.currentYaw;
    this.model.rotation.x = this.baseModelRotation.x + this.currentPitch;
  }

  setupPointerInteraction() {
    if (!this.renderer?.domElement) return;

    const canvas = this.renderer.domElement;
    canvas.style.cursor = "grab";

    this.onPointerDown = (event) => {
      if (this.boneEditEnabled) {
        this.pickBoneFromPointerEvent(event);
        return;
      }
      this.isDragging = true;
      this.lastPointerX = event.clientX;
      this.lastPointerY = event.clientY;
      canvas.style.cursor = "grabbing";
    };

    this.onPointerMove = (event) => {
      if (this.boneEditEnabled) return;
      if (!this.isDragging) return;

      const dx = event.clientX - this.lastPointerX;
      const dy = event.clientY - this.lastPointerY;
      this.lastPointerX = event.clientX;
      this.lastPointerY = event.clientY;

      this.targetYaw = Math.max(-this.yawLimit, Math.min(this.yawLimit, this.targetYaw + (dx * this.dragSensitivity)));
      this.targetPitch = Math.max(-this.pitchLimit, Math.min(this.pitchLimit, this.targetPitch + (dy * this.dragSensitivity * 0.6)));
    };

    this.onPointerUp = () => {
      if (this.boneEditEnabled) return;
      this.isDragging = false;
      canvas.style.cursor = "grab";
    };

    this.onWheel = (event) => {
      if (this.boneEditEnabled || !this.camera) return;
      event.preventDefault();

      const delta = Number(event.deltaY) || 0;
      if (!Number.isFinite(delta) || delta === 0) return;

      const nextDistance = this.camera.position.z + (delta * this.zoomSpeed);
      this.camera.position.z = Math.max(this.minCameraDistance, Math.min(this.maxCameraDistance, nextDistance));
    };

    canvas.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    canvas.addEventListener("wheel", this.onWheel, { passive: false });

    canvas.addEventListener("dblclick", () => {
      this.resetView();
    });
  }

  resetView() {
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.currentYaw = 0;
    this.currentPitch = 0;
  }

  autoCenter() {
    this.setCenterOffset(0, 0);
    this.resetView();
  }

  async setModelUrl(modelUrl, options = {}) {
    const nextUrl = String(modelUrl || "").trim();
    const nextDefaultAnimation = safeLower(options.defaultAnimation || options.animation || "");
    if (!nextUrl) return;

    if (nextUrl === this.modelUrl) {
      if (nextDefaultAnimation) {
        this.defaultModelAnimation = nextDefaultAnimation;
        if (this.mixer) {
          this.playAnimation("idle");
        }
      }
      return;
    }

    this.defaultModelAnimation = nextDefaultAnimation;
    this.modelUrl = nextUrl;
    await this.loadModel();
  }
}

export async function initSuriAvatar3D({ containerId = "avatar3dStage", modelUrl, defaultAnimation } = {}) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const avatar = new SuriAvatar3D({ container, modelUrl, defaultAnimation });
  await avatar.init();

  window.__suri3dSetState = (state, meta) => avatar.setState(state, meta);
  window.__suri3dSpeakStart = (text, options = {}) => avatar.speakFromText(text, options);
  window.__suri3dSpeakStop = () => avatar.stopSpeech();
  window.__suri3dSetOffset = (offset) => avatar.setVerticalOffset(offset);
  window.__suri3dSetOffsetX = (offset) => avatar.setHorizontalOffset(offset);
  window.__suri3dSetCenterOffset = (offsetX, offsetY) => avatar.setCenterOffset(offsetX, offsetY);
  window.__suri3dSetScale = (scale) => avatar.setScaleMultiplier(scale);
  window.__suri3dAutoCenter = () => avatar.autoCenter();
  window.__suri3dResetView = () => avatar.resetView();
  window.__suri3dLoadModel = (modelUrl, options = {}) => avatar.setModelUrl(modelUrl, options);
  window.__suri3dListAnimations = () => avatar.getAnimationNames();
  window.__suri3dListAnimationCatalog = () => avatar.getAnimationCatalog();
  window.__suri3dPlayAnimation = (name, options = {}) => avatar.playAnimationAdvanced(name, options);
  window.__suri3dPlayByStateHints = (state, options = {}) => avatar.playAnimationByStateHints(state, options);
  window.__suri3dInspectRig = () => avatar.inspectRig();
  window.__suri3dCreateProceduralClip = (kind = "greeting") => avatar.createProceduralClip(kind);
  window.__suri3dPlayProceduralAnimation = (kind = "greeting", options = {}) => avatar.playProceduralAnimation(kind, options);
  window.__suri3dListRigBoneNames = () => avatar.listRigBoneNames();
  window.__suri3dGetBonePose = (boneName) => avatar.getBonePose(boneName);
  window.__suri3dSetBonePose = (boneName, pose = {}, options = {}) => avatar.setBonePose(boneName, pose, options);
  window.__suri3dResetBonePose = (boneName) => avatar.resetBonePose(boneName);
  window.__suri3dResetAllBones = () => avatar.resetAllBonesToRest();
  window.__suri3dCreateRuntimeClip = (clipName, keyframes = [], options = {}) => avatar.createRuntimeClipFromKeyframes(clipName, keyframes, options);
  window.__suri3dGetRuntimeClipData = (clipNameOrId) => avatar.getRuntimeClipData(clipNameOrId);
  window.__suri3dPlayRuntimeClip = (clipName, options = {}) => avatar.playRuntimeClipByName(clipName, options);
  window.__suri3dCreateAndPlayRuntimeClip = (clipName, keyframes = [], options = {}) => avatar.createAndPlayRuntimeClip(clipName, keyframes, options);
  window.__suri3dSetBoneEditMode = (mode = "rotate") => avatar.setBoneEditMode(mode);
  window.__suri3dSetBoneEditEnabled = (enabled, options = {}) => avatar.setBoneEditEnabled(enabled, options);
  window.__suri3dAttachBoneEditor = (boneName) => avatar.attachBoneEditor(boneName);

  window.addEventListener("suri:speak-start", (event) => {
    avatar.speakFromText(event.detail?.text || "", {
      avatarState: event.detail?.avatarState
    });
  });

  window.addEventListener("suri:speak-pause", () => {
    avatar.pauseSpeech();
  });

  window.addEventListener("suri:speak-resume", () => {
    avatar.resumeSpeech();
  });

  window.addEventListener("suri:speak-stop", () => {
    avatar.stopSpeech();
  });

  window.addEventListener("suri:semantic-result", (event) => {
    avatar.stateController.onSemanticResult(event.detail?.result);
  });

  return avatar;
}
