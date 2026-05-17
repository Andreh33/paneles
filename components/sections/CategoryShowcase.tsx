import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ALL_CATEGORIES, PRODUCTS } from "@/lib/products";

export function CategoryShowcase() {
  const categories = ALL_CATEGORIES.filter((c) => c.value !== "accesorio");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Catálogo
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Tres familias para
              <br />
              cualquier obra.
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Ver todo el catálogo →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((c, idx) => {
            const items = PRODUCTS.filter((p) => p.category === c.value);
            return (
              <Link
                key={c.value}
                href={`/productos?categoria=${c.value}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[var(--color-bg-warm)] p-8 text-white transition-all hover:bg-[var(--color-primary-deep)] md:min-h-[420px]"
              >
                {/* Big number on bg */}
                <span
                  aria-hidden
                  className="absolute -right-4 -top-6 font-display text-[12rem] font-bold leading-none text-white/[0.04] md:text-[16rem]"
                >
                  0{idx + 1}
                </span>

                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    {items.length} {items.length === 1 ? "producto" : "productos"}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
                    {c.label}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm text-white/70">
                    {DESCRIPTIONS[c.value]}
                  </p>
                </div>

                <div className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:text-white">
                  Ver gama
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const DESCRIPTIONS: Record<string, string> = {
  cubierta:
    "Paneles sándwich de cubierta en 9 espesores, 3 perfiles y opción Agropanel.",
  fachada:
    "Paneles de fachada con fijación vista u oculta, acabado nervado o microperforado.",
  "chapa-perfilada":
    "5 perfiles de chapa galvanizada para cubiertas, forrados y cerramientos.",
};
