import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-sm text-[var(--color-primary)]">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">
        Página não encontrada
      </h1>
      <p className="mt-5 leading-relaxed">
        Esta página não está disponível. Pode consultar os produtos, ler os
        guias ou falar connosco sobre a sua obra.
      </p>
      <div className="mt-8 flex flex-wrap gap-5">
        <Link href="/pt" className="font-semibold underline">
          Início
        </Link>
        <Link href="/pt/produtos" className="font-semibold underline">
          Produtos
        </Link>
        <Link href="/pt/contacto" className="font-semibold underline">
          Contacto
        </Link>
      </div>
    </section>
  );
}
