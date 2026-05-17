/**
 * Wrapper estético consistente para todas las páginas legales.
 * Tipografía cómoda para lectura larga, sin distracciones.
 */
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/site";

interface Props {
  title: string;
  /** Última fecha de revisión (formato libre). */
  lastUpdated: string;
  /** Slug actual para marcar el item activo en el nav lateral. */
  current: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, current, children }: Props) {
  return (
    <>
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Información legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Última actualización: <span className="font-mono">{lastUpdated}</span>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[200px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Documentos
            </p>
            <ul className="space-y-1">
              {LEGAL_LINKS.map((l) => {
                const active = l.href === current;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "block rounded-lg px-3 py-2 text-sm transition",
                        active
                          ? "bg-[var(--color-surface)] font-semibold text-[var(--color-primary)]"
                          : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>

          <article className="legal-prose">{children}</article>
        </div>
      </section>

      {/* Tipografía editorial para texto legal */}
      <style>{`
        .legal-prose {
          font-size: 15px;
          line-height: 1.75;
          color: var(--color-text);
        }
        .legal-prose h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-top: 48px;
          margin-bottom: 16px;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          margin-top: 28px;
          margin-bottom: 10px;
        }
        .legal-prose p { margin: 0 0 16px; }
        .legal-prose ul, .legal-prose ol {
          margin: 0 0 16px;
          padding-left: 22px;
        }
        .legal-prose li { margin-bottom: 8px; }
        .legal-prose a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-prose a:hover { color: var(--color-primary-deep); }
        .legal-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0 24px;
          font-size: 14px;
        }
        .legal-prose th, .legal-prose td {
          border: 1px solid var(--color-border);
          padding: 10px 12px;
          text-align: left;
          vertical-align: top;
        }
        .legal-prose thead th {
          background: var(--color-surface);
          font-weight: 600;
        }
        .legal-prose code {
          font-family: var(--font-mono);
          font-size: 13px;
          background: var(--color-surface);
          padding: 2px 6px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
