import Link from "next/link";

export default function TeaserRow() {
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
          <span className="mono-label">Volunteer</span>
          <h2 className="display" style={{ margin: 0 }}>Bring your skills to the game</h2>
          <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.65)", flex: 1 }}>
            Designers, coaches, developers, lawyers: bring your skills to the
            game.
          </p>
          <Link href="/volunteer" className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>
            Offer your skills →
          </Link>
        </div>
        <div
          className="glass rv rv-d1"
          style={{ padding: "clamp(24px, 3.5vw, 36px)", display: "flex", flexDirection: "column", gap: 12, borderTop: "3px solid #C98A00" }}
        >
          <span className="mono-label">Partner</span>
          <h2 className="display" style={{ margin: 0 }}>Back 500 clubs. Reach a nation.</h2>
          <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.65)", flex: 1 }}>
            National, regional, county and pillar sponsorships with real,
            measurable community impact.
          </p>
          <Link href="/partners" className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>
            Explore partnership →
          </Link>
        </div>
      </div>
    </section>
  );
}
