import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

interface Props {
  title: string;
  taskId: number;
  description?: string;
}

/**
 * Placeholder consistente para páginas aún no implementadas.
 * Se sustituye por la página real al cerrar la tarea correspondiente.
 */
export function PagePlaceholder({ title, taskId, description }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 md:px-8 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        Tarea #{taskId} · pendiente
      </p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg text-[var(--color-muted)]">{description}</p>
      )}
      <div className="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <Wrench className="h-5 w-5 text-[var(--color-primary)]" />
        <p className="text-sm text-[var(--color-muted)]">
          Estructura levantada. El contenido real se implementa al ejecutar la
          tarea #{taskId} de la planificación.
        </p>
      </div>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-deep)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
    </section>
  );
}
