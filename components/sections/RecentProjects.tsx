import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS, PROJECT_SECTORS } from "@/lib/projects";

/**
 * Galería tipo masonry de obras recientes (home).
 * Selecciona los 6 primeros del catálogo de proyectos y los pinta con
 * spans alternados (2 grandes + 4 pequeños) para romper la cuadrícula.
 *
 * Fotografía: placeholders IA en /public/projects/ — se sustituyen por
 * fotos reales cuando el cliente las aporte (TODO_FOTOS.md).
 */
const SPANS: Record<number, 1 | 2> = { 0: 2, 1: 1, 2: 1, 3: 2, 4: 1, 5: 1 };

export function RecentProjects() {
  const featured = PROJECTS.slice(0, 6);

  return (
    <section className="bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Proyectos
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Obras recientes.
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Ver todos los proyectos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((p, idx) => {
            const span = SPANS[idx] ?? 1;
            const sectorLabel =
              PROJECT_SECTORS.find((s) => s.value === p.sector)?.label ?? p.sector;
            return (
              <article
                key={p.id}
                className={[
                  "group relative overflow-hidden rounded-3xl",
                  span === 2 ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <Image
                  src={p.image}
                  alt={`${p.name} (${p.location})`}
                  fill
                  sizes={
                    span === 2
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, 100vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay degradado para contraste del texto */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                />
                <div className="relative flex aspect-[4/3] flex-col justify-end p-6 text-white md:aspect-auto md:min-h-[300px] md:p-8">
                  <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/60" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-soft)]">
                    {sectorLabel} · {p.squareMeters.toLocaleString("es-ES")} m²
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-tight md:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/85">
                    <MapPin className="h-3 w-3" />
                    {p.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
          Fotografías de referencia, no obras reales. Se sustituyen por
          imágenes de proyectos cuando el cliente las aporte.
        </p>
      </div>
    </section>
  );
}
