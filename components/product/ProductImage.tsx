/**
 * Imagen de producto: usa el render real extraído del PDF
 * (public/products/<slug>.png) con next/image. Si el archivo no existe,
 * cae al placeholder SVG generativo de ProductImagePlaceholder.
 *
 * Hoy todas las 16 fichas tienen render real (tarea #4).
 */
import Image from "next/image";
import type { Product } from "@/lib/products";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

interface Props {
  product: Pick<Product, "image" | "name" | "code" | "category" | "subtype">;
  /** Pásalo a true en hero/LCP del producto activo */
  priority?: boolean;
  /** Tailwind sizes hint para que next/image elija la mejor resolución */
  sizes?: string;
  className?: string;
}

export function ProductImage({ product, priority, sizes, className }: Props) {
  if (!product.image) {
    return <ProductImagePlaceholder product={product} className={className} />;
  }

  return (
    <Image
      src={product.image}
      alt={`Render 3D de ${product.name} (${product.code})`}
      fill
      sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
      priority={priority}
      className={`object-contain ${className ?? ""}`}
    />
  );
}
