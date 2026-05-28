"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

interface Props {
  product: Product;
}

/**
 * Galería de la ficha de producto.
 * - Si el producto tiene `colors`, muestra el selector de colores y la imagen
 *   activa cambia al pulsar cada chip.
 * - Si no, muestra la imagen principal sin selector.
 */
export function ProductGallery({ product }: Props) {
  const [activeColor, setActiveColor] = useState(
    product.colors?.[0]?.slug ?? null
  );

  const colors = product.colors;
  const activeImage =
    colors?.find((c) => c.slug === activeColor)?.image ?? product.image;
  const activeColorLabel = colors?.find((c) => c.slug === activeColor)?.label;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white">
        {activeImage ? (
          <Image
            key={activeImage}
            src={activeImage}
            alt={
              activeColorLabel
                ? `${product.name} — color ${activeColorLabel}`
                : `Render 3D de ${product.name} (${product.code})`
            }
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-contain"
          />
        ) : (
          <ProductImagePlaceholder product={product} />
        )}
        {product.isAgropanel && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-deep)] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Agropanel disponible
          </span>
        )}
      </div>

      {colors && colors.length > 0 && (
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Color · {activeColorLabel}
          </p>
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {colors.map((c) => {
              const isActive = c.slug === activeColor;
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Ver color ${c.label}`}
                  onClick={() => setActiveColor(c.slug)}
                  className={[
                    "group relative aspect-square overflow-hidden rounded-xl border transition",
                    isActive
                      ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/30"
                      : "border-[var(--color-border)] hover:border-[var(--color-primary)]",
                  ].join(" ")}
                  title={c.label}
                >
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
