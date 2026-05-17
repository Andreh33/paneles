/**
 * Esquema del formulario de contacto.
 * Compartido entre cliente (RHF) y server (API route).
 */
import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "Indica tu nombre (mínimo 2 caracteres)")
    .max(120),
  email: z
    .string()
    .email("Email no válido"),
  telefono: z
    .string()
    .min(6, "Indica un teléfono de contacto")
    .max(40)
    .regex(/^[\d\s+()-]+$/, "Solo dígitos y los símbolos + ( ) -"),
  mensaje: z
    .string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(2000),
  acceptPrivacy: z
    .literal(true, { error: "Debes aceptar la política de privacidad" }),
  /** Honeypot anti-spam. Debe quedar vacío. */
  website: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
