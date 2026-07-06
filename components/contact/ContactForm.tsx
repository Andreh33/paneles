"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { track } from "@vercel/analytics";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "ok"; delivered: boolean }
  | { kind: "error"; msg: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactPayload) {
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setStatus({
          kind: "error",
          msg: "No hemos podido enviar tu mensaje. Inténtalo por WhatsApp o teléfono.",
        });
        return;
      }
      const json = (await res.json()) as { delivered: boolean };
      track("lead_submit", { site: "panelex", delivered: json.delivered });
      setStatus({ kind: "ok", delivered: json.delivered });
    } catch {
      setStatus({
        kind: "error",
        msg: "Error de red. Inténtalo por WhatsApp o teléfono.",
      });
    }
  }

  if (status.kind === "ok") {
    return <SuccessState delivered={status.delivered} values={getValues()} />;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-8"
    >
      {/* Honeypot oculto */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("website")}
        className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" error={errors.nombre?.message}>
          <input
            {...register("nombre")}
            type="text"
            autoComplete="name"
            placeholder="Tu nombre o empresa"
            className="contact-input"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className="contact-input"
          />
        </Field>
      </div>

      <Field label="Teléfono" error={errors.telefono?.message}>
        <input
          {...register("telefono")}
          type="tel"
          autoComplete="tel"
          placeholder="+34 600 000 000"
          className="contact-input"
        />
      </Field>

      <Field label="Mensaje" error={errors.mensaje?.message}>
        <textarea
          {...register("mensaje")}
          rows={5}
          placeholder="Cuéntanos brevemente qué necesitas: tipo de obra, m², plazos..."
          className="contact-input"
        />
      </Field>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm">
        <input
          type="checkbox"
          {...register("acceptPrivacy")}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
        />
        <span className="text-[var(--color-text)]">
          He leído y acepto la{" "}
          <a
            href="/politica-privacidad"
            className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            política de privacidad
          </a>
          . Mis datos serán tratados por Panelex S.L. con la finalidad de
          responder a mi consulta.
        </span>
      </label>
      {errors.acceptPrivacy && (
        <p className="-mt-3 flex items-center gap-1.5 text-xs text-[var(--color-accent-deep)]">
          <AlertCircle className="h-3 w-3" />
          {errors.acceptPrivacy.message}
        </p>
      )}

      {status.kind === "error" && (
        <div className="flex items-start gap-3 rounded-2xl bg-[var(--color-accent)]/10 p-4 text-sm text-[var(--color-accent-deep)]">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{status.msg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-primary-deep)] disabled:opacity-60 md:w-auto"
      >
        {status.kind === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar consulta
          </>
        )}
      </button>

      <style>{`
        .contact-input {
          width: 100%;
          border: 1px solid var(--color-border);
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: var(--color-text);
          font-family: inherit;
        }
        .contact-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent);
        }
        .contact-input::placeholder {
          color: var(--color-muted);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-[var(--color-text)]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs text-[var(--color-accent-deep)]">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}

function SuccessState({
  delivered,
  values,
}: {
  delivered: boolean;
  values: ContactPayload;
}) {
  // Si el backend no pudo enviar el email, ofrecemos canales alternativos
  // con el mensaje del usuario pre-rellenado.
  const fallbackMessage = [
    "Hola Panelex,",
    "",
    `Os escribo desde panelexpanelsandwich.com.`,
    `Nombre: ${values.nombre}`,
    `Email: ${values.email}`,
    `Teléfono: ${values.telefono}`,
    "",
    `Mensaje:`,
    values.mensaje,
  ].join("\n");

  const mailtoHref = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    `Consulta desde panelexpanelsandwich.com — ${values.nombre}`
  )}&body=${encodeURIComponent(fallbackMessage)}`;
  const whatsappHref = buildWhatsAppUrl(fallbackMessage);

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-8 text-center md:p-12">
      <CheckCircle2 className="mx-auto h-12 w-12 text-[#16a34a]" />
      <h2 className="mt-4 font-display text-3xl font-semibold">
        {delivered ? "¡Gracias por escribirnos!" : "Mensaje preparado"}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[var(--color-muted)]">
        {delivered
          ? "Hemos recibido tu consulta. Ramón te responderá en horas hábiles."
          : "Aún no tenemos configurado el envío automático. Puedes hacérnoslo llegar por WhatsApp o email — tu mensaje ya viene relleno."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {!delivered && (
          <>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
            >
              Enviar por WhatsApp
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-primary)]"
            >
              Abrir cliente de email
            </a>
          </>
        )}
      </div>
    </div>
  );
}
