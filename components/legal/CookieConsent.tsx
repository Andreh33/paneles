"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, Settings, X } from "lucide-react";
import { useConsent } from "@/lib/consent";

/**
 * Banner + modal de preferencias. Una sola pieza para evitar parpadeos.
 * Se conecta al botón `data-cookie-trigger` del footer para reabrirlo.
 */
export function CookieConsent() {
  const hydrate = useConsent((s) => s.hydrate);
  const bannerVisible = useConsent((s) => s.bannerVisible);
  const prefsOpen = useConsent((s) => s.prefsOpen);
  const openPrefs = useConsent((s) => s.openPrefs);
  const closePrefs = useConsent((s) => s.closePrefs);
  const acceptAll = useConsent((s) => s.acceptAll);
  const rejectAll = useConsent((s) => s.rejectAll);
  const save = useConsent((s) => s.save);
  const state = useConsent((s) => s.state);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Engancha el botón "Configurar cookies" del footer.
  useEffect(() => {
    function handler(e: Event) {
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cookie-trigger]"
      );
      if (target) {
        e.preventDefault();
        openPrefs();
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [openPrefs]);

  return (
    <>
      {bannerVisible && !prefsOpen && (
        <Banner
          onAccept={acceptAll}
          onReject={rejectAll}
          onConfigure={openPrefs}
        />
      )}

      {prefsOpen && (
        <PrefsModal
          current={state}
          onClose={closePrefs}
          onSave={save}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
        />
      )}
    </>
  );
}

function Banner({
  onAccept,
  onReject,
  onConfigure,
}: {
  onAccept: () => void;
  onReject: () => void;
  onConfigure: () => void;
}) {
  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:inset-x-auto md:left-5 md:right-auto md:max-w-md md:pb-5"
    >
      <div className="rounded-2xl bg-[var(--color-bg-warm)] p-5 text-white shadow-2xl shadow-black/40 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <Cookie className="h-4 w-4 text-[var(--color-accent-soft)]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
            Cookies
          </p>
        </div>
        <p className="text-sm text-white/90">
          Usamos cookies técnicas necesarias para el funcionamiento de la web.
          Opcionalmente, cookies de analítica para entender qué páginas son
          útiles. Puedes aceptar, rechazar o configurar — las tres opciones
          tienen el mismo peso.
        </p>
        <p className="mt-2 text-xs text-white/50">
          Más información en{" "}
          <Link
            href="/politica-cookies"
            className="underline hover:text-white"
          >
            política de cookies
          </Link>
          .
        </p>

        <div className="mt-4 grid gap-2 md:grid-cols-3">
          <BannerBtn variant="primary" onClick={onAccept}>
            Aceptar todas
          </BannerBtn>
          <BannerBtn variant="primary" onClick={onReject}>
            Rechazar todas
          </BannerBtn>
          <BannerBtn variant="primary" onClick={onConfigure}>
            Configurar
          </BannerBtn>
        </div>
      </div>
    </div>
  );
}

function BannerBtn({
  variant,
  onClick,
  children,
}: {
  /** Una sola variante para garantizar igual prominencia visual (LSSI-CE) */
  variant: "primary";
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-bg-warm)] transition hover:bg-[var(--color-accent-soft)]"
      data-variant={variant}
    >
      {children}
    </button>
  );
}

function PrefsModal({
  current,
  onClose,
  onSave,
  onAcceptAll,
  onRejectAll,
}: {
  current: ReturnType<typeof useConsent.getState>["state"];
  onClose: () => void;
  onSave: (prefs: { analytics: boolean }) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}) {
  const [analytics, setAnalytics] = useState<boolean>(current?.analytics ?? false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Configuración de cookies"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 md:items-center md:p-6"
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Cookies
            </p>
            <h2 className="font-display text-xl font-semibold">
              Configurar preferencias
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-muted)] hover:bg-[var(--color-surface)]"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="space-y-4 px-6 py-6">
          <Category
            title="Cookies necesarias"
            badge="Siempre activas"
            description="Indispensables para que la web funcione: preferencias de carrito, recordar tu decisión sobre cookies y mantener la sesión."
            disabled
            checked
          />
          <Category
            title="Cookies analíticas"
            badge="Opcional"
            description="Métricas anónimas y agregadas sobre páginas vistas y rendimiento. Sin perfilado de usuarios. Nos ayudan a saber qué contenido es útil."
            checked={analytics}
            onChange={setAnalytics}
          />
        </div>

        <footer className="grid gap-2 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 md:grid-cols-3">
          <ModalBtn onClick={onRejectAll}>Rechazar todas</ModalBtn>
          <ModalBtn onClick={() => onSave({ analytics })}>Guardar selección</ModalBtn>
          <ModalBtn onClick={onAcceptAll}>Aceptar todas</ModalBtn>
        </footer>
      </div>
    </div>
  );
}

function ModalBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-deep)]"
    >
      {children}
    </button>
  );
}

function Category({
  title,
  badge,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  badge: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[var(--color-text)]">{title}</h3>
            <span
              className={[
                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                disabled
                  ? "bg-[var(--color-muted)]/10 text-[var(--color-muted)]"
                  : "bg-[var(--color-accent)]/10 text-[var(--color-accent-deep)]",
              ].join(" ")}
            >
              {badge}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-[var(--color-muted)]">{description}</p>
        </div>
        <Toggle
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          label={title}
        />
      </div>
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={[
        "relative h-6 w-11 shrink-0 rounded-full transition",
        checked
          ? "bg-[var(--color-primary)]"
          : "bg-[var(--color-border)]",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
          checked ? "translate-x-5" : "translate-x-0.5",
        ].join(" ")}
      />
    </button>
  );
}
