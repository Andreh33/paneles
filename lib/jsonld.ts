/**
 * Helpers para generar fragmentos JSON-LD.
 * Se serializan dentro de <script type="application/ld+json"> en cada página
 * con el componente <JsonLd> de abajo.
 */
import type { BlogPost } from "./blog";
import type { Product as PanelexProduct, ProductCategory } from "./products";
import { ALL_CATEGORIES } from "./products";
import { SITE } from "./site";

/** @id estables de las entidades del grafo. Un solo identificador por entidad
 *  en todo el sitio: es lo que permite a Google/Bing/LLMs consolidar la marca. */
export const ORG_ID = `${SITE.url}#organization`;
export const WEBSITE_ID = `${SITE.url}#website`;
export const LOCAL_BUSINESS_ID = `${SITE.url}#local-business`;
export const PERSON_ID = `${SITE.url}#ramon-romero-fernandez`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.legalName,
    // Variantes reales del nombre con las que la marca aparece citada
    // (dominio, forma corta). Ayudan a los LLMs a resolver la entidad única.
    alternateName: [SITE.name, "Panelex Panel Sandwich"],
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.tagline,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      addressCountry: "ES",
    },
    employee: { "@id": PERSON_ID },
    sameAs: [
      SITE.social.facebook,
      SITE.social.linkedin,
      SITE.social.instagram,
    ].filter(Boolean),
  };
}

/**
 * Person — Ramón Romero Fernández, la cara comercial y técnica de Panelex.
 * Entidad de autor real para EEAT y atribución en respuestas de IA: los posts
 * lo referencian como author y la Organization como employee (mismo @id).
 */
export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.contact.salesContact.name,
    jobTitle: SITE.contact.salesContact.role,
    telephone: SITE.contact.phone,
    worksFor: { "@id": ORG_ID },
    description:
      "Atención comercial de Panelex: asesora sobre panel sándwich de cubierta y fachada, espesores, aislamiento y presupuestos de fábrica desde Puebla de la Calzada (Badajoz).",
    knowsAbout: [
      "Panel sándwich",
      "Panel sándwich de cubierta",
      "Panel sándwich imitación teja",
      "Chapa perfilada",
      "Aislamiento térmico de naves",
      "Cubiertas metálicas",
    ],
    url: `${SITE.url}/sobre-nosotros`,
  };
}

/**
 * Grafo único de entidad (@graph) que enlaza Organization ↔ WebSite ↔
 * LocalBusiness ↔ Person con @id estables. Se emite en la home; el resto de
 * páginas reutilizan los mismos @id (Service, Product, BlogPosting), de modo
 * que todo el schema del sitio forma un solo grafo consolidado.
 */
