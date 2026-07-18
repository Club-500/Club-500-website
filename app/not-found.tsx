import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        gap: 16,
      }}
    >
      <svg width="72" height="72" viewBox="0 0 64 64" fill="none" style={{ transform: "rotate(-14deg)" }}>
        <defs>
          <clipPath id="nfBallClip">
            <circle cx="32" cy="32" r="30" />
          </clipPath>
        </defs>
        <circle cx="32" cy="32" r="30" fill="#f5f5f0" stroke="#161616" strokeWidth="2" />
        <g clipPath="url(#nfBallClip)">
          <g stroke="#161616" strokeWidth="2.4" strokeLinecap="round">
            <line x1="32" y1="22" x2="32" y2="6" />
            <line x1="41.5" y1="28.9" x2="56.8" y2="24.2" />
            <line x1="37.9" y1="40.1" x2="47.3" y2="53.1" />
            <line x1="26.1" y1="40.1" x2="16.7" y2="53.1" />
            <line x1="22.5" y1="28.9" x2="7.2" y2="24.2" />
          </g>
          <path d="M32,22 L41.5,28.9 L37.9,40.1 L26.1,40.1 L22.5,28.9 Z" fill="#161616" />
          <g fill="#161616">
            <circle cx="32" cy="0.5" r="8.4" />
            <circle cx="60.4" cy="23.2" r="8.4" />
            <circle cx="49.6" cy="57" r="8.4" />
            <circle cx="14.4" cy="57" r="8.4" />
            <circle cx="3.6" cy="23.2" r="8.4" />
          </g>
        </g>
      </svg>
      <h1 className="mega" style={{ margin: 0 }}>
        Off <span className="gold">target!</span>
      </h1>
      <p style={{ margin: 0, maxWidth: 420, font: '400 16px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
        That shot went over the bar. The page you&apos;re looking for doesn&apos;t
        exist, or it has been moved.
      </p>
      <Link href="/" style={{ marginTop: 8 }}>
        <button className="pill-btn" type="button" style={{ padding: "14px 28px", borderRadius: 999 }}>
          Back to the pitch
        </button>
      </Link>
    </div>
  );
}
