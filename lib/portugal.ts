import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { getLocaleAlternates } from "@/lib/locale-paths";
import { guidesPart1 } from "@/lib/pt/guides-part-1";
import { guidesPart2 } from "@/lib/pt/guides-part-2";
import { PT_REGIONS } from "@/lib/pt/regions";
import { PT_PRODUCTS } from "@/lib/pt/products";
export { ptWhatsApp } from "@/lib/pt/contact";

export const PT_GUIDES = [...guidesPart1, ...guidesPart2];
export { PT_REGIONS, PT_PRODUCTS };
export const PT_PUBLICATION_DATE = "2026-10-25";

export function portugueseMetadata(
  path: string,
  title: string,
  description: string,
  article = false,
): Metadata {
  return {
    title: { absolute: `${title} | Panelex` },
    description,
    alternates: getLocaleAlternates(path),
    openGraph: {
      title: `${title} | Panelex`,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      locale: "pt_PT",
      type: article ? "article" : "website",
      images: [{ url: "/pt/opengraph-image", width: 1200, height: 630 }],
      ...(article ? { publishedTime: PT_PUBLICATION_DATE } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function portugalPaths(): string[] {
  return [
    "/pt",
    "/pt/produtos",
    "/pt/contacto",
    "/pt/guias",
    ...PT_PRODUCTS.map((p) => `/pt/produtos/${p.slug}`),
    ...PT_GUIDES.map((p) => `/pt/guias/${p.slug}`),
    ...PT_REGIONS.map((p) => `/pt/zonas/${p.slug}`),
  ];
}
