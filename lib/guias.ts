/**
 * PANELEX — Hub de guías (/guias)
 *
 * Agrupa los ~90 posts del blog por tema para el hub de enlaces <a> reales.
 * Objetivo SEO: sacar los posts de "Descubierta - sin indexar" dándoles un
 * hub rastreable a ≤2 clics de la home (el ItemList JSON-LD no es un enlace),
 * y concentrar equidad de enlace interno post ↔ zona ↔ producto.
 *
 * Los slugs y URLs de los posts NO cambian: siguen en /sobre-nosotros/[slug].
 */
import { POSTS, type BlogPost } from "./blog";

export interface GuideTheme {
  id: string;
  /** H2 visible del grupo en /guias */
  title: string;
  /** Frase corta bajo el H2 (contexto + keywords) */
  lead: string;
  /** Categorías de BlogPost que caen en este grupo */
  categories: string[];
}

export const GUIDE_THEMES: GuideTheme[] = [
  {
    id: "precio",
    title: "Precio, compra y presupuesto",
    lead: "Cuánto cuesta el panel sándwich, cómo se forma el precio por m² y cómo pedir un presupuesto que no dé sorpresas.",
    categories: ["Compra y presupuesto"],
  },
  {
    id: "tecnico",
    title: "Guías técnicas y de montaje",
    lead: "Espesores, transmitancia, pendientes, remates, tornillería y mantenimiento: lo que hay que saber antes y después de montar.",
    categories: ["Guías básicas", "Guías técnicas", "Montaje", "Mantenimiento"],
  },
  {
    id: "aplicaciones",
    title: "Aplicaciones y sectores",
    lead: "Del garaje a la nave industrial, de la granja al secadero de jamón: qué panel corresponde a cada obra.",
    categories: ["Aplicaciones", "Por sector"],
  },
  {
    id: "productos",
    title: "Productos y comparativas",
    lead: "Cada gama a fondo (cubierta, teja, fachada, Agropanel, chapa) y comparativas honestas frente a uralita, teja u onduline.",
    categories: ["Producto", "Productos", "Comparativas"],
  },
  {
    id: "local",
    title: "Panelex en tu zona",
    lead: "Guías locales de suministro y obra en Extremadura y alrededores, servidas desde la fábrica de Puebla de la Calzada.",
    categories: ["Zonas de servicio", "Empresa"],
  },
];

export interface GuideGroup extends GuideTheme {
  posts: BlogPost[];
}

const byDateDesc = (a: BlogPost, b: BlogPost) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

/**
 * Devuelve los grupos del hub con sus posts (más recientes primero).
 * Cualquier categoría no mapeada cae en el grupo técnico como red de
 * seguridad: ningún post se queda jamás fuera del hub (huérfano).
 */
export function getGuideGroups(posts: BlogPost[] = POSTS): GuideGroup[] {
  const known = new Set(GUIDE_THEMES.flatMap((t) => t.categories));
  return GUIDE_THEMES.map((theme) => ({
    ...theme,
    posts: posts
      .filter(
        (p) =>
          theme.categories.includes(p.category) ||
          (theme.id === "tecnico" && !known.has(p.category)),
      )
      .sort(byDateDesc),
  }));
}

/** Categorías presentes en POSTS que no están mapeadas a ningún tema.
 *  Debe estar vacío; hay un test que lo garantiza. */
export function getUnmappedCategories(posts: BlogPost[] = POSTS): string[] {
  const known = new Set(GUIDE_THEMES.flatMap((t) => t.categories));
  return [...new Set(posts.map((p) => p.category))].filter(
    (c) => !known.has(c),
  );
}
