import Link from "next/link";

const STEPS: [string, string, string][] = [
  ["01", "Join your club", "It takes a minute."],
  ["02", "Follow along", "Match updates, stories, behind the scenes."],
  ["03", "Share your link", "Earn when friends join too."],
];

export default function FanZoneSteps() {
  return (
    <section
      style={{
        padding: "64px clamp(20px, 4vw, 32px)",
        background: "#1B5E3C",
        borderRadius: "36px 36px 0 0",
        marginTop: 24,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div
          className="rv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="mono-label" style={{ color: "rgba(255,255,255,0.65)" }}>
              The Fan Zone
            </span>
            <h2
              className="mega"
              style={{ margin: "10px 0 0", fontSize: "clamp(2rem, 4.6vw, 3.6rem)", color: "#fff" }}
            >
              Belong first. <span className="gold">Earn</span> along the way.
            </h2>
          </div>
          <Link href="/fanzone">
            <button
              className="pill-btn"
              type="button"
              style={{ background: "#C98A00", color: "#141310" }}
            >
              <span className="txt">Open the Fan Zone</span>
              <span className="circ" style={{ background: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#141310"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        <div
          className="rv rv-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {STEPS.map(([num, title, desc]) => (
            <div
              key={num}
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 18,
                padding: "20px 22px",
                background: "rgba(255,255,255,0.07)",
              }}
            >
              <span style={{ font: '600 13px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
                {num}
              </span>
              <div style={{ font: '600 17px/1.3 var(--font-inter-tight), sans-serif', margin: "8px 0 4px", color: "#fff" }}>
                {title}
              </div>
              <p style={{ margin: 0, font: '400 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.75)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
