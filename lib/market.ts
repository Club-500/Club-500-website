"use client";

import { useEffect, useState } from "react";
import { ODDS } from "@/lib/content";

export type PickVal = "1" | "X" | "2";
export type Picks = Record<number, PickVal | undefined>;

const PICKS_KEY = "c500-picks";
const LOCK_KEY = "c500-picks-locked";

export function loadPicks(): Picks {
  try {
    return JSON.parse(localStorage.getItem(PICKS_KEY) || "{}");
  } catch {
    return {};
  }
}

export function savePicks(p: Picks) {
  try {
    localStorage.setItem(PICKS_KEY, JSON.stringify(p));
  } catch {}
}

export function loadLocked(): boolean {
  try {
    return localStorage.getItem(LOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function saveLocked(v: boolean) {
  try {
    if (v) localStorage.setItem(LOCK_KEY, "1");
    else localStorage.removeItem(LOCK_KEY);
  } catch {}
}

/** Simulated live market: odds drift a little every few seconds and flash. */
export function useLiveOdds() {
  const [odds, setOdds] = useState<number[][]>(() => ODDS.map((r) => [...r]));
  const [flash, setFlash] = useState<{ i: number; j: number; up: boolean } | null>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const iv = setInterval(() => {
      const i = Math.floor(Math.random() * ODDS.length);
      const j = Math.floor(Math.random() * 3);
      const up = Math.random() > 0.5;
      setOdds((prev) => {
        const next = prev.map((r) => [...r]);
        const base = ODDS[i][j];
        const moved = next[i][j] + (up ? 1 : -1) * (0.02 + Math.random() * 0.06);
        next[i][j] = Math.round(Math.min(base + 0.4, Math.max(base - 0.4, Math.max(1.1, moved))) * 100) / 100;
        return next;
      });
      setFlash({ i, j, up });
      const t = setTimeout(() => setFlash(null), 850);
      return () => clearTimeout(t);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  return { odds, flash };
}
