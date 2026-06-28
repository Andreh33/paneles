import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  MapPin,
  Phone,
  Ruler,
  Truck,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, faqLd, localBusinessLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/jsonld";

/**
 * Landing geográfica principal — pensada para posicionar la búsqueda
 * "panel sándwich Extremadura" / "paneles sándwich Extremadura".
 * Concentra el contenido local y recibe enlaces internos desde el blog
 * (clúster de ciudades) y la home.
 */
export const metadata: Metadata = {
  title: {
    absolute:
      "Panel sándwich en Extremadura | Fábrica directa en Badajoz — Panelex",
  },
  description:
    "Fábrica de panel sándwich en Extremadura: venta directa de fábrica en Badajoz a toda la región (Cáceres, Mérida, Plasencia, Don Benito…). Corte a medida, precio sin intermediarios y transporte a tu obra.",
  keywords: [
    "panel sándwich Extremadura",
    "paneles sándwich Extremadura",
    "fábrica panel sándwich Extremadura",
    "panel sándwich Badajoz",
    "panel sándwich Cáceres",
    "panel sándwich Mérida",
    "chapa perfilada Extremadura",
    "panel imitación teja Extremadura",
  ],
  alternates: { canonical: "/panel-sandwich-extremadura" },
  openGraph: {
    title: "Panel sándwich en Extremadura — Fábrica directa en Badajoz",
    description:
      "Fabricamos panel sándwich y chapa perfilada en Extremadura. Venta directa de fábrica, corte a medida y transporte a toda la región.",
    type: "website",
    locale: "es_ES",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "¿Tenéis fábrica de panel sándwich en Extremadura?",
    answer:
      "Sí. Panelex fabrica panel sándwich y chapa perfilada en su planta de Puebla de la Calzada (Badajoz), a pie de la autovía A-5. No somos un distribuidor: producimos el material en Extremadura y lo vendemos directo de fábrica, sin intermediarios.",
  },
  {
    question: "¿Servís panel sándwich a toda Extremadura?",
    answer:
      "Sí. Trabajamos a diario en las provincias de Badajoz y Cáceres: Mérida, Don Benito, Villanueva de la Serena, Almendralejo, Zafra, Cáceres capital, Plasencia, Navalmoral de la Mata, Trujillo y toda la región. Llevamos el material a tu obra con el porte cerrado en el presupuesto.",
  },
  {
    question: "¿Por qué sale más barato comprar el panel sándwich en Extremadura a fábrica?",
    answer:
      "Porque al fabricar aquí mismo eliminas los márgenes de la distribución y los portes largos desde el norte de España. El precio sale de fábrica, cortamos cada panel a la medida exacta de tu faldón (sin mermas) y el transporte es corto dentro de la región.",
  },
  {
    question: "¿Puedo comprar panel sándwich siendo particular en Extremadura?",
    answer:
      "Por supuesto. Atendemos a empresas, instaladores, constructoras, agricultores, ganaderos y particulares que cubren una vivienda, un porche, un garaje o una caseta. El proceso es el mismo: nos pasas las medidas por WhatsApp o teléfono y te preparamos un presupuesto cerrado.",
  },
  {
    question: "¿Cortáis el panel sándwich a medida?",
    answer:
      "Sí. Cada panel sale de fábrica con la longitud exacta que pide tu cubierta o fachada, lo que reduce solapes y residuos en obra. En la gama imitación teja (Fertelha) el corte se realiza en múltiplos de 350 mm, desde 1.050 hasta 14.000 mm.",
  },
  {
    question: "¿Qué tipos de panel sándwich fabricáis en Extremadura?",
    answer:
      "Panel sándwich de cubierta, panel imitación teja (Fertelha), panel de fachada con fijación vista u oculta, chapa perfilada galvanizada y prelacada, policarbonato para lucernarios y todos los remates a juego. También la variante Agropanel para granjas y ambientes corrosivos.",
  },
];

