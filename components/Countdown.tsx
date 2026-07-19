"use client";

import { useEffect, useState } from "react";
import { LAUNCH } from "@/lib/content";

function parts(ms: number) {
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export default function Countdown() {
  const [left, setLeft] = useState<ReturnType<typeof parts>>(null);

  useEffect(() => {
    const target = new Date(LAUNCH.date).getTime();
    const tick = () => setLeft(parts(target - Date.now()));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  if (!left) return null;

  const cell = (v: number, l: string) => (
    <div key={l} style={{ textAlign: "center", minWidth: 56 }}>
      <div
        style={{
          font: '800 clamp(1.5rem, 3.4vw, 2.2rem)/1 var(--font-inter-tight), sans-serif',
          color: "#fff",
          background: "rgba(255,255,255,0.12)",
          borderRadius: 12,
          padding: "12px 6px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(v).padStart(2, "0")}
      </div>
      <div style={{ font: '600 10.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.65)", marginTop: 6, letterSpacing: "0.06em" }}>
        {l}
      </div>
    </div>
  );

  return (
    <div
      className="rv"
      style={{
        background: "#1B5E3C",
        borderRadius: 20,
        padding: "clamp(20px, 3vw, 28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 18,
        marginBottom: 14,
      }}
    >
      <div>
        <div className="mono-label" style={{ color: "rgba(255,255,255,0.65)" }}>Kick-off in</div>
        <div style={{ font: '700 clamp(1.1rem, 2.4vw, 1.5rem)/1.3 var(--font-inter-tight), sans-serif', color: "#fff", marginTop: 4 }}>
          {LAUNCH.label}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {cell(left.d, "DAYS")}
        {cell(left.h, "HRS")}
        {cell(left.m, "MIN")}
        {cell(left.s, "SEC")}
      </div>
    </div>
  );
}
