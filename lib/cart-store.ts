/**
 * Carrito de presupuesto (Zustand, persistido en localStorage).
 *
 * Esquema mínimo de la tarea #5 (header con badge).
 * El drawer, el formateador WhatsApp y los datos de contacto se completan en #8.
 */
"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ChapaThickness, Unit } from "./products";

export interface CartItem {
  /** Identificador único: slug + espesor + chapa + medidaCorte (si aplica) */
  id: string;
  productSlug: string;
  productName: string;
  productCode: string;
  espesorNominal: number;
  espesorChapa: ChapaThickness;
  cantidad: number;
  unit: Unit;
  medidaCorte?: number;
  notas?: string;
  /** Peso unitario en kg por unidad (m² o ml). 0 si no aplica (accesorios). */
  pesoUnitario: number;
  image: string;
  /** Timestamp de creación (ordenación) */
  createdAt: number;
}

export interface ContactInfo {
  nombre?: string;
  poblacion?: string;
  codigoPostal?: string;
  plazo?: string;
  notas?: string;
}

interface CartState {
  items: CartItem[];
  contact: ContactInfo;
  addItem: (item: Omit<CartItem, "id" | "createdAt">) => void;
  updateQuantity: (id: string, cantidad: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  setContact: (info: ContactInfo) => void;
  /** Totales derivados (helpers, no se persisten) */
  totals: () => { itemCount: number; totalQuantity: number; totalWeight: number };
}

function makeItemId(
  slug: string,
  espesor: number,
  chapa: string,
  medida?: number
): string {
  return [slug, espesor, chapa, medida ?? "x"].join("|");
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      contact: {},

      addItem: (item) => {
        const id = makeItemId(
          item.productSlug,
          item.espesorNominal,
          item.espesorChapa,
          item.medidaCorte
        );
        set((state) => {
          const existing = state.items.find((i) => i.id === id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, cantidad: i.cantidad + item.cantidad } : i
              ),
            };
          }
          return {
            items: [...state.items, { ...item, id, createdAt: Date.now() }],
          };
        });
      },

      updateQuantity: (id, cantidad) => {
        const safe = Math.max(1, Math.floor(cantidad));
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, cantidad: safe } : i
          ),
        }));
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },

      clear: () => set({ items: [], contact: {} }),

      setContact: (contact) => set({ contact }),

      totals: () => {
        const items = get().items;
        return {
          itemCount: items.length,
          totalQuantity: items.reduce((acc, i) => acc + i.cantidad, 0),
          totalWeight: Number(
            items.reduce((acc, i) => acc + i.pesoUnitario * i.cantidad, 0).toFixed(2)
          ),
        };
      },
    }),
    {
      name: "panelex_cart_v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items, contact: state.contact }),
    }
  )
);

/** Hook seguro para SSR: devuelve 0 hasta que el cliente hidrata. */
export function useCartItemCount(): number {
  const items = useCartStore((s) => s.items);
  return items.length;
}

// ============================================================
// UI store (drawer abrir/cerrar) — separado del estado de datos
// ============================================================

interface UIStore {
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

export const useCartDrawer = create<UIStore>((set) => ({
  drawerOpen: false,
  openDrawer: () => set({ drawerOpen: true }),
  closeDrawer: () => set({ drawerOpen: false }),
  toggleDrawer: () => set((s) => ({ drawerOpen: !s.drawerOpen })),
}));
