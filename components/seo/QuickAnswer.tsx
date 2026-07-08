/**
 * Bloque "respuesta rápida" (answer-first, GEO/AEO).
 *
 * Respuesta directa de 40-60 palabras colocada bajo el H1/H2 principal de las
 * páginas que ya rankean. Es el formato que ChatGPT, Perplexity y los AI
 * Overviews extraen y citan con más frecuencia: dato primero, matices después.
 * Server component puro, sin JS de cliente.
 */
export function QuickAnswer({
  children,
  className = "",
  label = "Respuesta rápida",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface)] p-5 md:p-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text)]">
        {children}
      </p>
    </div>
  );
}
