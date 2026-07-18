"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const PROBLEMS = [
  "Inconsistent funding",
  "Weak governance",
  "Low visibility, no digital presence",
  "Few sponsors",
  "Everything resting on one or two volunteers",
];

const SUPPORT_AREAS = [
  "Governance",
  "Branding",
  "Media & storytelling",
  "Financial sustainability",
  "Technology",
  "Fan engagement",
  "Partnerships",
  "Capacity building",
  "Infrastructure development",
];

const AUDIENCES: [string, string][] = [
  ["Clubs", "Tools, governance and long-term support"],
  ["Players", "Opportunities on and off the pitch"],
  ["Fans", "A way to belong, engage and be rewarded"],
  ["Corporate partners", "Measurable impact and a national audience"],
  ["Volunteers & professionals", "A place to put real skills to use"],
  ["Government & development organisations", "A credible partner in youth and community development"],
];

export default function AboutPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="About Club500">
        Why Club500 <span className="gold">exists</span>
      </PageHead>

      {/* Vision + Mission as pull quotes */}
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid #1B5E3C" }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Our vision</div>
          <p
            style={{
              margin: 0,
              font: '600 clamp(1.15rem, 2vw, 1.5rem)/1.5 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            A Kenya where every community football club is a thriving
            institution: creating jobs, developing talent, and strengthening
            the community around it.
          </p>
        </div>
        <div className="glass rv rv-d1" style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid #C98A00" }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Our mission</div>
          <p
            style={{
              margin: 0,
              font: '600 clamp(1.05rem, 1.8vw, 1.3rem)/1.55 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            Club500 connects grassroots football clubs across Kenya&apos;s 47
            counties with the governance, funding, media and fan support they
            need to grow, turning local passion into lasting community impact.{" "}
            <span className="gold">Grassroots to Greatness.</span>
          </p>
        </div>
      </div>

      {/* The problem */}
      <div style={{ padding: "48px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 8px" }}>
          Most clubs don&apos;t lack talent. <span className="gold">They lack systems.</span>
        </h2>
        <div
          className="rv rv-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 10,
            marginTop: 20,
          }}
        >
          {PROBLEMS.map((p) => (
            <div
              key={p}
              style={{
                border: "1px solid rgba(var(--tx),0.12)",
                borderRadius: 14,
                padding: "16px 18px",
                font: '500 14.5px/1.45 var(--font-inter-tight), sans-serif',
                color: "rgba(var(--tx),0.75)",
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* The solution */}
      <div style={{ padding: "40px clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 8px" }}>
          Instead of asking how clubs survive, we ask how they <span className="gold">thrive</span>
        </h2>
        <p className="rv" style={{ margin: "8px 0 20px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 620 }}>
          Nine areas of support, one platform:
        </p>
        <div
          className="rv rv-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 10,
          }}
        >
          {SUPPORT_AREAS.map((a, i) => (
            <div key={a} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(var(--tx),0.08)" }}>
              <span style={{ font: '700 13px/1 var(--font-inter-tight), sans-serif', color: "#2E9B63", background: "rgba(46,155,99,0.16)", borderRadius: 8, padding: "6px 9px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ font: '500 15px/1.3 var(--font-inter-tight), sans-serif' }}>{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Who it's for */}
      <div style={{ padding: "48px clamp(20px, 4vw, 32px) 32px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 24px" }}>
          Who Club500 is <span className="gold">built for</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {AUDIENCES.map(([who, what], i) => (
            <div key={who} className={"glass rv rv-d" + (i % 3)} style={{ padding: 24 }}>
              <div style={{ font: '600 16px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 6 }}>{who}</div>
              <p style={{ margin: 0, font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{what}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "24px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            background: "#1B5E3C",
            color: "#fff",
            borderRadius: 24,
            padding: "clamp(24px, 4vw, 44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              Grassroots to <span className="gold">Greatness</span>
            </h2>
            <p style={{ margin: 0, font: '400 15px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.75)" }}>
              Whether you run a club, cheer for one, or want to build the
              movement, there&apos;s a place for you.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/clubs/apply" className="pill-btn" style={{ background: "#C98A00", color: "#141310", padding: "14px 24px", borderRadius: 999 }}>
              Register your club
            </a>
            <a href="/fanzone" className="pill-ghost">
              Join as a fan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
