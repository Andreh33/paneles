import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { POSTS, getPostBySlug, getRelatedPosts, getPostFaqs } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { PriceTable } from "@/components/seo/PriceTable";
import { blogPostingLd, breadcrumbLd, faqLd } from "@/lib/jsonld";

/** Posts que montan la tabla "desde €/m²" (solo renderiza si el flag
 *  PRICE_TABLE_ENABLED de lib/pricing.ts está activo — OK del dueño). */
const PRICE_TABLE_SLUGS = new Set([
  "precio-panel-sandwich-m2",
  "cuanto-cuesta-cubrir-una-nave-con-panel-sandwich",
]);

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/sobre-nosotros/${post.slug}` },
    openGraph: {
      title: `${post.title} · Panelex`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      locale: "es_ES",
      // Al definir openGraph aquí se pierde la imagen OG heredada del layout
      // raíz, así que la declaramos explícitamente.
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const faqs = getPostFaqs(post);

  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(post),
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: "Guías", path: "/guias" },
            { label: post.title, path: `/sobre-nosotros/${post.slug}` },
          ]),
          ...(faqs.length > 0 ? [faqLd(faqs)] : []),
        ]}
      />

      {/* Cabecera del artículo */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-20">
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Todas las guías
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono uppercase tracking-wider text-[var(--color-accent-soft)]">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {dateFormatter.format(new Date(post.date))}
            </time>
            <span>· {post.readingMinutes} min de lectura</span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">
            {post.title}
          </h1>
          {/* Firma de autor real (EEAT + atribución en IA): coincide con el
              Person del JSON-LD (author del BlogPosting). */}
          <p className="mt-4 text-sm text-white/60">
            Por{" "}
            <span className="font-semibold text-white/90">
              {SITE.contact.salesContact.name}
            </span>{" "}
            · {SITE.contact.salesContact.role} de {SITE.name}
          </p>
          <p className="mt-5 max-w-2xl text-white/70">{post.excerpt}</p>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
          {/* Respuesta directa 40-60 palabras (answer-first, citable por IA) */}
          {post.quickAnswer && (
            <QuickAnswer className="mb-12">{post.quickAnswer}</QuickAnswer>
          )}
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-[var(--color-text)]">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                    <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                      <caption className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-left font-display text-sm font-semibold">
                        {section.table.caption}
                      </caption>
                      <thead>
                        <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                          {section.table.headers.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr
                            key={row.join("|").slice(0, 60)}
                            className="border-b border-[var(--color-border)] last:border-0"
                          >
                            {row.map((cell, ci) =>
                              ci === 0 ? (
                                <th key={cell.slice(0, 40)} scope="row" className="px-4 py-3 font-semibold">
                                  {cell}
                                </th>
                              ) : (
                                <td key={cell.slice(0, 40)} className="px-4 py-3">
                                  {cell}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.bullets && (
                  <ul className="list-disc space-y-3 pl-6">
                    {section.bullets.map((b) => (
                      <li key={b.slice(0, 40)}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {/* Tabla "desde €/m²" — inactiva hasta PRICE_TABLE_ENABLED=true */}
          {PRICE_TABLE_SLUGS.has(post.slug) && <PriceTable className="mt-14" />}

          {/* Enlaces internos */}
          {post.internalLinks && post.internalLinks.length > 0 && (
            <aside className="mt-14 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Enlaces útiles
              </h2>
              <ul className="mt-4 space-y-2">
                {post.internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                    >
                      <ArrowRight className="h-4 w-4 text-[var(--color-primary)]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* CTA del artículo */}
          <aside className="mt-8 rounded-3xl bg-[var(--color-primary-deep)] p-8 text-white md:p-10">
            <h2 className="font-display text-2xl font-semibold">
              ¿Tienes una obra entre manos?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/70">
              Envíanos las medidas por WhatsApp y te preparamos un presupuesto
              cerrado, con corte a medida y transporte incluido, directo de
              fábrica desde {SITE.address.city} ({SITE.address.province}).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Pedir presupuesto
              </a>
              <a
                href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.contact.phone}
              </a>
            </div>
          </aside>
        </div>
      </article>

      {/* Artículos relacionados */}
      {related.length > 0 && (
        <section className="bg-[var(--color-surface)]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Sigue leyendo
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <article
                  key={r.slug}
                  className="group flex flex-col rounded-3xl border border-[var(--color-border)] bg-white p-7 transition hover:border-[var(--color-primary)]"
                >
                  <span className="self-start rounded-full bg-[var(--color-surface)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                    {r.category}
                  </span>
                  <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug">
                    <Link
                      href={`/sobre-nosotros/${r.slug}`}
                      className="transition group-hover:text-[var(--color-primary)]"
                    >
                      {r.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/sobre-nosotros/${r.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]"
                    aria-label={`Leer: ${r.title}`}
                  >
                    Leer artículo
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
