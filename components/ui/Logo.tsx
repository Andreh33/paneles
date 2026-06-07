/**
 * Marca Panelex — imagen oficial (logo.png con fondo transparente).
 * Las props `variant` / `withText` se mantienen por compatibilidad.
 */
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  withText?: boolean;
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Panelex · Inicio"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Panelex S.L · Fabricantes de panel sándwich"
        width={644}
        height={409}
        priority
        className="h-12 w-auto transition-transform group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
