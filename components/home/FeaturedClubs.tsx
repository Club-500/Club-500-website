"use client";

import Link from "next/link";
import { CLUBS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import ClubCrest from "@/components/ClubCrest";

export default function FeaturedClubs() {
  const { t } = useLang();
  return (
    <section style={{ padding: "24px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 14,
        }}
      >
        {CLUBS.slice(0, 5).map(([name, county, img, site], i) => (
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className={"club-card glass rv rv-d" + Math.min(i, 4)}
            style={{ display: "block", padding: 20, color: "var(--fg)" }}
          >
            <ClubCrest name={name} img={img} />
            <div style={{ padding: "14px 2px 0" }}>
              <div style={{ font: '600 15.5px/1.25 var(--font-inter-tight), sans-serif' }}>
                {name}
              </div>
              <div className="mono-label" style={{ marginTop: 6 }}>
                {county}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