export function entityGraphLd() {
  const strip = (node: Record<string, unknown>) => {
    const { ["@context"]: _context, ...rest } = node;
    return rest;
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      strip(organizationLd()),
      strip(websiteLd()),
      strip(localBusinessLd()),
      strip(personLd()),
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    alternateName: "Panelex Panel Sandwich",
    inLanguage: "es-ES",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * LocalBusiness completo (NAP + geo + horario + zonas + catálogo de servicios).
 * `extraAreaServed` permite que cada página de zona anteponga su área local
 * (p.ej. "Mérida y comarca") sin duplicar la entidad: el @id es siempre el mismo.
 */
export function localBusinessLd(opts?: { extraAreaServed?: string[] }) {
  const zoneAreas = (opts?.extraAreaServed ?? []).map((name) => ({
    "@type": "AdministrativeArea",
    name,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: SITE.legalName,
    alternateName: [SITE.name, "Panelex Panel Sandwich"],
    parentOrganization: { "@id": ORG_ID },
    description:
      "Fábrica de panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz). Más de 15 años fabricando, venta directa de fábrica, corte a medida y entrega en Extremadura, toda España y Portugal.",
    image: [
      `${SITE.url}/hero/operario-cubierta.webp`,
      `${SITE.url}/opengraph-image`,
    ],
    logo: `${SITE.url}/logo.png`,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.geo.lat,
      longitude: SITE.address.geo.lng,
    },
    hasMap: `https://www.openstreetmap.org/?mlat=${SITE.address.geo.lat}&mlon=${SITE.address.geo.lng}#map=17/${SITE.address.geo.lat}/${SITE.address.geo.lng}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phone,
        contactType: "sales",
        name: `${SITE.contact.salesContact.name} — ${SITE.contact.salesContact.role}`,
        availableLanguage: "Spanish",
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phoneOffice,
        contactType: "customer service",
        name: "Oficina",
        availableLanguage: "Spanish",
      },
    ],
    areaServed: [
      ...zoneAreas,
      { "@type": "AdministrativeArea", name: "Extremadura" },
      { "@type": "AdministrativeArea", name: "Provincia de Badajoz" },
      { "@type": "AdministrativeArea", name: "Provincia de Cáceres" },
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Portugal" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de panel sándwich y chapa perfilada",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panel sándwich de cubierta a medida",
            url: `${SITE.url}/productos?categoria=cubierta`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panel sándwich imitación teja (Fertelha)",
            url: `${SITE.url}/productos/fertelha-terracota`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panel sándwich de fachada",
            url: `${SITE.url}/productos?categoria=fachada`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Policarbonato celular y compacto",
            url: `${SITE.url}/productos?categoria=policarbonato`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remates, cumbreras y accesorios de cubierta",
            url: `${SITE.url}/productos?categoria=accesorio`,
          },
        },
      ],
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.linkedin,
      SITE.social.instagram,
    ].filter(Boolean),
  };
}

/**
 * Service para páginas de zona: "suministro de panel sándwich en X".
 * Entidad ligera y 100% válida (sin offers) que conecta la página local con
 * la organización (provider) y su área de servicio.
 */
export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  areaName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: "Fabricación, venta y corte a medida de panel sándwich",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "AdministrativeArea", name: opts.areaName },
    url: `${SITE.url}${opts.path}`,
  };
}

/**
 * ItemList del catálogo (/productos). Sustituye al Product por página
 * mientras no exista un precio "desde" publicado: es schema válido, sin los
 * requisitos de offers/review/aggregateRating del rich result de producto.
 */
export function itemListLd(
  items: Array<{ name: string; slug: string; image: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/productos#catalogo`,
    name: "Catálogo de panel sándwich y chapa perfilada Panelex",
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE.url}/productos/${p.slug}`,
      image: `${SITE.url}${p.image}`,
    })),
  };
}

export function productLd(product: PanelexProduct) {
  const categoryLabel =
    ALL_CATEGORIES.find((c) => c.value === product.category)?.label ??
    product.category;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/productos/${product.slug}#product`,
    name: product.name,
    sku: product.code,
    description: product.description,
    category: categoryLabel,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    image: [`${SITE.url}/productos/${product.slug}/opengraph-image`],
    url: `${SITE.url}/productos/${product.slug}`,
    additionalProperty: [
      product.widthTotal > 0 && {
        "@type": "PropertyValue",
        name: "Ancho total",
        value: `${product.widthTotal} mm`,
      },
      product.widthUseful && {
        "@type": "PropertyValue",
        name: "Ancho útil",
        value: `${product.widthUseful} mm`,
      },
      product.isAgropanel && {
        "@type": "PropertyValue",
        name: "Agropanel",
        value: "Disponible",
      },
    ].filter(Boolean),
  };
}

export function blogPostingLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/sobre-nosotros/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    ...(post.quickAnswer ? { abstract: post.quickAnswer } : {}),
    image: [`${SITE.url}/opengraph-image`],
    inLanguage: "es-ES",
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    // Autor-persona real (EEAT + atribución en IA). El nodo se define inline
    // con el mismo @id del grafo para que resuelva también fuera de la home.
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.contact.salesContact.name,
      jobTitle: SITE.contact.salesContact.role,
      worksFor: { "@id": ORG_ID },
      url: `${SITE.url}/sobre-nosotros`,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE.url}/sobre-nosotros/${post.slug}`,
    url: `${SITE.url}/sobre-nosotros/${post.slug}`,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

interface Crumb {
  label: string;
  path: string;
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function categoryToLabel(c: ProductCategory): string {
  return ALL_CATEGORIES.find((x) => x.value === c)?.label ?? c;
}
