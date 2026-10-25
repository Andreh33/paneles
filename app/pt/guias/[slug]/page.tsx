import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialBody } from "@/components/seo/EditorialBody";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PtHero,
  PtContactCTA,
  PtFaqs,
  ptBreadcrumb,
} from "@/components/portugal/Shared";
import { PT_GUIDES, portugueseMetadata } from "@/lib/portugal";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return PT_GUIDES.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = PT_GUIDES.find((p) => p.slug === slug);
  return p
    ? portugueseMetadata(`/pt/guias/${slug}`, p.title, p.description, true)
    : { title: "Guia não encontrado" };
}

export default async function PtGuide({ params }: Props) {
  const { slug } = await params;
  const guide = PT_GUIDES.find((p) => p.slug === slug);
  if (!guide) notFound();
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${SITE.url}/pt/guias/${slug}#article`,
            headline: guide.title,
            description: guide.description,
            abstract: guide.quickAnswer,
            inLanguage: "pt-PT",
            datePublished: guide.date,
            dateModified: guide.date,
            url: `${SITE.url}/pt/guias/${slug}`,
            mainEntityOfPage: `${SITE.url}/pt/guias/${slug}`,
            author: { "@type": "Organization", name: SITE.name, url: SITE.url },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
            },
            translationOfWork: {
              "@type": "BlogPosting",
              url: `${SITE.url}/sobre-nosotros/${guide.sourceSlug}`,
            },
          },
          ptBreadcrumb([
            { name: "Início", path: "/pt" },
            { name: "Guias", path: "/pt/guias" },
            { name: guide.title, path: `/pt/guias/${slug}` },
          ]),
        ]}
      />
      <PtHero eyebrow="Guia de compra e preparação" title={guide.title}>
        <p>{guide.excerpt}</p>
        <p className="mt-5 text-sm text-white/60">
          Por Panelex ·{" "}
          <time dateTime={guide.date}>
            {new Intl.DateTimeFormat("pt-PT", { dateStyle: "long" }).format(
              new Date(`${guide.date}T12:00:00Z`),
            )}
          </time>
        </p>
      </PtHero>
      <article
        className="mx-auto max-w-3xl px-5 py-14 md:px-8"
        data-analytics-article={guide.slug}
      >
        <Link
          href="/pt/guias"
          className="mb-8 inline-block font-semibold text-[var(--color-primary)]"
        >
          ← Todos os guias
        </Link>
        <p className="mb-10 border-l-4 border-[var(--color-accent)] bg-[var(--color-surface)] p-6 text-lg leading-relaxed">
          {guide.quickAnswer}
        </p>
        <EditorialBody markdown={guide.bodyMarkdown} locale="pt-PT" />
        {guide.sources?.length ? (
          <aside className="mt-10 border-t border-[var(--color-border)] pt-6">
            <h2 className="font-display text-xl font-semibold">
              Documentação de referência
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="underline underline-offset-4">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        <p className="mt-10 text-sm text-[var(--color-muted)]">
          <a
            href={`/sobre-nosotros/${guide.sourceSlug}`}
            lang="es"
            className="underline underline-offset-4"
          >
            Ler a versão em espanhol
          </a>
          . Conteúdo adaptado ao fornecimento em Portugal; confirme a aplicação
          na documentação do produto e do projeto.
        </p>
        <nav
          aria-label="Guias relacionados"
          className="mt-10 border-t border-[var(--color-border)] pt-6"
        >
          <h2 className="font-display text-xl font-semibold">
            Continuar a preparar a encomenda
          </h2>
          <ul className="mt-4 space-y-3">
            {PT_GUIDES.filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/pt/guias/${p.slug}`}
                    className="underline underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>
      <PtFaqs faqs={guide.faqs} />
      <PtContactCTA
        subject={`Gostaria de pedir um orçamento de painel sandwich para Portugal. Consultei o guia: ${guide.title}. Local da obra: __. Medidas e referência: __.`}
      />
    </>
  );
}
