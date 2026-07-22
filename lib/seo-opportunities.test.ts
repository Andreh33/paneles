import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getPostBySlug } from "@/lib/blog";

const sevillaSource = fs.readFileSync(
  path.join(process.cwd(), "app/(marketing)/panel-sandwich-sevilla/page.tsx"),
  "utf8",
);

const asDate = (value: string | Date | undefined) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : String(value).slice(0, 10);

describe("oportunidades detectadas en Search Console", () => {
  it("Sevilla usa un fragmento breve, transparente y canónico", () => {
    expect(sevillaSource).toContain(
      'absolute: "Panel sándwich en Sevilla directo de fábrica | Panelex"',
    );
    expect(sevillaSource).toContain(
      'alternates: { canonical: "/panel-sandwich-sevilla" }',
    );
    const description = sevillaSource.match(
      /description:\s*\n\s*"([^"]+)"/,
    )?.[1];
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThanOrEqual(120);
    expect(description!.length).toBeLessThanOrEqual(155);
    expect(description).toMatch(/Badajoz/i);
  });

  it("la guía de medidas ofrece una respuesta directa citable", () => {
    const post = getPostBySlug("medidas-y-longitudes-del-panel-sandwich");
    expect(post).toBeTruthy();
    const words = post!.quickAnswer?.trim().split(/\s+/).length ?? 0;
    expect(words).toBeGreaterThanOrEqual(40);
    expect(words).toBeLessThanOrEqual(60);
    expect(post!.metaDescription.length).toBeLessThanOrEqual(155);
    expect(post!.dateModified).toBe("2026-07-22");
  });

  it("el sitemap actualiza solo la landing modificada", () => {
    const entries = sitemap();
    const sevilla = entries.find((entry) => entry.url.endsWith("/panel-sandwich-sevilla"));
    const madrid = entries.find((entry) => entry.url.endsWith("/panel-sandwich-madrid"));
    expect(asDate(sevilla?.lastModified)).toBe("2026-07-22");
    expect(asDate(madrid?.lastModified)).toBe("2026-07-08");
  });
});
