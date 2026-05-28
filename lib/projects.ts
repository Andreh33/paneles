/**
 * Listado de proyectos representativos.
 *
 * Las fotografías son obras reales del cliente (Panelex).
 * Los nombres y ubicaciones son aproximados y pueden ajustarse cuando
 * dispongamos del listado definitivo de obras.
 */
export type ProjectSector =
  | "industrial"
  | "agricola"
  | "residencial"
  | "logistica";

export interface Project {
  id: string;
  name: string;
  location: string;
  squareMeters: number;
  sector: ProjectSector;
  year: number;
  productSlugs: string[];
  /** Fotografía de la obra. */
  image: string;
  /** Fallback de color (degradado) por si la imagen no carga */
  gradient: string;
}

export const PROJECT_SECTORS: { value: ProjectSector; label: string }[] = [
  { value: "industrial", label: "Industrial" },
  { value: "agricola", label: "Agrícola" },
  { value: "residencial", label: "Residencial" },
  { value: "logistica", label: "Logística" },
];

export const PROJECTS: Project[] = [
  // --- Industrial / Logística ---
  {
    id: "p1",
    name: "Cubierta industrial roja",
    location: "Extremadura",
    squareMeters: 8200,
    sector: "industrial",
    year: 2024,
    productSlugs: ["panel-cubierta-rojo"],
    image: "/projects/nave-industrial-cubierta-roja.webp",
    gradient: "from-[#7a1e1e] to-[#3a0d0d]",
  },
  {
    id: "p2",
    name: "Nave industrial cubierta gris",
    location: "Badajoz",
    squareMeters: 6800,
    sector: "industrial",
    year: 2024,
    productSlugs: ["panel-cubierta-gris", "panel-fachada-nervada"],
    image: "/projects/nave-industrial-cubierta-gris.webp",
    gradient: "from-[#3f4750] to-[#1a1f24]",
  },
  {
    id: "p3",
    name: "Nave en construcción cerramiento blanco",
    location: "Cáceres",
    squareMeters: 4200,
    sector: "industrial",
    year: 2024,
    productSlugs: ["panel-fachada-nervada", "panel-fachada-microperfilada"],
    image: "/projects/nave-blanca-construccion.webp",
    gradient: "from-[#5b6770] to-[#262d33]",
  },
  {
    id: "p4",
    name: "Cubierta nave perfilada — detalle",
    location: "Extremadura",
    squareMeters: 1900,
    sector: "industrial",
    year: 2023,
    productSlugs: ["panel-cubierta-rojo"],
    image: "/projects/nave-cubierta-roja-detalle.webp",
    gradient: "from-[#7d1f1f] to-[#3a0d0d]",
  },
  {
    id: "p5",
    name: "Rehabilitación cubierta aluminio",
    location: "Ávila",
    squareMeters: 540,
    sector: "industrial",
    year: 2023,
    productSlugs: ["panel-cubierta-gris"],
    image: "/projects/rehabilitacion-cubierta-aluminio.webp",
    gradient: "from-[#7f8fa0] to-[#2c333d]",
  },
  {
    id: "p6",
    name: "Reforma de cubierta con aislante",
    location: "Sierra de Gata",
    squareMeters: 320,
    sector: "industrial",
    year: 2024,
    productSlugs: ["panel-cubierta-rojo"],
    image: "/projects/cubierta-reforma-isover.webp",
    gradient: "from-[#5a3f25] to-[#1f1409]",
  },
  {
    id: "p7",
    name: "Izado de paneles en obra",
    location: "Badajoz",
    squareMeters: 2100,
    sector: "logistica",
    year: 2024,
    productSlugs: ["panel-cubierta-gris"],
    image: "/projects/paneles-en-obra-izado.webp",
    gradient: "from-[#3b4b5e] to-[#0f161d]",
  },

  // --- Residencial / Imitación teja ---
  {
    id: "p8",
    name: "Vivienda — cubierta teja granate",
    location: "Badajoz",
    squareMeters: 240,
    sector: "residencial",
    year: 2024,
    productSlugs: ["fertelha-granate", "acc-cumbrera-fertelha"],
    image: "/projects/vivienda-cubierta-teja-granate.webp",
    gradient: "from-[#7c2a2a] to-[#36100f]",
  },
  {
    id: "p9",
    name: "Vivienda — cubierta teja rosa",
    location: "Olivenza, Badajoz",
    squareMeters: 195,
    sector: "residencial",
    year: 2023,
    productSlugs: ["fertelha-rojo"],
    image: "/projects/vivienda-cubierta-teja-rosa.webp",
    gradient: "from-[#b75d5d] to-[#5f2424]",
  },
  {
    id: "p10",
    name: "Garaje con cubierta teja terracota",
    location: "Évora, Portugal",
    squareMeters: 90,
    sector: "residencial",
    year: 2024,
    productSlugs: ["fertelha-terracota", "acc-cumbrera-fertelha"],
    image: "/projects/vivienda-garaje-teja-terracota.webp",
    gradient: "from-[#c25a2c] to-[#5a1f0a]",
  },
  {
    id: "p11",
    name: "Vivienda — cubierta teja arena",
    location: "Cáceres",
    squareMeters: 175,
    sector: "residencial",
    year: 2023,
    productSlugs: ["fertelha-chocolate"],
    image: "/projects/vivienda-teja-tono-arena.webp",
    gradient: "from-[#c19a59] to-[#5a4118]",
  },
  {
    id: "p12",
    name: "Instalación cubierta teja roja",
    location: "Cáceres",
    squareMeters: 145,
    sector: "residencial",
    year: 2024,
    productSlugs: ["fertelha-rojo", "acc-remate-superior-fertelha"],
    image: "/projects/instalacion-teja-rojo.webp",
    gradient: "from-[#b54232] to-[#5a1a10]",
  },
  {
    id: "p13",
    name: "Rehabilitación cubierta — teja gris",
    location: "Mérida, Badajoz",
    squareMeters: 210,
    sector: "residencial",
    year: 2023,
    productSlugs: ["fertelha-gris"],
    image: "/projects/rehabilitacion-cubierta-teja-gris.webp",
    gradient: "from-[#6a7480] to-[#23292f]",
  },
  {
    id: "p14",
    name: "Vivienda — cubierta teja negro",
    location: "Sierra Norte, Cáceres",
    squareMeters: 165,
    sector: "residencial",
    year: 2023,
    productSlugs: ["fertelha-negro"],
    image: "/projects/vivienda-teja-negro.webp",
    gradient: "from-[#2a2e30] to-[#0c0d0e]",
  },
  {
    id: "p15",
    name: "Fachada vertical — teja gris",
    location: "Badajoz",
    squareMeters: 80,
    sector: "residencial",
    year: 2024,
    productSlugs: ["fertelha-gris"],
    image: "/projects/fachada-teja-gris.webp",
    gradient: "from-[#6a7480] to-[#1c2024]",
  },
  {
    id: "p16",
    name: "Vivienda residencial cubierta plana roja",
    location: "Badajoz",
    squareMeters: 130,
    sector: "residencial",
    year: 2024,
    productSlugs: ["panel-cubierta-rojo"],
    image: "/projects/cubierta-plana-residencial-rojo.webp",
    gradient: "from-[#c2645a] to-[#5b2a23]",
  },

  // --- Carport / Cerramientos ---
  {
    id: "p17",
    name: "Carport — cubierta acristalada",
    location: "Ávila",
    squareMeters: 60,
    sector: "residencial",
    year: 2024,
    productSlugs: ["policarbonato-celular"],
    image: "/projects/carport-cubierta-acristalada.webp",
    gradient: "from-[#5d6b7c] to-[#1e252e]",
  },
  {
    id: "p18",
    name: "Carport con paneles translúcidos",
    location: "Ávila",
    squareMeters: 55,
    sector: "residencial",
    year: 2024,
    productSlugs: ["policarbonato-celular"],
    image: "/projects/carport-vista-frontal.webp",
    gradient: "from-[#7a8a9b] to-[#2c343d]",
  },
  {
    id: "p19",
    name: "Cerramiento exterior — fachada blanca",
    location: "Badajoz",
    squareMeters: 95,
    sector: "industrial",
    year: 2023,
    productSlugs: ["panel-fachada-microperfilada"],
    image: "/projects/cerramiento-fachada-blanca.webp",
    gradient: "from-[#a2afba] to-[#3a4149]",
  },
];
