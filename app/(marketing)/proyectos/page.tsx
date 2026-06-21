import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  PROJECTS,
  PROJECT_SECTORS,
  type ProjectSector,
} from "@/lib/projects";
import { getProductBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Obras representativas en las que Panelex ha suministrado panel sándwich y chapa perfilada. Naves industriales, agrícolas, logística y residencial.",
  alternates: { canonical: "/proyectos" },
};

type SearchParams = Promise<{ sector?: string }>;

export default async function ProyectosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const validSectors = new Set<string>(PROJECT_SECTORS.map((s) => s.value));
  const activeSector = sp.sector && validSectors.has(sp.sector) ? (sp.sector as ProjectSector) : null;

  const filtered = activeSector
    ? PROJECTS.filter((p) => p.sector === activeSector)
    : PROJECTS;

  return (
    <>
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Proyectos · {PROJECTS.length} obras
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Obras donde se ven
            <br />
            nuestros paneles.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Una selección de obras ejecutadas en Extremadura, Castilla y León y
            Portugal: naves industriales, viviendas con teja imitación, carports
            translúcidos y cerramientos.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          {/* Filtros por sector */}
          <div
            role="tablist"
            aria-label="Filtrar por sector"
            className="mb-10 flex flex-wrap gap-2"
          >
            <FilterChip href="/proyectos" active={!activeSector}>
              Todos ({PROJECTS.length})
            </FilterChip>
            {PROJECT_SECTORS.map((s) => {
              const count = PROJECTS.filter((p) => p.sector === s.value).length;
              return (
                <FilterChip
                  key={s.value}
                  href={`/proyectos?sector=${s.value}`}
                  active={activeSector === s.value}
                >
                  {s.label} ({count})
                </FilterChip>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-white p-12 text-center text-[var(--color-muted)]">
              No hay proyectos para este filtro.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Texto SEO: tipos de obra, zonas y venta de fábrica */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Experiencia en obra
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--color-text)] md:text-4xl">
              Panel sándwich y chapa para cada tipo de proyecto
            </h2>
            <p className="mt-6 text-[var(--color-muted)]">
              A lo largo de los años hemos suministrado material para obras muy
              distintas, y esa variedad es la mejor garantía de que sabemos qué
              solución encaja en cada caso. En{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                naves industriales y logísticas
              </strong>{" "}
              el panel sándwich de cubierta y fachada resuelve grandes superficies
              con un aislamiento continuo y un montaje rápido. En el ámbito{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                agrícola y ganadero
              </strong>{" "}
              trabajamos a diario con chapa perfilada y paneles para almacenes,
              cobertizos, granjas y cierres, donde priman la durabilidad y el coste
              ajustado.
            </p>
            <p className="mt-4 text-[var(--color-muted)]">
              En{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                vivienda
              </strong>{" "}
              y obra residencial, el panel imitación teja permite cubiertas que
              parecen tejado tradicional pero se montan en una pieza y aíslan desde
              el primer día. Y en{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                rehabilitación
              </strong>{" "}
              de cubiertas antiguas, sustituir uralita o fibrocemento por panel
              sándwich mejora el confort térmico y la estanqueidad sin cargar en
              exceso la estructura existente.
            </p>
            <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--color-text)]">
              Servimos en Extremadura, Andalucía y Portugal
            </h3>
            <p className="mt-4 text-[var(--color-muted)]">
              Desde nuestra fábrica en Puebla de la Calzada (Badajoz) damos servicio
              a toda España y Portugal. Tenemos una presencia especialmente fuerte en{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                Extremadura
              </strong>
              , en{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                Andalucía
              </strong>{" "}
              y en el{" "}
              <strong className="font-semibold text-[var(--color-text)]">
                Alentejo portugués
              </strong>
              , zonas en las que conocemos bien el clima, el tipo de explotación y las
              necesidades de cada obra. La cercanía a estas regiones nos permite
              ajustar plazos de entrega y acompañar mejor cada proyecto, sea una nave
              de miles de metros o la cubierta de una vivienda unifamiliar.
            </p>
            <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--color-text)]">
              Por qué comprar directamente de fábrica
            </h3>
            <p className="mt-4 text-[var(--color-muted)]">
              Comprar a Panelex significa comprar al fabricante, sin intermediarios.
              Cortamos cada pieza a medida, ajustamos el material a tu obra y te damos
              asesoramiento técnico directo, lo que se traduce en un mejor precio,
              menos residuos y un montaje más sencillo. Si estás planificando un
              proyecto parecido a los que ves en esta página, revisa toda la gama en{" "}
              <Link
                href="/productos"
                className="font-semibold text-[var(--color-text)] underline-offset-4 hover:underline"
              >
                productos
              </Link>{" "}
              y pídenos presupuesto sin compromiso desde la página de{" "}
              <Link
                href="/contacto"
                className="font-semibold text-[var(--color-text)] underline-offset-4 hover:underline"
              >
                contacto
              </Link>
              . También puedes conocer mejor la fábrica y nuestra forma de trabajar en{" "}
              <Link
                href="/sobre-nosotros"
                className="font-semibold text-[var(--color-text)] underline-offset-4 hover:underline"
              >
                sobre nosotros
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-pressed={active}
      className={[
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
          : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const sectorLabel = PROJECT_SECTORS.find((s) => s.value === project.sector)?.label;
  const products = project.productSlugs
    .map(getProductBySlug)
    .filter((p): p is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(p));

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl text-white">
      <div className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden p-7">
        <Image
          src={project.image}
          alt={`${project.name} (${project.location})`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        />
        <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/70" />
        <div className="relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-soft)]">
            {sectorLabel} · {project.year} · {project.squareMeters.toLocaleString("es-ES")} m²
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-tight md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/85">
            <MapPin className="h-3 w-3" />
            {project.location}
          </p>
        </div>
      </div>
      {products.length > 0 && (
        <div className="border-t border-white/10 bg-[var(--color-bg-warm)] p-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/70">
            Productos usados
          </p>
          <ul className="flex flex-wrap gap-2">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/productos/${p.slug}`}
                  className="font-mono text-xs text-white/90 underline-offset-4 hover:text-white hover:underline"
                >
                  {p.code}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
