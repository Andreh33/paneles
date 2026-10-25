import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClickTracker } from "@/components/ClickTracker";
import "@/app/globals.css";

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

export function SiteDocument({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "es" | "pt-PT";
}) {
  return (
    <html
      lang={lang}
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <ClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
