/**
 * Helpers para generar fragmentos JSON-LD.
 * Se serializan dentro de <script type="application/ld+json"> en cada página
 * con el componente <JsonLd> de abajo.
 */
import type { Product as PanelexProduct, ProductCategory } from "./products";
import { ALL_CATEGORIES } from "./products";
import { SITE } from "./site";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
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
    sameAs: [SITE.social.linkedin, SITE.social.instagram].filter(Boolean),
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#local-business`,
    name: SITE.legalName,
    image: `${SITE.url}/og/default.png`,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Portugal" },
    ],
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
    manufacturer: { "@id": `${SITE.url}#organization` },
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
