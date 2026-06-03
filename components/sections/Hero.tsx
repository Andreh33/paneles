import Link from "next/link";
import { ArrowRight, Factory, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { StatsStrip } from "./StatsStrip";
import { HeroMedia } from "./HeroMedia";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
      {/* Fondo: vídeo en bucle de obra real (con foto del operario como póster) */}
      <HeroMedia />
      {/* Oscurecido cálido para legibilidad del texto (más denso a la izquierda) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-warm)] via-[var(--color-bg-warm)]/80 to-[var(--color-bg-warm)]/35"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-warm)] via-transparent to-[var(--color-bg-warm)]/40"
      />

      {/* Capa decorativa: glow de marca (morado/naranja) + malla de líneas */}
      <div aria-hidden className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent-deep)]/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-primary-deep)]/40 via-transparent to-transparent" />
        <BackgroundGrid />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 md:px-8 md:pt-32 md:pb-24 lg:pt-40">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono uppercase tracking-[0.2em] text-white/80">
            <Factory className="h-3 w-3" />
            Fabricación propia
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono uppercase tracking-[0.2em] text-white/80">
            <MapPin className="h-3 w-3 text-[var(--color-accent-soft)]" />
            Puebla de la Calzada · Badajoz
          </span>
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]">
          Panel sándwich
          <br />
          <span className="text-[var(--color-primary-soft)]">creado a medida,</span>
          <br />
          montado en toda Iberia.
        </h1>

        <p className="mt-10 max-w-2xl text-lg text-white/70 md:text-xl">
          Cubiertas, fachadas y chapa perfilada para naves industriales,
          agrícolas y obra residencial. Producción propia, asesoramiento
          técnico y entrega rápida.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/productos"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[var(--color-bg-warm)] transition hover:bg-[var(--color-accent-soft)]"
          >
            Ver catálogo
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`https://wa.me/${SITE.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-white"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Pedir presupuesto por WhatsApp
          </a>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}

function BackgroundGrid() {
  // Patrón ligero de líneas verticales — alusión a un panel ondulado
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id="hero-lines"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="80" stroke="white" strokeOpacity="0.04" />
          <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeOpacity="0.02" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-lines)" />
    </svg>
  );
}
