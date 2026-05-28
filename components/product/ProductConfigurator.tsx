"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Check, MessageSquare, Plus, ShoppingBag, Truck } from "lucide-react";
import type { ChapaThickness, Product } from "@/lib/products";
import {
  TRUCK_MAX_PAYLOAD_KG,
  findSpec,
  getAvailableChapas,
  getAvailableEspesores,
} from "@/lib/products";
import { useCartDrawer, useCartStore } from "@/lib/cart-store";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";

interface Props {
  product: Product;
}

export function ProductConfigurator({ product }: Props) {
  const espesores = useMemo(() => getAvailableEspesores(product), [product]);
  const [espesor, setEspesor] = useState<number>(espesores[0]!);
  const chapas = useMemo(
    () => getAvailableChapas(product, espesor),
    [product, espesor]
  );
  const [chapa, setChapa] = useState<ChapaThickness>(chapas[0]!);

  // Si el espesor cambia y la chapa actual ya no aplica, ajustamos
  useEffect(() => {
    if (!chapas.includes(chapa)) setChapa(chapas[0]!);
  }, [chapas, chapa]);

  const [cantidad, setCantidad] = useState<number>(
    product.unit === "ml" ? 50 : 100
  );
  const [medidaCorte, setMedidaCorte] = useState<number | undefined>(
    product.cutLengths?.[0]
  );
  const [notas, setNotas] = useState("");
  const [justAdded, setJustAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const openDrawer = useCartDrawer((s) => s.openDrawer);

  const spec = findSpec(product, espesor, chapa);
  const pesoTotal = spec ? Number((spec.peso * cantidad).toFixed(2)) : 0;
  const exceedsTruck = pesoTotal > TRUCK_MAX_PAYLOAD_KG;

  const unidadLabel =
    product.unit === "m2" ? "m²" : product.unit === "ml" ? "ml" : "unidades";

  function handleAddToCart() {
    if (!spec) return;
    addItem({
      productSlug: product.slug,
      productName: product.name,
      productCode: product.code,
      espesorNominal: espesor,
      espesorChapa: chapa,
      cantidad,
      unit: product.unit,
      medidaCorte,
      notas: notas.trim() || undefined,
      pesoUnitario: spec.peso,
      image: product.image,
    });
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      openDrawer();
    }, 700);
  }

  function handleDirectWhatsApp() {
    const lines = [
      "Hola Panelex,",
      "",
      `Quiero pedir presupuesto de *${product.name}* (${product.code}):`,
      `• Espesor nominal: ${espesor} mm`,
      `• Espesor chapa: ${chapa}`,
      `• Cantidad: ${cantidad} ${unidadLabel}`,
    ];
    if (medidaCorte) lines.push(`• Medida de corte: ${medidaCorte} mm`);
    if (spec) lines.push(`• Peso estimado: ${pesoTotal} kg`);
    if (notas.trim()) {
      lines.push("", `Notas: ${notas.trim()}`);
    }
    lines.push("", "_Solicitud enviada desde panelex.es_");
    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank");
  }

  return (
    <div className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-7">
      {/* Espesor nominal */}
      <Field
        label="Espesor nominal"
        hint={`${espesores.length} ${espesores.length === 1 ? "opción" : "opciones"} disponibles`}
      >
        <div className="flex flex-wrap gap-2">
          {espesores.map((e) => {
            const active = e === espesor;
            return (
              <button
                key={e}
                type="button"
                aria-pressed={active}
                onClick={() => setEspesor(e)}
                className={[
                  "min-w-[64px] rounded-xl border px-4 py-3 text-center font-mono transition",
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]",
                ].join(" ")}
              >
                <span className="block text-base font-bold">{e}</span>
                <span className="block text-[10px] uppercase tracking-wider opacity-70">
                  mm
                </span>
              </button>
            );
          })}
        </div>
      </Field>

      {/* Espesor chapa */}
      <Field
        label="Espesor de chapa"
        hint={
          product.category === "accesorio"
            ? "Espesor de la chapa galvanizada"
            : "Cara exterior / interior (mm)"
        }
      >
        <div className="flex flex-wrap gap-2">
          {chapas.map((c) => {
            const active = c === chapa;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setChapa(c)}
                className={[
                  "rounded-xl border px-4 py-3 font-mono text-sm transition",
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>
      </Field>

      {/* Cantidad */}
      <Field
        label={`Cantidad (${unidadLabel})`}
        hint={
          product.unit === "ml" && product.category === "accesorio"
            ? "1 pieza estándar = 3 m útil"
            : product.unit === "ml"
              ? "Cantidad total en metros lineales"
              : "Superficie total a cubrir"
        }
      >
        <div className="flex items-stretch gap-2">
          <button
            type="button"
            aria-label="Reducir cantidad"
            onClick={() => setCantidad((c) => Math.max(1, c - 10))}
            className="h-12 w-12 rounded-xl border border-[var(--color-border)] text-lg font-bold text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            −
          </button>
          <input
            type="number"
            min={1}
            step={1}
            value={cantidad}
            onChange={(e) => setCantidad(Math.max(1, Number(e.target.value) || 1))}
            className="h-12 flex-1 rounded-xl border border-[var(--color-border)] bg-white px-4 text-center font-mono text-lg font-semibold focus:border-[var(--color-primary)] focus:outline-none"
            aria-label={`Cantidad en ${unidadLabel}`}
          />
          <button
            type="button"
            aria-label="Aumentar cantidad"
            onClick={() => setCantidad((c) => c + 10)}
            className="h-12 w-12 rounded-xl border border-[var(--color-border)] text-lg font-bold text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            +
          </button>
        </div>
      </Field>

      {/* Medida de corte (solo si aplica) */}
      {product.cutLengths && product.cutLengths.length > 0 && (
        <Field label="Medida de corte" hint="Largo del panel en mm">
          <select
            value={medidaCorte ?? ""}
            onChange={(e) => setMedidaCorte(Number(e.target.value))}
            className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 font-mono text-sm focus:border-[var(--color-primary)] focus:outline-none"
          >
            {product.cutLengths.map((m) => (
              <option key={m} value={m}>
                {m.toLocaleString("es-ES")} mm
              </option>
            ))}
          </select>
        </Field>
      )}


      {/* Notas */}
      <Field label="Notas / requisitos especiales" hint="Opcional">
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          rows={3}
          placeholder="Color RAL, accesorios adicionales, plazo, dirección de entrega..."
          className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white p-3 text-sm placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none"
        />
      </Field>

      {/* Resumen peso + alerta camión */}
      <div className="rounded-2xl bg-[var(--color-surface)] p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Peso estimado
          </span>
          <span className="font-mono text-xl font-bold text-[var(--color-text)]">
            {pesoTotal.toLocaleString("es-ES")} kg
          </span>
        </div>
        {exceedsTruck && (
          <div className="mt-3 flex gap-2 rounded-xl bg-[var(--color-accent)]/10 p-3 text-xs text-[var(--color-accent-deep)]">
            <Truck className="h-4 w-4 shrink-0" />
            <span>
              Supera la carga útil de un camión estándar ({TRUCK_MAX_PAYLOAD_KG.toLocaleString("es-ES")} kg).
              Ramón te confirmará condiciones de transporte por WhatsApp.
            </span>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!spec}
          className={[
            "flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition",
            justAdded
              ? "bg-[#16a34a] text-white"
              : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-deep)] disabled:cursor-not-allowed disabled:opacity-50",
          ].join(" ")}
        >
          {justAdded ? (
            <>
              <Check className="h-5 w-5" />
              Añadido a la solicitud
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" />
              Añadir a la solicitud
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDirectWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-4 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)]"
        >
          <WhatsAppGlyph className="h-4 w-4 text-[#25D366]" />
          Pedir presupuesto directo por WhatsApp
        </button>
      </div>

      {/* Bloque comercial */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-xs text-[var(--color-muted)]">
        <p className="font-semibold text-[var(--color-text)]">
          {SITE.contact.salesContact.name}
        </p>
        <p>{SITE.contact.salesContact.role}</p>
        <p className="mt-2 space-x-2">
          <a
            href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
            className="font-mono text-[var(--color-primary)] hover:underline"
          >
            {SITE.contact.phone}
          </a>
          <span>·</span>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {SITE.contact.email}
          </a>
        </p>
        <p className="mt-1">{SITE.contact.hours}</p>
      </div>

      {/* Aviso WhatsApp + RGPD breve */}
      <p className="text-[10px] leading-relaxed text-[var(--color-muted)]">
        Al continuar abrirás una conversación de WhatsApp con Panelex S.L. Tu
        mensaje incluirá los productos seleccionados. El tratamiento posterior
        de tu solicitud se rige por la{" "}
        <a
          href="/politica-privacidad"
          className="underline hover:text-[var(--color-primary)]"
        >
          política de privacidad
        </a>{" "}
        y por la política de privacidad de WhatsApp.
      </p>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <label className="text-sm font-semibold text-[var(--color-text)]">
          {label}
        </label>
        {hint && (
          <span className="text-[11px] text-[var(--color-muted)]">{hint}</span>
        )}
      </div>
      {children}
    </div>
  );
}
