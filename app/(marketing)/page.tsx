import type { Metadata } from "next";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { Hero } from "@/components/sections/Hero";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { WhyPanelex } from "@/components/sections/WhyPanelex";
import { FeaturedCarousel } from "@/components/sections/FeaturedCarousel";
import { Sectors } from "@/components/sections/Sectors";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { SeoContent } from "@/components/sections/SeoContent";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessLd, organizationLd, websiteLd } from "@/lib/jsonld";

/**
 * Home — composición de secciones (§4.1 del brief).
 * Selección de productos destacados pensada para mostrar las 3 familias
 * principales con un ejemplo característico de cada subtipo.
 */
export const metadata: Metadata = {
  title: {
    absolute:
      "Panelex — Fábrica de panel sándwich en Extremadura (Badajoz) | España",
  },
  description:
    "Fábrica de panel sándwich en Extremadura (Badajoz): cubierta, fachada, imitación teja y chapa perfilada. Venta directa, corte a medida y envío a toda España.",
  alternates: { canonical: "/" },
};

const FEATURED_SLUGS = [
  "fertelha-terracota",
  "fertelha-chocolate",
  "fertelha-gris",
  "panel-cubierta-rojo",
  "panel-cubierta-gris",
  "panel-fachada-nervada",
  "panel-fachada-microperfilada",
  "policarbonato-celular",
] as const;

export default function HomePage() {
  const featured = FEATURED_SLUGS.map(getProductBySlug).filter(
    (p): p is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(p)
  );

  return (
    <>
      <JsonLd data={[organizationLd(), websiteLd(), localBusinessLd()]} />
      <Hero />
      <CategoryShowcase />
      <WhyPanelex />

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <FeaturedCarousel products={featured} />
        </div>
      </section>

      <Sectors />
      <RecentProjects />
      <SeoContent />
      <HomeFaq />
      <FinalCTA />
    </>
  );
}
