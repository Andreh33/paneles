import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Cáceres | Fábrica directa — Panelex",
  },
  description:
    "Panel sándwich en la provincia de Cáceres: fábrica extremeña, corte a medida y entrega en Plasencia, Navalmoral, Trujillo y Coria. Pide presupuesto.",
  keywords: [
    "panel sándwich Cáceres",
    "paneles sándwich Cáceres",
    "fábrica panel sándwich Cáceres",
    "panel sándwich Plasencia",
    "chapa perfilada Cáceres",
    "panel imitación teja Cáceres",
  ],
  alternates: { canonical: "/panel-sandwich-caceres" },
  openGraph: {
    title: "Panel sándwich en Cáceres — Fábrica directa",
    description:
      "Fábrica extremeña de panel sándwich y chapa perfilada con servicio en toda la provincia de Cáceres. Corte a medida y transporte a tu obra.",
    type: "website",
    locale: "es_ES",
  },
};

const data: ZoneLandingData = {
  zone: "Cáceres",
  canonical: "/panel-sandwich-caceres",
  heroKicker: "Servicio en toda la provincia de Cáceres",
  heroTitleA: "Panel sándwich en Cáceres,",
  heroTitleB: "de fábrica extremeña.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz) y servimos toda la provincia de Cáceres: Plasencia, Navalmoral de la Mata, Trujillo, Coria y comarca. Venta directa de fábrica, corte a medida y transporte a tu obra.",
  whyHeading: "Una fábrica extremeña que llega a toda la provincia.",
  intro: [
    "Cáceres es la provincia más extensa de España, y eso hace que el coste y el plazo del transporte cuenten mucho. Al ser una fábrica extremeña —en Puebla de la Calzada, a un paso de la A-5 y la Vía de la Plata— servimos la provincia desde dentro de la región, sin los portes largos y caros que supone traer el panel desde el norte del país.",
    "Conocemos bien el norte de Extremadura: la dehesa y la ganadería extensiva, la agricultura de montaña del Valle del Jerte, La Vera y el Ambroz (cereza, pimentón, tabaco, aceite), los secaderos y cooperativas, y el clima más frío y húmedo del norte, donde un buen aislamiento marca una diferencia real dentro de la nave o la vivienda.",
    "Comprar directo de fábrica significa precio sin márgenes de intermediario, corte a la medida exacta de cada faldón y asesoramiento técnico de quien fabrica el material. Organizamos el transporte a cualquier punto de la provincia con el porte cerrado en el presupuesto.",
  ],
  zonesIntro:
    "Llegamos a toda la provincia de Cáceres. Estas son algunas de las zonas que atendemos; si tu localidad no aparece, pregúntanos.",
  zones: [
    { label: "Cáceres capital" },
    { label: "Plasencia", href: "/panel-sandwich-plasencia" },
    { label: "Navalmoral de la Mata" },
    { label: "Trujillo" },
    { label: "Coria" },
    { label: "Miajadas" },
    { label: "Valencia de Alcántara" },
    { label: "Jaraíz de la Vera" },
    { label: "Hervás y el Ambroz" },
    { label: "Valle del Jerte" },
    { label: "Las Hurdes" },
    { label: "Campo Arañuelo" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en Cáceres",
  apps: [
    "En la provincia de Cáceres el panel sándwich es habitual en el mundo agroganadero: naves de ganadería extensiva en la dehesa, secaderos, almacenes de cooperativa y naves de cultivo. En las comarcas de montaña —Jerte, La Vera, Ambroz— se usa para secaderos de pimentón y tabaco, almacenes de fruta y naves agrícolas que tienen que aguantar inviernos fríos y húmedos.",
    "El clima del norte de Extremadura hace que el aislamiento importe más que en el sur: una cubierta de panel sándwich evita condensaciones y mantiene mejor la temperatura, tanto en naves de trabajo como en vivienda. Por eso el panel imitación teja triunfa en casas rurales, alojamientos de turismo y rehabilitación de tejados, donde además aporta la estética tradicional sin el peso ni el mantenimiento de la teja cerámica.",
    "En los núcleos industriales de Plasencia, Navalmoral de la Mata, Trujillo y Coria, el panel de cubierta y fachada es el cerramiento estándar de naves, talleres y almacenes. Y para cocheras, porches y casetas, la chapa perfilada y el panel básico resuelven con la mínima inversión.",
  ],
  pricingHeading: "Precio y entrega en la provincia",
  pricing: [
    "El precio del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios. Al fabricar dentro de la región evitamos los portes largos desde otras comunidades, lo que ayuda a que el coste puesto en obra sea competitivo incluso en las comarcas más alejadas de la provincia.",
    "Para un presupuesto cerrado necesitamos las medidas de la cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Organizamos el transporte según el volumen del pedido y te lo incluimos cerrado en el presupuesto.",
    "Escríbenos por WhatsApp con las medidas o unas fotos y te respondemos; también puedes llamarnos o usar el formulario de contacto.",
  ],
  faqs: [
    {
      question: "¿Servís panel sándwich a la provincia de Cáceres?",
      answer:
        "Sí. Fabricamos en Puebla de la Calzada (Badajoz) y servimos toda la provincia de Cáceres: capital, Plasencia, Navalmoral de la Mata, Trujillo, Coria y comarcas. Llevamos el material a tu obra con el porte incluido en el presupuesto.",
    },
    {
      question: "¿Compensa comprar a una fábrica de Badajoz para una obra en Cáceres?",
      answer:
        "Sí: seguimos dentro de Extremadura, así que el transporte es mucho más corto y barato que traer el panel del norte de España, y compras directo de fábrica sin intermediarios.",
    },
    {
      question: "¿Qué panel conviene con el clima frío del norte de Cáceres?",
      answer:
        "En zonas frías y húmedas conviene subir el espesor del aislamiento para evitar condensaciones y ganar confort. Te orientamos según el uso del edificio cuando nos pidas presupuesto.",
    },
    {
      question: "¿Tenéis panel imitación teja para casas rurales?",
      answer:
        "Sí, la gama Fertelha reproduce la teja tradicional con el aislamiento del panel, ideal para vivienda, alojamientos de turismo rural y rehabilitación de tejados en la provincia.",
    },
    {
      question: "¿Cortáis a medida y entregáis en comarcas alejadas?",
      answer:
        "Sí, cortamos cada panel a la medida exacta de tu faldón y organizamos el transporte a cualquier punto de la provincia, también a las comarcas de montaña.",
    },
  ],
  related: [
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich en Plasencia", href: "/panel-sandwich-plasencia" },
    { label: "Panel sándwich en Mérida", href: "/panel-sandwich-merida" },
    { label: "Panel sándwich en Badajoz", href: "/panel-sandwich-badajoz" },
    { label: "Panel sándwich para secadero de jamón", href: "/sobre-nosotros/panel-sandwich-para-secadero-de-jamon" },
    { label: "Ver catálogo de productos", href: "/productos" },
  ],
};

export default function PanelSandwichCaceresPage() {
  return <ZoneLanding data={data} />;
}
