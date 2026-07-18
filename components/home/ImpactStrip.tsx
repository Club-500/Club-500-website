const STATS: [string, string][] = [
  ["500+", "Community clubs"],
  ["47", "Counties"],
  ["8", "Regions"],
  ["5,000+", "Jobs targeted"],
];

export default function ImpactStrip() {
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px)", maxWidth: 1280, margin: "0 auto" }}>
      <div className="mono-label rv" style={{ marginBottom: 20 }}>
        Kenya&apos;s grassroots game, by the numbers.
      </div>
      <div
        className="rv rv-d1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 14,
        }}
      >
        {STATS.map(([v, l]) => (
          <div
            key={l}
            className="glass"
            style={{ padding: "24px 22px", borderRadius: 18, borderTop: "3px solid #1B5E3C" }}
          >
            <div
              className="gold"
              style={{ font: '700 clamp(1.8rem, 3vw, 2.5rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}
            >
              {v}
            </div>
            <div className="mono-label" style={{ marginTop: 10 }}>
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
