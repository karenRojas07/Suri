# Avatar 3D Suri - Pipeline e Integracion

## Alcance
Este paquete deja lista la integracion web del avatar 3D y su controlador de estados/lip-sync para chatbot.

## Importante
En este entorno no se puede generar automaticamente un archivo .blend o .glb de alta fidelidad porque requiere Blender y trabajo artistico manual.
Este repositorio incluye:
- especificacion visual y tecnica
- controlador de estados
- lip-sync por visemas
- integracion con busquedasemantica()
- loader WebGL para un .glb final

## Archivos
- src/avatar3d/character-reference-sheet.md
- src/avatar3d/visemas.es.json
- src/avatar3d/stateController.js
- src/avatar3d/suriAvatar3d.js

## Ruta esperada del modelo
- assets/avatar/suri_avatar.glb

## Requisitos minimos del GLB
- Skinning con rig corporal
- Blendshapes para visemas:
  - viseme_sil
  - viseme_a
  - viseme_e
  - viseme_i
  - viseme_o
  - viseme_u
  - viseme_mbp
  - viseme_fv
  - viseme_l
  - viseme_rr
  - viseme_th
  - viseme_ch
  - viseme_wq
- Animaciones incluidas:
  - idle
  - listening
  - thinking
  - speaking
  - speaking_explain
  - suggesting
  - not_found
  - celebrate
  - wave_hello
  - tablet_reading

## Export recomendado desde Blender
- Formato: glTF Binary (.glb)
- Include: Selected Objects
- Transform: +Y up, Apply Modifiers
- Geometry: UVs + Normals + Tangents
- Animation: NLA Strips y Actions
- Shape Keys: habilitado
- Compression: Draco opcional (nivel moderado)

## Presupuesto de optimizacion web (objetivo)
- Triangulos: 18k a 35k
- Draw calls: <= 15
- Texturas: 2K max (albedo/normal/roughness), fallback 1K en moviles
- Tamaño GLB: 3MB a 8MB (ideal)

## Integracion runtime
- initSuriAvatar3D() carga el modelo y expone:
  - window.__suri3dSetState
  - window.__suri3dSpeakStart
  - window.__suri3dSpeakStop
- Eventos escuchados:
  - suri:speak-start
  - suri:speak-stop
  - suri:semantic-result

## Flujo con chatbot
1. Usuario pregunta.
2. busquedasemantica() devuelve tipo.
3. UI emite suri:semantic-result.
4. Avatar cambia estado segun tipo.
5. Al hablar TTS, emitir suri:speak-start y suri:speak-stop para labios.
