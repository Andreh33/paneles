/**
 * PANELEX — Catálogo de productos (fuente única de verdad)
 *
 * Datos extraídos del catálogo PDF del cliente (§5 del brief).
 * Conversión kcal: W/m²·K × 0.859 = kcal/m²·h·°C (factor del catálogo).
 *
 * Para añadir o modificar un producto: editar este archivo y nada más.
 * El listado, las fichas, el sitemap, el JSON-LD y el carrito se alimentan
 * automáticamente de PRODUCTS.
 */

export type ProductCategory =
  | "cubierta"
  | "fachada"
  | "chapa-perfilada"
  | "policarbonato"
  | "accesorio";

/** Variante de color disponible para un producto (Fertelha, etc.) */
export interface ColorVariant {
  /** Slug interno, ej. "terracota" */
  slug: string;
  /** Etiqueta visible, ej. "Terracota" */
  label: string;
  /** Ruta a la imagen del panel en ese color */
  image: string;
}

export type Unit = "m2" | "ml" | "u";

/**
 * Espesores de chapa. Los paneles sándwich usan formato "ext/int" (mm).
 * Las chapas perfiladas y accesorios usan un solo valor (mm).
 */
export type ChapaThickness =
  | "0.3/0.3"
  | "0.3/0.4"
  | "0.3/0.45"
  | "0.4/0.4"
  | "0.5/0.5"
  | "0.3"
  | "0.4"
  | "0.45"
  | "0.5"
  | "0.6";

export interface SpecRow {
  /** Espesor nominal del panel (mm). Para chapa simple, es el espesor de la chapa. */
  espesorNominal: number;
  chapa: ChapaThickness;
  /** Peso por unidad (kg/m² para panel sándwich; kg/ml para chapa perfilada y accesorios) */
  peso: number;
  /** Transmitancia térmica (W/m²·K). Solo paneles sándwich. */
  uWmK?: number;
  /** Transmitancia en kcal/m²·h·°C (= uWmK × 0.859). Solo paneles sándwich. */
  uKcal?: number;
}

export interface Product {
  slug: string;
  code: string;
  name: string;
  category: ProductCategory;
  /** Identificador interno del subtipo, útil para filtros secundarios */
  subtype?: string;
  /** Descripción corta (1-2 líneas, se usa en cards y meta description) */
  description: string;
  /** Descripción larga para la ficha (§4.3 tab "Descripción") */
  longDescription?: string;
  /** Lista de aplicaciones recomendadas */
  applications?: string[];
  /** Ruta a render 3D / foto principal */
  image: string;
  /** Galería adicional (cota, render alternativo, foto real) */
  gallery?: string[];
  /** Ancho total del panel/chapa (mm) */
  widthTotal: number;
  /** Ancho útil (mm). Para paneles sándwich coincide con widthTotal. */
  widthUseful?: number;
  /** Altura de grecas (mm), solo chapa perfilada / paneles con relieve */
  grecasHeight?: number;
  /** Unidad de venta */
  unit: Unit;
  /** Si tiene variante Agropanel disponible (fibra de vidrio interior para amb. corrosivos) */
  isAgropanel?: boolean;
  /** Para Fertelha y similares: medidas de corte estándar (mm) */
  cutLengths?: number[];
  /** Para accesorios: longitud fija (ml) */
  fixedLength?: { total: number; useful: number };
  /** Variantes de color disponibles (solo Fertelha y similares de teja) */
  colors?: ColorVariant[];
  specs: SpecRow[];
}

// ----------------------------------------------------------------------------
// CONSTANTES
// ----------------------------------------------------------------------------

/** Factor de conversión W/m²·K -> kcal/m²·h·°C (según catálogo Panelex). */
export const KCAL_FACTOR = 0.859;

/** Carga útil aproximada de un camión completo (kg). §6.2 alerta UX. */
export const TRUCK_MAX_PAYLOAD_KG = 24000;

/**
 * Medidas de corte estándar Fertelha (imitación teja).
 * Múltiplos de 350 mm, mínimo 1050 mm, máximo 14000 mm.
 */
