import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Mérida | Fábrica a un paso — Panelex",
  },
  description:
    "Fábrica de panel sándwich junto a Mérida (Puebla de la Calzada): venta directa, corte a medida y entrega ágil en Montijo, Calamonte y Almendralejo. Pide presupuesto.",
  keywords: [
    "panel sándwich Mérida",
    "paneles sándwich Mérida",
    "fábrica panel sándwich Mérida",
    "panel sándwich Badajoz",
    "chapa perfilada Mérida",
    "panel imitación teja Mérida",
  ],
  alternates: { canonical: "/panel-sandwich-merida" },
  openGraph: {
    title: "Panel sándwich en Mérida — Fábrica a un paso",
    description:
      "Fabricamos panel sándwich y chapa perfilada junto a Mérida, en Puebla de la Calzada (A-5). Venta directa, corte a medida y entrega ágil en Mérida y su comarca.",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: ZoneLandingData = {
  zone: "Mérida",
  canonical: "/panel-sandwich-merida",
  heroKicker: "Fabricantes a un paso de Mérida",
  heroTitleA: "Panel sándwich en Mérida,",
  heroTitleB: "fábrica a un paso.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada, a pie de la autovía A-5 y a apenas media hora de Mérida. Vendemos directo de fábrica, con corte a medida y entrega ágil en la capital extremeña y su comarca: Montijo, Calamonte, Almendralejo, Guareña y las Vegas del Guadiana.",
  whyHeading: "La fábrica está a un paso de Mérida.",
  quickAnswer:
    "La fábrica de panel sándwich más cercana a Mérida es Panelex, en Puebla de la Calzada, a pie de la A-5 y a media hora de la ciudad. Fabrica y vende directo panel de cubierta, fachada e imitación teja de 30 a 100 mm, cortado a medida, con entrega ágil en Mérida y su comarca y presupuesto cerrado por WhatsApp el mismo día.",
  intro: [
    "No somos un distribuidor que trae el panel desde el norte de España: fabricamos aquí al lado, en Puebla de la Calzada, a pie de la autovía A-5 y a apenas media hora de Mérida. Para una obra en la capital extremeña eso significa la máxima cercanía posible, transporte corto y plazos ágiles, sin los portes largos que encarecen el material cuando llega de fuera de la región.",
    "Conocemos Mérida y su entorno porque trabajamos aquí a diario. Es el gran cruce de caminos de Extremadura, donde se juntan la A-5 y la A-66 (Ruta de la Plata), y eso la ha convertido en un nudo logístico e industrial con polígonos como El Prado. Alrededor, las Vegas del Guadiana riegan una potente agroindustria, mientras el casco histórico romano convive con barrios donde toca renovar cubiertas antiguas.",
    "Comprar directo de fábrica y tan cerca tiene tres ventajas claras: el precio sale sin márgenes de intermediario, cada panel se corta a la medida exacta de tu faldón o fachada (sin mermas) y cualquier duda técnica la responde quien fabrica el material. Y como la planta está a un paso de Mérida, puedes acercarte a verla y comprobar el producto antes de comprar.",
  ],
  zonesIntro:
    "Servimos a diario en Mérida y toda su comarca, de las Vegas Bajas a la Tierra de Barros. Estas son algunas de las zonas que atendemos; si tu localidad no aparece, pregúntanos: llegamos a toda la comarca y a la región.",
  zones: [
    { label: "Mérida" },
    { label: "Calamonte" },
    { label: "Montijo" },
    { label: "Puebla de la Calzada" },
    { label: "Esparragalejo" },
    { label: "Guareña" },
    { label: "Almendralejo" },
    { label: "Villafranca de los Barros" },
    { label: "Alange" },
    { label: "Don Benito" },
    { label: "Villanueva de la Serena" },
    { label: "Miajadas" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en Mérida",
  apps: [
    "Mérida es el nudo logístico e industrial de Extremadura: en el cruce de la A-5 y la A-66, sus polígonos (El Prado y el entorno de la carretera de la estación) concentran naves logísticas, talleres, almacenes de distribución y concesionarios. Ahí el panel sándwich es el cerramiento estándar de cubierta y fachada, porque aísla, se monta rápido y deja la nave lista para operar.",
    "Alrededor de la ciudad, las Vegas del Guadiana concentran una intensa actividad agrícola y ganadera. En Montijo, Calamonte, Guareña y La Zarza el panel cubre naves de agroindustria, almacenes de maquinaria y fruta y secaderos, con la variante Agropanel para los ambientes ganaderos más corrosivos. Y en la vecina Tierra de Barros, hacia Almendralejo y Villafranca, resuelve bodegas y naves de elaboración donde el aislamiento ayuda a estabilizar la temperatura.",
    "En una ciudad con tanto patrimonio y vivienda consolidada, la rehabilitación es constante: el panel imitación teja sustituye tejados viejos de teja o fibrocemento sin obra pesada, aligera la estructura y suma aislamiento. Para garajes, porches, cocheras y casetas de las urbanizaciones del entorno, el panel de cubierta básico o la chapa perfilada son la opción más económica y lista para montar.",
  ],
  pricingHeading: "Precio y entrega en Mérida",
  pricing: [
    "Tener la fábrica tan cerca juega a tu favor en el precio: el transporte hasta Mérida es corto y se ajusta al presupuesto sin sorpresas. El coste del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios; al comprar a fábrica te ahorras además el margen de la distribución.",
    "Para darte un precio cerrado solo necesitamos las medidas de tu cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Con eso preparamos un presupuesto con corte a medida y porte incluido, normalmente el mismo día laborable.",
    "La forma más rápida es el WhatsApp: nos mandas las medidas o unas fotos y te respondemos. También puedes llamarnos o pasarte por la fábrica, que la tienes a un paso de Mérida.",
  ],
  faqs: [
    {
      question: "¿Dónde está la fábrica de panel sándwich más cercana a Mérida?",
      answer:
        "En Puebla de la Calzada, a pie de la A-5 y a apenas media hora de Mérida. Fabricamos panel sándwich y chapa perfilada, y vendemos directo de fábrica, sin intermediarios y con corte a medida.",
    },
    {
      question: "¿En cuánto tiempo servís una obra en Mérida?",
      answer:
        "Al estar la fábrica tan cerca, los plazos son ágiles: el presupuesto suele salir el mismo día laborable y la entrega en Mérida es rápida, con el porte cerrado dentro del precio.",
    },
    {
      question: "¿Trabajáis con naves y polígonos industriales de Mérida?",
      answer:
        "Sí. Suministramos panel de cubierta y fachada para naves logísticas, talleres y almacenes de los polígonos de Mérida, como El Prado, y para el resto de la comarca de las Vegas Bajas.",
    },
    {
      question: "¿Puedo cubrir una vivienda o un porche en Mérida siendo particular?",
      answer:
        "Claro. Atendemos a empresas, agricultores, ganaderos, instaladores y particulares. Para vivienda solemos recomendar el panel imitación teja, que renueva el tejado sin obra pesada. Pásanos las medidas y te preparamos el presupuesto.",
    },
    {
      question: "¿Cortáis el panel a medida?",
      answer:
        "Sí, cada panel sale de fábrica con la longitud exacta de tu cubierta o fachada, lo que reduce solapes y residuos en obra.",
    },
  ],
  related: [
    { label: "Panel sándwich en Badajoz", href: "/panel-sandwich-badajoz" },
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich en Don Benito", href: "/panel-sandwich-don-benito" },
    { label: "Panel sándwich para nave industrial", href: "/sobre-nosotros/panel-sandwich-nave-industrial" },
    { label: "Precio del panel sándwich por m²", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
  ],
};

export default function PanelSandwichMeridaPage() {
  return <ZoneLanding data={data} />;
}
