import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Factory,
  Leaf,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, faqLd, organizationLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Sobre nosotros — Fábrica de panel sándwich en Badajoz",
  description:
    "Panelex S.L., fabricantes de panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz). Venta directa de fábrica a toda España y Portugal. Historia, equipo, certificados y blog técnico.",
  keywords: [
    "fábrica panel sándwich",
    "panel sándwich Badajoz",
    "panel sándwich Extremadura",
    "fabricantes panel sándwich España",
    "chapa perfilada Badajoz",
  ],
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Panelex — Fábrica de panel sándwich en Badajoz",
    description:
      "Fabricación propia de panel sándwich y chapa perfilada. Venta directa de fábrica a toda España y Portugal.",
    type: "website",
  },
};

/** Preguntas frecuentes — también se emiten como FAQPage en JSON-LD. */
const FAQS: FaqItem[] = [
  {
    question: "¿Panelex fabrica el panel sándwich o lo revende?",
    answer:
      "Lo fabricamos. Panelex S.L. produce panel sándwich y chapa perfilada en su planta de Puebla de la Calzada (Badajoz). Vendemos directamente de fábrica, sin intermediarios, con corte a medida para cada proyecto.",
  },
  {
    question: "¿Hacéis envíos de panel sándwich a toda España?",
    answer:
      "Sí. Servimos a diario en Extremadura y Andalucía occidental y organizamos transporte a cualquier punto de España y Portugal. El porte se incluye en el presupuesto, calculado según el volumen del pedido y el destino de la obra.",
  },
  {
    question: "¿Puedo comprar panel sándwich siendo particular?",
    answer:
      "Por supuesto. Trabajamos tanto con empresas constructoras e instaladores como con particulares que cubren un garaje, un porche o una vivienda. El proceso es el mismo: nos pasas las medidas por WhatsApp o teléfono y te preparamos un presupuesto cerrado.",
  },
  {
    question: "¿Cortáis los paneles a medida?",
    answer:
      "Sí, cada panel sale de fábrica con la longitud exacta que pide tu cubierta o fachada. En la gama imitación teja (Fertelha) el corte se realiza en múltiplos de 350 mm, desde 1.050 mm hasta 14.000 mm, para respetar el paso de teja.",
  },
  {
    question: "¿Cuánto tarda un presupuesto de panel sándwich?",
    answer:
      "Con las medidas claras (largo de faldones, ancho de cubierta, espesor deseado), normalmente respondemos el mismo día laborable. Puedes enviarlas por WhatsApp, por teléfono o con el formulario de contacto de la web.",
  },
  {
    question: "¿Qué productos fabrica Panelex?",
    answer:
      "Panel sándwich de cubierta (incluida la gama imitación teja Fertelha en terracota, chocolate y gris), panel sándwich de fachada con fijación vista u oculta, chapa perfilada galvanizada y prelacada, policarbonato celular y accesorios de remate a juego.",
  },
];

