"use client";

import Link from "next/link";
import KenyaMap from "@/components/KenyaMap";
import { useLang } from "@/lib/i18n";

export default function ImpactStrip() {
  const { t } = useLang();
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px) 8px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{
          padding: "clamp(22px, 3.5vw, 34px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(24px, 4vw, 48px)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "0 1 220px", minWidth: 170, margin: "0 auto" }}>
          <KenyaMap />
        </div>
        <div style={{ flex: "1 1 320px" }}>
          <h2
            style={{
              margin: 0,
              font: '800 clamp(1.5rem, 3vw, 2.2rem)/1.2 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.02em",
            }}
          >
            {t("pulse.h")}
          </h2>
          <p
            style={{
              margin: "10px 0 14px",
              font: '400 16px/1.6 var(--font-inter-tight), sans-serif',
              color: "rgba(var(--tx),0.65)",
              maxWidth: 480,
            }}
          >
            {t("pulse.sub")}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
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
