"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import PartnerImpact from "@/components/partners/PartnerImpact";
import { useLang } from "@/lib/i18n";

const TIERS: [string, string, string, string][] = [
  ["National Sponsor", "All 500 clubs", "Brand visibility across all 500 clubs: national campaigns, the Launch Tour, national media.", "#cfd8e3"],
  ["Regional Sponsor", "1 of 8 regions", "Presence and activation across one of Kenya's 8 regions.", "#C98A00"],
  ["County Sponsor", "1 of 47 counties", "Local activation and visibility within a specific county.", "#a7a7a7"],
  ["Pillar Sponsor", "One focus area", "Funding tied to one focus area: girls' football, coaching education, or infrastructure.", "#2E9B63"],
];

export default function PartnersPage() {
  const { t } = useLang();
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="National · Regional · County · Pillar">
        {t("pp.h1a")} <span className="gold">{t("pp.h1b")}</span>.
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
        <p className="rv" style={{ margin: 0, maxWidth: 700, font: '400 clamp(1.2rem, 2vw, 1.6rem)/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.8)" }}>
          Four tiers, one inheritance system: sponsor a county and your brand automatically appears on every club microsite inside it. No per-club negotiation, ever.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {TIERS.map(([badge, reach, desc, color], i) => (
            <div key={badge} className={"glass club-card rv rv-d" + i} style={{ padding: 30, display: "flex", flexDirection: "column", gap: 16, borderTop: `3px solid ${color}` }}>
              <span className="tag-pill" style={{ alignSelf: "flex-start", borderColor: color, color }}>{badge}</span>
              <div style={{ font: '700 22px/1.2 var(--font-inter-tight), sans-serif' }}>{reach}</div>
              <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", flex: 1 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }} className="rv">
          {["National sponsor", "Regional sponsor", "County sponsor", "Pillar sponsor", "Your brand here"].map((l) => (
            <div key={l} style={{ border: "1.5px dashed rgba(var(--tx),0.25)", borderRadius: 16, height: 90, display: "flex", alignItems: "center", justifyContent: "center", padding: 12, textAlign: "center" }}>
              <span className="mono-label">{l}</span>
            </div>
          ))}
        </div>
        <PartnerImpact />

        {/* what club leaders say */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          {[
            ["Since joining Club500, we opened the club's first bank account and paid our players on time for a full season.", "Chairman, Kivumbini United FC", "Nakuru"],
            ["Sponsors used to be a dream for a club like ours. Now our county sponsor's banner hangs at every home game.", "Secretary, Kapkatet Youth FC", "Kericho"],
          ].map(([quote, who, where], i) => (
            <figure key={who} className={"glass rv rv-d" + i} style={{ margin: 0, padding: "clamp(22px, 3vw, 30px)", borderLeft: "3px solid #1B5E3C" }}>
              <blockquote style={{ margin: 0, font: '600 clamp(1.05rem, 1.8vw, 1.25rem)/1.55 var(--font-inter-tight), sans-serif', letterSpacing: "-0.01em" }}>
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mono-label" style={{ marginTop: 14 }}>
                {who} · {where}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="rv" style={{ background: "#C98A00", color: "#0a0a0a", borderRadius: 28, padding: "clamp(28px, 4vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>Back 500 clubs. Reach a nation.</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:partnerships@club500.africa?subject=Partner%20deck%20request" className="pill-btn" style={{ background: "#0a0a0a", color: "#fff", textDecoration: "none" }}>
              <span className="txt">Request the partner deck</span>
              <span className="circ" style={{ background: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
            <a href="mailto:partnerships@club500.africa?subject=Partnership%20enquiry" className="pill-ghost" style={{ borderColor: "rgba(10,10,10,0.5)", color: "#0a0a0a" }}>
              Talk to our partnerships team
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
