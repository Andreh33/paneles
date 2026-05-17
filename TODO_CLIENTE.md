# TODO — datos y decisiones del cliente

Cosas que necesitamos que Ramón confirme antes de salir a producción.
Ordenado por **bloqueante / importante / opcional**.

---

## 🔴 BLOQUEANTE para producción

### 1. Datos identificativos de la empresa

Aparecen en aviso legal, política de privacidad, footer y JSON-LD.

- [ ] **CIF real**. Ahora hay placeholder `B-XXXXXXXXX` en `lib/site.ts → SITE.cif`.
- [ ] **Datos registrales**: tomo, folio y hoja del Registro Mercantil de Badajoz. Aparecen como pendiente en `app/(marketing)/aviso-legal/page.tsx`.
- [ ] **Email corporativo real**. Hoy es `info@panelex.es` (placeholder). Si es otro, cambiarlo en `lib/site.ts → SITE.contact.email`.
- [ ] **Horario comercial real**. Hoy "Lunes a viernes · 8:00 – 18:00". Si es distinto, cambiar en `lib/site.ts → SITE.contact.hours`. También afecta a `lib/jsonld.ts` (LocalBusiness `openingHoursSpecification`).

### 2. Verificación del WhatsApp

- [ ] Confirmar que `+34 678 978 111` es el número correcto y operativo para recibir solicitudes.
- [ ] Ramón debe estar al tanto de que el formato del mensaje generado tiene secciones marcadas con `*negrita*` y `_cursiva_` propias de WhatsApp.

### 3. Certificaciones y normativa

Las páginas `/sobre-nosotros` y `/descargas` mencionan CE, ETA, reacción al fuego.

- [ ] Confirmar qué **certificaciones reales** tiene Panelex (números de ETA, DAU si aplica, clasificación EN 13501-1 concreta por producto).
- [ ] Decidir si las **DoP (Declaraciones de Prestaciones)** se publican como PDF descargable o solo se entregan bajo solicitud (hoy es bajo solicitud).

---

## 🟠 IMPORTANTE (no bloquea launch, pero conviene resolver pronto)

### 4. Discrepancias detectadas entre brief y catálogo PDF (FA-P273)

- **Altura grecas:** brief dice 30 mm, PDF parece mostrar 32 mm.
- **Ancho total:** brief dice 1134 mm, PDF muestra 1134.57 mm.
- **Pesos:** brief dice 3.95 / 4.95 / 5.93 kg/ml; el PDF parece mostrar 3.82 / 4.66 / 5.51 (lectura visual, OCR no fiable).

Como el brief dice "no extrapoles", usamos los valores del brief. **Ramón debe confirmar cuáles son los reales.** Sea cual sea la respuesta, se edita en `lib/products.ts` (entrada `fa-p273`).

### 5. Textos editoriales pendientes de revisión

Hoy hay placeholders coherentes redactados con criterio profesional, pero el cliente debe revisarlos:

- [ ] **Historia de Panelex** (`app/(marketing)/sobre-nosotros/page.tsx`, sección 1). Confirmar año de fundación, hitos clave, número real de años de experiencia.
- [ ] **Stats del hero** (en `components/sections/StatsStrip.tsx`):
  - 15+ años fabricando → ¿cuántos?
  - 500k+ m² fabricados → ¿valor real?
  - 800+ proyectos entregados → ¿valor real?
  - 600 km radio entrega → ¿correcto?
- [ ] **Descripciones largas de productos** (`longDescription` en `lib/products.ts`). Están redactadas con criterio técnico pero conviene que el departamento técnico las valide.

### 6. Proyectos reales

Hoy hay 8 proyectos placeholder en `lib/projects.ts` con datos coherentes pero **inventados**. Sustituir por proyectos reales:

- [ ] 6-10 obras representativas (nombre, ubicación, m², sector, año, productos usados).
- [ ] 1 foto por proyecto (ver `TODO_FOTOS.md`).
- [ ] Si hay testimonios de cliente, considerar añadir sección de testimonios.

### 7. Coordenadas exactas

En `lib/site.ts → SITE.address.geo` están las coordenadas aproximadas de Puebla de la Calzada (`38.8869, -6.6306`). Para el mapa de contacto + JSON-LD LocalBusiness, ajustar a las coordenadas exactas de la nave/oficina (1 minuto en Google Maps).

---

## 🟡 OPCIONAL / decisiones a tomar

### 8. Redes sociales

`lib/site.ts → SITE.social` tiene LinkedIn e Instagram vacíos. Si los hay, rellenar y los iconos aparecerán automáticamente en el footer.

### 9. Email transaccional (Resend)

- [ ] Decidir si activamos Resend (≈ $20/mes con plan Pro, free para volúmenes bajos).
- [ ] Si sí: dar de alta cuenta, verificar dominio `panelex.es` (DNS), generar API key y pegarla en `RESEND_API_KEY` de Vercel.
- [ ] Si no: el formulario sigue funcionando con fallback mailto/WhatsApp (ya implementado).

### 10. Analítica

- [ ] Decidir entre Plausible (~9€/mes cloud) o Umami self-hosted (gratis, requiere Postgres Neon).
- [ ] Cuando se decida, activar `NEXT_PUBLIC_ANALYTICS_ENABLED=true` y conectar el script en el componente correspondiente (queda pendiente integrarlo a `app/layout.tsx` cuando se decida proveedor).

### 11. Internacionalización a PT / EN

La arquitectura está preparada con `next-intl` en mente:
- Strings centralizados (en su mayoría) listos para extraer a `messages/es.json`.
- Si se decide traducir, crear `messages/pt.json` y `messages/en.json` y añadir selector de idioma en header.

### 12. Blog / sección de contenidos

No estaba en el brief original. Si Panelex quiere atacar SEO de fondo con artículos ("cómo elegir espesor", "diferencia entre Agropanel y panel estándar", etc.), hay que añadir sección `/blog` con MDX.

### 13. Mapa interactivo de proyectos

Si el cliente aporta muchos proyectos con ubicación, considerar un mapa con marcadores en `/proyectos`. Hoy es solo grid de cards.

### 14. Fichas PDF por producto

Hoy `/descargas` enlaza cada producto a su ficha web (con la tabla completa de specs). Si se quieren PDFs individuales (1 por producto), se generan a partir del catálogo maestro o se diseñan aparte.

---

## ✅ Ya completado (no requiere intervención del cliente)

- ✅ Catálogo de 16 productos con 134 specs (FP-FERTELHA, FP-PC-5/TJ/3-1000, 4× fachada, FA-P273/FT200/C76/A32/R45, 3 accesorios)
- ✅ Carrito + checkout WhatsApp con plantilla del §6.3 del brief
- ✅ Páginas legales (RGPD + LSSI-CE + LOPDGDD)
- ✅ Banner de cookies propio
- ✅ SEO técnico (sitemap, robots, JSON-LD, OG dinámicos)
- ✅ Mapa OpenStreetMap (sin Google, sin cookies de terceros)
- ✅ Formulario de contacto con fallback graceful
