"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

interface Props {
  product: Product;
}

interface Slide {
  key: string;
  image: string;
  label: string;
  caption?: string;
}

/**
 * Galería de la ficha de producto:
 * - Render principal arriba
 * - Tira de acabados interiores (imitación madera) si aplica
 * - Tira de obras reales si aplica
 */
export function ProductGallery({ product }: Props) {
  const slides = useMemo<Slide[]>(() => {
    const out: Slide[] = [
      {
        key: "main",
        image: product.image,
        label: product.name,
      },
    ];
    for (const f of product.interiorFinishes ?? []) {
      if (f.realPhoto) {
        out.push({
          key: `interior:${f.slug}`,
          image: f.realPhoto,
          label: f.label,
          caption: `Acabado interior — ${f.label}`,
        });
      }
    }
    for (const img of product.realPhotos ?? []) {
      out.push({
        key: `real:${img}`,
        image: img,
        label: "Obra real",
        caption: "Foto en obra",
      });
    }
    return out;
  }, [product]);

  const [activeKey, setActiveKey] = useState<string>(slides[0]?.key ?? "main");
  const activeSlide = slides.find((s) => s.key === activeKey) ?? slides[0];
  const activeImage = activeSlide?.image ?? product.image;
  const activeCaption = activeSlide?.caption;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white">
        {activeImage ? (
          <Image
            key={activeImage}
            src={activeImage}
            alt={
              activeSlide
                ? `${product.name} — ${activeSlide.label}`
                : `${product.name} (${product.code})`
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
        {activeCaption && (
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            {activeCaption}
          </span>
        )}
      </div>

      {product.interiorFinishes && product.interiorFinishes.length > 0 && (
        <GalleryRow
          title="Acabado interior (intradós)"
          subtitle="Vista del panel desde abajo"
          items={product.interiorFinishes.map((f) => ({
            key: `interior:${f.slug}`,
            label: f.label,
            image: f.realPhoto ?? f.swatch,
            disabled: !f.realPhoto,
          }))}
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
      )}

      {product.realPhotos && product.realPhotos.length > 0 && (
        <GalleryRow
          title="Obras reales"
          items={product.realPhotos.map((img, i) => ({
            key: `real:${img}`,
            label: `Obra ${i + 1}`,
            image: img,
          }))}
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
      )}
    </div>
  );
}

interface RowItem {
  key: string;
  label: string;
  image: string;
  disabled?: boolean;
}

function GalleryRow({
  title,
  subtitle,
  items,
  activeKey,
  onSelect,
}: {
  title: string;
  subtitle?: string;
  items: RowItem[];
  activeKey: string | null;
  onSelect: (key: string) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
          {title}
        </p>
        {subtitle && (
          <p className="text-[10px] text-[var(--color-muted)]">{subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-6 gap-2 sm:gap-3">
        {items.map((it) => {
          const active = it.key === activeKey;
          return (
            <button
              key={it.key}
              type="button"
              aria-pressed={active}
              aria-label={it.label}
              onClick={() => !it.disabled && onSelect(it.key)}
              disabled={it.disabled}
              title={it.label}
              className={[
                "relative aspect-square overflow-hidden rounded-xl border transition",
                active
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/30"
                  : "border-[var(--color-border)] hover:border-[var(--color-primary)]",
                it.disabled ? "cursor-not-allowed opacity-50" : "",
              ].join(" ")}
            >
              <Image
                src={it.image}
                alt={it.label}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
