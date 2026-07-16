import Link from "next/link";

const STEPS: [string, string, string][] = [
  ["01", "Join a club", "Become a fan — it takes a minute."],
  ["02", "Share your link", "Your referral link, generated instantly."],
  ["03", "Get paid", "Earn every time someone joins through it."],
];

export default function EarnBanner() {
  return (
    <section
      style={{
        padding: "64px clamp(20px, 4vw, 32px)",
        background: "#f0b429",
        color: "#0a0a0a",
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
          gap: 32,
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
            <span className="mono-label" style={{ color: "rgba(10,10,10,0.6)" }}>
              How it works
            </span>
            <h2 className="mega" style={{ margin: "10px 0 0", fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)" }}>
              Join. Share your link.
              <br />
              Get paid.
            </h2>
          </div>
          <Link href="/fanzone">
            <button
              className="pill-btn"
              type="button"
              style={{ background: "#0a0a0a", color: "#fff" }}
            >
              <span className="txt">Open the Fan Zone</span>
              <span className="circ" style={{ background: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#0a0a0a"
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
                border: "1.5px solid rgba(10,10,10,0.18)",
                borderRadius: 18,
                padding: "20px 22px",
                background: "rgba(10,10,10,0.05)",
              }}
            >
              <span style={{ font: '600 13px/1 var(--font-inter-tight), sans-serif', letterSpacing: "0.08em", color: "rgba(10,10,10,0.5)" }}>
                {num}
              </span>
              <div style={{ font: '600 17px/1.3 var(--font-inter-tight), sans-serif', margin: "8px 0 4px" }}>
                {title}
              </div>
              <p style={{ margin: 0, font: '400 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.65)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
