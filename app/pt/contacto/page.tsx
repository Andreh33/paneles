import { PtHero } from "@/components/portugal/Shared";
import { QuotationForm } from "@/components/portugal/QuotationForm";
import { PT_PRODUCTS, portugueseMetadata } from "@/lib/portugal";
import { SITE } from "@/lib/site";

export const metadata = portugueseMetadata(
  "/pt/contacto",
  "Pedir orçamento de painel sandwich para Portugal",
  "Envie medidas, quantidades e local de entrega à Panelex. Orçamento de painel sandwich para Portugal, com transporte e condições de descarga a confirmar.",
);

export default function PtContact() {
  return (
    <>
      <PtHero
        eyebrow="Fale com a fábrica"
        title="A sua obra começa com um pedido bem preparado."
      >
        <p>
          Indique o material, as medidas e o local de entrega em Portugal.
          Confirmamos a configuração e as condições comerciais antes de
          fabricar.
        </p>
      </PtHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_1.4fr]">
        <aside>
          <h2 className="font-display text-3xl font-semibold">
            Contacto direto
          </h2>
          <p className="mt-5 leading-relaxed">
            Ramón Romero · Panelex
            <br />
            Fábrica em Puebla de la Calzada, Badajoz, Espanha.
          </p>
          <dl className="mt-7 space-y-6">
            <div>
              <dt className="text-sm text-[var(--color-muted)]">
                Telefone e WhatsApp
              </dt>
              <dd className="mt-2">
                <a
                  className="text-xl font-semibold underline underline-offset-4"
                  href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
                >
                  {SITE.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--color-muted)]">Email</dt>
              <dd className="mt-2">
                <a
                  className="break-all font-semibold underline underline-offset-4"
                  href={`mailto:${SITE.contact.email}`}
                >
                  {SITE.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--color-muted)]">
                Horário da fábrica
              </dt>
              <dd className="mt-2">
                Segunda a sexta, 9h–14h, hora de Espanha. Tardes encerrado.
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--color-muted)]">Morada</dt>
              <dd className="mt-2">
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
                <br />
                {SITE.address.province}, Espanha
              </dd>
            </div>
          </dl>
          <p className="mt-8 border-t border-[var(--color-border)] pt-6 text-sm leading-relaxed text-[var(--color-muted)]">
            Fornecemos material para Portugal a partir desta fábrica. Confirme
            prazo, transporte, meios de descarga e disponibilidade de montagem
            para o seu projeto. O pedido não cria um compromisso de compra.
          </p>
        </aside>
        <section className="min-w-0">
          <h2 className="mb-8 font-display text-3xl font-semibold">
            Preparar o orçamento
          </h2>
          <QuotationForm
            products={PT_PRODUCTS.map(({ slug, name, code }) => ({
              slug,
              name,
              code,
            }))}
          />
        </section>
      </div>
    </>
  );
}
