import Link from "next/link";
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LEGAL_LINKS, NAV_LINKS, ZONE_LINKS, SITE } from "@/lib/site";
import { ALL_CATEGORIES } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-deep)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: marca + dirección */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="max-w-xs text-sm text-white/70">{SITE.tagline}</p>

            <address className="space-y-2 text-sm not-italic text-white/70">
              <a
                href={`https://www.openstreetmap.org/?mlat=${SITE.address.geo.lat}&mlon=${SITE.address.geo.lng}#map=17/${SITE.address.geo.lat}/${SITE.address.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-soft)]" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                  <br />
                  {SITE.address.province} · {SITE.address.country}
                </span>
              </a>
              <a
                href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-[var(--color-accent-soft)]" />
                <span className="font-mono">{SITE.contact.phone}</span>
              </a>
              <a
                href={`tel:${SITE.contact.phoneOffice.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-[var(--color-accent-soft)]" />
                <span className="font-mono">{SITE.contact.phoneOffice}</span>
                <span className="text-white/40">· Oficina</span>
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-[var(--color-accent-soft)]" />
                <span>{SITE.contact.email}</span>
              </a>
            </address>

            {(SITE.social.facebook || SITE.social.linkedin || SITE.social.instagram) && (
              <div className="flex gap-3">
                {SITE.social.facebook && (
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Panelex"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white/10"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {SITE.social.linkedin && (
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Panelex"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {SITE.social.instagram && (
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Panelex"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white/10"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2: productos */}
          <FooterCol title="Productos">
            {ALL_CATEGORIES.map((c) => (
              <li key={c.value}>
                <Link
                  href={`/productos?categoria=${c.value}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Col 3: zonas donde servimos */}
          <FooterCol title="Zonas">
            {ZONE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Col 4: empresa */}
          <FooterCol title="Empresa">
            {NAV_LINKS.filter((l) => l.href !== "/productos").map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Col 4: legal */}
          <FooterCol title="Legal">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                data-cookie-trigger
                className="text-left text-sm text-white/70 transition hover:text-white"
              >
                Configurar cookies
              </button>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/70 md:flex-row md:items-center">
          <p>
            © {year} {SITE.legalName} · Todos los derechos reservados.
          </p>
          <p className="font-mono">
            Diseño y desarrollo web por{" "}
            <a
              href="https://serviciosonlineweb.com"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-accent-soft)] transition hover:text-white"
            >
              Latech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
        {title}
      </h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
