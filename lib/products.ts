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
  | "policarbonato"
  | "accesorio";

/**
 * Acabado de la cara INTERIOR del panel sándwich (intradós).
 * Lo que se ve al mirar desde abajo. Por defecto es lacado liso;
 * opcionalmente puede tener impresión imitación madera.
 */
export interface InteriorFinish {
  slug: string;
  label: string;
  /** Imagen del acabado (muestra de color/textura) */
  swatch: string;
  /** Foto opcional del acabado en obra real */
  realPhoto?: string;
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
  /** Acabados de la cara interior (intradós), p.ej. imitación madera */
  interiorFinishes?: InteriorFinish[];
  /** Galería extra: fotos reales de obra para la ficha del producto */
  realPhotos?: string[];
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
 * Cada color es un producto independiente: se monta con makeFertelhaProduct.
 */
const FERTELHA_COLORS = [
  { slug: "terracota", label: "Terracota" },
  { slug: "chocolate", label: "Chocolate" },
  { slug: "rojo", label: "Rojo" },
  { slug: "gris", label: "Gris" },
  { slug: "granate", label: "Albero envejecido oscuro" },
  { slug: "negro", label: "Albero envejecido claro" },
] as const;

type FertelhaColor = (typeof FERTELHA_COLORS)[number]["slug"];

/**
 * Acabados imitación madera para la cara INTERIOR (intradós) del panel.
 * Pensados para porches, vivienda y zonas donde la cara interior queda vista.
 */
export const INTERIOR_MADERA_FINISHES: InteriorFinish[] = [
  {
    slug: "madera-clara",
    label: "Madera clara",
    swatch: "/products/interior-madera/muestrario-acabados.webp",
    realPhoto: "/products/interior-madera/porche-madera-clara.webp",
  },
  {
    slug: "madera-intermedia",
    label: "Madera intermedia",
    swatch: "/products/interior-madera/muestrario-acabados.webp",
    realPhoto: "/products/interior-madera/porche-madera-intermedia.webp",
  },
  {
    slug: "madera-nvi100",
    label: "Madera NVI 100",
    swatch: "/products/interior-madera/muestrario-acabados.webp",
    realPhoto: "/products/interior-madera/porche-madera-nvi100.webp",
  },
  {
    slug: "madera-pbt",
    label: "Madera PBT",
    swatch: "/products/interior-madera/muestrario-acabados.webp",
  },
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

function makeFertelhaProduct(color: {
  slug: FertelhaColor;
  label: string;
}): Product {
  return {
    slug: `fertelha-${color.slug}`,
    code: `FERTELHA-${color.slug.toUpperCase()}`,
    name: `Panel sándwich Fertelha — ${color.label}`,
    category: "cubierta",
    subtype: "imitacion-teja",
    description: `Panel sándwich imitación teja en color ${color.label.toLowerCase()}. Estética residencial con prestaciones industriales, en 40 y 80 mm.`,
    longDescription: `El panel Fertelha en acabado ${color.label.toLowerCase()} combina la apariencia clásica de cubierta de teja con las ventajas del panel sándwich: aislamiento térmico continuo, ligereza, rapidez de montaje y durabilidad. Disponible en dos espesores (40 y 80 mm) y con corte a medida desde 1,05 m hasta 14 m en múltiplos de 35 cm. Solución óptima para vivienda unifamiliar, naves agrícolas con exigencia estética y rehabilitación de cubiertas.`,
    applications: [
      "Cubierta de vivienda unifamiliar",
      "Naves agrícolas en entornos rurales",
      "Rehabilitación de cubiertas existentes",
      "Edificación residencial con normativa estética",
    ],
    image: `/products/colores/${color.slug}.webp`,
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    cutLengths: [...FERTELHA_CUT_LENGTHS],
    interiorFinishes: INTERIOR_MADERA_FINISHES,
    realPhotos: [
      "/products/real/fertelha-cotas-40-80.webp",
      "/products/real/remates-munditelha-diagrama.webp",
    ],
    specs: [
      { espesorNominal: 40, chapa: "0.3/0.45", peso: 9.94, uWmK: 0.358, uKcal: 0.307522 },
      { espesorNominal: 80, chapa: "0.3/0.45", peso: 11.7, uWmK: 0.27, uKcal: 0.23193 },
    ],
  };
}

function makePanelCubiertaProduct(color: {
  slug: "rojo" | "gris";
  label: string;
  /** Nombre comercial a mostrar (si se omite, se compone con el color) */
  name?: string;
}): Product {
  return {
    slug: `panel-cubierta-${color.slug}`,
    code: `PC-CUBIERTA-${color.slug.toUpperCase()}`,
    name: color.name ?? `Panel sándwich cubierta — ${color.label}`,
    category: "cubierta",
    subtype: "cinco-grecas",
    description: `Panel sándwich de cubierta con 5 grecas en color ${color.label.toLowerCase()}. Espesores 30 y 100 mm, opción Agropanel.`,
    longDescription: `Panel de cubierta de referencia para naves industriales, agrícolas y logísticas en acabado ${color.label.toLowerCase()}. Las 5 grecas optimizan la evacuación de agua y la rigidez estructural. Disponible en dos espesores estándar (30 y 100 mm) y con la opción Agropanel (cara interior con fibra de vidrio 0.6 mm) para ambientes corrosivos. Acabado interior opcional en imitación madera para porches y vivienda.`,
    applications: [
      "Naves industriales y logísticas",
      "Explotaciones agrícolas y ganaderas (variante Agropanel)",
      "Cubiertas comerciales de gran luz",
      "Vivienda y porches (con acabado interior madera)",
    ],
    image: `/products/chapas/chapa-${color.slug}.webp`,
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    isAgropanel: true,
    cutLengths: [...CUBIERTA_CUT_LENGTHS],
    interiorFinishes: INTERIOR_MADERA_FINISHES,
    realPhotos:
      color.slug === "rojo"
        ? [
            "/projects/nave-industrial-cubierta-roja.webp",
            "/projects/cubierta-plana-residencial-rojo.webp",
            "/projects/nave-cubierta-roja-detalle.webp",
          ]
        : [
            "/projects/nave-industrial-cubierta-gris.webp",
            "/projects/paneles-en-obra-izado.webp",
            "/projects/rehabilitacion-cubierta-aluminio.webp",
          ],
    specs: expandSpecs([
      { espesor: 30, pesos: [7.22, 9.07, 10.89], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.53, kcalExplicit: 0.45527 },
      { espesor: 100, pesos: [10.3, 12.15, 13.97], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.25, kcalExplicit: 0.21475 },
    ]),
  };
}

export const PRODUCTS: Product[] = [
  // ============================================================
  // FERTELHA (imitación teja) — 6 colores como 6 productos
  // ============================================================
  ...FERTELHA_COLORS.map(makeFertelhaProduct),

  // ============================================================
  // PANEL SÁNDWICH CUBIERTA (5 grecas) — 2 colores como 2 productos
  // ============================================================
  makePanelCubiertaProduct({ slug: "rojo", label: "Rojo" }),
  makePanelCubiertaProduct({ slug: "gris", label: "Gris", name: "Panel fachada" }),

  // ============================================================
  // PANEL SÁNDWICH FACHADA — NERVADA
  // ============================================================
  {
    slug: "panel-fachada-nervada",
    code: "PF-NERVADA",
    name: "Panel sándwich fachada nervada",
    category: "fachada",
    subtype: "nervada",
    description:
      "Panel sándwich de fachada con superficie nervada. Acabado industrial robusto y rápido de instalar.",
    longDescription:
      "Panel de fachada con perfil nervado, la solución de referencia para naves industriales, almacenes y centros logísticos. El nervado aporta rigidez estructural y dinamismo visual. Disponible en dos espesores estándar: 30 mm para cerramientos ligeros y 100 mm para máxima eficiencia térmica.",
    applications: [
      "Fachadas de naves industriales",
      "Centros logísticos",
      "Almacenes y talleres",
      "Cerramientos industriales en general",
    ],
    image: "/products/fp-pf-nerv-fn-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    realPhotos: [
      "/projects/nave-blanca-construccion.webp",
      "/projects/cerramiento-fachada-blanca.webp",
    ],
    specs: expandSpecs([
      { espesor: 30, pesos: [6.58, 8.3, 9.98], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [9.66, 11.38, 13.06], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // PANEL SÁNDWICH FACHADA — MICROPERFILADA
  // ============================================================
  {
    slug: "panel-fachada-microperfilada",
    code: "PF-MICROPERFILADA",
    name: "Panel sándwich fachada microperfilada",
    category: "fachada",
    subtype: "microperfilada",
    description:
      "Panel sándwich de fachada con superficie microperfilada, prácticamente lisa. Acabado limpio para fachadas con vocación estética.",
    longDescription:
      "Panel de fachada con perfil microperfilado, que ofrece una apariencia casi lisa y un aspecto contemporáneo. Indicado en edificios industriales con presencia urbana, oficinas anexas a naves o reformas con criterio arquitectónico. Disponible en espesores 30 y 100 mm.",
    applications: [
      "Fachadas con presencia urbana",
      "Oficinas y showrooms",
      "Reformas con criterio arquitectónico",
      "Edificación industrial premium",
    ],
    image: "/products/fp-pf-microp-fn-1000.webp",
    widthTotal: 1000,
    widthUseful: 1000,
    unit: "m2",
    realPhotos: [
      "/projects/cerramiento-fachada-blanca.webp",
    ],
    specs: expandSpecs([
      { espesor: 30, pesos: [6.58, 8.3, 9.98], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.54 },
      { espesor: 100, pesos: [9.66, 11.38, 13.06], chapas: ["0.3/0.3", "0.4/0.4", "0.5/0.5"], u: 0.23 },
    ]),
  },

  // ============================================================
  // POLICARBONATO (placas translúcidas)
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
    realPhotos: ["/products/real/remates-munditelha-diagrama.webp"],
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
  { value: "policarbonato", label: "Policarbonato" },
  { value: "accesorio", label: "Remates y accesorios" },
];
