// Convierte las fotos curadas del Facebook (public/fb-fotos/*.jpg) a los WebP
// que ya espera el código: cards de sectores/proyectos (3:2) y fondo del hero.
// Uso: node scripts/fb-to-webp.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "fotos-origen-fb");

// destino (webp que espera el código) -> origen (jpg descargado de FB)
const CARDS = {
  "public/sectors/industrial.webp": "42-nave-interior-luminosa.jpg",
  "public/sectors/agricola.webp": "75-nave-rural-campo.jpg",
  "public/sectors/residencial.webp": "86-casa-madera-amarilla.jpg",
  "public/sectors/logistica.webp": "56-cubierta-industrial-aerea.jpg",
  "public/projects/nave-logistica-merida.webp": "44-cubierta-roja-metalica.jpg",
  "public/projects/cubierta-agricola-olivenza.webp": "20-cubierta-teja-beige.jpg",
  "public/projects/centro-carnico-don-benito.webp": "27-nave-interior-blanca.jpg",
  "public/projects/pabellon-industrial-almendralejo.webp": "95-cubierta-roja-junta-alzada.jpg",
  "public/projects/almacen-vinicola-merida.webp": "24-camion-grua-entrega.jpg",
  "public/projects/vivienda-evora.webp": "88-casa-madera-frente.jpg",
  "public/projects/granja-caceres.webp": "49-montaje-estructura-aerea.jpg",
  "public/projects/nave-taller-badajoz.webp": "08-cubierta-metalica-gris.jpg",
};

const CARD_W = 1400, CARD_H = 933; // 3:2

async function run() {
  for (const [dest, src] of Object.entries(CARDS)) {
    const out = path.join(ROOT, dest);
    await sharp(path.join(SRC, src))
      .resize(CARD_W, CARD_H, { fit: "cover", position: "attention" })
      .webp({ quality: 80 })
      .toFile(out);
    const m = await sharp(out).metadata();
    console.log(`card  ${dest.padEnd(48)} <- ${src.padEnd(34)} ${m.width}x${m.height}`);
  }

  // Hero: foto del operario (vertical) a WebP. object-cover la recorta en el layout.
  const heroOut = path.join(ROOT, "public", "hero", "operario-cubierta.webp");
  await sharp(path.join(SRC, "116-operario-cubierta-atardecer.jpg"))
    .resize(1200, 1600, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(heroOut);
  const hm = await sharp(heroOut).metadata();
  console.log(`hero  public/hero/operario-cubierta.webp           <- 116-operario...           ${hm.width}x${hm.height}`);
}

run().catch((e) => { console.error(e); process.exit(1); });
