import Link from "next/link";
import { ProductImage } from "@/components/product/ProductImage";
import { PtHero, PtContactCTA } from "@/components/portugal/Shared";
import { PT_PRODUCTS, portugueseMetadata } from "@/lib/portugal";
import { PT_CATEGORIES } from "@/lib/pt/products";
import type { ProductCategory } from "@/lib/products";

export const metadata = portugueseMetadata(
  "/pt/produtos",
  "Painel sandwich, Fertelha e policarbonato",
  "Catálogo Panelex para Portugal: painéis de cobertura e fachada, Fertelha, policarbonato e remates. Consulte medidas e peça um orçamento de fornecimento.",
);

export default function PtProducts() {
  return (
    <>
      <PtHero
        eyebrow={`Catálogo · ${PT_PRODUCTS.length} referências`}
        title="O material certo, com as medidas certas."
      >
        <p>
          Compare as famílias do catálogo. Em cada ficha encontra as combinações
          de espessura, chapa e peso da referência, partilhadas com o catálogo
          original.
        </p>
      </PtHero>
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <nav
          aria-label="Famílias de produtos"
          className="mb-12 flex flex-wrap gap-3"
        >
          {Object.entries(PT_CATEGORIES).map(([key, label]) => (
            <a
              key={key}
              href={`#${key}`}
              className="rounded-full border border-[var(--color-border)] px-5 py-3 font-semibold"
            >
              {label}
            </a>
          ))}
        </nav>
        {Object.entries(PT_CATEGORIES).map(([category, label]) => (
          <section key={category} id={category} className="mb-16 scroll-mt-40">
            <h2 className="mb-7 font-display text-3xl font-semibold">
              {label}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PT_PRODUCTS.filter(
                (p) => p.category === (category as ProductCategory),
              ).map((product) => (
                <article
                  key={product.slug}
                  className="overflow-hidden rounded-2xl border border-[var(--color-border)]"
                >
                  <Link
                    href={`/pt/produtos/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] bg-white">
                      <ProductImage
                        product={product}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-xs text-[var(--color-primary)]">
                        {product.code}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold group-hover:underline">
                        {product.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                        {product.description}
                      </p>
                      <p className="mt-5 font-semibold">Consultar ficha →</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <PtContactCTA />
    </>
  );
}
