"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const MODEL: [string, string[]][] = [
  [
    "Club 500",
    [
      "Regional breakdown in profile (clubs count & counties).",
      "Diversity & national spread.",
    ],
  ],
  [
    "Ownership & Fundraising",
    [
      "Identify potential community investors.",
      "Sell club shares as part of a structured fundraising model.",
      "Ensure communities retain control while mobilizing investment.",
    ],
  ],
  [
    "Revenue & Commercialization",
    [
      "Aggregate, bundle, and manage 100% of club revenue streams during the 5-year project period.",
      "Revenue sources include: merchandising, ticketing, sponsorships, academies, player transfers, media rights.",
    ],
  ],
];

const FEATURED = ["Tusker F.C", "Mara Sugar", "Rainbow F.C", "Nairobi City", "KCB", "MT Kenya"];

const PILLARS: [string, string, string][] = [
  ["01", "Legal & Governance", "Structured club constitutions and community-first governance."],
  ["02", "Community Ownership", "Club shares sold through a structured fundraising model. Communities keep control."],
  ["03", "Technology", "One national platform: microsites, referral engine, live data."],
  ["04", "Commercialization", "Merchandising, ticketing, sponsorships, academies, transfers, media rights."],
  ["05", "Media & Branding", "A newsroom, a podcast and a story worth telling in every county."],
  ["06", "Finance & Sustainability", "Banking rails and investment-ready structures for grassroots clubs."],
  ["07", "Infrastructure", "Pitches, facilities and equipment fit for a national movement."],
  ["08", "Health & Performance", "Sports science, nutrition and wellness for every squad."],
];

export default function AboutPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="About us">
        Club500. Building the Future of <span className="gold">Community Football</span> in Kenya
      </PageHead>

      {/* Vision + scope, verbatim from club500.africa */}
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
        <p
          className="rv rv-d1"
          style={{
            margin: "28px 0 0",
            maxWidth: 720,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.75)",
          }}
        >
          500+ community football clubs across all 47 counties, organized into
          8 regions (former provinces). Approximately 10 clubs per county.
        </p>
        <div className="rv rv-d1" style={{ display: "flex", gap: "clamp(24px, 4vw, 48px)", margin: "36px 0 0", flexWrap: "wrap" }}>
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

      {/* The model, verbatim sections */}
      <div style={{ padding: "48px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {MODEL.map(([title, points], i) => (
            <div key={title} className={"glass rv rv-d" + i} style={{ padding: 26 }}>
              <div style={{ font: '600 17px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 14 }}>{title}</div>
              {points.map((p) => (
                <p
                  key={p}
                  style={{
                    margin: "0 0 10px",
                    font: '400 14px/1.6 var(--font-inter-tight), sans-serif',
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Featured clubs, from the live About page */}
      <div style={{ padding: "40px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 20px" }}>
          Featured <span className="gold">clubs</span>
        </h2>
        <div className="rv rv-d1" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {FEATURED.map((c) => (
            <span key={c} className="tag-pill">{c}</span>
          ))}
        </div>
      </div>

      {/* 8 pillars */}
      <div style={{ padding: "40px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 24px" }}>
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

      {/* Stay tuned CTA, verbatim from live site */}
      <div style={{ padding: "32px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            background: "#f0b429",
            color: "#0a0a0a",
            borderRadius: 24,
            padding: "clamp(24px, 4vw, 44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <h2 className="display" style={{ margin: 0 }}>Stay tuned and receive updates</h2>
          <button className="pill-btn" type="button" style={{ background: "#0a0a0a", color: "#fff" }}>
            <span className="txt">Sign up</span>
            <span className="circ" style={{ background: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