export const FERTELHA_CUT_LENGTHS = [
  1050, 1400, 1750, 2100, 2450, 2800, 3150, 3500, 3850, 4200, 4550, 4900, 5250,
  5600, 5950, 6300, 6650, 7000, 7350, 7700, 8050, 8400, 8750, 9100, 9450, 9800,
  10150, 10500, 10850, 11200, 11550, 11900, 12250, 12600, 12950, 13300, 13650,
  14000,
] as const;

/**
 * Medidas de corte estándar para paneles de cubierta no-teja (PC-5, PC-3, TJ).
 * Múltiplos de 350 mm desde 2100 mm hasta 14000 mm.
 */
export const CUBIERTA_CUT_LENGTHS = [
  2100, 2450, 2800, 3150, 3500, 3850, 4200, 4550, 4900, 5250, 5600, 5950, 6300,
  6650, 7000, 7350, 7700, 8050, 8400, 8750, 9100, 9450, 9800, 10150, 10500,
  10850, 11200, 11550, 11900, 12250, 12600, 12950, 13300, 13650, 14000,
] as const;

/**
 * Colores estándar de la gama imitación teja (Fertelha).
 * Las imágenes están en /public/products/colores/.
 */
export const FERTELHA_COLORS: ColorVariant[] = [
  { slug: "terracota", label: "Terracota", image: "/products/colores/terracota.webp" },
  { slug: "chocolate", label: "Chocolate", image: "/products/colores/chocolate.webp" },
  { slug: "rojo", label: "Rojo", image: "/products/colores/rojo.webp" },
  { slug: "gris", label: "Gris", image: "/products/colores/gris.webp" },
  { slug: "granate", label: "Granate", image: "/products/colores/granate.webp" },
  { slug: "negro", label: "Negro", image: "/products/colores/negro.webp" },
];

// ----------------------------------------------------------------------------
// HELPERS DE CONSTRUCCIÓN (uso interno)
// ----------------------------------------------------------------------------

/** Calcula kcal automáticamente desde W/m²·K. */
const kcal = (u: number): number => Number((u * KCAL_FACTOR).toFixed(5));

/**
 * Expande una matriz [espesor][chapa] -> [peso] en filas SpecRow.
 * Si se pasa `uByEspesor`, asigna U + kcal a cada fila del mismo espesor.
 */
function expandSpecs(
  rows: Array<{
    espesor: number;
    /** Pesos en orden de `chapas` */
    pesos: number[];
    chapas: ChapaThickness[];
    u?: number;
    /** Si el catálogo da kcal explícito (FP-FERTELHA, FP-PC-5-1000, etc.) */
    kcalExplicit?: number;
  }>
): SpecRow[] {
  const out: SpecRow[] = [];
  for (const row of rows) {
    for (let i = 0; i < row.chapas.length; i++) {
      out.push({
        espesorNominal: row.espesor,
        chapa: row.chapas[i]!,
        peso: row.pesos[i]!,
        uWmK: row.u,
        uKcal:
          row.kcalExplicit !== undefined
            ? row.kcalExplicit
            : row.u !== undefined
              ? kcal(row.u)
              : undefined,
      });
    }
  }
  return out;
}

// ----------------------------------------------------------------------------
// CATÁLOGO
// ----------------------------------------------------------------------------

