"use client";

import CountUp from "@/components/CountUp";
import { useLang } from "@/lib/i18n";

export default function ImpactStrip() {
  const { t } = useLang();
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px) 8px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{
          borderLeft: "3px solid #1B5E3C",
          padding: "clamp(22px, 3.5vw, 34px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "clamp(18px, 3vw, 40px)",
        }}
      >
        <div style={{ flex: "1 1 320px" }}>
          <div
            style={{
              font: '800 clamp(1.5rem, 3vw, 2.2rem)/1.2 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gold">
              <CountUp value={33} />
            </span>{" "}
            {t("impact.live")}
          </div>
          <div
            style={{
              marginTop: 8,
              font: '500 15px/1.5 var(--font-inter-tight), sans-serif',
              color: "rgba(var(--tx),0.6)",
            }}
          >
            {t("impact.detail")}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="live-dot" style={{ flexShrink: 0 }}></span>
          <span style={{ font: '500 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 340 }}>
            {t("impact.latest")}
          </span>
        </div>
      </div>
    </section>
  );
}
