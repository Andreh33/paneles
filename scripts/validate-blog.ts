/**
 * Valida los posts del blog (lib/posts/px-*.ts).
 * Uso: `npx tsx scripts/validate-blog.ts`
 *
 * Comprueba, sobre los lotes nuevos (px-05..px-14):
 *  - cada post > 2.000 palabras de cuerpo (paragraphs + bullets)
 *  - >= 6 secciones y última = "Preguntas frecuentes"
 *  - title/metaDescription/excerpt/keywords con tamaños razonables
 *  - internalLinks presentes y con href que resuelve a una ruta válida
 *  - slugs únicos en TODO el blog (base + px-01..px-14)
 *
 * Los px-*.ts solo usan `import type` (se borra en runtime), así que se pueden
 * importar de forma relativa sin resolver el alias "@/".
 */
import { posts as px01 } from "../lib/posts/px-01";
import { posts as px02 } from "../lib/posts/px-02";
import { posts as px03 } from "../lib/posts/px-03";
import { posts as px04 } from "../lib/posts/px-04";
import { posts as px05 } from "../lib/posts/px-05";
import { posts as px06 } from "../lib/posts/px-06";
import { posts as px07 } from "../lib/posts/px-07";
import { posts as px08 } from "../lib/posts/px-08";
import { posts as px09 } from "../lib/posts/px-09";
import { posts as px10 } from "../lib/posts/px-10";
import { posts as px11 } from "../lib/posts/px-11";
import { posts as px12 } from "../lib/posts/px-12";
import { posts as px13 } from "../lib/posts/px-13";
import { posts as px14 } from "../lib/posts/px-14";
import { posts as px15 } from "../lib/posts/px-15";
import { posts as px16 } from "../lib/posts/px-16";
import { PRODUCTS } from "../lib/products";

const BASE_SLUGS = [
  "que-es-el-panel-sandwich",
  "precio-panel-sandwich-m2",
  "panel-cubierta-vs-fachada",
  "panel-imitacion-teja-fertelha",
  "que-espesor-de-panel-elegir",
  "chapa-perfilada-usos-acabados",
  "agropanel-naves-ganaderas",
  "como-instalar-panel-sandwich-cubierta",
  "panel-sandwich-extremadura-badajoz",
];

const OLD = [...px01, ...px02, ...px03, ...px04];
const NEW = [
  ...px05, ...px06, ...px07, ...px08, ...px09, ...px10,
  ...px11, ...px12, ...px13, ...px14, ...px15, ...px16,
];
const ALL_SLUGS = [...BASE_SLUGS, ...OLD.map((p) => p.slug), ...NEW.map((p) => p.slug)];

const STATIC_ROUTES = new Set([
  "/", "/productos", "/proyectos", "/contacto", "/sobre-nosotros",
  "/panel-sandwich-extremadura", "/panel-sandwich-badajoz", "/panel-sandwich-caceres",
  "/aviso-legal", "/politica-privacidad",
  "/politica-cookies", "/terminos",
]);
const PRODUCT_ROUTES = new Set(PRODUCTS.map((p) => `/productos/${p.slug}`));
const BLOG_ROUTES = new Set(ALL_SLUGS.map((s) => `/sobre-nosotros/${s}`));

function hrefValid(href: string): boolean {
  if (STATIC_ROUTES.has(href)) return true;
  if (PRODUCT_ROUTES.has(href)) return true;
  if (BLOG_ROUTES.has(href)) return true;
  return false;
}

function wordCount(p: (typeof NEW)[number]): number {
  let words = 0;
  for (const s of p.sections) {
    for (const para of s.paragraphs) words += para.trim().split(/\s+/).filter(Boolean).length;
    for (const b of s.bullets ?? []) words += b.trim().split(/\s+/).filter(Boolean).length;
  }
  return words;
}

const errors: string[] = [];
const warnings: string[] = [];

// Slugs únicos en todo el blog
const seen = new Set<string>();
for (const slug of ALL_SLUGS) {
  if (seen.has(slug)) errors.push(`slug duplicado: ${slug}`);
  seen.add(slug);
}

console.log("\n═════════════════ VALIDACIÓN BLOG (lotes nuevos) ═════════════════");
console.log(`Posts totales en el blog: ${ALL_SLUGS.length}  ·  nuevos (px-05..14): ${NEW.length}\n`);

for (const p of NEW) {
  const wc = wordCount(p);
  const flag = wc < 2000 ? "✘" : "✓";
  console.log(`${flag} ${String(wc).padStart(4)}w  ${p.slug}`);

  if (wc < 2000) errors.push(`${p.slug}: ${wc} palabras (< 2.000)`);
  if (p.sections.length < 6) warnings.push(`${p.slug}: solo ${p.sections.length} secciones`);

  const last = p.sections[p.sections.length - 1];
  if (!last || !/preguntas frecuentes/i.test(last.heading))
    warnings.push(`${p.slug}: última sección no es "Preguntas frecuentes"`);

  if (!p.title || p.title.length < 35 || p.title.length > 75)
    warnings.push(`${p.slug}: title ${p.title?.length ?? 0} car.`);
  if (!p.metaDescription || p.metaDescription.length < 120 || p.metaDescription.length > 170)
    warnings.push(`${p.slug}: metaDescription ${p.metaDescription?.length ?? 0} car.`);
  if (!p.keywords || p.keywords.length < 4)
    warnings.push(`${p.slug}: ${p.keywords?.length ?? 0} keywords`);

  if (!p.internalLinks || p.internalLinks.length < 3) {
    errors.push(`${p.slug}: ${p.internalLinks?.length ?? 0} internalLinks (< 3)`);
  } else {
    for (const l of p.internalLinks) {
      if (!hrefValid(l.href)) errors.push(`${p.slug}: href inválido "${l.href}" (${l.label})`);
    }
  }
}

const totalWords = NEW.reduce((a, p) => a + wordCount(p), 0);
console.log(`\nPalabras de cuerpo (nuevas): ${totalWords.toLocaleString("es-ES")}  ·  media ${Math.round(totalWords / NEW.length)}/post`);

if (warnings.length) {
  console.log(`\n⚠  WARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  · ${w}`);
}
if (errors.length) {
  console.log(`\n✘ ERRORES (${errors.length}):`);
  for (const e of errors) console.log(`  · ${e}`);
  process.exit(1);
} else {
  console.log(`\n✓ Blog válido: ${NEW.length} posts nuevos, todos > 2.000 palabras, enlaces correctos.`);
}
