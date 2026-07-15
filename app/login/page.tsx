import Image from "next/image";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 14,
  color: "#fff",
  font: '500 15px/1 var(--font-inter-tight), sans-serif',
  padding: "16px 20px",
  outline: "none",
  width: "100%",
};

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px 32px 96px" }}>
      <div className="glass rv in" style={{ width: "100%", maxWidth: 440, padding: "clamp(28px, 4vw, 48px)", borderRadius: 28 }}>
        <Image
          src="/assets/club500-logo.jpg"
          alt="Club 500"
          width={56}
          height={56}
          style={{ height: 56, width: "auto", marginBottom: 24 }}
        />
        <h1 className="display" style={{ margin: "0 0 8px", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
          Welcome <em className="serif-accent gold">back</em>
        </h1>
        <p style={{ margin: "0 0 32px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)" }}>
          Sign in to view your referral dashboard and earnings.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input placeholder="Email address" style={inputStyle} />
          <input placeholder="Password" type="password" style={inputStyle} />
          <button className="pill-btn" type="button" style={{ justifyContent: "center", padding: "16px 0", borderRadius: 14, marginTop: 6 }}>
            <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>Sign in</span>
          </button>
        </div>
        <p style={{ margin: "24px 0 0", font: '400 13px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          New here? <Link href="/clubs">Join a club &amp; get your link</Link>
        </p>
      </div>
    </div>
  );
}
