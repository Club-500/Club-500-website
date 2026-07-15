"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const REGIONS = ["Nairobi", "Central", "Rift Valley", "Eastern", "Coast", "Western", "Nyanza", "N. Eastern"];

const DRAFTS: [string, string, string, string][] = [
  ["Kapkatet Youth win county cup", "Rift Valley · Kericho", "In review", "#f0b429"],
  ["Shimanzi FC new academy intake", "Coast · Mombasa", "Published", "#3ecf6e"],
  ["Uhola FC community fundraiser", "Western · Kakamega", "Draft", "rgba(255,255,255,0.5)"],
];

const HOW: [string, string, string][] = [
  ["01", "Draft", "Write your report and attach media"],
  ["02", "Submit", "Sent to your regional editor for review"],
  ["03", "Approve", "Editor fact-checks and signs off"],
  ["04", "Publish", "Live on Newsroom + region feed + club microsite, tagged automatically"],
];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 14,
  color: "#fff",
  font: '500 15px/1.4 var(--font-inter-tight), sans-serif',
  padding: "15px 18px",
  outline: "none",
  width: "100%",
};

export default function JournalistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: "", region: "", county: "", club: "", format: "Article", body: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Accredited reporters · 47 counties">
        Journalist <em className="serif-accent gold">portal</em>
      </PageHead>
      <div style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 14, alignItems: "start" }}>

        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #f0b429", display: "flex", alignItems: "center", justifyContent: "center", font: '400 1.3rem/1 var(--font-bebas-neue), sans-serif', color: "#f0b429" }}>JW</div>
            <div>
              <div style={{ font: '600 17px/1.2 var(--font-inter-tight), sans-serif' }}>
                Jane Wanjiku <span className="tag-pill gold-pill" style={{ marginLeft: 8, padding: "4px 10px" }}>✔ Accredited</span>
              </div>
              <div className="mono-label" style={{ marginTop: 6 }}>Nyanza Bureau · Kisumu · 128 stories</div>
            </div>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div className="display gold" style={{ fontSize: "2.4rem" }}>Story submitted ✓</div>
              <p style={{ margin: "14px 0 28px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
                Your report is now in editor review. Once approved it publishes to the Newsroom, your region feed and the club&apos;s microsite automatically.
              </p>
              <button
                className="pill-ghost"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ title: "", region: "", county: "", club: "", format: "Article", body: "" });
                }}
              >
                File another report
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="mono-label">File a report</div>
              <input placeholder="Headline — what happened?" value={form.title} onChange={set("title")} style={inputStyle} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <select value={form.region} onChange={set("region")} style={{ ...inputStyle, appearance: "none" }}>
                  <option value="">Region…</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r} style={{ background: "#141414" }}>{r}</option>
                  ))}
                </select>
                <select value={form.format} onChange={set("format")} style={{ ...inputStyle, appearance: "none" }}>
                  {["Article", "Photo", "Video", "Podcast"].map((f) => (
                    <option key={f} value={f} style={{ background: "#141414" }}>{f}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input placeholder="County" value={form.county} onChange={set("county")} style={inputStyle} />
                <input placeholder="Club (optional)" value={form.club} onChange={set("club")} style={inputStyle} />
              </div>
              <textarea
                placeholder="Your report — match result, community event, club milestone…"
                value={form.body}
                onChange={set("body")}
                rows={6}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <div style={{ border: "1.5px dashed rgba(255,255,255,0.25)", borderRadius: 14, padding: "22px 18px", textAlign: "center" }}>
                <span className="mono-label">Drop photos / video here</span>
              </div>
              <button
                className="pill-btn"
                type="button"
                onClick={() => form.title && setSubmitted(true)}
                style={{ justifyContent: "center", padding: "16px 0", borderRadius: 14, opacity: form.title ? 1 : 0.4 }}
              >
                <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>Submit for review</span>
              </button>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="glass rv rv-d1" style={{ padding: 30 }}>
            <div className="mono-label" style={{ marginBottom: 20 }}>Your stories</div>
            {DRAFTS.map(([title, where, status, color], i) => (
              <div key={title} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{title}</div>
                  <div className="mono-label" style={{ marginTop: 5 }}>{where}</div>
                </div>
                <span className="tag-pill" style={{ borderColor: color, color }}>{status}</span>
              </div>
            ))}
          </div>
          <div className="glass rv rv-d2" style={{ padding: 30 }}>
            <div className="mono-label" style={{ marginBottom: 18 }}>How publishing works</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {HOW.map(([n, t, d], i) => (
                <div key={n} style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <span className="display" style={{ fontSize: "1.3rem", color: i === 3 ? "#f0b429" : "rgba(255,255,255,0.3)", width: 32 }}>{n}</span>
                  <div>
                    <div style={{ font: '600 15px/1.2 var(--font-inter-tight), sans-serif' }}>{t}</div>
                    <div style={{ font: '400 13px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
