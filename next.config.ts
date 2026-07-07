import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Servimos directamente los WebP pre-optimizados desde /public.
    // Evita el optimizador de Vercel (HTTP 402 al superar cuota Hobby).
    unoptimized: true,
  },
  async redirects() {
    // Consolidación SEO: las guías locales del blog duplicaban la intención
    // de búsqueda de las páginas de zona. 301 para traspasar su señal.
    return [
      // www → apex con 308 permanente (Vercel sirve el subdominio no
      // configurado con un 307 temporal que no consolida señales SEO).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.panelexpanelsandwich.com" }],
        destination: "https://panelexpanelsandwich.com/:path*",
        permanent: true,
      },
      { source: "/sobre-nosotros/panel-sandwich-en-caceres", destination: "/panel-sandwich-caceres", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-en-merida", destination: "/panel-sandwich-merida", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-en-plasencia", destination: "/panel-sandwich-plasencia", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-en-don-benito-y-villanueva", destination: "/panel-sandwich-don-benito", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-en-madrid", destination: "/panel-sandwich-madrid", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-en-sevilla", destination: "/panel-sandwich-sevilla", permanent: true },
      { source: "/sobre-nosotros/panel-sandwich-extremadura-badajoz", destination: "/panel-sandwich-extremadura", permanent: true },
    ];
  },
};

export default nextConfig;
