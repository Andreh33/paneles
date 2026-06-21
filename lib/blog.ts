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

export interface PostSection {
  /** Encabezado H2 de la sección */
  heading: string;
  /** Párrafos de texto plano */
  paragraphs: string[];
  /** Lista opcional de puntos (se renderiza como <ul>) */
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description (~150 caracteres) */
  metaDescription: string;
  /** Entradilla que se muestra en la card y al inicio del post */
  excerpt: string;
  /** Fecha ISO de publicación (se usa en JSON-LD y <time>) */
  date: string;
  category: string;
  readingMinutes: number;
  keywords: string[];
  sections: PostSection[];
  /** Enlaces internos hacia páginas de conversión (productos/proyectos/home). */
  internalLinks?: { label: string; href: string }[];
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
    ],
  },
  {
    slug: "precio-panel-sandwich-m2",
    title: "Precio del panel sándwich por m²: qué lo determina en 2026",
    metaDescription:
      "¿Cuánto cuesta el panel sándwich por metro cuadrado? Factores que determinan el precio: espesor, chapa, acabado y transporte. Consejos para ahorrar.",
    excerpt:
      "El precio del panel sándwich depende del espesor del núcleo, el grosor de la chapa, el acabado y el transporte. Te contamos cómo se forma el precio y cómo ahorrar.",
    date: "2026-05-11",
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
        bullets: [
          "Espesor del núcleo aislante: a más espesor (30, 40, 50, 60, 80, 100 mm…), más aislamiento y más precio. Es el factor que más pesa.",
          "Espesor de la chapa de acero: las combinaciones habituales van de 0,3/0,3 mm a 0,5/0,5 mm. Más chapa significa más resistencia y más coste.",
          "Acabado y perfil: un panel de cubierta estándar es más económico que un panel teja o una fachada de fijación oculta. Los colores especiales también influyen.",
          "Transporte: el panel es voluminoso. Comprar a un fabricante con logística propia y optimizar el camión completo reduce el coste por m².",
        ],
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
    ],
  },
  {
    slug: "que-espesor-de-panel-elegir",
    title: "¿Qué espesor de panel sándwich elegir? Aislamiento y transmitancia",
    metaDescription:
      "Cómo elegir el espesor del panel sándwich: 30, 40, 50, 80 o 100 mm. Transmitancia térmica, usos recomendados y errores habituales al dimensionar.",
    excerpt:
      "Del panel de 30 mm para un cobertizo al de 100 mm para una cámara: criterios claros para elegir espesor sin pagar de más ni quedarse corto.",
    date: "2026-06-01",
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
    ],
  },
  {
    slug: "panel-sandwich-extremadura-badajoz",
    title: "Panel sándwich en Extremadura: fábrica en Badajoz con envío a toda España",
    metaDescription:
      "Fábrica de panel sándwich en Badajoz (Puebla de la Calzada). Venta directa de fábrica con envío a Extremadura, Andalucía, toda España y Portugal.",
    excerpt:
      "Por qué comprar panel sándwich directamente a una fábrica extremeña: precio de fábrica, corte a medida y logística propia hasta tu obra, estés donde estés.",
    date: "2026-06-29",
    category: "Empresa",
    readingMinutes: 4,
    keywords: [
      "panel sándwich Extremadura",
      "panel sándwich Badajoz",
      "fábrica panel sándwich",
      "panel sándwich Portugal",
    ],
    sections: [
      {
        heading: "Una fábrica de panel en el oeste peninsular",
        paragraphs: [
          "La mayor parte de los fabricantes de panel sándwich de España se concentran en el norte y el levante. Eso deja al cuadrante suroeste —Extremadura, Andalucía occidental y el Alentejo portugués— lejos de fábrica, con portes caros y plazos largos. Panelex nació precisamente para cubrir ese hueco: una planta de fabricación en Puebla de la Calzada (Badajoz), a pie de la autovía A-5 y a media hora de la frontera portuguesa.",
        ],
      },
      {
        heading: "Qué significa comprar directo de fábrica",
        paragraphs: [
          "Comprar a fábrica tiene tres consecuencias prácticas. La primera es el precio: no hay intermediarios que añadan margen. La segunda es el corte a medida: cada panel sale de la línea con la longitud exacta de tu faldón, sin mermas. La tercera es la trazabilidad: si surge cualquier duda técnica, respondes con quien ha fabricado el material, no con un revendedor.",
          "A esto se suma la cercanía real: puedes visitar la planta, ver el material antes de comprarlo y recoger pedidos pequeños en fábrica si te corre prisa.",
        ],
      },
      {
        heading: "Envíos a toda España y Portugal",
        paragraphs: [
          "Trabajamos a diario en Badajoz y Cáceres, y servimos con frecuencia a Sevilla, Huelva, Córdoba, Toledo, Ciudad Real, Madrid y el Alentejo. Para el resto de la península organizamos transporte completo o agrupado según el volumen del pedido: con las medidas de tu obra te cerramos precio con porte incluido, sin sorpresas.",
          "Si tu obra está en Portugal, gestionamos la documentación de la expedición y trabajamos habitualmente con clientes portugueses; la frontera está a 30 km de la planta.",
        ],
      },
    ],
  },
];

/** Listado completo: los 9 posts base + los lotes SEO añadidos en lib/posts/. */
export const POSTS: BlogPost[] = [
  ...BASE_POSTS,
  ...px01,
  ...px02,
  ...px03,
  ...px04,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Posts relacionados: misma categoría primero, luego el resto, sin el actual. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const others = POSTS.filter((p) => p.slug !== slug);
  return [
    ...others.filter((p) => p.category === current.category),
    ...others.filter((p) => p.category !== current.category),
  ].slice(0, limit);
}
