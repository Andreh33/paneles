import type { Metadata } from "next";
import { ZoneLanding, type ZoneLandingData } from "@/components/sections/ZoneLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Panel sándwich en Madrid | Precio de fábrica con envío — Panelex",
  },
  description:
    "Panel sándwich a precio de fábrica con envío a Madrid desde Badajoz por la A-5. Corte a medida y porte cerrado para naves, cubiertas y garajes. Pide presupuesto.",
  keywords: [
    "panel sándwich Madrid",
    "paneles sándwich Madrid",
    "panel sándwich precio Madrid",
    "panel sándwich cubierta Madrid",
    "quitar uralita Madrid",
    "panel sándwich naves Madrid",
  ],
  alternates: { canonical: "/panel-sandwich-madrid" },
  openGraph: {
    title: "Panel sándwich en Madrid — Precio de fábrica con envío",
    description:
      "Fabricamos panel sándwich en Badajoz y lo servimos en toda la Comunidad de Madrid por la A-5. Corte a medida y porte cerrado, a precio de fábrica.",
    type: "website",
    locale: "es_ES",
  },
};

const data: ZoneLandingData = {
  zone: "Madrid",
  canonical: "/panel-sandwich-madrid",
  heroKicker: "Precio de fábrica con envío a la Comunidad de Madrid",
  heroTitleA: "Panel sándwich en Madrid,",
  heroTitleB: "a precio de fábrica.",
  heroLead:
    "Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz) y lo servimos en toda la Comunidad de Madrid. Organizamos el envío desde fábrica por la A-5 (unas tres o cuatro horas), con corte a medida y porte cerrado: llevas el material a Getafe, Alcalá, Coslada o a la sierra pagando precio de fábrica, no el margen del distribuidor madrileño.",
  whyHeading: "Precio de fábrica, aunque la obra esté en Madrid.",
  intro: [
    "No somos un distribuidor madrileño con almacén en un polígono: somos la fábrica. Producimos el panel sándwich en Puebla de la Calzada, junto a la autovía A-5, y desde ahí organizamos el envío a Madrid. La conexión es directa, porque la A-5 une Extremadura con la capital sin desvíos, de modo que el material llega a tu obra en unas tres o cuatro horas de trayecto y con el porte cerrado desde el primer presupuesto.",
    "Comprar en Madrid a través de un distribuidor implica pagar el panel más el margen de quien lo revende. Al pedirlo directamente a fábrica te saltas ese escalón: el precio sale de la línea de producción y solo se le suma el transporte hasta tu dirección, que calculamos por adelantado. En obras con cierto volumen (una nave, una cubierta completa, varias viviendas) esa diferencia compensa de sobra los kilómetros.",
    "Cada panel se corta a la longitud exacta de tu faldón o fachada antes de cargarlo, así que llega listo para montar, sin recortes ni mermas en obra. Preparamos la carga, coordinamos la entrega en tu dirección de la Comunidad de Madrid y te indicamos cómo dejar el acceso para la descarga. Tú solo tienes que darnos medidas, color y espesor; del resto nos ocupamos nosotros.",
  ],
  zonesIntro:
    "Servimos en toda la Comunidad de Madrid con envío organizado desde fábrica. Estas son algunas de las zonas donde entregamos; si tu municipio no aparece, pregúntanos: la ruta por la A-5 cubre toda la comunidad.",
  zones: [
    { label: "Madrid capital" },
    { label: "Getafe" },
    { label: "Alcalá de Henares" },
    { label: "Móstoles" },
    { label: "Fuenlabrada" },
    { label: "Coslada" },
    { label: "San Fernando de Henares" },
    { label: "Aranjuez" },
    { label: "Colmenar Viejo" },
    { label: "Sierra de Guadarrama" },
    { label: "Leganés y Alcorcón" },
    { label: "Torrejón de Ardoz" },
  ],
  appsHeading: "Para qué se usa el panel sándwich en Madrid",
  apps: [
    "El grueso de la demanda en Madrid es industrial. En el corredor del Henares (Alcalá, San Fernando, Coslada, Torrejón) y en el sur metropolitano (Getafe, Leganés, Fuenlabrada) el panel sándwich es el cerramiento estándar de naves logísticas, talleres, almacenes y centros de distribución. El panel de cubierta resuelve el tejado y el panel de fachada cierra los laterales, ambos con aislamiento incorporado que ayuda con las exigencias térmicas de la nave.",
    "En vivienda pesa mucho la rehabilitación de cubiertas. En los chalets de las urbanizaciones del sur y el oeste y en las casas de la sierra (Guadarrama, Navacerrada, Cercedilla), el panel imitación teja sustituye tejados viejos sin la obra pesada de la teja cerámica: aligera la estructura, añade aislamiento y se monta en pocos días. Es también la vía habitual para retirar cubiertas de fibrocemento y decir adiós a la uralita, cambiándola por un panel moderno y seguro.",
    "Para garajes, cocheras, porches, trasteros y casetas de jardín, el panel de cubierta básico o la chapa perfilada son la opción más económica y rápida de montar. Llegan cortados a medida desde fábrica, así que un particular con una obra pequeña en Madrid puede pedir solo los metros que necesita, sin comprar de más ni depender del stock de un almacén local.",
  ],
  pricingHeading: "Precio y envío a Madrid",
  pricing: [
    "El precio del panel depende del espesor del núcleo, del grosor de la chapa, del acabado y de los accesorios de remate. A eso se suma el porte hasta Madrid, que calculamos según el volumen del pedido y la dirección de entrega. Aun sumando el transporte, comprar directo de fábrica suele salir a cuenta frente al precio de un distribuidor madrileño, porque te ahorras su margen de reventa.",
    "Para cerrarte un precio solo necesitamos las medidas de tu cubierta o fachada (largo de faldón, ancho y pendiente), el espesor y el color. Con eso preparamos un presupuesto con el corte a medida y el porte a Madrid ya incluidos, sin sorpresas de última hora. Cuanto mayor es el pedido, mejor se reparte el coste del transporte por metro cuadrado.",
    "La forma más rápida de arrancar es el WhatsApp: nos mandas las medidas o unas fotos de la cubierta y te devolvemos el presupuesto. También puedes llamarnos o escribirnos por el formulario de contacto; respondemos normalmente el mismo día laborable.",
  ],
  faqs: [
    {
      question: "¿Servís en Madrid si la fábrica está en Badajoz?",
      answer:
        "Sí. Fabricamos en Puebla de la Calzada (Badajoz) y organizamos nosotros el envío a toda la Comunidad de Madrid. La A-5 conecta directamente Extremadura con la capital, así que el material viaja unas tres o cuatro horas y llega a tu obra con el porte cerrado dentro del presupuesto.",
    },
    {
      question: "¿Sale a cuenta traer el panel desde Badajoz pudiendo comprarlo en Madrid?",
      answer:
        "En la mayoría de los casos, sí. Al comprar directo de fábrica te ahorras el margen del distribuidor; ese ahorro, sumado al corte a medida sin mermas, suele compensar el coste del transporte, sobre todo en pedidos de cierto volumen como naves o cubiertas completas.",
    },
    {
      question: "¿Cuánto tarda en llegar el panel a Madrid?",
      answer:
        "El trayecto por la A-5 es de unas tres o cuatro horas, pero la entrega se planifica: acordamos contigo el día de carga y la fecha de descarga en Madrid según la fabricación del pedido. Al confirmar el presupuesto te damos el plazo concreto para tu obra.",
    },
    {
      question: "¿Podéis sustituir una cubierta de fibrocemento o uralita?",
      answer:
        "Nosotros fabricamos y suministramos el panel imitación teja que reemplaza la cubierta vieja. La retirada del fibrocemento con amianto debe hacerla una empresa autorizada e inscrita en el RERA, ya que es un residuo peligroso; una vez retirado, el panel es el reemplazo ideal y podemos coordinar el suministro con tu instalador.",
    },
    {
      question: "¿Puedo comprar siendo particular en Madrid?",
      answer:
        "Sí. Atendemos a empresas, instaladores y constructoras, y también a particulares que cubren un chalet, un garaje, un porche o una caseta. Nos pasas las medidas y te preparamos el presupuesto con el envío a Madrid incluido.",
    },
  ],
  related: [
    { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
    { label: "Panel sándwich vs fibrocemento (adiós uralita)", href: "/sobre-nosotros/panel-sandwich-vs-fibrocemento-adios-uralita" },
    { label: "Panel sándwich para nave industrial", href: "/sobre-nosotros/panel-sandwich-nave-industrial" },
    { label: "Transporte y descarga del panel", href: "/sobre-nosotros/transporte-y-descarga-de-panel-sandwich" },
    { label: "Precio del panel sándwich por m²", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
  ],
};

export default function PanelSandwichMadridPage() {
  return <ZoneLanding data={data} />;
}
