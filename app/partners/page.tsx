"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import FormModal from "@/components/FormModal";
import { useLang } from "@/lib/i18n";

const TIERS: [string, string, string, string][] = [
  ["National Sponsor", "All 500 clubs", "Brand visibility across all 500 clubs: national campaigns, the Launch Tour, national media.", "#cfd8e3"],
  ["Regional Sponsor", "1 of 8 regions", "Presence and activation across one of Kenya's 8 regions.", "var(--gold)"],
  ["County Sponsor", "1 of 47 counties", "Local activation and visibility within a specific county.", "#a7a7a7"],
  ["Pillar Sponsor", "One focus area", "Funding tied to one focus area: girls' football, coaching education, or infrastructure.", "var(--blue-hover)"],
];

const PARTNER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRG4hVqA1Tldxaa-psZIyZ-a6xTk7-8KbCI-W5fnHPoLVPKg/viewform?embedded=true";

export default function PartnersPage() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="National · Regional · County · Pillar">
        {t("pp.h1a")} <span className="gold">{t("pp.h1b")}</span>.
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/partners-banner.webp"
          alt="Back 500 Clubs. Reach a Nation."
          className="rv"
          style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 20, display: "block", margin: "0 auto" }}
        />
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

        <div>
          <div className="mono-label rv" style={{ marginBottom: 14 }}>Partner logos</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }} className="rv">
            {["National sponsor", "Regional sponsor", "County sponsor", "Pillar sponsor"].map((l) => (
              <div key={l} style={{ border: "1.5px dashed rgba(var(--tx),0.25)", borderRadius: 16, height: 90, display: "flex", alignItems: "center", justifyContent: "center", padding: 12, textAlign: "center" }}>
                <span className="mono-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="glass rv"
          style={{
            padding: "clamp(28px, 5vw, 44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <h2 className="display" style={{ margin: "0 0 8px" }}>Apply to <span className="gold">partner</span></h2>
            <p style={{ margin: 0, font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
              Club500 connects brands with football clubs, players, fans, families
              and communities across eight regions of Kenya. Partners get access to
              match day activations, product sampling, club canteen partnerships,
              e-commerce sales and community engagement programs.
            </p>
          </div>
          <button className="pill-btn ball-pop" type="button" onClick={() => setOpen(true)} style={{ padding: "15px 26px", borderRadius: 999, flexShrink: 0 }}>
            <span className="txt">Apply to Partner</span>
            <span className="circ">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <FormModal title="Apply to Partner" formUrl={PARTNER_FORM_URL} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
