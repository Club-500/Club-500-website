"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import FormModal from "@/components/FormModal";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdp3h4Au-2AwaRvaQad-AjJiMLEgp9HuvyhKcT7oW3AzTisVQ/viewform?embedded=true";

const STEPS: [string, string, string][] = [
  ["1", "Apply", "One-time accreditation review by the editorial team"],
  ["2", "Onboard", "Approved reporters get access to file stories with region, county and club tags"],
  ["3", "Editor review", "Every report is fact-checked and signed off by a regional editor before it goes live"],
  ["4", "Published", "Live on the Newsroom, your region feed and the club's page"],
];

export default function JournalistPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Accredited reporters · every county">
        Journalist <span className="gold">portal</span>
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
            Club500 accredits community journalists in every county, including
            interns. Apply once, and file reports straight to the national
            Newsroom after approval.
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

        <div className="glass rv rv-d1" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>How publishing works</div>
          {STEPS.map(([n, t, d], i) => (
            <div key={n} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: i < STEPS.length - 1 ? "1px solid rgba(var(--tx),0.08)" : "none" }}>
              <span style={{ font: '700 14px/1.4 var(--font-inter-tight), sans-serif', color: i === STEPS.length - 1 ? "var(--gold)" : "rgba(var(--tx),0.35)", width: 20, flexShrink: 0 }}>{n}</span>
              <div>
                <div style={{ font: '600 14.5px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                <div style={{ font: '400 13px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)", marginTop: 3 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <FormModal title="Journalist Accreditation" formUrl={FORM_URL} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
