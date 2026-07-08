import Link from "next/link";
import { Phone } from "lucide-react";
import {
  MARKET_PRICE_RANGES,
  PRICE_DISCLAIMER,
  PRICE_TABLE_ENABLED,
  PRICE_WHATSAPP_MESSAGE,
  priceCatalogLd,
} from "@/lib/pricing";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Tabla "desde €/m²" con AggregateOffer + disclaimer + CTA WhatsApp.
 *
 * ⚠️ NO ACTIVA por defecto: renderiza `null` mientras PRICE_TABLE_ENABLED sea
 * `false` en lib/pricing.ts (requiere OK del dueño a la línea editorial de
 * publicar precios). Ya está montada en la guía de precio y en /productos:
 * activar = cambiar UN flag. Ver lib/pricing.ts.
 */
export function PriceTable({ className = "" }: { className?: string }) {
  if (!PRICE_TABLE_ENABLED) return null;

  return (
    <section aria-labelledby="tabla-precios" className={className}>
      <JsonLd data={priceCatalogLd()} />
      <h2
        id="tabla-precios"
        className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
      >
        Precio orientativo del panel sándwich por m² (2026)
      </h2>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-left font-display text-sm font-semibold">
            Precio del panel sándwich por tipo y espesor: rangos orientativos de
            mercado en España (2026)
          </caption>
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <th scope="col" className="px-4 py-3 font-semibold">
                Tipo de panel
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Espesor habitual
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Precio orientativo (€/m²)
              </th>
            </tr>
          </thead>
          <tbody>
            {MARKET_PRICE_RANGES.map((r) => (
              <tr
                key={r.tipo}
                className="border-b border-[var(--color-border)] last:border-0"
              >
                <th scope="row" className="px-4 py-3 font-semibold">
                  <Link
                    href={r.href}
                    className="text-[var(--color-text)] underline-offset-4 hover:text-[var(--color-primary)] hover:underline"
                  >
                    {r.tipo}
                  </Link>
                  <span className="mt-1 block text-xs font-normal text-[var(--color-muted)]">
                    {r.nota}
                  </span>
                </th>
                <td className="px-4 py-3">{r.espesor}</td>
                <td className="px-4 py-3 font-semibold">
                  desde {r.desde} hasta {r.hasta} €/m²
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">
        {PRICE_DISCLAIMER}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={buildWhatsAppUrl(PRICE_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
        >
          <WhatsAppGlyph className="h-4 w-4" />
          Presupuesto cerrado por WhatsApp
        </a>
        <a
          href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-semibold transition hover:border-[var(--color-primary)]"
        >
          <Phone className="h-4 w-4" />
          {SITE.contact.phone}
        </a>
      </div>
    </section>
  );
}
