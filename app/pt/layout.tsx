import { PortugueseMobileMenu } from "@/components/portugal/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SITE } from "@/lib/site";
import { metadata as sharedMetadata } from "@/lib/site-metadata";

export const metadata = {
  ...sharedMetadata,
  keywords: [
    "painel sandwich",
    "painel sandwich Portugal",
    "painel sandwich cobertura",
    "painel sandwich fachada",
    "Fertelha",
  ],
  title: {
    default: "Painel sandwich para Portugal | Panelex",
    template: "%s | Panelex",
  },
  description:
    "Painel sandwich de cobertura e fachada, Fertelha e policarbonato. Fornecimento para Portugal a partir da fábrica Panelex em Badajoz.",
  openGraph: {
    ...sharedMetadata.openGraph,
    locale: "pt_PT",
    url: "https://panelexpanelsandwich.com/pt",
  },
};

const nav = [
  { href: "/pt/produtos", label: "Produtos" },
  { href: "/pt/guias", label: "Guias" },
  { href: "/pt#zonas", label: "Zonas de entrega" },
  { href: "/pt/contacto", label: "Contacto" },
];

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteDocument lang="pt-PT">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4"
      >
        Saltar para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-bg-warm)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/pt" aria-label="Panelex — início">
            <Image
              src="/logo.png"
              alt="Panelex"
              width={644}
              height={409}
              priority
              className="h-14 w-auto"
            />
          </Link>
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 md:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
        <PortugueseMobileMenu links={nav} />
      </header>
      <main id="main" className="min-h-[60dvh]">
        {children}
      </main>
      <footer className="bg-[var(--color-bg-warm)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <p className="font-display text-2xl font-semibold">Panelex</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Fabrico de painel sandwich em Puebla de la Calzada, Badajoz,
              Espanha. Fornecimento para Portugal, com condições de entrega
              acordadas por encomenda.
            </p>
          </div>
          <nav
            aria-label="Ligações úteis"
            className="flex flex-col items-start gap-3"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="/" lang="es">
              Site em espanhol
            </a>
          </nav>
          <div className="space-y-3 text-sm">
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city},{" "}
              {SITE.address.province}, Espanha
            </p>
            <p>
              <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}>
                {SITE.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </p>
            <p className="text-white/65">
              Segunda a sexta, 9h–14h, hora de Espanha. Atendimento: Ramón
              Romero.
            </p>
            <p className="text-white/65">
              Documentação legal em espanhol:{" "}
              <a className="underline" href="/aviso-legal" lang="es">
                aviso legal
              </a>{" "}
              ·{" "}
              <a className="underline" href="/politica-privacidad" lang="es">
                privacidade
              </a>{" "}
              ·{" "}
              <a className="underline" href="/politica-cookies" lang="es">
                cookies
              </a>{" "}
              ·{" "}
              <a className="underline" href="/terminos" lang="es">
                condições
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Panelex S.L.
        </div>
      </footer>
    </SiteDocument>
  );
}
