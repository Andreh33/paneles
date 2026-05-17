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

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Catálogo completo de paneles sándwich Panelex (cubierta y fachada), chapa perfilada y accesorios. Configura tu pedido y pide presupuesto por WhatsApp.",
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