export const PRODUCTS: Product[] = [
  // ============================================================
  // 5.1 — FP FERTELHA (cubierta, imitación teja)
  // ============================================================
  {
    slug: "fp-fertelha",
    code: "FP-FERTELHA",
    name: "Panel sándwich FP Fertelha",
    category: "cubierta",
    subtype: "imitacion-teja",
    description:
      "Panel sándwich para cubierta con acabado imitación teja. Estética residencial con prestaciones industriales.",
    longDescription:
      "El panel FP Fertelha combina la apariencia clásica de cubierta de teja con las ventajas del panel sándwich: aislamiento térmico continuo, ligereza, rapidez de montaje y durabilidad. Disponible en tres espesores y con corte a medida hasta 14 metros, es la solución óptima para vivienda unifamiliar, naves agrícolas con exigencia estética y rehabilitación de cubiertas.",
    applications: [
      "Cubierta de vivienda unifamiliar",
      "Naves agrícolas en entornos rurales",
      "Rehabilitación de cubiertas existentes",
      "Edificación residencial con normativa estética",
    ],
    image: "/products/colores/terracota.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    cutLengths: [...FERTELHA_CUT_LENGTHS],
    colors: FERTELHA_COLORS,
    specs: [
      { espesorNominal: 40, chapa: "0.3/0.45", peso: 9.94, uWmK: 0.358, uKcal: 0.307522 },
      { espesorNominal: 80, chapa: "0.3/0.45", peso: 11.7, uWmK: 0.27, uKcal: 0.23193 },
    ],
  },

  // ============================================================
  // 5.2 — FP-PC-5-1000 (cubierta, 5 grecas)
  // ============================================================
  {
    slug: "fp-pc-5-1000",
    code: "FP-PC-5-1000",
    name: "Panel sándwich FP-PC-5-1000",
    category: "cubierta",
    subtype: "cinco-grecas",
    description:
      "Panel sándwich de cubierta con 5 grecas y ancho útil 1000 mm. Disponible en 9 espesores y variante Agropanel.",
    longDescription:
      "Panel de cubierta de referencia para naves industriales, agrícolas y logísticas. Las 5 grecas optimizan la evacuación de agua y la rigidez estructural. Disponible en 9 espesores nominales (de 20 a 150 mm) y con la opción Agropanel (cara interior con fibra de vidrio 0.6 mm) para ambientes corrosivos como granjas, secaderos o industria química ligera.",
    applications: [
      "Naves industriales y logísticas",
      "Explotaciones agrícolas y ganaderas (variante Agropanel)",
      "Cubiertas comerciales de gran luz",
      "Almacenes de gran superficie",
    ],
    image: "/products/chapas/chapa-rojo.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    isAgropanel: true,
    cutLengths: [...CUBIERTA_CUT_LENGTHS],
    specs: expandSpecs([
      { espesor: 30, pesos: [7.22, 9.07, 10.89], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.53, kcalExplicit: 0.45527 },
      { espesor: 100, pesos: [10.3, 12.15, 13.97], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.25, kcalExplicit: 0.21475 },
    ]),
  },

  // ============================================================
  // 5.3 — FP-PC-TJ-1000 (cubierta tapajuntas)
  // ============================================================
  {
    slug: "fp-pc-tj-1000",
    code: "FP-PC-TJ-1000",
    name: "Panel sándwich FP-PC-TJ-1000",
    category: "cubierta",
    subtype: "tapajuntas",
    description:
      "Panel sándwich de cubierta con sistema tapajuntas. Solución técnica para cubiertas con requisitos de estanqueidad reforzada.",
    longDescription:
      "Panel de cubierta con perfil tapajuntas que oculta la fijación y refuerza la estanqueidad de las uniones. Indicado en cubiertas con baja pendiente, zonas de pluviometría alta o cuando la estética del intradós es importante. Disponible en 4 espesores y con opción Agropanel.",
    applications: [
      "Cubiertas con baja pendiente",
      "Zonas de alta pluviometría",
      "Edificación industrial con exigencia estética",
      "Naves agrícolas (variante Agropanel)",
    ],
    image: "/products/chapas/chapa-gris.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    isAgropanel: true,
    cutLengths: [...CUBIERTA_CUT_LENGTHS],
    specs: expandSpecs([
      { espesor: 30, pesos: [7.47, 9.39, 11.28], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.51, kcalExplicit: 0.43809 },
      { espesor: 100, pesos: [10.55, 12.47, 14.36], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.25, kcalExplicit: 0.21475 },
    ]),
  },

  // ============================================================
  // 5.4 — FP-PC-3-1000 (cubierta 3 grecas)
  // ============================================================
  {
    slug: "fp-pc-3-1000",
    code: "FP-PC-3-1000",
    name: "Panel sándwich FP-PC-3-1000",
    category: "cubierta",
    subtype: "tres-grecas",
    description:
      "Panel sándwich de cubierta con 3 grecas. Geometría más esbelta para cubiertas con cargas moderadas. Disponible en 9 espesores.",
    longDescription:
      "Variante de 3 grecas del panel de cubierta estándar de Panelex. Misma fiabilidad estructural y térmica que el FP-PC-5-1000, pero con un perfil más esbelto que reduce sobras de corte en cubiertas con anchos no estándar. Disponible en 9 espesores y con variante Agropanel.",
    applications: [
      "Cubiertas de naves de luz pequeña-media",
      "Anejos agrícolas y ganaderos",
      "Construcciones auxiliares industriales",
    ],
    image: "/products/fp-pc-3-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    isAgropanel: true,
    cutLengths: [...CUBIERTA_CUT_LENGTHS],
    specs: expandSpecs([
      { espesor: 30, pesos: [6.86, 8.63, 10.38], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.53 },
      { espesor: 100, pesos: [9.94, 11.71, 13.46], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.25 },
    ]),
  },

  // ============================================================
  // 5.5 — FP-PF-NERV-FN-1000 (fachada nervado, fijación vista)
  // ============================================================
  {
    slug: "fp-pf-nerv-fn-1000",
    code: "FP-PF-NERV-FN-1000",
    name: "Panel sándwich FP-PF-NERV-FN-1000",
    category: "fachada",
    subtype: "nervado-fijacion-vista",
    description:
      "Panel sándwich de fachada nervado con fijación vista. Acabado industrial clásico de gran resistencia mecánica.",
    longDescription:
      "Panel de fachada con superficie nervada y fijación vista, solución de referencia para fachadas industriales y logísticas. El nervado aporta rigidez y dinamismo visual sin perder la estética sobria propia de la nave industrial. Disponible en 5 espesores.",
    applications: [
      "Fachadas de naves industriales",
      "Centros logísticos",
      "Edificación industrial estándar",
    ],
    image: "/products/fp-pf-nerv-fn-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    specs: expandSpecs([
      { espesor: 30, pesos: [6.58, 8.3, 9.98], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [9.66, 11.38, 13.06], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // 5.6 — FP-PF-MICROP-FN-1000 (fachada microperforado, fij. vista)
  // ============================================================
  {
    slug: "fp-pf-microp-fn-1000",
    code: "FP-PF-MICROP-FN-1000",
    name: "Panel sándwich FP-PF-MICROP-FN-1000",
    category: "fachada",
    subtype: "microperforado-fijacion-vista",
    description:
      "Panel sándwich de fachada microperforado con fijación vista. Acabado liso de líneas limpias para edificios con vocación estética.",
    longDescription:
      "Panel de fachada con perfil microperforado que ofrece un acabado más liso y contemporáneo que el nervado clásico. Indicado para edificios industriales con presencia urbana, oficinas anexas a naves o reformas con criterio arquitectónico.",
    applications: [
      "Fachadas de naves con presencia urbana",
      "Edificación industrial con criterio arquitectónico",
      "Oficinas y showrooms",
    ],
    image: "/products/fp-pf-microp-fn-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    specs: expandSpecs([
      { espesor: 30, pesos: [6.58, 8.3, 9.98], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [9.66, 11.38, 13.06], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // 5.7 — FP-PF-NEVER-FO-1000 (fachada nervado, fijación oculta)
  // ============================================================
  {
    slug: "fp-pf-never-fo-1000",
    code: "FP-PF-NEVER-FO-1000",
    name: "Panel sándwich FP-PF-NEVER-FO-1000",
    category: "fachada",
    subtype: "nervado-fijacion-oculta",
    description:
      "Panel sándwich de fachada nervado con fijación oculta. Acabado limpio sin tornillería visible.",
    longDescription:
      "Variante con fijación oculta del panel nervado de fachada. La tornillería queda embebida en la junta, ofreciendo un acabado más limpio y estanco. Solución indicada en fachadas singulares y edificios industriales con alta visibilidad.",
    applications: [
      "Fachadas singulares",
      "Edificación industrial con alta visibilidad",
      "Reformas con criterio arquitectónico",
    ],
    image: "/products/fp-pf-never-fo-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    specs: expandSpecs([
      { espesor: 30, pesos: [7.58, 8.44, 10.16], chapas: ["0.3/0.4", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [10.66, 11.52, 13.24], chapas: ["0.3/0.4", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // 5.8 — FP-PF-MICROP-FO-1000 (fachada microperfilado, fij. oculta)
  // ============================================================
  {
    slug: "fp-pf-microp-fo-1000",
    code: "FP-PF-MICROP-FO-1000",
    name: "Panel sándwich FP-PF-MICROP-FO-1000",
    category: "fachada",
    subtype: "microperfilado-fijacion-oculta",
    description:
      "Panel sándwich de fachada microperfilado con fijación oculta. La opción más limpia y contemporánea del catálogo de fachadas.",
    longDescription:
      "Combina las dos características más demandadas en fachada arquitectónica contemporánea: acabado microperfilado (apariencia casi lisa) y fijación oculta. Es la solución estética de gama alta dentro del catálogo de Panelex.",
    applications: [
      "Fachadas arquitectónicas contemporáneas",
      "Edificación industrial premium",
      "Showrooms y oficinas con fachada visible",
    ],
    image: "/products/fp-pf-microp-fo-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    specs: expandSpecs([
      { espesor: 30, pesos: [7.58, 8.44, 10.16], chapas: ["0.3/0.4", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [10.66, 11.52, 13.24], chapas: ["0.3/0.4", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // 5.9 — FA-P273 (chapa perfilada trapezoidal)
  // ============================================================
  {
    slug: "fa-p273",
    code: "FA-P273",
    name: "Chapa perfilada FA-P273",
    category: "chapa-perfilada",
    subtype: "trapezoidal",
    description:
      "Chapa perfilada trapezoidal de 30 mm de altura. Solución económica para cubiertas y forrados sin aislamiento.",
    longDescription:
      "Chapa perfilada de geometría trapezoidal con 30 mm de altura de greca y 1092 mm de ancho útil. Indicada para cubiertas de naves auxiliares, almacenes, vallados, cerramientos provisionales y forrados sin requisito térmico. También válida como cubierta exterior en sistemas de cubierta con aislamiento independiente.",
    applications: [
      "Cubiertas de almacenes y naves auxiliares",
      "Vallados industriales",
      "Forrados sin aislamiento",
      "Cubiertas con aislamiento independiente",
    ],
    image: "/products/fa-p273.webp",
    widthTotal: 1134,
    widthUseful: 1092,
    grecasHeight: 30,
    unit: "ml",
    specs: [
      { espesorNominal: 0.4, chapa: "0.4", peso: 3.95 },
      { espesorNominal: 0.5, chapa: "0.5", peso: 4.95 },
      { espesorNominal: 0.6, chapa: "0.6", peso: 5.93 },
    ],
  },

  // ============================================================
  // 5.10 — FA-FT200 (chapa imitación teja)
  // ============================================================
  {
    slug: "fa-ft200",
    code: "FA-FT200",
    name: "Chapa perfilada FA-FT200",
    category: "chapa-perfilada",
    subtype: "imitacion-teja",
    description:
      "Chapa perfilada imitación teja. Estética residencial sin aislamiento, ideal para rehabilitación y cubiertas auxiliares.",
    longDescription:
      "Chapa con perfil de imitación teja para cubiertas que requieren estética residencial pero sin necesidad de aislamiento térmico continuo. Habitual en porches, garajes, almacenes rurales y rehabilitación de cubiertas existentes.",
    applications: [
      "Porches y pérgolas",
      "Garajes y trasteros",
      "Almacenes rurales y agrícolas",
      "Rehabilitación de cubiertas",
    ],
    image: "/products/fa-ft200.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "ml",
    specs: [
      { espesorNominal: 0.45, chapa: "0.45", peso: 4.44 },
      { espesorNominal: 0.6, chapa: "0.6", peso: 5.93 },
    ],
  },

  // ============================================================
  // 5.11 — FA-C76 (chapa ondulada)
  // ============================================================
  {
    slug: "fa-c76",
    code: "FA-C76",
    name: "Chapa perfilada FA-C76",
    category: "chapa-perfilada",
    subtype: "ondulada",
    description:
      "Chapa ondulada clásica de 19 mm de altura. Solución tradicional para cubiertas y forrados auxiliares.",
    longDescription:
      "Perfil de onda continua clásico, con 19 mm de altura y 1065 mm de ancho útil. Por su sencillez geométrica es la opción más fácil de manipular y montar en obras pequeñas y rehabilitaciones.",
    applications: [
      "Cubiertas auxiliares y de obra",
      "Almacenes agrícolas pequeños",
      "Forrados decorativos",
      "Rehabilitación rural",
    ],
    image: "/products/fa-c76.webp",
    widthTotal: 1115,
    widthUseful: 1065,
    grecasHeight: 19,
    unit: "ml",
    specs: [
      { espesorNominal: 0.4, chapa: "0.4", peso: 3.95 },
      { espesorNominal: 0.5, chapa: "0.5", peso: 4.95 },
      { espesorNominal: 0.6, chapa: "0.6", peso: 5.93 },
    ],
  },

  // ============================================================
  // 5.12 — FA-A32 (chapa perfilada A32)
  // ============================================================
  {
    slug: "fa-a32",
    code: "FA-A32",
    name: "Chapa perfilada FA-A32",
    category: "chapa-perfilada",
    subtype: "trapezoidal",
    description:
      "Chapa trapezoidal de 32 mm de altura. Equilibrio entre rigidez y ancho útil para cubiertas industriales de exigencia media.",
    longDescription:
      "Perfil trapezoidal de 32 mm que aporta una rigidez intermedia, adecuado para cubiertas de naves industriales y agrícolas con luces medias. Ancho útil 1000 mm, óptimo para planificación modular de obra.",
    applications: [
      "Cubiertas de naves industriales y agrícolas",
      "Cubiertas con luces intermedias",
      "Forrados estructurales",
    ],
    image: "/products/fa-a32.webp",
    widthTotal: 1077,
    widthUseful: 1000,
    grecasHeight: 32,
    unit: "ml",
    specs: [
      { espesorNominal: 0.4, chapa: "0.4", peso: 3.95 },
      { espesorNominal: 0.5, chapa: "0.5", peso: 4.95 },
      { espesorNominal: 0.6, chapa: "0.6", peso: 5.93 },
    ],
  },

  // ============================================================
  // 5.13 — FA-R45
  // ============================================================
  {
    slug: "fa-r45",
    code: "FA-R45",
    name: "Chapa perfilada FA-R45",
    category: "chapa-perfilada",
    subtype: "trapezoidal",
    description:
      "Chapa trapezoidal compacta de 14 mm de altura. Perfil ligero para forrados, vallados y cubiertas auxiliares.",
    longDescription:
      "Perfil compacto de 14 mm pensado para aplicaciones donde el espacio y el peso son prioritarios sobre la rigidez. Habitual en vallados, cerramientos estéticos y forrados secundarios.",
    applications: [
      "Vallados y cerramientos",
      "Forrados secundarios",
      "Cubiertas auxiliares ligeras",
    ],
    image: "/products/fa-r45.webp",
    widthTotal: 966,
    widthUseful: 900,
    grecasHeight: 14,
    unit: "ml",
    specs: [
      { espesorNominal: 0.4, chapa: "0.4", peso: 3.95 },
      { espesorNominal: 0.5, chapa: "0.5", peso: 4.95 },
      { espesorNominal: 0.6, chapa: "0.6", peso: 5.93 },
    ],
  },

  // ============================================================
  // 5.13b — POLICARBONATO (placas translúcidas)
  // ============================================================
  {
    slug: "policarbonato-celular",
    code: "PC-CELULAR",
    name: "Placa de policarbonato celular",
    category: "policarbonato",
    subtype: "celular",
    description:
      "Placa de policarbonato celular translúcido para cubiertas que requieren paso de luz natural. Disponible en varios espesores.",
    longDescription:
      "El policarbonato celular es la solución más utilizada cuando se necesita iluminación natural sin renunciar a aislamiento térmico ligero. Se monta combinado con paneles sándwich o con chapa perfilada para crear zonas de luz natural en naves, almacenes, invernaderos, porches y pérgolas. Resistente a impactos, con protección UV en la cara exterior.",
    applications: [
      "Lucernarios en cubiertas de nave",
      "Cubiertas de porches y pérgolas",
      "Invernaderos y secaderos",
      "Cerramientos translúcidos",
    ],
    image: "/products/policarbonato-celular.webp",
    widthTotal: 2100,
    widthUseful: 2100,
    unit: "m2",
    specs: [
      { espesorNominal: 6, chapa: "0.3", peso: 1.3 },
      { espesorNominal: 10, chapa: "0.4", peso: 1.7 },
      { espesorNominal: 16, chapa: "0.4", peso: 2.7 },
    ],
  },
  {
    slug: "policarbonato-compacto",
    code: "PC-COMPACTO",
    name: "Placa de policarbonato compacto",
    category: "policarbonato",
    subtype: "compacto",
    description:
      "Policarbonato compacto translúcido de alta resistencia al impacto. Indicado para marquesinas, claraboyas y cerramientos vidriados.",
    longDescription:
      "El policarbonato compacto es prácticamente irrompible y deja pasar la luz como el vidrio, pero con una fracción del peso. Habitual en marquesinas, claraboyas, cerramientos vandálicos y separadores translúcidos.",
    applications: [
      "Marquesinas y claraboyas",
      "Cerramientos antivandálicos",
      "Separadores translúcidos",
      "Cubiertas de paso de luz",
    ],
    image: "/products/policarbonato-compacto.webp",
    widthTotal: 2050,
    widthUseful: 2050,
    unit: "m2",
    specs: [
      { espesorNominal: 3, chapa: "0.3", peso: 3.6 },
      { espesorNominal: 4, chapa: "0.4", peso: 4.8 },
      { espesorNominal: 5, chapa: "0.5", peso: 6.0 },
    ],
  },

  // ============================================================
  // 5.14 — Accesorios Fertelha (3 SKUs)
  // ============================================================
  {
    slug: "acc-cumbrera-fertelha",
    code: "ACC-CUMBRERA-FERTELHA",
    name: "Cumbrera recortada Fertelha",
    category: "accesorio",
    subtype: "cumbrera",
    description:
      "Cumbrera recortada compatible con panel FP Fertelha. Chapa 0.45 mm, longitud útil 3 m.",
    image: "/products/acc-cumbrera-fertelha.webp",
    widthTotal: 0,
    unit: "ml",
    fixedLength: { total: 3.2, useful: 3.0 },
    specs: [{ espesorNominal: 0.45, chapa: "0.45", peso: 0 }],
  },
  {
    slug: "acc-remate-inferior-fertelha",
    code: "ACC-REMATE-INFERIOR-FERTELHA",
    name: "Remate inferior Fertelha",
    category: "accesorio",
    subtype: "remate-inferior",
    description:
      "Remate inferior para cierre de cubierta FP Fertelha. Chapa 0.45 mm, longitud útil 3 m.",
    image: "/products/acc-remate-inferior-fertelha.webp",
    widthTotal: 0,
    unit: "ml",
    fixedLength: { total: 3.2, useful: 3.0 },
    specs: [{ espesorNominal: 0.45, chapa: "0.45", peso: 0 }],
  },
  {
    slug: "acc-remate-superior-fertelha",
    code: "ACC-REMATE-SUPERIOR-FERTELHA",
    name: "Remate superior Fertelha",
    category: "accesorio",
    subtype: "remate-superior",
    description:
      "Remate superior para cierre de cubierta FP Fertelha. Chapa 0.45 mm, longitud útil 3 m.",
    image: "/products/acc-remate-superior-fertelha.webp",
    widthTotal: 0,
    unit: "ml",
    fixedLength: { total: 3.2, useful: 3.0 },
    specs: [{ espesorNominal: 0.45, chapa: "0.45", peso: 0 }],
  },
];

// ----------------------------------------------------------------------------
// HELPERS PÚBLICOS
// ----------------------------------------------------------------------------

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getAvailableEspesores(product: Product): number[] {
  const set = new Set(product.specs.map((s) => s.espesorNominal));
  return [...set].sort((a, b) => a - b);
}

export function getAvailableChapas(
  product: Product,
  espesor: number
): ChapaThickness[] {
  return product.specs
    .filter((s) => s.espesorNominal === espesor)
    .map((s) => s.chapa);
}

export function findSpec(
  product: Product,
  espesor: number,
  chapa: ChapaThickness
): SpecRow | undefined {
  return product.specs.find(
    (s) => s.espesorNominal === espesor && s.chapa === chapa
  );
}

/**
 * Peso total estimado (kg) para una configuración + cantidad.
 * - Para `m2` y `ml`: peso = peso unitario × cantidad
 * - Para `u` (accesorios): peso 0 (sin dato, lo confirma Ramón por WhatsApp)
 */
export function calculateWeight(spec: SpecRow, cantidad: number): number {
  return Number((spec.peso * cantidad).toFixed(2));
}

export const ALL_CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "cubierta", label: "Paneles sándwich cubierta" },
  { value: "fachada", label: "Paneles sándwich fachada" },
  { value: "chapa-perfilada", label: "Chapa perfilada" },
  { value: "policarbonato", label: "Policarbonato" },
  { value: "accesorio", label: "Remates y accesorios" },
];
