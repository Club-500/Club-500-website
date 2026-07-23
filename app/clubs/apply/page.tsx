import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdCI0xyW0ovMUN7pio0Gs6Yr68ee_P070ux-EyOinOriylNtg/viewform?embedded=true";

const STEPS: [string, string][] = [
  ["Apply", "Fill in the club application form."],
  ["Onboard", "Adopt the Club500 constitution and community-ownership governance framework."],
  ["Go live", "Your club joins the national platform with its own page and fan following."],
];

export default function ClubApplyPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="New clubs join every month">
        Apply to join <span className="gold">Club500</span>
      </PageHead>
      <div
        style={{
          padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
        <div className="glass rv" style={{ padding: "clamp(12px, 2vw, 18px)", overflow: "hidden" }}>
          <iframe
            src={FORM_URL}
            title="Club500 club application form"
            style={{ width: "100%", height: "clamp(900px, 130vw, 1400px)", border: "none", display: "block", borderRadius: 12 }}
          >
            Loading…
          </iframe>
        </div>

        <div className="glass rv rv-d1" style={{ padding: "clamp(22px, 3.5vw, 32px)" }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>How joining works</div>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
              <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "var(--gold)", width: 24, flexShrink: 0 }}>
                {i + 1}
              </span>
              <div>
                <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{d}</p>
              </div>
            </div>
          ))}
          <p style={{ margin: "18px 0 0", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>
            New clubs join every month. 33 live today, 500 on the way.
          </p>
        </div>
      </div>
    </>
  );
}
