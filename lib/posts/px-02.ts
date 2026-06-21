import type { BlogPost } from "@/lib/blog";

export const posts: BlogPost[] = [
  {
    slug: "como-calcular-paneles-cubierta",
    title: "Cómo calcular los paneles sándwich que necesita tu cubierta",
    metaDescription:
      "Aprende a medir faldones, calcular solapes y planificar el despiece del panel sándwich para tu cubierta. Guía clara de fabricante para pedir presupuesto sin errores.",
    excerpt:
      "Antes de pedir presupuesto conviene saber cuántos metros de panel sándwich necesitas de verdad. Te explicamos cómo medir los faldones, contar los solapes, planificar el despiece y dejar un margen sensato para no quedarte corto ni pagar de más.",
    date: "2026-06-15",
    category: "Guías básicas",
    readingMinutes: 9,
    keywords: [
      "calcular paneles cubierta",
      "medir faldones tejado",
      "solape panel sandwich",
      "despiece cubierta",
      "presupuesto panel sandwich",
      "metros panel cubierta",
    ],
    sections: [
      {
        heading: "Por qué merece la pena calcular bien antes de pedir",
        paragraphs: [
          "Cuando alguien nos llama a la fábrica para cubrir un tejado, la primera pregunta que hacemos siempre es la misma: ¿qué medidas tiene la cubierta? Parece obvio, pero te sorprendería la cantidad de pedidos que se complican porque alguien dio una cifra a ojo o midió solo el suelo de debajo del tejado en lugar del faldón real. Calcular bien no es una manía de fabricante, es lo que evita que te sobren tres paneles caros o, peor, que te falte uno justo cuando ya tienes al montador en la obra.",
          "La buena noticia es que no necesitas ser técnico para hacer un cálculo fiable. Con una cinta métrica, un papel y un poco de método sale solo. En esta guía te llevamos paso a paso por lo que de verdad importa: medir los planos inclinados (los faldones), entender cómo se solapan las chapas, planificar el corte y dejar un margen razonable. Así, cuando nos pidas presupuesto, podremos darte un precio cerrado y unas medidas que encajen a la primera.",
          "Y un apunte honesto desde el principio: si la cubierta es complicada, con muchas aguas, limahoyas o formas raras, mejor nos pasas un croquis y lo revisamos juntos. No pasa nada por pedir ayuda. Lo importante es que el material llegue cortado a medida y que en obra sea montar y poco más.",
        ],
      },
      {
        heading: "Medir los faldones, no la planta",
        paragraphs: [
          "El error más común es medir la superficie del suelo y suponer que esa es la superficie de cubierta. No lo es. Un tejado tiene pendiente, así que el plano inclinado (el faldón) siempre es más largo que su proyección en horizontal. Si mides solo la planta, te vas a quedar corto, y cuanto más inclinado sea el tejado, más corto.",
          "Lo que necesitas es la dimensión real de cada faldón: el largo (de cumbrera a alero, siguiendo la pendiente) y el ancho (de un lateral a otro). Si puedes subir con seguridad y medir directamente sobre el plano inclinado, perfecto. Si no, mide la planta y la altura de la cumbrera respecto al alero y aplica el cálculo de la diagonal: el faldón es la hipotenusa del triángulo que forman el avance horizontal y esa altura. Suena más complicado de lo que es.",
          "Toma las medidas de cada faldón por separado y anótalas con claridad. Una cubierta a dos aguas tiene dos faldones; una a cuatro aguas, cuatro, y normalmente con formas triangulares o trapezoidales que conviene dibujar. Cuanto más limpio tengas el croquis, menos margen de error y mejor te podremos cortar el panel a medida desde la fábrica.",
        ],
      },
      {
        heading: "Entender el solape entre paneles",
        paragraphs: [
          "El panel sándwich de cubierta se monta machihembrado por el lateral: un panel encaja sobre el siguiente mediante el grecado, de modo que el agua resbala sin colarse por la junta. Eso significa que el ancho útil de cada panel es menor que su ancho total, porque una parte se solapa con el panel de al lado. Es un detalle que mucha gente olvida y que cambia el número de paneles que necesitas.",
          "Por eso, para calcular cuántos paneles entran a lo ancho del faldón, hay que dividir entre el ancho útil, no entre el ancho total de la chapa. La diferencia parece pequeña en un panel, pero multiplicada por toda la cubierta puede ser un panel entero arriba o abajo. Cuando nos das las medidas, nosotros ya hacemos ese cálculo con el ancho útil del modelo concreto que elijas.",
          "En el sentido de la pendiente, si el faldón es más largo que la pieza máxima fabricable, habrá un solape longitudinal (un panel arranca y otro lo cubre por encima, hacia el alero). Ese solape también consume material y hay que preverlo. La ventaja de fabricar a medida es que muchas veces evitamos ese solape entregando la pieza a la longitud exacta del faldón, dentro de lo que el transporte permite.",
        ],
        bullets: [
          "Ancho total: la medida física de la chapa de borde a borde.",
          "Ancho útil: lo que cubre de verdad una vez solapado con el panel contiguo.",
          "Solape lateral: el encaje machihembrado por donde drena el agua.",
          "Solape longitudinal: el que aparece si el faldón es más largo que la pieza.",
          "Vuelo en el alero: unos centímetros de panel que sobresalen para verter al canalón.",
        ],
      },
      {
        heading: "Planificar el despiece pieza a pieza",
        paragraphs: [
          "El despiece es, sencillamente, la lista de piezas que compone tu cubierta: cuántos paneles, de qué longitud cada uno y en qué orden se colocan. Hacer un buen despiece es lo que separa una obra limpia de un puzle improvisado en el tejado. Y es donde más valor tiene trabajar con un fabricante que corta a medida, porque te entregamos cada pieza ya lista.",
          "Para planificarlo, empieza por el faldón más sencillo y ve colocando paneles mentalmente desde un lateral, sumando anchos útiles hasta cubrir todo el ancho. La última fila casi nunca cuadra justa: te quedará una pieza más estrecha que habrá que cortar a lo largo. Anótalo, porque ese corte longitudinal lo podemos dejar hecho de fábrica y te ahorras serruchar panel en la obra.",
          "Si la cubierta tiene formas no rectangulares (faldones triangulares de un tejado a cuatro aguas, por ejemplo), cada panel tendrá una longitud distinta porque se va acortando hacia la esquina. Eso es totalmente normal y es justo el tipo de despiece que resolvemos cortando cada pieza a su medida. Con un croquis acotado lo dejamos resuelto sin que tengas que pelearte con la sierra en lo alto.",
        ],
      },
      {
        heading: "Dejar un margen sensato (ni demasiado ni de menos)",
        paragraphs: [
          "Todo cálculo de obra necesita un colchón. Siempre hay un corte que sale torcido, una pieza que se daña al manipularla o una medida que en obra no era exactamente la del plano. Un margen razonable evita el momento incómodo de tener que parar el montaje y esperar a un panel nuevo.",
          "Ahora bien, margen no es comprar de más por miedo. El panel sándwich no es barato y el sobrante muchas veces no se aprovecha porque queda con cortes específicos. Lo razonable es prever un pequeño porcentaje extra sobre todo en los cortes complicados y en las piezas de remate, no sobre toda la cubierta. Nosotros te ayudamos a ajustar ese margen según cómo sea tu tejado.",
          "No olvides los accesorios, que también forman parte del cálculo: cumbreras, remates laterales, canalones si los llevas, tornillería con arandela y juntas. Un tejado bien rematado dura y no gotea; uno mal rematado da problemas aunque el panel sea perfecto. Por eso, cuando preparamos un presupuesto, incluimos esos remates en la cuenta y no los dejamos para después.",
        ],
        bullets: [
          "Reserva margen sobre todo en cortes en ángulo y piezas de remate.",
          "Cuenta los metros de cumbrera y de remate lateral por separado.",
          "Suma la tornillería específica para panel sándwich con junta estanca.",
          "No olvides el solape de las cumbreras sobre los faldones.",
          "Anota si necesitas canalón y sus piezas de unión.",
        ],
      },
      {
        heading: "Cómo pasarnos las medidas para un presupuesto rápido",
        paragraphs: [
          "Para darte un precio fiable y unas piezas que encajen, lo ideal es que nos llegue un croquis sencillo con las medidas de cada faldón acotadas: largo de pendiente y ancho. No hace falta que sea un plano de arquitecto; un dibujo a mano alzada con cotas claras nos vale perfectamente. Si tienes fotos del tejado, también ayudan a entender la situación.",
          "Cuéntanos además qué espesor y qué acabado quieres, si es cubierta vista por dentro o no, y a qué localidad enviamos. Fabricamos en Puebla de la Calzada, en Badajoz, y servimos a toda España y Portugal, así que con la dirección calculamos también el transporte. Con eso podemos cerrarte un presupuesto con el despiece ya pensado.",
          "Y si dudas en algún punto, llámanos antes de pedir. Preferimos dedicar diez minutos a revisar tus medidas que ver cómo te sobra o te falta material en obra. Esa conversación es gratis y casi siempre ahorra dinero.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las dudas que más nos plantean por teléfono cuando alguien está calculando los paneles de su cubierta. Si la tuya no está aquí, escríbenos y te respondemos con tu caso concreto.",
        ],
        bullets: [
          "¿Mido el suelo o el tejado? El tejado, el faldón inclinado. La planta siempre se queda corta.",
          "¿Cuánto solape lateral pierdo? Depende del modelo, pero por eso calculamos con el ancho útil del panel, no con el total.",
          "¿Puedo pedir cada panel a su longitud exacta? Sí, cortamos a medida; solo nos limita la longitud máxima de transporte.",
          "¿Qué margen extra dejo? Un pequeño porcentaje en cortes en ángulo y remates, no sobre toda la cubierta.",
          "¿Incluís remates y cumbreras en el presupuesto? Sí, los contamos para que el tejado quede estanco de verdad.",
          "¿Servís fuera de Extremadura? Enviamos a toda España y a Portugal desde la fábrica de Badajoz.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver paneles de cubierta", href: "/productos" },
      { label: "Panel de cubierta gris", href: "/productos/panel-cubierta-gris" },
      { label: "Cumbrera para acabado teja", href: "/productos/acc-cumbrera-fertelha" },
      { label: "Pedir presupuesto con tus medidas", href: "/contacto" },
    ],
  },
  {
    slug: "panel-sandwich-para-garaje",
    title: "Panel sándwich para cubrir un garaje: guía práctica",
    metaDescription:
      "Cómo cubrir un garaje o cochera con panel sándwich: espesor recomendado, control de la condensación y consejos honestos de fabricante para un particular.",
    excerpt:
      "Cubrir un garaje o una cochera con panel sándwich es uno de los trabajos más agradecidos que hay: rápido, limpio y con buen aislamiento. Te contamos qué espesor elegir, cómo evitar la condensación y qué tener en cuenta si eres un particular que lo monta por su cuenta.",
    date: "2026-06-14",
    category: "Por sector",
    readingMinutes: 8,
    keywords: [
      "panel sandwich garaje",
      "cubrir cochera",
      "espesor panel garaje",
      "condensacion panel sandwich",
      "panel sandwich particular",
      "tejado garaje",
    ],
    sections: [
      {
        heading: "Por qué el panel sándwich es ideal para un garaje",
        paragraphs: [
          "El garaje es probablemente el sitio donde más sentido tiene el panel sándwich para un particular. Es una construcción sencilla, normalmente de una sola agua o dos, con luces no demasiado grandes, y lo que se busca es algo que cubra bien, aísle, no pese mucho y se monte rápido. El panel sándwich cumple las cuatro cosas casi sin esfuerzo.",
          "Frente a una cubierta tradicional de teja sobre forjado, el panel te ahorra estructura, peso y tiempo. Es una sola pieza que ya lleva el aislamiento dentro: chapa exterior, núcleo aislante y chapa interior. Lo apoyas sobre las correas, lo atornillas y tienes cubierta, impermeabilización y aislamiento de una vez. Para una cochera eso es perfecto, porque no quieres montar una obra de meses para guardar el coche.",
          "Además, queda bien por dentro. La cara interior del panel suele ir lacada, así que el techo del garaje se ve limpio sin tener que forrar nada. Si lo usas también como taller o trastero, se agradece tener un acabado decente mirando hacia arriba en lugar de la cara interna de unas tejas.",
        ],
      },
      {
        heading: "Qué espesor elegir para una cochera",
        paragraphs: [
          "El espesor del panel sándwich marca dos cosas: cuánto aísla y cuánto aguanta entre apoyos. Para un garaje, lo más habitual es moverse en espesores intermedios, ni el más fino ni el más grueso. El fino aísla poco y flexa más; el muy grueso a veces es más del que necesitas y encarece sin aportar.",
          "Si el garaje es de uso ocasional, solo para resguardar el coche y herramientas, un espesor medio te da un aislamiento más que suficiente y aguanta bien la distancia entre correas habitual en estas construcciones. Si vas a estar dentro a menudo, lo usas como taller o quieres que en verano no se convierta en un horno, subir un punto de espesor merece la pena: la diferencia de confort se nota y el sobrecoste es contenido.",
          "Lo que de verdad conviene es decirnos la separación entre tus correas y la zona donde está el garaje. Con eso te recomendamos el espesor que aguanta esa luz con holgura y que aísla acorde al clima. No es lo mismo una cochera en el sur que una en una zona de nieve. Te lo ajustamos por teléfono sin venderte de más.",
        ],
        bullets: [
          "Uso ocasional y luces cortas: espesor medio, buen equilibrio precio-aislamiento.",
          "Garaje-taller o uso frecuente: sube un punto de espesor por confort térmico.",
          "Zonas con nieve o vientos fuertes: importa más la resistencia entre apoyos.",
          "Separación entre correas amplia: pide más espesor para evitar flecha.",
        ],
      },
      {
        heading: "La condensación: el punto que más se descuida",
        paragraphs: [
          "Si hay un fallo que vemos repetirse en garajes, es la condensación. Mucha gente cree que es un problema del panel y casi nunca lo es: el panel sándwich, al llevar aislamiento, precisamente reduce muchísimo la condensación frente a una chapa simple. El problema suele estar en cómo se ventila el garaje y en los puntos donde el aire húmedo escapa.",
          "La condensación aparece cuando el aire caliente y húmedo de dentro toca una superficie fría. En un garaje cerrado, con un coche que entra mojado de lluvia, humedad del suelo y poca ventilación, ese vapor tiene que ir a algún sitio. Con chapa simple, condensa en el techo y gotea. Con panel sándwich el riesgo baja mucho porque la cara interior no se enfría tanto, pero conviene igualmente cuidar la ventilación y sellar bien las juntas.",
          "Nuestro consejo de fabricante es sencillo: elige un espesor que aísle de verdad, sella correctamente solapes y remates, y deja alguna ventilación si el garaje va a estar muy cerrado. Con eso, el problema de las gotas en el techo deja de existir. Y si tu caso es especial, cuéntanoslo y vemos juntos qué solución encaja.",
        ],
      },
      {
        heading: "Consejos de montaje para un particular",
        paragraphs: [
          "Una de las grandes ventajas del panel sándwich es que un particular mañoso puede montarlo, sobre todo en una cubierta sencilla de garaje. No es albañilería pesada: es atornillar piezas ligeras sobre una estructura. Dicho esto, hay cuatro cosas que conviene hacer bien para que el resultado sea profesional y dure.",
          "La primera es la seguridad. Trabajar en altura, aunque sea poca, requiere cuidado: calzado adecuado, no pisar el panel donde no apoya y, si es posible, no estar solo. La segunda es la tornillería: hay que usar tornillo específico para panel sándwich, con arandela de estanqueidad, y apretarlo en su punto, ni flojo ni aplastando la junta. La tercera es el orden de montaje, empezando por el lado contrario a los vientos de lluvia dominantes para que los solapes queden bien orientados. Y la cuarta, no olvidar los remates.",
          "Si lo cortamos a medida en fábrica, tu trabajo en obra se reduce a colocar y atornillar, que es justo lo que un particular puede asumir sin complicarse. Te entregamos las piezas a la longitud de tu faldón y los remates necesarios, y tú solo montas. Servimos a toda España y Portugal desde Badajoz, así que aunque no estés cerca, el material llega listo.",
        ],
        bullets: [
          "Usa tornillo de panel sándwich con arandela estanca, bien apretado.",
          "Empieza el montaje desde el lado opuesto a la lluvia dominante.",
          "No pises el panel fuera de la zona de apoyo de las correas.",
          "Sella cumbrera y remates laterales para que no entre agua.",
          "Pide las piezas cortadas a medida y te ahorras serrar en obra.",
        ],
      },
      {
        heading: "Acabados y estética del garaje",
        paragraphs: [
          "Aunque un garaje es algo funcional, el acabado importa más de lo que parece, sobre todo si está pegado a la vivienda y se ve. El panel sándwich de cubierta viene en colores lisos como el rojo o el gris, que quedan sobrios y combinan con casi todo. Si quieres que pegue con un tejado de teja cercano, también hay acabados que imitan la teja y dan el pego desde la calle.",
          "Por dentro, como decíamos, la cara inferior lacada deja un techo limpio. Para una cochera eso es más que suficiente y no necesitas forrar ni pintar nada. Si buscas algo más cálido a la vista, hay opciones de acabado tipo madera que dan otro aire al espacio sin perder las ventajas del panel.",
          "Lo importante es que no tienes que elegir entre que cubra bien y que quede bien: el panel sándwich hace las dos cosas. Cuéntanos qué estética buscas y qué hay alrededor, y te orientamos sobre el color y el acabado que mejor encaje con tu casa.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Esto es lo que más nos preguntan los particulares que quieren cubrir su garaje. Si tu duda no aparece, llámanos y lo vemos con tu caso concreto.",
        ],
        bullets: [
          "¿Puedo montarlo yo solo? En un garaje sencillo, sí, con cuidado en altura y la tornillería correcta.",
          "¿El panel suda? Mucho menos que la chapa simple, porque aísla. Cuida la ventilación y el sellado.",
          "¿Qué espesor para una cochera normal? Suele bastar un espesor medio; lo ajustamos a tu clima y a tus correas.",
          "¿Lo cortáis a la medida de mi tejado? Sí, te llega listo para colocar y atornillar.",
          "¿Lleva acabado por dentro? Sí, la cara interior va lacada y queda limpia sin forrar.",
          "¿Servís a particulares fuera de Badajoz? Enviamos a toda España y Portugal.",
        ],
      },
    ],
    internalLinks: [
      { label: "Panel de cubierta rojo", href: "/productos/panel-cubierta-rojo" },
      { label: "Panel de cubierta gris", href: "/productos/panel-cubierta-gris" },
      { label: "Ver todos los productos", href: "/productos" },
      { label: "Consultar tu caso", href: "/contacto" },
    ],
  },
  {
    slug: "panel-sandwich-vivienda",
    title: "Panel sándwich en vivienda: cubierta, buhardilla y rehabilitación",
    metaDescription:
      "Panel sándwich para vivienda: rehabilitar el tejado, ganar aislamiento y elegir acabado imitación teja. Guía de fabricante para reformar cubiertas con cabeza.",
    excerpt:
      "Rehabilitar el tejado de una vivienda con panel sándwich permite ganar aislamiento, eliminar goteras y dejar una buhardilla habitable sin cargar la estructura. Te explicamos cuándo conviene, qué acabados imitan la teja y cómo planificar la reforma sin sustos.",
    date: "2026-06-13",
    category: "Por sector",
    readingMinutes: 9,
    keywords: [
      "panel sandwich vivienda",
      "rehabilitar tejado",
      "panel imitacion teja",
      "aislamiento cubierta vivienda",
      "buhardilla habitable",
      "reforma tejado",
    ],
    sections: [
      {
        heading: "Cuándo tiene sentido el panel sándwich en una casa",
        paragraphs: [
          "En vivienda, el panel sándwich brilla sobre todo en rehabilitación. Cuando un tejado de teja antigua empieza a dar goteras, ha perdido aislamiento o la estructura de madera está cansada, rehacerlo a la manera tradicional es caro, lento y pesado. El panel sándwich permite resolver impermeabilización y aislamiento de una vez, con mucho menos peso sobre la estructura.",
          "También tiene mucho sentido cuando se quiere aprovechar el bajocubierta, esa buhardilla o desván que en muchas casas está sin usar porque en verano es un horno y en invierno una nevera. Al colocar panel sándwich con un espesor adecuado, esa planta gana confort térmico y puede pasar a ser habitable o, al menos, mucho más cómoda como trastero o sala.",
          "No vamos a venderte humo: en obra nueva de vivienda de alto standing muchas veces se opta por soluciones tradicionales por estética o por exigencias del proyecto. Pero en rehabilitación, en segundas residencias, en casas de pueblo y en ampliaciones, el panel sándwich es una opción seria, sensata y muy usada. Si dudas si es tu caso, lo hablamos.",
        ],
      },
      {
        heading: "Acabado imitación teja: estética sin el peso de la teja",
        paragraphs: [
          "La objeción típica en vivienda es la estética: la gente quiere que su casa siga pareciendo una casa con tejado de teja, no una nave. Aquí es donde el acabado imitación teja cambia las tornas. Existen paneles cuya cara exterior reproduce la forma y el color de la teja curva tradicional, de modo que desde la calle el tejado se ve como un tejado de toda la vida.",
          "La ventaja es que tienes el aspecto de la teja con todas las ventajas del panel: menos peso, montaje rápido, aislamiento incorporado y estanqueidad fiable. Para una casa de pueblo o una rehabilitación en un entorno donde se exige mantener el aire tradicional, es una solución que cumple por fuera y por dentro. Disponemos de acabados tipo teja en distintos tonos, desde el terracota clásico hasta tonos más grises.",
          "Eso sí, conviene revisar si en tu municipio hay alguna normativa urbanística sobre el color o el aspecto del tejado, especialmente en cascos históricos. Suele bastar con elegir el tono adecuado. Si nos cuentas dónde está la casa y qué se ve alrededor, te orientamos sobre qué acabado encaja mejor y respeta el entorno.",
        ],
        bullets: [
          "Imitación teja terracota: el tono clásico, ideal en cascos tradicionales.",
          "Imitación teja en tonos grises: para entornos más sobrios o modernos.",
          "Mismo aspecto exterior que la teja, con el peso y el montaje del panel.",
          "Revisa la normativa local de color antes de cerrar el acabado.",
        ],
      },
      {
        heading: "El aislamiento, el verdadero motivo para rehabilitar",
        paragraphs: [
          "Muchas reformas de tejado arrancan por una gotera, pero el beneficio que más se nota luego es el aislamiento. Un tejado antiguo de teja sin aislar deja escapar el calor en invierno y lo mete a raudales en verano. Cambiarlo por panel sándwich de buen espesor transforma el confort de la última planta y se nota en la factura.",
          "El panel lleva el aislante integrado entre las dos chapas, así que con una sola intervención impermeabilizas y aíslas. Cuanto mayor sea el espesor, mejor comportamiento térmico, sobre todo si vas a habitar el bajocubierta. En vivienda solemos recomendar no quedarse corto de espesor, porque la diferencia de confort entre un panel fino y uno generoso es grande y la obra solo se hace una vez.",
          "Si la casa está en una zona de inviernos duros o veranos muy calurosos, ese punto extra de espesor es de las mejores inversiones de toda la reforma. Lo razonable es contarnos dónde está la vivienda y cómo vas a usar el espacio de debajo del tejado para ajustar el espesor a lo que de verdad necesitas, sin pasarte ni quedarte corto.",
        ],
      },
      {
        heading: "Planificar la reforma del tejado paso a paso",
        paragraphs: [
          "Rehabilitar un tejado tiene su orden, y planificarlo evita sustos. Lo primero es decidir si se retira el tejado existente o se monta encima, algo que depende del estado de la cubierta actual y de la estructura. Si la teja vieja está muy deteriorada, lo normal es retirarla; si la estructura aguanta y se busca rapidez, a veces se actúa sobre lo existente.",
          "Lo segundo es revisar la estructura que va a recibir el panel: correas, vigas y apoyos. El panel sándwich pesa poco, lo que suele ser una buena noticia para estructuras antiguas, pero hay que asegurar que los apoyos están sanos y bien dimensionados. Lo tercero es el despiece y los remates, que en vivienda incluyen cumbreras, encuentros con paredes, chimeneas y, muy importante, los limatesas y limahoyas si el tejado tiene varias aguas.",
          "Aquí es donde fabricar a medida marca la diferencia. Te entregamos los paneles a la longitud de cada faldón y las piezas de remate que tu tejado necesita, de modo que la obra avanza rápido y limpia. Fabricamos en Badajoz y enviamos a toda España y Portugal, así que la rehabilitación de tu casa puede surtirse desde fábrica esté donde esté.",
        ],
        bullets: [
          "Decide si retiras la cubierta vieja o actúas sobre ella.",
          "Comprueba que la estructura de apoyo está sana antes de montar.",
          "Planifica cumbreras, encuentros con muros, chimeneas y limahoyas.",
          "Pide el panel cortado a la medida de cada faldón.",
          "Cierra el espesor según el clima y el uso del bajocubierta.",
        ],
      },
      {
        heading: "Buhardillas y bajocubiertas habitables",
        paragraphs: [
          "Convertir un desván en una habitación habitable es uno de los proyectos más golosos en vivienda, porque ganas metros sin ampliar la casa. El cuello de botella casi siempre es el confort térmico: bajo un tejado mal aislado, ese espacio es inhabitable medio año. El panel sándwich de buen espesor resuelve precisamente eso.",
          "Al rehacer la cubierta con panel, la buhardilla deja de ser un horno en verano y una nevera en invierno, y la cara interior lacada da un acabado limpio que muchas veces basta sin necesidad de trasdosar todo el techo. Eso simplifica y abarata la transformación del espacio. Si quieres un acabado más cálido a la vista, hay opciones de cara interior que aportan otro ambiente.",
          "Lo razonable, si tu objetivo es habitar el bajocubierta, es priorizar el espesor y el sellado por encima de cualquier otra cosa. Cuéntanos qué uso le vas a dar (dormitorio, estudio, sala de juegos) y en qué zona estás, y te recomendamos el panel que deja ese espacio cómodo todo el año.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las dudas más habituales de quien se plantea rehabilitar el tejado de su vivienda con panel sándwich. Si la tuya no está, escríbenos con tu caso.",
        ],
        bullets: [
          "¿Parecerá un tejado de teja? Con acabado imitación teja, desde la calle se ve como teja tradicional.",
          "¿Puedo montarlo sobre la teja vieja? Depende del estado; a veces sí, a veces conviene retirarla.",
          "¿Sirve para hacer habitable el desván? Sí, con buen espesor el bajocubierta gana confort todo el año.",
          "¿Pesa mucho para una estructura antigua? Al contrario, pesa poco, lo que ayuda en casas viejas.",
          "¿Cortáis a medida cada faldón? Sí, y entregamos también las piezas de remate.",
          "¿Servís fuera de Extremadura? Enviamos a toda España y Portugal desde la fábrica de Badajoz.",
        ],
      },
    ],
    internalLinks: [
      { label: "Acabado imitación teja terracota", href: "/productos/fertelha-terracota" },
      { label: "Acabado imitación teja gris", href: "/productos/fertelha-gris" },
      { label: "Proyectos de rehabilitación", href: "/proyectos" },
      { label: "Pedir asesoramiento", href: "/contacto" },
    ],
  },
  {
    slug: "panel-sandwich-nave-industrial",
    title: "Panel sándwich para naves industriales: cubierta y fachada",
    metaDescription:
      "Panel sándwich para naves industriales: cubrir grandes luces, resolver la fachada con panel nervado y cumplir plazos. Guía técnica de fabricante en Badajoz.",
    excerpt:
      "En una nave industrial cada metro cuenta y cada día de parón cuesta. El panel sándwich cubre grandes luces, resuelve la fachada con acabados nervados y se monta rápido. Repasamos espesores, normativa, plazos y por qué fabricar a medida acelera la obra.",
    date: "2026-06-12",
    category: "Por sector",
    readingMinutes: 10,
    keywords: [
      "panel sandwich nave industrial",
      "panel fachada nervada",
      "cubierta nave industrial",
      "grandes luces panel",
      "panel sandwich fachada",
      "plazo panel sandwich",
    ],
    sections: [
      {
        heading: "Por qué el panel sándwich domina la nave industrial",
        paragraphs: [
          "Si miras casi cualquier polígono, verás que la inmensa mayoría de las naves están cerradas con panel sándwich, tanto en cubierta como en fachada. No es casualidad. En construcción industrial mandan tres factores: cubrir mucha superficie rápido, aislar lo suficiente para el uso previsto y mantener el coste bajo control. El panel sándwich responde a los tres mejor que casi cualquier alternativa.",
          "Una nave es, básicamente, una estructura metálica que hay que cerrar por arriba y por los lados. El panel sándwich hace ese cierre aportando a la vez impermeabilización y aislamiento en una sola pieza ligera, lo que reduce estructura, mano de obra y tiempo. En una obra donde el ritmo lo es todo, montar grandes superficies en poco tiempo es una ventaja enorme.",
          "Y hay otra razón menos visible: la previsibilidad. Un fabricante puede entregar el panel cortado a la medida de los pórticos y faldones, con lo que el montaje en obra es ordenado y rápido. Eso encaja perfectamente con los plazos ajustados de la construcción industrial, donde un retraso arrastra a todos los gremios siguientes.",
        ],
      },
      {
        heading: "Cubrir grandes luces sin penalizar el ritmo de obra",
        paragraphs: [
          "Las naves suelen tener distancias amplias entre apoyos, lo que se conoce como grandes luces. El panel de cubierta tiene que ser capaz de salvar esa distancia entre correas sin flechar en exceso ni comprometerse ante el viento o, en algunas zonas, la nieve. Aquí el espesor y el perfil del panel son decisivos.",
          "Cuanto mayor es la luz entre correas, más exigente es la elección del panel: necesitas un espesor y un grecado que aporten rigidez suficiente. Es justo el tipo de cálculo donde no conviene improvisar, porque un panel infradimensionado da problemas de deformación y ruido, y uno sobredimensionado encarece la obra sin necesidad. Lo correcto es partir de la separación real entre correas y de las cargas de la zona.",
          "Nuestra recomendación es siempre la misma: cuéntanos la luz entre apoyos, la zona donde está la nave y el uso previsto, y dimensionamos el panel para que cumpla con holgura sin pasarse. Fabricamos a medida, así que cada pieza llega a la longitud del faldón y el montaje en cubierta avanza sin cortes ni esperas.",
        ],
        bullets: [
          "Define la separación real entre correas antes de elegir panel.",
          "Considera las cargas de viento y nieve de la zona de la nave.",
          "A mayor luz, mayor espesor y rigidez del panel de cubierta.",
          "Evita infradimensionar: la deformación y el ruido salen caros después.",
          "Pide piezas a la longitud del faldón para no cortar en obra.",
        ],
      },
      {
        heading: "La fachada: panel nervado y microperfilado",
        paragraphs: [
          "La fachada de una nave no solo cierra, también es su cara. Aquí el panel sándwich de fachada ofrece acabados pensados para verticales: el panel nervado, con relieves marcados que dan carácter y rigidez, y el microperfilado, de líneas más finas y aspecto más liso y limpio. Cada uno da una imagen distinta a la nave.",
          "El nervado es el clásico industrial: marca sombras, disimula tolerancias y transmite robustez. Encaja muy bien en naves de producción, almacenes y logística. El microperfilado, en cambio, da un acabado más continuo y elegante, ideal cuando la nave tiene una parte de oficinas o quiere proyectar una imagen más cuidada de cara a clientes. Muchas naves combinan ambos: nervado en el grueso de la fachada y microperfilado en la zona representativa.",
          "Además del aspecto, la fachada con panel sándwich aporta el mismo aislamiento que la cubierta, lo que importa mucho si dentro hay actividad que requiere temperatura estable o confort para los trabajadores. Te ayudamos a elegir el acabado y el espesor según el uso de la nave y la imagen que quieras dar, y combinamos colores entre cubierta y fachada para un resultado coherente.",
        ],
        bullets: [
          "Panel nervado: relieve marcado, robusto, disimula tolerancias.",
          "Panel microperfilado: líneas finas, acabado limpio y elegante.",
          "Combinación habitual: nervado en producción, microperfilado en oficinas.",
          "El panel de fachada también aísla, no solo cierra.",
          "Coordina colores de cubierta y fachada para una imagen coherente.",
        ],
      },
      {
        heading: "Normativa, seguridad y reacción al fuego",
        paragraphs: [
          "En construcción industrial la normativa no es un detalle, es un requisito que condiciona el panel. Según el uso de la nave, su tamaño y su ubicación, puede haber exigencias concretas de reacción al fuego, de aislamiento térmico y de comportamiento estructural. No todos los núcleos aislantes se comportan igual frente al fuego, y eso es algo a definir desde el proyecto.",
          "No vamos a darte aquí una clasificación que dependa de tu proyecto concreto, porque sería irresponsable: cada nave tiene su uso, su superficie y sus condicionantes, y eso lo marca el técnico que firma el proyecto. Lo que sí podemos es trabajar con esa información y suministrar el panel que cumpla lo que tu proyectista exija, sin sorpresas.",
          "Lo sensato es que nos pongas en contacto con la documentación o con el técnico de la obra y nos digas qué prestaciones se requieren. Con eso te confirmamos qué panel encaja y te lo fabricamos a medida. Así evitas el clásico problema de comprar un material que luego no cumple lo que pedía el proyecto y hay que rehacer.",
        ],
      },
      {
        heading: "Plazos: por qué fabricar a medida acelera la obra",
        paragraphs: [
          "En una nave, el tiempo es dinero de forma muy literal: cada semana de retraso es alquiler de maquinaria, mano de obra esperando y, muchas veces, una actividad que no puede arrancar. Por eso la velocidad de cierre con panel sándwich es uno de sus mayores argumentos frente a otras soluciones constructivas.",
          "La clave para no perder ese tiempo está en que el material llegue listo. Si los paneles vienen cortados a la longitud exacta de los faldones y los paños de fachada, y con los remates necesarios, el equipo de montaje no para a medir y cortar: coloca y atornilla. Eso, multiplicado por toda una nave, son días de diferencia. Fabricar a medida no es un lujo, es lo que hace que el plazo se cumpla.",
          "Trabajamos para que el suministro acompañe el ritmo de la obra: planificamos el despiece contigo y servimos el panel cortado a medida. Producimos en Puebla de la Calzada, Badajoz, y enviamos a toda España y Portugal, organizando el transporte para que el material esté cuando el montaje lo necesita y no antes ni después.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las preguntas que más nos hacen constructoras, instaladores y promotores de naves. Si necesitas un dato técnico concreto para tu proyecto, contáctanos con la documentación.",
        ],
        bullets: [
          "¿Qué espesor para grandes luces? Depende de la separación entre correas y de las cargas; lo dimensionamos con tus datos.",
          "¿Nervado o microperfilado en fachada? Nervado para robustez, microperfilado para imagen cuidada; suelen combinarse.",
          "¿Cumple la normativa contra incendios? Suministramos el panel que exija tu proyecto; defínelo con tu técnico.",
          "¿Coordináis colores de cubierta y fachada? Sí, para una imagen coherente de toda la nave.",
          "¿Acortáis plazos con el corte a medida? Sí, el material llega listo y el montaje no para a cortar.",
          "¿Servís a obras en toda la península? Enviamos a toda España y Portugal desde Badajoz.",
        ],
      },
    ],
    internalLinks: [
      { label: "Panel de fachada nervada", href: "/productos/panel-fachada-nervada" },
      { label: "Panel de fachada microperfilada", href: "/productos/panel-fachada-microperfilada" },
      { label: "Proyectos de naves", href: "/proyectos" },
      { label: "Pedir presupuesto para tu nave", href: "/contacto" },
    ],
  },
  {
    slug: "panel-sandwich-porche",
    title: "Panel sándwich para porches y cobertizos: ligereza y aislamiento",
    metaDescription:
      "Panel sándwich para porches y cobertizos: ligero, aislante y de montaje sencillo. Acabados madera y teja para integrarlo en tu casa. Guía de fabricante en Badajoz.",
    excerpt:
      "Un porche o un cobertizo pide una cubierta ligera, que aísle del calor y quede bonita junto a la casa. El panel sándwich cumple las tres cosas y se monta sin complicarse. Te contamos qué espesor elegir, qué acabados imitan madera o teja y cómo plantear el montaje.",
    date: "2026-06-11",
    category: "Por sector",
    readingMinutes: 8,
    keywords: [
      "panel sandwich porche",
      "cubrir cobertizo",
      "panel acabado madera",
      "porche aislamiento",
      "montaje panel sencillo",
      "panel sandwich teja porche",
    ],
    sections: [
      {
        heading: "Qué le pides a la cubierta de un porche",
        paragraphs: [
          "Un porche es un sitio para estar: comer fuera en verano, resguardarte de un chaparrón, dejar las bicis o disfrutar de la sombra. Eso marca lo que le pides a su cubierta. No buscas una estructura industrial; buscas algo ligero que no necesite una obra enorme para sostenerse, que dé sombra fresca de verdad y que quede integrado con la casa.",
          "El panel sándwich encaja sorprendentemente bien en porches y cobertizos por una razón clave: aísla. Una cubierta de chapa simple o de plástico convierte el porche en una plancha en cuanto aprieta el sol; debajo no se puede estar. El panel sándwich, al llevar aislante entre las dos chapas, mantiene la sombra fresca y hace el espacio realmente utilizable en verano, que es justo cuando más se usa.",
          "Además es ligero, así que no exige una estructura sobredimensionada. Unos pilares y unas vigas correctas bastan para sostenerlo, lo que abarata el conjunto y simplifica la obra. Para un cobertizo de jardín, una pérgola cerrada o el porche de entrada, es una solución cómoda y duradera.",
        ],
      },
      {
        heading: "Acabados que integran el porche en la casa",
        paragraphs: [
          "En un porche, lo que se ve manda, porque está pegado a la vivienda y normalmente lo miras de cerca todos los días. Por eso el acabado es tan importante como la función. La buena noticia es que el panel sándwich ofrece opciones pensadas precisamente para que el porche no parezca un anexo industrial, sino parte de la casa.",
          "El acabado imitación madera es de los más solicitados para porches: da calidez, pega con jardines y con construcciones tradicionales, y desde abajo se ve un techo de aspecto cálido en lugar de una chapa fría. Si lo que quieres es que el porche combine con el tejado de la casa, el acabado imitación teja resuelve esa continuidad y hace que todo el conjunto se vea de una pieza.",
          "Lo interesante es que puedes jugar con la cara que se ve. En un porche miras hacia arriba, así que la cara inferior importa mucho: elegir un acabado agradable a la vista por debajo cambia por completo la sensación del espacio. Cuéntanos cómo es tu casa y qué ambiente buscas, y te orientamos sobre el acabado que mejor integra el porche.",
        ],
        bullets: [
          "Imitación madera: calidez, ideal para jardines y casas tradicionales.",
          "Imitación teja: continuidad visual con el tejado de la vivienda.",
          "Cuida la cara inferior, que es la que ves desde el porche.",
          "Coordina el color del panel con la fachada de la casa.",
        ],
      },
      {
        heading: "Qué espesor necesita un porche",
        paragraphs: [
          "El porche no suele tener las exigencias estructurales de una nave o de un tejado principal, pero el espesor sigue importando por dos motivos: el aislamiento y la rigidez entre apoyos. Como el objetivo principal en un porche es la sombra fresca, un espesor que aísle bien marca la diferencia entre un espacio agradable y uno donde no se puede estar al sol.",
          "Para la mayoría de porches y cobertizos, un espesor medio da un equilibrio estupendo: aísla del calor, aporta rigidez suficiente para las luces habituales de estas estructuras y no encarece de más. Si el porche es grande, con vigas más separadas, o quieres un confort térmico extra para usarlo mucho en verano, subir un punto de espesor compensa.",
          "Como siempre, lo correcto es ajustarlo a tu caso. Dinos las dimensiones del porche, cómo es la estructura que lo va a sostener y en qué zona estás, y te recomendamos el espesor justo. Ni quedarte corto y que el porche siga siendo un horno, ni pagar por un grosor que no vas a aprovechar.",
        ],
      },
      {
        heading: "Montaje sencillo: una obra de fin de semana",
        paragraphs: [
          "Una de las cosas que más gusta del panel sándwich en porches es lo asequible que resulta el montaje. Sobre una estructura sencilla de pilares y vigas, colocar el panel es atornillar piezas ligeras, algo que un particular con maña puede afrontar e incluso convertir en una obra de fin de semana si el porche es de tamaño contenido.",
          "El secreto para que salga bien y rápido está en llegar a la obra con el material listo. Si te entregamos los paneles cortados a la medida del porche y las piezas de remate, en obra solo hay que colocar y fijar. Eso evita el momento de tener que cortar panel a mano, que es donde se complica y se ensucia el trabajo. La tornillería específica con arandela estanca y un buen sellado en cumbrera y bordes completan un montaje fiable.",
          "Aun siendo sencillo, no descuides la seguridad al trabajar en altura ni el sellado de las juntas, porque un porche mal rematado gotea igual que cualquier cubierta. Si tienes dudas con tu caso, llámanos y te explicamos cómo plantear el montaje. Fabricamos en Badajoz y enviamos a toda España y Portugal, así que el material llega cortado a medida aunque estés lejos.",
        ],
        bullets: [
          "Estructura sencilla de pilares y vigas: suficiente para el panel ligero.",
          "Pide el panel cortado a medida y evita serrar en obra.",
          "Usa tornillería de panel sándwich con arandela estanca.",
          "Sella cumbrera y bordes para que no entre agua.",
          "Cuida la seguridad en altura aunque la obra sea pequeña.",
        ],
      },
      {
        heading: "Porche, cobertizo o pérgola cerrada: matices",
        paragraphs: [
          "Aunque hablamos de todo junto, conviene distinguir. Un porche adosado a la casa busca integración estética y suele querer continuidad con el tejado o con la fachada. Un cobertizo de jardín o para el coche prioriza la función: cubrir, dar sombra y aguantar, con menos exigencia de que combine con la vivienda. Y una pérgola que se cierra por arriba quiere ligereza y, muchas veces, un toque cálido de madera.",
          "Esos matices cambian la elección del acabado y a veces del espesor. Para el porche adosado, acabado integrador y buen aislamiento; para el cobertizo de herramientas o coche, una solución más funcional puede bastar; para la pérgola que pasa a ser zona de estar, el acabado madera y el confort térmico mandan. No hay una única respuesta, hay la que encaja con cómo vas a usar el espacio.",
          "Por eso preferimos que nos cuentes para qué es exactamente. Con saber si es estar, guardar o cubrir el coche, y cómo es la casa alrededor, te orientamos hacia el panel que mejor cumple sin que pagues por prestaciones que no vas a usar.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Estas son las dudas que más nos llegan de quien quiere cubrir un porche o un cobertizo. Si la tuya no aparece, escríbenos con tu caso concreto.",
        ],
        bullets: [
          "¿De verdad da sombra fresca? Sí, al aislar evita que el porche se convierta en una plancha al sol.",
          "¿Puedo elegir acabado madera por debajo? Sí, es de los más pedidos para porches por su calidez.",
          "¿Lo puedo montar yo? En un porche sencillo, sí, con cuidado en altura y la tornillería correcta.",
          "¿Qué espesor elijo? Suele bastar uno medio; lo ajustamos a tu estructura y a tu zona.",
          "¿Lo cortáis a la medida del porche? Sí, te llega listo para colocar y atornillar.",
          "¿Servís fuera de Badajoz? Enviamos a toda España y Portugal.",
        ],
      },
    ],
    internalLinks: [
      { label: "Ver acabados y productos", href: "/productos" },
      { label: "Acabado imitación teja terracota", href: "/productos/fertelha-terracota" },
      { label: "Quiénes somos", href: "/sobre-nosotros" },
      { label: "Consultar tu porche", href: "/contacto" },
    ],
  },
];
