/**
 * Constantes de marca y configuración de sitio.
 * Centralizado aquí para no repetir literales por toda la app.
 */

export const SITE = {
  name: "Panelex",
  legalName: "Panelex S.L.",
  tagline:
    "Fabricantes de panel sándwich y chapa perfilada en Extremadura.",
  url: "https://panelex.es",
  defaultLocale: "es-ES",
  /** CIF placeholder — pendiente de validar con cliente (TODO_CLIENTE.md) */
  cif: "B-XXXXXXXXX",
  address: {
    street: "Avenida Carmen Amigo, 62",
    postalCode: "06490",
    city: "Puebla de la Calzada",
    province: "Badajoz",
    country: "España",
    /** Coordenadas aprox. de Puebla de la Calzada (validar) */
    geo: { lat: 38.8869, lng: -6.6306 },
  },
  contact: {
    phone: "+34 678 978 111",
    /** Mismo número en formato wa.me (sin +, sin espacios) */
    whatsapp: "34678978111",
    email: "info@panelex.es",
    salesContact: {
      name: "Ramón Romero Fernández",
      role: "Atención comercial",
    },
    hours: "Lunes a viernes · 8:00 – 18:00",
  },
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

export const NAV_LINKS = [
  { href: "/productos", label: "Productos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/descargas", label: "Descargas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/politica-cookies", label: "Política de cookies" },
  { href: "/terminos", label: "Términos y condiciones" },
] as const;
