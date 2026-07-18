"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function StoriesTeaser() {
  const { t } = useLang();
  const ITEMS: [string, string, string, string][] = [
    [t("nav.newsroom"), t("st.news.desc"), "/newsroom", t("st.news.cta")],
    [t("nav.events"), t("st.events.desc"), "/events", t("st.events.cta")],
    [t("nav.podcast"), t("st.pod.desc"), "/podcast", t("st.pod.cta")],
  ];
  return (
    <section style={{ padding: "32px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
      <h2 className="display rv" style={{ margin: "0 0 24px" }}>
        {t("st.title1")} <span className="gold">{t("st.title2")}</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 14,
        }}
      >
        {ITEMS.map(([title, desc, href, cta], i) => (
          <Link
            key={title}
            href={href}
            className={"glass club-card rv rv-d" + i}
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, color: "var(--fg)" }}
          >
            <div style={{ font: '600 19px/1.2 var(--font-inter-tight), sans-serif' }}>{title}</div>
            <p style={{ margin: 0, font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", flex: 1 }}>
              {desc}
            </p>
            <span className="gold" style={{ font: '600 14px/1 var(--font-inter-tight), sans-serif' }}>
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
