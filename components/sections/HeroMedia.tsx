"use client";

import { useEffect, useRef } from "react";

const POSTER = "/hero/operario-cubierta.webp";

/**
 * Fondo del hero: vídeo en bucle de obra real (Panelex) sobre una foto fija.
 *
 * La foto va en un <img> propio (no en el atributo poster del vídeo): el
 * póster de un <video preload="none"> se pinta tarde en Chrome (el LCP móvil
 * marcaba ~2,3 s de element render delay), mientras que un <img> con
 * fetchpriority alta se pinta en cuanto llega. El vídeo queda encima con
 * opacity 0 y solo aparece cuando de verdad está reproduciendo (escritorio).
 */
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React no siempre refleja el atributo `muted` como propiedad del DOM, y sin
  // la propiedad muted el navegador bloquea el autoplay. Lo forzamos por ref y
  // pedimos play() explícitamente (ignorando el rechazo: queda la foto).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // En móvil no descargamos el vídeo de fondo: nos quedamos con la foto.
    // Así el vídeo no compite por ancho de banda con el LCP en pantallas
    // pequeñas (Googlebot indexa en mobile-first). En escritorio sí se carga.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    v.muted = true;
    v.defaultMuted = true;
    const play = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          v.style.opacity = "1";
        }).catch(() => {});
      } else {
        v.style.opacity = "1";
      }
    };
    v.preload = "auto";
    v.load();
    if (v.readyState >= 2) play();
    else v.addEventListener("canplay", play, { once: true });
  }, []);

  return (
    <>
      {/* Foto fija: es el LCP en móvil. Se pinta nada más llegar (preload +
          fetchpriority en Hero.tsx), sin esperar al pipeline del vídeo. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- estático pre-optimizado, sin optimizador de Vercel */}
      <img
        src={POSTER}
        alt="Operario de Panelex instalando panel sándwich de cubierta en una nave"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-700"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
      >
        <source src="/hero/panelex.webm" type="video/webm" />
        <source src="/hero/panelex.mp4" type="video/mp4" />
      </video>
    </>
  );
}
