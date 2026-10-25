"use client";

import Link from "next/link";
import { useRef } from "react";

export function PortugueseMobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const details = useRef<HTMLDetailsElement>(null);
  return (
    <details ref={details} className="border-t border-white/15 px-5 md:hidden">
      <summary className="cursor-pointer py-3 font-semibold">Menu</summary>
      <nav aria-label="Navegação móvel" className="flex flex-col pb-4">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="py-3 text-white/85"
            onClick={() => {
              if (details.current) details.current.open = false;
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
