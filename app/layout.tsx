import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

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
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Panelex",
    url: "https://panelexpanelsandwich.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panelex — Fabricantes de panel sándwich en Extremadura",
    description:
      "Fabricación propia de paneles sándwich y chapa perfilada. Venta directa de fábrica a toda España y Portugal.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
