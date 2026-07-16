"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const MODEL: [string, string][] = [
  [
    "Regional organization",
    "500+ clubs distributed across all 47 counties, organized into 8 regions with about 10 clubs per county — selected by profile to ensure diversity and true national representation.",
  ],
  [
    "Ownership & fundraising",
    "Community investors are identified and club shares are sold within a structured framework — communities keep control of their clubs while attracting the capital to grow them.",
  ],
  [
    "Revenue & commercialization",
    "Club500 manages 100% of club revenue streams during the 5-year project period — merchandising, ticketing, sponsorships, academies, player transfers and media rights — building each club into a sustainable business.",
  ],
];

const PILLARS: [string, string, string][] = [
  ["01", "Legal & Governance", "Structured club constitutions and community-first governance."],
  ["02", "Community Ownership", "Club shares sold through a structured fundraising model — communities keep control."],
  ["03", "Technology", "One national platform: microsites, referral engine, live data."],
  ["04", "Commercialization", "Merchandising, ticketing, sponsorships, academies, transfers, media rights."],
  ["05", "Media & Branding", "A newsroom, a podcast and a story worth telling in every county."],
  ["06", "Finance & Sustainability", "Banking rails and investment-ready structures for grassroots clubs."],
  ["07", "Infrastructure", "Pitches, facilities and equipment fit for a national movement."],
  ["08", "Health & Performance", "Sports science, nutrition and wellness for every squad."],
];

const ROADMAP: [string, string][] = [
  ["2025", "Legal & governance foundations"],
  ["2026", "Summit & national launch"],
  ["2027", "Scale to all 47 counties"],
  ["2028", "500 clubs · 500 academies · 5,000+ jobs · KSh 1B+ invested"],
];

export default function AboutPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="About us · An Ubuntu Initiative">
        Building the future of <span className="gold">community football</span>
      </PageHead>

      {/* Vision — verbatim from club500.africa */}
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid #f0b429" }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Our vision</div>
          <p
            style={{
              margin: 0,
              maxWidth: 860,
              font: '600 clamp(1.2rem, 2.4vw, 1.7rem)/1.45 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            Establish a sustainable, investment-ready grassroots football
            ecosystem across Kenya, powered by 8 strategic pillars of impact.
          </p>
        </div>
        <div className="rv rv-d1" style={{ display: "flex", gap: "clamp(24px, 4vw, 48px)", margin: "40px 0 0", flexWrap: "wrap" }}>
          {[
            ["500+", "Community clubs"],
            ["47", "Counties"],
            ["8", "Regions"],
            ["~10", "Clubs per county"],
          ].map(([v, l]) => (
            <div key={l}>
              <div
                className="gold"
                style={{ font: '700 clamp(2rem, 4vw, 3.2rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}
              >
                {v}
              </div>
              <div className="mono-label" style={{ marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The model */}
      <div style={{ padding: "56px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 28px" }}>
          How the model <span className="gold">works</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {MODEL.map(([title, desc], i) => (
            <div key={title} className={"glass rv rv-d" + i} style={{ padding: 26 }}>
              <div style={{ font: '600 17px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 10 }}>{title}</div>
              <p style={{ margin: 0, font: '400 14px/1.65 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.62)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8 pillars */}
      <div style={{ padding: "56px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 28px" }}>
          The 8 <span className="gold">pillars</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {PILLARS.map(([num, title, desc], i) => (
            <div key={num} className={"glass rv rv-d" + (i % 4)} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ font: '700 13px/1 var(--font-inter-tight), sans-serif', color: "#f0b429" }}>{num}</span>
              <div style={{ font: '600 17px/1.25 var(--font-inter-tight), sans-serif' }}>{title}</div>
              <p style={{ margin: 0, font: '400 13.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div style={{ padding: "40px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="glass rv" style={{ padding: "clamp(22px, 4vw, 36px)" }}>
          <div className="mono-label" style={{ marginBottom: 20 }}>Roadmap · Phase I</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 22 }}>
            {ROADMAP.map(([yr, m], i) => (
              <div key={yr}>
                <div style={{ font: '700 1.7rem/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em", color: i === 3 ? "#f0b429" : "#fff" }}>
                  {yr}
                </div>
                <p style={{ margin: "8px 0 0", font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
