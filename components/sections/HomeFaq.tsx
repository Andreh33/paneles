import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/jsonld";

/**
 * FAQ de la home — preguntas de intención de compra (precio, plazos,
 * transporte). Distintas de las FAQ de /sobre-nosotros para no duplicar
 * contenido. Se emiten también como FAQPage en JSON-LD.
 */
const FAQS: FaqItem[] = [
  {
    question: "¿Cuánto cuesta el panel sándwich por metro cuadrado?",
    answer:
      "Depende del espesor del núcleo (30 a 100 mm), del grosor de la chapa (0,3 a 0,5 mm), del acabado y del destino del transporte. Al fabricar y vender directo, sin intermediarios, el precio sale ajustado de fábrica. Envíanos las medidas por WhatsApp y recibirás un presupuesto cerrado con porte incluido, normalmente el mismo día laborable.",
  },
  {
    question: "¿Cuál es el plazo de entrega del panel sándwich?",
    answer:
      "Las referencias estándar suelen servirse en pocos días laborables desde la confirmación del pedido, según la carga de fabricación y la ruta de transporte. Los pedidos con corte a medida se programan en línea de producción y te confirmamos fecha exacta al aceptar el presupuesto.",
  },
  {
    question: "¿Qué diferencia hay entre panel sándwich y chapa simple?",
    answer:
      "La chapa perfilada es una sola lámina de acero sin aislamiento: más económica, pero genera condensaciones en locales cerrados. El panel sándwich añade un núcleo de poliuretano entre dos chapas, que aísla térmicamente y elimina las condensaciones. Para espacios de trabajo, almacenaje sensible o estancia de animales, conviene panel; para porches, vallados y cobertizos ventilados, la chapa resuelve.",
  },
  {
    question: "¿Hacéis el transporte hasta la obra?",
    answer:
      "Sí. Organizamos el transporte a cualquier punto de España y Portugal y lo incluimos cerrado en el presupuesto. En Extremadura y Andalucía occidental servimos con rutas frecuentes; para el resto de la península programamos camión completo o carga agrupada según el volumen.",
  },
  {
    question: "¿Vendéis a particulares o solo a empresas?",
    answer:
      "Vendemos a ambos. Atendemos igual a constructoras e instaladores que a particulares que cubren un garaje, un porche o renuevan el tejado de su vivienda. No hay pedido mínimo: te asesoramos sobre el panel y el espesor adecuados para tu caso.",
  },
  {
    question: "¿El panel sándwich sirve para una vivienda?",
    answer:
      "Sí, y es una de sus aplicaciones que más crece. El panel imitación teja Fertelha ofrece la estética de la teja tradicional con mucho menos peso y aislamiento incorporado, ideal para obra nueva y para rehabilitar tejados envejecidos sin obra pesada. Se fabrica en terracota, chocolate y gris, cortado a la medida de cada faldón.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-[var(--color-surface)]">
      <JsonLd data={faqLd(FAQS)} />
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Antes de pedir presupuesto.
        </h2>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[var(--color-border)] bg-white p-6"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--color-muted)]">
          ¿Tu duda no está aquí? Llámanos al{" "}
          <a
            href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
            className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
          >
            {SITE.contact.phone}
          </a>{" "}
          ({SITE.contact.hours}) o escríbenos por WhatsApp: respondemos con
          criterio de fábrica, no con un guion comercial.
        </p>
      </div>
    </section>
  );
}
