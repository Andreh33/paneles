/**
 * Helpers para construir URLs y mensajes de WhatsApp.
 *
 * El formato de `formatCartForWhatsApp` sigue literalmente la plantilla del
 * §6.3 del brief. Cualquier cambio aquí afecta a lo que Ramón ve en su
 * móvil — modificar con cuidado y mantener los tests verdes.
 */
import type { CartItem, ContactInfo } from "./cart-store";
import { SITE } from "./site";

export function buildWhatsAppUrl(message: string, phone: string = SITE.contact.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Mensaje genérico del CTA del header / hero (sin contexto de producto). */
export function genericInquiryMessage(): string {
  return [
    "Hola Panelex,",
    "",
    "Os escribo desde panelexpanelsandwich.com y me gustaría recibir información sobre vuestros productos.",
  ].join("\n");
}

/** Mensaje rápido desde una ficha de producto (sin pasar por carrito). */
export function singleProductInquiryMessage(productName: string, code: string): string {
  return [
    `Hola Panelex,`,
    ``,
    `Estoy interesado/a en *${productName}* (${code}).`,
    `Me gustaría recibir presupuesto y disponibilidad.`,
    ``,
    `_Solicitud enviada desde panelexpanelsandwich.com_`,
  ].join("\n");
}

export interface CartTotals {
  /** Total de items distintos (no suma cantidades) */
  itemCount: number;
  /** Suma de cantidades por unidad: { m2, ml, u } */
  byUnit: { m2: number; ml: number; u: number };
  totalWeight: number;
}

export function computeTotals(items: CartItem[]): CartTotals {
  const byUnit = { m2: 0, ml: 0, u: 0 };
  let totalWeight = 0;
  for (const i of items) {
    byUnit[i.unit] += i.cantidad;
    totalWeight += i.pesoUnitario * i.cantidad;
  }
  return {
    itemCount: items.length,
    byUnit,
    totalWeight: Number(totalWeight.toFixed(2)),
  };
}

function unitLabel(u: CartItem["unit"]): string {
  return u === "m2" ? "m²" : u === "ml" ? "ml" : "unidades";
}

/**
 * Formateo numérico es-ES (punto como separador de miles).
 * No usamos `toLocaleString("es-ES")` porque Node sin ICU completo cae a
 * formato US y eso rompe la consistencia SSR / cliente / WhatsApp.
 */
function fmt(n: number): string {
  const [intPart, decPart] = String(n).split(".");
  const withThousands = intPart!.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decPart ? `${withThousands},${decPart}` : withThousands;
}

/**
 * Construye el mensaje completo del carrito siguiendo la plantilla §6.3.
 * Se devuelve como string sin URL-encoding (lo aplica buildWhatsAppUrl).
 */
export function formatCartForWhatsApp(
  items: CartItem[],
  contact: ContactInfo = {}
): string {
  const lines: string[] = [];

  lines.push("*SOLICITUD DE PRESUPUESTO — PANELEX*");
  lines.push("_Generada desde panelexpanelsandwich.com_");
  lines.push("");

  // === DATOS DE CONTACTO ===
  lines.push("👤 *Datos de contacto*");
  lines.push(`• Nombre/Empresa: ${contact.nombre?.trim() || "—"}`);
  const ubicacion = [contact.poblacion?.trim(), contact.codigoPostal?.trim()]
    .filter(Boolean)
    .join(", ");
  lines.push(`• Ubicación: ${ubicacion || "—"}`);
  lines.push(`• Plazo deseado: ${contact.plazo?.trim() || "Sin especificar"}`);
  lines.push("");

  // === PRODUCTOS ===
  lines.push(`📦 *Productos solicitados* (${items.length} ${items.length === 1 ? "item" : "items"})`);
  lines.push("");

  items.forEach((item, idx) => {
    const num = idx + 1;
    lines.push(`${num}) *${item.productName}* — ${item.productCode}`);
    lines.push(`   • Espesor nominal: ${item.espesorNominal} mm`);
    lines.push(`   • Espesor chapa: ${item.espesorChapa}`);
    if (item.medidaCorte !== undefined) {
      lines.push(`   • Medida de corte: ${fmt(item.medidaCorte)} mm`);
    }
    lines.push(`   • Cantidad: ${item.cantidad} ${unitLabel(item.unit)}`);
    const peso = Number((item.pesoUnitario * item.cantidad).toFixed(2));
    if (peso > 0) {
      lines.push(`   • Peso estimado: ${fmt(peso)} kg`);
    }
    lines.push(`   • Notas: ${item.notas?.trim() || "—"}`);
    lines.push("");
  });

  // === RESUMEN ===
  const totals = computeTotals(items);
  const totalParts: string[] = [];
  if (totals.byUnit.m2 > 0) totalParts.push(`${totals.byUnit.m2} m²`);
  if (totals.byUnit.ml > 0) totalParts.push(`${totals.byUnit.ml} ml`);
  if (totals.byUnit.u > 0) totalParts.push(`${totals.byUnit.u} u`);

  lines.push("📊 *Resumen*");
  lines.push(`• Total cantidad: ${totalParts.join(" · ") || "—"}`);
  lines.push(`• Peso total estimado: ${fmt(totals.totalWeight)} kg`);
  lines.push("");

  // === NOTAS GENERALES ===
  lines.push("📝 *Notas generales*");
  lines.push(contact.notas?.trim() || "Ninguna");
  lines.push("");
  lines.push("—");
  lines.push("Quedo a la espera de presupuesto. Gracias.");

  return lines.join("\n");
}
