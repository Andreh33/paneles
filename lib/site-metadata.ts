import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://panelexpanelsandwich.com"),
  title: {
    default: "Panelex — Fabricantes de panel sándwich en Extremadura",
    template: "%s · Panelex",
  },
  description:
    "Fabricación propia de paneles sándwich y chapa perfilada para cubiertas y fachadas. Servicio en toda España y Portugal desde Puebla de la Calzada (Badajoz).",
  applicationName: "Panelex",
  keywords: [
    "panel sándwich",
    "panel sándwich precio",
    "panel sándwich imitación teja",
    "chapa perfilada",
    "panel sándwich Badajoz",
    "panel sándwich Extremadura",
    "fábrica panel sándwich",
    "panel cubierta",
    "panel fachada",
  ],
  authors: [{ name: "Panelex S.L.", url: "https://panelexpanelsandwich.com" }],
  creator: "Panelex S.L.",
  publisher: "Panelex S.L.",
  category: "construction",
  verification: { google: "MYnkIh7oPIaKaseBCNUH8-A0nIUX_7qxsapyGS7dhdI" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Panelex",
    url: "https://panelexpanelsandwich.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
