"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const POSTER = "/hero/operario-cubierta.webp";

/**
 * Fondo del hero: vídeo en bucle de obra real (Panelex) con la foto del
 * operario como póster/fallback. Si el usuario prefiere menos movimiento
 * (prefers-reduced-motion) se muestra solo la foto, sin autoplay de vídeo.
 */
export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduceMotion) {
    return (
      <Image
        src={POSTER}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-[center_28%]"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={POSTER}
      aria-hidden
    >
      <source src="/hero/panelex.webm" type="video/webm" />
      <source src="/hero/panelex.mp4" type="video/mp4" />
    </video>
  );
}
