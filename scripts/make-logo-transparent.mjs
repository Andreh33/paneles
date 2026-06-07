/**
 * Convierte logo.jpeg → public/logo.png quitando el fondo blanco.
 * Los píxeles casi-blancos pasan a transparentes (con borde suave),
 * los colores de la marca (azul/naranja) se mantienen.
 */
import sharp from "sharp";

const SRC = "logo.jpeg";
const OUT = "public/logo.png";

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const minC = Math.min(r, g, b);

  // Cuanto más claro (cerca del blanco) el píxel, más transparente.
  if (minC >= 232) {
    data[i + 3] = 0; // totalmente transparente
  } else if (minC >= 200) {
    // borde suave entre 200 y 232
    data[i + 3] = Math.round(((232 - minC) / 32) * 255);
  }
}

await sharp(data, { raw: { width, height, channels } })
  .trim() // recorta el espacio transparente sobrante
  .png()
  .toFile(OUT);

console.log(`OK → ${OUT} (${width}x${height} origen)`);
