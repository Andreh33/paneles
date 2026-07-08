/**
 * PANELEX — Tabla de precios orientativos "desde €/m²" (PREPARADA, NO ACTIVA)
 *
 * ⚠️ GATE EDITORIAL: publicar precios requiere el OK del dueño a la línea
 * editorial (hoy no se publican cifras propias "por no inventar"). Todo el
 * bloque queda listo detrás de PRICE_TABLE_ENABLED: cuando el dueño apruebe,
 * basta cambiar ese flag a `true` y desplegar. Nada más.
 *
 * Los rangos NO son inventados: son los rangos de MERCADO 2026 documentados
 * en el informe de competencia (panelfix "desde 14 €/m²", aceropanel 27 €/m²
 * base, cronoshare/Obramat/Leroy Merlin). Se publican como orientación de
 * material con disclaimer y CTA a presupuesto cerrado, que es exactamente lo
 * que hace la competencia que gana el snippet de precio y la cita de IA.
 */
import { ORG_ID } from "./jsonld";
import { SITE } from "./site";

/** ÚNICO interruptor: ponlo a `true` (con OK del dueño) para publicar la tabla. */
export const PRICE_TABLE_ENABLED = false;

export interface PriceRange {
  /** Tipo de panel (etiqueta visible y nombre del Product en el schema) */
  tipo: string;
  /** Espesores habituales del rango */
  espesor: string;
  /** Precio orientativo de material, €/m² (rango de mercado 2026) */
  desde: number;
  hasta: number;
  /** Ruta interna relacionada (ficha o categoría) */
  href: string;
  /** Nota de uso que acompaña la fila */
  nota: string;
  /** Si es false, la fila es solo informativa y NO emite AggregateOffer
   *  (p. ej. la sustitución de uralita incluye trabajo de terceros RERA). */
  esOfertaPropia: boolean;
}

export const MARKET_PRICE_RANGES: PriceRange[] = [
  {
    tipo: "Panel sándwich de cubierta (3 grecas)",
    espesor: "30–50 mm",
    desde: 20,
    hasta: 28,
    href: "/productos?categoria=cubierta",
    nota: "El estándar de nave agrícola e industrial",
    esOfertaPropia: true,
  },
  {
    tipo: "Panel sándwich imitación teja",
    espesor: "30–80 mm",
    desde: 25,
    hasta: 45,
    href: "/productos/fertelha-terracota",
    nota: "Vivienda, casas de campo y rehabilitación",
    esOfertaPropia: true,
  },
  {
    tipo: "Panel sándwich de fachada",
    espesor: "30–80 mm",
    desde: 22,
    hasta: 35,
    href: "/productos?categoria=fachada",
    nota: "Fijación vista u oculta",
    esOfertaPropia: true,
  },
  {
    tipo: "Sustitución de uralita (retirada RERA + cubierta nueva instalada)",
    espesor: "según proyecto",
    desde: 45,
    hasta: 85,
    href: "/sobre-nosotros/como-retirar-uralita-con-amianto",
    nota: "Coste integral de mercado; la retirada la ejecuta una empresa RERA",
    esOfertaPropia: false,
  },
];

export const PRICE_DISCLAIMER =
  "Precios orientativos de material por m² basados en rangos de mercado de 2026 (sin IVA). El precio final depende de la medida, el espesor, la chapa, el color, el volumen del pedido y el transporte: pide tu presupuesto cerrado sin compromiso y te respondemos el mismo día laborable.";

/** Mensaje pre-rellenado del CTA de WhatsApp de la tabla de precios. */
export const PRICE_WHATSAPP_MESSAGE = [
  "Hola Panelex,",
  "",
  "He visto los precios orientativos por m² en la web y quiero un presupuesto cerrado.",
  "Tipo de panel: ",
  "Medidas aproximadas (m²): ",
  "Población de la obra: ",
].join("\n");

/**
 * JSON-LD de la tabla: un Product por gama PROPIA con AggregateOffer
 * (lowPrice/highPrice en EUR por m², vía UnitPriceSpecification con
 * referenceQuantity 1 MTK). Es el product rich result con precio que ningún
 * fabricante nacional emite. La fila de uralita no lleva offer (incluye
 * trabajo de terceros) y queda fuera a propósito.
 */
export function priceCatalogLd() {
  return MARKET_PRICE_RANGES.filter((r) => r.esOfertaPropia).map((r) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${r.tipo} — ${r.espesor}`,
    description: `${r.nota}. Fabricado y cortado a medida por Panelex en Puebla de la Calzada (Badajoz).`,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    url: `${SITE.url}${r.href}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: r.desde,
      highPrice: r.hasta,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        minPrice: r.desde,
        maxPrice: r.hasta,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MTK",
          unitText: "m²",
        },
      },
      seller: { "@id": ORG_ID },
      url: `${SITE.url}${r.href}`,
    },
  }));
}
