import Link from "next/link";
import { SITE } from "@/lib/site";
import { ptWhatsApp } from "@/lib/portugal";

export function PtHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[var(--color-bg-warm)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[.18em] text-[var(--color-accent-soft)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function PtContactCTA({
  subject = "Gostaria de pedir um orçamento de painel sandwich para Portugal.",
}: {
  subject?: string;
}) {
  return (
    <section className="bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
          Da fábrica à sua obra
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold">
          Vamos preparar a sua encomenda?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">
          Envie as medidas, a referência pretendida e o concelho de entrega.
          Confirmamos o material, o transporte, a descarga e o âmbito de
          qualquer montagem antes de aceitar a encomenda.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={ptWhatsApp(subject)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-accent-deep)] px-6 py-3.5 font-semibold text-white hover:bg-[#7d3f06]"
          >
            Pedir orçamento por WhatsApp
          </a>
          <Link
            href="/pt/contacto"
            className="rounded-full border border-[var(--color-border)] px-6 py-3.5 font-semibold"
          >
            Preparar o pedido
          </Link>
          <a
            href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
            className="rounded-full px-6 py-3.5 font-semibold underline underline-offset-4"
          >
            Ligar para a fábrica
          </a>
        </div>
      </div>
    </section>
  );
}

export function PtFaqs({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <h2 className="font-display text-3xl font-semibold">
        Perguntas frequentes
      </h2>
      <div className="mt-7 divide-y divide-[var(--color-border)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="py-5">
            <summary className="cursor-pointer pr-5 font-semibold">
              {faq.question}
            </summary>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ptBreadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
