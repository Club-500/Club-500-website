import Link from "next/link";

export const metadata = { title: "Offline | Club500" };

export default function OfflinePage() {
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
        gap: 14,
      }}
    >
      <h1 className="mega" style={{ margin: 0 }}>
        Half-time, <span className="gold">no signal</span>
      </h1>
      <p style={{ margin: 0, maxWidth: 420, font: '400 16px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
        You&apos;re offline. Reconnect and we&apos;ll kick off again right where
        you left off.
      </p>
      <Link href="/" style={{ marginTop: 8 }}>
        <button className="pill-btn" type="button" style={{ padding: "14px 28px", borderRadius: 999 }}>
          Try again
        </button>
      </Link>
    </div>
  );
}
