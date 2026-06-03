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
  metadataBase: new URL("https://panelex.es"),
  title: {
    default: "Panelex — Fabricantes de panel sándwich en Extremadura",
    template: "%s · Panelex",
  },
  description:
    "Fabricación propia de paneles sándwich y chapa perfilada para cubiertas y fachadas. Servicio en toda España y Portugal desde Puebla de la Calzada (Badajoz).",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Panelex",
  },
  robots: { index: true, follow: true },
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
