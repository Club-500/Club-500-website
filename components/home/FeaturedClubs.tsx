"use client";

import Link from "next/link";
import { CLUBS, clubSlug } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import ClubCrest from "@/components/ClubCrest";

export default function FeaturedClubs() {
  const { t } = useLang();
  return (
    <section style={{ padding: "20px clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="rv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div className="mono-label" style={{ marginBottom: 8 }}>
            {t("featured.lead")}
          </div>
          <h2 className="display" style={{ margin: 0 }}>
            {t("featured.title1")} <span className="gold">{t("featured.title2")}</span>
          </h2>
        </div>
        <Link href="/clubs" className="tag-pill">
          {t("featured.all")}
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 12,
        }}
      >
        {CLUBS.slice(0, 5).map(([name, county, img], i) => (
          <a
            href={`/clubs/${clubSlug(name)}`}
            key={name}
            className={"club-card elite-card rv rv-d" + Math.min(i, 4)}
            style={{ display: "block", padding: 18, color: "var(--fg)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span className="crest-ring">
                <ClubCrest name={name} img={img} size="56px" eager />
              </span>
              <span style={{ font: '800 11px/1 var(--font-inter-tight), sans-serif', letterSpacing: "0.1em", color: "var(--gold)" }}>
                ★ FEATURED
              </span>
            </div>
            <div style={{ padding: "0 2px" }}>
              <div style={{ font: '700 15.5px/1.25 var(--font-inter-tight), sans-serif' }}>
                {name}
              </div>
              <div className="mono-label" style={{ marginTop: 6 }}>
                {county} county
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
