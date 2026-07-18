"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function TeaserRow() {
  const { t } = useLang();
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 14,
        }}
      >
        <div
          className="glass rv"
          style={{ padding: "clamp(24px, 3.5vw, 36px)", display: "flex", flexDirection: "column", gap: 12, borderTop: "3px solid #1B5E3C" }}
        >
          <span className="mono-label">{t("teaser.vol.head")}</span>
          <h2 className="display" style={{ margin: 0 }}>{t("teaser.vol.title")}</h2>
          <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)", flex: 1 }}>
            {t("teaser.vol.body")}
          </p>
          <Link href="/volunteer" className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>
            {t("teaser.vol.cta")}
          </Link>
        </div>
        <div
          className="glass rv rv-d1"
          style={{ padding: "clamp(24px, 3.5vw, 36px)", display: "flex", flexDirection: "column", gap: 12, borderTop: "3px solid #C98A00" }}
        >
          <span className="mono-label">{t("teaser.par.head")}</span>
          <h2 className="display" style={{ margin: 0 }}>{t("teaser.par.title")}</h2>
          <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)", flex: 1 }}>
            {t("teaser.par.body")}
          </p>
          <Link href="/partners" className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>
            {t("teaser.par.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
