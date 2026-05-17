# Panelex — Web corporativa y configurador

Web de catálogo + configurador para **Panelex S.L.**, fabricante de panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz). El cliente configura sus productos en la web y envía la solicitud por WhatsApp a Ramón, que la gestiona desde el móvil.

> **Sin pasarela de pago. Sin backend de pedidos. Sin stock.** Web informativa + configurador + lead generation por WhatsApp.

---

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript estricto**
- **Tailwind CSS v4** con tokens CSS de marca (`app/globals.css`)
- **Framer Motion** + **lucide-react**
- **Zustand** persistido en localStorage (carrito + UI drawer)
- **React Hook Form + Zod** (formulario contacto)
- **next-og** para Open Graph dinámico
- **Vitest** para tests unitarios
- **Resend** opcional para email transaccional

---

## Setup local

Requisitos: **Node 20+** (probado con 24 LTS).

```bash
npm install
cp .env.example .env.local   # rellena lo que necesites
npm run dev                  # http://localhost:3000
```

### Scripts disponibles

| Comando | Para qué |
|---|---|
| `npm run dev` | Servidor de desarrollo en :3000 |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint de Next.js |
| `npm run typecheck` | TypeScript strict check |
| `npm test` | Suite de tests (Vitest) |
| `npm run test:watch` | Tests en modo watch |
| `npm run validate:products` | Valida la integridad de `lib/products.ts` |

---

## Variables de entorno

Copia `.env.example` → `.env.local` y rellena:

| Variable | Obligatoria | Uso |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sí | Número WhatsApp del comercial (sin `+`, sin espacios) |
| `RESEND_API_KEY` | No | Si está, el formulario de contacto envía email. Si no, fallback a mailto+WhatsApp |
| `RESEND_FROM_EMAIL` | No | Remitente del email (dominio verificado en Resend) |
| `LEAD_DESTINATION_EMAIL` | No | Destino de los leads (default `info@panelex.es`) |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | No | `true` para activar Plausible cuando lo decidamos |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Dominio para Plausible |

> Si **no** configuras Resend, el formulario sigue funcionando: el usuario verá una pantalla con botones de WhatsApp y email con el mensaje pre-rellenado.

---

## Despliegue en Vercel

