import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PtContactCTA } from "@/components/portugal/Shared";
import { PT_GUIDES, PT_REGIONS, portugueseMetadata } from "@/lib/portugal";
import { SITE } from "@/lib/site";

export const metadata = portugueseMetadata(
  "/pt",
  "Painel sandwich para Portugal, direto da fábrica",
  "Painel sandwich de cobertura e fachada, telha Fertelha e policarbonato. Corte por medida e fornecimento para Portugal a partir de Badajoz.",
);

export default function PortugalHome() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.name,
          url: SITE.url,
          logo: `${SITE.url}/logo.png`,
          telephone: SITE.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.province,
            postalCode: SITE.address.postalCode,
            addressCountry: "ES",
          },
          areaServed: { "@type": "Country", name: "Portugal" },
        }}
      />
      <section className="overflow-hidden bg-[var(--color-bg-warm)] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.18em] text-[var(--color-accent-soft)]">
              Fabrico próprio · Badajoz → Portugal
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Painel sandwich.
              <br />
              <span className="text-[var(--color-accent-soft)]">
                À medida da sua obra.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Coberturas, fachadas e telha Fertelha para pavilhões, instalações
              agrícolas e reabilitação. Encomende diretamente à fábrica Panelex,
              com entrega em Portugal planeada para o seu projeto.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/pt/produtos"
                className="rounded-full bg-white px-7 py-4 font-semibold text-[var(--color-bg-warm)] hover:bg-[var(--color-accent-soft)]"
              >
                Explorar os produtos →
              </Link>
              <Link
                href="/pt/contacto"
                className="rounded-full border border-white/30 px-7 py-4 font-semibold"
              >
                Pedir orçamento
              </Link>
            </div>
            <p className="mt-7 max-w-lg text-sm text-white/60">
              Fábrica em Puebla de la Calzada, Espanha. Confirmamos transporte,
              descarga e condições de montagem para cada encomenda.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[5rem] lg:aspect-[4/5]">
            <Image
              src="/hero/operario-cubierta.webp"
              alt="Trabalho de colocação de painéis numa cobertura"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/65 p-5 text-sm text-white/90">
              Do plano de corte à receção em obra.
              <br />
              Um pedido com todas as medidas e acessórios.
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
              Escolher o material
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Uma solução para cada aplicação.
            </h2>
          </div>
          <Link
            href="/pt/produtos"
            className="font-semibold underline underline-offset-4"
          >
            Ver o catálogo completo
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Cobertura e telha Fertelha",
              copy: "Painel de cobertura e perfil de telha, com diferentes espessuras, cores e comprimentos de corte. Compare a referência e a solução de remates.",
              href: "/pt/produtos#cubierta",
            },
            {
              n: "02",
              title: "Fachada",
              copy: "Acabamentos nervurado e microperfilado para cerramentos verticais. Planeie os encontros, os vãos e a correspondência com a estrutura.",
              href: "/pt/produtos#fachada",
            },
            {
              n: "03",
              title: "Luz natural e acessórios",
              copy: "Policarbonato para iluminação e remates para completar a encomenda. A compatibilidade de perfis e de juntas deve ser confirmada antes do fabrico.",
              href: "/pt/produtos#policarbonato",
            },
          ].map((item) => (
            <article
              key={item.n}
              className="border-t-2 border-[var(--color-primary)] pt-5"
            >
              <span className="font-mono text-sm text-[var(--color-muted)]">
                {item.n}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                <Link href={item.href}>{item.title} ↗</Link>
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section id="zonas" className="scroll-mt-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
            Fornecimento em Portugal
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Preparar a entrega, zona a zona.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--color-muted)]">
            O ponto de partida é a nossa fábrica em Badajoz. O destino, o
            comprimento dos painéis e os meios de descarga ajudam a definir o
            transporte. Consulte os aspetos a preparar na sua zona.
          </p>
          <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {PT_REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/pt/zonas/${region.slug}`}
                className="flex items-center justify-between border-b border-[var(--color-border)] py-5 font-display text-xl font-semibold"
              >
                {region.name}
                <span aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
          Antes de encomendar
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold">
          Guias em português.
        </h2>
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {PT_GUIDES.slice(0, 4).map((guide) => (
            <article
              key={guide.slug}
              className="border-b border-[var(--color-border)] py-6"
            >
              <h3 className="font-display text-2xl font-semibold">
                <Link href={`/pt/guias/${guide.slug}`}>{guide.title} ↗</Link>
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                {guide.excerpt}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/pt/guias"
          className="mt-8 inline-block font-semibold underline underline-offset-4"
        >
          Ler todos os guias →
        </Link>
      </section>
      <PtContactCTA />
    </>
  );
}
