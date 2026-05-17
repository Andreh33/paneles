/**
 * Marca Panelex.
 * Triángulo morado/naranja (hex extraídos del PDF) + texto en mayúsculas display.
 * Variante `dark` para fondos claros, `light` para fondos oscuros.
 */
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  withText?: boolean;
  className?: string;
}

export function Logo({ variant = "light", withText = true, className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[var(--color-primary-deep)]";

  return (
    <Link
      href="/"
      aria-label="Panelex · Inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 transition-transform group-hover:-translate-y-0.5" />
      {withText && (
        <span
          className={`font-display text-lg font-bold tracking-tight ${textColor}`}
        >
          PANELEX
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* Mitad morada (izq) y mitad naranja (der) — réplica del logo del catálogo */}
      <polygon points="20,4 4,36 20,36" fill="#4D4C92" />
      <polygon points="20,4 36,36 20,36" fill="#E37C17" />
      <rect x="6" y="34" width="28" height="2" fill="#4D4C92" />
    </svg>
  );
}
