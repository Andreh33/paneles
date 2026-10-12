import type { BlogPost } from "@/lib/blog";

export const posts: BlogPost[] = [
  {
    slug: "distancia-entre-correas-panel-sandwich",
    title: "Distancia entre correas para panel sándwich: cómo decidir",
    metaDescription: "Qué revisar en las tablas de carga del panel sándwich para definir la distancia entre correas: apoyos, viento, nieve, fijaciones y datos para presupuestar.",
    excerpt: "Antes de encargar el panel o soldar las correas, comprueba que el despiece y los apoyos corresponden a la misma solución. Esta guía explica qué datos pedir y cómo leer una tabla sin trasladar valores de otra cubierta.",
    quickAnswer: "La distancia entre correas se define con la tabla de cargas del panel concreto y las acciones previstas para la obra. Depende del núcleo, las chapas, el número de vanos, el ancho de apoyo y las fijaciones. El espesor aislante, por sí solo, no permite elegir una separación segura.",
    date: "2026-10-12",
    category: "Guías técnicas",
    readingMinutes: 5,
    keywords: ["distancia entre correas panel sándwich", "separación apoyos panel sándwich", "tabla cargas panel cubierta", "luz máxima panel sándwich"],
    sections: [
      {
        heading: "Qué distancia hay que medir realmente",
        paragraphs: [
          "La pregunta suele llegar cuando ya existe una estructura: las correas están colocadas y falta elegir el cerramiento. Para pedir una comprobación, dibuja cada línea de apoyo y anota las distancias entre sus ejes, además de la anchura de la superficie sobre la que descansará el panel. Si el documento del fabricante define otra forma de medir la luz, utiliza esa definición. Un croquis evita confundir la luz libre con la separación entre ejes.",
          "Identifica también los vuelos del alero y de los extremos. Un panel que atraviesa varios apoyos, otro que termina sobre una correa y un tramo en voladizo representan situaciones diferentes. Tampoco basta con indicar la distancia media: si las correas no están repartidas uniformemente, deben figurar todos los tramos. Las medidas se pueden obtener de planos fiables o mediante una toma de datos preparada con acceso seguro, sin caminar sobre una cubierta desconocida.",
        ],
      },
      {
        heading: "Por qué no existe una separación válida para cualquier panel",
        paragraphs: [
          "El panel funciona como un conjunto de caras metálicas y núcleo. Cambiar el espesor de una chapa, el perfil o el tipo de núcleo puede modificar su comportamiento aunque dos ofertas indiquen el mismo espesor total. Una tabla de un panel de fachada tampoco sirve para decidir la cubierta de una nave.",
          "El CTE DB-SE-AE diferencia acciones como el peso propio, las sobrecargas, el viento y la nieve. Su determinación depende de las condiciones del edificio; no sale del nombre comercial del panel. En Badajoz, Cáceres o cualquier otra provincia, la dirección exacta, la geometría y la exposición aportan más información que una recomendación genérica para toda la zona. El técnico de la obra debe definir las acciones que se compararán con la documentación del fabricante.",
        ],
      },
      {
        heading: "Una lista de lectura para la tabla de cargas",
        paragraphs: [
          "Antes de mirar la casilla de la luz, verifica que la cabecera corresponde a lo que vas a comprar. Guarda el documento completo y su fecha: una captura de una fila puede perder precisamente las notas que condicionan el resultado. Las tablas de fabricantes como Ruukki muestran, por ejemplo, configuraciones concretas de chapas y apoyos; esa documentación ilustra por qué los valores no se pueden trasladar a otro producto.",
        ],
        table: {
          caption: "Datos que deben coincidir entre proyecto, oferta y tabla",
          headers: ["Comprobación", "Qué debe quedar identificado"],
          rows: [
            ["Producto", "Referencia, núcleo, espesor y caras exterior e interior"],
            ["Esquema", "Un vano, varios vanos, longitudes y continuidad real"],
            ["Apoyo", "Ancho, material y condiciones indicadas por el fabricante"],
            ["Acciones", "Presión, succión y demás cargas de proyecto"],
            ["Criterio", "Resistencia, deformación y unidades empleadas"],
            ["Fijación", "Tipo, disposición y resistencia de la unión"],
          ],
        },
      },
      {
        heading: "La succión del viento y los tornillos también cuentan",
        paragraphs: [
          "Una cubierta no trabaja únicamente con fuerzas hacia abajo. El viento puede producir succión y exigir a las uniones un esfuerzo distinto del que sugiere el peso del panel. El cálculo debe considerar las zonas correspondientes a la geometría del edificio, incluidos bordes y esquinas. Por eso no conviene convertir un promedio de tornillos por metro cuadrado en una pauta idéntica para todo el tejado.",
          "Solicita que la comprobación identifique qué elemento limita la solución: panel, fijación, apoyo o propia estructura. Si el panel cumple entre dos correas, eso no demuestra que las correas, sus uniones y los pórticos admitan el conjunto. Y si más adelante se añaden placas solares, equipos o accesos de mantenimiento, esa incorporación requiere una revisión específica.",
        ],
      },
      {
        heading: "Qué hacer si los apoyos existentes no encajan",
        paragraphs: [
          "Pide estudiar alternativas antes de cerrar la compra: otro panel con prestaciones documentadas, una distribución diferente o un refuerzo de la estructura. La elección debe comparar el coste completo, incluyendo correas, conexiones, mano de obra y medios auxiliares. Comprar más aislamiento únicamente para intentar salvar una luz mayor puede aumentar el presupuesto sin resolver la condición que gobierna el cálculo.",
          "Ejemplo de consulta bien preparada: nave con tres tramos distintos, croquis acotado, fotos de las correas tomadas desde una posición segura, ubicación y referencia del panel propuesto. La respuesta útil debe indicar para qué configuración es válida. No es suficiente recibir un número aislado de metros sin identificar las cargas ni el modelo.",
        ],
      },
      {
        heading: "Datos para consultar el suministro a Panelex",
        paragraphs: ["Envía el plano de apoyos, las longitudes de los faldones, pendiente, ubicación, uso del edificio y necesidades de aislamiento. Añade las cargas y requisitos que haya definido el técnico. Con esa información se puede concretar la referencia a presupuestar y pedir su documentación aplicable; la selección comercial y la justificación estructural deben quedar coordinadas antes de fabricar el despiece."],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [],
        bullets: [
          "¿Un panel más grueso permite separar más las correas? Puede cambiar la capacidad, pero hay que comprobar la referencia completa y las condiciones de su tabla. No se deduce solo del núcleo.",
          "¿Puedo copiar la separación de la nave vecina? No constituye una justificación: pueden cambiar panel, acciones, geometría, apoyos y fijaciones.",
          "¿La tabla del panel calcula toda la estructura? No. La estructura y sus uniones requieren su propia comprobación.",
          "¿Sirve la misma comprobación para instalar placas solares? Solo si contemplaba expresamente esas cargas y su sistema de transmisión; en otro caso hay que revisarla.",
        ],
      },
    ],
    internalLinks: [
      { label: "Panel de cubierta", href: "/productos/panel-cubierta-rojo" },
      { label: "Cargas de viento y nieve", href: "/sobre-nosotros/panel-sandwich-en-zonas-de-viento-y-nieve" },
      { label: "Tornillería del panel sándwich", href: "/sobre-nosotros/tornilleria-panel-sandwich" },
      { label: "Consultar suministro y documentación", href: "/contacto" },
    ],
    sources: [
      { label: "CTE: DB-SE-AE, acciones en la edificación", href: "https://www.codigotecnico.org/pdf/Documentos/SE/DBSE-AE.pdf" },
      { label: "Ruukki: documentación y tablas por modelo de panel", href: "https://www.ruukki.com/building-envelopes/services-support/sandwich-panel-support" },
    ],
  },
  {
    slug: "solape-transversal-panel-sandwich-cubierta",
    title: "Solape transversal del panel sándwich: qué pedir en obra",
    metaDescription: "Cómo prever el solape transversal de una cubierta de panel sándwich: despiece, pendiente, apoyo, sellado y diferencias respecto a la unión lateral.",
    excerpt: "Cuando un faldón necesita dos paneles consecutivos, el encuentro debe definirse antes del pedido. Revisamos cómo coordinar longitudes, apoyos y sellado sin improvisar el solape en obra.",
    quickAnswer: "El solape transversal une dos paneles consecutivos en la dirección de la pendiente. Su longitud, apoyo, sellado y pendiente admisible dependen del sistema del fabricante. Debe figurar en el despiece y en el pedido; no se resuelve aplicando al extremo del panel las reglas de su junta lateral.",
    date: "2026-10-12",
    category: "Montaje",
    readingMinutes: 5,
    keywords: ["solape transversal panel sándwich", "empalmar panel sándwich cubierta", "cubierta panel faldón largo", "solape panel cubierta"],
    sections: [
      {
        heading: "Solape lateral y transversal son encuentros distintos",
        paragraphs: [
          "La junta lateral conecta dos paneles colocados uno al lado del otro y sigue la pendiente del faldón. El encuentro transversal aparece cuando necesitas prolongar el recorrido desde el alero hacia la parte alta con otra pieza. En este segundo caso, el agua atraviesa una línea de unión que debe estar diseñada para ese sistema de cubierta.",
          "Antes de elegir la unión, estudia si el suministro y la manipulación permiten un panel continuo. Eliminar un encuentro puede simplificar el detalle, pero una pieza más larga también condiciona transporte, descarga y elevación. La comparación debe hacerse con las condiciones reales del acceso y los medios de montaje, no solo con el largo que cabe sobre el plano.",
        ],
      },
      {
        heading: "La longitud del solape no es una cifra universal",
        paragraphs: [
          "Como ejemplo específico, el catálogo Hiansa 2026 describe para su sistema 2GR/3GR con tapajuntas un solape mínimo de 200 mm, pendiente superior al 10 %, apoyo de al menos 100 mm y desfase mínimo de 50 cm entre las uniones de paneles y tapajuntas. Son condiciones de ese sistema documentado, no una receta para cualquier panel ni una especificación de los productos Panelex.",
          "El ejemplo muestra por qué preguntar únicamente cuánto hay que montar una chapa sobre otra deja fuera condiciones esenciales. Para tu pedido debes obtener el detalle del modelo seleccionado, con su preparación de extremos y sus instrucciones de estanqueidad. Una solución con fijación vista, un panel teja o un encuentro con lucernario pueden requerir detalles diferentes.",
        ],
      },
      {
        heading: "Cómo reflejar el encuentro en el despiece",
        paragraphs: [
          "Identifica en el croquis el sentido del agua, cada pieza y la línea de apoyo del encuentro. El pedido debe distinguir entre la longitud fabricada y la longitud que queda cubierta después de solapar. La suma de largos de las piezas no equivale automáticamente al desarrollo útil del faldón.",
          "Ejemplo puramente geométrico: dos piezas de 4 m con una superposición prevista de 0,20 m cubren 7,80 m, antes de considerar vuelos y otros detalles. No es una recomendación de solape. La cifra correcta para una obra procede del detalle aprobado de su panel, y el despiece debe contabilizar esa diferencia para no dejar el alero corto.",
        ],
        bullets: [
          "Numera panel inferior y superior, y señala qué extremo requiere preparación de fábrica.",
          "Acota los apoyos y el desarrollo por la pendiente; no mezcles medidas horizontales y medidas del faldón.",
          "Incluye cumbrera, alero, canalón y encuentros con paredes o lucernarios.",
          "Confirma con el proveedor la interpretación del croquis antes de fabricar.",
        ],
      },
      {
        heading: "Apoyo, fijación y estanqueidad deben resolverse juntos",
        paragraphs: [
          "La unión necesita una superficie de apoyo y una fijación compatibles con el detalle. Si el encuentro queda entre correas o sobre una correa insuficiente, añadir sellador no corrige esa incompatibilidad. Lo adecuado es revisar el despiece o la estructura antes de colocar las piezas.",
          "Pide que el plano identifique el sellante o la cinta, su posición y continuidad, así como las fijaciones y las piezas auxiliares. Evita sustituir un producto por otro solo porque ambos se venden como impermeabilizantes: comprueba compatibilidad con los recubrimientos y uso previsto. La limpieza y preparación deben seguir las instrucciones del sistema y del producto de sellado.",
          "La secuencia de montaje debe impedir que el encuentro se ejecute al revés respecto al recorrido del agua. La empresa instaladora también debe prever el acceso y las protecciones para ejecutar la unión sin apoyarse en zonas que no se hayan evaluado para tránsito.",
        ],
      },
      {
        heading: "Qué revisar antes de recibir y cerrar la cubierta",
        paragraphs: [
          "En recepción, compara el etiquetado y los extremos preparados con el plano aprobado. Una diferencia de longitud o de orientación conviene aclararla mientras las piezas siguen identificadas, antes de modificar el material. Guarda fotos del encuentro durante la instalación, cuando aún se pueden ver las capas y la posición del sellado.",
          "Al finalizar, solicita la documentación de la solución ejecutada y sus instrucciones de mantenimiento. Si aparece una filtración, el agua puede desplazarse antes de hacerse visible por dentro: la reparación debe localizar el origen y no limitarse a tapar el punto de goteo. Esta guía trata de proyectar la unión desde el pedido; para una cubierta existente corresponde revisar su detalle real.",
        ],
      },
      {
        heading: "Qué enviar para presupuestar un faldón largo",
        paragraphs: ["Facilita longitud por pendiente, ancho, ubicación, croquis de correas y limitaciones de transporte o elevación. Indica si hay lucernarios, cambios de pendiente o instalaciones. Consulta con Panelex las posibilidades de suministro de la referencia elegida y deja la solución de encuentros validada por los responsables de proyecto y montaje antes de encargar las piezas."],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [],
        bullets: [
          "¿Todos los paneles permiten solape transversal? No debe darse por hecho. Hay que comprobar que el fabricante contempla esa solución para el modelo solicitado.",
          "¿Puedo pedir dos largos que sumen exactamente el faldón? Debes descontar la superposición de la longitud útil e incluir los detalles de alero y cumbrera.",
          "¿Un buen sellador permite reducir la pendiente? No sustituye las condiciones geométricas y de montaje del sistema.",
          "¿El solape se puede preparar en obra? Depende del producto y sus instrucciones; conviene solicitar la preparación de fábrica cuando exista y definirla en el pedido.",
        ],
      },
    ],
    internalLinks: [
      { label: "Pendiente mínima de la cubierta", href: "/sobre-nosotros/pendiente-minima-cubierta-panel" },
      { label: "Medir el faldón para pedir panel", href: "/sobre-nosotros/como-medir-tu-cubierta-para-pedir-panel" },
      { label: "Catálogo de paneles", href: "/productos" },
      { label: "Consultar un despiece", href: "/contacto" },
    ],
    sources: [
      { label: "Hiansa: catálogo general 2026, detalle 2GR/3GR (página 9)", href: "https://www.hiansa.com/wp-content/uploads/2026/02/HIANSA-CATALOGO-GENERAL-ES-2026.pdf" },
      { label: "Hiansa: guías de montaje y documentación técnica", href: "https://www.hiansa.com/descargas/" },
    ],
  },
  {
    slug: "panel-sandwich-sobre-vigas-madera",
    title: "Panel sándwich sobre vigas de madera: qué comprobar",
    metaDescription: "Qué comprobar antes de colocar panel sándwich sobre vigas de madera: estado de los apoyos, fijaciones, humedad, despiece y datos para pedir presupuesto.",
    excerpt: "Una estructura de madera puede recibir una cubierta de panel metálico si el conjunto se ha definido y comprobado. Estas son las preguntas que conviene resolver antes de comprar paneles y tornillos.",
    quickAnswer: "El panel sándwich metálico puede fijarse a una subestructura de madera mediante una solución compatible y calculada. Antes del pedido hay que revisar el estado y la capacidad de las vigas, la separación y anchura de los apoyos, las fijaciones específicas para madera y los encuentros que controlan agua y humedad.",
    date: "2026-10-12",
    category: "Montaje",
    readingMinutes: 5,
    keywords: ["panel sándwich sobre vigas de madera", "fijar panel sándwich a madera", "tornillos panel sándwich madera", "cubierta panel estructura madera"],
    sections: [
      {
        heading: "Primero aclara qué tipo de panel necesitas",
        paragraphs: [
          "La expresión panel sándwich de madera puede referirse a un panel con tableros de madera o a un panel metálico con acabado que imita sus vetas. Este artículo trata del panel sándwich metálico colocado sobre una estructura de madera. Su cara interior decorativa no transforma el producto en un tablero estructural ni demuestra que pueda sustituir cualquier elemento del tejado existente.",
          "Cuando consultes una oferta, envía una sección o una foto de la solución prevista y especifica qué quedará a la vista desde dentro. Si buscas vigas vistas, anota también los encuentros con paredes y remates: el espesor del cerramiento condiciona las alturas de esas piezas y la imagen final del alero.",
        ],
      },
      {
        heading: "Qué revisar en una estructura de madera existente",
        paragraphs: [
          "La inspección previa debe valorar las vigas, sus apoyos y sus uniones. El estado superficial no basta para justificar la capacidad: deben considerarse dimensiones, material, deterioros, deformaciones y condiciones de humedad. El CTE DB-SE-M es la referencia técnica de estructuras de madera dentro de su ámbito, junto con las acciones y criterios generales de seguridad estructural.",
          "Conserva la información disponible de la construcción y registra intervenciones anteriores. Si hubo filtraciones, aporta dónde aparecían y durante cuánto tiempo. Las cabezas de las vigas y sus encuentros con muros merecen especial atención en la revisión. La evaluación de una estructura antigua no debería sustituirse por una decisión comercial sobre qué espesor de panel comprar.",
        ],
        bullets: [
          "Croquis con secciones de vigas, luces y posición de los apoyos.",
          "Fotografías tomadas desde zonas accesibles, con detalle de uniones y puntos afectados por agua.",
          "Documentación de la madera y de reparaciones anteriores, si existe.",
          "Uso previsto del espacio y futuras instalaciones que puedan añadir cargas.",
        ],
      },
      {
        heading: "Fijaciones para madera: la longitud total no lo dice todo",
        paragraphs: [
          "Existen fijaciones diseñadas expresamente para unir paneles sándwich a subestructuras de madera. EJOT, por ejemplo, identifica ese uso en su gama JT3-D-2H y aporta documentación de producto. Esa existencia no convierte cualquier tornillo largo en una alternativa equivalente: la elección debe considerar el soporte y el panel que realmente se instalarán.",
          "Solicita una referencia completa con longitud, rosca, arandela y protección adecuados, además de las condiciones de instalación. La parte del tornillo que atraviesa el panel no es la misma que trabaja anclada a la madera. El detalle debe precisar la penetración eficaz, posición, distancias a bordes y posibles condiciones de pretaladrado, según su documentación y el cálculo de la unión.",
          "No se debe elegir el apriete por la idea de que cuanto más, mejor. El montaje ha de asegurar el contacto y la estanqueidad previstos sin deformar el panel ni dañar la unión. La empresa instaladora debe trabajar con el procedimiento de la fijación seleccionada.",
        ],
      },
      {
        heading: "Separación de apoyos y continuidad del panel",
        paragraphs: [
          "Dibuja cómo cruza cada panel la estructura. Si las vigas siguen la pendiente, puede ser necesaria una subestructura transversal para obtener los apoyos que requiere el panel; no debe darse por hecho que cualquier orientación de vigas sirve para el mismo despiece. La solución la determina el proyecto completo.",
          "Comprueba además que los apoyos queden alineados y tengan la anchura necesaria. Un panel continuo sobre varios puntos no trabaja como una sucesión de piezas empalmadas. Si se plantea corregir desniveles o incorporar nuevos apoyos, esas piezas y sus conexiones deben quedar definidas antes del montaje, sin resolverlas con calzos improvisados.",
        ],
      },
      {
        heading: "Agua y humedad: detalles que conviene dibujar",
        paragraphs: [
          "Alero, encuentro con pared, cumbrera y penetraciones deben conducir el agua fuera del cerramiento y proteger los apoyos. En una reforma, cambiar la cubierta también puede cambiar cómo se seca o ventila el conjunto existente. Conviene revisar todas las capas, especialmente si se mantienen tableros, láminas o un falso techo.",
          "El panel aislante no elimina por sí solo cualquier condensación. La temperatura interior, la humedad, las juntas y los puentes térmicos influyen en el resultado. Explica si debajo habrá un porche abierto, una habitación climatizada o un local húmedo para que la solución térmica y de vapor se estudie con ese uso. Añadir una lámina sin revisar su posición puede dejar sin resolver el encuentro que originaba el problema.",
        ],
      },
      {
        heading: "Cómo pedir una oferta que pueda compararse",
        paragraphs: ["Incluye panel, largos, remates, fijación propuesta y transporte. Distingue el suministro del alcance de la revisión y de los refuerzos de la madera. A Panelex puedes enviar las medidas y la referencia estética deseada junto con el detalle definido por el técnico o instalador. Pide confirmar las prestaciones y accesorios de la opción presupuestada antes de encargar el corte a medida."],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [],
        bullets: [
          "¿Puedo reutilizar las vigas del tejado anterior? Su reutilización depende de la evaluación de la estructura y de las cargas de la nueva solución.",
          "¿Sirve un tornillo pensado para correa metálica? No debe sustituirse automáticamente por uno para madera; hay que seleccionar una fijación documentada para ese soporte.",
          "¿El acabado imitación madera necesita una estructura de madera? No. El acabado y el material del soporte son decisiones distintas, sujetas a la solución constructiva.",
          "¿Puedo conservar el tablero que hay bajo la cubierta? Debe revisarse como parte del conjunto, tanto por su estado como por las condiciones de apoyo, humedad y fijación.",
        ],
      },
    ],
    internalLinks: [
      { label: "Panel imitación madera", href: "/sobre-nosotros/panel-sandwich-madera" },
      { label: "Distancia entre correas y apoyos", href: "/sobre-nosotros/distancia-entre-correas-panel-sandwich" },
      { label: "Condensaciones bajo el panel", href: "/sobre-nosotros/condensacion-panel-sandwich" },
      { label: "Consultar paneles y accesorios", href: "/contacto" },
    ],
    sources: [
      { label: "CTE: DB-SE-M, estructuras de madera", href: "https://www.codigotecnico.org/pdf/Documentos/SE/DBSE-M.pdf" },
      { label: "EJOT: fijación JT3-D-2H para paneles sobre madera", href: "https://www.ejot.es/Elementos-de-fijaci%C3%B3n-para-la-construcci%C3%B3n/Productos/Tornillos-autotaladrantes/JT3---D---2H---6%2C5-7%2C0/p/JT3-DH-2H-6_5-7_0" },
    ],
  },
  {
    slug: "espesor-chapa-panel-sandwich-04-05-06",
    title: "Espesor de chapa del panel sándwich: 0,4, 0,5 y 0,6 mm",
    metaDescription: "Cómo comparar el espesor de las chapas del panel sándwich: cara exterior e interior, recubrimientos, tablas de cargas y diferencias en el presupuesto.",
    excerpt: "Dos paneles con el mismo espesor de aislamiento pueden llevar chapas distintas. Aprende a identificar las caras metálicas y a comparar ofertas sin confundir acero, pintura y núcleo aislante.",
    quickAnswer: "El espesor de chapa y el espesor del núcleo son datos distintos. Para comparar paneles hay que identificar por separado la cara exterior y la interior, su material, perfil y recubrimiento. Elegir 0,4, 0,5 o 0,6 mm requiere comprobar las prestaciones del conjunto y las condiciones previstas en la obra.",
    date: "2026-10-12",
    category: "Compra y presupuesto",
    readingMinutes: 5,
    keywords: ["espesor chapa panel sándwich", "panel sándwich chapa 0.5", "chapa 0.4 o 0.6 panel", "comparar calidad panel sándwich"],
    sections: [
      {
        heading: "Hay tres espesores que conviene distinguir",
        paragraphs: [
          "En una oferta de panel sándwich metálico conviene separar el núcleo aislante, la chapa exterior y la chapa interior. Cuando se anuncia un panel de 40 mm, por ejemplo, ese dato no significa que sus dos caras metálicas tengan el mismo espesor. La descripción comercial debe acompañarse de la ficha de la referencia concreta.",
          "Tampoco se debe confundir la dimensión del acero con la de sus capas de protección y acabado. Pregunta qué expresa exactamente el espesor indicado y qué tolerancias se aplican. Para una comparación útil, ambos proveedores deben describir la misma magnitud y el mismo orden de caras.",
        ],
      },
      {
        heading: "Qué significa una descripción como 0,5/0,4",
        paragraphs: [
          "Una pareja de valores suele identificar los espesores de las dos caras, pero el orden debe confirmarse en la documentación. Pide que la oferta diga explícitamente exterior e interior. Si el presupuesto solo incluye uno de los valores, no rellenes el otro por suposición.",
          "Esta tabla es una plantilla de comparación, no un catálogo de combinaciones disponibles en Panelex. Puedes copiarla para pedir que te completen ambas ofertas antes de decidir.",
        ],
        table: {
          caption: "Plantilla para comparar las caras metálicas",
          headers: ["Dato", "Oferta A", "Oferta B"],
          rows: [
            ["Chapa exterior y tolerancia", "Solicitar por escrito", "Solicitar por escrito"],
            ["Chapa interior y tolerancia", "Solicitar por escrito", "Solicitar por escrito"],
            ["Material y perfil de cada cara", "Identificar referencia", "Identificar referencia"],
            ["Recubrimiento exterior e interior", "Indicar sistema y uso", "Indicar sistema y uso"],
            ["Tabla de cargas aplicable", "Adjuntar documento", "Adjuntar documento"],
            ["Núcleo y prestación térmica", "Comparar misma exigencia", "Comparar misma exigencia"],
          ],
        },
      },
      {
        heading: "Más acero no es lo mismo que más aislamiento",
        paragraphs: [
          "El aislamiento térmico se compara mediante las prestaciones declaradas del panel y su solución constructiva. Aumentar una chapa de 0,4 a 0,5 mm no equivale a aumentar el núcleo aislante. Si tu prioridad es reducir las pérdidas térmicas de un local, solicita el valor térmico correspondiente al espesor y la referencia presupuestados.",
          "Las chapas también forman parte del comportamiento mecánico del panel. Cambiar una cara puede invalidar la aplicación de una tabla de cargas que se había usado para otra configuración. La documentación de Ruukki, por ejemplo, identifica en sus tablas las caras concretas consideradas. La conclusión práctica es pedir la tabla que corresponda al suministro, sin reutilizar cifras de otra combinación.",
        ],
      },
      {
        heading: "El recubrimiento se elige por el ambiente",
        paragraphs: [
          "Dos chapas del mismo espesor pueden tener sistemas de protección distintos. Describe la exposición exterior y el ambiente interior: cercanía al mar, procesos industriales, limpieza frecuente, humedad o actividad ganadera. El color por sí solo no identifica la protección del metal ni su adecuación al uso.",
          "Pide las condiciones de mantenimiento y garantía del acabado propuesto. Una respuesta útil debe relacionar el recubrimiento con el ambiente declarado, en lugar de prometer una vida útil idéntica en cualquier edificio. Revisa especialmente la cara interior cuando exista una actividad que pueda resultar más exigente que la exposición exterior.",
        ],
      },
      {
        heading: "Cómo decidir entre 0,4, 0,5 y 0,6 mm sin pagar a ciegas",
        paragraphs: [
          "Plantea primero qué prestaciones debe cumplir la cubierta o fachada. Después compara las configuraciones documentadas que satisfacen esas condiciones. No hay una cifra que convierta automáticamente cualquier panel en bueno o malo: también cuentan el material, el perfil, el núcleo, los apoyos y el sistema de fijación.",
          "Si dos alternativas cumplen las mismas exigencias, pide el coste completo de cada una: panel, apoyos necesarios, remates, fijaciones, transporte y montaje. Una diferencia pequeña de precio por metro cuadrado puede ir acompañada de diferencias en otros capítulos; también puede que la opción más cara no aporte una ventaja relevante para tu proyecto.",
          "Ejemplo de comparación incompleta: oferta A con núcleo de 40 mm y chapas declaradas, frente a oferta B que únicamente dice panel de 40 mm. Todavía no puedes concluir que B es más económica a igualdad de producto. Primero deben completarse las caras, el acabado y la documentación de prestaciones.",
        ],
      },
      {
        heading: "Qué comprobar al confirmar el pedido",
        paragraphs: ["Guarda la ficha, la versión del presupuesto y la referencia de producto aceptada. En la recepción, verifica la correspondencia entre el material y el pedido mediante su identificación y documentación. Una medición aislada sobre pintura, nervios o bordes no sustituye la comprobación del espesor nominal y sus tolerancias. Ante una discrepancia, documenta el lote y consulta al proveedor antes de cortar o instalar las piezas."],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [],
        bullets: [
          "¿Las dos caras llevan siempre el mismo espesor? No debe suponerse. La configuración exterior e interior debe figurar en la ficha o el presupuesto.",
          "¿Un panel de 0,6 mm aísla más que uno de 0,4 mm? Esa cifra describe la chapa, no la prestación térmica del conjunto. Compara el núcleo y el valor declarado del panel.",
          "¿Puedo usar la tabla de una chapa más gruesa para la oferta más fina? No sin una comprobación específica del fabricante para esa configuración.",
          "¿Panelex suministra todas esas combinaciones? Esta guía no confirma disponibilidad. Consulta las opciones de la referencia concreta y las condiciones del pedido.",
        ],
      },
    ],
    internalLinks: [
      { label: "Qué espesor de núcleo elegir", href: "/sobre-nosotros/que-espesor-de-panel-elegir" },
      { label: "Qué determina el precio por metro cuadrado", href: "/sobre-nosotros/precio-panel-sandwich-m2" },
      { label: "Productos Panelex", href: "/productos" },
      { label: "Solicitar una oferta detallada", href: "/contacto" },
    ],
    sources: [
      { label: "Ruukki: tablas de carga SPB WE/WEF, espesores de caras y condiciones", href: "https://www.ruukki.com/docs/default-source/b2b-documents/sandwich-panels/en_spb_we_wef.pdf?sfvrsn=4637708450505500000" },
      { label: "Hiansa: guía de selección de recubrimientos y fichas técnicas", href: "https://www.hiansa.com/descargas/" },
    ],
  },
  {
    slug: "marcado-ce-declaracion-prestaciones-panel-sandwich",
    title: "Panel sándwich: marcado CE y declaración de prestaciones",
    metaDescription: "Qué documentación pedir al comprar panel sándwich: marcado CE, declaración de prestaciones, ficha técnica y correspondencia con el material entregado.",
    excerpt: "Una oferta necesita algo más que un logotipo CE. Esta lista ayuda a pedir la documentación de la referencia elegida y comprobar que corresponde al panel que llegará a la obra.",
    quickAnswer: "Al comprar panel sándwich, solicita la declaración aplicable al producto, la identificación del marcado CE, la ficha técnica y las instrucciones de instalación. Comprueba que todos los documentos corresponden a la misma referencia y uso previsto. El marcado CE informa sobre prestaciones declaradas; no sustituye la justificación del proyecto ni del montaje.",
    date: "2026-10-12",
    category: "Compra y presupuesto",
    readingMinutes: 5,
    keywords: ["marcado CE panel sándwich", "declaración prestaciones panel sándwich", "documentación panel sándwich", "DoP panel sándwich"],
    sections: [
      {
        heading: "Qué pedir antes de aceptar el suministro",
        paragraphs: [
          "La documentación es útil si permite identificar el producto y comprobar las prestaciones que necesita tu obra. Pide los documentos de la referencia presupuestada, no una carpeta genérica de la marca. Mantén la relación entre modelo, configuración, documento y material entregado desde la oferta hasta la recepción.",
          "La Comisión Europea explica que el marcado CE se coloca después de preparar la documentación técnica y emitir la declaración que corresponda. Por tanto, una imagen del símbolo en una página comercial no contiene toda la información necesaria para seleccionar el panel.",
        ],
        table: {
          caption: "Documentos y utilidad para la compra",
          headers: ["Documento", "Qué permite comprobar"],
          rows: [
            ["Declaración aplicable", "Producto, fabricante, uso previsto y prestaciones declaradas"],
            ["Información del marcado CE", "Correspondencia con la identificación y declaración del producto"],
            ["Ficha técnica", "Configuración, dimensiones y características de la referencia"],
            ["Tablas y detalles", "Condiciones de uso de los valores y soluciones constructivas"],
            ["Instrucciones", "Montaje, manipulación y mantenimiento indicados"],
            ["Pedido y albarán", "Trazabilidad entre lo solicitado y lo recibido"],
          ],
        },
      },
      {
        heading: "DoP y DoPC: por qué puedes encontrar nombres diferentes",
        paragraphs: [
          "La información actual de la Comisión Europea distingue la declaración de prestaciones bajo el Reglamento de Productos de Construcción de 2011 y la declaración de prestaciones y conformidad bajo el marco de 2024. Las siglas habituales son DoP y DoPC. En esta transición, no conviene rechazar o aceptar un documento únicamente por su título: pregunta qué régimen y especificación técnica corresponden a ese producto.",
          "El Reglamento (UE) 2024/3110 contiene disposiciones transitorias. La comprobación concreta debe atender a la familia de producto, la especificación aplicable y las condiciones de comercialización. Esta guía, revisada el 12 de octubre de 2026, sirve para preparar la consulta al proveedor y al responsable técnico; no atribuye a todos los paneles una fecha única de cambio documental.",
        ],
      },
      {
        heading: "Cómo leer la declaración sin perder la referencia",
        paragraphs: [
          "Empieza por la identificación del producto y del fabricante. Después revisa el uso previsto y la especificación técnica indicada. Para paneles metálicos aislantes puede aparecer la referencia EN 14509; comprueba siempre su edición y aplicabilidad en los documentos del producto, sin asumir que cualquier elemento llamado sándwich pertenece al mismo ámbito.",
          "Continúa con las características esenciales declaradas y compáralas con las exigencias que haya definido el proyecto. Una prestación expresada para una determinada configuración no debería trasladarse a otra combinación de núcleo, chapas o montaje sin confirmar que está incluida. Si una característica figura como no determinada, eso no demuestra que cumpla una exigencia concreta de la obra: corresponde aclarar qué información necesita el técnico.",
        ],
        bullets: [
          "¿La referencia coincide con el presupuesto y la etiqueta del suministro?",
          "¿El uso previsto corresponde a cubierta, fachada u otra aplicación de la obra?",
          "¿Las prestaciones necesarias están declaradas y resultan utilizables en el proyecto?",
          "¿Quedan identificadas las condiciones o documentos complementarios que limitan su aplicación?",
        ],
      },
      {
        heading: "CE no significa que cualquier solución cumpla el CTE",
        paragraphs: [
          "Las reglas de comercialización del producto y la justificación del edificio son planos distintos. Tener documentación CE no permite concluir por sí solo que una nave cumple aislamiento, seguridad estructural o protección contra incendios. El responsable técnico debe elegir e integrar el producto para las condiciones del proyecto.",
          "Pide que los valores térmicos, las clases de reacción al fuego y, cuando corresponda, las prestaciones de resistencia al fuego se identifiquen correctamente. Una clase de reacción al fuego no expresa automáticamente minutos de resistencia de un cerramiento. También deben respetarse las condiciones de montaje, fijaciones y encuentros que sustenten una prestación declarada.",
          "Ejemplo: una declaración corresponde a un panel de fachada, pero la oferta propone usarlo como cubierta. El hecho de que ambos tengan dos chapas y aislamiento no resuelve la diferencia de uso. Antes de aceptar el cambio, debe existir documentación y una solución técnica que lo justifiquen.",
        ],
      },
      {
        heading: "Cómo mantener la trazabilidad al recibir el material",
        paragraphs: [
          "Guarda conjuntamente el pedido aceptado, los documentos entregados y el albarán. Fotografía la identificación de los paquetes antes de repartir las piezas en obra y conserva la relación con el despiece. Esto facilita resolver dudas si llegan lotes distintos o si se necesita reponer una pieza meses después.",
          "Si aparece una discrepancia entre documentos y suministro, anota la referencia afectada y solicita aclaración antes de incorporarla. Un correo con el modelo, la configuración y la pregunta concreta suele ser más útil que pedir un certificado de calidad sin especificar qué necesitas verificar.",
        ],
      },
      {
        heading: "Una solicitud de documentación lista para enviar",
        paragraphs: ["Puedes utilizar este texto al consultar a Panelex: necesito presupuesto para esta referencia y uso, con estos espesores y acabados. Por favor, identificad la declaración y el marcado aplicables, adjuntad la ficha y las instrucciones, e indicad qué tablas o detalles corresponden a la configuración ofertada. Acompaña el mensaje con los requisitos del proyecto para que la respuesta se refiera a las prestaciones que realmente se van a comprobar."],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [],
        bullets: [
          "¿Una ficha comercial sustituye a la declaración de prestaciones? Son documentos con funciones distintas. Solicita la declaración aplicable y comprueba su correspondencia con la ficha.",
          "¿El marcado CE garantiza que no habrá goteras? No acredita por sí solo el resultado de todos los encuentros y del montaje de una cubierta concreta.",
          "¿Puedo usar la documentación de otra referencia de la misma marca? Solo si su ámbito incluye de forma verificable el producto y la configuración que se suministran.",
          "¿Debo pedir siempre el mismo tipo de declaración en 2026? Debe pedirse la declaración aplicable al producto y su régimen, teniendo en cuenta las disposiciones transitorias.",
        ],
      },
    ],
    internalLinks: [
      { label: "Cómo elegir fabricante de panel", href: "/sobre-nosotros/como-elegir-fabricante-de-panel-sandwich" },
      { label: "Comportamiento del panel frente al fuego", href: "/sobre-nosotros/resistencia-al-fuego-del-panel-sandwich" },
      { label: "Catálogo Panelex", href: "/productos" },
      { label: "Consultar documentación de una referencia", href: "/contacto" },
    ],
    sources: [
      { label: "Comisión Europea: marcado CE y declaraciones DoP/DoPC", href: "https://single-market-economy.ec.europa.eu/sectors/construction/construction-products-regulation-cpr/ce-marking-and-declaration-performance-and-conformity_en" },
      { label: "EUR-Lex: Reglamento (UE) 2024/3110 y disposiciones transitorias", href: "https://eur-lex.europa.eu/eli/reg/2024/3110/oj?locale=es" },
      { label: "Ministerio: documentos del Código Técnico de la Edificación", href: "https://www.codigotecnico.org/DocumentosCTE/DocumentosCTE.html" },
    ],
  },
];
