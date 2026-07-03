import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Don Benito | Fábrica directa — Panelex",
  },
  description:
    "Fábrica de panel sándwich cerca de Don Benito y Villanueva: venta directa, corte a medida y entrega en las Vegas Altas del Guadiana. Pide presupuesto.",
  keywords: [
    "panel sándwich Don Benito",
    "paneles sándwich Don Benito",
    "panel sándwich Villanueva de la Serena",
    "panel sándwich Vegas Altas",
    "chapa perfilada Don Benito",
    "panel sándwich agrícola Badajoz",
  ],
  alternates: { canonical: "/panel-sandwich-don-benito" },
  openGraph: {
    title: "Panel sándwich en Don Benito — Fábrica directa",
    description:
      "Fabricamos panel sándwich y chapa perfilada muy cerca de Don Benito y Villanueva de la Serena. Venta directa, corte a medida y entrega en las Vegas Altas.",
    type: "website",
    locale: "es_ES",
  },
};

const data: ZoneLandingData = {
  zone: "Don Benito",
  canonical: "/panel-sandwich-don-benito",
  heroKicker: "Fabricantes a un paso de las Vegas Altas del Guadiana",
  heroTitleA: "Panel sándwich en Don Benito,",
  heroTitleB: "la fábrica está al lado.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada, a menos de una hora de Don Benito por la A-5 y la EX-206. Vendemos directo de fábrica, con corte a medida y entrega rápida en la conurbación de Don Benito y Villanueva de la Serena y en toda la comarca de las Vegas Altas del Guadiana.",
  whyHeading: "Tienes la fábrica muy cerca.",
  intro: [
    "No traemos el panel desde el norte de España: lo fabricamos aquí al lado, en Puebla de la Calzada, a un corto trayecto de Don Benito y Villanueva por la A-5 y la EX-206. Para una obra en las Vegas Altas eso se traduce en portes cortos, plazos ágiles y la posibilidad de acercarte a la planta a ver el material antes de comprarlo, sin los sobrecostes de transporte de quien fabrica lejos.",
    "Conocemos bien la comarca porque trabajamos en ella a diario. Las Vegas Altas del Guadiana son una de las mayores zonas de regadío de España, con los canales de Orellana y del Zújar: la fruta de hueso, el tomate para industria, el arroz y el maíz mueven una potente agroindustria de centrales hortofrutícolas, almacenes de maquinaria agrícola y secaderos. A un paso, la dehesa de La Serena suma ovino, quesos y ganadería extensiva. Cada uso pide un panel distinto y sabemos cuál encaja.",
    "Comprar directo de fábrica y tan cerca tiene ventajas claras: el precio sale sin márgenes de intermediario, cada panel se corta a la longitud exacta de tu faldón o fachada para no generar mermas, y cualquier duda técnica la resuelve quien produce el material. Tanto si cubres una nave en el polígono San Isidro de Don Benito como una explotación en plena vega, hablas siempre con fábrica.",
  ],
  zonesIntro:
    "Servimos a diario en las Vegas Altas del Guadiana y su entorno. Estas son algunas de las localidades que atendemos; si la tuya no aparece, pregúntanos: llegamos a toda la comarca y al resto de la provincia de Badajoz.",
  zones: [
    { label: "Don Benito y Villanueva", href: "/sobre-nosotros/panel-sandwich-en-don-benito-y-villanueva" },
    { label: "Miajadas" },
    { label: "Santa Amalia" },
    { label: "Medellín" },
    { label: "Guareña" },
    { label: "Valdivia" },
    { label: "Villar de Rena" },
    { label: "La Coronada" },
    { label: "Cristina" },
    { label: "Campanario" },
    { label: "Castuera" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en Don Benito",
  apps: [
    "Las Vegas Altas viven de la agroindustria y ahí el panel sándwich es imprescindible. En Don Benito, Villanueva, Santa Amalia o Guareña cubre centrales hortofrutícolas y almacenes de fruta de hueso, naves de tomate para industria y cámaras frigoríficas, donde el aislamiento del núcleo mantiene la temperatura y protege la cosecha. En Miajadas, capital del tomate, resuelve grandes naves de transformación agroalimentaria.",
    "El tejido industrial de la comarca también tira del panel: naves de maquinaria agrícola y talleres en el polígono San Isidro de Don Benito y en los polígonos de Villanueva, almacenes logísticos y pabellones feriales como los del recinto de FEVAL, sede de AGROEXPO. En un sector donde cada campaña marca los plazos, el panel sándwich cierra cubierta y fachada en poco tiempo y con acabados nervados listos para montar.",
    "En las explotaciones ganaderas de la vega y de la vecina Serena, el panel resuelve naves de ovino y porcino, cebaderos y secaderos, con la variante Agropanel para los ambientes más corrosivos. Y en vivienda, el panel imitación teja sustituye tejados viejos de teja o fibrocemento sin obra pesada; para porches, garajes y casetas de labor, la chapa perfilada es la opción más económica y rápida de montar.",
  ],
  pricingHeading: "Precio y entrega en las Vegas Altas",
  pricing: [
    "La cercanía juega a tu favor en el precio: al estar la fábrica tan cerca de Don Benito, el transporte es corto y se ajusta al presupuesto sin sorpresas. El coste del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios; comprando a fábrica te ahorras además el margen de la distribución.",
    "Para cerrarte un precio solo necesitamos las medidas de tu cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Con eso preparamos un presupuesto con corte a medida y porte incluido, normalmente el mismo día laborable.",
    "La vía más rápida es el WhatsApp: nos mandas las medidas o unas fotos de la nave y te respondemos. También puedes llamarnos o escribirnos por el formulario de contacto.",
  ],
  faqs: [
    {
      question: "¿Dónde está vuestra fábrica si trabajo en Don Benito?",
      answer:
        "En Puebla de la Calzada, a menos de una hora de Don Benito por la A-5 y la EX-206. Fabricamos panel sándwich y chapa perfilada y vendemos directo de fábrica, sin intermediarios y con corte a medida.",
    },
    {
      question: "¿Servís a Don Benito y Villanueva de la Serena?",
      answer:
        "Sí, es una de nuestras zonas habituales. Atendemos toda la conurbación de Don Benito y Villanueva y las localidades de las Vegas Altas: Santa Amalia, Medellín, Guareña, Miajadas, Valdivia y más. Llevamos el material a obra con el porte cerrado en el presupuesto.",
    },
    {
      question: "¿Tenéis panel adecuado para naves agrícolas y cámaras frigoríficas?",
      answer:
        "Sí. Para almacenes de fruta, naves de tomate y cámaras frigoríficas trabajamos espesores de núcleo mayores, que mejoran el aislamiento. Para explotaciones ganaderas y secaderos ofrecemos la gama Agropanel, más resistente a ambientes corrosivos. Te asesoramos según el uso.",
    },
    {
      question: "¿Sale más barato por tener la fábrica tan cerca?",
      answer:
        "El transporte hasta las Vegas Altas es corto y económico, y al comprar directo de fábrica te ahorras los márgenes de la distribución. Eso se nota en el precio final puesto en obra.",
    },
    {
      question: "¿Puedo comprar como agricultor o particular, no solo empresa?",
      answer:
        "Claro. Atendemos a cooperativas, agricultores, ganaderos, instaladores y particulares que cubren una nave, un porche o una vivienda. Nos pasas las medidas y te preparamos el presupuesto sin compromiso.",
    },
  ],
  related: [
    { label: "Panel sándwich en Badajoz", href: "/panel-sandwich-badajoz" },
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich en Don Benito y Villanueva (guía)", href: "/sobre-nosotros/panel-sandwich-en-don-benito-y-villanueva" },
    { label: "Panel sándwich para nave industrial", href: "/sobre-nosotros/panel-sandwich-nave-industrial" },
    { label: "Precio del panel sándwich por m²", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
  ],
};

export default function PanelSandwichDonBenitoPage() {
  return <ZoneLanding data={data} />;
}
