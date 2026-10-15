import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { EditorialBody, editorialBlocks, safeEditorialHref } from "./EditorialBody";

describe("reviewed editorial body", () => {
  it("preserves the order of paragraphs, lists, headings and table cells", () => {
    const blocks=editorialBlocks("Intro\n\n## Decisión\n\nPrimer párrafo.\n\n- A\n- B\n\nDespués.\n\n| Opción | Caso |\n| --- | --- |\n| Una | Dos |\n\n### Ejemplo\n\nFinal.");
    expect(blocks.map(b=>b.type)).toEqual(["paragraph","heading","paragraph","list","paragraph","table","heading","paragraph"]);
    expect(blocks[5]).toEqual({type:"table",headers:["Opción","Caso"],rows:[["Una","Dos"]]});
  });
  it("escapes HTML and refuses executable or ambiguous URLs", () => {
    const html=renderToStaticMarkup(<EditorialBody markdown={'## Prueba\n\n<script>alert(1)</script> [Malo](javascript:alert) [Otra](//evil.test) [Contacto](/contacto) **Importante**'} />);
    expect(html).not.toContain('<script>');
    expect(html).not.toContain('href="javascript:');
    expect(html).not.toContain('href="//evil');
    expect(html).toContain('href="/contacto"');
    expect(html).toContain('<strong>Importante</strong>');
  });
  it("allows only clean HTTPS and local paths", () => {
    for(const url of ['data:text/html,test','https://user:pass@example.com','/\\evil','https://exa mple.com'])expect(safeEditorialHref(url)).toBeNull();
    expect(safeEditorialHref('https://example.com/source')).toBe('https://example.com/source');
  });
  it("keeps table text accessible and the outline outside the article body", () => {
    const html=renderToStaticMarkup(<EditorialBody markdown={'## Comparación\n\n| Material | Uso |\n| --- | --- |\n| Panel | Fachada |'} />);
    expect(html).toContain('<th scope="col"');
    expect(html).toContain('data-editorial-body');
    expect(html.indexOf('</details>')).toBeLessThan(html.indexOf('data-editorial-body'));
    expect(html).toContain('Panel');
  });
});
