"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductImage } from "@/components/product/ProductImage";

interface Props {
  products: Product[];
}

/**
 * Carrusel horizontal con scroll-snap.
 * En desktop muestra flechas; en mobile el usuario hace swipe nativo.
 */
export function FeaturedCarousel({ products }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollBy(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Catálogo · selección
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Productos destacados.
          </h2>
        </div>

        <div className="hidden gap-2 md:flex">
          <CarouselButton
            label="Anterior"
            disabled={!canScrollLeft}
            onClick={() => scrollBy(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
          </CarouselButton>
          <CarouselButton
            label="Siguiente"
            disabled={!canScrollRight}
            onClick={() => scrollBy(1)}
          >
            <ArrowRight className="h-4 w-4" />
          </CarouselButton>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-0 md:px-0"
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/productos/${p.slug}`}
            data-card
            className="group relative flex w-[78vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-[var(--color-bg-warm)] text-white transition-transform hover:-translate-y-1 sm:w-[360px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <ProductImage
                product={p}
                sizes="(min-width: 640px) 360px, 78vw"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {p.isAgropanel && (
                <span className="absolute right-3 top-3 rounded-full bg-[var(--color-accent-deep)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Agropanel
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-soft)]">
                {p.code}
              </p>
              <h3 className="font-display text-lg font-semibold leading-tight">
                {p.name}
              </h3>
              <p className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-white/70 transition group-hover:text-white">
                Ver ficha
                <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-[var(--color-muted)] md:hidden">
        ← desliza para ver más →
      </p>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] disabled:opacity-30"
    >
      {children}
    </button>
  );
}
