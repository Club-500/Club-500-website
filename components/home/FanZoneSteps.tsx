"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function FanZoneSteps() {
  const { t } = useLang();
  return (
    <section
      style={{
        padding: "clamp(40px, 7vw, 64px) clamp(20px, 4vw, 32px)",
        background: "var(--blue)",
        borderRadius: "36px 36px 0 0",
        marginTop: 24,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div
          className="rv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="mono-label" style={{ color: "rgba(255,255,255,0.65)" }}>
              {t("fz.eyebrow")}
            </span>
            <h2
              className="mega"
              style={{ margin: "10px 0 0", fontSize: "clamp(2rem, 4.6vw, 3.6rem)", color: "#fff" }}
            >
              {t("fz.title1")} <span className="gold">{t("fz.title2")}</span> {t("fz.title3")}
            </h2>
          </div>
          <Link href="/fanzone">
            <button
              className="pill-btn"
              type="button"
              style={{ background: "var(--gold)", color: "#141310" }}
            >
              <span className="txt">{t("fz.open")}</span>
              <span className="circ" style={{ background: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#141310"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        <p
          className="rv rv-d1"
          style={{
            margin: 0,
            maxWidth: 640,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {t("fz.body")}
        </p>
      </div>
    </section>
  );
}
