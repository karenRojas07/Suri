# Suri 3D Character Reference Sheet

## Analisis visual (imagenes en carpeta diseno)
- Especie/estilo: suricata antropomorfica amigable, estilo cartoon semi-realista.
- Silueta: cabeza grande, torso pequeno/medio, extremidades delgadas y cola larga curva.
- Paleta principal:
  - Pelaje base: marron dorado medio.
  - Pelaje claro: crema en rostro interno, hocico, cuello y pecho.
  - Mascara ocular: marron oscuro alrededor de los ojos.
  - Nariz/unas/dispositivo: tonos oscuros casi negros.
  - Chaleco: azul marino oscuro con variaciones de costura y zipper.
- Rasgos faciales:
  - Ojos grandes con iris oscuros y brillo especular marcado.
  - Nariz ovalada oscura, ancha en puente frontal.
  - Sonrisa amplia, abierta, con dentadura superior visible.
  - Orejas redondeadas pequenas.
- Vestuario/props:
  - Chaleco sin mangas con cierre frontal y bolsillos grandes.
  - Tablet/dispositivo rectangular negro en mano.
- Personalidad visual:
  - Actitud didactica, positiva y tecnologica.
  - Gestos de bienvenida, explicacion y celebracion.

## Proporciones sugeridas para modelado
- Altura total (sin cola): 6.0 unidades.
- Cabeza: 2.1 unidades (35% de altura total).
- Torso: 2.0 unidades.
- Piernas: 1.9 unidades.
- Brazos: 2.2 unidades (hombro a muneca).
- Cola: 2.4 unidades.

## Materiales PBR recomendados
- Pelaje base: BaseColor + Normal + Roughness.
- Rostro claro: variacion suave en BaseColor para hocico y pecho.
- Chaleco: BaseColor azul oscuro, Roughness media, normal para costuras.
- Tablet: BaseColor oscuro, Metalness 0.2, Roughness 0.35.

## Nomenclatura sugerida de objetos
- geo_body, geo_head, geo_eyes, geo_teeth, geo_tongue, geo_tail
- geo_vest, geo_tablet
- rig_root, rig_spine, rig_neck, rig_head
- rig_arm_L, rig_arm_R, rig_leg_L, rig_leg_R, rig_tail

## Animaciones requeridas
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

## Estados runtime requeridos
- idle
- listening
- thinking
- speaking
- suggesting
- not_found
- celebrating
- error
