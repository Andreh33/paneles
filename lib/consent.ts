/**
 * Gestor de consentimiento de cookies (propio, sin terceros).
 *
 * - Persistencia: localStorage con TTL de 6 meses (§9.1).
 * - Categorías:
 *    · necessary: siempre activas, no consentibles.
 *    · analytics: opt-in (Plausible/Umami se activa solo si el usuario acepta).
 *
 * El banner espera la elección antes de cargar cualquier script analítico
 * (aunque Plausible es cookieless, somos conservadores).
 */
"use client";

import { create } from "zustand";

export type ConsentCategory = "analytics";

export interface ConsentState {
  /** Cuándo se registró la decisión (timestamp ms). null = sin decisión todavía. */
  decidedAt: number | null;
  analytics: boolean;
}

export const CONSENT_KEY = "panelex_consent_v1";
export const CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 30 * 6; // ~6 meses

function read(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed.decidedAt) return null;
    // Caducidad de 6 meses → pedir de nuevo
    if (Date.now() - parsed.decidedAt > CONSENT_TTL_MS) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function write(s: ConsentState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(s));
  } catch {
    /* noop */
  }
}

interface Store {
  /** Estado actual (null = aún no se decidió o caducó). */
  state: ConsentState | null;
  /** Banner visible (solo cuando state === null). */
  bannerVisible: boolean;
  /** Modal de "Configurar" visible. */
  prefsOpen: boolean;
  hydrate: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (prefs: { analytics: boolean }) => void;
  openPrefs: () => void;
  closePrefs: () => void;
}

export const useConsent = create<Store>((set, get) => ({
  state: null,
  bannerVisible: false,
  prefsOpen: false,

  hydrate: () => {
    const existing = read();
    set({
      state: existing,
      bannerVisible: existing === null,
    });
  },

  acceptAll: () => {
    const next: ConsentState = { decidedAt: Date.now(), analytics: true };
    write(next);
    set({ state: next, bannerVisible: false, prefsOpen: false });
  },

  rejectAll: () => {
    const next: ConsentState = { decidedAt: Date.now(), analytics: false };
    write(next);
    set({ state: next, bannerVisible: false, prefsOpen: false });
  },

  save: ({ analytics }) => {
    const next: ConsentState = { decidedAt: Date.now(), analytics };
    write(next);
    set({ state: next, bannerVisible: false, prefsOpen: false });
  },

  openPrefs: () => set({ prefsOpen: true }),
  closePrefs: () => set({ prefsOpen: false, bannerVisible: get().state === null }),
}));
