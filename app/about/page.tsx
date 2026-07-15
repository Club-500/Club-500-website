"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

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
      <PageHead eyebrow="An Ubuntu Initiative">
        Building the future of <em className="serif-accent gold">community football</em>
      </PageHead>
      <div style={{ padding: "0 32px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <p
          className="rv"
          style={{
            margin: 0,
            maxWidth: 720,
            font: '400 clamp(1.3rem, 2.2vw, 1.8rem)/1.45 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "-0.01em",
          }}
        >
          A sustainable, investment-ready grassroots football ecosystem across
          Kenya — 500+ community clubs in all 47 counties, organized into 8
          regions, powered by 8 strategic pillars of impact.
        </p>
        <div className="rv rv-d1" style={{ display: "flex", gap: 48, margin: "56px 0 0", flexWrap: "wrap" }}>
          {[
            ["500+", "Clubs"],
            ["47", "Counties"],
            ["5,000+", "Jobs created"],
            ["KSh 1B+", "To be invested"],
          ].map(([v, l]) => (
            <div key={l}>
              <div
                style={{
                  font: '600 clamp(2.4rem, 4.5vw, 4rem)/1 var(--font-inter-tight), sans-serif',
                  letterSpacing: "-0.03em",
                }}
                className="gold"
              >
                {v}
              </div>
              <div className="mono-label" style={{ marginTop: 10 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "72px 32px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 40px" }}>
          The 8 <em className="serif-accent gold">pillars</em>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {PILLARS.map(([num, title, desc], i) => (
            <div
              key={num}
              className={"glass rv rv-d" + (i % 4)}
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <span style={{ font: '600 14px/1 var(--font-inter-tight), sans-serif', color: "#f0b429", letterSpacing: "0.1em" }}>
                {num}
              </span>
              <div style={{ font: '600 20px/1.2 var(--font-inter-tight), sans-serif', letterSpacing: "-0.01em" }}>
                {title}
              </div>
              <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "32px 32px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)" }}>
          <div className="mono-label" style={{ marginBottom: 24 }}>
            Roadmap · Phase I
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {ROADMAP.map(([yr, m], i) => (
              <div key={yr}>
                <div className="display" style={{ fontSize: "2.2rem", color: i === 3 ? "#f0b429" : "#fff" }}>
                  {yr}
                </div>
                <p style={{ margin: "10px 0 0", font: '400 14px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
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
