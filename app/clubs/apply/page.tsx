"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import FormModal from "@/components/FormModal";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdCI0xyW0ovMUN7pio0Gs6Yr68ee_P070ux-EyOinOriylNtg/viewform?embedded=true";

const STEPS: [string, string][] = [
  ["Apply", "Fill in the club application form."],
  ["Onboard", "Adopt the Club500 constitution and community-ownership governance framework."],
  ["Go live", "Your club joins the national platform with its own page and fan following."],
];

export default function ClubApplyPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="New clubs join every month">
        Apply to join <span className="gold">Club500</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 900, margin: "0 auto" }}>
        <div
          className="glass rv"
          style={{
            padding: "clamp(28px, 5vw, 44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <p style={{ margin: 0, maxWidth: 460, font: '400 15.5px/1.65 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.7)" }}>
            Tell us about your club — county, grounds, squad and current
            officials. It takes a few minutes.
          </p>
          <button className="pill-btn ball-pop" type="button" onClick={() => setOpen(true)} style={{ padding: "15px 26px", borderRadius: 999, flexShrink: 0 }}>
            <span className="txt">Apply Now</span>
            <span className="circ">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        <div className="glass rv rv-d1" style={{ padding: "clamp(22px, 3.5vw, 32px)" }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>How joining works</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 14 }}>
                <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "var(--gold)", flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <FormModal title="Apply to join Club500" formUrl={FORM_URL} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
