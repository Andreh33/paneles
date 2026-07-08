import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  MapPin,
  Phone,
  Ruler,
  Truck,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { breadcrumbLd, faqLd, localBusinessLd, serviceLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/jsonld";

/**
 * Espesor / transmitancia / uso — datos del catálogo (misma referencia que la
 * home y la guía «Qué espesor de panel elegir»). Tabla de 3 columnas citable
 * por IA y pensada para el featured snippet, común a todas las zonas.
 */
const ESPESOR_ROWS: Array<[string, string, string]> = [
  ["30 mm", "≈ 0,71", "Cobertizos y porches sin climatizar"],
  ["40–50 mm", "≈ 0,55–0,43", "El estándar de nave agrícola e industrial"],
  ["60–80 mm", "≈ 0,37–0,28", "Vivienda y edificios climatizados"],
  ["100 mm", "≈ 0,22", "Cámaras e industria agroalimentaria"],
];

/**
 * Landing geográfica reutilizable (provincia/zona). Misma estructura y schema
 * que la landing de Extremadura, parametrizada por contenido local único para
 * evitar contenido duplicado. Cada página de zona aporta sus propios datos.
 */
export interface ZoneLandingData {
  /** Nombre de la zona, p.ej. "Badajoz" */
  zone: string;
  /** Ruta canónica, p.ej. "/panel-sandwich-badajoz" */
  canonical: string;
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroLead: string;
  whyHeading: string;
  /** Respuesta directa 40-60 palabras (answer-first, citable por IA). */
  quickAnswer?: string;
  intro: string[];
  zonesIntro: string;
  zones: { label: string; href?: string }[];
  appsHeading: string;
  apps: string[];
  pricingHeading: string;
  pricing: string[];
  faqs: FaqItem[];
  /** Enlaces a guías y páginas relacionadas (interlinking del clúster). */
  related: { label: string; href: string }[];
}

const BENEFITS = [
  {
    Icon: Wallet,
    title: "Precio de fábrica",
    body: "Sin intermediarios ni márgenes de reventa. El panel sale directo de la línea de producción a tu obra.",
  },
  {
    Icon: Ruler,
    title: "Corte a medida",
    body: "Cada panel a la longitud exacta de tu faldón, sin mermas ni cortes en obra.",
  },
  {
    Icon: Truck,
    title: "Transporte organizado",
    body: "Llevamos el material a tu obra con el porte cerrado dentro del presupuesto.",
  },
  {
    Icon: Factory,
    title: "Hablas con fábrica",
    body: "Asesoramiento técnico real de quien produce el panel, no de un revendedor.",
  },
];

const PRODUCTS = [
  { title: "Panel sándwich de cubierta", href: "/productos/panel-cubierta-gris" },
  { title: "Panel imitación teja Fertelha", href: "/productos/fertelha-terracota" },
  { title: "Panel sándwich de fachada", href: "/productos/panel-fachada-nervada" },
  { title: "Policarbonato y accesorios", href: "/productos/policarbonato-celular" },
];

export function ZoneLanding({ data }: { data: ZoneLandingData }) {
  return (
    <>
      <JsonLd
        data={[
          localBusinessLd({
            extraAreaServed: [`${data.zone} y comarca`],
          }),
          serviceLd({
            name: `Panel sándwich en ${data.zone}`,
            description: data.heroLead,
            path: data.canonical,
            areaName: data.zone,
          }),
          faqLd(data.faqs),
          breadcrumbLd([
            { label: "Inicio", path: "/" },
            { label: `Panel sándwich en ${data.zone}`, path: data.canonical },
          ]),
        ]}
      />

      {/* Breadcrumb visible (coincide con el BreadcrumbList del JSON-LD) */}
      <nav
        aria-label="Migas de pan"
        className="bg-[var(--color-bg-warm)] text-white/60"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 pt-6 text-xs md:px-8">
          <li>
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li aria-current="page" className="font-semibold text-white/90">
            Panel sándwich en {data.zone}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--color-bg-warm)] text-[var(--color-text-inverse)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            {data.heroKicker}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            {data.heroTitleA}
            <br />
            <span className="text-white/60">{data.heroTitleB}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">{data.heroLead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Pedir presupuesto
            </a>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué fábrica local */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Fábrica directa
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {data.whyHeading}
            </h2>
            {data.quickAnswer && (
              <QuickAnswer className="mt-8">{data.quickAnswer}</QuickAnswer>
            )}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 leading-relaxed text-[var(--color-text)]">
              {data.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <article
                  key={b.title}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                  <b.Icon className="h-7 w-7 text-[var(--color-primary)]" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zonas / comarcas */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Dónde servimos
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Panel sándwich en {data.zone} y su provincia.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)]">{data.zonesIntro}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {data.zones.map((z) =>
              z.href ? (
                <Link
                  key={z.label}
                  href={z.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                  {z.label}
                </Link>
              ) : (
                <span
                  key={z.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                  {z.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Aplicaciones + precio */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {data.appsHeading}
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-[var(--color-text)]">
                {data.apps.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {data.pricingHeading}
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-[var(--color-text)]">
                {data.pricing.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Tabla citable: qué espesor elegir (datos reales del catálogo) */}
          <div className="mt-12 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-left font-display text-sm font-semibold">
                Qué espesor de panel sándwich elegir para tu obra en {data.zone}{" "}
                (núcleo de poliuretano)
              </caption>
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th scope="col" className="px-4 py-3 font-semibold">Espesor</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Transmitancia U (W/m²·K)</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Uso recomendado</th>
                </tr>
              </thead>
              <tbody>
                {ESPESOR_ROWS.map((r) => (
                  <tr key={r[0]} className="border-b border-[var(--color-border)] last:border-0">
                    <th scope="row" className="px-4 py-3 font-semibold">{r[0]}</th>
                    <td className="px-4 py-3">{r[1]}</td>
                    <td className="px-4 py-3">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Qué fabricamos */}
          <div className="mt-14 border-t border-[var(--color-border)] pt-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Qué fabricamos
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-semibold transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {p.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enlaces relacionados (interlinking del clúster) */}
      {data.related.length > 0 && (
        <section className="bg-[var(--color-surface)]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Sigue leyendo
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white p-5 text-sm font-semibold transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {r.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Panel sándwich en {data.zone}: dudas habituales.
          </h2>
          <div className="mt-10 space-y-4">
            {data.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 open:bg-white"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[var(--color-primary-deep)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            ¿Tienes una obra en {data.zone}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Pásanos las medidas y te preparamos un presupuesto cerrado, con corte
            a medida y transporte a tu obra, directo de fábrica desde Puebla de la
            Calzada (Badajoz).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Pedir presupuesto
            </a>
            <a
              href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
