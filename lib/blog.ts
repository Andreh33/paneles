/**
 * PANELEX — Blog técnico (fuente única de verdad)
 *
 * Posts pensados para posicionamiento orgánico (SEO). Cada post ataca una
 * búsqueda concreta: "qué es el panel sándwich", "precio panel sándwich",
 * "panel imitación teja", etc.
 *
 * Para añadir un post: añadir una entrada a POSTS y nada más. El listado en
 * /sobre-nosotros, las páginas de detalle, el sitemap y el JSON-LD se
 * alimentan automáticamente de aquí.
 */

import { posts as px01 } from "@/lib/posts/px-01";
import { posts as px02 } from "@/lib/posts/px-02";
import { posts as px03 } from "@/lib/posts/px-03";
import { posts as px04 } from "@/lib/posts/px-04";
import { posts as px05 } from "@/lib/posts/px-05";
import { posts as px06 } from "@/lib/posts/px-06";
import { posts as px07 } from "@/lib/posts/px-07";
import { posts as px08 } from "@/lib/posts/px-08";
import { posts as px09 } from "@/lib/posts/px-09";
import { posts as px10 } from "@/lib/posts/px-10";
import { posts as px11 } from "@/lib/posts/px-11";
import { posts as px12 } from "@/lib/posts/px-12";
import { posts as px13 } from "@/lib/posts/px-13";
import { posts as px14 } from "@/lib/posts/px-14";
import { posts as px15 } from "@/lib/posts/px-15";
import { posts as px16 } from "@/lib/posts/px-16";
import { posts as px17 } from "@/lib/posts/px-17";
import { posts as px18 } from "@/lib/posts/px-18";
import { posts as px19 } from "@/lib/posts/px-19";
import { posts as px20 } from "@/lib/posts/px-20";
import { posts as px21 } from "@/lib/posts/px-21";
import { posts as px22 } from "@/lib/posts/px-22";
import { posts as px23 } from "@/lib/posts/px-23";
import { posts as px24 } from "@/lib/posts/px-24";
import { posts as px25 } from "@/lib/posts/px-25";
import { posts as px26 } from "@/lib/posts/px-26";
import { posts as px27 } from "@/lib/posts/px-27";
import { posts as px28 } from "@/lib/posts/px-28";
import { posts as px29 } from "@/lib/posts/px-29";
import { posts as px30 } from "@/lib/posts/px-30";
import { posts as px31 } from "@/lib/posts/px-31";

/**
 * Tabla de datos de una sección. Se renderiza como <table> semántica con
 * <caption>, pensada para featured snippets (medidas, espesores, usos).
 * Solo datos reales del catálogo: nada de precios inventados.
 */
