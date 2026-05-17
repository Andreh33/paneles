/**
 * Listado de proyectos representativos.
 * PLACEHOLDER: los datos se reemplazan cuando el cliente facilite obras
 * reales (ver TODO_CLIENTE.md). La estructura es la fuente de verdad.
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
  /** Fotografía de la obra. Hoy son placeholders IA — sustituir por foto real */
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
  {
    id: "p1",
    name: "Nave logística Mérida Sur",
    location: "Mérida, Badajoz",
    squareMeters: 8200,
    sector: "logistica",
    year: 2024,
    productSlugs: ["fp-pc-5-1000", "fp-pf-nerv-fn-1000"],
    image: "/projects/nave-logistica-merida.webp",
    gradient: "from-[#2D2C66] via-[#4D4C92] to-[#A85608]",
  },
  {
    id: "p2",
    name: "Cubierta agrícola Olivenza",
    location: "Olivenza, Badajoz",
    squareMeters: 3400,
    sector: "agricola",
    year: 2024,
    productSlugs: ["fp-pc-3-1000"],
    image: "/projects/cubierta-agricola-olivenza.webp",
    gradient: "from-[#A85608] to-[#5E3104]",
  },
  {
    id: "p3",
    name: "Centro cárnico Don Benito",
    location: "Don Benito, Badajoz",
    squareMeters: 5100,
    sector: "agricola",
    year: 2024,
    productSlugs: ["fp-pc-5-1000", "fp-pf-microp-fn-1000"],
    image: "/projects/centro-carnico-don-benito.webp",
    gradient: "from-[#252620] to-[#0F100B]",
  },
  {
    id: "p4",
    name: "Pabellón industrial Almendralejo",
    location: "Almendralejo, Badajoz",
    squareMeters: 4600,
    sector: "industrial",
    year: 2023,
    productSlugs: ["fp-pc-tj-1000", "fp-pf-nerv-fn-1000"],
    image: "/projects/pabellon-industrial-almendralejo.webp",
    gradient: "from-[#4D4C92] to-[#2D2C66]",
  },
  {
    id: "p5",
    name: "Almacén vinícola Mérida",
    location: "Mérida, Badajoz",
    squareMeters: 2800,
    sector: "logistica",
    year: 2023,
    productSlugs: ["fp-pc-5-1000"],
    image: "/projects/almacen-vinicola-merida.webp",
    gradient: "from-[#0F100B] to-[#252620]",
  },
  {
    id: "p6",
    name: "Vivienda unifamiliar Évora",
    location: "Évora, Portugal",
    squareMeters: 280,
    sector: "residencial",
    year: 2023,
    productSlugs: ["fp-fertelha", "acc-cumbrera-fertelha"],
    image: "/projects/vivienda-evora.webp",
    gradient: "from-[#7D7CC4] to-[#4D4C92]",
  },
  {
    id: "p7",
    name: "Granja de cebado Cáceres",
    location: "Cáceres",
    squareMeters: 6300,
    sector: "agricola",
    year: 2023,
    productSlugs: ["fp-pc-5-1000"],
    image: "/projects/granja-caceres.webp",
    gradient: "from-[#A85608] via-[#5E3104] to-[#252620]",
  },
  {
    id: "p8",
    name: "Nave taller Badajoz Polígono El Nevero",
    location: "Badajoz",
    squareMeters: 3900,
    sector: "industrial",
    year: 2022,
    productSlugs: ["fp-pf-microp-fo-1000"],
    image: "/projects/nave-taller-badajoz.webp",
    gradient: "from-[#2D2C66] to-[#0F100B]",
  },
];
