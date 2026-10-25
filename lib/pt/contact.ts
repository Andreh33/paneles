import { SITE } from "@/lib/site";

export function ptWhatsApp(text: string) {
  return `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildQuoteMessage({
  name,
  place,
  product,
  measures,
  installation,
}: {
  name: string;
  place: string;
  product: string;
  measures: string;
  installation: boolean;
}) {
  return [
    "Olá, gostaria de pedir um orçamento Panelex para Portugal.",
    `Nome: ${name.trim() || "Não indicado"}`,
    `Local de entrega: ${place.trim()}`,
    `Material: ${product || "A definir com a fábrica"}`,
    `Medidas, quantidades e observações: ${measures.trim()}`,
    installation
      ? "Confirmar disponibilidade e condições de montagem."
      : "Pedido de fornecimento; montagem não solicitada.",
    "Confirmar transporte, meios de descarga, prazo, impostos e condições antes da encomenda.",
  ].join("\n");
}