export interface PostTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface PostSection {
  /** Encabezado H2 de la sección */
  heading: string;
  /** Párrafos de texto plano */
  paragraphs: string[];
  /** Lista opcional de puntos (se renderiza como <ul>) */
  bullets?: string[];
  /** Tabla opcional de datos (se renderiza tras los párrafos, antes de bullets) */
  table?: PostTable;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description (~150 caracteres) */
  metaDescription: string;
  /** Entradilla que se muestra en la card y al inicio del post */
  excerpt: string;
  /**
   * Respuesta directa de 40-60 palabras (formato answer-first para GEO/IA).
   * Se muestra destacada al inicio del artículo y se emite como `abstract`
   * en el BlogPosting JSON-LD: es el bloque que citan ChatGPT/Perplexity/AIO.
   */
  quickAnswer?: string;
  /** Fecha ISO de publicación (se usa en JSON-LD y <time>) */
  date: string;
  /** Fecha ISO de última actualización sustancial (JSON-LD dateModified) */
  dateModified?: string;
  category: string;
  readingMinutes: number;
  keywords: string[];
  sections: PostSection[];
  /** Enlaces internos hacia páginas de conversión (productos/proyectos/home). */
  internalLinks?: { label: string; href: string }[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

/**
 * Extrae las preguntas/respuestas de la sección "Preguntas frecuentes" de un
 * post. Cada bullet sigue el formato "¿Pregunta? Respuesta." y se parte por el
 * primer signo de cierre de interrogación. Devuelve [] si el post no tiene FAQ,
 * de modo que solo se emite FAQPage en los posts que realmente la incluyen.
 */
export function getPostFaqs(post: BlogPost): BlogFaq[] {
  const faqSection = post.sections.find((s) =>
    /preguntas frecuentes/i.test(s.heading),
  );
  if (!faqSection?.bullets) return [];
  return faqSection.bullets
    .map((bullet) => {
      const qEnd = bullet.indexOf("?");
      if (qEnd === -1) return null;
      const question = bullet.slice(0, qEnd + 1).trim();
      const answer = bullet.slice(qEnd + 1).trim();
      if (!question || !answer) return null;
      return { question, answer };
    })
    .filter((item): item is BlogFaq => item !== null);
}

const BASE_POSTS: BlogPost[] = [
  {
    slug: "que-es-el-panel-sandwich",
    title: "¿Qué es el panel sándwich? Tipos, ventajas y aplicaciones",
    metaDescription:
      "Guía completa del panel sándwich: qué es, cómo se fabrica, tipos (cubierta, fachada, imitación teja), ventajas de aislamiento y dónde se utiliza.",
    excerpt:
      "El panel sándwich es el cerramiento más utilizado en construcción industrial y agrícola. Te explicamos qué es, cómo se fabrica y qué tipos existen.",
    date: "2026-05-04",
    category: "Guías básicas",
    readingMinutes: 6,
    keywords: [
      "panel sándwich",
      "qué es panel sándwich",
      "tipos de panel sándwich",
      "panel aislante",
    ],
    sections: [
      {
        heading: "Qué es exactamente un panel sándwich",
        paragraphs: [
          "Un panel sándwich es un elemento constructivo formado por dos chapas metálicas de acero prelacado unidas a un núcleo aislante, normalmente espuma de poliuretano (PUR) o poliisocianurato (PIR). El nombre viene precisamente de esa estructura en tres capas: chapa exterior, aislamiento y chapa interior, como un sándwich.",
          "El resultado es un material que resuelve en una sola pieza lo que tradicionalmente requería varias fases de obra: cerramiento, impermeabilización y aislamiento térmico. Por eso se ha convertido en el estándar para cubiertas y fachadas de naves industriales, agrícolas, ganaderas y, cada vez más, en vivienda y rehabilitación.",
        ],
      },
      {
        heading: "Tipos de panel sándwich",
        paragraphs: [
          "Aunque la estructura básica es siempre la misma, el perfil de la chapa y el uso al que se destina dan lugar a varias familias de producto:",
        ],
        bullets: [
          "Panel sándwich de cubierta: con grecas (nervios) en la cara exterior para evacuar el agua. Es el más habitual en naves y cobertizos.",
          "Panel sándwich de fachada: caras planas, nervadas o microperfiladas, con fijación oculta o vista, para cerramientos verticales.",
          "Panel imitación teja (tipo Fertelha): reproduce el aspecto de la teja cerámica con las ventajas del panel. Ideal para vivienda y entornos donde la estética importa.",
          "Agropanel: variante con cara interior de fibra de vidrio (poliéster) para ambientes corrosivos como granjas y explotaciones ganaderas.",
        ],
      },
      {
        heading: "Ventajas frente a otros sistemas constructivos",
        paragraphs: [
          "La gran ventaja del panel sándwich es la rapidez de instalación: un equipo pequeño puede cubrir cientos de metros cuadrados al día, porque cada panel llega a obra cortado a medida y listo para atornillar. A eso se suma un aislamiento térmico continuo, sin puentes térmicos entre piezas, gracias al machihembrado entre paneles.",
          "Frente a la chapa simple, el panel sándwich elimina las condensaciones y reduce drásticamente el gasto energético en climatización. Frente a la cubierta tradicional de teja sobre forjado, reduce el peso de la cubierta y el plazo de obra a una fracción.",
        ],
      },
      {
        heading: "Dónde se utiliza",
        paragraphs: [
          "Las aplicaciones más frecuentes son naves industriales y logísticas, explotaciones agrícolas y ganaderas, almacenes, cobertizos, garajes, casetas y, en el caso del panel teja, viviendas y rehabilitación de cubiertas. En Panelex fabricamos todas estas familias en nuestra planta de Puebla de la Calzada (Badajoz) y servimos a toda España y Portugal.",
        ],
      },
      {
        heading: "De qué está hecho el núcleo: PUR, PIR, lana de roca y EPS",
        paragraphs: [
          "Buena parte del comportamiento de un panel depende del material de su núcleo. El más extendido es la espuma de poliuretano (PUR): aísla mucho con poco espesor, pesa poco y mantiene un precio contenido, por lo que se ha convertido en el estándar para cubiertas y fachadas de nave. El poliisocianurato (PIR) es un pariente cercano del PUR con mejor comportamiento frente al fuego, habitual cuando el proyecto exige una reacción al fuego algo más estricta sin renunciar a un aislamiento alto.",
          "Para casos donde la protección contra incendios es prioritaria —medianeras, locales de pública concurrencia o riesgo industrial— existe el panel con núcleo de lana de roca, mineral e incombustible, que además mejora el aislamiento acústico a cambio de más peso y más precio. En el extremo opuesto, el poliestireno expandido (EPS) es la opción más económica, válida para cerramientos sencillos donde no se buscan grandes prestaciones térmicas.",
        ],
        bullets: [
          "Poliuretano (PUR): máximo aislamiento por milímetro y mejor precio. El más usado en nave agrícola e industrial.",
          "Poliisocianurato (PIR): similar al PUR pero con mejor reacción al fuego; para exigencias contra incendios moderadas.",
          "Lana de roca: incombustible y buen aislante acústico; para medianeras y locales con riesgo de incendio.",
          "Poliestireno (EPS): el más económico, para cerramientos básicos sin grandes requisitos térmicos.",
        ],
      },
      {
        heading: "Cómo se fabrica un panel sándwich",
        paragraphs: [
          "Un panel sándwich se fabrica en una línea continua. Las dos bobinas de acero prelacado se desenrollan, se perfilan en frío para darles la greca o el nervio, y entre ambas se inyecta la espuma, que expande y se adhiere a las chapas formando un bloque rígido. Después, la lámina continua se corta a la longitud exacta de cada pedido. Por eso un fabricante puede servir cada panel a la medida real del faldón, sin recortes en obra que estropeen el material ni generen residuo.",
          "El acero exterior llega galvanizado y prelacado con una capa de pintura de poliéster pensada para la intemperie; el espesor de chapa más habitual va de 0,4 a 0,5 mm por cara. Como producto de construcción, el panel sándwich lleva marcado CE y su reacción al fuego se clasifica según la norma europea EN 13501-1, un dato que conviene pedir al fabricante cuando el proyecto tiene exigencias contra incendios.",
        ],
      },
      {
        heading: "Vida útil y mantenimiento",
        paragraphs: [
          "Bien instalado, un panel sándwich de acero prelacado dura décadas con un mantenimiento mínimo. La clave está en cuidar la cara expuesta: evitar cortar la chapa con radial (las chispas y limaduras de hierro incandescente oxidan el lacado), retirar a tiempo las hojas y la suciedad acumulada en valles y canalones, y revisar cada cierto tiempo las arandelas de la tornillería, que son la pieza más barata de la cubierta y la primera que falla.",
          "Los pequeños roces o cortes inevitables en obra se sellan con pintura de retoque del mismo color para que la corrosión no progrese. Con esos cuidados básicos, la cubierta o la fachada conservan su aspecto y su estanqueidad durante toda la vida útil del edificio, que es justo lo que se espera de una inversión de este tipo.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las dudas que más nos plantean quienes se acercan por primera vez al panel sándwich.",
        ],
        bullets: [
          "¿El panel sándwich aísla del calor y del frío? Sí, su núcleo aislante reduce las pérdidas en invierno y la entrada de calor en verano, y evita las condensaciones de la chapa simple.",
          "¿Qué núcleo es mejor, PUR o PIR? El PUR ofrece el mejor precio por aislamiento; el PIR se elige cuando el proyecto pide mejor reacción al fuego. Para casos exigentes, lana de roca.",
          "¿Cuánto dura un panel sándwich? Bien instalado y con un mantenimiento básico, décadas: el acero prelacado está pensado para la intemperie y la cara vista se conserva muchos años.",
          "¿Se puede usar panel sándwich en vivienda? Sí, sobre todo el panel imitación teja, que da estética tradicional con el aislamiento y la ligereza del panel.",
          "¿Lleva marcado CE? Sí, es un producto de construcción con marcado CE y reacción al fuego clasificada según la norma europea EN 13501-1.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Qué espesor de panel elegir", href: "/sobre-nosotros/que-espesor-de-panel-elegir" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "precio-panel-sandwich-m2",
    title: "Precio del panel sándwich por m²: qué lo determina en 2026",
    metaDescription:
      "¿Cuánto cuesta el panel sándwich por metro cuadrado? Factores que determinan el precio: espesor, chapa, acabado y transporte. Consejos para ahorrar.",
    excerpt:
      "El precio del panel sándwich depende del espesor del núcleo, el grosor de la chapa, el acabado y el transporte. Te contamos cómo se forma el precio y cómo ahorrar.",
    quickAnswer:
      "El precio del panel sándwich por m² lo fijan cuatro factores: el espesor del núcleo (30–100 mm), la chapa de acero (0,3–0,5 mm por cara), el acabado (el imitación teja y la fijación oculta cuestan más que la cubierta estándar) y el transporte. Comprando directo a fábrica se elimina el margen de la distribución: con las medidas de tu cubierta damos precio cerrado el mismo día laborable.",
    date: "2026-05-11",
    dateModified: "2026-07-08",
    category: "Compra y presupuesto",
    readingMinutes: 5,
    keywords: [
      "precio panel sándwich",
      "panel sándwich precio m2",
      "cuánto cuesta panel sándwich",
      "panel sándwich barato",
    ],
    sections: [
      {
        heading: "Los cuatro factores que fijan el precio",
        paragraphs: [
          "Cuando pedimos presupuesto de panel sándwich, el precio por metro cuadrado varía en función de cuatro variables principales. Conocerlas ayuda a comparar ofertas con criterio y a no pagar por prestaciones que la obra no necesita.",
        ],
        table: {
          caption: "Factores que determinan el precio del panel sándwich por m²",
          headers: ["Factor", "Efecto en el precio", "Cómo ajustarlo"],
          rows: [
            [
              "Espesor del núcleo (30–100 mm)",
              "El que más pesa: a más espesor, más aislamiento y más precio",
              "Dimensiona por uso real: 40–50 mm es el estándar de nave",
            ],
            [
              "Chapa de acero (0,3–0,5 mm por cara)",
              "Más chapa, más resistencia mecánica y más coste",
              "Reserva 0,5 mm para zonas de viento o tránsito",
            ],
            [
              "Acabado y perfil",
              "El panel teja o la fijación oculta cuestan más que la cubierta estándar",
              "Elige acabado premium solo donde la estética importa",
            ],
            [
              "Transporte",
              "Material voluminoso: el porte influye en el precio final por m²",
              "Agrupa el pedido y completa el camión",
            ],
          ],
        },
      },
      {
        heading: "Comprar a fábrica vs. comprar a distribuidor",
        paragraphs: [
          "El mismo panel puede pasar por dos o tres manos antes de llegar a obra, y cada intermediario añade su margen. Comprar directamente al fabricante elimina esos escalones: el precio sale de fábrica y el plazo de entrega lo controla quien realmente produce el material.",
          "En Panelex fabricamos en planta propia y vendemos directo, sin intermediarios. Eso nos permite ajustar el precio y, sobre todo, cortar cada panel a la medida exacta del proyecto, lo que evita mermas y sobrecostes en obra.",
        ],
      },
      {
        heading: "Cómo ahorrar sin comprometer la calidad",
        paragraphs: [
          "El mejor ahorro es dimensionar bien: elegir el espesor de aislamiento que pide el uso real del edificio (no más, no menos), aprovechar las medidas de corte estándar y agrupar el pedido para completar el camión. Un presupuesto bien preparado, con planos o medidas claras, siempre sale más barato que improvisar en obra.",
          "Pide presupuesto sin compromiso por WhatsApp o teléfono: con las medidas de tu cubierta o fachada te preparamos una propuesta cerrada, con transporte incluido, en muy poco tiempo.",
        ],
      },
      {
        heading: "Rangos de precio orientativos en 2026",
        paragraphs: [
          "Dar un precio cerrado del panel sándwich sin conocer la obra es engañoso, porque depende del espesor, de la chapa, del acabado y del transporte. Aun así, sirve manejar órdenes de magnitud: un panel de cubierta estándar de 30 a 40 mm se mueve en la franja baja del mercado, mientras que un panel imitación teja, una fachada de fijación oculta o un panel de 80 a 100 mm suben de forma notable el precio por metro cuadrado.",
          "Conviene recordar que esas cifras se refieren solo al material. El coste final de una cubierta incluye además los remates, la tornillería, los posibles lucernarios y el transporte a obra. Por eso, más que comparar el precio por metro cuadrado a secas, lo sensato es comparar presupuestos completos que detallen todo lo que entra: dos ofertas con el mismo precio por m² pueden acabar muy distintas cuando se suman accesorios y portes.",
        ],
      },
      {
        heading: "Qué incluye (y qué no) un presupuesto bien hecho",
        paragraphs: [
          "Una oferta de panel clara debería desglosar al menos estos conceptos, para que puedas compararla con criterio y no llevarte sorpresas en obra:",
        ],
        bullets: [
          "El panel: tipo, espesor de núcleo, espesor de chapa, acabado y color, con su precio por metro cuadrado.",
          "Los remates: cumbreras, limatesas, remates laterales y de encuentro, a juego con el panel.",
          "La tornillería: tornillos autotaladrantes con arandela de estanqueidad EPDM, en cantidad suficiente.",
          "Los accesorios: lucernarios de policarbonato, cintas de sellado, juntas y, si procede, canalones.",
          "El transporte: el porte hasta la obra y la forma de descarga, que en pedidos grandes pesa en el total.",
        ],
      },
      {
        heading: "Cuándo merece la pena gastar más",
        paragraphs: [
          "El precio no es el único criterio. En un edificio que se va a climatizar, subir el espesor del núcleo encarece el panel pero se recupera en pocos inviernos de calefacción o veranos de aire acondicionado; quedarse corto para ahorrar al comprar sale caro cada temporada. En una granja, pagar el Agropanel con cara interior de fibra de vidrio evita tener que desmontar la cubierta cuando el amoniaco corroe una chapa convencional en pocos años.",
          "Lo mismo ocurre con la reacción al fuego: en locales con exigencias contra incendios, el sobrecoste de un núcleo PIR o de lana de roca no es opcional, es lo que pide la normativa. La regla sensata es dimensionar según el uso real del edificio: no pagar prestaciones que no se necesitan, pero tampoco recortar en lo que la obra sí exige, porque rectificar después siempre cuesta más que acertar al pedir.",
        ],
      },
      {
        heading: "Errores que encarecen el panel sin querer",
        paragraphs: [
          "Hay sobrecostes que no aparecen en la oferta pero acaban pagándose en obra. El más común es comprar medidas estándar y cortarlas in situ: cada recorte es material que se paga y va al contenedor, y el corte con radial puede estropear la chapa. Pedir el panel cortado a la medida del faldón evita ese desperdicio. Otro clásico es no prever los remates ni la tornillería al comparar presupuestos y descubrir después que esa partida no estaba incluida.",
          "El transporte mal planificado también encarece: un camión a medio cargar reparte su coste entre menos metros cuadrados. Agrupar el pedido, completar la carga y pedir todo —panel, remates y accesorios— al mismo fabricante en un solo envío es la forma más directa de que el precio por metro cuadrado baje. Improvisar pidiendo material en varias tandas multiplica los portes y dispara el coste final.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Resumimos las preguntas que más nos llegan cuando alguien pide precio de panel sándwich.",
        ],
        bullets: [
          "¿Cuánto cuesta el panel sándwich por metro cuadrado? Depende del espesor, la chapa, el acabado y el transporte; por eso damos precio cerrado solo con las medidas concretas de tu obra.",
          "¿Es más barato comprar a fábrica? Sí, al no haber intermediarios el precio sale de origen y, además, cada panel se corta a medida para evitar mermas.",
          "¿El transporte va incluido en el precio? Lo presupuestamos incluido o aparte según el pedido; en cargas grandes el porte por metro cuadrado baja mucho.",
          "¿Qué espesor es el más económico? El de 30 a 40 mm, válido para cobertizos y naves sin climatizar; subir espesor encarece pero mejora el aislamiento.",
          "¿Cómo pido un presupuesto cerrado? Con las medidas de tu cubierta o fachada por WhatsApp o teléfono te preparamos una propuesta con transporte incluido.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Qué espesor de panel elegir", href: "/sobre-nosotros/que-espesor-de-panel-elegir" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "panel-cubierta-vs-fachada",
    title: "Panel sándwich de cubierta vs. fachada: diferencias y cuál elegir",
    metaDescription:
      "Diferencias entre panel sándwich de cubierta y de fachada: geometría, fijación, estanqueidad y estética. Aprende cuál corresponde a cada parte de la nave.",
    excerpt:
      "Aunque comparten estructura, el panel de cubierta y el de fachada resuelven problemas distintos. Estas son las diferencias clave y los errores a evitar.",
    date: "2026-05-18",
    category: "Guías técnicas",
    readingMinutes: 5,
    keywords: [
      "panel sándwich cubierta",
      "panel sándwich fachada",
      "diferencia panel cubierta fachada",
    ],
    sections: [
      {
        heading: "La cubierta: evacuar agua es la prioridad",
        paragraphs: [
          "El panel de cubierta se reconoce por sus grecas: nervios longitudinales de 38 a 40 mm que canalizan el agua de lluvia hacia el canalón. Esa geometría le da además rigidez para salvar las distancias entre correas y soportar cargas de viento, nieve y el tránsito puntual de mantenimiento.",
          "La pendiente mínima recomendada ronda el 7 % en paneles continuos (sin solapes transversales) y algo más cuando hay solapes o accesorios. El solape lateral con tapajuntas o greca de solape garantiza la estanqueidad de la unión.",
        ],
      },
      {
        heading: "La fachada: estética y fijación",
        paragraphs: [
          "El panel de fachada trabaja en vertical u horizontal y no necesita evacuar agua, así que sus caras son planas, nervadas o microperfiladas, con un acabado mucho más cuidado. La diferencia más importante está en la fijación: puede ser vista (tornillo pasante, más económica) u oculta (el tornillo queda tapado por el machihembrado, acabado premium).",
          "Para fachadas representativas —oficinas, comercios, fachadas a calle— la fijación oculta y la microperfilada son la opción estándar. Para cerramientos traseros o naves agrícolas, la fijación vista con panel nervado ofrece la mejor relación calidad-precio.",
        ],
      },
      {
        heading: "¿Se puede poner panel de cubierta en fachada?",
        paragraphs: [
          "Técnicamente es posible y se hace en cerramientos económicos, pero el resultado estético es industrial y los nervios acumulan suciedad en vertical. Al revés —panel de fachada en cubierta— no es admisible: sin grecas no hay evacuación de agua garantizada y la estanqueidad falla.",
          "Si dudas qué combinación corresponde a tu proyecto, envíanos un croquis o unas fotos por WhatsApp: te indicamos el panel adecuado para cada plano del edificio y preparamos el despiece completo.",
        ],
      },
      {
        heading: "Tabla rápida de diferencias",
        paragraphs: [
          "Resumido, estas son las diferencias que separan un panel de cubierta de uno de fachada y que conviene tener claras antes de pedir presupuesto:",
        ],
        bullets: [
          "Geometría: la cubierta lleva grecas profundas (38 a 40 mm) para evacuar el agua; la fachada es plana, nervada o microperfilada.",
          "Posición: la cubierta trabaja inclinada sobre las correas; la fachada, en vertical u horizontal sobre la estructura.",
          "Fijación: en cubierta siempre vista, en la cresta de la greca; en fachada, vista (económica) u oculta (premium).",
          "Estanqueidad: en cubierta es crítica y depende de la pendiente y los solapes; en fachada basta un buen solape y sellado de juntas.",
          "Acabado: la cubierta prioriza la función; la fachada, la estética, con caras lisas y colores cuidados.",
        ],
      },
      {
        heading: "La fijación oculta, explicada",
        paragraphs: [
          "La gran decisión en fachada es entre fijación vista y oculta. En la vista, el tornillo atraviesa el panel y queda a la intemperie con su arandela; es más rápida y económica, perfecta para naves agrícolas, cerramientos traseros y paños de servicio. En la oculta, cada panel se atornilla por su machihembrado lateral y el panel siguiente tapa la fijación, de modo que en la fachada acabada no se ve ni un tornillo.",
          "El resultado de la fijación oculta es una superficie limpia y continua, el acabado que se busca en oficinas, comercios y fachadas a calle. A cambio, es algo más cara y exige más cuidado en el montaje. Combinada con un panel microperfilado da el aspecto más moderno del catálogo; con un panel liso, una fachada sobria de líneas rectas. Para la imagen de un edificio que se ve desde la carretera, ese salto estético suele compensar.",
        ],
      },
      {
        heading: "Cómo se reparten cubierta y fachada en una nave",
        paragraphs: [
          "En una nave estándar, la combinación habitual es panel de cubierta de cinco grecas en el tejado y panel de fachada en los cerramientos verticales. La cubierta resuelve la evacuación del agua y soporta las cargas de viento y nieve; la fachada da la imagen y aísla los laterales. Ambos comparten núcleo y espesores, así que el aislamiento del edificio queda continuo si se cuidan bien los encuentros.",
          "El punto crítico está precisamente en esos encuentros: el alero, donde cubierta y fachada se unen, y las esquinas. Ahí los remates a juego —misma chapa, mismo color— cierran la transición y evitan puentes térmicos y filtraciones. Pedir cubierta, fachada y remates al mismo fabricante garantiza que las medidas y los tonos casen, algo que se complica en cuanto se mezclan proveedores distintos.",
        ],
      },
      {
        heading: "Perfiles de fachada: nervado, liso y microperfilado",
        paragraphs: [
          "Dentro del panel de fachada hay varios acabados que cambian por completo la imagen del edificio. El nervado, con relieves marcados, es el más económico y disimula bien las pequeñas irregularidades de la estructura; es la opción habitual en naves y cerramientos de servicio. El liso ofrece una superficie plana y sobria, mientras que el microperfilado lleva un grabado fino que rompe los reflejos y da un aspecto más cuidado y moderno.",
          "La elección del perfil suele ir de la mano de la fijación: el nervado se monta casi siempre con fijación vista, y el liso o el microperfilado con fijación oculta, para lograr esa fachada continua sin tornillos a la vista. Combinando perfiles y colores se pueden marcar zócalos, franjas o paños distintos en una misma fachada sin encarecer apenas la obra, un recurso muy usado en oficinas y comercios.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las dudas más habituales a la hora de distinguir el panel de cubierta del de fachada.",
        ],
        bullets: [
          "¿Cuál es la diferencia principal entre panel de cubierta y de fachada? La cubierta lleva grecas para evacuar el agua; la fachada es plana o microperfilada y prioriza la estética y la fijación.",
          "¿Puedo usar panel de cubierta en la fachada? Técnicamente sí, en cerramientos económicos, pero el aspecto es industrial y los nervios acumulan suciedad en vertical.",
          "¿Y panel de fachada en la cubierta? No: sin grecas no se garantiza la evacuación del agua y la estanqueidad falla. Es un error a evitar.",
          "¿Fijación vista u oculta? La vista es más barata y vale para naves y traseras; la oculta da una fachada limpia, ideal para oficinas y fachadas a calle.",
          "¿Cubierta y fachada llevan el mismo espesor? Pueden compartirlo para un aislamiento continuo, aunque cada plano puede ajustarse a su exigencia térmica.",
        ],
      },
    ],
    internalLinks: [
      { label: "Panel de cubierta en gris", href: "/productos/panel-cubierta-gris" },
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "panel-imitacion-teja-fertelha",
    title: "Panel sándwich imitación teja: la guía completa del panel teja",
    metaDescription:
      "Panel sándwich imitación teja (Fertelha): ventajas, colores, medidas de corte, instalación y por qué sustituye a la teja tradicional en vivienda.",
    excerpt:
      "El panel teja combina la estética de la teja cerámica con el aislamiento y la rapidez del panel sándwich. Todo lo que necesitas saber antes de elegirlo.",
    date: "2026-05-25",
    category: "Productos",
    readingMinutes: 6,
    keywords: [
      "panel imitación teja",
      "panel sándwich teja",
      "panel teja precio",
      "fertelha",
    ],
    sections: [
      {
        heading: "Qué es el panel teja y por qué triunfa en vivienda",
        paragraphs: [
          "El panel sándwich imitación teja —en Panelex lo fabricamos bajo la gama Fertelha— es un panel de cubierta cuya chapa exterior reproduce el perfil y el color de la teja curva tradicional. A distancia es prácticamente indistinguible de un tejado cerámico, pero por dentro es un panel aislante completo: chapa, núcleo de poliuretano y chapa interior lacada.",
          "Su éxito en vivienda, casas de campo, porches y rehabilitación se explica por tres números: pesa en torno a diez veces menos que una cubierta de teja sobre tablero, se instala en una fracción del tiempo y aísla térmicamente desde el primer día sin necesidad de capas adicionales.",
        ],
      },
      {
        heading: "Colores y medidas de corte",
        paragraphs: [
          "Los acabados más demandados son el terracota (rojo teja clásico), el chocolate y el gris. Cada color se fabrica con lacados de alta durabilidad pensados para exposición solar intensa, algo especialmente importante en el clima de Extremadura y Andalucía.",
          "El panel teja se corta en fábrica en múltiplos del paso de teja (350 mm), desde 1.050 mm hasta 14.000 mm de longitud. Eso significa que cada faldón sale de fábrica con la medida exacta, sin cortes en obra que estropeen el perfil de la teja.",
        ],
      },
      {
        heading: "Instalación y remates",
        paragraphs: [
          "Se instala como cualquier panel de cubierta: apoyado sobre correas, atornillado en la cresta de la onda y con solape lateral machihembrado. La gama se completa con remates específicos —cumbreras, limatesas, remates laterales— lacados en el mismo color, que resuelven los encuentros con un acabado limpio.",
          "Si estás valorando renovar un tejado de teja vieja o cubrir una obra nueva con estética tradicional, pide presupuesto con las medidas de los faldones: te calculamos el despiece óptimo aprovechando las medidas estándar de corte.",
        ],
      },
      {
        heading: "Panel teja frente a la teja cerámica tradicional",
        paragraphs: [
          "La comparación con la teja cerámica es la que más nos piden, y los números son claros. Una cubierta de teja sobre tablero pesa del orden de 40 a 50 kg por metro cuadrado; el panel imitación teja ronda los 5 o 6 kg, según el espesor. Esa diferencia de peso permite cubrir con estructuras más ligeras y, en rehabilitación, reaprovechar la existente muchas veces sin necesidad de reforzarla.",
          "A la ligereza se suma la velocidad. Donde la teja exige rastreles, tablero, impermeabilización y colocación pieza a pieza, el panel teja resuelve cerramiento, aislamiento e impermeabilización en una sola pieza que se atornilla a las correas. Y, al llevar el aislante integrado, no necesita la cámara y el aislamiento aparte que pide una cubierta de teja para ser confortable. La teja cerámica gana en tradición pura; el panel gana en peso, plazo y aislamiento.",
        ],
      },
      {
        heading: "Sobre qué estructura se instala",
        paragraphs: [
          "El panel teja se apoya sobre correas, igual que cualquier panel de cubierta, así que sirve tanto para obra nueva con estructura metálica o de madera como para rehabilitación. En una cubierta vieja de teja, lo habitual es retirar la teja y el tablero deteriorado y montar el panel sobre las correas o un entramado nuevo, ganando aislamiento y estanqueidad de golpe y aligerando el peso que soporta la estructura.",
          "La pendiente recomendada es similar a la de un panel de cubierta convencional, en torno al 7 al 10 % según los solapes, suficiente para evacuar el agua entre las ondas. Para el aficionado, una caseta o un porche son asumibles con cuidado; para una vivienda completa conviene un montador profesional, por la altura y por el esmero que piden los remates de cumbrera y limatesa.",
        ],
      },
      {
        heading: "Dónde encaja mejor el panel teja",
        paragraphs: [
          "El panel teja brilla allí donde la estética importa pero se quiere el rendimiento del panel: viviendas unifamiliares y casas de campo, porches y merenderos, negocios en suelo rústico donde la normativa exige acabado de teja, y rehabilitación de tejados antiguos. En cascos históricos y entornos protegidos, su aspecto tradicional permite cumplir las ordenanzas estéticas sin renunciar al aislamiento ni cargar la cubierta.",
          "En el clima de Extremadura y el sur peninsular, con veranos muy calurosos, el aislamiento integrado del panel teja se nota dentro de la vivienda desde el primer día, sin añadir capas bajo cubierta. El color terracota, además, mantiene la imagen del tejado tradicional de la zona, mientras que el chocolate y el gris encajan en construcciones de aire más actual.",
        ],
      },
      {
        heading: "Remates y accesorios del panel teja",
        paragraphs: [
          "Una cubierta de panel teja se completa con una familia de remates específicos que resuelven los encuentros y mantienen la estética: cumbreras para la línea superior, limatesas para las aristas inclinadas, remates laterales para los bordes y piezas de alero. Todos se fabrican lacados en el mismo color que el panel —terracota, chocolate o gris— para que el conjunto quede homogéneo y no canten las uniones.",
          "A esos remates se suman accesorios pensados para la imagen final, como las tapas que imitan el frente de la teja en el alero, que rematan el borde con el mismo aspecto cerámico. Pedir el panel y los remates al mismo fabricante garantiza que el tono y las medidas casen; mezclar proveedores es la causa más común de que una cubierta de teja imitación se vea improvisada de cerca.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Las preguntas que más nos hacen quienes se plantean cubrir con panel imitación teja.",
        ],
        bullets: [
          "¿El panel imitación teja parece teja de verdad? A distancia es prácticamente indistinguible de un tejado cerámico; reproduce el perfil curvo y el color de la teja tradicional.",
          "¿Cuánto pesa frente a una cubierta de teja? En torno a diez veces menos: unos 5 o 6 kg por metro cuadrado frente a los 40 o 50 kg de la teja sobre tablero.",
          "¿Sirve para rehabilitar un tejado viejo? Sí, es una de sus aplicaciones estrella: se retira la teja vieja y se monta el panel sobre las correas, ganando aislamiento y estanqueidad.",
          "¿Qué colores hay? Los más demandados son terracota, chocolate y gris, con lacados de alta durabilidad pensados para mucha exposición solar.",
          "¿Se corta a medida? Sí, se fabrica en múltiplos del paso de teja (350 mm), hasta 14 metros, para que cada faldón salga con la longitud exacta sin cortes en obra.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Panel sándwich en Extremadura", href: "/panel-sandwich-extremadura" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "que-espesor-de-panel-elegir",
    title: "¿Qué espesor de panel sándwich elegir? Aislamiento y transmitancia",
    metaDescription:
      "Cómo elegir el espesor del panel sándwich: 30, 40, 50, 80 o 100 mm. Transmitancia térmica, usos recomendados y errores habituales al dimensionar.",
    excerpt:
      "Del panel de 30 mm para un cobertizo al de 100 mm para una cámara: criterios claros para elegir espesor sin pagar de más ni quedarse corto.",
    quickAnswer:
      "Regla rápida de espesores de panel sándwich: 30 mm para cobertizos y porches sin climatizar, 40–50 mm el estándar de nave agrícola e industrial, 60–80 mm para vivienda y edificios climatizados, y 100 mm para cámaras e industria agroalimentaria. Duplicar el espesor divide la transmitancia casi a la mitad: de U ≈ 0,55 W/m²·K con 40 mm a ≈ 0,28 con 80 mm.",
    date: "2026-06-01",
    dateModified: "2026-07-08",
    category: "Guías técnicas",
    readingMinutes: 5,
    keywords: [
      "espesor panel sándwich",
      "aislamiento panel sándwich",
      "transmitancia térmica panel",
      "qué panel sándwich elegir",
    ],
    sections: [
      {
        heading: "La transmitancia térmica, explicada en sencillo",
        paragraphs: [
          "La capacidad aislante de un panel se mide por su transmitancia térmica U, en W/m²·K: cuánta energía atraviesa un metro cuadrado de panel por cada grado de diferencia entre interior y exterior. Cuanto más baja la U, mejor aísla. Un panel de 30 mm ronda los 0,71 W/m²·K; uno de 80 mm baja aproximadamente a 0,28 W/m²·K.",
          "El espesor del núcleo es el factor dominante: duplicar espesor prácticamente divide la transmitancia a la mitad. Las chapas metálicas apenas influyen en el aislamiento; influyen en la resistencia mecánica.",
        ],
      },
      {
        heading: "Espesores recomendados por uso",
        paragraphs: [
          "Como regla práctica, estos son los rangos que recomendamos a nuestros clientes:",
        ],
        bullets: [
          "30 mm: cobertizos, leñeras, porches y espacios no climatizados donde el panel hace de cerramiento y poco más.",
          "40–50 mm: naves agrícolas, almacenes, garajes y talleres. El estándar de la construcción industrial.",
          "60–80 mm: naves climatizadas, granjas con control ambiental, viviendas y oficinas. Equilibrio entre confort y coste.",
          "100 mm o más: cámaras, industrias agroalimentarias y edificios con alta exigencia energética.",
        ],
      },
      {
        heading: "Errores habituales al dimensionar",
        paragraphs: [
          "El error más caro es quedarse corto en un edificio climatizado: el sobrecoste de pasar de 40 a 60 mm se amortiza en pocos inviernos de calefacción. El error contrario también existe: pagar 80 mm para un cobertizo abierto no aporta nada.",
          "Cada ficha de producto de nuestro catálogo incluye la tabla completa de espesores, pesos y transmitancias (en W/m²·K y kcal/m²·h·°C). Y si prefieres que lo veamos juntos, mándanos el uso del edificio por WhatsApp y te recomendamos espesor en el día.",
        ],
      },
      {
        heading: "Espesor, transmitancia y aislamiento: las cifras",
        paragraphs: [
          "Para ordenar las ideas, esta es la relación aproximada entre el espesor del núcleo de poliuretano y la transmitancia térmica U (cuanto más baja, mejor aísla). Son valores orientativos: cada fabricante publica los suyos en la ficha de producto, pero el orden de magnitud sirve para decidir.",
        ],
        table: {
          caption: "Espesor del panel sándwich y transmitancia térmica orientativa (núcleo PUR)",
          headers: ["Espesor", "Transmitancia U (W/m²·K)", "Uso recomendado"],
          rows: [
            ["30 mm", "≈ 0,71", "Cobertizos y porches no climatizados"],
            ["40 mm", "≈ 0,55", "El estándar de la nave agrícola e industrial"],
            ["50 mm", "≈ 0,43", "Naves con uso continuado y almacenes"],
            ["60 mm", "≈ 0,37", "Espacios con cierto control de temperatura"],
            ["80 mm", "≈ 0,28", "Naves climatizadas, vivienda y oficinas"],
            ["100 mm", "≈ 0,22", "Cámaras e industria agroalimentaria exigente"],
          ],
        },
      },
      {
        heading: "El espesor no lo es todo",
        paragraphs: [
          "El espesor del núcleo manda en el aislamiento, pero hay otros factores que conviene no perder de vista. El primero es la junta entre paneles: un machihembrado bien diseñado evita el puente térmico que, en paneles baratos, deja escapar calor justo por las uniones. Un panel grueso con una junta mala rinde menos de lo que dice su ficha, así que la calidad del encaje importa tanto como los milímetros.",
          "El segundo factor es la condensación: aislar bien la reduce, pero en locales muy húmedos —granjas, salas de lavado— también hay que ventilar la cubierta. Y el tercero es la chapa: no aporta aislamiento, pero un espesor adecuado (0,5 mm en zonas de viento o con tránsito de mantenimiento) evita deformaciones que, con el tiempo, abren juntas y comprometen la estanqueidad de todo el conjunto.",
        ],
      },
      {
        heading: "Cuándo el espesor lo decide la normativa",
        paragraphs: [
          "En edificios de uso residencial o terciario, el espesor no es libre: el Código Técnico de la Edificación (CTE) fija una transmitancia máxima según la zona climática, y eso obliga a un espesor mínimo de panel para cumplir. Extremadura, con veranos muy exigentes, pide aislamientos generosos en cualquier construcción que se vaya a habitar o climatizar de forma estable.",
          "En naves agrícolas o almacenes sin climatizar, en cambio, el espesor lo marcan el sentido común y el bolsillo más que la norma. La recomendación que damos es sencilla: si dudas entre dos espesores en un edificio que se va a usar de verdad, sube al mayor; el sobrecoste es pequeño frente a lo que cuesta corregir más tarde una cubierta que se ha quedado corta de aislamiento.",
        ],
      },
      {
        heading: "Un ejemplo práctico para fijar el criterio",
        paragraphs: [
          "Pongamos un almacén de fruta en las Vegas Altas. Sin climatización activa pero con producto sensible al calor, el objetivo es frenar la entrada del sol del verano. Aquí un panel de 50 a 60 mm es un buen punto de partida: aísla lo suficiente para amortiguar el calor extremeño sin disparar el presupuesto. Si además se mete frío, el salto a 80 o 100 mm se paga solo en consumo eléctrico a lo largo de las campañas.",
          "El mismo razonamiento al revés: para un cobertizo de aperos abierto por un lado, gastar en 80 mm no aporta nada, porque el aire entra y sale; ahí 30 mm cumplen de sobra. Dimensionar es, en el fondo, ajustar el espesor a lo que de verdad ocurre dentro del edificio, ni un milímetro de más ni de menos.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Resolvemos las dudas más habituales sobre el espesor del panel sándwich.",
        ],
        bullets: [
          "¿Qué espesor de panel necesito? Depende del uso: 30 a 40 mm para cobertizos y naves sin climatizar, 60 a 80 mm para vivienda y espacios climatizados, 100 mm para cámaras.",
          "¿Qué es la transmitancia térmica? La U mide cuánta energía atraviesa el panel por grado de diferencia entre interior y exterior; cuanto más baja, mejor aísla.",
          "¿Duplicar el espesor duplica el aislamiento? Aproximadamente: pasar de 40 a 80 mm reduce la transmitancia casi a la mitad y mejora mucho el confort térmico.",
          "¿Influye la chapa en el aislamiento? Apenas; la chapa aporta resistencia mecánica. El aislamiento lo dan el espesor y el tipo de núcleo.",
          "¿Me quedo corto o me paso de espesor? En edificios climatizados, mejor pasarse un poco: el sobrecoste se amortiza en pocas temporadas de calefacción o aire.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Precio del panel sándwich por m²", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "chapa-perfilada-usos-acabados",
    title: "Chapa perfilada: usos, espesores y acabados de la chapa grecada",
    metaDescription:
      "Todo sobre la chapa perfilada o grecada: usos en cubierta y fachada, espesores (0,4-0,6 mm), acabados galvanizado y prelacado, y cuándo elegirla.",
    excerpt:
      "La chapa perfilada es la solución más económica para cubrir y cerrar. Repasamos perfiles, espesores, acabados y cuándo conviene frente al panel.",
    date: "2026-06-08",
    category: "Productos",
    readingMinutes: 4,
    keywords: [
      "chapa perfilada",
      "chapa grecada",
      "chapa para cubierta",
      "chapa prelacada",
    ],
    sections: [
      {
        heading: "Qué es la chapa perfilada y dónde se usa",
        paragraphs: [
          "La chapa perfilada (también llamada grecada o trapezoidal) es una lámina de acero conformada en frío con nervios que le dan rigidez. Sin núcleo aislante, es el cerramiento más económico del mercado: cubiertas de cobertizos, cerramientos de naves abiertas, vallados, casetas, e incluso como chapa inferior en cubiertas tipo deck.",
          "Su límite es térmico: al no aislar, genera condensaciones en locales cerrados con actividad. Para esos casos, el salto natural es el panel sándwich o la chapa con manta aislante.",
        ],
      },
      {
        heading: "Espesores y acabados",
        paragraphs: [
          "Los espesores habituales van de 0,4 a 0,6 mm. Para cubiertas transitables por mantenimiento o zonas con viento recomendamos 0,5 mm o más; el 0,4 mm funciona bien en vallados y cerramientos verticales.",
          "En acabados, la opción básica es el galvanizado (gris metálico, protección por zinc) y la más demandada el prelacado: la chapa sale de fábrica pintada en color —rojo teja, blanco, verde, gris— con lacados de poliéster resistentes a la intemperie. El prelacado no solo mejora la estética: añade una capa más de protección contra la corrosión.",
        ],
      },
      {
        heading: "Chapa o panel: cómo decidir",
        paragraphs: [
          "La regla rápida: si el espacio va a estar cerrado y se va a trabajar, almacenar productos sensibles o estabular animales, conviene panel sándwich. Si es un espacio abierto o ventilado —un porche, un cobertizo de aperos, un vallado— la chapa perfilada resuelve con la mínima inversión.",
          "En Panelex fabricamos ambas familias, así que el consejo es neutral: dinos qué vas a construir y te diremos qué material encaja, sin vender de más.",
        ],
      },
      {
        heading: "Perfiles y medidas de la chapa",
        paragraphs: [
          "La chapa perfilada se fabrica en distintos perfiles según la altura y la separación de la greca. Los más comunes son el trapezoidal (greca en forma de trapecio, el más usado en cubierta por su rigidez) y la chapa de pequeña onda para cerramientos y fachadas. La altura de la greca, que va de unos 18 a más de 40 mm, determina la distancia que la chapa puede salvar entre apoyos: a mayor greca, más separación admisible entre correas.",
          "El ancho útil de cada chapa ronda el metro, y la longitud se sirve a medida, lo que reduce los solapes transversales. Igual que el panel, la chapa se corta al largo del faldón, así que en cubiertas continuas se evita el solape horizontal, que es justo el punto por donde más filtra una cubierta de chapa simple cuando la pendiente es escasa.",
        ],
      },
      {
        heading: "Cómo se monta y con qué accesorios",
        paragraphs: [
          "El montaje de la chapa perfilada es rápido: se atornilla a las correas con tornillos autotaladrantes y arandela de estanqueidad EPDM, siempre en la cresta de la greca, nunca en el valle por donde corre el agua. El solape lateral encaja onda sobre onda y, en pendientes bajas o con mucha exposición al viento, se sella con cinta butílica para que el agua no entre por capilaridad.",
        ],
        bullets: [
          "Tornillería autotaladrante con arandela EPDM, colocada en la cresta de la greca.",
          "Remates a juego: cumbreras, remates laterales y de encuentro, en el mismo color de la chapa.",
          "Cinta butílica en los solapes cuando la pendiente es baja o la exposición al viento es alta.",
          "Lucernarios de placa traslúcida intercalados con la chapa para meter luz natural.",
          "Manta o panel aislante por debajo cuando se quiere reducir la condensación en un local cerrado.",
        ],
      },
      {
        heading: "Cubierta deck y soluciones mixtas",
        paragraphs: [
          "Más allá del cerramiento simple, la chapa perfilada cumple un papel estructural en las cubiertas tipo deck de naves industriales: la chapa grecada hace de soporte sobre el que se colocan el aislamiento y la impermeabilización de la cubierta plana. También se utiliza como bandeja portante y, en algunos sistemas, como forjado colaborante combinada con hormigón.",
          "Cuando un local cerrado necesita algo de aislamiento pero no llega al presupuesto del panel sándwich, una solución intermedia es la chapa con manta de lana mineral por debajo: no iguala al panel, pero corta la condensación y rebaja el calor. Aun así, si dentro se va a trabajar o a almacenar producto sensible, el panel sándwich sigue siendo la opción correcta y la que mejor envejece.",
        ],
      },
      {
        heading: "Mantenimiento y vida útil de la chapa",
        paragraphs: [
          "Como cualquier elemento de acero a la intemperie, la chapa perfilada dura más cuanto mejor se cuide su superficie. El galvanizado protege con su capa de zinc, y el prelacado añade encima la pintura de color; mientras esa protección esté intacta, la chapa aguanta años sin problemas. El enemigo número uno vuelve a ser el corte con radial: las limaduras incandescentes se clavan en la chapa y germinan en óxido con la primera lluvia.",
          "El mantenimiento es mínimo: mantener limpios los valles y los canalones para que el agua corra, revisar las arandelas de los tornillos cada cierto tiempo y retocar con pintura los pequeños roces antes de que la corrosión progrese. En ambientes muy agresivos o cercanos al mar conviene subir el nivel de protección o pasar directamente a soluciones específicas, porque la chapa estándar no está pensada para esos entornos.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Las dudas más habituales sobre la chapa perfilada y cuándo conviene frente al panel.",
        ],
        bullets: [
          "¿Qué diferencia hay entre chapa perfilada y panel sándwich? La chapa es una sola lámina de acero sin aislamiento; el panel lleva un núcleo aislante entre dos chapas. La chapa es más barata pero no aísla.",
          "¿Qué espesor de chapa elijo? De 0,5 mm o más para cubiertas con viento o tránsito de mantenimiento; 0,4 mm vale para vallados y cerramientos verticales.",
          "¿Galvanizada o prelacada? La galvanizada es más económica; la prelacada añade color y una capa más de protección contra la corrosión, recomendable a la intemperie.",
          "¿La chapa simple genera condensación? Sí, en locales cerrados con actividad; para evitarlo se usa panel sándwich o chapa con manta aislante por debajo.",
          "¿Sirve la chapa perfilada para cubrir una nave? Sí, en naves abiertas o sin exigencia térmica; si hay que aislar o conservar temperatura, conviene panel.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Diferencias entre cubierta y fachada", href: "/sobre-nosotros/panel-cubierta-vs-fachada" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "agropanel-naves-ganaderas",
    title: "Agropanel: el panel sándwich para granjas y ambientes corrosivos",
    metaDescription:
      "Agropanel: panel sándwich con cara interior de fibra de vidrio para granjas avícolas, porcinas y ambientes corrosivos. Ventajas, limpieza y durabilidad.",
    excerpt:
      "El amoniaco y la humedad de una granja destruyen la chapa convencional. El Agropanel sustituye la cara interior por fibra de vidrio y resuelve el problema.",
    date: "2026-06-15",
    category: "Productos",
    readingMinutes: 4,
    keywords: [
      "agropanel",
      "panel sándwich granja",
      "panel naves ganaderas",
      "panel fibra de vidrio",
    ],
    sections: [
      {
        heading: "El problema: ambientes interiores agresivos",
        paragraphs: [
          "En una granja avícola o porcina, el ambiente interior combina humedad constante, amoniaco y limpiezas frecuentes con agua a presión y desinfectantes. Ese cóctel ataca el lacado de la chapa interior de un panel convencional y acaba corroyendo el acero en pocos años, justo en la cara que no se puede reponer sin desmontar la cubierta.",
        ],
      },
      {
        heading: "La solución: cara interior de poliéster reforzado",
        paragraphs: [
          "El Agropanel mantiene la chapa exterior de acero prelacado y el núcleo de poliuretano, pero sustituye la chapa interior por una lámina de poliéster reforzado con fibra de vidrio. Este material es inmune a la corrosión química, soporta el lavado a presión y no aporta puentes de oxidación.",
          "El resultado es un panel pensado para durar la vida útil de la explotación: granjas avícolas y porcinas, salas de ordeño, industrias agroalimentarias con ambientes salinos o ácidos, e instalaciones cercanas al mar.",
        ],
      },
      {
        heading: "Disponibilidad en el catálogo Panelex",
        paragraphs: [
          "En Panelex ofrecemos la variante Agropanel sobre nuestros paneles de cubierta estándar: misma geometría, mismos espesores y la cara interior adaptada al ambiente ganadero. Si tu proyecto es una explotación ganadera, indícalo al pedir presupuesto y te cotizamos directamente la versión Agropanel.",
        ],
      },
      {
        heading: "Por qué la fibra de vidrio aguanta donde el acero falla",
        paragraphs: [
          "La clave del Agropanel está en el material de su cara interior. El poliéster reforzado con fibra de vidrio —el mismo principio de los depósitos y las piscinas de poliéster— no es metálico, así que no hay acero que el amoniaco o la humedad puedan oxidar. Donde el lacado de una chapa convencional acaba picándose y dejando aflorar el óxido, la lámina de fibra mantiene su superficie intacta año tras año, sin importar lo agresivo que sea el ambiente.",
          "Además, esa cara interior es lisa y poco porosa, lo que dificulta que se agarren la suciedad y los microorganismos. En una explotación donde la bioseguridad es crítica, una superficie que se limpia y se desinfecta a fondo sin degradarse es una ventaja sanitaria, no solo de durabilidad. La cara exterior, en cambio, sigue siendo de acero prelacado, porque fuera no existe ese ambiente corrosivo y el acero rinde perfectamente.",
        ],
      },
      {
        heading: "Dónde se usa el Agropanel",
        paragraphs: [
          "El Agropanel está pensado para cualquier ambiente interior corrosivo o muy húmedo, donde una chapa convencional tendría los días contados. Estos son sus usos más habituales:",
        ],
        bullets: [
          "Granjas avícolas: amoniaco constante de la cama y lavados entre crianzas.",
          "Explotaciones porcinas: humedad, gases y limpieza a presión frecuente.",
          "Salas de ordeño y lecherías: humedad permanente y desinfección diaria.",
          "Industria agroalimentaria: ambientes salinos o ácidos, salas de despiece y secaderos.",
          "Instalaciones cercanas al mar: la brisa marina cargada de sal ataca el acero expuesto.",
        ],
      },
      {
        heading: "Higiene, limpieza y durabilidad",
        paragraphs: [
          "En ganadería intensiva, el vacío sanitario entre lotes implica lavar y desinfectar toda la nave con agua a presión y productos químicos agresivos. Una chapa de acero lacado soporta mal esa rutina: el chorro y los desinfectantes van minando el lacado hasta que el acero queda expuesto y empieza a corroerse desde la cara que no se puede reponer sin desmontar la cubierta entera, con el coste y el parón que eso supone.",
          "El Agropanel se diseña precisamente para esa rutina: la cara de fibra resiste el lavado a presión y los desinfectantes sin degradarse, lo que mantiene la higiene y alarga la vida de la instalación. El cálculo económico es sencillo: el sobrecoste frente a un panel normal es pequeño comparado con lo que cuesta reponer una cubierta corroída a mitad de la vida útil de la granja.",
        ],
      },
      {
        heading: "Espesores y configuración del Agropanel",
        paragraphs: [
          "El Agropanel parte de la misma base que nuestros paneles de cubierta: núcleo de poliuretano, la misma geometría de grecas y los mismos espesores, de modo que el aislamiento se elige igual que en cualquier nave. Y en ganadería el aislamiento importa, porque el control térmico influye directamente en el bienestar y el rendimiento de los animales. Lo único que cambia es la cara interior, sustituida por la lámina de fibra de vidrio.",
          "Esto permite combinar prestaciones: un panel con buen espesor de aislamiento para mantener estable la temperatura de la nave y, a la vez, una cara interior inmune a la corrosión. Al pedir presupuesto basta indicar que la nave es ganadera y para qué tipo de animal, y cotizamos directamente la versión Agropanel con el espesor adecuado a ese uso.",
        ],
      },
      {
        heading: "Cómo se pide y se combina con la cubierta",
        paragraphs: [
          "El Agropanel se pide como cualquier panel de cubierta, indicando las medidas del faldón y el espesor deseado; la diferencia es que la cara interior se sirve en fibra de vidrio. Lo habitual en una explotación es usar Agropanel en las zonas donde el ambiente interior es agresivo —las salas de los animales— y panel convencional o chapa en almacenes anexos, cobertizos o zonas de paso donde no hay corrosión que justifique el sobrecoste.",
          "También se combina con remates y accesorios pensados para granja, y con lucernarios cuando interesa luz natural para reducir el consumo eléctrico. Al pedir presupuesto conviene detallar el uso de cada zona de la nave: así proponemos Agropanel solo donde de verdad aporta, sin inflar el coste, y panel estándar en el resto. Ese ajuste por zonas es la forma más eficiente de cubrir una explotación completa.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Las preguntas que más nos llegan desde explotaciones ganaderas y agroalimentarias.",
        ],
        bullets: [
          "¿Qué es el Agropanel? Un panel sándwich con la cara interior de poliéster reforzado con fibra de vidrio en lugar de chapa, inmune a la corrosión de los ambientes ganaderos.",
          "¿Por qué no vale un panel normal en una granja? El amoniaco, la humedad y los lavados a presión corroen el lacado de la chapa interior y oxidan el acero en pocos años.",
          "¿Para qué explotaciones sirve? Avícolas, porcinas, salas de ordeño, industria agroalimentaria y cualquier nave con ambiente interior húmedo, salino o ácido.",
          "¿Se puede lavar a presión? Sí, la cara de fibra de vidrio resiste el lavado a presión y los desinfectantes sin degradarse, lo que facilita la bioseguridad.",
          "¿Lleva el mismo aislamiento que un panel normal? Sí, mantiene el núcleo de poliuretano y los mismos espesores; solo cambia la cara interior por la lámina de fibra.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Qué es el panel sándwich", href: "/sobre-nosotros/que-es-el-panel-sandwich" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
  {
    slug: "como-instalar-panel-sandwich-cubierta",
    title: "Cómo instalar panel sándwich de cubierta: guía paso a paso",
    metaDescription:
      "Guía de instalación de panel sándwich de cubierta: pendiente mínima, sentido de montaje, fijación, solapes, remates y errores que arruinan la estanqueidad.",
    excerpt:
      "Pendiente, sentido de montaje, tornillería y remates: los puntos críticos para que una cubierta de panel sándwich quede estanca y dure décadas.",
    date: "2026-06-22",
    category: "Guías técnicas",
    readingMinutes: 7,
    keywords: [
      "instalar panel sándwich",
      "montaje panel sándwich",
      "colocar panel sándwich cubierta",
      "pendiente panel sándwich",
    ],
    sections: [
      {
        heading: "Antes de empezar: pendiente y replanteo",
        paragraphs: [
          "La pendiente mínima orientativa para panel continuo (un solo panel del alero a la cumbrera, sin solapes transversales) es del 7 %. Con solapes transversales o lucernarios, conviene subir al 10 %. Comprueba también que las correas estén alineadas: una correa desnivelada se traduce en juntas abiertas.",
          "El replanteo marca el éxito del montaje: el primer panel debe quedar perfectamente escuadrado con el alero, porque los demás se alinean contra él. Un primer panel torcido se arrastra a toda la cubierta.",
        ],
      },
      {
        heading: "Sentido de montaje y fijación",
        paragraphs: [
          "Los paneles se montan en sentido contrario al viento dominante, de forma que el solape lateral quede a sotavento y el agua y el aire no encuentren la junta de cara. La fijación se realiza con tornillos autotaladrantes con arandela de estanqueidad EPDM, colocados en la cresta de la greca (nunca en el valle, donde corre el agua).",
        ],
        bullets: [
          "Usa tornillos con arandela EPDM de calidad; es la pieza más barata de la cubierta y la primera causa de goteras cuando falla.",
          "No aprietes de más: una arandela aplastada deja de sellar.",
          "Fija en cada correa y refuerza alero y cumbrera, que son las zonas con más succión de viento.",
          "Pisa siempre sobre los valles apoyados en correa, nunca entre apoyos.",
        ],
      },
      {
        heading: "Remates: donde se gana o se pierde la estanqueidad",
        paragraphs: [
          "La cumbrera, los remates laterales y los encuentros con paramentos verticales concentran casi todas las patologías de una cubierta de panel. Cada remate debe solapar correctamente sobre el panel, sellarse en los puntos indicados y fijarse con la misma tornillería de estanqueidad.",
          "En Panelex fabricamos los remates a juego con cada panel —misma chapa, mismo lacado— y los servimos en el mismo camión. Pedir panel y remate al mismo fabricante evita las diferencias de color y de medida que aparecen cuando se mezclan proveedores.",
        ],
      },
      {
        heading: "¿Instalación propia o profesional?",
        paragraphs: [
          "Un cobertizo o un garaje están al alcance de un aficionado cuidadoso con las medidas de seguridad. Para naves, viviendas o cualquier cubierta a más de tres metros, recomendamos montadores profesionales: trabajan con líneas de vida, conocen los detalles de remate y rinden diez veces más. Si lo necesitas, al pedir presupuesto podemos orientarte sobre montadores en tu zona.",
        ],
      },
      {
        heading: "Herramientas y material que vas a necesitar",
        paragraphs: [
          "Antes de subir el primer panel conviene tener todo a pie de obra. El montaje de una cubierta de panel no pide maquinaria compleja, pero sí material específico de calidad, porque las piezas más baratas suelen ser las que fallan primero:",
        ],
        bullets: [
          "Atornillador con embrague regulable, para no pasarte de apriete y aplastar las arandelas.",
          "Tornillos autotaladrantes con arandela EPDM, en la longitud adecuada al espesor del panel.",
          "Cinta butílica y sellador de poliuretano para solapes y encuentros.",
          "Remates a juego: cumbrera, laterales, alero y encuentros con paramentos.",
          "Guantes de corte, líneas de vida y, si hay que cortar, tijera de chapa o sierra de calar (nunca radial).",
          "Pintura de retoque del color del panel para sellar pequeños roces.",
        ],
      },
      {
        heading: "El corte: por qué la radial está prohibida",
        paragraphs: [
          "Hay un error que arruina una cubierta nueva antes de estrenarla: cortar el panel con radial o amoladora. Las chispas y las limaduras de hierro incandescente se incrustan en el lacado de toda la chapa y, en cuanto llueve, cada partícula se convierte en un punto de óxido. El panel se llena de manchas marrones imposibles de quitar y la garantía del fabricante decae.",
          "Lo correcto es cortar con tijera de chapa, sierra de calar o caladora con hoja para metal, a baja velocidad, retirando con cuidado las virutas. Mejor aún es no cortar en obra: pedir cada panel a la medida exacta del faldón, como servimos nosotros, reduce los cortes al mínimo y evita justamente este problema, además de acelerar el montaje.",
        ],
      },
      {
        heading: "Errores frecuentes que provocan goteras",
        paragraphs: [
          "Más allá del corte, estas son las causas más habituales de que una cubierta de panel acabe goteando al cabo de unos meses:",
        ],
        bullets: [
          "Apretar de más el tornillo: la arandela se aplasta, se deforma y deja de sellar.",
          "Atornillar en el valle de la greca en lugar de en la cresta, justo por donde corre el agua.",
          "Pendiente insuficiente: por debajo del 7 % el agua se remansa en las juntas y filtra.",
          "Montar el solape lateral a favor del viento dominante, que empuja el agua hacia dentro.",
          "Pisar entre correas y abollar el panel, creando una bolsa donde se acumula el agua.",
          "Mezclar remates de otro fabricante, con medidas y solapes que no casan con el panel.",
        ],
      },
      {
        heading: "Seguridad: trabajar en cubierta no es trivial",
        paragraphs: [
          "La instalación de cubierta es la fase con más riesgo de una obra, y el panel no es una superficie para confiarse. Hasta que no está atornillado, un panel puede deslizar o volcar con una racha de viento, y la chapa mojada o con rocío resbala. Por eso se trabaja con líneas de vida ancladas a la estructura, arnés, calzado antideslizante y, cuando la altura lo pide, redes o plataformas de protección.",
          "Una regla de oro: pisar siempre sobre los valles del panel que apoyan en correa, nunca en el centro del vano entre correas, donde el panel cede. En cubiertas con lucernarios de policarbonato hay que extremar el cuidado, porque una placa traslúcida no aguanta el peso de una persona y es causa frecuente de accidentes graves. Si la cubierta está a más de tres metros o la nave es grande, lo sensato es contratar montadores profesionales.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Las dudas más habituales sobre el montaje de una cubierta de panel sándwich.",
        ],
        bullets: [
          "¿Qué pendiente mínima necesita una cubierta de panel sándwich? En torno al 7 % para panel continuo sin solapes; con solapes transversales o lucernarios conviene subir al 10 %.",
          "¿Se puede cortar el panel con radial? No: las limaduras incandescentes oxidan el lacado y manchan la chapa. Se corta con tijera o sierra de calar, o se pide cortado a medida.",
          "¿Dónde van los tornillos, en la cresta o en el valle? En la cresta de la greca, nunca en el valle por donde corre el agua, y con arandela EPDM sin apretar de más.",
          "¿En qué sentido se montan los paneles? En sentido contrario al viento dominante, para que el solape lateral quede a sotavento y el agua no entre por la junta.",
          "¿Puedo instalarlo yo mismo? Un cobertizo o un garaje sí, con cuidado y seguridad; para naves o alturas superiores a tres metros conviene un montador profesional.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver catálogo de productos", href: "/productos" },
      { label: "Diferencias entre cubierta y fachada", href: "/sobre-nosotros/panel-cubierta-vs-fachada" },
      { label: "Pide presupuesto", href: "/contacto" },
    ],
  },
];

/** Listado completo: los 8 posts base + los lotes SEO añadidos en lib/posts/. */
export const POSTS: BlogPost[] = [
  ...BASE_POSTS,
  ...px01,
  ...px02,
  ...px03,
  ...px04,
  ...px05,
  ...px06,
  ...px07,
  ...px08,
  ...px09,
  ...px10,
  ...px11,
  ...px12,
  ...px13,
  ...px14,
  ...px15,
  ...px16,
  ...px17,
  ...px18,
  ...px19,
  ...px20,
  ...px21,
  ...px22,
  ...px23,
  ...px24,
  ...px25,
  ...px26,
  ...px27,
  ...px28,
  ...px29,
  ...px30,
  ...px31,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/**
 * Posts relacionados: misma categoría primero, luego el resto; dentro de cada
 * grupo, los más recientes primero. Ordenar por fecha hace que el contenido
 * nuevo reciba enlaces internos entrantes automáticamente (antes, al ir por el
 * orden del archivo, los posts nuevos quedaban huérfanos y tardaban en indexar).
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const byDateDesc = (a: BlogPost, b: BlogPost) =>
    new Date(b.date).getTime() - new Date(a.date).getTime();
  const others = POSTS.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === current.category).sort(byDateDesc);
  const otherCat = others.filter((p) => p.category !== current.category).sort(byDateDesc);
  return [...sameCat, ...otherCat].slice(0, limit);
}
