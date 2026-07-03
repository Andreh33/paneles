import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Badajoz | Fábrica directa — Panelex",
  },
  description:
    "Fábrica de panel sándwich en la provincia de Badajoz: venta directa, corte a medida y entrega en Mérida, Don Benito, Almendralejo y Zafra. Pide presupuesto.",
  keywords: [
    "panel sándwich Badajoz",
    "paneles sándwich Badajoz",
    "fábrica panel sándwich Badajoz",
    "panel sándwich Mérida",
    "chapa perfilada Badajoz",
    "panel imitación teja Badajoz",
  ],
  alternates: { canonical: "/panel-sandwich-badajoz" },
  openGraph: {
    title: "Panel sándwich en Badajoz — Fábrica directa",
    description:
      "Fabricamos panel sándwich y chapa perfilada en la provincia de Badajoz. Venta directa, corte a medida y entrega en toda la provincia.",
    type: "website",
    locale: "es_ES",
  },
};

const data: ZoneLandingData = {
  zone: "Badajoz",
  canonical: "/panel-sandwich-badajoz",
  heroKicker: "Fabricantes en la provincia de Badajoz",
  heroTitleA: "Panel sándwich en Badajoz,",
  heroTitleB: "somos la fábrica.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada, en plena provincia de Badajoz. Vendemos directo de fábrica, con corte a medida y entrega ágil en toda la provincia: Mérida, Don Benito, Almendralejo, Zafra y comarca.",
  whyHeading: "La fábrica está en tu provincia.",
  intro: [
    "No somos un distribuidor que trae el panel desde el norte de España: somos una fábrica situada en la propia provincia de Badajoz, en Puebla de la Calzada, a pie de la autovía A-5. Para una obra en Badajoz eso significa la máxima cercanía posible, transporte corto y plazos ágiles, sin los portes largos que encarecen el material cuando viene de lejos.",
    "Conocemos el terreno porque trabajamos en él a diario: las Vegas del Guadiana y su agricultura de regadío, la Tierra de Barros y sus bodegas, la dehesa de La Serena y la Sierra Suroeste con su ganadería, y los polígonos industriales de Badajoz capital y Mérida. Eso nos permite recomendarte el panel adecuado para cada tipo de obra de la provincia.",
    "Comprar directo de fábrica en tu propia provincia tiene tres ventajas claras: el precio sale sin márgenes de intermediario, cada panel se corta a la medida exacta de tu faldón o fachada (sin mermas) y cualquier duda técnica la responde quien fabrica el material. Además puedes visitar la planta y ver el producto antes de comprarlo.",
  ],
  zonesIntro:
    "Servimos a diario en toda la provincia de Badajoz. Estas son algunas de las zonas que atendemos; si tu localidad no aparece, pregúntanos: llegamos a toda la provincia y a la región.",
  zones: [
    { label: "Mérida", href: "/panel-sandwich-merida" },
    { label: "Don Benito y Villanueva", href: "/panel-sandwich-don-benito" },
    { label: "Almendralejo y Zafra", href: "/sobre-nosotros/panel-sandwich-en-almendralejo-y-zafra" },
    { label: "Badajoz capital" },
    { label: "Puebla de la Calzada" },
    { label: "Montijo" },
    { label: "Villafranca de los Barros" },
    { label: "Olivenza" },
    { label: "Jerez de los Caballeros" },
    { label: "Azuaga" },
    { label: "Castuera" },
    { label: "Villanueva del Fresno" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en Badajoz",
  apps: [
    "La provincia de Badajoz es eminentemente agrícola y ganadera, y ahí el panel sándwich es protagonista. En las Vegas del Guadiana (Don Benito, Villanueva, Montijo) cubre naves de agroindustria, almacenes de fruta y maquinaria y secaderos. En la Tierra de Barros (Almendralejo, Villafranca) se usa en bodegas y naves de elaboración, donde el aislamiento ayuda a estabilizar la temperatura del vino.",
    "En la dehesa de La Serena, la Sierra Suroeste y el entorno de Zafra, el panel resuelve explotaciones ganaderas, naves de ovino y porcino y secaderos de ibérico, con la variante Agropanel para los ambientes más corrosivos. Y en los polígonos industriales de Badajoz capital y Mérida es el cerramiento estándar de naves logísticas, talleres y almacenes.",
    "En vivienda y rehabilitación, el panel imitación teja sustituye tejados viejos de teja o fibrocemento sin obra pesada, aligera la estructura y añade aislamiento. Para garajes, porches, cocheras y casetas, el panel de cubierta básico o la chapa perfilada ofrecen la solución más económica, lista para montar.",
  ],
  pricingHeading: "Precio y entrega en la provincia",
  pricing: [
    "Estar dentro de la provincia juega a tu favor en el precio: el transporte es corto y se ajusta al presupuesto sin sorpresas. El coste del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios; al comprar a fábrica te ahorras además el margen de la distribución.",
    "Para darte un precio cerrado solo necesitamos las medidas de tu cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Con eso preparamos un presupuesto con corte a medida y porte incluido, normalmente el mismo día laborable.",
    "La forma más rápida es el WhatsApp: nos mandas las medidas o unas fotos y te respondemos. También puedes llamarnos o usar el formulario de contacto.",
  ],
  faqs: [
    {
      question: "¿Tenéis fábrica de panel sándwich en Badajoz?",
      answer:
        "Sí. Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada, en la provincia de Badajoz. Vendemos directo de fábrica, sin intermediarios, con corte a medida.",
    },
    {
      question: "¿Servís a toda la provincia de Badajoz?",
      answer:
        "Sí: Badajoz capital, Mérida, Don Benito, Villanueva de la Serena, Almendralejo, Zafra, Montijo, Olivenza, Jerez de los Caballeros y el resto de la provincia. Llevamos el material a tu obra con el porte cerrado en el presupuesto.",
    },
    {
      question: "¿Sale más barato por estar la fábrica en Badajoz?",
      answer:
        "El transporte dentro de la provincia es corto y económico, y al comprar directo de fábrica te ahorras los márgenes de la distribución. Eso se nota en el precio final puesto en obra.",
    },
    {
      question: "¿Puedo comprar siendo particular?",
      answer:
        "Por supuesto. Atendemos a empresas, agricultores, ganaderos, instaladores y particulares que cubren una vivienda, un porche, un garaje o una caseta. Nos pasas las medidas y te preparamos el presupuesto.",
    },
    {
      question: "¿Cortáis el panel a medida?",
      answer:
        "Sí, cada panel sale de fábrica con la longitud exacta de tu cubierta o fachada, lo que reduce solapes y residuos en obra.",
    },
  ],
  related: [
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich en Cáceres", href: "/panel-sandwich-caceres" },
    { label: "Panel sándwich en Mérida", href: "/panel-sandwich-merida" },
    { label: "Panel sándwich en Don Benito y Villanueva", href: "/panel-sandwich-don-benito" },
    { label: "Panel sándwich en Almendralejo y Zafra", href: "/sobre-nosotros/panel-sandwich-en-almendralejo-y-zafra" },
    { label: "Panel sándwich para secadero de jamón", href: "/sobre-nosotros/panel-sandwich-para-secadero-de-jamon" },
    { label: "Panel sándwich para bodega", href: "/sobre-nosotros/panel-sandwich-para-bodega" },
  ],
};

export default function PanelSandwichBadajozPage() {
  return <ZoneLanding data={data} />;
}
