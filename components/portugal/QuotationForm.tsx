"use client";

import { useState } from "react";
import { buildQuoteMessage, ptWhatsApp } from "@/lib/pt/contact";
import { SITE } from "@/lib/site";

const field =
  "mt-2 w-full rounded-lg border border-[var(--color-border)] bg-white p-3 text-[var(--color-text)]";

export function QuotationForm({
  products,
}: {
  products: { slug: string; name: string; code: string }[];
}) {
  const [message, setMessage] = useState("");
  return (
    <form
      id="pedido"
      className="scroll-mt-40 space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setMessage(
          buildQuoteMessage({
            name: String(data.get("name") ?? ""),
            place: String(data.get("place") ?? ""),
            product: String(data.get("product") ?? ""),
            measures: String(data.get("measures") ?? ""),
            installation: data.get("installation") === "on",
          }),
        );
      }}
      onChange={() => setMessage("")}
    >
      <div>
        <label htmlFor="pt-name" className="font-semibold">
          Nome{" "}
          <span className="font-normal text-[var(--color-muted)]">
            (opcional)
          </span>
        </label>
        <input
          id="pt-name"
          name="name"
          autoComplete="name"
          maxLength={100}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="pt-place" className="font-semibold">
          Concelho e código postal de entrega
        </label>
        <input
          id="pt-place"
          name="place"
          autoComplete="address-level2"
          required
          maxLength={160}
          className={field}
          placeholder="Por exemplo: Évora, 7000-…"
        />
      </div>
      <div>
        <label htmlFor="pt-product" className="font-semibold">
          Produto
        </label>
        <select id="pt-product" name="product" className={field}>
          <option value="">Preciso de ajuda para escolher</option>
          {products.map((p) => (
            <option key={p.slug} value={`${p.name} (${p.code})`}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pt-measures" className="font-semibold">
          Medidas, quantidades e dados da obra
        </label>
        <textarea
          id="pt-measures"
          name="measures"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          className={field}
          placeholder="Número de peças, comprimentos, largura útil, espessura, cor, remates, acessos e meios de descarga disponíveis…"
        />
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Indique medidas em metros ou milímetros, com a unidade. Pode anexar
          fotografias ou um desenho na conversa do WhatsApp.
        </p>
      </div>
      <label className="flex items-start gap-3">
        <input name="installation" type="checkbox" className="mt-1 h-5 w-5" />
        <span>
          Pretendo também confirmar a disponibilidade e as condições de montagem
          para esta obra.
        </span>
      </label>
      <p className="text-sm leading-relaxed text-[var(--color-muted)]">
        Este formulário prepara uma mensagem no seu dispositivo. Depois de a
        rever, escolha WhatsApp ou email para a enviar à Panelex. Consulte a{" "}
        <a href="/politica-privacidad" lang="es" className="underline">
          política de privacidade, em espanhol
        </a>
        .
      </p>
      <button
        type="submit"
        className="rounded-full bg-[var(--color-primary-deep)] px-7 py-4 font-semibold text-white"
      >
        Preparar mensagem
      </button>
      {message && (
        <div
          role="status"
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
        >
          <h3 className="font-display text-xl font-semibold">
            Reveja o seu pedido
          </h3>
          <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-relaxed">
            {message}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={ptWhatsApp(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent-deep)] px-5 py-3 font-semibold text-white"
            >
              Abrir no WhatsApp
            </a>
            <a
              href={`mailto:${SITE.contact.email}?subject=${encodeURIComponent("Pedido de orçamento — Portugal")}&body=${encodeURIComponent(message)}`}
              className="rounded-full border border-[var(--color-border)] px-5 py-3 font-semibold"
            >
              Enviar por email
            </a>
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Confirme o envio na aplicação que abrir. A encomenda só fica
            acordada após confirmação comercial.
          </p>
        </div>
      )}
    </form>
  );
}
