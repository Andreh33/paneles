# Diseño: SEO + 40 guías de blog + ranking "panel sándwich Extremadura"

Fecha: 2026-06-28
Proyecto: panelex-web (Next.js 15 App Router, Tailwind v4, generación estática)

## Objetivo

1. Mejorar el SEO del sitio.
2. Añadir 40 guías de blog nuevas (mín. 2.000 palabras) que enlacen a servicios/home.
3. **Posicionar #1 en Google para "paneles sándwich Extremadura".**
4. Desplegar a producción en Vercel.

## Estado de partida

- Blog ya existente: 29 posts (`lib/blog.ts` con 9 base + `lib/posts/px-01..04` con 20).
- SEO base sólido: sitemap automático (posts + productos), robots, JSON-LD por post
  (BlogPosting + Breadcrumb), metadatos/canonical/OpenGraph por página.
- Servicios a enlazar: `/productos` + 15 fichas, `/proyectos`, `/contacto`, `/`.
- **Bloqueante crítico:** el dominio `panelex.es` NO está conectado en Vercel; el sitio solo
  resuelve en `paneles-three.vercel.app`, mientras los canonical apuntan a panelex.es.

## Decisiones (aprobadas por el usuario)

- Reparto de temas: equilibrado, alcance nacional, con un clúster local de Extremadura.
- Alcance SEO: posts + mejoras on-page seguras (sin reestructurar URLs existentes) + 1 landing nueva.
- Despliegue: producción (`vercel --prod`).
- Agentes de redacción: Opus 4.8 (1M context) + ultrathink.

## Arquitectura de la solución

### A) Contenido — 40 posts nuevos (`px-05.ts … px-14.ts`, 4 por fichero)

Formato `BlogPost` existente: 7–8 secciones, FAQ final, `internalLinks` a servicios/home.
Clusters: precio/compra, cálculo/medición, aplicaciones por sector, técnico, comparativas,
y **zonas de servicio** (clúster Extremadura: Cáceres, Mérida, Plasencia, Don Benito/Villanueva,
Almendralejo/Zafra; nacional: Madrid, Sevilla).

Los enlaces internos se asignan explícitamente por post para (1) no romper slugs y (2) repartir
link equity a TODAS las fichas de producto y embudar autoridad hacia la landing de Extremadura.

### B) Ranking "panel sándwich Extremadura"

- **Landing dedicada** `/panel-sandwich-extremadura` (exact-match): H1 "Panel sándwich en
  Extremadura", contenido local profundo, productos, FAQ, y JSON-LD LocalBusiness + FAQPage +
  Breadcrumb. Es la página canónica para el término.
- **Embudo de enlaces internos** hacia la landing: link sitewide en el footer, link desde la
  home (SeoContent) con anchor "fabricantes de panel sándwich en Extremadura", y links desde el
  clúster de ciudades del blog con anchor "Panel sándwich en Extremadura".
- **Home**: título/descripcion refuerzan "fábrica de panel sándwich en Extremadura" (sin
  competir con la exact-match de la landing).
- **Sitemap**: alta de la landing con prioridad 0.9.

### C) Mejoras on-page seguras

- Índice del blog ordenado por fecha (lo más reciente primero).
- Reparto de enlaces internos a todas las fichas de producto.
- Verificación de build/typecheck (sin slugs duplicados, sin links rotos).

## Aceleración del posicionamiento (off-page / operativo — fuera de código)

1. **Conectar `panelex.es`** a Vercel + forzar HTTPS y www→raíz. Sin dominio propio no se rankea.
2. **Google Search Console**: alta del dominio, envío de sitemap, "Inspeccionar URL" + Solicitar
   indexación de la home, la landing de Extremadura y los posts del clúster.
3. **Google Business Profile** (ficha de empresa) en Puebla de la Calzada, categoría "fabricante",
   NAP idéntico al de la web, fotos, reseñas. Clave para búsquedas locales/Maps.
4. **Reseñas** de clientes en Google.
5. **Backlinks locales**: directorios (páginas amarillas, guías de empresa de Extremadura),
   asociaciones empresariales, proveedores, clientes, prensa local.
6. **Bing Webmaster Tools** + sitemap.

## Verificación

- `npm run typecheck` y `npm run build` en verde.
- Conteo de palabras por post ≥ 2.000.
- Sin slugs duplicados; todos los `internalLinks` resuelven a rutas válidas.
