"use client";

import CountUp from "@/components/CountUp";
import { useLang } from "@/lib/i18n";

export default function ImpactStrip() {
  const { t } = useLang();
  const STATS: [number, string, string][] = [
    [500, "+", t("impact.clubs")],
    [47, "", t("impact.counties")],
    [8, "", t("impact.regions")],
    [5000, "+", t("impact.jobs")],
  ];
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px) 8px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="mono-label rv" style={{ marginBottom: 20 }}>
        {t("impact.lead")}
      </div>
      <div
        className="rv rv-d1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 14,
        }}
      >
        {STATS.map(([v, suffix, l]) => (
          <div
            key={l}
            className="glass"
            style={{ padding: "24px 22px", borderRadius: 18, borderTop: "3px solid #1B5E3C" }}
          >
            <div
              className="gold"
              style={{ font: '700 clamp(1.8rem, 3vw, 2.5rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}
            >
              <CountUp value={v} suffix={suffix} />
            </div>
            <div className="mono-label" style={{ marginTop: 10 }}>
              {l}
            </div>
          </div>
        ))}
      </div>
      <div
        className="rv rv-d2"
        style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}
      >
        <span className="live-dot" style={{ flexShrink: 0 }}></span>
        <span style={{ font: '500 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>
          {t("impact.latest")}
        </span>
      </div>
    </section>
  );
}
