"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { SpecsTable } from "./SpecsTable";

interface Props {
  product: Product;
}

type TabId = "descripcion" | "specs" | "aplicaciones" | "documentacion";

const TABS: { id: TabId; label: string }[] = [
  { id: "descripcion", label: "Descripción" },
  { id: "specs", label: "Características técnicas" },
  { id: "aplicaciones", label: "Aplicaciones" },
  { id: "documentacion", label: "Documentación" },
];

export function ProductTabs({ product }: Props) {
  const [active, setActive] = useState<TabId>("descripcion");

  return (
    <div className="overflow-hidden">
      <div
        role="tablist"
        aria-label="Información del producto"
        className="flex gap-1 overflow-x-auto border-b border-[var(--color-border)]"
      >
        {TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(t.id)}
              className={[
                "whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "border-[var(--color-accent)] text-[var(--color-text)]"
                  : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="py-8">
        {active === "descripcion" && (
          <Panel id="descripcion">
            <p className="text-base leading-relaxed text-[var(--color-text)] md:text-lg">
              {product.longDescription ?? product.description}
            </p>
          </Panel>
        )}

        {active === "specs" && (
          <Panel id="specs">
            <p className="mb-6 text-sm text-[var(--color-muted)]">
              Datos extraídos del catálogo de fabricación de Panelex.
              {product.cutLengths && product.cutLengths.length > 0 && (
                <>
                  {" "}Medidas de corte disponibles: desde {product.cutLengths[0]} hasta {product.cutLengths.at(-1)} mm
                  (incrementos de 350 mm).
                </>
              )}
            </p>
            <SpecsTable product={product} />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <Stat
                label="Ancho total"
                value={product.widthTotal > 0 ? `${product.widthTotal} mm` : "—"}
              />
              <Stat
                label="Ancho útil"
                value={
                  product.widthUseful
                    ? `${product.widthUseful} mm`
                    : "—"
                }
              />
              {product.grecasHeight !== undefined && (
                <Stat
                  label="Altura grecas"
                  value={`${product.grecasHeight} mm`}
                />
              )}
              {product.isAgropanel && (
                <Stat label="Agropanel" value="Disponible" accent />
              )}
            </div>
          </Panel>
        )}

        {active === "aplicaciones" && (
          <Panel id="aplicaciones">
            {product.applications && product.applications.length > 0 ? (
              <ul className="grid gap-4 md:grid-cols-2">
                {product.applications.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4"
                  >
                    <span
                      aria-hidden
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span className="text-sm text-[var(--color-text)]">{a}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[var(--color-muted)]">
                Producto polivalente. Consúltanos para evaluar tu aplicación
                concreta.
              </p>
            )}
          </Panel>
        )}

        {active === "documentacion" && (
          <Panel id="documentacion">
            <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-display text-lg font-semibold">
                Ficha técnica y declaraciones CE
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Solicita la ficha técnica, declaración CE y planos de instalación
                directamente al departamento técnico por WhatsApp.
              </p>
            </div>
          </Panel>
        )}
      </div>
    </div>
  );
}

function Panel({ id, children }: { id: TabId; children: React.ReactNode }) {
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </p>
      <p
        className={[
          "mt-1 font-mono text-base font-semibold",
          accent ? "text-[var(--color-accent-deep)]" : "text-[var(--color-text)]",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}