/** Comarcas / ciudades cubiertas, con enlace a la guía local cuando existe. */
const ZONES: { label: string; href?: string }[] = [
  { label: "Badajoz", href: "/sobre-nosotros/panel-sandwich-extremadura-badajoz" },
  { label: "Cáceres", href: "/sobre-nosotros/panel-sandwich-en-caceres" },
  { label: "Mérida", href: "/sobre-nosotros/panel-sandwich-en-merida" },
  { label: "Plasencia", href: "/sobre-nosotros/panel-sandwich-en-plasencia" },
  { label: "Don Benito y Villanueva", href: "/sobre-nosotros/panel-sandwich-en-don-benito-y-villanueva" },
  { label: "Almendralejo y Zafra", href: "/sobre-nosotros/panel-sandwich-en-almendralejo-y-zafra" },
  { label: "Navalmoral de la Mata" },
  { label: "Trujillo" },
  { label: "Coria" },
  { label: "Villafranca de los Barros" },
  { label: "Jerez de los Caballeros" },
  { label: "Azuaga" },
];

const PRODUCTS: { title: string; href: string; body: string }[] = [
  {
    title: "Panel sándwich de cubierta",
    href: "/productos/panel-cubierta-gris",
    body: "Cubiertas de nave industrial, agrícola y ganadera. Núcleo de poliuretano en 30 y 100 mm, grecas que evacúan el agua y corte a medida hasta 14 m.",
  },
  {
    title: "Panel imitación teja Fertelha",
    href: "/productos/fertelha-terracota",
    body: "La estética de la teja cerámica con el aislamiento del panel. Ideal para vivienda, casas de campo y rehabilitación de tejados en entornos rurales de Extremadura.",
  },
  {
    title: "Panel sándwich de fachada",
    href: "/productos/panel-fachada-nervada",
    body: "Cerramientos verticales nervados o microperfilados, con fijación vista u oculta. Aislamiento continuo para naves, talleres y oficinas.",
  },
  {
    title: "Chapa perfilada y policarbonato",
    href: "/productos/policarbonato-celular",
    body: "Chapa grecada para cerramientos económicos y policarbonato para lucernarios y zonas de luz natural, con todos los remates a juego.",
  },
];

export default function PanelSandwichExtremaduraPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessLd(),
          faqLd(FAQS),
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: "Panel sándwich en Extremadura", path: "/panel-sandwich-extremadura" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Fabricantes en Extremadura
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Panel sándwich en Extremadura,
            <br />
            <span className="text-white/60">directo de fábrica.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Panelex es una fábrica de <strong>panel sándwich y chapa perfilada en
            Extremadura</strong>, en Puebla de la Calzada (Badajoz). Vendemos
            directo de fábrica a toda la región —Badajoz, Cáceres, Mérida,
            Plasencia, Don Benito…— con corte a medida, precio sin intermediarios
            y transporte a tu obra.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Pedir presupuesto
            </a>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué fábrica local */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Por qué comprar a una fábrica extremeña
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              La fábrica está aquí. El precio y los plazos lo notan.
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 leading-relaxed text-[var(--color-text)]">
              <p>
                La mayoría de fabricantes de panel sándwich de España están en el
                norte y el levante. Eso deja a Extremadura lejos de fábrica, con
                portes caros y plazos largos. Panelex nació para cubrir ese hueco:
                fabricamos <strong>panel sándwich en Extremadura</strong>, en
                Puebla de la Calzada, a pie de la autovía A-5 Madrid–Lisboa y a
                media hora de la frontera portuguesa.
              </p>
              <p>
                Comprar a una fábrica local tiene consecuencias muy concretas en
                tu obra. El <strong>precio del panel sándwich</strong> sale sin
                márgenes de reventa. Cada panel se corta a la medida exacta de tu
                faldón o fachada, así que no pagas recortes que acaban en la
                basura. Y el transporte es corto, porque la fábrica está dentro de
                la región, no a 600 kilómetros.
              </p>
              <p>
                Además respondes siempre con quien fabrica el material. Si surge
                una duda técnica sobre espesores, solapes, remates o ambientes
                corrosivos, te la resuelve la fábrica, no un intermediario. Puedes
                incluso visitar la planta, ver el material antes de comprarlo y
                recoger pedidos pequeños si te corre prisa.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Benefit
                Icon={Wallet}
                title="Precio de fábrica"
                body="Sin intermediarios ni márgenes de reventa. El panel sale directo de la línea de producción a tu obra."
              />
              <Benefit
                Icon={Ruler}
                title="Corte a medida"
                body="Cada panel a la longitud exacta de tu faldón, sin mermas ni cortes en obra."
              />
              <Benefit
                Icon={Truck}
                title="Transporte corto"
                body="Estamos en Extremadura: el porte dentro de la región es más rápido y más barato."
              />
              <Benefit
                Icon={Factory}
                title="Hablas con fábrica"
                body="Asesoramiento técnico real de quien produce el panel, no de un revendedor."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Dónde servimos
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Panel sándwich en toda Extremadura.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)]">
            Trabajamos a diario en las dos provincias extremeñas. Estas son
            algunas de las zonas que atendemos —y si tu pueblo no está en la
            lista, pregúntanos: llegamos a toda la región.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {ZONES.map((z) =>
              z.href ? (
                <Link
                  key={z.label}
                  href={z.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                  {z.label}
                </Link>
              ) : (
                <span
                  key={z.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                  {z.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Qué fabricamos */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Qué fabricamos
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Toda la gama, fabricada en Extremadura.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition hover:border-[var(--color-primary)]"
              >
                <h3 className="font-display text-xl font-semibold leading-snug">
                  <Link
                    href={p.href}
                    className="transition group-hover:text-[var(--color-primary)]"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]"
                >
                  Ver producto
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver catálogo completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aplicaciones en Extremadura */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Para qué se usa el panel sándwich en Extremadura
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-[var(--color-text)]">
                <p>
                  Extremadura es tierra de dehesa, regadío y agroindustria, y el
                  panel sándwich encaja en casi todas sus obras. En el campo
                  cubre <strong>naves agrícolas, almacenes de aperos, secaderos
                  de jamón, bodegas y explotaciones ganaderas</strong>, donde el
                  aislamiento marca la diferencia entre una nave que se cuece en
                  verano y otra en la que se puede trabajar y conservar producto.
                </p>
                <p>
                  En las granjas avícolas y porcinas, tan presentes en la región,
                  la variante <strong>Agropanel</strong> resuelve el problema del
                  amoniaco y las limpiezas a presión con una cara interior de
                  fibra de vidrio inmune a la corrosión. Y en los secaderos y las
                  bodegas de la Tierra de Barros, el control térmico continuo del
                  panel ayuda a mantener estables las condiciones de curado y
                  crianza.
                </p>
                <p>
                  En vivienda y rehabilitación, el protagonista es el{" "}
                  <Link
                    href="/productos/fertelha-terracota"
                    className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
                  >
                    panel imitación teja
                  </Link>
                  : sustituye tejados viejos de teja o fibrocemento sin obra
                  pesada, aligera la estructura y añade aislamiento donde antes no
                  había. Para naves industriales y talleres de los polígonos de
                  Mérida, Badajoz o Don Benito, el panel de cubierta y fachada es
                  el estándar.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Precio, presupuesto y entrega
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-[var(--color-text)]">
                <p>
                  El <strong>precio del panel sándwich en Extremadura</strong>{" "}
                  depende del espesor del núcleo, del grosor de la chapa, del
                  acabado y del transporte. Comprando a fábrica te ahorras el
                  margen de la distribución y el porte largo desde otras regiones,
                  que en un material tan voluminoso pesa mucho en el total.
                </p>
                <p>
                  Para darte un precio cerrado solo necesitamos las medidas de tu
                  cubierta o fachada (largo de faldón, ancho, pendiente), el
                  espesor y el color. Con eso preparamos un presupuesto con corte
                  a medida y porte incluido, normalmente el mismo día laborable.
                </p>
                <p>
                  La forma más rápida es el WhatsApp: nos mandas las medidas o
                  unas fotos y te respondemos. Si lo prefieres, en la página de{" "}
                  <Link
                    href="/contacto"
                    className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
                  >
                    contacto
                  </Link>{" "}
                  tienes teléfono, email y formulario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Panel sándwich en Extremadura: dudas habituales.
          </h2>

          <div className="mt-10 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 open:bg-white"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[var(--color-primary-deep)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            ¿Tienes una obra en Extremadura?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Pásanos las medidas y te preparamos un presupuesto cerrado, con corte
            a medida y transporte a tu obra, directo de fábrica desde Puebla de la
            Calzada (Badajoz).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Pedir presupuesto
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

function Benefit({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <Icon className="h-7 w-7 text-[var(--color-primary)]" />
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{body}</p>
    </article>
  );
}
