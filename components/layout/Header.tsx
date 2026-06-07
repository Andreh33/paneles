"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";
import { useCartDrawer, useCartStore } from "@/lib/cart-store";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Subscripción al carrito — devuelve siempre 0 en SSR para evitar mismatch */
  const items = useCartStore((s) => s.items);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const cartCount = mounted ? items.length : 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú móvil en cambio de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-primary-deep)] focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <header
        className={[
          "sticky top-0 z-40 border-b border-white/10 transition-all duration-300",
          scrolled
            ? "h-20 bg-[var(--color-bg-warm)]/90 backdrop-blur-md"
            : "h-24 bg-[var(--color-bg-warm)]",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo variant="light" />

          <nav
            aria-label="Principal"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                  {active && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] align-middle" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <CartButton count={cartCount} hasMounted={mounted} />

            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[var(--color-accent-deep)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7d3f06] sm:inline-flex"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

function CartButton({ count, hasMounted }: { count: number; hasMounted: boolean }) {
  const openDrawer = useCartDrawer((s) => s.openDrawer);

  return (
    <button
      type="button"
      onClick={openDrawer}
      disabled={!hasMounted}
      aria-label={
        count === 0
          ? "Abrir solicitud de presupuesto (vacía)"
          : `Abrir solicitud (${count} ${count === 1 ? "producto" : "productos"})`
      }
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 disabled:opacity-50"
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--color-accent)] px-1.5 text-[10px] font-bold leading-none text-white"
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function WhatsAppGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.013 2.003C6.485 2.003 2 6.487 2 12.015c0 1.766.461 3.488 1.336 4.997L2 22l5.116-1.317a9.96 9.96 0 0 0 4.898 1.247h.004c5.527 0 10.012-4.485 10.012-10.013s-4.486-9.914-10.017-9.914zm0 18.135h-.003a8.302 8.302 0 0 1-4.224-1.156l-.303-.18-3.137.823.836-3.058-.197-.314a8.265 8.265 0 0 1-1.268-4.418c0-4.572 3.717-8.29 8.291-8.29 2.214 0 4.296.866 5.864 2.436a8.235 8.235 0 0 1 2.43 5.864c-.001 4.572-3.717 8.293-8.289 8.293z"
      />
    </svg>
  );
}
