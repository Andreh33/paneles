/**
 * Constantes de marca y configuración de sitio.
 * Centralizado aquí para no repetir literales por toda la app.
 */

export const SITE = {
  name: "Panelex",
  legalName: "Panelex S.L.",
  tagline:
    "Fabricantes de panel sándwich y chapa perfilada en Extremadura.",
  url: "https://panelexpanelsandwich.com",
  defaultLocale: "es-ES",
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
    /** Teléfono fijo de oficina */
    phoneOffice: "+34 602 460 202",
    email: "info@panelex.es",
    salesContact: {
      name: "Ramón Romero Fernández",
      role: "Atención comercial",
    },
    hours: "Lunes a viernes · 9:00 – 14:00 · Tardes cerradas",
  },
  social: {
    /** Página histórica de la empresa (misma cuenta que la antigua web Wix). */
    facebook: "https://www.facebook.com/infopanelex",
    linkedin: "",
    instagram: "",
  },
} as const;

export const NAV_LINKS = [
  { href: "/productos", label: "Productos" },
  { href: "/panel-sandwich-extremadura", label: "Extremadura" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Landings geográficas (clúster provincial). Enlazadas en el footer de todo
 *  el sitio para dar equidad de enlace a Badajoz y Cáceres. */
export const ZONE_LINKS = [
  { href: "/panel-sandwich-extremadura", label: "Extremadura" },
  { href: "/panel-sandwich-badajoz", label: "Badajoz" },
  { href: "/panel-sandwich-caceres", label: "Cáceres" },
  { href: "/panel-sandwich-merida", label: "Mérida" },
  { href: "/panel-sandwich-don-benito", label: "Don Benito" },
  { href: "/panel-sandwich-plasencia", label: "Plasencia" },
  { href: "/panel-sandwich-madrid", label: "Madrid" },
  { href: "/panel-sandwich-sevilla", label: "Sevilla" },
] as const;

export const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/politica-cookies", label: "Política de cookies" },
  { href: "/terminos", label: "Términos y condiciones" },
] as const;
