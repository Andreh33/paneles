import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "@/lib/blog";

/**
 * Bloque editorial de la home pensado para posicionamiento orgánico:
 * texto largo rico en keywords (panel sándwich, imitación teja, chapa
 * perfilada, Badajoz/Extremadura, envíos a España y Portugal) con enlaces
 * internos al catálogo, a las categorías y al blog técnico.
 */

const FAMILIES = [
  {
    title: "Panel sándwich de cubierta",
    href: "/productos?categoria=cubierta",
    body: "Paneles de cubierta con núcleo de poliuretano en espesores de 30 a 100 mm y chapas de 0,3 a 0,5 mm. Grecas de 38-40 mm para evacuar el agua, machihembrado estanco y corte a medida en fábrica. Es la solución estándar para naves industriales, agrícolas y logísticas, garajes, cobertizos y rehabilitación de tejados.",
  },
  {
    title: "Panel imitación teja Fertelha",
    href: "/productos?categoria=cubierta",
    body: "Nuestro panel teja reproduce el perfil de la teja curva tradicional en terracota, chocolate y gris. Pesa una fracción de la cubierta cerámica, aísla desde el primer día y se corta en múltiplos de 350 mm (de 1.050 a 14.000 mm). El favorito para vivienda, casas de campo, porches y cualquier obra donde la estética manda.",
  },
  {
    title: "Panel sándwich de fachada",
    href: "/productos?categoria=fachada",
    body: "Cerramientos verticales con acabado nervado o microperfilado y fijación vista u oculta. Aislamiento térmico continuo, montaje rápido sobre estructura y un acabado arquitectónico que funciona igual en una nave que en unas oficinas a pie de calle.",
  },
  {
    title: "Chapa perfilada y accesorios",
    href: "/productos?categoria=accesorio",
    body: "Chapa grecada galvanizada y prelacada en espesores de 0,4 a 0,6 mm, policarbonato celular para lucernarios y todos los remates a juego: cumbreras, limatesas, canalones y remates laterales. Todo sale de la misma línea de fabricación y viaja en el mismo camión que tus paneles.",
  },
];

/** Posts destacados en la home (enlazado interno hacia el blog). */
const FEATURED_POST_SLUGS = [
  "que-es-el-panel-sandwich",
  "precio-panel-sandwich-m2",
  "que-espesor-de-panel-elegir",
  "panel-imitacion-teja-fertelha",
];

export function SeoContent() {
  const featuredPosts = FEATURED_POST_SLUGS.map((slug) =>
    POSTS.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        {/* Editorial principal */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Panel sándwich directo de fábrica
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Fábrica de panel sándwich en Badajoz.
            <br />
            Envíos a toda España y Portugal.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 leading-relaxed text-[var(--color-text)]">
            <p>
              Panelex es una <strong>fábrica de panel sándwich</strong> situada
              en Puebla de la Calzada (Badajoz), a pie de la autovía A-5
              Madrid–Lisboa. Fabricamos en planta propia{" "}
              <Link
                href="/productos?categoria=cubierta"
                className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              >
                panel sándwich de cubierta
              </Link>
              ,{" "}
              <Link
                href="/productos?categoria=fachada"
                className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              >
                panel de fachada
              </Link>
              , panel imitación teja, chapa perfilada y todos los accesorios de
              remate, y vendemos directamente a empresa y particular, sin
              intermediarios.
            </p>
            <p>
              Comprar directo de fábrica tiene tres ventajas que se notan en la
              obra: el <strong>precio del panel sándwich</strong> sale sin
              márgenes de reventa, cada panel se corta a la medida exacta de tu
              faldón o fachada (sin mermas ni cortes en obra) y cualquier duda
              técnica la responde quien ha fabricado el material. Toda la gama
              cuenta con marcado CE y clasificación de reacción al fuego según
              EN 13501-1.
            </p>
            <p>
              Trabajamos a diario en Extremadura —Badajoz, Cáceres, Mérida— y
              en Andalucía occidental, y organizamos transporte a cualquier
              punto de España y Portugal con el porte cerrado en el
              presupuesto. Nuestra cercanía a la frontera nos ha convertido en
              proveedor habitual de obras en el Alentejo portugués.
            </p>
            <p>
              ¿Cómo se pide? Eliges el panel en el{" "}
              <Link
                href="/productos"
                className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              >
                catálogo
              </Link>
              , configuras espesor, color y medidas, y nos lo envías por
              WhatsApp. Ramón te responde con un presupuesto cerrado en horas.
              Si prefieres hablarlo, en la página de{" "}
              <Link
                href="/contacto"
                className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              >
                contacto
              </Link>{" "}
              tienes teléfono, email y formulario.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {FAMILIES.map((f) => (
              <article
                key={f.title}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-primary)]"
              >
                <h3 className="font-display text-lg font-semibold leading-snug">
                  <Link
                    href={f.href}
                    className="transition group-hover:text-[var(--color-primary)]"
                  >
                    {f.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Guías del blog — enlazado interno */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Guías técnicas
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Aprende antes de comprar.
              </h3>
            </div>
            <Link
              href="/sobre-nosotros#blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
            >
              Ver todas las guías
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-3xl border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-primary)]"
              >
                <span className="self-start rounded-full bg-[var(--color-surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
                  {post.category}
                </span>
                <h4 className="mt-4 flex-1 font-display text-base font-semibold leading-snug">
                  <Link
                    href={`/sobre-nosotros/${post.slug}`}
                    className="transition group-hover:text-[var(--color-primary)]"
                  >
                    {post.title}
                  </Link>
                </h4>
                <Link
                  href={`/sobre-nosotros/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]"
                  aria-label={`Leer: ${post.title}`}
                >
                  Leer guía
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
