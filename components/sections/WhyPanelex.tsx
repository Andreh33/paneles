import { Factory, Headset, ShieldCheck, Truck } from "lucide-react";

const VALUES = [
  {
    Icon: Factory,
    title: "Fabricación propia",
    body: "Sin intermediarios: hablas con quien produce y planificas con quien fabrica.",
  },
  {
    Icon: Headset,
    title: "Asesoramiento técnico",
    body: "Te ayudamos a elegir espesor, perfil y acabado según el uso y la normativa de tu obra.",
  },
  {
    Icon: ShieldCheck,
    title: "Cumplimiento normativo",
    body: "Marcado CE, ETA y clasificación de reacción al fuego en toda la gama.",
  },
  {
    Icon: Truck,
    title: "Entrega rápida",
    body: "Logística propia en toda la península y Portugal con plazos competitivos.",
  },
];

export function WhyPanelex() {
  return (
    <section className="bg-[var(--color-bg)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent-soft)]">
            Por qué Panelex
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Una fábrica seria
            <br />
            que entiende lo que hace.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article
              key={v.title}
              className="flex flex-col gap-6 bg-[var(--color-bg)] p-8 transition hover:bg-[var(--color-primary-deep)]/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                <v.Icon className="h-5 w-5 text-[var(--color-accent-soft)]" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-white/60">{v.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
