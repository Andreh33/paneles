import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";

export function FinalCTA() {
  return (
    <section className="bg-[var(--color-primary-deep)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
              Pasa de catálogo a presupuesto en 2 minutos
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
              ¿Tienes un proyecto entre manos?
            </h2>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              Configura tu pedido en el catálogo y envíalo por WhatsApp. Ramón
              responde con presupuesto en horas, no días.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-2 rounded-full bg-[var(--color-accent-deep)] px-6 py-5 text-base font-semibold text-white transition hover:bg-[#7d3f06]"
            >
              <span className="inline-flex items-center gap-3">
                <WhatsAppGlyph className="h-5 w-5" />
                Escríbenos por WhatsApp
              </span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/productos"
              className="group inline-flex items-center justify-between gap-2 rounded-full border border-white/30 px-6 py-5 text-base font-semibold text-white transition hover:border-white"
            >
              <span>Explorar catálogo</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
              className="mt-4 inline-flex items-center justify-center gap-3 text-sm text-white/70 hover:text-white"
            >
              <Phone className="h-4 w-4 text-[var(--color-accent-soft)]" />
              <span className="font-mono">{SITE.contact.phone}</span>
              <span>·</span>
              <span>{SITE.contact.hours}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
