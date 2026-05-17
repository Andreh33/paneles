"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "./Header";

/**
 * Botón flotante de WhatsApp, fijo abajo a la derecha.
 * Aparece tras 400 px de scroll para no competir con el hero.
 * Respeta prefers-reduced-motion.
 */
export function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${SITE.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57] md:bottom-8 md:right-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}
