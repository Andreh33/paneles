# Search Console SEO Growth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mejorar CTR de Sevilla y citabilidad de la guía de medidas sin ampliar contenido redundante.

**Architecture:** La metadata de Sevilla sigue en su página estática. La guía se actualiza en el registro existente y sitemap recibe un lastmod excepcional solo para Sevilla. Vitest cubre los tres comportamientos.

**Tech Stack:** Next.js 15, React 19, TypeScript, Vitest.

## Global Constraints

- Trabajar solo en `/home/andreh/.codex-worktrees/seo-2026-07-22/panelex`.
- No tocar Vercel ni el checkout principal.
- Mantener la transparencia de que la fábrica está en Badajoz.
- No activar tablas de precios no aprobadas.

---

### Task 1: Pruebas SEO en rojo

**Files:**
- Create: `lib/seo-opportunities.test.ts`

**Interfaces:**
- Consumes: `metadata` de Sevilla, `getPostBySlug` y `sitemap`.
- Produces: regresiones para snippet, answer-first y lastmod.

- [ ] **Step 1: Escribir pruebas**

Exigir:
- title absoluto `Panel sándwich en Sevilla directo de fábrica | Panelex`.
- canonical `/panel-sandwich-sevilla` y descripción de 120–155 caracteres.
- la guía `medidas-y-longitudes-del-panel-sandwich` tiene `quickAnswer` de 40–60 palabras, meta <=155 y `dateModified: "2026-07-22"`.
- sitemap devuelve lastmod 2026-07-22 para Sevilla y mantiene 2026-07-08 para Madrid.

- [ ] **Step 2: Verificar RED**

Run: `npm test -- lib/seo-opportunities.test.ts`
Expected: FAIL por title, quickAnswer, fecha y lastmod.

- [ ] **Step 3: Commit**

Run: `git add lib/seo-opportunities.test.ts && git commit -m test-search-console-opportunities`.

### Task 2: Snippet de Sevilla y lastmod

**Files:**
- Modify: `app/(marketing)/panel-sandwich-sevilla/page.tsx`
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Metadata**

Usar el title exacto de la prueba y una descripción que indique fábrica en Badajoz, entrega por A-66, corte a medida y provincia de Sevilla, dentro de 155 caracteres.

- [ ] **Step 2: Sitemap**

Añadir `lastModified?: Date` a la definición interna de rutas, asignar `new Date("2026-07-22")` solo a Sevilla y mapear `r.lastModified ?? LAST_UPDATE`.

- [ ] **Step 3: Ejecutar prueba focalizada**

Run: `npm test -- lib/seo-opportunities.test.ts`
Expected: falla solo la guía.

### Task 3: Respuesta directa de medidas

**Files:**
- Modify: `lib/posts/px-06.ts`

- [ ] **Step 1: Actualizar fragmento**

Usar title `Medidas del panel sándwich: ancho útil y largo máximo`, meta de hasta 155 caracteres y `dateModified: "2026-07-22"`.

- [ ] **Step 2: Añadir respuesta rápida**

Añadir un `quickAnswer` de 40–60 palabras con ancho útil 1.000 mm, largos hasta 14 m, pasos de 350 mm y advertencia de que transporte/manipulación pueden reducir el máximo práctico.

- [ ] **Step 3: Enlazado**

Mantener catálogo y contacto, y añadir enlace contextual a `/sobre-nosotros/precio-panel-sandwich-m2`.

- [ ] **Step 4: Verificar GREEN**

Run: `npm test`
Expected: 19 pruebas o más, 0 fallos.

- [ ] **Step 5: Commit**

Run: `git add app/(marketing)/panel-sandwich-sevilla/page.tsx app/sitemap.ts lib/posts/px-06.ts lib/seo-opportunities.test.ts && git commit -m improve-nonbrand-search-snippets`.

### Task 4: Verificación y publicación

- [ ] **Step 1:** Run `npm test`.
- [ ] **Step 2:** Run `npm run typecheck`.
- [ ] **Step 3:** Run `npm run build`; Expected: exit 0.
- [ ] **Step 4:** revisar diff y estado limpio.
- [ ] **Step 5:** empujar a `origin/main` si el remoto no cambió.
- [ ] **Step 6:** verificar Sevilla, guía, sitemap, canonical, H1 y JSON-LD; ejecutar IndexNow.
