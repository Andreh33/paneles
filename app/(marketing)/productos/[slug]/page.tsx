import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Factory } from "lucide-react";
import {
  ALL_CATEGORIES,
  PRODUCTS,
  getProductBySlug,
  getProductsByCategory,
} from "@/lib/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductTabs } from "@/components/product/ProductTabs";
import { ProductConfigurator } from "@/components/product/ProductConfigurator";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, productLd } from "@/lib/jsonld";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  return {
    title: `${product.name} (${product.code})`,
    description: product.description,
    openGraph: {
      title: `${product.name} · Panelex`,
      description: product.description,
      type: "website",
    },
    alternates: { canonical: `/productos/${product.slug}` },
  };
}

export default async function ProductPage({ params }: RouteParams) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel =
    ALL_CATEGORIES.find((c) => c.value === product.category)?.label ??
    product.category;
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const crumbs = [
    { label: "Inicio", path: "/" },
    { label: "Productos", path: "/productos" },
    { label: categoryLabel, path: `/productos?categoria=${product.category}` },
    { label: product.code, path: `/productos/${product.slug}` },
  ];

  return (
    <>
      <JsonLd data={[productLd(product), breadcrumbLd(crumbs)]} />
      {/* Breadcrumb */}
      <nav
        aria-label="Migas de pan"
        className="border-b border-[var(--color-border)] bg-white"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-4 text-xs text-[var(--color-muted)] md:px-8">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Inicio
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              href="/productos"
              className="hover:text-[var(--color-primary)]"
            >
              Productos
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              href={`/productos?categoria=${product.category}`}
              className="hover:text-[var(--color-primary)]"
            >
              {categoryLabel}
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-text)]">
            {product.code}
          </li>
        </ol>
      </nav>

      {/* Layout principal: 60/40 desktop */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            {/* Columna izquierda */}
            <div className="space-y-10">
              {/* Galería + selector de colores (si aplica) */}
              <ProductGallery product={product} />

              {/* Encabezado producto (visible solo en mobile, en desktop está a la derecha) */}
              <div className="lg:hidden">
                <ProductHeading product={product} categoryLabel={categoryLabel} />
              </div>

              {/* Tabs */}
              <ProductTabs product={product} />
            </div>

            {/* Columna derecha — sticky */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="hidden lg:mb-6 lg:block">
                <ProductHeading product={product} categoryLabel={categoryLabel} as="p" />
              </div>
              <ProductConfigurator product={product} />
            </aside>
          </div>
        </div>
      </section>

      {/* Productos relacionados */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  De la misma gama
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Otros {categoryLabel.toLowerCase()}
                </h2>
              </div>
              <Link
                href={`/productos?categoria=${product.category}`}
                className="hidden text-sm font-semibold text-[var(--color-primary)] hover:underline md:inline"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ProductHeading({
  product,
  categoryLabel,
  as = "h1",
}: {
  product: ReturnType<typeof getProductBySlug>;
  categoryLabel: string;
  as?: "h1" | "p";
}) {
  if (!product) return null;
  const titleClassName =
    "mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl";
  return (
    <header>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
        {categoryLabel}
      </p>
      {as === "h1" ? (
        <h1 className={titleClassName}>{product.name}</h1>
      ) : (
        <p role="heading" aria-level={1} className={titleClassName}>
          {product.name}
        </p>
      )}
      <p className="mt-3 font-mono text-sm font-semibold text-[var(--color-primary)]">
        {product.code}
      </p>
      <p className="mt-4 inline-flex items-center gap-2 text-xs text-[var(--color-muted)]">
        <Factory className="h-3.5 w-3.5" />
        Fabricado en Puebla de la Calzada, Badajoz
      </p>
    </header>
  );
}