1. **Crear proyecto** en [vercel.com/new](https://vercel.com/new) apuntando al repo de GitHub.
2. Vercel detecta Next.js automáticamente — sin configuración extra.
3. En **Settings → Environment Variables**, añadir las variables de `.env.example` que apliquen al entorno (Production / Preview / Development).
4. Configurar el dominio `panelex.es` en **Settings → Domains** y apuntar los DNS según las instrucciones que Vercel te dará.
5. (Si usas Resend) en su panel: añadir y verificar el dominio `panelex.es`, generar una API key y pegarla como `RESEND_API_KEY` en Vercel.

**Promote a producción** desde la pestaña Deployments. Cada push a `main` genera un Preview, cada release manual produce el Production deploy.

---

## Cómo modificar el catálogo de productos

Todo el catálogo vive en un único archivo:

**`lib/products.ts`** — fuente de verdad.

### Añadir un producto

1. Añade un objeto al array `PRODUCTS` siguiendo la interface `Product`:
   ```ts
   {
     slug: "fp-nuevo-modelo",
     code: "FP-NUEVO-MODELO",
     name: "Panel sándwich nuevo modelo",
     category: "cubierta",   // o "fachada" | "chapa-perfilada" | "accesorio"
     description: "1 línea para cards y meta description",
     longDescription: "Texto largo para la pestaña Descripción",
     applications: ["Naves industriales", ...],
     image: "/products/fp-nuevo-modelo.png",
     widthTotal: 1000,
     widthUseful: 1000,
     unit: "m2",             // m2 | ml | u
     isAgropanel: true,      // opcional
     specs: [
       { espesorNominal: 50, chapa: "0.5/0.5", peso: 11.77, uWmK: 0.4, uKcal: 0.3436 },
       ...
     ],
   }
   ```
2. Coloca la imagen en `public/products/fp-nuevo-modelo.png`.
3. Ejecuta `npm run validate:products` para verificar integridad.
4. El nuevo producto aparece automáticamente en:
   - Listado `/productos` (cards + filtros)
   - Ficha `/productos/fp-nuevo-modelo` (configurador + tabla specs)
   - Sitemap (`/sitemap.xml`)
   - JSON-LD para SEO
   - OG dinámico para compartir

### Modificar un producto

Edita la entrada en `PRODUCTS`. No hay que tocar nada más.

### Conversión kcal

El factor del catálogo de Panelex es `0.859`. Hay un helper `kcal(u)` interno. Si quieres dar valor explícito (recomendado para fidelidad al catálogo impreso), añade `kcalExplicit: 0.55835` en `expandSpecs`.

---

## Cambiar el número de WhatsApp

Una sola línea: `lib/site.ts` → `SITE.contact.whatsapp`. Formato `34678978111` (sin `+`, sin espacios).

> El header, el botón flotante, el carrito, el configurador y los CTAs leen de ese único sitio.

---

## Carrito → WhatsApp

El carrito persiste en localStorage (`panelex_cart_v1`). Cuando el usuario pulsa "Enviar solicitud por WhatsApp":

1. `lib/whatsapp.ts → formatCartForWhatsApp()` construye el mensaje (ver §6.3 del brief).
2. `buildWhatsAppUrl()` codifica el mensaje y arma `https://wa.me/...`.
3. Se abre en una nueva pestaña.

Los tests del formateador están en `lib/whatsapp.test.ts`.

---

## SEO

- **Sitemap dinámico** en `/sitemap.xml` (incluye las 16 fichas).
- **Robots** en `/robots.txt` con `Allow /` y `Disallow /api/`.
- **JSON-LD** inline en home (Organization + LocalBusiness), contacto (LocalBusiness) y cada ficha (Product + BreadcrumbList).
- **Open Graph** dinámico por producto vía `next/og` (PNG 1200×630 con código + nombre + Agropanel).
- **Metadata por página** vía Metadata API.

Cuando deployes en producción, valida el JSON-LD con [validator.schema.org](https://validator.schema.org/).

---

## Privacidad y cookies

- Banner de consentimiento **propio** (`components/legal/CookieConsent.tsx`), sin librerías de terceros.
- 3 botones equiparables (Aceptar / Rechazar / Configurar) — cumple LSSI-CE art. 22.
- Persistencia 6 meses. Link "Configurar cookies" en footer reabre el modal.
- Plausible se carga **solo si** el usuario lo acepta (hoy desactivado por defecto).

---

## Estructura del repo

```
app/
  (marketing)/        → header/footer/cart drawer/banner cookies
    page.tsx          → home
    productos/        → listado + ficha [slug] + OG dinámico
    proyectos/        → galería filtrable por sector
    sobre-nosotros/
    contacto/         → form + mapa OpenStreetMap
    descargas/        → catálogo PDF + fichas
    aviso-legal/, politica-privacidad/, politica-cookies/, terminos/
  api/lead/route.ts   → endpoint formulario (Resend + fallback)
  sitemap.ts, robots.ts, opengraph-image.tsx
  layout.tsx, globals.css
components/
  layout/             → Header, Footer, MobileNav, WhatsAppFloating
  product/            → ProductCard, ProductConfigurator, ProductTabs, SpecsTable, ProductImagePlaceholder
  cart/               → CartDrawer
  sections/           → Hero, StatsStrip, CategoryShowcase, WhyPanelex, FeaturedCarousel, Sectors, RecentProjects, FinalCTA
  contact/            → ContactForm
  legal/              → CookieConsent, LegalPage
  ui/                 → Logo, PagePlaceholder
  seo/                → JsonLd
lib/
  products.ts         → catálogo (fuente única)
  projects.ts         → proyectos (placeholder)
  cart-store.ts       → Zustand carrito + UI drawer
  whatsapp.ts         → formateador WhatsApp
  whatsapp.test.ts    → 14 tests
  site.ts             → datos de marca
  contact-schema.ts   → Zod del form
  consent.ts          → store consentimiento cookies
  jsonld.ts           → generadores JSON-LD
scripts/
  validate-products.ts
source/
  scripts/            → utilidades de extracción de PDF
  extracted/          → PNGs y crops del catálogo PDF (no commit)
public/
  source/             → PDF original del catálogo
```

---

## Documentos asociados

- **`TODO_CLIENTE.md`** — textos y datos pendientes de confirmar con Ramón
- **`TODO_FOTOS.md`** — fotografía necesaria para sustituir placeholders
- **`MANUAL.md`** — instrucciones de uso para Ramón (no técnico)

---

## Licencia y autoría

Código propietario de Panelex S.L. Desarrollado para uso exclusivo del cliente.
