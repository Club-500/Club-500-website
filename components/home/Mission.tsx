import Link from "next/link";

const STATS: [string, string][] = [
  ["500+", "Community clubs"],
  ["47", "Counties"],
  ["8", "Regions"],
  ["5,000+", "Jobs targeted"],
];

export default function Mission() {
  return (
    <section style={{ padding: "64px clamp(20px, 4vw, 32px)", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div className="rv" style={{ flex: "1 1 420px", maxWidth: 620 }}>
          <div className="mono-label gold" style={{ color: "#f0b429", marginBottom: 14 }}>
            An Ubuntu Initiative
          </div>
          <h2 className="mega" style={{ margin: "0 0 18px", fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}>
            Building a sustainable, investment-ready grassroots football ecosystem
          </h2>
          <p
            style={{
              margin: "0 0 24px",
              font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Club500 organizes community football clubs across every county in
            Kenya under one national platform: structured governance,
            community ownership, commercial revenue streams and a shared digital
            home for every club, fan and partner.
          </p>
          <Link href="/about" className="tag-pill gold-pill">
            About the movement →
          </Link>
        </div>
        <div
          className="rv rv-d1"
          style={{
            flex: "1 1 320px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 14,
            maxWidth: 480,
          }}
        >
          {STATS.map(([v, l]) => (
            <div
              key={l}
              className="glass"
              style={{ padding: "26px 24px", borderRadius: 18 }}
            >
              <div
                className="gold"
                style={{ font: '700 clamp(1.8rem, 3vw, 2.4rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}
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
    </section>
  );
}
