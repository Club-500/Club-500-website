"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import KenyaMap from "@/components/KenyaMap";
import ClubCrest from "@/components/ClubCrest";
import { CLUBS, REGION_OF_COUNTY } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function ImpactStrip() {
  const { t } = useLang();
  const [i, setI] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setI((p) => (p + 1) % CLUBS.length), 3200);
    return () => clearInterval(iv);
  }, []);

  const [name, county, img] = CLUBS[i];
  const region = REGION_OF_COUNTY[county] ?? "";

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
          <KenyaMap highlight={county} />
          <div className="mono-label" style={{ textAlign: "center", marginTop: 12 }}>
            <span className="gold">◆</span> {county} — home of {name} · hover any county to explore
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

          <div className="mono-label" style={{ marginBottom: 10 }}>
            <span className="live-dot" style={{ marginRight: 8, display: "inline-block", verticalAlign: "middle" }}></span>
            Live on the platform
          </div>
          <div
            key={name}
            className="spotlight-in"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: "1px solid rgba(58,95,217,0.35)",
              background: "rgba(58,95,217,0.07)",
              borderRadius: 16,
              padding: "14px 18px",
              marginBottom: 14,
              maxWidth: 480,
            }}
          >
            <ClubCrest name={name} img={img} size="56px" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: '700 16px/1.25 var(--font-inter-tight), sans-serif' }}>{name}</div>
              <div className="mono-label" style={{ marginTop: 4 }}>
                {county} county{region ? ` · ${region}` : ""}
              </div>
            </div>
            <span className="mono-label" style={{ flexShrink: 0 }}>
              {i + 1}/{CLUBS.length}
            </span>
          </div>

          <div style={{ display: "flex", gap: 5, marginBottom: 20, maxWidth: 480 }}>
            {CLUBS.map(([n], k) => (
              <span
                key={n}
                style={{
                  flex: 1,
                  height: 3,
                  borderRadius: 2,
                  background: k === i ? "var(--gold)" : "rgba(var(--tx),0.15)",
                  transition: "background .3s",
                }}
              />
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
