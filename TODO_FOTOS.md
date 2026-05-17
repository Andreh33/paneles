# TODO — fotografía pendiente

Listado de imágenes que hay que sustituir antes de salir a producción (o que mejorarían mucho el resultado si se aportan).

Las que digan **"placeholder SVG generativo"** se pueden dejar — funcionan y se ven bien — pero ganaría mucho con foto/render real.

---

## 🔴 Imprescindibles para máxima calidad

### 1. Renders 3D / fotos de producto (16 productos)

Carpeta destino: **`public/products/`**

Hoy cada producto tiene un placeholder SVG generativo coherente con su categoría (greca trapezoidal, imitación teja, ondulada, etc.) generado en `components/product/ProductImagePlaceholder.tsx`. Funcionan bien pero los renders reales del catálogo PDF darían un salto enorme de credibilidad.

**Acción:** extraer del PDF original (`public/source/77ae79_*.pdf`, páginas 2-15) los renders 3D de cada producto. Cada panel tiene su render isométrico claro. Formato deseado:
- PNG con fondo transparente o blanco
- Resolución mínima 1600×1200
- Nomenclatura: `fp-fertelha.png`, `fp-pc-5-1000.png`, etc. (los slugs ya están en `lib/products.ts`)

> **Nota técnica:** los PNGs renderizados de cada página del PDF están en `source/extracted/pages/page02.png` … `page15.png`. Si quieres una primera versión rápida, basta con recortar el render 3D de cada PNG (Photoshop, Affinity, GIMP) y guardarlo con el slug correspondiente.

### 2. Fotografía industrial para hero / cabeceras

- **Hero de la home** — hoy fondo oscuro con patrón geométrico. Quedaría mejor con una **imagen industrial real** (interior de nave con paneles instalados, vista aérea de fábrica, primer plano de panel siendo manipulado…). Mantener tratamiento oscuro (overlay morado/naranja 25%).
  - Tamaño: 2400×1600 mín, formato JPG/WebP.
  - Sugerencias temáticas: nave logística iluminada, cubierta vista desde dentro al amanecer, instalador colocando un panel.
- **Hero `/productos`** — actualmente solo color. Una foto de fábrica (rollo de chapa, líneas de producción) ayudaría.
- **Hero `/sobre-nosotros`** — interior de la nave de Panelex o foto del equipo.
- **Hero `/proyectos`** — montaje aéreo de cubierta a media instalación.

Si no hay fotos propias, **Unsplash** tiene material industrial decente buscando: `steel`, `factory roof`, `industrial building`, `sandwich panel`, `warehouse construction`.

### 3. Equipo (página /sobre-nosotros)

- [ ] **Foto de Ramón** (retrato profesional, fondo neutro). Hoy hay placeholder con sus iniciales "RR" en círculo morado.
- [ ] **Foto del equipo de planta** (operarios trabajando, vista de equipo). Hoy hay placeholder con icono.

### 4. Fotos de proyectos y sectores  ⚠️ HAY PLACEHOLDERS IA TEMPORALES

**Estado actual:** `/public/sectors/` y `/public/projects/` contienen 12 imágenes
generadas por IA (Pollinations.ai con prompts específicos) que ilustran cada
sector y obra placeholder. Se ven decentes y dan textura visual mientras no
haya fotografía real, pero **no son fotos reales y deben sustituirse**.

Archivos generados:

```
public/sectors/
  industrial.jpg          (nave azul moderna)
  agricola.jpg            (granja al atardecer con olivo)
  residencial.jpg         (vivienda moderna mediterránea)
  logistica.jpg           (centro logístico con camiones)

public/projects/
  nave-logistica-merida.jpg
  cubierta-agricola-olivenza.jpg
  centro-carnico-don-benito.jpg
  pabellon-industrial-almendralejo.jpg
  almacen-vinicola-merida.jpg
  vivienda-evora.jpg
  granja-caceres.jpg
  nave-taller-badajoz.jpg
```

**Para sustituir** por fotos reales de Ramón:
- Misma nomenclatura (mismo nombre de archivo).
- Resolución mínima 1600×1200, formato JPG.
- El componente recoge la foto sin tocar código.

Si Ramón aporta proyectos con nombres distintos, basta con editar
`lib/projects.ts` (campo `image: "/projects/<slug>.jpg"`).

**Para regenerar los placeholders IA** con prompts distintos:
```bash
python source/scripts/download_photos.py
```

---

## 🟠 Importantes

### 5. Logo en formatos extra

Hoy uso un SVG inline en `components/ui/Logo.tsx` que reproduce el triángulo bicolor del logo del catálogo, pero **no es el SVG vectorial real del cliente**. Si Ramón tiene el SVG original:

- [ ] **`public/logo/panelex.svg`** — versión principal (usar en JSON-LD, favicons, etc.)
- [ ] **`public/logo/panelex-light.svg`** — versión para fondos oscuros
- [ ] **`public/logo/panelex-dark.svg`** — versión para fondos claros
- [ ] **`public/logo/panelex-mark.svg`** — solo el isotipo (triángulo) para favicons

Cuando estén, sustituir `LogoMark` y `Logo` en `components/ui/Logo.tsx`.

### 6. Favicons / app icons

Generar a partir del logo definitivo con [realfavicongenerator.net](https://realfavicongenerator.net):
- `app/favicon.ico` (16×16, 32×32 combinados)
- `app/icon.png` (512×512 para PWA / Apple)
- `app/apple-icon.png` (180×180)

### 7. Imagen OG por defecto

`app/opengraph-image.tsx` ya genera una OG por defecto con el logo y la tagline (1200×630 PNG). Funciona, pero si tienes una **imagen de marca trabajada** la puedes guardar como `public/og/default.png` y referenciar desde `lib/jsonld.ts → localBusinessLd.image`.

---

## 🟡 Opcionales

### 8. Vídeo loop para hero

El brief mencionaba "vídeo loop discreto (10-15s) de una nave industrial siendo cubierta con paneles". Hoy el hero usa fondo estático. Si se aporta vídeo:
- Formato MP4 + WebM, máx 2 MB.
- Mute, loop, autoplay, playsinline.
- Reemplazar el div decorativo en `components/sections/Hero.tsx`.

### 9. Sección transversal / cotas por producto

En la galería de cada ficha hay 3 thumbnails: "Render 3D" (activo), "Sección" y "Instalación". Si el cliente tiene:
- Secciones transversales con cotas (página 2-10 del PDF las tiene esquematizadas).
- Fotos de instalación real.

Se reemplazan los `ThumbPlaceholder` en `app/(marketing)/productos/[slug]/page.tsx`.

### 10. Iconos de certificaciones

Si Panelex tiene los logotipos oficiales (CE, ETA, marca AENOR, etc.), se pueden sustituir los iconos genéricos de Lucide en `app/(marketing)/sobre-nosotros/page.tsx` por imágenes reales de los marcados.

---

## Resumen rápido para Ramón

> **Lo más urgente:** los **16 renders 3D del catálogo** (los que ya están en el PDF) y una **foto industrial para el hero**. Con eso, la web pasa de "muy buena" a "indistinguible de Kingspan/Trimo en el aspecto visual".

> **Lo opcional pero impactante:** vídeo del hero y fotos de proyectos reales.
