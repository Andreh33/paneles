# Manual de uso — panelex.es

Guía rápida para **Ramón**. Sin tecnicismos. Si algo no encaja, llama o escribe a tu desarrollador.

---

## 1. Qué hace la web

Tu web cumple dos funciones:

1. **Es tu catálogo digital.** Cualquiera puede ver todos los productos, especificaciones técnicas y descargar el PDF del catálogo.
2. **Te llega el cliente con la tarea hecha.** El usuario configura lo que quiere (producto + espesor + chapa + cantidad), añade varios items si necesita, y **te lo envía todo por WhatsApp en un solo mensaje estructurado**. Tú solo tienes que responder con presupuesto.

**No hay pasarela de pago. No hay pedidos automáticos. No hay stock que mantener.** Tú controlas cada presupuesto al 100% desde tu móvil.

---

## 2. Cómo llega un lead

Cuando un cliente envía su solicitud por WhatsApp, te llega un mensaje **a tu número (+34 678 978 111)** con esta pinta:

```
*SOLICITUD DE PRESUPUESTO — PANELEX*
_Generada desde panelex.es_

👤 *Datos de contacto*
• Nombre/Empresa: Constructora ACME
• Ubicación: Mérida, 06800
• Plazo deseado: 30 días

📦 *Productos solicitados* (2 items)

1) *Panel sándwich FP-PC-5-1000* — FP-PC-5-1000
   • Espesor nominal: 50 mm
   • Espesor chapa: 0.5/0.5
   • Cantidad: 200 m²
   • Peso estimado: 2.354 kg
   • Notas: —

2) *Chapa perfilada FA-P273* — FA-P273
   • Espesor nominal: 0.5 mm
   • Espesor chapa: 0.5
   • Cantidad: 80 ml
   • Peso estimado: 396 kg
   • Notas: —

📊 *Resumen*
• Total cantidad: 200 m² · 80 ml
• Peso total estimado: 2.750 kg

📝 *Notas generales*
Entrega antes del 1 de junio

—
Quedo a la espera de presupuesto. Gracias.
```

### Cómo leerlo

- **Datos de contacto** — quién es y dónde está. Si el campo dice `—`, es que el usuario no rellenó ese dato (los datos de contacto son opcionales).
- **Productos solicitados** — cada item con su configuración completa. El **código** (ej. `FP-PC-5-1000`) es el que aparece en tu catálogo PDF.
- **Resumen** — cuánto total en m² (paneles sándwich) y/o ml (chapa perfilada) y peso total estimado en kilos.
- **Notas generales** — comentarios libres del cliente.

### Alerta de camión

Si la solicitud supera **24.000 kg** (carga útil aproximada de un camión estándar), la web ya avisa al cliente en pantalla. Tú lo verás reflejado en el peso total — confirma con el cliente si hace falta dos camiones, o si quiere consolidar la entrega.

---

## 3. Cómo responder a un lead — plantillas

Copia y adapta:

### Plantilla A — Confirmación inicial (5 min después)

> Hola [Nombre],
> 
> Hemos recibido tu solicitud desde panelex.es. Te confirmo que la tengo y te paso presupuesto en breve (máximo 24 h).
> 
> Si necesitas comentarme algo urgente, dímelo por aquí.
> 
> Saludos,
> Ramón · Panelex

### Plantilla B — Presupuesto detallado

> Hola [Nombre],
> 
> Te paso presupuesto para tu solicitud:
> 
> 1) [Producto + configuración]: [X] € / m²  →  [Total]
> 2) [Producto + configuración]: [X] € / ml  →  [Total]
> 
> **Subtotal materiales:** [X] €
> **Transporte a [población]:** [X] €
> **TOTAL (sin IVA):** [X] €
> 
> Plazo de fabricación: [X] días desde confirmación.
> Validez del presupuesto: 15 días.
> 
> ¿Te encaja? ¿Lo confirmamos?
> 
> Saludos,
> Ramón

### Plantilla C — Pedir aclaración

