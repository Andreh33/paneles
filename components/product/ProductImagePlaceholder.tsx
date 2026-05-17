/**
 * Placeholder SVG por categoría/subtipo de producto.
 * Se usa hasta que la tarea #4 extraiga los renders 3D del PDF.
 * Cada categoría tiene una silueta característica: greca trapezoidal,
 * imitación teja, ondulada, etc.
 */
import type { Product } from "@/lib/products";

interface Props {
  product: Pick<Product, "category" | "subtype" | "code">;
  className?: string;
}

export function ProductImagePlaceholder({ product, className = "" }: Props) {
  const palette = paletteFor(product.category);

  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      role="img"
      aria-label={`Render esquemático del producto ${product.code}`}
    >
      <defs>
        <linearGradient id={`grad-${product.code}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.bgTop} />
          <stop offset="100%" stopColor={palette.bgBottom} />
        </linearGradient>
        <linearGradient
          id={`metal-${product.code}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#d4d4dc" />
          <stop offset="40%" stopColor="#f0f0f5" />
          <stop offset="100%" stopColor="#b8b8c4" />
        </linearGradient>
      </defs>

      <rect width="400" height="280" fill={`url(#grad-${product.code})`} />

      <g transform="translate(0, 50)">
        <SilhouetteFor product={product} code={product.code} />
      </g>

      {/* Etiqueta código en esquina */}
      <text
        x="20"
        y="260"
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        fill={palette.label}
        letterSpacing="2"
      >
        {product.code}
      </text>
    </svg>
  );
}

function paletteFor(category: Product["category"]) {
  switch (category) {
    case "cubierta":
      return { bgTop: "#2d2c66", bgBottom: "#1e1d4a", label: "#7d7cc4" };
    case "fachada":
      return { bgTop: "#252620", bgBottom: "#16170f", label: "#a8a89c" };
    case "chapa-perfilada":
      return { bgTop: "#1a1a1f", bgBottom: "#0a0a0e", label: "#888899" };
    case "accesorio":
      return { bgTop: "#a85608", bgBottom: "#5e3104", label: "#f4a04e" };
  }
}

function SilhouetteFor({
  product,
  code,
}: {
  product: Pick<Product, "category" | "subtype">;
  code: string;
}) {
  const gradId = `metal-${code}`;

  if (product.category === "accesorio") {
    // Pieza angular típica de remate
    return (
      <g>
        <path
          d="M 60 120 L 200 60 L 340 120 L 340 160 L 200 100 L 60 160 Z"
          fill={`url(#${gradId})`}
          stroke="#444"
          strokeWidth="0.5"
        />
      </g>
    );
  }

  if (product.subtype === "imitacion-teja") {
    // Ondulación tipo teja
    const wave = "M 30 130 ";
    const path =
      wave +
      Array.from({ length: 6 })
        .map((_, i) => {
          const x = 30 + i * 60;
          return `Q ${x + 15} 90, ${x + 30} 130 Q ${x + 45} 170, ${x + 60} 130`;
        })
        .join(" ") +
      " L 390 160 L 30 160 Z";
    return (
      <g>
        <path
          d={path}
          fill={`url(#${gradId})`}
          stroke="#666"
          strokeWidth="0.8"
        />
      </g>
    );
  }

  if (product.subtype === "ondulada") {
    // Onda continua estrecha
    let d = "M 20 140 ";
    for (let i = 0; i < 18; i++) {
      const x = 20 + i * 20;
      d += `Q ${x + 5} 120, ${x + 10} 140 Q ${x + 15} 160, ${x + 20} 140 `;
    }
    return (
      <g>
        <path
          d={d}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
    );
  }

  // Default: chapa con grecas trapezoidales (cubierta/fachada/chapa)
  // Variantes según subtipo
  const grecaCount =
    product.subtype === "cinco-grecas" ? 5 :
    product.subtype === "tres-grecas" ? 3 :
    product.subtype === "tapajuntas" ? 4 :
    product.subtype === "nervado-fijacion-vista" || product.subtype === "nervado-fijacion-oculta" ? 6 :
    5;

  const total = 360;
  const start = 20;
  const step = total / grecaCount;
  const grecaWidth = step * 0.35;
  const grecaHeight = 38;
  const baseY = 150;

  let path = `M ${start} ${baseY} `;
  for (let i = 0; i < grecaCount; i++) {
    const x = start + i * step;
    path += `L ${x + (step - grecaWidth) / 2} ${baseY} `;
    path += `L ${x + (step - grecaWidth) / 2 + grecaWidth * 0.2} ${baseY - grecaHeight} `;
    path += `L ${x + (step - grecaWidth) / 2 + grecaWidth * 0.8} ${baseY - grecaHeight} `;
    path += `L ${x + (step + grecaWidth) / 2} ${baseY} `;
  }
  path += `L ${start + total} ${baseY} L ${start + total} ${baseY + 20} L ${start} ${baseY + 20} Z`;

  return (
    <g>
      {/* Núcleo aislante (alusión a panel sándwich) */}
      {(product.category === "cubierta" || product.category === "fachada") && (
        <rect
          x={start}
          y={baseY}
          width={total}
          height={20}
          fill="#e8a87c"
          opacity="0.6"
        />
      )}
      <path
        d={path}
        fill={`url(#${gradId})`}
        stroke="#555"
        strokeWidth="0.6"
        strokeLinejoin="miter"
      />
    </g>
  );
}
