import type { Metadata } from "next";
import { Award, Factory, Leaf, Phone, ShieldCheck, Users } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Panelex S.L. fabrica panel sándwich y chapa perfilada desde Puebla de la Calzada (Badajoz). Conoce nuestra historia, equipo y compromiso técnico.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Sobre Panelex
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Fabricamos lo que vendemos.
            <br />
            <span className="text-white/60">Hablamos como lo que somos.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Panelex es una fábrica extremeña de panel sándwich y chapa
            perfilada. Nada de intermediarios. Cuando llamas, hablas con quien
            está en planta.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Historia
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Una fábrica con raíces locales,
            <br />
            clientes en toda Iberia.
          </h2>

          <div className="prose-panelex mt-10 space-y-5 text-[var(--color-text)]">
            <p>
              Panelex S.L. nace en Puebla de la Calzada con un objetivo claro:
              ofrecer panel sándwich y chapa perfilada de alta calidad sin que
              la distancia geográfica suba el precio ni baje el servicio.
              Fabricamos en planta propia, controlando cada espesor y cada
              acabado.
            </p>
            <p>
              Nuestra cercanía a la frontera portuguesa nos ha llevado a
              trabajar tanto en proyectos extremeños y andaluces como en obras
              al otro lado de la raya, en Alentejo. Esa doble realidad nos
              obliga a ser ágiles en la logística y meticulosos en la
              documentación técnica.
            </p>
            <p>
              Hoy el catálogo cubre {DATA.products}+ referencias, desde paneles
              sándwich de cubierta y fachada hasta chapa perfilada y accesorios
              de remate.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-xs text-[var(--color-muted)]">
            Este texto es una primera aproximación. Ramón confirmará año de
            fundación, hitos, y matices del relato corporativo (ver
            TODO_CLIENTE.md).
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Equipo
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Quién está al otro lado.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-[var(--color-primary-deep)] p-8 text-white md:p-10">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 font-display text-2xl font-bold">
                RR
              </div>
              <h3 className="font-display text-2xl font-semibold">
                {SITE.contact.salesContact.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-accent-soft)]">
                {SITE.contact.salesContact.role}
              </p>
              <p className="mt-5 text-sm text-white/70">
                Ramón es la voz comercial de Panelex. Coge el teléfono, atiende
                el WhatsApp y prepara los presupuestos. Si tienes una obra
                entre manos, es la persona con la que vas a hablar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SITE.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  WhatsApp directo
                </a>
                <a
                  href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.contact.phone}
                </a>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-white p-8 md:p-10">
              <div>
                <Factory className="h-9 w-9 text-[var(--color-primary)]" />
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  Equipo de planta
                </h3>
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  Detrás de cada panel hay un equipo de fabricación con años de
                  oficio. Operarios de máquina, control de calidad y logística
                  propios.
                </p>
              </div>
              <p className="mt-6 text-xs text-[var(--color-muted)]">
                Fotografía de planta y equipo pendiente (TODO_FOTOS.md).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Cumplimiento
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Certificados y normativa.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Cert
              Icon={ShieldCheck}
              title="Marcado CE"
              body="Toda la gama cumple los requisitos del marcado CE conforme al Reglamento (UE) 305/2011 de Productos de Construcción."
            />
            <Cert
              Icon={Award}
              title="ETA / DAU"
              body="Documentos de Idoneidad Técnica Europea y declaraciones de prestaciones disponibles bajo solicitud."
            />
            <Cert
              Icon={Leaf}
              title="Reacción al fuego"
              body="Clasificación de reacción al fuego según EN 13501-1. Disponemos de las fichas técnicas correspondientes."
            />
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Las certificaciones específicas y números de ETA se confirmarán con
            Ramón (ver TODO_CLIENTE.md).
          </p>
        </div>
      </section>
    </>
  );
}

function Cert({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
      <Icon className="h-7 w-7 text-[var(--color-primary)]" />
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-[var(--color-muted)]">{body}</p>
    </article>
  );
}

const DATA = {
  products: 16,
};