> Hola [Nombre],
> 
> Antes de presupuestar necesito aclarar:
> 
> · [Pregunta concreta, p. ej. "¿el plazo es para entrega en obra o admite recogida en fábrica?"]
> · [Pregunta concreta]
> 
> En cuanto me confirmes, te paso precio cerrado.
> 
> Gracias,
> Ramón

### Plantilla D — Avisar de plazo largo

> Hola [Nombre],
> 
> Te confirmo que podemos fabricar lo que solicitas. El plazo actual de fabricación está en [X] semanas por la carga de la planta. ¿Te encaja o necesitas algo más urgente?
> 
> Saludos,
> Ramón

### Buenas prácticas

- **Responde rápido**, aunque sea solo para confirmar recepción. La velocidad del WhatsApp es lo que diferencia este canal del email.
- **Conserva el formato** del mensaje original — facilita citar el ítem concreto al que te refieres.
- **No prometas plazo sin verificar.** Si la web dijo "30 días" y tú no puedes, dilo claramente.
- **Usa la voz "nosotros"** ("podemos fabricar", "confirmamos") aunque seas tú quien atiende — proyecta empresa.

---

## 4. Qué puede hacer el cliente desde la web

Para que sepas qué espera el cliente que sepas:

1. **Ver catálogo completo** (`/productos`) con filtros por tipo, espesor y Agropanel.
2. **Abrir ficha técnica** de cualquier producto con tabla completa de specs (espesores × chapas × pesos × U).
3. **Configurar** un producto (espesor + chapa + cantidad + medida de corte + notas) y verlo en el icono del carrito.
4. **Añadir varios productos** a la misma solicitud (un solo mensaje WhatsApp con todo).
5. **Descargar el catálogo PDF** desde `/descargas`.
6. **Llamarte directamente** o enviarte un email desde `/contacto`.

---

## 5. Pedir cambios futuros

### Cambios pequeños (textos, números de teléfono, datos)

Anótalos en un email o WhatsApp y se aplican en horas:
- Cambiar tu teléfono o el horario.
- Corregir el texto de la home, sobre nosotros, descripciones de producto.
- Añadir/quitar productos del catálogo.
- Cambiar datos legales (CIF, registro mercantil, etc.).

### Cambios medianos (nuevas secciones, fotos)

Requieren tiempo de diseño:
- Añadir blog.
- Añadir testimonios.
- Añadir mapa con todos los proyectos.
- Subir fotografía nueva.

### Lo que sería un cambio grande

Lo que sí supone replantear cosas:
- Activar venta online con cobro (cambio de modelo de negocio).
- Traducir a portugués o inglés.
- Crear un panel privado para clientes (zona de descargas con login).

En cualquier caso: **escríbeme antes de prometer al cliente** que algo va a hacerse en X tiempo.

---

## 6. Problemas frecuentes

### "Un cliente dice que no le llega ningún mensaje al pulsar WhatsApp"

- Probablemente tiene WhatsApp Web cerrado o el WhatsApp del móvil sin sesión activa. La web abre `wa.me/...` que requiere que WhatsApp esté instalado y con sesión.
- Como alternativa, dile que use el formulario de `/contacto`.

### "He cambiado el catálogo PDF, ¿cómo lo subo?"

- Pasa el PDF nuevo al desarrollador. Se sustituye en `public/source/` y la ruta de descarga de `/descargas` ya apunta al nuevo automáticamente.

### "Quiero responder a un lead pero ya pasaron 24 h y WhatsApp no me deja iniciar conversación"

- Eso es una limitación de WhatsApp Business para empresas verificadas: pasadas 24 h del último mensaje del cliente, solo puedes enviarle una plantilla aprobada. Si pasa a menudo, tiene sentido mirar WhatsApp Business API.

---

## 7. ¿A quién contactar?

- **Cosas comerciales** (clientes, presupuestos, productos) → tú.
- **Cosas técnicas de la web** (errores, cambios, nuevas funciones) → tu desarrollador.
- **Cosas del email transaccional** (si activamos Resend) → tu desarrollador.

---

**Suerte con los presupuestos.** 🛠️
