import { expect, it } from "vitest";
import { buildQuoteMessage, ptWhatsApp } from "./contact";

it("prepares a Portuguese quotation without submitting it", () => {
  const message = buildQuoteMessage({
    name: " Ana ",
    place: "Évora",
    product: "Fertelha",
    measures: "12 peças de 4,20 m",
    installation: true,
  });
  expect(message).toContain("Local de entrega: Évora");
  expect(message).toContain("Nome: Ana\n");
  expect(message).toContain("12 peças de 4,20 m");
  expect(message).toContain(
    "Confirmar disponibilidade e condições de montagem",
  );
  const url = new URL(ptWhatsApp(message));
  expect(url.hostname).toBe("wa.me");
  expect(url.searchParams.get("text")).toBe(message);
});
