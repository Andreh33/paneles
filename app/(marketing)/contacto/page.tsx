import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con Panelex: WhatsApp, teléfono, email o formulario. Fabricamos panel sándwich y chapa perfilada en Puebla de la Calzada (Badajoz).",
};

export default function ContactoPage() {
  const osmEmbedUrl = buildOsmEmbed(SITE.address.geo.lat, SITE.address.geo.lng);
  const osmLink = `https://www.openstreetmap.org/?mlat=${SITE.address.geo.lat}&mlon=${SITE.address.geo.lng}#map=17/${SITE.address.geo.lat}/${SITE.address.geo.lng}`;

  return (
    <>
      <JsonLd data={localBusinessLd()} />
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Contacto
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Habla con nosotros.
            <br />
            <span className="text-white/60">Respondemos rápido.</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            La forma más rápida de cerrar presupuesto es WhatsApp. Si prefieres
            escribirnos un mensaje formal, usa el formulario.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <aside className="space-y-6">
              <ContactCard
                Icon={WhatsAppGlyph}
                iconClass="text-[#25D366]"
                title="WhatsApp"
                primary={
                  <a
                    href={`https://wa.me/${SITE.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    {SITE.contact.phone}
                  </a>
                }
                secondary={`${SITE.contact.salesContact.name} · ${SITE.contact.salesContact.role}`}
              />
              <ContactCard
                Icon={Phone}
                title="Teléfono"
                primary={
                  <a
                    href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
                    className="font-mono text-base text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    {SITE.contact.phone}
                  </a>
                }
                secondary={SITE.contact.hours}
              />
              <ContactCard
                Icon={Mail}
                title="Email"
                primary={
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="text-base text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    {SITE.contact.email}
                  </a>
                }
              />
              <ContactCard
                Icon={MapPin}
                title="Dirección"
                primary={
                  <a
                    href={osmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    {SITE.address.street}
                  </a>
                }
                secondary={`${SITE.address.postalCode} ${SITE.address.city} · ${SITE.address.province}`}
              />
              <ContactCard
                Icon={Clock}
                title="Horario"
                primary={SITE.contact.hours}
              />
            </aside>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa OpenStreetMap (sin Google, sin cookies de terceros) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Cómo llegar
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                {SITE.address.city}, {SITE.address.province}
              </h2>
            </div>
            <a
              href={osmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              Abrir en OpenStreetMap →
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <iframe
              src={osmEmbedUrl}
              title="Mapa de ubicación de Panelex"
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  Icon,
  iconClass = "text-[var(--color-primary)]",
  title,
  primary,
  secondary,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  iconClass?: string;
  title: string;
  primary: React.ReactNode;
  secondary?: string;
}) {
  return (
    <article className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5">
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClass}`} />
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
          {title}
        </p>
        <div className="mt-1 break-words font-semibold text-[var(--color-text)]">
          {primary}
        </div>
        {secondary && (
          <p className="mt-1 text-xs text-[var(--color-muted)]">{secondary}</p>
        )}
      </div>
    </article>
  );
}

function buildOsmEmbed(lat: number, lng: number): string {
  const dx = 0.005;
  const dy = 0.003;
  const bbox = `${lng - dx},${lat - dy},${lng + dx},${lat + dy}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}
