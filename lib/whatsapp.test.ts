/**
 * Tests del formateador WhatsApp.
 * Es la parte que ve Ramón en su móvil — un fallo aquí degrada
 * directamente la calidad del lead.
 */
import { describe, expect, it } from "vitest";
import {
  buildWhatsAppUrl,
  computeTotals,
  formatCartForWhatsApp,
} from "./whatsapp";
import type { CartItem } from "./cart-store";

function makeItem(overrides: Partial<CartItem> = {}): CartItem {
  return {
    id: "panel-cubierta-rojo|30|0.5/0.5|x",
    productSlug: "panel-cubierta-rojo",
    productName: "Panel sándwich cubierta — Rojo",
    productCode: "PC-CUBIERTA-ROJO",
    espesorNominal: 30,
    espesorChapa: "0.5/0.5",
    cantidad: 200,
    unit: "m2",
    pesoUnitario: 10.89,
    image: "/products/chapas/chapa-rojo.webp",
    createdAt: 1700000000000,
    ...overrides,
  };
}

describe("buildWhatsAppUrl", () => {
  it("codifica el mensaje correctamente", () => {
    const url = buildWhatsAppUrl("Hola Panelex");
    expect(url).toBe("https://wa.me/34678978111?text=Hola%20Panelex");
  });

  it("acepta phone custom", () => {
    const url = buildWhatsAppUrl("test", "34123456789");
    expect(url).toContain("wa.me/34123456789");
  });

  it("codifica saltos de línea y caracteres especiales", () => {
    const url = buildWhatsAppUrl("línea 1\nlínea 2 + €");
    expect(url).toContain("%0A");
    expect(url).toContain("%E2%82%AC"); // € codificado
  });
});

describe("computeTotals", () => {
  it("agrupa correctamente por unidad", () => {
    const items = [
      makeItem({ cantidad: 100, unit: "m2", pesoUnitario: 10 }),
      makeItem({ id: "x", cantidad: 50, unit: "ml", pesoUnitario: 5 }),
      makeItem({ id: "y", cantidad: 200, unit: "m2", pesoUnitario: 11.77 }),
    ];
    const t = computeTotals(items);
    expect(t.itemCount).toBe(3);
    expect(t.byUnit.m2).toBe(300);
    expect(t.byUnit.ml).toBe(50);
    expect(t.byUnit.u).toBe(0);
    // 100*10 + 50*5 + 200*11.77 = 1000 + 250 + 2354 = 3604
    expect(t.totalWeight).toBe(3604);
  });

  it("totalWeight se redondea a 2 decimales", () => {
    const t = computeTotals([
      makeItem({ cantidad: 7, unit: "m2", pesoUnitario: 11.77 }),
    ]);
    expect(t.totalWeight).toBe(82.39);
  });
});

describe("formatCartForWhatsApp", () => {
  it("respeta la cabecera y el cierre del mensaje", () => {
    const msg = formatCartForWhatsApp([makeItem()], {});
    expect(msg).toMatch(/^\*SOLICITUD DE PRESUPUESTO — PANELEX\*\n_Generada desde panelex\.es_/);
    expect(msg).toMatch(/Quedo a la espera de presupuesto\. Gracias\.$/);
  });

  it("usa — cuando faltan datos de contacto", () => {
    const msg = formatCartForWhatsApp([makeItem()], {});
    expect(msg).toContain("• Nombre/Empresa: —");
    expect(msg).toContain("• Ubicación: —");
    expect(msg).toContain("• Plazo deseado: Sin especificar");
    expect(msg).toContain("Ninguna");
  });

  it("formatea correctamente los datos de contacto cuando están presentes", () => {
    const msg = formatCartForWhatsApp([makeItem()], {
      nombre: "Constructora ACME",
      poblacion: "Mérida",
      codigoPostal: "06800",
      plazo: "30 días",
      notas: "Entrega antes del 1 de junio",
    });
    expect(msg).toContain("• Nombre/Empresa: Constructora ACME");
    expect(msg).toContain("• Ubicación: Mérida, 06800");
    expect(msg).toContain("• Plazo deseado: 30 días");
    expect(msg).toContain("Entrega antes del 1 de junio");
  });

  it("incluye medida de corte solo cuando existe", () => {
    const withCut = formatCartForWhatsApp(
      [makeItem({ medidaCorte: 4200 })],
      {}
    );
    expect(withCut).toContain("• Medida de corte: 4.200 mm");

    const noCut = formatCartForWhatsApp([makeItem({ medidaCorte: undefined })], {});
    expect(noCut).not.toContain("Medida de corte");
  });

  it("omite peso cuando es 0 (accesorios)", () => {
    const msg = formatCartForWhatsApp(
      [
        makeItem({
          productName: "Cumbrera Fertelha",
          productCode: "ACC-CUMBRERA-FERTELHA",
          unit: "ml",
          cantidad: 9,
          pesoUnitario: 0,
        }),
      ],
      {}
    );
    expect(msg).not.toContain("Peso estimado");
  });

  it("numera los productos secuencialmente", () => {
    const msg = formatCartForWhatsApp(
      [
        makeItem({ productCode: "A" }),
        makeItem({ id: "b", productCode: "B" }),
        makeItem({ id: "c", productCode: "C" }),
      ],
      {}
    );
    expect(msg).toContain("1) ");
    expect(msg).toContain("2) ");
    expect(msg).toContain("3) ");
    expect(msg).toContain("(3 items)");
  });

  it("pluraliza items correctamente", () => {
    const one = formatCartForWhatsApp([makeItem()], {});
    expect(one).toContain("(1 item)");
    const many = formatCartForWhatsApp([makeItem(), makeItem({ id: "x" })], {});
    expect(many).toContain("(2 items)");
  });

  it("muestra el resumen con totales por unidad", () => {
    const msg = formatCartForWhatsApp(
      [
        makeItem({ cantidad: 100, unit: "m2", pesoUnitario: 10 }),
        makeItem({ id: "x", cantidad: 50, unit: "ml", pesoUnitario: 5 }),
      ],
      {}
    );
    expect(msg).toContain("Total cantidad: 100 m² · 50 ml");
    expect(msg).toContain("Peso total estimado: 1.250 kg");
  });

  it("formatea ml en accesorios correctamente", () => {
    const msg = formatCartForWhatsApp(
      [
        makeItem({
          productName: "Cumbrera Fertelha",
          productCode: "ACC-CUMBRERA-FERTELHA",
          espesorNominal: 0.45,
          espesorChapa: "0.45",
          unit: "ml",
          cantidad: 24,
          pesoUnitario: 0,
        }),
      ],
      {}
    );
    expect(msg).toContain("• Cantidad: 24 ml");
    expect(msg).toContain("• Espesor nominal: 0.45 mm");
  });
});
