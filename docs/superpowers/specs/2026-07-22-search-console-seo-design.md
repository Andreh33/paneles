# Expansión SEO no branded sin perder posiciones — diseño

**Fecha:** 2026-07-22  
**Sitio:** https://panelexpanelsandwich.com  
**Rama:** `codex/seo-2026-07-22-panelex`

## Situación observada

Google Search Console registra 104 clics y 3.750 impresiones del 7–20 de julio, frente a 37 clics y 1.260 impresiones en el periodo anterior. El CTR se mantiene en 2,8 % y la posición media mejora de 15,6 a 12,2. La marca Panelex ya gana, mientras que “panel sándwich Sevilla” y variantes acumulan impresiones sin clics suficientes.

El rastreo público verificó 130 de 130 URLs con HTTP 200 y un H1, 129 canonicals exactos y 342 bloques JSON-LD válidos. Search Console muestra 120 URLs indexadas, 21 descubiertas sin indexar y 6 rastreadas sin indexar. El sitemap de Google y Bing está correcto con 130 URLs.

La landing de Sevilla obtiene 175 impresiones y 2 clics; su contenido es sólido, pero el title es largo. La guía de medidas y longitudes obtiene 225 impresiones y 3 clics y carece de respuesta rápida aunque ya contiene la información necesaria.

## Objetivo

Mantener el crecimiento y las posiciones de marca mientras se mejora el CTR y la citabilidad de consultas comerciales y técnicas no branded.

## Diseño aprobado

1. Acortar y clarificar el title y la descripción de la landing de Sevilla, conservando URL, H1, contenido y transparencia sobre la fábrica en Badajoz.
2. Añadir una respuesta directa de 40–60 palabras a la guía de medidas, acortar su fragmento y actualizar su fecha real.
3. Reforzar enlaces desde esa guía hacia catálogo, precio y contacto sin crear otra URL sobre la misma intención.
4. Emitir en sitemap una fecha 2026-07-22 solo para Sevilla; mantener las fechas estables del resto.
5. Añadir pruebas para metadata de Sevilla, respuesta rápida, longitudes, fecha y lastmod.
6. No crear nuevos artículos en esta entrega porque ya existen más de 90 guías y el mayor retorno está en las URLs que Google muestra.

## Restricciones

- Trabajo exclusivo en Linux remoto por SSH.
- No tocar Vercel.
- No mezclar los cambios sin confirmar del directorio principal.
- No alterar precios visibles que dependan de aprobación del propietario.
- No exagerar cobertura, fábrica local en Sevilla ni plazos.
- Publicar únicamente mediante GitHub.

## Verificación y publicación

Se ejecutarán Vitest, TypeScript, validación de productos cuando el runtime lo permita y `next build`. El comando `next lint` abre actualmente un asistente por falta de configuración; se registra como limitación previa y no se responderá automáticamente. Tras desplegar se comprobarán Sevilla, la guía, sitemap, canonical, H1 y JSON-LD; después se enviará el sitemap y se ejecutará IndexNow.
