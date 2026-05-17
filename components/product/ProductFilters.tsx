"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Filter, X } from "lucide-react";
import { ALL_CATEGORIES, type ProductCategory } from "@/lib/products";

interface Props {
  /** Lista de espesores únicos del catálogo (para chips) */
  availableEspesores: number[];
}

/**
 * Sincroniza filtros con la URL (?categoria=...&espesor=...&agropanel=1).
 * - Desktop: sidebar sticky
 * - Mobile: drawer modal
 */
export function ProductFilters({ availableEspesores }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const selectedCats = parseCsv(searchParams.get("categoria")) as ProductCategory[];
  const selectedEspesores = parseCsv(searchParams.get("espesor"))
    .map((s) => Number.parseInt(s, 10))
    .filter((n) => !Number.isNaN(n));
  const agropanelOnly = searchParams.get("agropanel") === "1";

  const activeCount =
    selectedCats.length + selectedEspesores.length + (agropanelOnly ? 1 : 0);

  function updateParams(updater: (params: URLSearchParams) => void) {
    const next = new URLSearchParams(searchParams.toString());
    updater(next);
    const qs = next.toString();
    startTransition(() => {
      router.push(qs ? `/productos?${qs}` : "/productos", { scroll: false });
    });
  }

  function toggleCategory(cat: ProductCategory) {
    updateParams((p) => {
      const cur = parseCsv(p.get("categoria"));
      const has = cur.includes(cat);
      const next = has ? cur.filter((c) => c !== cat) : [...cur, cat];
      if (next.length === 0) p.delete("categoria");
      else p.set("categoria", next.join(","));
    });
  }

  function toggleEspesor(e: number) {
    updateParams((p) => {
      const cur = parseCsv(p.get("espesor"));
      const k = String(e);
      const has = cur.includes(k);
      const next = has ? cur.filter((c) => c !== k) : [...cur, k];
      if (next.length === 0) p.delete("espesor");
      else p.set("espesor", next.join(","));
    });
  }

  function toggleAgropanel() {
    updateParams((p) => {
      if (p.get("agropanel") === "1") p.delete("agropanel");
      else p.set("agropanel", "1");
    });
  }

  function clearAll() {
    startTransition(() => router.push("/productos", { scroll: false }));
  }

  // Cierra drawer al cambiar de viewport a desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {/* Botón móvil */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text)] lg:hidden"
      >
        <Filter className="h-4 w-4" />
        Filtros
        {activeCount > 0 && (
          <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--color-primary)] px-1.5 text-[10px] font-bold text-white">
            {activeCount}
          </span>
        )}
      </button>

      {/* Sidebar desktop */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <FiltersBody
          selectedCats={selectedCats}
          selectedEspesores={selectedEspesores}
          agropanelOnly={agropanelOnly}
          availableEspesores={availableEspesores}
          activeCount={activeCount}
          isPending={isPending}
          onToggleCategory={toggleCategory}
          onToggleEspesor={toggleEspesor}
          onToggleAgropanel={toggleAgropanel}
          onClearAll={clearAll}
        />
      </aside>

      {/* Drawer móvil */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filtros de productos"
          className="fixed inset-0 z-50 flex lg:hidden"
        >
          <button
            type="button"
            aria-label="Cerrar filtros"
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">Filtros</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--color-surface)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <FiltersBody
              selectedCats={selectedCats}
              selectedEspesores={selectedEspesores}
              agropanelOnly={agropanelOnly}
              availableEspesores={availableEspesores}
              activeCount={activeCount}
              isPending={isPending}
              onToggleCategory={toggleCategory}
              onToggleEspesor={toggleEspesor}
              onToggleAgropanel={toggleAgropanel}
              onClearAll={clearAll}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 w-full rounded-full bg-[var(--color-primary)] py-3 text-sm font-semibold text-white"
            >
              Ver resultados
            </button>
          </div>
        </div>
      )}
    </>
  );
}

interface BodyProps {
  selectedCats: ProductCategory[];
  selectedEspesores: number[];
  agropanelOnly: boolean;
  availableEspesores: number[];
  activeCount: number;
  isPending: boolean;
  onToggleCategory: (c: ProductCategory) => void;
  onToggleEspesor: (e: number) => void;
  onToggleAgropanel: () => void;
  onClearAll: () => void;
}

function FiltersBody({
  selectedCats,
  selectedEspesores,
  agropanelOnly,
  availableEspesores,
  activeCount,
  isPending,
  onToggleCategory,
  onToggleEspesor,
  onToggleAgropanel,
  onClearAll,
}: BodyProps) {
  return (
    <div className={isPending ? "opacity-60 transition-opacity" : ""}>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
          {activeCount === 0
            ? "Sin filtros"
            : `${activeCount} ${activeCount === 1 ? "filtro activo" : "filtros activos"}`}
        </p>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            Limpiar todo
          </button>
        )}
      </div>

      <FilterGroup label="Tipo de producto">
        <ul className="space-y-2">
          {ALL_CATEGORIES.map((c) => {
            const checked = selectedCats.includes(c.value);
            return (
              <li key={c.value}>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition hover:bg-[var(--color-surface)]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleCategory(c.value)}
                    className="h-4 w-4 accent-[var(--color-primary)]"
                  />
                  <span className={checked ? "font-semibold" : ""}>{c.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </FilterGroup>

      <FilterGroup label="Espesor nominal (mm)">
        <div className="flex flex-wrap gap-2">
          {availableEspesores.map((e) => {
            const active = selectedEspesores.includes(e);
            return (
              <button
                key={e}
                type="button"
                aria-pressed={active}
                onClick={() => onToggleEspesor(e)}
                className={[
                  "rounded-full border px-3 py-1.5 font-mono text-xs transition",
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]",
                ].join(" ")}
              >
                {e}
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup label="Aplicación especial">
        <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition hover:bg-[var(--color-surface)]">
          <input
            type="checkbox"
            checked={agropanelOnly}
            onChange={onToggleAgropanel}
            className="h-4 w-4 accent-[var(--color-accent)]"
          />
          <span className={agropanelOnly ? "font-semibold" : ""}>
            Solo Agropanel
            <span className="ml-1 text-xs text-[var(--color-muted)]">
              (ambientes corrosivos)
            </span>
          </span>
        </label>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 border-t border-[var(--color-border)] pt-6 first:border-t-0 first:pt-0">
      <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
        {label}
      </h3>
      {children}
    </div>
  );
}

function parseCsv(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}
