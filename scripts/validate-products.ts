/**
 * Valida la integridad de lib/products.ts.
 * Uso: `npx tsx scripts/validate-products.ts`
 *
 * Comprueba:
 *  - slugs únicos y no vacíos
 *  - códigos no vacíos
 *  - cada producto tiene specs > 0
 *  - no hay (espesor, chapa) duplicado dentro del mismo producto
 *  - widthTotal > 0 (excepto accesorios con fixedLength)
 *  - paneles sándwich tienen U > 0 en todas las specs
 *  - kcal cuadra con U × 0.859 dentro de tolerancia ±0.001
 *  - cutLengths (si existe) está ordenado ascendente
 *  - image path empieza por /products/
 */
import { PRODUCTS, KCAL_FACTOR } from "../lib/products";

const errors: string[] = [];
const warnings: string[] = [];

function check(cond: boolean, msg: string, level: "error" | "warn" = "error") {
  if (!cond) (level === "error" ? errors : warnings).push(msg);
}

// Slugs únicos
const slugs = new Set<string>();
for (const p of PRODUCTS) {
  check(p.slug.trim().length > 0, `slug vacío en ${p.code}`);
  check(!slugs.has(p.slug), `slug duplicado: ${p.slug}`);
  slugs.add(p.slug);

  check(p.code.trim().length > 0, `código vacío en ${p.slug}`);
  check(p.name.trim().length > 0, `name vacío en ${p.slug}`);
  check(p.description.trim().length > 0, `description vacía en ${p.slug}`);
  check(p.specs.length > 0, `${p.slug}: sin specs`);
  check(
    p.image.startsWith("/products/"),
    `${p.slug}: image path debe empezar por /products/ (actual: ${p.image})`
  );

  // widthTotal > 0 salvo accesorios con fixedLength
  if (p.category !== "accesorio") {
    check(p.widthTotal > 0, `${p.slug}: widthTotal debe ser > 0`);
  } else {
    check(
      !!p.fixedLength && p.fixedLength.total > 0,
      `${p.slug}: accesorio sin fixedLength.total`
    );
  }

  // specs sin duplicados (espesor, chapa)
  const seen = new Set<string>();
  for (const s of p.specs) {
    const key = `${s.espesorNominal}|${s.chapa}`;
    check(
      !seen.has(key),
      `${p.slug}: spec duplicada (espesor ${s.espesorNominal}, chapa ${s.chapa})`
    );
    seen.add(key);

    check(s.peso >= 0, `${p.slug}: peso negativo en ${key}`);

    // Sándwich (cubierta/fachada) → U y kcal obligatorios
    if (p.category === "cubierta" || p.category === "fachada") {
      check(
        typeof s.uWmK === "number" && s.uWmK > 0,
        `${p.slug}: spec ${key} sin U (panel sándwich)`
      );
      check(
        typeof s.uKcal === "number" && s.uKcal > 0,
        `${p.slug}: spec ${key} sin uKcal (panel sándwich)`
      );
      if (typeof s.uWmK === "number" && typeof s.uKcal === "number") {
        const expected = s.uWmK * KCAL_FACTOR;
        const diff = Math.abs(s.uKcal - expected);
        check(
          diff < 0.001,
          `${p.slug}: ${key} kcal (${s.uKcal}) no cuadra con U×0.859=${expected.toFixed(5)} (Δ=${diff.toFixed(4)})`,
          "warn"
        );
      }
    }
  }

  // Cut lengths ordenados
  if (p.cutLengths) {
    for (let i = 1; i < p.cutLengths.length; i++) {
      check(
        p.cutLengths[i]! > p.cutLengths[i - 1]!,
        `${p.slug}: cutLengths no ordenados ascendente en índice ${i}`
      );
    }
  }
}

// Stats
const byCat = new Map<string, number>();
for (const p of PRODUCTS) byCat.set(p.category, (byCat.get(p.category) ?? 0) + 1);

console.log("\n══════════════════ VALIDACIÓN PRODUCTS ═══════════════════════");
console.log(`Productos: ${PRODUCTS.length}`);
for (const [k, v] of byCat) console.log(`  ${k.padEnd(18)} ${v}`);
console.log(`Specs totales: ${PRODUCTS.reduce((acc, p) => acc + p.specs.length, 0)}`);

if (warnings.length) {
  console.log(`\n⚠  WARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  · ${w}`);
}

if (errors.length) {
  console.log(`\n✘ ERRORES (${errors.length}):`);
  for (const e of errors) console.log(`  · ${e}`);
  process.exit(1);
} else {
  console.log("\n✓ Catálogo válido.");
}
