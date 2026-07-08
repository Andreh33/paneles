import { describe, expect, it } from "vitest";
import { POSTS } from "./blog";
import { getGuideGroups, getUnmappedCategories } from "./guias";

describe("hub de guías (/guias)", () => {
  it("todas las categorías de POSTS están mapeadas a un tema", () => {
    // Si esto falla: añade la categoría nueva a GUIDE_THEMES en lib/guias.ts.
    expect(getUnmappedCategories()).toEqual([]);
  });

  it("cada post aparece exactamente una vez en el hub (ninguno huérfano)", () => {
    const groups = getGuideGroups();
    const slugs = groups.flatMap((g) => g.posts.map((p) => p.slug));
    expect(slugs.length).toBe(POSTS.length);
    expect(new Set(slugs).size).toBe(POSTS.length);
  });

  it("los slugs son únicos en POSTS (evita rutas duplicadas)", () => {
    const slugs = POSTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("los posts de cada grupo van de más reciente a más antiguo", () => {
    for (const g of getGuideGroups()) {
      const times = g.posts.map((p) => new Date(p.date).getTime());
      const sorted = [...times].sort((a, b) => b - a);
      expect(times).toEqual(sorted);
    }
  });
});
