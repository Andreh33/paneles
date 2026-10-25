import Link from "next/link";
import { PtHero, PtContactCTA } from "@/components/portugal/Shared";
import { PT_GUIDES, portugueseMetadata } from "@/lib/portugal";

export const metadata = portugueseMetadata(
  "/pt/guias",
  "Guias de painel sandwich para Portugal",
  "Medidas, peso, juntas, parafusos, preço e conforto térmico. Guias Panelex em português para preparar a compra e o fornecimento de painel sandwich.",
);

export default function PtGuides() {
  return (
    <>
      <PtHero
        eyebrow="Guias em português"
        title="Antes de comprar, perceba o material."
      >
        <p>
          Medidas, peso e detalhes de encomenda explicados com exemplos. As
          soluções de montagem e o dimensionamento devem ser confirmados com a
          documentação da referência e do projeto.
        </p>
      </PtHero>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-x-12 md:grid-cols-2">
          {PT_GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="border-b border-[var(--color-border)] py-7"
            >
              <h2 className="font-display text-2xl font-semibold">
                <Link
                  href={`/pt/guias/${guide.slug}`}
                  className="hover:underline"
                >
                  {guide.title} ↗
                </Link>
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                {guide.excerpt}
              </p>
              <Link
                href={`/pt/guias/${guide.slug}`}
                className="mt-5 inline-block font-semibold text-[var(--color-primary)]"
              >
                Ler o guia →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <PtContactCTA />
    </>
  );
}
