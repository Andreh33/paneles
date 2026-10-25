import { SITE } from "@/lib/site";

/** Only real equivalents belong here. Regional PT content has no ES twin. */
export const GUIDE_TRANSLATIONS = [
  [
    "medidas-y-longitudes-del-panel-sandwich",
    "medidas-comprimentos-painel-sandwich",
  ],
  ["cuanto-pesa-el-panel-sandwich", "peso-painel-sandwich"],
  ["como-sellar-las-juntas-del-panel-sandwich", "vedar-juntas-painel-sandwich"],
  [
    "casetas-y-modulos-prefabricados-con-panel",
    "abrigos-modulos-prefabricados-painel-sandwich",
  ],
  ["precio-panel-sandwich-m2", "preco-painel-sandwich-m2"],
  ["tornilleria-panel-sandwich", "parafusos-painel-sandwich"],
  ["el-panel-sandwich-da-calor-en-verano", "painel-sandwich-calor-verao"],
  ["policarbonato-vs-panel-sandwich", "policarbonato-ou-painel-sandwich"],
] as const;

// Kept small so the language switcher does not ship article bodies/catalog data.
export const TRANSLATED_PRODUCT_SLUGS = [
  "fertelha-terracota",
  "fertelha-chocolate",
  "fertelha-rojo",
  "fertelha-gris",
  "fertelha-granate",
  "fertelha-negro",
  "panel-cubierta-rojo",
  "panel-cubierta-gris",
  "panel-fachada-nervada",
  "panel-fachada-microperfilada",
  "policarbonato-celular",
  "policarbonato-compacto",
  "acc-cumbrera-fertelha",
  "acc-remate-inferior-fertelha",
  "acc-remate-superior-fertelha",
] as const;

const pairs: [string, string][] = [
  ["/", "/pt"],
  ["/productos", "/pt/produtos"],
  ["/contacto", "/pt/contacto"],
  ["/guias", "/pt/guias"],
  ...GUIDE_TRANSLATIONS.map(([es, pt]): [string, string] => [
    `/sobre-nosotros/${es}`,
    `/pt/guias/${pt}`,
  ]),
  ...TRANSLATED_PRODUCT_SLUGS.map((slug): [string, string] => [
    `/productos/${slug}`,
    `/pt/produtos/${slug}`,
  ]),
];

export function getLocaleAlternates(path: string) {
  const normalized = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  const pair = pairs.find(([es, pt]) => normalized === es || normalized === pt);
  return {
    canonical: `${SITE.url}${normalized === "/" ? "/" : normalized}`,
    ...(pair
      ? {
          languages: {
            es: `${SITE.url}${pair[0]}`,
            "pt-PT": `${SITE.url}${pair[1]}`,
            "x-default": `${SITE.url}${pair[0]}`,
          },
        }
      : {}),
  };
}

export function getLanguageSwitchPath(path: string): string {
  const normalized = path.replace(/\/+$/, "") || "/";
  const pair = pairs.find(([es, pt]) => normalized === es || normalized === pt);
  if (pair) return normalized === pair[0] ? pair[1] : pair[0];
  return normalized === "/pt" || normalized.startsWith("/pt/") ? "/" : "/pt";
}
