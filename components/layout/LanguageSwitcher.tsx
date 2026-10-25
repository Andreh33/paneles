"use client";

import { usePathname } from "next/navigation";
import { getLanguageSwitchPath } from "@/lib/locale-paths";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const portuguese = pathname === "/pt" || pathname.startsWith("/pt/");
  return (
    <nav
      aria-label={portuguese ? "Idioma" : "Idioma"}
      className="flex shrink-0 items-center rounded-full border border-white/25 p-1 text-xs font-semibold text-white"
    >
      <a
        href={portuguese ? getLanguageSwitchPath(pathname) : pathname}
        lang="es"
        hrefLang="es"
        aria-label="Español"
        aria-current={!portuguese ? "page" : undefined}
        className={`rounded-full px-2.5 py-2 ${!portuguese ? "bg-white text-[var(--color-bg-warm)]" : "hover:bg-white/10"}`}
      >
        ES
      </a>
      <a
        href={portuguese ? pathname : getLanguageSwitchPath(pathname)}
        lang="pt-PT"
        hrefLang="pt-PT"
        aria-label="Português"
        aria-current={portuguese ? "page" : undefined}
        className={`rounded-full px-2.5 py-2 ${portuguese ? "bg-white text-[var(--color-bg-warm)]" : "hover:bg-white/10"}`}
      >
        PT
      </a>
    </nav>
  );
}
