import type { Product, SpecRow } from "@/lib/products";

interface Props {
  product: Product;
  /** Si se pasa, resalta la fila correspondiente (configurador activo) */
  highlight?: { espesor: number; chapa: string };
}

/**
 * Tabla de specs con thead sticky.
 * El contenido cambia ligeramente según la categoría: los paneles sándwich
 * muestran U y kcal; las chapas perfiladas no aplican esos campos.
 */
export function SpecsTable({ product, highlight }: Props) {
  const showThermal =
    product.category === "cubierta" || product.category === "fachada";
  const pesoUnit = product.unit === "ml" ? "kg/ml" : "kg/m²";

  return (
    <div className="max-h-[480px] overflow-auto rounded-2xl border border-[var(--color-border)] bg-white">
      <table className="w-full border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-[var(--color-surface)]">
          <tr className="text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            <th className="px-4 py-3">Espesor nominal</th>
            <th className="px-4 py-3">Espesor chapa</th>
            <th className="px-4 py-3">Peso ({pesoUnit})</th>
            {showThermal && (
              <>
                <th className="px-4 py-3">U (W/m²·K)</th>
                <th className="px-4 py-3">U (kcal)</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {product.specs.map((s, i) => {
            const isHighlight =
              highlight &&
              highlight.espesor === s.espesorNominal &&
              highlight.chapa === s.chapa;
            return (
              <tr
                key={`${s.espesorNominal}-${s.chapa}-${i}`}
                className={[
                  "border-t border-[var(--color-border)] font-mono",
                  isHighlight
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-text)]"
                    : "text-[var(--color-text)] hover:bg-[var(--color-surface)]",
                ].join(" ")}
              >
                <td className="px-4 py-3 font-semibold">
                  {s.espesorNominal} mm
                </td>
                <td className="px-4 py-3 text-[var(--color-muted)]">
                  {s.chapa}
                </td>
                <td className="px-4 py-3">{s.peso.toFixed(2)}</td>
                {showThermal && (
                  <>
                    <td className="px-4 py-3">
                      {s.uWmK !== undefined ? s.uWmK.toFixed(3) : "—"}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {s.uKcal !== undefined ? s.uKcal.toFixed(5) : "—"}
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function specRowKey(s: SpecRow): string {
  return `${s.espesorNominal}|${s.chapa}`;
}
