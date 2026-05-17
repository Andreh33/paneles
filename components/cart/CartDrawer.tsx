"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Minus, Plus, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import {
  TRUCK_MAX_PAYLOAD_KG,
  PRODUCTS,
} from "@/lib/products";
import {
  useCartDrawer,
  useCartStore,
  type CartItem,
} from "@/lib/cart-store";
import { buildWhatsAppUrl, computeTotals, formatCartForWhatsApp } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { ProductImage } from "@/components/product/ProductImage";

export function CartDrawer() {
  const open = useCartDrawer((s) => s.drawerOpen);
  const close = useCartDrawer((s) => s.closeDrawer);
  const items = useCartStore((s) => s.items);
  const contact = useCartStore((s) => s.contact);
  const setContact = useCartStore((s) => s.setContact);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);

  const totals = computeTotals(items);
  const exceedsTruck = totals.totalWeight > TRUCK_MAX_PAYLOAD_KG;

  const [confirmClear, setConfirmClear] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + atajo Esc + foco inicial
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  function handleSendWhatsApp() {
    if (items.length === 0) return;
    const msg = formatCartForWhatsApp(items, contact);
    window.open(buildWhatsAppUrl(msg), "_blank");
  }

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={close}
        className={[
          "fixed inset-0 z-50 bg-black/50 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <span className="sr-only">Cerrar carrito</span>
      </button>

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Solicitud de presupuesto"
        // `inert` retira el contenido del tab order y del árbol de accesibilidad
        // cuando el drawer está cerrado — soluciona aria-hidden-focus de axe.
        inert={!open}
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-5 md:px-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Tu solicitud
            </p>
            <h2 className="font-display text-xl font-semibold">
              {items.length === 0
                ? "Sin productos"
                : `${items.length} ${items.length === 1 ? "producto" : "productos"}`}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text)] hover:bg-[var(--color-surface)]"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-7">
          {items.length === 0 ? <EmptyState onClose={close} /> : (
            <>
              <ul className="space-y-3">
                {items.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onQty={(q) => updateQuantity(item.id, q)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </ul>

              {/* Datos de contacto */}
              <section className="mt-8 border-t border-[var(--color-border)] pt-6">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
                  Datos de contacto
                </h3>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Opcionales, pero ayudan a Ramón a darte respuesta más rápida.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ContactField label="Nombre o empresa">
                    <input
                      type="text"
                      value={contact.nombre ?? ""}
                      onChange={(e) =>
                        setContact({ ...contact, nombre: e.target.value })
                      }
                      className="contact-input"
                      placeholder="Constructora ACME"
                    />
                  </ContactField>
                  <ContactField label="Plazo deseado">
                    <input
                      type="text"
                      value={contact.plazo ?? ""}
                      onChange={(e) =>
                        setContact({ ...contact, plazo: e.target.value })
                      }
                      className="contact-input"
                      placeholder="30 días"
                    />
                  </ContactField>
                  <ContactField label="Población de entrega">
                    <input
                      type="text"
                      value={contact.poblacion ?? ""}
                      onChange={(e) =>
                        setContact({ ...contact, poblacion: e.target.value })
                      }
                      className="contact-input"
                      placeholder="Mérida"
                    />
                  </ContactField>
                  <ContactField label="Código postal">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={contact.codigoPostal ?? ""}
                      onChange={(e) =>
                        setContact({ ...contact, codigoPostal: e.target.value })
                      }
                      className="contact-input"
                      placeholder="06800"
                    />
                  </ContactField>
                </div>
                <ContactField label="Notas generales">
                  <textarea
                    value={contact.notas ?? ""}
                    onChange={(e) =>
                      setContact({ ...contact, notas: e.target.value })
                    }
                    rows={2}
                    className="contact-input"
                    placeholder="Información adicional…"
                  />
                </ContactField>
              </section>
            </>
          )}
        </div>

        {/* Footer fijo */}
        {items.length > 0 && (
          <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 md:px-7">
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  Cantidad total
                </dt>
                <dd className="mt-0.5 font-mono font-semibold text-[var(--color-text)]">
                  {totalsLabel(totals)}
                </dd>
              </div>
              <div className="text-right">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  Peso estimado
                </dt>
                <dd className="mt-0.5 font-mono font-semibold text-[var(--color-text)]">
                  {totals.totalWeight} kg
                </dd>
              </div>
            </dl>

            {exceedsTruck && (
              <div className="mt-3 flex gap-2 rounded-xl bg-[var(--color-accent)]/10 p-3 text-xs text-[var(--color-accent-deep)]">
                <Truck className="h-4 w-4 shrink-0" />
                <span>
                  Tu solicitud supera la carga útil de un camión estándar.
                  Ramón te confirmará condiciones de transporte por WhatsApp.
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-5 w-5" />
              Enviar solicitud por WhatsApp
            </button>

            <div className="mt-3 flex items-center justify-between">
              {confirmClear ? (
                <div className="flex w-full items-center justify-between text-xs">
                  <span className="text-[var(--color-muted)]">¿Vaciar la solicitud?</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setConfirmClear(false)}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--color-text)] hover:bg-[var(--color-border)]"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        clear();
                        setConfirmClear(false);
                      }}
                      className="rounded-full bg-[var(--color-text)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-black"
                    >
                      Sí, vaciar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setConfirmClear(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Vaciar
                  </button>
                  <p className="text-[10px] text-[var(--color-muted)]">
                    Al enviar abrirás WhatsApp con tu solicitud.
                  </p>
                </>
              )}
            </div>
          </footer>
        )}
      </aside>

      <style>{`
        .contact-input {
          width: 100%;
          margin-top: 6px;
          border: 1px solid var(--color-border);
          background: white;
          border-radius: 12px;
          padding: 10px 12px;
          font-size: 14px;
          color: var(--color-text);
        }
        .contact-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      `}</style>
    </>
  );
}

