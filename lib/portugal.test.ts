import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import {
  getLocaleAlternates,
  getLanguageSwitchPath,
  TRANSLATED_PRODUCT_SLUGS,
} from "@/lib/locale-paths";
import { PRODUCTS } from "@/lib/products";
import { PT_GUIDES, PT_PRODUCTS } from "@/lib/portugal";

describe("Portuguese discovery and language equivalents", () => {
  it("preserves the catalogue's explicitly chosen commercial name", () => {
    expect(
      PT_PRODUCTS.find((p) => p.slug === "panel-cubierta-gris")?.name,
    ).toBe("Painel de fachada");
  });
  it("publishes the Portuguese entry points in the sitemap", () => {
    const urls = new Set(sitemap().map((entry) => entry.url));
    for (const path of ["/pt", "/pt/produtos", "/pt/contacto", "/pt/guias"]) {
      expect(urls.has(`https://panelexpanelsandwich.com${path}`), path).toBe(
        true,
      );
    }
  });
  it("pairs each translated guide in both directions without merging canonicals", () => {
    const entries = sitemap();
    const translated = entries.filter((entry) =>
      entry.url.includes("/pt/guias/"),
    );
    expect(translated).toHaveLength(8);
    for (const pt of translated) {
      const languages = pt.alternates?.languages;
      expect(languages?.["pt-PT"]).toBe(pt.url);
      const es = entries.find((entry) => entry.url === languages?.es);
      expect(es?.alternates?.languages).toEqual(languages);
      expect(es?.url).not.toBe(pt.url);
    }
  });
  it("discovers six regional pages with unique URLs", () => {
    const regions = sitemap().filter((entry) =>
      entry.url.includes("/pt/zonas/"),
    );
    expect(regions).toHaveLength(6);
    expect(new Set(regions.map((entry) => entry.url)).size).toBe(6);
  });
  it("falls back to an entry page without announcing nonexistent translations", () => {
    const path = "/sobre-nosotros/condensacion-panel-sandwich";
    expect(getLanguageSwitchPath(path)).toBe("/pt");
    expect(getLocaleAlternates(path).languages).toBeUndefined();
    expect(getLanguageSwitchPath("/pt/zonas/beja")).toBe("/");
    expect(getLocaleAlternates("/pt/zonas/beja").languages).toBeUndefined();
    expect(
      getLocaleAlternates("/pt/produtos/not-a-product").languages,
    ).toBeUndefined();
  });
  it("keeps every existing product and source article connected to its real equivalent", () => {
    expect([...TRANSLATED_PRODUCT_SLUGS].sort()).toEqual(
      PRODUCTS.map((p) => p.slug).sort(),
    );
    for (const guide of PT_GUIDES) {
      const source = `/sobre-nosotros/${guide.sourceSlug}`;
      const translated = `/pt/guias/${guide.slug}`;
      expect(getLanguageSwitchPath(source)).toBe(translated);
      expect(getLanguageSwitchPath(translated)).toBe(source);
    }
  });
});
