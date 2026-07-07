import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/panel-sandwich-extremadura", changeFrequency: "monthly", priority: 0.9 },
  { path: "/panel-sandwich-badajoz", changeFrequency: "monthly", priority: 0.85 },
  { path: "/panel-sandwich-caceres", changeFrequency: "monthly", priority: 0.85 },
  { path: "/panel-sandwich-merida", changeFrequency: "monthly", priority: 0.8 },
  { path: "/panel-sandwich-don-benito", changeFrequency: "monthly", priority: 0.8 },
  { path: "/panel-sandwich-plasencia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/panel-sandwich-madrid", changeFrequency: "monthly", priority: 0.8 },
  { path: "/panel-sandwich-sevilla", changeFrequency: "monthly", priority: 0.8 },
  { path: "/productos", changeFrequency: "monthly", priority: 0.9 },
  { path: "/proyectos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sobre-nosotros", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.7 },
  { path: "/aviso-legal", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-privacidad", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-cookies", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terminos", changeFrequency: "yearly", priority: 0.2 },
];

// Fecha real de la última actualización de contenido del sitio. Estable entre
// builds: solo se sube cuando de verdad se actualizan páginas/productos. Usar
// `new Date()` aquí marcaba TODO como modificado en cada despliegue, una señal
// de frescura falsa que Google acaba ignorando.
const LAST_UPDATE = new Date("2026-07-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: LAST_UPDATE,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const products: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE.url}/productos/${p.slug}`,
    lastModified: LAST_UPDATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/sobre-nosotros/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...base, ...products, ...posts];
}
