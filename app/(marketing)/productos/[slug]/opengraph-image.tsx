import { ImageResponse } from "next/og";
import {
  ALL_CATEGORIES,
  PRODUCTS,
  getProductBySlug,
} from "@/lib/products";

export const alt = "Producto Panelex";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return new Response("Not found", { status: 404 });

  const categoryLabel =
    ALL_CATEGORIES.find((c) => c.value === product.category)?.label ??
    product.category;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #1E1D4A 0%, #2D2C66 50%, #252620 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: marca + categoría */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="48" height="48" viewBox="0 0 40 40">
            <polygon points="20,4 4,36 20,36" fill="#4D4C92" />
            <polygon points="20,4 36,36 20,36" fill="#E37C17" />
            <rect x="6" y="34" width="28" height="2" fill="#4D4C92" />
          </svg>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            PANELEX
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#F4A04E",
            }}
          >
            {categoryLabel}
          </span>
        </div>

        {/* Body: código + nombre */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              color: "#7D7CC4",
              letterSpacing: "0.05em",
            }}
          >
            {product.code}
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            {product.name}
          </span>
          {product.isAgropanel && (
            <div
              style={{
                marginTop: 12,
                display: "flex",
                alignSelf: "flex-start",
                background: "#E37C17",
                color: "white",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 18,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Agropanel disponible
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>Fabricantes de panel sándwich · Puebla de la Calzada</span>
          <span style={{ color: "#F4A04E", fontWeight: 600 }}>panelex.es</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
