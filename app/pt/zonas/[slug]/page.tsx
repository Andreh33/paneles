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
import { PT_REGIONS, portugueseMetadata } from "@/lib/portugal";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return PT_REGIONS.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = PT_REGIONS.find((p) => p.slug === slug);
  return p
    ? portugueseMetadata(`/pt/zonas/${slug}`, p.title, p.description)
    : { title: "Zona não encontrada" };
}

export default async function PtRegion({ params }: Props) {
  const { slug } = await params;
  const region = PT_REGIONS.find((p) => p.slug === slug);
  if (!region) notFound();
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Fornecimento de painel sandwich — ${region.name}`,
            serviceType: "Fornecimento de painéis sandwich",
            inLanguage: "pt-PT",
            areaServed: {
              "@type": "Place",
              name: region.name,
              address: { "@type": "PostalAddress", addressCountry: "PT" },
            },
            provider: {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              url: SITE.url,
            },
            url: `${SITE.url}/pt/zonas/${slug}`,
          },
          ptBreadcrumb([
            { name: "Início", path: "/pt" },
            { name: region.name, path: `/pt/zonas/${slug}` },
          ]),
        ]}
      />
      <PtHero
        eyebrow="Entrega em Portugal · Fábrica em Badajoz"
        title={region.title}
      >
        <p>{region.intro}</p>
      </PtHero>
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8">
        <EditorialBody markdown={region.bodyMarkdown} locale="pt-PT" />
        <nav
          aria-label="Outras zonas"
          className="mt-10 border-t border-[var(--color-border)] pt-6"
        >
          <h2 className="font-display text-xl font-semibold">
            Outras zonas de fornecimento
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {PT_REGIONS.filter((p) => p.slug !== slug).map((p) => (
              <Link
                key={p.slug}
                href={`/pt/zonas/${p.slug}`}
                className="underline underline-offset-4"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <PtFaqs faqs={region.faqs} />
      <PtContactCTA
        subject={`Gostaria de pedir um orçamento de painel sandwich com entrega em ${region.name}, Portugal. Local exato: __. Medidas e quantidades: __. Acessos e descarga: __. Pretendo confirmar também a disponibilidade de montagem: __.`}
      />
    </>
  );
}
