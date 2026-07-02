import type { BlogPost } from "@/lib/blog";

export const posts: BlogPost[] = [
  {
    slug: "panel-sandwich-en-zonas-de-viento-y-nieve",
    title: "Panel sándwich en zonas de viento y nieve: cargas y cálculo",
    metaDescription:
      "Cómo elegir panel sándwich en zonas de viento y nieve: cargas del CTE, luz entre correas, espesor, fijación y remates. Fabricamos a medida en Badajoz.",
    excerpt:
      "Si tu obra está en zona de mucho viento o nieve, el panel no se elige igual. Repasamos las cargas del CTE, la luz entre correas, el espesor y la fijación que separan una cubierta segura de otra con problemas.",
    date: "2026-06-22",
    category: "Guías técnicas",
    readingMinutes: 16,
    keywords: [
      "panel sandwich viento nieve",
      "cargas de viento cubierta",
      "carga de nieve cubierta",
      "luz entre correas",
      "fijacion panel viento",
      "espesor panel cubierta",
      "panel sandwich Badajoz"
    ],
    sections: [
      {
        heading: "Por qué el viento y la nieve mandan en el cálculo de la cubierta",
        paragraphs: [
          "Una cubierta de panel sándwich no es solo una piel que aísla: es un elemento que tiene que aguantar todo lo que le echa el clima encima. En una zona resguardada casi cualquier panel bien montado cumple, pero en una zona expuesta (sierra, altiplano, litoral, pasillos de viento del valle del Guadiana) el viento y la nieve pasan a ser las cargas que lo deciden todo. Marcan el espesor y el perfil del panel, la separación entre correas, el número de tornillos por metro cuadrado y hasta el tipo de remate. No son un detalle: son el punto de partida del cálculo.",
          "El error más habitual es elegir el panel solo por aislamiento y precio y olvidarse de las cargas mecánicas. Un panel que aísla de maravilla pero que flexa entre correas, o que el viento es capaz de levantar, es un problema esperando a ocurrir. En fábrica recibimos llamadas justo después de un temporal: paneles levantados, juntas abiertas, goteras que antes no estaban. Casi siempre la causa es la misma, una cubierta que se quedó corta frente al viento o frente a la nieve porque nadie miró las cargas al pedir el material.",
          "La buena noticia es que todo esto se resuelve en la fase de diseño, y sale barato comparado con arreglarlo después. Consiste en conocer las cargas de tu zona, elegir el espesor y el perfil acordes, respetar la luz entre correas que permite la tabla de carga del fabricante y fijar bien el panel. En las secciones siguientes lo vemos punto por punto, con el lenguaje que usamos por teléfono cuando alguien nos llama para cubrir en una zona complicada."
        ]
      },
      {
        heading: "El marco: CTE, cargas y marcado CE",
        paragraphs: [
          "En España el marco de referencia es el Código Técnico de la Edificación (CTE), en concreto el documento de acciones en la edificación (DB-SE-AE), que establece cómo se determinan las cargas de viento y de nieve. No da un número único: depende de la zona geográfica, la altitud, la exposición del terreno, la altura del edificio y su forma. En Portugal el marco equivalente son los Eurocódigos. No vamos a inventar cifras, porque el valor concreto de tu parcela lo fija el proyecto o el técnico que firma la obra.",
          "Como idea general, la carga de nieve crece con la altitud y con la zona climática: una parcela a mil metros en zona fría soporta muchísima más nieve que una en la llanura templada. La carga de viento depende de la velocidad básica del viento de la zona y de la exposición: campo abierto, costa o lo alto de un cerro son las situaciones más desfavorables. Esas cargas se combinan después en el cálculo de la estructura y del propio panel, no se miran por separado.",
          "El panel es un producto de construcción con marcado CE: el fabricante declara sus prestaciones, y la reacción al fuego se clasifica según la norma europea EN 13501-1. Para el tema de cargas, lo que manda es la tabla de carga del panel, que relaciona la luz entre apoyos con la carga admisible. Nuestro consejo es sencillo: pide la carga a tu técnico o pásanos los datos de la parcela (localidad, altitud, separación de correas) y te ayudamos a elegir. Lo que no conviene es ir a ojo."
        ]
      },
      {
        heading: "El viento: presión, succión y arrancamiento",
        paragraphs: [
          "Con el viento hay que entender una cosa que sorprende a mucha gente: en una cubierta, el viento no solo empuja, sobre todo succiona. Cuando el aire pasa por encima del faldón genera una depresión, una succión hacia arriba que tira del panel intentando arrancarlo de la estructura. Por eso lo crítico frente al viento no es que el panel se aplaste, sino que la unión del panel con la correa y los tornillos aguanten ese tirón hacia arriba sin ceder. Es un fallo silencioso hasta que llega la racha que lo destapa.",
          "Además, la succión no es uniforme por toda la cubierta. Se concentra en los bordes, los aleros, la cumbrera y, muy especialmente, en las esquinas, donde puede ser varias veces mayor que en el centro del faldón. Ese es el motivo de que la fijación se refuerce en el perímetro y en las esquinas. Una tornillería suficiente para el centro puede quedarse corta en el borde, que es justo por donde empieza a levantarse una cubierta y desde donde luego se va arrancando el resto de las lamas.",
          "El viento también trae lluvia, y ahí aparece otro frente. El agua empujada por el viento sube de forma lateral y puede colarse por los solapes en sentido contrario a la gravedad, ayudada por la presión. Por eso en zonas expuestas el sellado del solape lateral con cinta butílica y los remates de cumbrera y alero importan tanto como la propia fijación. Una cubierta puede estar bien atornillada y aun así filtrar agua si los solapes y los remates no están cuidados con el mismo esmero."
        ],
        bullets: [
          "Presión: empuja el faldón a barlovento; suele ser menor que la succión.",
          "Succión: levanta el panel a sotavento y en la cumbrera; es la que arranca cubiertas.",
          "Bordes, aleros y esquinas: la succión se multiplica, así que ahí se refuerza la fijación.",
          "Viento y lluvia juntos: el agua sube por los solapes; se sella con cinta butílica.",
          "Dirección dominante: conviene empezar el montaje por el lado de sotavento del viento habitual."
        ]
      },
      {
        heading: "La nieve: carga, acumulación y deslizamiento",
        paragraphs: [
          "La nieve es una carga de gravedad que se posa sobre la cubierta. A diferencia del viento, empuja hacia abajo y es más previsible según la zona y la altitud. Pero cuidado, no es solo el peso de la nieve recién caída: la nieve húmeda o compactada pesa mucho más, y los ciclos de hielo y deshielo añaden hielo por encima. Sobre una cubierta grande, todo eso suma un montón de toneladas que la estructura y el panel tienen que soportar sin flexar en exceso ni acumular deformaciones.",
          "Otra cosa que hay que tener clara es que la nieve no se reparte de forma uniforme. Se acumula donde el viento la deposita y donde la geometría la atrapa: detrás de la cumbrera, en las limahoyas, contra los petos, junto a paredes más altas, alrededor de los lucernarios y de la maquinaria de cubierta. Esas acumulaciones locales pueden duplicar la carga en zonas concretas, y el cálculo tiene que contar con ellas. Ignorar los puntos donde la nieve se amontona es un fallo clásico que sale caro.",
          "La nieve desliza con facilidad sobre una cubierta lisa de acero prelacado, lo cual es bueno porque alivia carga, pero también es un riesgo. Un alud repentino de la nieve acumulada puede hacer daño a personas que pasen por debajo, romper canalones o dañar vehículos aparcados junto al alero. En zonas de nieve hay que decidir conscientemente si se deja que la nieve deslice, dejando despejada la zona de caída, o si se retiene con paranieves. Cada opción tiene sus consecuencias, y las vemos más adelante."
        ]
      },
      {
        heading: "La luz entre correas y las tablas de carga",
        paragraphs: [
          "El parámetro que une el panel con las cargas es la luz entre correas, es decir, la distancia entre los apoyos sobre los que descansa el panel. El panel se comporta como una viga que salva esa distancia: cuanto mayor es la luz, más flexa bajo una misma carga. Cada panel, según su espesor y su perfil, tiene una luz máxima admisible para una carga dada, y ese dato está publicado en la tabla de carga del fabricante. Es la herramienta que de verdad manda a la hora de dimensionar.",
          "Por eso nunca se dice «este panel aguanta tanto» a secas. Lo correcto es «este panel, con las correas cada tantos metros, aguanta esta carga». Si reduces la luz poniendo las correas más juntas, el mismo panel soporta mucho más. En zonas de viento y nieve, muchas veces la palanca más barata no es engordar el panel, sino acercar las correas, o una combinación de las dos cosas. Es una decisión que conviene tomar con la tabla delante, no por intuición ni por lo que se hizo en la nave de al lado.",
          "Las tablas de carga distinguen además configuraciones de un vano (biapoyado) y de varios vanos continuos, porque un panel apoyado en tres o más correas seguidas aguanta más que uno que solo salva un tramo. Es un detalle técnico que no tienes que dominar tú, pero que tu técnico o nosotros debemos cruzar: la carga real de tu zona con la luz real de tu estructura. Si nos pasas la separación de correas y la localidad con la altitud, te decimos el espesor y el perfil que encajan."
        ],
        bullets: [
          "La luz es la distancia entre correas; a más luz, más flexa el panel.",
          "Cada espesor y perfil tiene una luz máxima admisible por carga en la tabla del fabricante.",
          "Acercar las correas sube mucho la capacidad sin cambiar de panel.",
          "Un solo vano admite menos carga que varios vanos continuos.",
          "Hay que cruzar siempre la carga real de la zona con la luz real de la estructura."
        ]
      },
      {
        heading: "Espesor y perfil del panel según las cargas",
        paragraphs: [
          "Dos cosas dan resistencia mecánica a un panel de cubierta: el espesor de la chapa exterior de acero (0,4, 0,5 o 0,6 milímetros) y el perfil, es decir, la altura y el número de grecas. A eso se suma el espesor del núcleo, que aporta rigidez al conjunto al trabajar como un sándwich. En zonas de viento y nieve solemos recomendar no irse al mínimo de chapa: medio milímetro en la cara exterior es un suelo razonable cuando hay viento, nieve o tránsito de mantenimiento sobre la cubierta.",
          "El perfil importa más de lo que parece. Una greca alta, como la del panel de cinco grecas, es más rígida y salva más luz que un perfil bajo, y por eso las grandes cubiertas industriales lo usan. El espesor del núcleo (de 30 a 100 milímetros) sirve sobre todo para aislar, pero un sándwich más grueso también es más rígido como conjunto, lo que ayuda con la luz. Elegir el espesor en estas zonas es equilibrar la necesidad térmica con la mecánica, no solo mirar el aislamiento.",
          "Un apunte honesto: no existe eso de que «el más gordo siempre es mejor». Sobredimensionar el panel dejando las correas muy separadas puede no resolver la flexión tan bien como añadir una correa más. La combinación correcta de chapa, perfil, núcleo y luz sale de la tabla de carga, no del ojo del que compra. Nosotros hacemos ese cruce contigo antes de fabricar, porque preferimos que el conjunto funcione a venderte un panel más caro que no soluciona el problema real."
        ],
        bullets: [
          "Chapa exterior de 0,5 milímetros como suelo razonable con viento, nieve o tránsito.",
          "Perfil de greca alta (tipo cinco grecas) para salvar más luz con rigidez.",
          "Núcleo grueso: aísla y, de paso, rigidiza el conjunto.",
          "No basta con un panel grueso si las correas quedan muy separadas.",
          "La combinación correcta sale de la tabla de carga, no de la intuición."
        ]
      },
      {
        heading: "Fijación y tornillería: la batalla real contra el viento",
        paragraphs: [
          "Frente al viento, la batalla se gana o se pierde en la fijación. El tornillo tiene que anclar el panel a la correa: autotaladrante, con arandela de estanqueidad de EPDM, y siempre colocado en la cresta de la greca, nunca en el valle por donde corre el agua. El número de tornillos por metro cuadrado y su reparto es lo que resiste la succión que intenta arrancar el panel. Es la pieza más barata de la cubierta y, a la vez, la que decide si aguanta un temporal.",
          "En zonas expuestas se aumenta la densidad de fijación, sobre todo en el perímetro, los aleros, la cumbrera y las esquinas, donde la succión se multiplica. La longitud del tornillo debe ser suficiente para agarrar bien en la correa; un tornillo corto o clavado en una chapa demasiado fina puede desanclarse con una racha fuerte. Y el estado de la arandela cuenta: una arandela de EPDM aplastada o reseca filtra agua y pierde capacidad de sujeción, así que conviene revisarlas cada cierto tiempo.",
          "Hay dos errores clásicos y opuestos. Uno es el apriete excesivo: deforma el panel, aplasta la arandela y en realidad reduce la sujeción y deja entrar agua. El otro es el apriete flojo: el tornillo queda suelto, vibra con el viento y acaba filtrando. El punto está en un apriete firme pero medido. Y usa tornillería de calidad proporcionada al trabajo; ahorrar en el tornillo, que es lo más barato de toda la cubierta, es la forma más tonta de que se te levante el panel."
        ],
        bullets: [
          "Tornillo autotaladrante con arandela de EPDM, en la cresta de la greca.",
          "Más densidad de fijación en bordes, aleros, cumbrera y esquinas.",
          "Longitud suficiente para agarrar bien en la correa.",
          "Apriete firme pero sin aplastar la arandela ni deformar el panel.",
          "Revisa las arandelas con el tiempo: son baratas y son las primeras que fallan."
        ]
      },
      {
        heading: "Remates, aleros, cumbrera y sistemas paranieves",
        paragraphs: [
          "En zonas de viento y nieve los remates no son un adorno: son parte de la estanqueidad y de la seguridad. El alero es donde el viento empieza a levantar y por donde sale la nieve que desliza; necesita un remate firme y bien fijado, y muchas veces un goterón que aleje el agua de la fachada. La cumbrera es zona de máxima succión y el punto por donde entra la lluvia empujada por el viento si el remate y el tapajuntas de espuma no están bien resueltos.",
          "Los remates perimetrales y laterales cierran la cubierta frente al viento lateral y evitan que se cuele por debajo del panel, que es una de las formas de que empiece el arrancamiento. Hay que usar los remates del fabricante en el mismo color, bien solapados y fijados, con sellado donde toque, y cuidar de forma especial las esquinas. Escatimar en remates es la causa más común de daños tras un temporal que parecen fallo del panel pero en realidad son fallo del detalle de borde.",
          "Para la nieve hay que decidir entre retención y deslizamiento. Los paranieves retienen la nieve para que se funda poco a poco y no caiga de golpe en forma de alud sobre personas, canalones o cubiertas inferiores; son recomendables sobre puertas, pasos y zonas de tránsito. Si prefieres que la nieve deslice, mantén despejada la zona de caída. En cualquier caso, en zona de nieve los canalones y las bajantes se sobredimensionan y se anclan bien, porque la nieve al deslizar arrastra y revienta canalones justos."
        ],
        bullets: [
          "Alero: remate firme con goterón para alejar el agua de la fachada.",
          "Cumbrera: zona de máxima succión; se cierra con remate y tapajuntas de espuma.",
          "Remates perimetrales: impiden que el viento entre por debajo del panel.",
          "Paranieves: retienen la nieve sobre puertas, pasos y cubiertas inferiores.",
          "Canalones sobredimensionados y bien anclados frente al arrastre de la nieve."
        ]
      },
      {
        heading: "Errores frecuentes en zonas de viento y nieve",
        paragraphs: [
          "El error más repetido es elegir el panel por aislamiento y precio e ignorar la tabla de carga, de modo que la luz entre correas queda grande para la carga real y la cubierta flexa, abriendo juntas por donde luego entra el agua. El segundo es escatimar en la fijación: pocos tornillos, cortos, colocados en el valle o con la arandela gastada. Es la causa directa de que un panel se levante con un vendaval, y de los más fáciles de evitar si se piensa antes.",
          "El tercer fallo es descuidar el refuerzo de bordes y esquinas, tratando toda la cubierta por igual cuando la succión se concentra en el perímetro; así la cubierta se va soltando desde una esquina. El cuarto son los remates pobres en alero y cumbrera, que dejan entrar la lluvia empujada por el viento y facilitan el arrancamiento. El quinto es olvidar la acumulación de nieve detrás de obstáculos y en las limahoyas, dimensionando esas zonas como si la carga fuera uniforme por toda la cubierta.",
          "El sexto es poner canalones justos o mal anclados en zona de nieve, o dejar que la nieve caiga en alud sobre un paso de personas. Y el séptimo, una pendiente demasiado baja en zona de nieve, que mantiene el agua y la nieve encima más tiempo del debido. Todos son evitables en la fase de diseño. Cuando haya dudas, lo barato es preguntar: una llamada de cinco minutos sobre tu zona, tu altitud y tu luz ahorra un arreglo caro después del primer temporal."
        ],
        bullets: [
          "Elegir el panel sin mirar la tabla de carga para tu luz entre correas.",
          "Escatimar tornillos o ponerlos cortos, en el valle o con la arandela gastada.",
          "Tratar toda la cubierta igual y no reforzar bordes y esquinas.",
          "Descuidar los remates de alero y cumbrera en zona expuesta.",
          "Olvidar la acumulación de nieve tras obstáculos y en limahoyas.",
          "Canalones justos o sin anclar frente al arrastre de la nieve."
        ]
      },
      {
        heading: "Cómo pedir el panel correcto para tu zona",
        paragraphs: [
          "Para ayudarte a acertar necesitamos los datos que definen las cargas: la localidad y la altitud de la parcela, la zona de viento o de nieve si el técnico ya la tiene, la separación entre correas, la altura del edificio y, más o menos, lo expuesto que está el emplazamiento (campo abierto, lo alto de un cerro, junto a nada o bien resguardado). Con eso cruzamos la tabla de carga y te proponemos espesor, perfil, chapa y un criterio de fijación adecuado a tu situación concreta.",
          "Fabricamos en Puebla de la Calzada, en Badajoz, y cortamos a la medida exacta del faldón, lo que en zonas de viento y nieve es una ventaja real: menos solapes transversales, que son los puntos débiles, y piezas que llegan listas para atornillar. Enviamos a toda España y a Portugal, incluidas zonas de sierra y de litoral expuesto. Planificamos el transporte y la descarga, porque manejar piezas largas en un emplazamiento ventoso pide su cuidado para no dañar el material ni arriesgar al personal.",
          "Siempre preferimos hablar el pedido antes de cerrarlo. Es mejor dedicar diez minutos a confirmar zona, luz y fijación que arreglar una cubierta levantada después del primer temporal. Si tu técnico nos da las cargas, perfecto; y si no las tienes, te orientamos con nuestra experiencia para que no te quedes corto ni pagues de más. Al final se trata de que la cubierta haga su trabajo durante años sin darte sustos cada vez que el parte anuncia viento fuerte o nevada."
        ]
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Reunimos las dudas que más nos llegan sobre cubrir en zonas de viento y de nieve, contestadas como lo haríamos por teléfono."
        ],
        bullets: [
          "¿Qué panel aguanta más viento y nieve? No hay un panel único: lo que aguanta es la combinación de espesor, perfil, chapa y, sobre todo, la luz entre correas cruzada con la tabla de carga de tu zona.",
          "¿Cómo sé la carga de viento y de nieve de mi parcela? La fija el CTE según la zona, la altitud y la exposición; te la da tu técnico o, con la localidad y la altitud, te orientamos nosotros.",
          "¿Es mejor subir el espesor del panel o juntar las correas? Muchas veces acercar las correas sube más la capacidad que engordar el panel; lo ideal es cruzar ambas cosas en la tabla de carga.",
          "¿Por dónde se levantan las cubiertas con viento? Por los bordes, los aleros y las esquinas, donde la succión se multiplica; por eso ahí se refuerza la fijación.",
          "¿Necesito paranieves? En zonas de nieve conviene sobre puertas, pasos y cubiertas inferiores, para que la nieve no caiga de golpe; si dejas que deslice, mantén despejada la zona de caída.",
          "¿Servís a zonas de sierra y de costa? Sí, fabricamos en Badajoz y enviamos a toda España y Portugal, cortado a medida y con los remates para zonas expuestas."
        ]
      },
      {
        heading: "Pide presupuesto: fabricamos a medida en Badajoz",
        paragraphs: [
          "Si tu obra está en una zona de viento o de nieve, no dejes la cubierta al azar. Cuéntanos la localidad, la altitud, la separación de correas y el uso del edificio, y te ayudamos a elegir el espesor, el perfil, la chapa y la fijación adecuados a tus cargas, con el panel cortado a medida para que llegue listo para montar y con los solapes justos.",
          "Somos fábrica en Puebla de la Calzada, en Badajoz, con venta directa y sin intermediarios, corte a medida y envío a toda España y a Portugal. Servimos el panel junto con los remates y la tornillería coordinados, para que los detalles de borde, que son los que fallan en los temporales, queden resueltos desde el primer día y no improvisados en obra.",
          "Escríbenos por WhatsApp o llámanos con tus medidas y te preparamos una propuesta cerrada con transporte. Preferimos confirmar las cargas y la luz entre correas antes de fabricar: es el seguro más barato para una cubierta que tiene que plantar cara al viento y a la nieve durante muchos años."
        ]
      }
    ],
    internalLinks: [
      { label: "Qué espesor de panel elegir", href: "/sobre-nosotros/que-espesor-de-panel-elegir" },
      { label: "Tornillería para panel sándwich", href: "/sobre-nosotros/tornilleria-panel-sandwich" },
      { label: "Panel sándwich para nave industrial", href: "/sobre-nosotros/panel-sandwich-para-nave-industrial" },
      { label: "Pide presupuesto a fábrica", href: "/contacto" }
    ]
  },
  {
    slug: "panel-sandwich-para-industria-alimentaria",
    title: "Panel sándwich para industria alimentaria e higiénica",
    metaDescription:
      "Panel sándwich para industria alimentaria: chapa higiénica lavable, núcleo PIR o lana de roca, reacción al fuego y cámaras. Corte a medida en Badajoz.",
    excerpt:
      "En una industria alimentaria el cerramiento forma parte de la seguridad del producto. Vemos cómo elegir el panel higiénico: chapa interior lavable, núcleo, reacción al fuego y los detalles de higiene que exigen las auditorías.",
    date: "2026-06-21",
    category: "Por sector",
    readingMinutes: 16,
    keywords: [
      "panel sandwich industria alimentaria",
      "panel higienico",
      "panel camara frigorifica",
      "chapa interior lavable",
      "reaccion al fuego panel",
      "panel sandwich sala blanca",
      "panel sandwich Badajoz"
    ],
    sections: [
      {
        heading: "Por qué la industria alimentaria pide un panel distinto",
        paragraphs: [
          "En una industria alimentaria el cerramiento no es solo una piel que aísla: forma parte de la seguridad del producto. Las paredes y los techos delimitan el ambiente donde se manipula el alimento, y si acumulan suciedad, moho, condensación o sueltan partículas, se convierten en un riesgo de contaminación. Por eso una planta alimentaria no usa cualquier panel, sino un panel higiénico pensado para ser liso, lavable y continuo, sin recovecos donde se agarre lo que no debe.",
          "A eso se suma el control de temperatura. Obradores, salas de despiece, zonas de envasado y cámaras necesitan una temperatura estable y, por tanto, un buen aislamiento, y muy a menudo frío. El panel sándwich resuelve en una sola pieza el cerramiento, el aislamiento y una superficie higiénica, y ese es el motivo por el que se ha convertido en el estándar para construir este tipo de salas. Levantar una cámara o un obrador con panel es más rápido, más limpio y más fácil de mantener que con otros sistemas.",
          "Y hay un tercer factor: la normativa y las auditorías. Los negocios alimentarios trabajan con sistemas de autocontrol basados en los principios del APPCC y pasan inspecciones, tanto oficiales como de clientes y de certificaciones del sector. Las superficies deben poder limpiarse y desinfectarse y mantenerse en buen estado. Un panel bien elegido ayuda a pasar esas auditorías; uno mal elegido genera no conformidades. No vamos a citar artículos concretos, porque los requisitos exactos los marca tu autoridad sanitaria o tu auditor, pero la dirección del diseño está clara."
        ]
      },
      {
        heading: "El marco: higiene, marcado CE y reacción al fuego",
        paragraphs: [
          "El marco combina varias cosas sin necesidad de inventar cifras. En higiene, el principio de la normativa general de higiene alimentaria y del APPCC es que las superficies en contacto con el ambiente del alimento deben ser lisas, lavables, no tóxicas y fáciles de desinfectar. Eso se traduce directamente en cómo tiene que ser la chapa interior del panel y en cómo se resuelven las juntas y los encuentros. La higiene no es un extra estético: es un requisito de funcionamiento.",
          "En lo constructivo, el panel es un producto con marcado CE y el fabricante declara sus prestaciones. La reacción al fuego se clasifica según la norma europea EN 13501-1, con sus euroclases. Las plantas alimentarias suelen tener exigencias de sectorización contra incendios, y determinadas salas o cámaras pueden pedir una clase de fuego concreta. Esos valores hay que confirmarlos con el proyecto, el técnico y la compañía de seguros; nosotros te damos la clasificación declarada del panel para que pidas con certeza.",
          "Nuestro papel es darte el panel que cumpla lo que exijan tu técnico y tu auditor, y ser honestos con lo que ofrece cada opción. No te vamos a prometer una certificación que tu proyecto no especifica; lo que hacemos es orientarte hacia el acabado interior, el núcleo y el espesor adecuados, y recomendarte que confirmes la clase de fuego y los requisitos concretos de tu caso. Es la diferencia entre una obra que pasa la inspección a la primera y otra que hay que rehacer con la planta ya montada."
        ]
      },
      {
        heading: "La chapa interior: lisa, lavable y apta para alimentación",
        paragraphs: [
          "La protagonista de un panel higiénico es la cara interior, la que da a la sala donde se manipula el alimento. Tiene que ser lisa, sin recovecos donde se aloje la suciedad, lavable y resistente a la humedad constante y a los productos de limpieza y desinfección. Una superficie rugosa o porosa acumula restos y biofilm, justo lo que una sala alimentaria debe evitar. Por eso la elección de la cara interior es la primera decisión importante del panel, por delante incluso del color.",
          "Para conseguirlo se usan chapas interiores lisas con recubrimientos aptos para el ambiente alimentario: lacados reforzados o films de protección pensados para el contacto con este entorno y para el lavado frecuente. En salas muy húmedas o agresivas, como las de despiece o salado, a veces se recurre a una cara plastificada con film de PVC o a una cara de poliéster reforzado con fibra de vidrio, porque aguantan mejor los productos químicos y la humedad que un lacado estándar. La sala manda sobre el acabado.",
          "Un apunte honesto: no todo acabado interior es igual de apto. Una chapa lacada estándar sirve para un almacén seco o una zona de envasado, pero una sala húmeda y agresiva pide una cara más resistente. Cuéntanos qué manipulas y con qué régimen de limpieza trabajas y te orientamos sobre la cara interior; equivocarse aquí significa una superficie que se degrada en un par de años y que empieza a generar problemas en las auditorías justo cuando menos te lo esperas."
        ],
        bullets: [
          "Cara interior lisa, sin poros ni recovecos donde se acumule la suciedad.",
          "Recubrimiento apto para el ambiente alimentario y para el lavado frecuente.",
          "Para salas muy húmedas o agresivas, film de PVC o cara de fibra de vidrio.",
          "Colores claros que ayuden a ver la suciedad y a controlar la limpieza.",
          "El acabado se elige según el producto y el régimen de limpieza real."
        ]
      },
      {
        heading: "El núcleo: PIR, PUR o lana de roca",
        paragraphs: [
          "El núcleo decide el aislamiento y, aquí es clave, el comportamiento frente al fuego. El poliuretano (PUR) da el máximo aislamiento por milímetro al mejor precio, y térmicamente es estupendo para cámaras y obradores. El poliisocianurato (PIR) es muy parecido en aislamiento pero con mejor reacción al fuego, y es habitual cuando se pide una clase de fuego moderada sin renunciar a aislar bien. Los dos son la base de gran parte del cerramiento de una planta alimentaria.",
          "La lana de roca es mineral e incombustible, la opción cuando la protección contra el fuego es prioritaria: paredes de sectorización, salas con mucha carga de fuego, o donde el proyecto o la aseguradora exijan una euroclase alta. Además mejora el aislamiento acústico. A cambio pesa más, cuesta más y aísla algo menos por milímetro que el PUR o el PIR, así que se usa donde de verdad aporta y no como norma para toda la nave.",
          "En la práctica, muchas plantas combinan núcleos: PIR o PUR por aislamiento en cámaras y cerramiento general, y lana de roca en las paredes donde manda la sectorización contra incendios. No hay un ganador universal; depende de la temperatura de trabajo, de la exigencia de fuego y del presupuesto. Nosotros te ayudamos a equilibrarlo, y si quieres profundizar tenemos artículos dedicados a comparar núcleos y a la resistencia al fuego del panel que explican cada caso con más detalle."
        ],
        bullets: [
          "PUR: máximo aislamiento por milímetro y mejor precio; ideal en cámaras y obradores.",
          "PIR: aislamiento alto con mejor reacción al fuego; para exigencias moderadas.",
          "Lana de roca: incombustible y buen aislante acústico; para sectorización y alto riesgo.",
          "Muchas plantas combinan PIR o PUR por aislamiento y lana de roca donde manda el fuego.",
          "La elección la marcan la temperatura, la exigencia de fuego y el presupuesto."
        ]
      },
      {
        heading: "Higiene de diseño: juntas, medias cañas y encuentros sanitarios",
        paragraphs: [
          "Una chapa lisa no sirve de nada si las juntas y las esquinas acumulan suciedad. La higiene de diseño consiste en juntas continuas y, sobre todo, en cuidar los encuentros: pared con suelo, pared con techo y las esquinas interiores. Las esquinas vivas, en ángulo recto, acumulan restos y son difíciles de limpiar; la solución son las medias cañas, perfiles sanitarios que redondean el encuentro para que el agua y la limpieza corran y no quede nada agarrado en el rincón.",
          "La junta entre paneles debe ser machihembrada y estar bien ajustada, idealmente sellada con un sellante apto para alimentación, para que no quede una rendija por donde se cuelen humedad y microorganismos. Las fijaciones, siempre que se pueda, ocultas o tapadas: una cabeza de tornillo a la vista en una sala húmeda es una trampa de suciedad. Los perfiles sanitarios y los remates en el mismo acabado higiénico terminan de cerrar el sistema para que todo se lea como una superficie continua y lavable.",
          "Aquí es donde de verdad se gana o se pierde una sala alimentaria. El panel puede ser perfecto y la sala suspender una auditoría por una esquina mal resuelta o una junta abierta. Por eso conviene planificar los encuentros y los remates desde el principio y pedirlos coordinados con el panel, en el mismo acabado. Improvisarlos en obra es la causa más habitual de no conformidades, y rehacer un encuentro con la sala ya en marcha siempre sale caro y molesto."
        ],
        bullets: [
          "Medias cañas sanitarias en los encuentros pared-suelo y pared-techo.",
          "Juntas machihembradas y selladas con sellante apto para alimentación.",
          "Evitar esquinas vivas y recovecos difíciles de limpiar.",
          "Fijaciones ocultas o tapadas; nada de cabezas de tornillo en zona húmeda.",
          "Remates y perfiles sanitarios en el mismo acabado higiénico."
        ]
      },
      {
        heading: "Cámaras de frío, salas de temperatura controlada y techos registrables",
        paragraphs: [
          "Buena parte de la industria alimentaria es fría: cámaras de refrigeración y de congelación, muelles refrigerados, salas a temperatura controlada. Ahí el panel hace de estructura y de aislamiento de la cámara a la vez, montado en vertical y autoportante con perfiles de sujeción. El espesor crece con el salto de temperatura respecto al exterior: intermedio para conservación en refrigeración y claramente mayor para congelación. Tenemos un artículo específico sobre el panel frigorífico que entra a fondo en espesores y juntas.",
          "Los techos suelen resolverse como techos registrables o suspendidos construidos con panel, que dejan un espacio técnico por encima para las instalaciones mientras mantienen por debajo una cara limpia, aislada e higiénica hacia la sala. En las cámaras, la continuidad entre suelo, pared y techo y el detalle de las puertas son críticos: un puente térmico en esos encuentros significa escarcha, hielo y pérdida de energía, y el equipo de frío trabajando sin descanso para compensar la fuga.",
          "Las salas a temperatura controlada, como obradores o zonas de envasado, no son tan frías pero necesitan una temperatura estable y un buen aislamiento por confort y por el producto; el mismo panel higiénico las resuelve. El espesor equilibra aislamiento y coste, y quedarse corto significa un equipo trabajando de más para siempre. Cuéntanos la temperatura objetivo de cada sala y te ayudamos a dimensionar el espesor, porque en frío el ahorro mal entendido se paga cada mes en la factura eléctrica."
        ]
      },
      {
        heading: "Resistencia al fuego y sectorización",
        paragraphs: [
          "El fuego es un asunto serio en una planta alimentaria, donde conviven cartón, envases, aceites e instalaciones eléctricas. La reacción al fuego del panel se clasifica según la norma EN 13501-1, con euroclases que van desde los materiales incombustibles hasta clases inferiores. Y los proyectos exigen a menudo sectorización: paredes que resisten el fuego durante un tiempo determinado para contenerlo y proteger a las personas y al producto mientras se evacúa y llega la ayuda.",
          "Para las paredes de sectorización la respuesta habitual es el panel de lana de roca, incombustible y capaz de una clasificación de resistencia al fuego declarada por el fabricante. Para el cerramiento general, donde la exigencia es moderada, el PIR mejora al PUR. No vamos a dar clases ni tiempos concretos, porque los fija tu proyecto según el uso y la aseguradora, pero la dirección está clara: cuanto mayor es la exigencia de fuego, más te empuja hacia el PIR o la lana de roca.",
          "Un punto honesto e importante: confirma la clase de fuego o la resistencia exigida con tu técnico y tu aseguradora antes de pedir, y pide al fabricante la clasificación declarada del panel elegido. Es un requisito que no se improvisa; encargar la clase equivocada significa rehacer paredes, con la obra parada. Nosotros aportamos los datos declarados del panel para que pidas con seguridad, y tenemos un artículo dedicado a la resistencia al fuego del panel por si quieres entender bien las euroclases."
        ]
      },
      {
        heading: "Limpieza, desinfección y resistencia química",
        paragraphs: [
          "Una sala alimentaria se lava a conciencia: agua a presión, agua caliente, jabones, sosa cáustica, ácidos y desinfectantes, muchas veces a diario. La superficie interior tiene que aguantar ese régimen sin degradarse, sin perder color ni corroerse. Por eso el acabado interior se elige también por su resistencia química, no solo por ser liso: un lacado que se pela con la sosa no sirve de nada por muy bonito que quede el primer día. La química de tu limpieza condiciona el acabado.",
          "El lavado a presión también castiga las juntas. El agua forzada dentro de una junta mal sellada se mete detrás del panel y, con el ambiente frío de la sala, condensa: humedad oculta, moho y corrosión desde dentro, justo donde no se ve hasta que el problema es grande. De ahí, otra vez, la importancia de las juntas selladas y de los encuentros redondeados. Dirige el chorro con cabeza y mantén los sellados, que son la parte barata que protege la parte cara.",
          "La clave es ajustar el acabado a la química: un lacado alimentario estándar para regímenes normales, y film de PVC o cara de fibra de vidrio para los agresivos, como salado, salmuera, ambientes salinos o productos químicos fuertes. Dinos qué productos de limpieza usas y con qué frecuencia y te recomendamos la cara adecuada. Sale mucho más barato elegir bien la cara interior de entrada que tener que forrar de nuevo una sala a los dos años porque el acabado no aguantó."
        ],
        bullets: [
          "Agua a presión, sosa, ácidos y desinfectantes a diario: el acabado debe aguantarlo.",
          "El acabado se elige por resistencia química, no solo por ser liso.",
          "Juntas selladas: el agua a presión no debe colarse tras el panel.",
          "Para regímenes agresivos, film de PVC o cara de fibra de vidrio.",
          "Mantén los sellados: son lo barato que protege lo caro."
        ]
      },
      {
        heading: "Condensación e higiene en salas húmedas",
        paragraphs: [
          "La condensación es el enemigo invisible de las salas alimentarias: superficies frías más aire cálido y húmedo dan agua que gotea sobre el producto, el suelo o los equipos, y que forma moho. Un panel bien aislado mantiene la cara interior a una temperatura más templada, o controla el gradiente en el caso de las cámaras, y reduce la condensación frente a un panel fino o a una chapa desnuda. Aquí el espesor no es solo energía: es higiene directa.",
          "Pero el aislamiento por sí solo no basta: también cuentan la ventilación y el control del clima de la sala. Los procesos húmedos generan vapor que hay que extraer; si no, condensa en los techos y gotea. En las cámaras, la gestión de las puertas y los ciclos de desescarche se encargan de ello. La ventaja del panel es que te da una superficie continua, no absorbente y lavable, que no se pudre cuando se moja, algo que ningún material absorbente puede ofrecer en un ambiente así.",
          "Tenemos un artículo dedicado solo a la condensación en el panel sándwich; el resumen para salas alimentarias es este: aísla bien con el espesor adecuado, sella las juntas, ventila y extrae el vapor, y elige superficies higiénicas no absorbentes. Si aciertas con esas cuatro cosas, la sala se mantiene seca y limpia; si fallas, te pasarás la vida peleando contra el moho y contra unas auditorías que no perdonan la humedad ni las manchas en techos y paredes."
        ]
      },
      {
        heading: "Cómo pedir el panel para tu obra alimentaria",
        paragraphs: [
          "Para dimensionarlo bien necesitamos saber qué manipulas y de qué tipo es cada sala (obrador, despiece, envasado, cámara de refrigeración o de congelación, almacén), la temperatura objetivo, el régimen de limpieza (productos y frecuencia) y cualquier exigencia de fuego que marque tu proyecto o tu aseguradora. Con esos datos te proponemos el acabado interior, el núcleo, el espesor y los remates y medias cañas necesarios para que la sala funcione y pase las inspecciones sin sobresaltos.",
          "Fabricamos en Puebla de la Calzada, en Badajoz, con corte a medida, de modo que las paredes y los techos llegan a la dimensión exacta y con el mínimo de juntas, algo clave para la higiene y para las cámaras. Servimos coordinados los remates, los perfiles sanitarios y las medias cañas en el mismo acabado, y enviamos a toda España y a Portugal, planificando el transporte cuando se trata de piezas grandes o de mucho espesor, que piden su cuidado en la descarga.",
          "Preferimos hablar la obra antes de fabricar. Una sala alimentaria tiene requisitos que no se improvisan (el acabado interior, la clase de fuego, las medias cañas), así que confirmar los detalles primero evita no conformidades y trabajos rehechos. Si tu técnico nos da las especificaciones, perfecto; y si no, te guiamos con nuestra experiencia para que la sala pase las auditorías y aguante los años de lavados y frío que le esperan por delante."
        ]
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "Reunimos las dudas que más nos llegan sobre el panel para industria alimentaria e higiénica, contestadas como lo haríamos por teléfono."
        ],
        bullets: [
          "¿Qué panel se usa en la industria alimentaria? Un panel higiénico con cara interior lisa y lavable, el núcleo adecuado al aislamiento y a la exigencia de fuego, y los encuentros resueltos con medias cañas y juntas selladas.",
          "¿Qué núcleo elijo, PUR, PIR o lana de roca? PUR o PIR por aislamiento en cámaras y obradores; lana de roca donde manda la resistencia al fuego o la sectorización.",
          "¿Vale cualquier chapa interior? No; debe ser apta para el ambiente alimentario y aguantar el lavado, y en salas muy húmedas o agresivas se usa film de PVC o cara de fibra de vidrio.",
          "¿Qué son las medias cañas y por qué importan? Son perfiles que redondean los encuentros pared-suelo y pared-techo para que no se acumule suciedad y la limpieza sea eficaz.",
          "¿El panel cumple la normativa contra incendios? Lleva reacción al fuego clasificada según la EN 13501-1; la clase y la sectorización concretas las fija tu proyecto, así que confírmalas antes de pedir.",
          "¿Fabricáis a medida y enviáis fuera de Extremadura? Sí, fabricamos en Badajoz y servimos a toda España y Portugal, cortado a medida y con los remates sanitarios a juego."
        ]
      },
      {
        heading: "Pide presupuesto: fabricamos a medida en Badajoz",
        paragraphs: [
          "Si vas a construir o reformar una sala alimentaria, no dejes el cerramiento al azar, porque forma parte de la seguridad del producto. Cuéntanos el tipo de sala, la temperatura, el régimen de limpieza y la exigencia de fuego, y te ayudamos a elegir el acabado interior, el núcleo, el espesor y los detalles sanitarios, con el panel cortado a medida para que llegue listo y con el mínimo de juntas.",
          "Somos fábrica en Puebla de la Calzada, en Badajoz, con venta directa y sin intermediarios, corte a medida y envío a toda España y a Portugal. Servimos el panel junto con las medias cañas, los remates y la tornillería coordinados, para que la sala quede higiénica, continua y preparada para pasar las auditorías desde el primer día.",
          "Escríbenos por WhatsApp o llámanos con tus medidas y el uso de cada sala y te preparamos una propuesta cerrada con transporte. Preferimos confirmar el acabado, la clase de fuego y los encuentros antes de fabricar: es la forma más barata de conseguir una sala que se mantenga limpia y aguante los años de trabajo, frío y limpieza que tiene por delante."
        ]
      }
    ],
    internalLinks: [
      { label: "Panel sándwich frigorífico", href: "/sobre-nosotros/panel-sandwich-frigorifico" },
      { label: "Resistencia al fuego del panel", href: "/sobre-nosotros/resistencia-al-fuego-del-panel-sandwich" },
      { label: "Núcleo: lana de roca o poliuretano", href: "/sobre-nosotros/nucleo-de-lana-de-roca-vs-poliuretano" },
      { label: "Pide presupuesto", href: "/contacto" }
    ]
  }
];
