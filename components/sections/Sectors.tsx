import Image from "next/image";
import { Factory, Tractor, Home, Boxes } from "lucide-react";

const SECTORS = [
  {
    id: "industrial",
    label: "Industrial",
    description:
      "Panel sándwich de cubierta y fachada para naves industriales, talleres y polígonos. Aislamiento continuo, montaje rápido sobre correa y marcado CE en toda la gama.",
    Icon: Factory,
    image: "/sectors/industrial.webp",
  },
  {
    id: "agricola",
    label: "Agrícola",
    description:
      "Granjas, secaderos y almacenes agrícolas. Con la variante Agropanel: cara interior de fibra de vidrio resistente al amoniaco y al lavado a presión.",
    Icon: Tractor,
    image: "/sectors/agricola.webp",
  },
  {
    id: "residencial",
    label: "Residencial",
    description:
      "Vivienda unifamiliar, porches y rehabilitación de tejados con panel imitación teja Fertelha: estética cerámica, peso mínimo y aislamiento desde el primer día.",
    Icon: Home,
    image: "/sectors/residencial.webp",
  },
  {
    id: "logistica",
    label: "Logística",
    description:
      "Centros logísticos y almacenes de gran luz. Paneles de hasta 14 metros cortados a medida en fábrica para cubrir grandes superficies sin solapes.",
    Icon: Boxes,
    image: "/sectors/logistica.webp",
  },
];

export function Sectors() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Sectores
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Para cualquier obra,
            <br />
            en cualquier sector.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-3xl text-white transition-transform hover:-translate-y-1"
            >
              <Image
                src={s.image}
                alt={`Sector ${s.label.toLowerCase()}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay para contraste */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"
              />
              <div className="relative flex h-80 flex-col justify-between p-6">
                <s.Icon className="h-9 w-9 text-[var(--color-accent-soft)]" />
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{s.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
