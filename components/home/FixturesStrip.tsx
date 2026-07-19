"use client";

import Link from "next/link";
import { FIXTURES } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function FixturesStrip() {
  const { t } = useLang();
  return (
    <section
      style={{
        borderBottom: "1px solid rgba(var(--tx),0.08)",
        padding: "14px clamp(20px, 4vw, 32px)",
      }}
    >
      <div
        className="no-scrollbar"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 18,
          overflowX: "auto",
        }}
      >
        <span
          className="mono-label"
          style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <span className="live-dot"></span>
          {t("fixtures.title")}
        </span>
        {FIXTURES.map(([when, home, away]) => (
          <span
            key={home}
            style={{
              flexShrink: 0,
              font: '500 13.5px/1 var(--font-inter-tight), sans-serif',
              color: "rgba(var(--tx),0.75)",
              whiteSpace: "nowrap",
            }}
          >
            {home} <span style={{ color: "rgba(var(--tx),0.4)" }}>vs</span> {away}
            <span style={{ color: "rgba(var(--tx),0.45)", marginLeft: 8 }}>{when}</span>
          </span>
        ))}
        <Link
          href="/fanzone"
          className="gold"
          style={{ flexShrink: 0, font: '600 13.5px/1 var(--font-inter-tight), sans-serif', whiteSpace: "nowrap", marginLeft: "auto" }}
        >
          {t("fixtures.cta")} →
        </Link>
      </div>
    </section>
  );
}
