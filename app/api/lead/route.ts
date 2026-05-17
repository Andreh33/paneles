/**
 * POST /api/lead — recibe una solicitud del formulario de contacto.
 *
 * - Valida con Zod.
 * - Si hay RESEND_API_KEY, envía email a LEAD_DESTINATION_EMAIL.
 * - Si no, devuelve { delivered: false } para que el cliente muestre los
 *   canales alternativos (WhatsApp/mailto) sin perder el mensaje.
 *
 * Honeypot anti-spam: si `website` viene relleno, respondemos 200 sin enviar.
 */
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validación", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ delivered: false, reason: "spam" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.LEAD_DESTINATION_EMAIL ?? SITE.contact.email;
  const from = process.env.RESEND_FROM_EMAIL ?? "web@panelex.es";

  if (!apiKey) {
    // Modo fallback: el cliente verá los canales alternativos.
    console.info("[lead] sin RESEND_API_KEY, mensaje no entregado:", {
      nombre: parsed.data.nombre,
      email: parsed.data.email,
    });
    return NextResponse.json({ delivered: false, reason: "no-api-key" });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { nombre, email, telefono, mensaje } = parsed.data;

    await resend.emails.send({
      from,
      to: destination,
      replyTo: email,
      subject: `Nueva consulta desde panelex.es — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Teléfono: ${telefono}`,
        ``,
        `Mensaje:`,
        mensaje,
        ``,
        `—`,
        `Recibido desde panelex.es`,
      ].join("\n"),
    });

    return NextResponse.json({ delivered: true });
  } catch (err) {
    console.error("[lead] error enviando email:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el email" },
      { status: 502 }
    );
  }
}
