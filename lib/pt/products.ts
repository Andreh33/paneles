import { PRODUCTS, type Product, type ProductCategory } from "@/lib/products";

export const PT_CATEGORIES: Record<ProductCategory, string> = {
  cubierta: "Cobertura",
  fachada: "Fachada",
  policarbonato: "Policarbonato",
  accesorio: "Remates e acessórios",
};

const colors: Record<string, string> = {
  terracota: "Terracota",
  chocolate: "Chocolate",
  rojo: "Vermelho",
  gris: "Cinzento",
  granate: "Albero envelhecido escuro",
  negro: "Albero envelhecido claro",
};
const descriptions: Record<string, [string, string]> = {
  "panel-fachada-nervada": [
    "Painel sandwich de fachada nervurada",
    "Painel para revestimento vertical, com acabamento nervurado. Compare as espessuras e os pesos da referência antes de definir a estrutura e as fixações.",
  ],
  "panel-fachada-microperfilada": [
    "Painel sandwich de fachada microperfilada",
    "Painel para fachada com superfície microperfilada. Consulte as combinações de espessura e chapa e confirme os remates de cada encontro.",
  ],
  "policarbonato-celular": [
    "Placa de policarbonato celular",
    "Placa translúcida para aproveitar a luz natural. Confirme espessura, apoios, dilatação e compatibilidade com os perfis da cobertura.",
  ],
  "policarbonato-compacto": [
    "Placa de policarbonato compacto",
    "Placa de policarbonato compacto para soluções de iluminação e proteção. A aplicação e as fixações devem seguir a documentação da referência.",
  ],
  "acc-cumbrera-fertelha": [
    "Cumeeira recortada Fertelha",
    "Remate de cumeeira para o perfil Fertelha. Confirme o encontro dos dois panos, a cor e a quantidade antes de fechar a encomenda.",
  ],
  "acc-remate-inferior-fertelha": [
    "Remate inferior Fertelha",
    "Remate para o bordo inferior da cobertura Fertelha. Deve ser coordenado com a saída de água e com os restantes acessórios do projeto.",
  ],
  "acc-remate-superior-fertelha": [
    "Remate superior Fertelha",
    "Peça de acabamento superior para o sistema Fertelha. Indique a geometria do encontro e as medidas necessárias no pedido de orçamento.",
  ],
};

export function localizeProduct(product: Product): Product {
  if (product.slug.startsWith("fertelha-")) {
    const color = colors[product.slug.slice("fertelha-".length)];
    return {
      ...product,
      name: `Painel sandwich Fertelha — ${color}`,
      description: `Painel de cobertura com perfil de telha, em ${color.toLowerCase()}. Espessuras de 40 e 80 mm; comprimentos de corte conforme o catálogo.`,
    };
  }
  if (product.slug.startsWith("panel-cubierta-")) {
    const color = colors[product.slug.slice("panel-cubierta-".length)];
    return {
      ...product,
      name:
        product.name === "Panel fachada"
          ? "Painel de fachada"
          : `Painel de cobertura — ${color}`,
      description: `Painel de cinco nervuras em ${color.toLowerCase()}, com espessuras de 30 e 100 mm. Opção Agropanel e acabamento interior a confirmar no orçamento.`,
    };
  }
  const copy = descriptions[product.slug];
  if (!copy)
    throw new Error(`Missing Portuguese product copy: ${product.slug}`);
  return { ...product, name: copy[0], description: copy[1] };
}

export const PT_PRODUCTS = PRODUCTS.map(localizeProduct);
