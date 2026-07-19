"use client";

import { useEffect, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const REGIONS = ["Nairobi", "Central", "Rift Valley", "Eastern", "Coast", "Western", "Nyanza", "N. Eastern"];

type Application = {
  club: string;
  county: string;
  region: string;
  contact: string;
  role: string;
  email: string;
  phone: string;
  founded: string;
  date: string;
};

const inputStyle: React.CSSProperties = {
  background: "rgba(var(--tx),0.05)",
  border: "1px solid rgba(var(--tx),0.15)",
  borderRadius: 12,
  color: "var(--fg)",
  font: '500 15px/1.4 var(--font-inter-tight), sans-serif',
  padding: "14px 16px",
  outline: "none",
  width: "100%",
};

const errStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1.5px solid rgba(240,100,80,0.7)",
};

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ font: '500 13px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
        {label}
      </span>
      {children}
      {error && (
        <span style={{ font: '500 12px/1.3 var(--font-inter-tight), sans-serif', color: "rgb(240,120,100)" }}>
          {error}
        </span>
      )}
    </label>
  );
}

const STEPS: [string, string][] = [
  ["Apply", "Tell us about your club below."],
  ["Onboard", "Adopt the Club500 constitution and community-ownership governance framework."],
  ["Go live", "Your club gets its own microsite, referral engine and sponsor rail on the national platform."],
];

export default function ClubApplyPage() {
  const [form, setForm] = useState({ club: "", county: "", region: "", contact: "", role: "", email: "", phone: "", founded: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<Application | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      const a = localStorage.getItem("c500-club-application");
      if (a) setDone(JSON.parse(a));
    } catch {}
    setLoaded(true);
  }, []);

  const submit = () => {
    const e: Record<string, string> = {};
    if (form.club.trim().length < 3) e.club = "Enter your club's name";
    if (!form.county.trim()) e.county = "County is required";
    if (!form.region) e.region = "Select your region";
    if (form.contact.trim().length < 3) e.contact = "Enter the contact person's name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!/^(\+?254|0)?[17]\d{8}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid Kenyan phone number";
    setErrors(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    setTimeout(() => {
      const rec: Application = { ...form, date: new Date().toISOString().slice(0, 10) };
      localStorage.setItem("c500-club-application", JSON.stringify(rec));
      setBusy(false);
      setDone(rec);
    }, 650);
  };

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="New clubs join every month">
        Apply to join <span className="gold">Club500</span>
      </PageHead>
      <div
        style={{
          padding: "0 clamp(20px, 4vw, 32px) 72px",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)" }}>
          {!loaded ? null : done ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <h2 className="display gold" style={{ margin: "0 0 10px" }}>Application received</h2>
              <p style={{ margin: "0 auto 24px", maxWidth: 480, font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
                {done.club} is in the queue for {done.county} county. The
                onboarding team reviews applications every week and will reach
                out on {done.email}.
              </p>
              <button
                className="pill-ghost"
                type="button"
                onClick={() => {
                  localStorage.removeItem("c500-club-application");
                  setDone(null);
                  setForm({ club: "", county: "", region: "", contact: "", role: "", email: "", phone: "", founded: "" });
                }}
              >
                Apply for another club
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="mono-label">Club details</div>
              <Field label="Club name" error={errors.club}>
                <input value={form.club} onChange={(e) => setForm({ ...form, club: e.target.value })} placeholder="e.g. Bidii Stars FC" style={errors.club ? errStyle : inputStyle} />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
                <Field label="County" error={errors.county}>
                  <input value={form.county} onChange={(e) => setForm({ ...form, county: e.target.value })} placeholder="e.g. Machakos" style={errors.county ? errStyle : inputStyle} />
                </Field>
                <Field label="Region" error={errors.region}>
                  <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} style={{ ...(errors.region ? errStyle : inputStyle), appearance: "none" }}>
                    <option value="">Select…</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r} style={{ background: "var(--panel)" }}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Year founded (optional)">
                  <input value={form.founded} onChange={(e) => setForm({ ...form, founded: e.target.value })} placeholder="e.g. 2015" style={inputStyle} />
                </Field>
              </div>
              <div className="mono-label" style={{ marginTop: 8 }}>Contact person</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <Field label="Full name" error={errors.contact}>
                  <input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder="Club official's name" style={errors.contact ? errStyle : inputStyle} />
                </Field>
                <Field label="Role at the club (optional)">
                  <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Chairman, coach, secretary…" style={inputStyle} />
                </Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <Field label="Email" error={errors.email}>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="club@example.com" style={errors.email ? errStyle : inputStyle} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="07XX XXX XXX" style={errors.phone ? errStyle : inputStyle} />
                </Field>
              </div>
              <button className="pill-btn" type="button" onClick={submit} disabled={busy} style={{ justifyContent: "center", padding: "15px 0", borderRadius: 12, opacity: busy ? 0.7 : 1 }}>
                <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>{busy ? "Submitting…" : "Submit application"}</span>
              </button>
            </div>
          )}
        </div>

        <div className="glass rv rv-d1" style={{ padding: "clamp(22px, 3.5vw, 32px)" }}>
          <div className="mono-label" style={{ marginBottom: 16 }}>How joining works</div>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
              <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "#C98A00", width: 24, flexShrink: 0 }}>
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
