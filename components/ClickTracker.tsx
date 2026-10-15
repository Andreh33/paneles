"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Registra como eventos de Vercel Analytics los clics en enlaces de contacto
 * (WhatsApp, telefono y email) de todo el sitio. Escucha en fase de captura a
 * nivel de documento, asi cubre cualquier enlace sin tocar cada componente.
 * Se ven en Vercel -> Analytics -> Events.
 */
export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const article = document.querySelector("[data-analytics-article]")?.getAttribute("data-analytics-article");
      const pathname = window.location.pathname;
      const articlePage = article && /^[a-z0-9-]+$/.test(article) && pathname === `/sobre-nosotros/${article}`;
      const path = articlePage ? pathname : ["/", "/contacto", "/productos", "/guias", "/sobre-nosotros"].includes(pathname) ? pathname : "/other-public-page";
      const properties = { path, ...(articlePage ? { article_slug: article } : {}) };
      if (articlePage && /^\/productos(?:\/[a-z0-9-]+)?$/.test(href)) {
        track("article_catalog_click", properties);
      } else if (articlePage && href === "/contacto") {
        track("article_contact_click", properties);
      } else if (/wa\.me|api\.whatsapp\.com|wa\.link/i.test(href)) {
        track("whatsapp_click", properties);
      } else if (href.startsWith("tel:")) {
        track("phone_click", properties);
      } else if (href.startsWith("mailto:")) {
        track("email_click", properties);
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