function CartItemRow({
  item,
  onQty,
  onRemove,
}: {
  item: CartItem;
  onQty: (q: number) => void;
  onRemove: () => void;
}) {
  const unitLabel =
    item.unit === "m2" ? "m²" : item.unit === "ml" ? "ml" : "u";
  const peso = Number((item.pesoUnitario * item.cantidad).toFixed(2));
  const product = PRODUCTS.find((p) => p.slug === item.productSlug);

  return (
    <li className="flex gap-3 rounded-2xl border border-[var(--color-border)] p-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
        {product && <ProductImage product={product} sizes="80px" />}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--color-text)]">
              {item.productName}
            </p>
            <p className="font-mono text-[10px] text-[var(--color-muted)]">
              {item.productCode} · {item.espesorNominal} mm · {item.espesorChapa}
              {item.medidaCorte ? ` · L=${item.medidaCorte} mm` : ""}
            </p>
            {peso > 0 && (
              <p className="mt-0.5 font-mono text-[10px] text-[var(--color-muted)]">
                {peso} kg
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Eliminar ${item.productName}`}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Reducir"
            onClick={() => onQty(Math.max(1, item.cantidad - 10))}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <Minus className="h-3 w-3" />
          </button>
          <input
            type="number"
            min={1}
            value={item.cantidad}
            onChange={(e) => onQty(Math.max(1, Number(e.target.value) || 1))}
            aria-label={`Cantidad en ${unitLabel}`}
            className="h-7 w-16 rounded-md border border-[var(--color-border)] bg-white text-center font-mono text-xs focus:border-[var(--color-primary)] focus:outline-none"
          />
          <button
            type="button"
            aria-label="Aumentar"
            onClick={() => onQty(item.cantidad + 10)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <Plus className="h-3 w-3" />
          </button>
          <span className="ml-1 text-xs text-[var(--color-muted)]">{unitLabel}</span>
        </div>
      </div>
    </li>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-16 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted)]">
        <ShoppingBag className="h-7 w-7" />
      </div>
      <p className="mt-5 font-display text-xl font-semibold">
        Tu solicitud está vacía
      </p>
      <p className="mt-2 max-w-xs text-sm text-[var(--color-muted)]">
        Añade los productos que te interesen desde el catálogo y envía la
        solicitud por WhatsApp a Ramón.
      </p>
      <a
        href="/productos"
        onClick={onClose}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-deep)]"
      >
        Ver catálogo
      </a>
    </div>
  );
}

function ContactField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs font-semibold text-[var(--color-text)] sm:col-span-1 [&:has(textarea)]:sm:col-span-2 [&:has(textarea)]:mt-3">
      {label}
      {children}
    </label>
  );
}

function totalsLabel(t: ReturnType<typeof computeTotals>): string {
  const parts: string[] = [];
  if (t.byUnit.m2 > 0) parts.push(`${t.byUnit.m2} m²`);
  if (t.byUnit.ml > 0) parts.push(`${t.byUnit.ml} ml`);
  if (t.byUnit.u > 0) parts.push(`${t.byUnit.u} u`);
  return parts.join(" · ") || "—";
}
