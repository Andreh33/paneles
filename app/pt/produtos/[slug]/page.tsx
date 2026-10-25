import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/product/ProductImage";
import {
  PtHero,
  PtContactCTA,
  ptBreadcrumb,
} from "@/components/portugal/Shared";
import { JsonLd } from "@/components/seo/JsonLd";
import { PT_PRODUCTS, portugueseMetadata } from "@/lib/portugal";
import { PT_CATEGORIES } from "@/lib/pt/products";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return PT_PRODUCTS.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = PT_PRODUCTS.find((p) => p.slug === slug);
  return p
    ? portugueseMetadata(`/pt/produtos/${slug}`, p.name, p.description)
    : { title: "Produto não encontrado" };
}

export default async function PtProduct({ params }: Props) {
  const { slug } = await params;
  const product = PT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();
  const formatter = new Intl.NumberFormat("pt-PT", {
    maximumFractionDigits: 3,
  });
  const weightUnit =
    product.unit === "m2"
      ? "kg/m²"
      : product.unit === "ml"
        ? "kg/m linear"
        : "kg/unidade";
  return (
    <>
      <JsonLd
        data={ptBreadcrumb([
          { name: "Início", path: "/pt" },
          { name: "Produtos", path: "/pt/produtos" },
          { name: product.name, path: `/pt/produtos/${slug}` },
        ])}
      />
      <PtHero
        eyebrow={`${PT_CATEGORIES[product.category]} · ${product.code}`}
        title={product.name}
      >
        <p>{product.description}</p>
      </PtHero>
      <article className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3]">
            <ProductImage
              product={product}
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Imagem de referência do produto. Confirme o acabamento numa amostra
            antes da encomenda.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold">
            Dados da referência
          </h2>
          <dl className="mt-6 grid grid-cols-2 gap-5 border-y border-[var(--color-border)] py-6">
            <div>
              <dt className="text-sm text-[var(--color-muted)]">
                Largura total
              </dt>
              <dd className="mt-1 font-mono text-lg">
                {product.widthTotal > 0
                  ? `${formatter.format(product.widthTotal)} mm`
                  : "Não indicada no catálogo"}
              </dd>
            </div>
            {product.widthUseful && (
              <div>
                <dt className="text-sm text-[var(--color-muted)]">
                  Largura útil
                </dt>
                <dd className="mt-1 font-mono text-lg">
                  {formatter.format(product.widthUseful)} mm
                </dd>
              </div>
            )}
          </dl>
          {product.fixedLength && (
            <p className="mt-4">
              Comprimento total: {formatter.format(product.fixedLength.total)}{" "}
              m; comprimento útil:{" "}
              {formatter.format(product.fixedLength.useful)} m.
            </p>
          )}
          <p className="mt-6 leading-relaxed">
            As combinações abaixo reproduzem os dados desta referência no
            catálogo Panelex. O peso depende da chapa e da espessura
            selecionadas. A escolha dos apoios, das fixações e do desempenho
            exigido deve ser confirmada para o projeto.
          </p>
          {product.isAgropanel && (
            <p className="mt-4 leading-relaxed">
              Opção Agropanel: peça confirmação da configuração da face interior
              e da sua adequação ao ambiente da instalação.
            </p>
          )}
          {product.cutLengths?.length ? (
            <p className="mt-4 leading-relaxed">
              Comprimentos de corte da referência: de{" "}
              {formatter.format(Math.min(...product.cutLengths))} a{" "}
              {formatter.format(Math.max(...product.cutLengths))} mm. Confirme
              os incrementos disponíveis e a possibilidade de transporte e
              descarga dessas peças.
            </p>
          ) : null}
          <Link
            href="/pt/contacto"
            className="mt-7 inline-block rounded-full bg-[var(--color-accent-deep)] px-6 py-3.5 font-semibold text-white"
          >
            Preparar um pedido desta referência →
          </Link>
        </div>
        <section className="min-w-0 lg:col-span-2">
          <h2 className="font-display text-3xl font-semibold">
            Espessuras, chapas e pesos
          </h2>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            U: coeficiente de transmissão térmica, quando publicado no catálogo.
            Uma célula sem valor significa que esse dado não está indicado para
            a combinação.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="bg-[var(--color-surface)] p-4 text-left font-semibold">
                Especificações de {product.code}
              </caption>
              <thead>
                <tr>
                  {[
                    "Espessura nominal (mm)",
                    "Chapa (mm)",
                    `Peso (${weightUnit})`,
                    "U (W/m²·K)",
                  ].map((label) => (
                    <th key={label} scope="col" className="border-b p-4">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i}>
                    <td className="border-b p-4">
                      {formatter.format(spec.espesorNominal)}
                    </td>
                    <td className="border-b p-4">
                      {spec.chapa.replaceAll(".", ",")}
                    </td>
                    <td className="border-b p-4">
                      {spec.peso > 0 ? formatter.format(spec.peso) : "—"}
                    </td>
                    <td className="border-b p-4">
                      {spec.uWmK == null ? "—" : formatter.format(spec.uWmK)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-[var(--color-muted)]">
            No orçamento, indique cor, acabamento interior, espessura,
            combinação de chapas, quantidade, comprimento de cada peça e local
            de entrega. Transporte, descarga, impostos e qualquer montagem devem
            ficar discriminados.
          </p>
        </section>
      </article>
      <PtContactCTA
        subject={`Gostaria de pedir um orçamento para ${product.name} (${product.code}), com entrega em Portugal. Concelho: __. Quantidades e medidas: __. Espessura e chapas: __. Descarga e eventual montagem: __.`}
      />
    </>
  );
}
