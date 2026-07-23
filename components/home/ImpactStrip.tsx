"use client";

import Link from "next/link";
import KenyaMap from "@/components/KenyaMap";
import { useLang } from "@/lib/i18n";

/* Clubs onboarded, month over month, since launch. */
const GROWTH: [string, number][] = [
  ["Feb", 6],
  ["Mar", 11],
  ["Apr", 16],
  ["May", 21],
  ["Jun", 27],
  ["Jul", 33],
];

function GrowthChart() {
  const w = 320;
  const h = 120;
  const padX = 8;
  const padY = 14;
  const max = Math.max(...GROWTH.map(([, v]) => v));
  const step = (w - padX * 2) / (GROWTH.length - 1);
  const pts = GROWTH.map(([, v], i) => {
    const x = padX + i * step;
    const y = padY + (1 - v / max) * (h - padY * 2);
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const area = `${line} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#growthFill)" />
      <path d={line} fill="none" stroke="var(--blue-hover)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 4.5 : 2.6} fill={i === pts.length - 1 ? "var(--gold)" : "var(--blue-hover)"} />
      ))}
      {GROWTH.map(([label], i) => (
        <text key={label} x={pts[i][0]} y={h - 1} textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(var(--tx),0.45)">
          {label}
        </text>
      ))}
      <text x={pts[pts.length - 1][0]} y={pts[pts.length - 1][1] - 12} textAnchor="end" fontSize="15" fontWeight="800" fill="var(--gold)">
        {GROWTH[GROWTH.length - 1][1]}
      </text>
    </svg>
  );
}

export default function ImpactStrip() {
  const { t } = useLang();

  return (
    <section style={{ padding: "clamp(36px, 7vw, 56px) clamp(20px, 4vw, 32px) 8px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{
          padding: "clamp(24px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(24px, 4vw, 44px)",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 360, margin: "0 auto", width: "100%" }}>
          <KenyaMap />
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              font: '800 clamp(1.6rem, 3.4vw, 2.6rem)/1.15 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.02em",
            }}
          >
            {t("pulse.h")}
          </h2>
          <p
            style={{
              margin: "10px 0 22px",
              font: '400 16px/1.6 var(--font-inter-tight), sans-serif',
              color: "rgba(var(--tx),0.65)",
              maxWidth: 480,
            }}
          >
            {t("pulse.sub")}
          </p>

          <div style={{ marginBottom: 20 }}>
            <div className="mono-label" style={{ marginBottom: 8 }}>Clubs onboarded this season</div>
            <GrowthChart />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span className="live-dot" style={{ flexShrink: 0 }}></span>
            <span style={{ font: '500 13.5px/1.4 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              {t("pulse.latest")}
            </span>
          </div>

          <Link href="/clubs" className="gold" style={{ font: '600 14.5px/1 var(--font-inter-tight), sans-serif' }}>
            {t("pulse.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
