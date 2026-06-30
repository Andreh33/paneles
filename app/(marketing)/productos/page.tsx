import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ALL_CATEGORIES,
  PRODUCTS,
  type Product,
  type ProductCategory,
  getAvailableEspesores,
} from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Catálogo completo de paneles sándwich Panelex (cubierta y fachada), chapa perfilada y accesorios. Configura tu pedido y pide presupuesto por WhatsApp.",
  alternates: { canonical: "/productos" },
};

type SearchParams = Promise<{
  categoria?: string;
  espesor?: string;
  agropanel?: string;
}>;

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const filters = parseFilters(sp);
  const filtered = applyFilters(PRODUCTS, filters);

  /** Espesores únicos de todo el catálogo, para los chips del filtro */
  const allEspesores = uniqueEspesores(PRODUCTS);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: "Productos", path: "/productos" },
          ]),
        ]}
      />
      {/* Hero compacto */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Catálogo · {PRODUCTS.length} productos
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Panel sándwich y chapa perfilada.
            <br />
            <span className="text-white/60">Fabricación propia.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Cubiertas, fachadas y chapa perfilada en todos los espesores y
            acabados. Configura el producto, añádelo a tu solicitud y envíanos
            todo por WhatsApp para recibir presupuesto.
          </p>
        </div>
      </section>

      {/* Listado */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <Suspense fallback={<FiltersSkeleton />}>
              <ProductFilters availableEspesores={allEspesores} />
            </Suspense>

            <div>
              <div className="mb-6 flex items-end justify-between">
                <p
                  className="text-sm text-[var(--color-muted)]"
                  aria-live="polite"
                >
                  <span className="font-semibold text-[var(--color-text)]">
                    {filtered.length}
                  </span>{" "}
                  {filtered.length === 1 ? "producto" : "productos"}
                  {filters.activeCount > 0 && " coinciden con tus filtros"}
                </p>
              </div>

              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Texto SEO: gamas y servicio */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <div aria-hidden className="hidden lg:block" />
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Venta directa de fábrica
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--color-text)] md:text-4xl">
                Toda nuestra gama de panel sándwich y chapa perfilada
              </h2>
              <p className="mt-6 text-[var(--color-muted)]">
                En Panelex fabricamos en Puebla de la Calzada (Badajoz) y vendemos
                directamente de fábrica, sin intermediarios. Eso nos permite cortar
                cada pieza a la medida exacta de tu obra y ofrecerte el material al
                precio de fabricante. Nuestro catálogo cubre las necesidades más
                habituales de cubierta y cerramiento, tanto en proyectos
                industriales como agrícolas o residenciales.
              </p>
              <p className="mt-4 text-[var(--color-muted)]">
                El{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  panel sándwich de cubierta
                </strong>{" "}
                es nuestra referencia más demandada: aísla, impermeabiliza y se
                monta en una sola pieza, con greca vista o tapajuntas oculta. Para
                quien busca estética sin renunciar a las ventajas del sándwich,
                disponemos del panel{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  imitación teja Fertelha
                </strong>
                , ideal para viviendas, casas rurales y rehabilitaciones donde la
                cubierta tiene que integrarse en el entorno. En vertical, el{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  panel de fachada
                </strong>{" "}
                resuelve cerramientos limpios y bien aislados con juntas machihembradas.
              </p>
              <p className="mt-4 text-[var(--color-muted)]">
                Si tu obra no necesita aislamiento, la{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  chapa perfilada
                </strong>{" "}
                galvanizada o lacada es la opción más económica para cubiertas y
                cierres de naves, almacenes y construcciones agrícolas. Para zonas
                que requieren luz natural ofrecemos placas de{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  policarbonato
                </strong>{" "}
                celular y compacto, y completamos cada pedido con los{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  accesorios
                </strong>{" "}
                necesarios: remates, cumbreras, canalones, tornillería y juntas para
                que el montaje quede acabado y estanco.
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--color-text)]">
                Corte a medida, espesores y usos
              </h3>
              <p className="mt-4 text-[var(--color-muted)]">
                Cada panel se sirve en el espesor que mejor se ajusta a tu proyecto,
                desde soluciones ligeras para casetas y cerramientos hasta espesores
                mayores con un aislamiento térmico y acústico superior para naves,
                cámaras y viviendas. Te asesoramos sobre el espesor adecuado según la
                zona climática, el uso del edificio y la separación entre apoyos, de
                forma que aproveches el material sin sobredimensionar el pedido.
              </p>
              <p className="mt-4 text-[var(--color-muted)]">
                Cortamos a la longitud exacta que necesitas, así reduces despuntes,
                recortes y residuos en obra, y el montaje es más rápido. Servimos a
                toda España y Portugal, organizando el transporte hasta el pie de
                obra o el punto de descarga que nos indiques.
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--color-text)]">
                Cómo pedir presupuesto
              </h3>
              <p className="mt-4 text-[var(--color-muted)]">
                Configura los productos que te interesan en este catálogo, indícanos
                medidas y cantidades y nos lo envías por WhatsApp. Te preparamos un
                presupuesto sin compromiso, con el material a medida y los plazos de
                fabricación y envío. Si tienes dudas sobre qué solución encaja mejor
                con tu obra, escríbenos desde la página de{" "}
                <a
                  href="/contacto"
                  className="font-semibold text-[var(--color-text)] underline-offset-4 hover:underline"
                >
                  contacto
                </a>{" "}
                o conoce más sobre la fábrica en{" "}
                <a
                  href="/sobre-nosotros"
                  className="font-semibold text-[var(--color-text)] underline-offset-4 hover:underline"
                >
                  sobre nosotros
                </a>
                . Trabajamos con particulares, instaladores, constructoras y
                explotaciones agrícolas, y damos el mismo trato directo a un pedido
                pequeño que a una nave completa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ----------------------------------------------------------------------------
// Filtros (lógica pura, fácil de testar)
// ----------------------------------------------------------------------------

interface Filters {
  categorias: ProductCategory[];
  espesores: number[];
  agropanelOnly: boolean;
  activeCount: number;
}

function parseFilters(sp: {
  categoria?: string;
  espesor?: string;
  agropanel?: string;
}): Filters {
  const validCategories = new Set<string>(ALL_CATEGORIES.map((c) => c.value));
  const categorias = (sp.categoria ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => validCategories.has(s)) as ProductCategory[];

  const espesores = (sp.espesor ?? "")
    .split(",")
    .map((s) => Number.parseInt(s, 10))
    .filter((n) => !Number.isNaN(n));

  const agropanelOnly = sp.agropanel === "1";

  return {
    categorias,
    espesores,
    agropanelOnly,
    activeCount: categorias.length + espesores.length + (agropanelOnly ? 1 : 0),
  };
}

function applyFilters(products: Product[], f: Filters): Product[] {
  return products.filter((p) => {
    if (f.categorias.length && !f.categorias.includes(p.category)) return false;
    if (f.agropanelOnly && !p.isAgropanel) return false;
    if (
      f.espesores.length &&
      !p.specs.some((s) => f.espesores.includes(s.espesorNominal))
    )
      return false;
    return true;
  });
}

function uniqueEspesores(products: Product[]): number[] {
  const set = new Set<number>();
  for (const p of products) {
    for (const s of p.specs) set.add(s.espesorNominal);
  }
  return [...set].sort((a, b) => a - b);
}

// ----------------------------------------------------------------------------
// UI auxiliar
// ----------------------------------------------------------------------------

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
      <p className="font-display text-2xl font-semibold text-[var(--color-text)]">
        Ningún producto coincide con tus filtros.
      </p>
      <p className="mt-3 text-sm text-[var(--color-muted)]">
        Prueba a relajar la selección o vuelve a ver el catálogo completo.
      </p>
    </div>
  );
}

function FiltersSkeleton() {
  return (
    <div className="h-96 animate-pulse rounded-2xl bg-white/40" aria-hidden />
  );
}
