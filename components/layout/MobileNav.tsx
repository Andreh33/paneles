"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, LEGAL_LINKS, SITE } from "@/lib/site";
import { WhatsAppGlyph } from "./Header";

interface Props {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileNav({ open, onClose, pathname }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      className="fixed inset-0 z-50 flex flex-col bg-[var(--color-bg-warm)] text-white lg:hidden"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-5">
        <Logo variant="light" />
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav
        aria-label="Principal"
        className="flex-1 overflow-y-auto px-4 py-8"
      >
        <ul className="space-y-2">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "block rounded-2xl px-5 py-4 font-display text-3xl font-semibold transition-colors",
                    active
                      ? "bg-white/5 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-8">
          <a
            href={`https://wa.me/${SITE.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent-deep)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#7d3f06]"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Pedir presupuesto por WhatsApp
          </a>
          <p className="mt-4 text-center text-sm text-white/60">
            <a
              href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
              className="font-mono text-white hover:text-[var(--color-accent-soft)]"
            >
              {SITE.contact.phone}
            </a>
            <span className="mx-2">·</span>
            {SITE.contact.hours}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/40">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
