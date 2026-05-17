"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  /** Valor numérico final */
  value: number;
  /** Sufijo a mostrar tras el número (ej. "+", "k+", " km") */
  suffix?: string;
  /** Prefijo opcional */
  prefix?: string;
  label: string;
}

interface Props {
  stats?: Stat[];
}

/**
 * Strip de stats con contador animado al entrar en viewport.
 * Si el usuario tiene prefers-reduced-motion, muestra el valor final sin animar.
 */
export function StatsStrip({
  stats = DEFAULT_STATS,
}: Props) {
  return (
    <div className="relative border-y border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <StatCell key={s.label} stat={s} />
        ))}
      </div>
    </div>
  );
}

const DEFAULT_STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Años fabricando" },
  { value: 500, suffix: "k m²", label: "Fabricados" },
  { value: 800, suffix: "+", label: "Proyectos entregados" },
  { value: 600, suffix: " km", label: "Radio de entrega" },
];

function StatCell({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setDisplayed(stat.value);
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated) {
          setAnimated(true);
          animateValue(stat.value, setDisplayed);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value, animated]);

  return (
    <div ref={ref} className="px-4 py-6 md:px-8 md:py-10">
      <p className="font-display text-3xl font-semibold tabular-nums md:text-5xl">
        {stat.prefix}
        {displayed}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-white/50 md:text-sm">
        {stat.label}
      </p>
    </div>
  );
}

function animateValue(target: number, set: (n: number) => void) {
  const duration = 1400; // ms
  const start = performance.now();

  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    set(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
