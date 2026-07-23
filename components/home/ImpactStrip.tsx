"use client";

import Link from "next/link";
import KenyaMap from "@/components/KenyaMap";
import { useLang } from "@/lib/i18n";
import { LIVE_COUNTIES, REGION_OF_COUNTY } from "@/lib/data";

function regionsLive(): [string, string[]][] {
  const byRegion: Record<string, string[]> = {};
  LIVE_COUNTIES.forEach((county) => {
    const region = REGION_OF_COUNTY[county] ?? "Other";
    (byRegion[region] ||= []).push(county);
  });
  return Object.entries(byRegion);
}

export default function ImpactStrip() {
  const { t } = useLang();
  const regions = regionsLive();

  return (
    <section style={{ padding: "clamp(36px, 7vw, 56px) clamp(20px, 4vw, 32px) 8px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{
          padding: "clamp(24px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(28px, 5vw, 56px)",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ maxWidth: 440, margin: "0 auto" }}>
            <KenyaMap />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 18 }}>
            <span className="live-dot" style={{ flexShrink: 0 }}></span>
            <span style={{ font: '500 13.5px/1.4 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              {t("pulse.latest")}
            </span>
          </div>
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

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {regions.map(([region, counties]) => (
              <div key={region} style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span style={{ font: '700 13.5px/1 var(--font-inter-tight), sans-serif', color: "var(--blue-hover)", minWidth: 90 }}>
                  {region}
                </span>
                <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {counties.map((c) => (
                    <span
                      key={c}
                      className="tag-pill"
                      style={{ padding: "4px 11px", fontSize: 11.5, borderColor: "rgba(29,63,161,0.4)" }}
                    >
                      {c}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <Link href="/clubs" className="gold" style={{ font: '600 14.5px/1 var(--font-inter-tight), sans-serif' }}>
            {t("pulse.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
