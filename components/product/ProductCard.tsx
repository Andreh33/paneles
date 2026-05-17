import Link from "next/link";
import { ArrowUpRight, Layers, Ruler } from "lucide-react";
import type { Product } from "@/lib/products";
import { getAvailableEspesores, ALL_CATEGORIES } from "@/lib/products";
import { ProductImage } from "./ProductImage";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const espesores = getAvailableEspesores(product);
  const espesorRange =
    espesores.length === 1
      ? `${espesores[0]} mm`
      : `${espesores[0]}–${espesores.at(-1)} mm`;
  const categoryLabel = ALL_CATEGORIES.find(
    (c) => c.value === product.category
  )?.label;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-xl hover:shadow-black/5">
      <Link
        href={`/productos/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver ficha de ${product.name}`}
      >
        <span className="sr-only">{product.name}</span>
      </Link>

      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <ProductImage
          product={product}
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {product.isAgropanel && (
          <span className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-deep)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Agropanel
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {categoryLabel}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-[var(--color-text)]">
            {product.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-[var(--color-primary)]">
            {product.code}
          </p>
        </div>

        <p className="line-clamp-2 text-sm text-[var(--color-muted)]">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--color-text)]">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-[var(--color-muted)]" aria-hidden />
            <span className="font-mono">
              <span className="sr-only">Espesores: </span>
              {espesorRange}
            </span>
          </div>
          {product.widthUseful && product.widthUseful > 0 && (
            <div className="flex items-center gap-1.5">
              <Ruler className="h-3.5 w-3.5 text-[var(--color-muted)]" aria-hidden />
              <span className="font-mono">
                <span className="sr-only">Ancho útil: </span>
                {product.widthUseful} mm
              </span>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-4">
          <span className="text-xs font-semibold text-[var(--color-primary)]">
            Ver ficha técnica
          </span>
          <span className="relative z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
