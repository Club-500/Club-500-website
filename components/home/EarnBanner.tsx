import Link from "next/link";

export default function EarnBanner() {
  return (
    <section
      style={{
        padding: "110px 32px",
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
          gap: 28,
        }}
      >
        <span className="rv mono-label" style={{ color: "rgba(10,10,10,0.6)" }}>
          How it works
        </span>
        <h2 className="rv mega" style={{ margin: 0, fontSize: "clamp(2.6rem, 6.5vw, 6rem)" }}>
          Join. Share your link.
          <br />
          <em className="serif-accent">Get paid.</em>
        </h2>
        <div
          className="rv rv-d1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: 460,
              font: '400 17px/1.6 var(--font-inter-tight), sans-serif',
              color: "rgba(10,10,10,0.75)",
            }}
          >
            Become a fan of your club, get your personal referral link
            instantly, and earn every single time someone joins through it.
            Withdraw anytime — no limits, sent instantly.
          </p>
          <Link href="/earn">
            <button
              className="pill-btn"
              type="button"
              style={{ background: "#0a0a0a", color: "#fff" }}
            >
              <span className="txt">See earning potential</span>
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
      </div>
    </section>
  );
}