/** Zonas de servicio destacadas — texto orientado a búsquedas locales. */
const SERVICE_AREAS = [
  "Badajoz",
  "Cáceres",
  "Mérida",
  "Sevilla",
  "Huelva",
  "Córdoba",
  "Madrid",
  "Toledo",
  "Ciudad Real",
  "Salamanca",
  "Évora (Portugal)",
  "Portalegre (Portugal)",
];

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function SobreNosotrosPage() {
  /** Blog ordenado por fecha (lo más reciente primero) para mejor UX y SEO. */
  const sortedPosts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <JsonLd
        data={[
          organizationLd(),
          faqLd(FAQS),
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: "Sobre nosotros", path: "/sobre-nosotros" },
          ]),
        ]}
      />

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
        </div>
      </section>

      {/* Qué fabricamos — texto SEO */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Qué fabricamos
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Panel sándwich, chapa perfilada y todos sus remates.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-[var(--color-border)] bg-white p-7">
              <Factory className="h-7 w-7 text-[var(--color-primary)]" />
              <h3 className="mt-5 font-display text-xl font-semibold">
                Panel sándwich de cubierta
              </h3>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Paneles de cubierta con núcleo de poliuretano en espesores de
                30 a 100 mm, incluida la gama imitación teja Fertelha en
                terracota, chocolate y gris. Corte a medida en fábrica, sin
                mermas en obra. La opción estándar para naves industriales,
                agrícolas, viviendas y rehabilitación de tejados.
              </p>
            </article>
            <article className="rounded-3xl border border-[var(--color-border)] bg-white p-7">
              <Ruler className="h-7 w-7 text-[var(--color-primary)]" />
              <h3 className="mt-5 font-display text-xl font-semibold">
                Panel sándwich de fachada
              </h3>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Cerramientos verticales con acabado nervado o microperfilado y
                fijación vista u oculta. Aislamiento térmico continuo y un
                acabado arquitectónico que funciona igual de bien en una nave
                logística que en unas oficinas a pie de calle.
              </p>
            </article>
            <article className="rounded-3xl border border-[var(--color-border)] bg-white p-7">
              <Truck className="h-7 w-7 text-[var(--color-primary)]" />
              <h3 className="mt-5 font-display text-xl font-semibold">
                Chapa perfilada y accesorios
              </h3>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Chapa grecada galvanizada y prelacada en espesores de 0,4 a
                0,6 mm, policarbonato celular para lucernarios y todos los
                remates a juego: cumbreras, limatesas, canalones y remates
                laterales. Todo sale de la misma fábrica y viaja en el mismo
                camión.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver catálogo completo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--color-primary)]"
            >
              Ver proyectos realizados
            </Link>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-white">
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

      {/* Zonas de servicio — SEO local */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Dónde trabajamos
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Fábrica en Badajoz. Servicio en toda España y Portugal.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[var(--color-text)]">
              <p>
                Nuestra planta está en Puebla de la Calzada (Badajoz), a pie de
                la autovía A-5 Madrid–Lisboa y a media hora de la frontera
                portuguesa. Esa posición nos convierte en la fábrica de panel
                sándwich de referencia para el suroeste peninsular: Extremadura,
                Andalucía occidental y el Alentejo.
              </p>
              <p>
                Trabajamos a diario en las provincias de Badajoz y Cáceres y
                servimos con frecuencia obras en Sevilla, Huelva, Córdoba,
                Madrid, Toledo y Ciudad Real. Para el resto de España
                organizamos transporte completo o agrupado según el volumen del
                pedido, siempre con el porte cerrado en el presupuesto.
              </p>
              <p>
                En Portugal atendemos habitualmente el Alentejo y la región de
                Lisboa, con la documentación de expedición gestionada desde
                fábrica. Si tu obra está cerca, también puedes visitarnos y
                recoger pedidos pequeños directamente en planta.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)]"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-[var(--color-muted)]">
                ¿Tu obra está en otra provincia? Pregúntanos: cotizamos el
                transporte a cualquier punto de la península en el mismo
                presupuesto.
              </p>
            </div>
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
        </div>
      </section>

      {/* Blog técnico */}
      <section id="blog" className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Blog técnico
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Lo que aprendemos en fábrica, contado en claro.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)]">
            Guías sobre panel sándwich, chapa perfilada, aislamiento y montaje
            escritas por quienes fabrican el material. Sin humo comercial: lo
            que le contaríamos a un cliente por teléfono.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-3xl border border-[var(--color-border)] bg-white p-7 transition hover:border-[var(--color-primary)]"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 font-mono uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>{post.readingMinutes} min</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                  <Link
                    href={`/sobre-nosotros/${post.slug}`}
                    className="transition group-hover:text-[var(--color-primary)]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm text-[var(--color-muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <time dateTime={post.date}>
                    {dateFormatter.format(new Date(post.date))}
                  </time>
                  <Link
                    href={`/sobre-nosotros/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)]"
                    aria-label={`Leer: ${post.title}`}
                  >
                    Leer
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — SEO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Lo que nos preguntan antes de comprar.
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

          <p className="mt-8 text-sm text-[var(--color-muted)]">
            ¿Otra duda? Escríbenos por{" "}
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
            >
              WhatsApp
            </a>{" "}
            o llámanos al{" "}
            <a
              href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
              className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
            >
              {SITE.contact.phone}
            </a>
            . Atendemos de lunes a viernes, de 9:00 a 14:00.
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
