"use client";

import { useEffect, useRef } from "react";

const POSTER = "/hero/operario-cubierta.webp";

/**
 * Fondo del hero: vídeo en bucle de obra real (Panelex) con la foto del
 * operario como póster/fallback mientras carga.
 */
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React no siempre refleja el atributo `muted` como propiedad del DOM, y sin
  // la propiedad muted el navegador bloquea el autoplay. Lo forzamos por ref y
  // pedimos play() explícitamente (ignorando el rechazo: queda el póster).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const play = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    if (v.readyState >= 2) play();
    else v.addEventListener("canplay", play, { once: true });
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      aria-hidden
    >
      <source src="/hero/panelex.webm" type="video/webm" />
      <source src="/hero/panelex.mp4" type="video/mp4" />
    </video>
  );
}
