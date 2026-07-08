import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { POSTS } from "@/lib/blog";
import { getGuideGroups } from "@/lib/guias";
import { SITE, ZONE_LINKS } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { breadcrumbLd, WEBSITE_ID, ORG_ID } from "@/lib/jsonld";

/**
 * HUB /guias — índice completo del blog técnico con <a> reales.
 *
 * Función SEO (plan maestro): arquitectura hub-and-spoke que deja cada uno de
 * los ~90 posts a ≤2 clics de la home con enlaces HTML rastreables, para
 * sacarlos de "Descubierta - sin indexar". Los posts NO cambian de URL:
 * siguen viviendo en /sobre-nosotros/[slug].
 */
export const metadata: Metadata = {
  title: {
    absolute: "Guías de panel sándwich: precios, montaje y usos | Panelex",
  },
  description:
    "Índice completo de guías de panel sándwich escritas desde fábrica: precios por m², espesores, montaje, sustitución de uralita, aplicaciones por sector y zonas de servicio.",
  keywords: [
    "guías panel sándwich",
    "blog panel sándwich",
    "cómo instalar panel sándwich",
    "precio panel sándwich",
    "espesor panel sándwich",
  ],
  alternates: { canonical: "/guias" },
  openGraph: {
    title: "Guías de panel sándwich, escritas desde fábrica — Panelex",
    description:
      "Más de 90 guías técnicas: precio por m², espesores y aislamiento, montaje, uralita, aplicaciones por sector y suministro en tu zona.",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

/** Fichas de producto enlazadas desde el hub (enlazado guía → producto). */
const PRODUCT_LINKS = [
  { label: "Panel sándwich de cubierta en gris", href: "/productos/panel-cubierta-gris" },
  { label: "Panel imitación teja Fertelha terracota", href: "/productos/fertelha-terracota" },
  { label: "Panel de fachada nervada", href: "/productos/panel-fachada-nervada" },
  { label: "Policarbonato celular para lucernarios", href: "/productos/policarbonato-celular" },
  { label: "Catálogo completo de productos", href: "/productos" },
];

function collectionPageLd(totalPosts: number) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/guias#collection`,
    name: "Guías de panel sándwich de Panelex",
    description: `Índice temático de ${totalPosts} guías técnicas sobre panel sándwich: precio, montaje, aplicaciones, comparativas y zonas de servicio.`,
    url: `${SITE.url}/guias`,
    inLanguage: "es-ES",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export default function GuiasPage() {
  const groups = getGuideGroups();

  return (
    <>
      <JsonLd
        data={[
          collectionPageLd(POSTS.length),
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: "Guías", path: "/guias" },
          ]),
        ]}
      />

      {/* Breadcrumb visible */}
      <nav aria-label="Migas de pan" className="bg-[var(--color-bg-warm)] text-white/60">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 pt-6 text-xs md:px-8">
          <li>
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li aria-current="page" className="font-semibold text-white/90">
            Guías
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Blog técnico · {POSTS.length} guías
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Guías de panel sándwich,
            <br />
            <span className="text-white/60">escritas desde fábrica.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Todo lo que aprendemos fabricando panel sándwich en Puebla de la
            Calzada (Badajoz), ordenado por temas: precio y presupuesto, técnica
            y montaje, aplicaciones por sector, productos y comparativas, y
            guías locales de suministro. Sin humo comercial.
          </p>
        </div>
      </section>

      {/* Respuesta rápida (answer-first) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
          <QuickAnswer label="Qué hay aquí">
            {POSTS.length} guías técnicas de panel sándwich escritas por
            Panelex, fábrica de Puebla de la Calzada (Badajoz): cómo se forma el
            precio por m², qué espesor elegir (30–100 mm), cómo montar cubierta
            y fachada, cómo sustituir la uralita con empresa RERA y qué panel
            corresponde a cada obra, de la nave agrícola a la vivienda.
          </QuickAnswer>
        </div>
      </section>

      {/* Grupos temáticos con enlaces <a> reales */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
          <div className="space-y-14">
            {groups.map((group) => (
              <div key={group.id} id={group.id}>
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {group.title}
                  <span className="ml-3 align-middle font-mono text-xs font-normal uppercase tracking-wider text-[var(--color-muted)]">
                    {group.posts.length} guías
                  </span>
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
                  {group.lead}
                </p>

                {/* Landings de zona: hub local (guía ↔ zona) */}
                {group.id === "local" && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ZONE_LINKS.map((z) => (
                      <Link
                        key={z.href}
                        href={z.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                        Panel sándwich en {z.label}
                      </Link>
                    ))}
                  </div>
                )}

                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/sobre-nosotros/${post.slug}`}
                        className="group inline-flex items-start gap-2 text-[15px] leading-snug text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                      >
                        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-0.5" />
                        <span className="underline-offset-4 group-hover:underline">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enlaces a producto (guía ↔ producto) */}
          <div className="mt-16 border-t border-[var(--color-border)] pt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Del papel a la obra: el catálogo
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
              Cuando tengas clara la solución, estos son los productos que
              fabricamos y cortamos a medida.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_LINKS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {p.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[var(--color-primary-deep)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            ¿No encuentras tu caso?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Cuéntanoslo directamente: quien te responde es quien fabrica el
            panel. Presupuesto cerrado con corte a medida y transporte incluido,
            normalmente el mismo día laborable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Preguntar por WhatsApp
            </a>
            <a
              href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
