import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Plasencia | Fábrica en Extremadura — Panelex",
  },
  description:
    "Fábrica de panel sándwich en Extremadura que sirve Plasencia y el norte de Cáceres: Valle del Jerte, La Vera y Ambroz. Corte a medida y entrega. Pide presupuesto.",
  keywords: [
    "panel sándwich Plasencia",
    "paneles sándwich Plasencia",
    "panel sándwich norte de Cáceres",
    "panel sándwich Valle del Jerte",
    "panel sándwich La Vera",
    "panel imitación teja Plasencia",
  ],
  alternates: { canonical: "/panel-sandwich-plasencia" },
  openGraph: {
    title: "Panel sándwich en Plasencia — Fábrica en Extremadura",
    description:
      "Fabricamos panel sándwich y chapa perfilada en Extremadura. Servimos Plasencia y el norte de Cáceres: Valle del Jerte, La Vera, Ambroz y las Vegas del Alagón.",
    type: "website",
    locale: "es_ES",
  },
};

const data: ZoneLandingData = {
  zone: "Plasencia",
  canonical: "/panel-sandwich-plasencia",
  heroKicker: "Fabricantes en Extremadura, servimos el norte de Cáceres",
  heroTitleA: "Panel sándwich en Plasencia,",
  heroTitleB: "fabricado en Extremadura.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz), en la misma Extremadura. Servimos directo de fábrica el norte de Cáceres: Plasencia, el Valle del Jerte, La Vera, el Ambroz y las Vegas del Alagón, con corte a medida y entrega que sube por la A-66.",
  whyHeading: "La fábrica está en tu región.",
  intro: [
    "No traemos el panel desde el norte de España: lo fabricamos en la propia Extremadura, en Puebla de la Calzada, junto a la A-5. Para una obra en Plasencia o en cualquier pueblo del norte de Cáceres eso significa material de la misma región, un porte corto que sube por la Ruta de la Plata (A-66) y plazos ágiles, sin los transportes largos que encarecen el panel cuando llega de fuera.",
    "Conocemos el norte cacereño porque es nuestra tierra: el Valle del Jerte y sus cerezos, La Vera y sus secaderos de pimentón y tabaco, el Valle del Ambroz y sus castaños, las Vegas del Alagón en torno a Coria y el Campo Arañuelo de Navalmoral. Es una comarca de agricultura de montaña, ganadería y turismo rural, y cada una de esas obras pide un panel distinto.",
    "Comprar directo de fábrica en tu región tiene tres ventajas claras: el precio sale sin márgenes de intermediario, cada panel se corta a la medida exacta de tu faldón o fachada (sin mermas) y cualquier duda técnica la resuelve quien fabrica el material. Y si quieres, puedes acercarte a la planta a ver el producto antes de comprarlo.",
  ],
  zonesIntro:
    "Servimos todo el norte de Cáceres desde nuestra fábrica extremeña. Estas son algunas de las zonas que atendemos; si tu localidad no aparece, pregúntanos: llegamos a toda la comarca y a la región.",
  zones: [
    { label: "Plasencia", href: "/sobre-nosotros/panel-sandwich-en-plasencia" },
    { label: "Jaraíz de la Vera" },
    { label: "Navalmoral de la Mata" },
    { label: "Coria" },
    { label: "Hervás" },
    { label: "Valle del Jerte" },
    { label: "La Vera" },
    { label: "Valle del Ambroz" },
    { label: "Cabezuela del Valle" },
    { label: "Jarandilla de la Vera" },
    { label: "Malpartida de Plasencia" },
    { label: "Montehermoso" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en el norte de Cáceres",
  apps: [
    "El norte de Cáceres vive del campo, y el panel sándwich está en el centro de esa actividad. En el Valle del Jerte cubre almacenes y cámaras donde se enfría y clasifica la cereza; en La Vera y las Vegas del Alagón resuelve secaderos de tabaco y de pimentón, naves donde el aislamiento y la ventilación son clave. Para el almacenaje de fruta, castaña o forraje, la nave con panel mantiene el género protegido y a temperatura estable.",
    "En la ganadería de montaña y las explotaciones mixtas del Ambroz, la Tierra de Plasencia o el Campo Arañuelo, el panel resuelve naves de ganado, heniles y almacenes de maquinaria, con la variante Agropanel para los ambientes más húmedos o corrosivos. Y en los polígonos de Plasencia y Navalmoral de la Mata es el cerramiento habitual de naves logísticas, talleres y almacenes.",
    "El turismo rural es otro gran destino: casas rurales, alojamientos y restaurantes de los valles usan el panel imitación teja para renovar cubiertas sin obra pesada, respetando la estética tradicional de teja del entorno. Y para viviendas del medio rural, porches, garajes y casetas de campo, el panel de cubierta o la chapa perfilada dan la solución más económica y rápida de montar.",
  ],
  pricingHeading: "Precio y entrega en el norte de Cáceres",
  pricing: [
    "Estar en la misma región juega a tu favor: el transporte sube por la A-66 hasta Plasencia y desde ahí a los valles, y se cierra en el presupuesto sin sorpresas. El coste del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios; al comprar a fábrica te ahorras además el margen de la distribución. En los accesos de montaña del Jerte, La Vera o el Ambroz organizamos la entrega para que el material llegue a pie de obra.",
    "Para darte un precio cerrado solo necesitamos las medidas de tu cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Con eso preparamos un presupuesto con corte a medida y porte incluido, normalmente el mismo día laborable.",
    "La forma más rápida es el WhatsApp: nos mandas las medidas o unas fotos y te respondemos. También puedes llamarnos o usar el formulario de contacto.",
  ],
  faqs: [
    {
      question: "¿Tenéis fábrica de panel sándwich cerca de Plasencia?",
      answer:
        "Fabricamos en Puebla de la Calzada (Badajoz), dentro de la propia Extremadura, y servimos Plasencia y todo el norte de Cáceres. Vendemos directo de fábrica, sin intermediarios y con corte a medida.",
    },
    {
      question: "¿Servís a los valles y a todo el norte de Cáceres?",
      answer:
        "Sí: Plasencia, el Valle del Jerte, La Vera, el Ambroz, Coria, Navalmoral de la Mata, Hervás y el resto de la comarca. Llevamos el material a tu obra con el porte cerrado en el presupuesto.",
    },
    {
      question: "¿Sale rentable si la fábrica está en Badajoz y no en Cáceres?",
      answer:
        "Sí. Seguimos en la misma región y el transporte sube por la A-66, mucho más corto y económico que traer el panel desde el norte de España. Además, al comprar directo de fábrica te ahorras los márgenes de la distribución.",
    },
    {
      question: "¿Tenéis panel para secaderos, cámaras de cereza o naves agrícolas?",
      answer:
        "Sí. Fabricamos panel para secaderos de tabaco y pimentón, cámaras y almacenes de fruta, y naves agrícolas y ganaderas. Para ambientes húmedos o corrosivos tenemos la variante Agropanel.",
    },
    {
      question: "¿Puedo comprar siendo particular o para una casa rural?",
      answer:
        "Por supuesto. Atendemos a agricultores, ganaderos, instaladores, alojamientos rurales y particulares que cubren una vivienda, un porche o una caseta de campo. Nos pasas las medidas y te preparamos el presupuesto.",
    },
  ],
  related: [
    { label: "Panel sándwich en Cáceres", href: "/panel-sandwich-caceres" },
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich en Plasencia (guía)", href: "/sobre-nosotros/panel-sandwich-en-plasencia" },
    { label: "Panel sándwich para granja avícola", href: "/sobre-nosotros/panel-sandwich-para-granja-avicola" },
    { label: "Precio del panel sándwich por m²", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
  ],
};

export default function PanelSandwichPlasenciaPage() {
  return <ZoneLanding data={data} />;
}
