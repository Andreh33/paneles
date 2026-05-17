import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Descargas",
  description:
    "Descarga el catálogo de Panelex, fichas técnicas de cada producto y las declaraciones de prestaciones CE.",
};

const CATALOG = {
  /** Ruta pública al PDF del catálogo (versión inicial, ya subida). */
  href: "/source/77ae79_142e62223c5e4bee8dd8d29e266b744f.pdf",
  filename: "catalogo-panelex.pdf",
  /** Tamaño aproximado en KB para mostrar al usuario */
  sizeKb: 695,
};

export default function DescargasPage() {
  return (
    <>
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Descargas
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Catálogo, fichas técnicas
            <br />
            y declaraciones CE.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Documentación técnica para arquitectos, ingenierías e instaladores.
            Si necesitas algo que no encuentras aquí, pídelo por WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
          {/* Catálogo */}
          <DownloadCard
            title="Catálogo Panelex"
            subtitle="Documento maestro con toda la gama, especificaciones técnicas y aplicaciones."
            meta={`PDF · ${CATALOG.sizeKb} KB`}
            href={CATALOG.href}
            download={CATALOG.filename}
            Icon={FileText}
            highlight
          />

          {/* Fichas técnicas individuales (placeholder hasta tener PDFs por producto) */}
          <h2 className="mt-16 mb-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Fichas técnicas por producto
          </h2>
          <p className="mb-6 text-sm text-[var(--color-muted)]">
            Las fichas individuales en PDF se generarán a partir del catálogo
            cuando el cliente las facilite. Mientras tanto, cada producto tiene
            su tabla completa de especificaciones en la web.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}#panel-specs`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 transition hover:border-[var(--color-primary)]"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                    {p.category.replace("-", " ")}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[var(--color-text)]">
                    {p.name}
                  </p>
                  <p className="font-mono text-xs text-[var(--color-primary)]">
                    {p.code}
                  </p>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Download className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          {/* Declaraciones CE */}
          <h2 className="mt-16 mb-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Declaraciones de prestaciones CE
          </h2>
          <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <ShieldCheck className="h-7 w-7 shrink-0 text-[var(--color-primary)]" />
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">
                  DoP por producto bajo solicitud
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Las declaraciones de prestaciones (DoP) según el Reglamento
                  (UE) 305/2011 se entregan junto con el albarán o por email
                  bajo petición. Indica el código del producto y el número de
                  pedido.
                </p>
              </div>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-deep)]"
              >
                Solicitar DoP
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs text-[var(--color-muted)]">
            ¿Necesitas algún documento que no aparece aquí? Escríbenos por
            WhatsApp y lo gestionamos.
          </p>
        </div>
      </section>
    </>
  );
}

function DownloadCard({
  title,
  subtitle,
  meta,
  href,
  download,
  Icon,
  highlight,
}: {
  title: string;
  subtitle: string;
  meta: string;
  href: string;
  download?: string;
  Icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      className={[
        "group flex flex-col gap-6 rounded-3xl border p-6 transition md:flex-row md:items-center md:p-8",
        highlight
          ? "border-transparent bg-[var(--color-primary-deep)] text-white hover:bg-[var(--color-primary)]"
          : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]",
      ].join(" ")}
    >
      <div
        className={[
          "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
          highlight ? "bg-white/10" : "bg-[var(--color-surface)]",
        ].join(" ")}
      >
        <Icon className={highlight ? "h-7 w-7 text-white" : "h-7 w-7 text-[var(--color-primary)]"} />
      </div>
      <div className="flex-1">
        <p
          className={`font-mono text-[10px] uppercase tracking-[0.25em] ${
            highlight ? "text-[var(--color-accent-soft)]" : "text-[var(--color-muted)]"
          }`}
        >
          {meta}
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
          {title}
        </h2>
        <p
          className={`mt-2 text-sm ${
            highlight ? "text-white/70" : "text-[var(--color-muted)]"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <span
        className={[
          "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
          highlight
            ? "bg-white text-[var(--color-primary-deep)]"
            : "bg-[var(--color-primary)] text-white",
        ].join(" ")}
      >
        <Download className="h-4 w-4" />
        Descargar
      </span>
    </a>
  );
}
