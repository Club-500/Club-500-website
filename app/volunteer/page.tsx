"use client";

import { useEffect, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const AREAS = ["Coaching", "Design", "Media", "Legal", "Finance", "Technology", "Events"];

type Offer = {
  name: string;
  email: string;
  phone: string;
  county: string;
  area: string;
  message: string;
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

export default function VolunteerPage() {
  const [area, setArea] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", county: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      const o = localStorage.getItem("c500-volunteer-offer");
      if (o) {
        const parsed: Offer = JSON.parse(o);
        setOffer(parsed);
        setArea(parsed.area);
      }
    } catch {}
    setLoaded(true);
  }, []);

  const submit = () => {
    const e: Record<string, string> = {};
    if (!area) e.area = "Pick your area of expertise above";
    if (form.name.trim().length < 3) e.name = "Enter your full name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!/^(\+?254|0)?[17]\d{8}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid Kenyan phone number";
    setErrors(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    setTimeout(() => {
      const rec: Offer = { ...form, area, date: new Date().toISOString().slice(0, 10) };
      localStorage.setItem("c500-volunteer-offer", JSON.stringify(rec));
      setBusy(false);
      setOffer(rec);
    }, 650);
  };

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Volunteer with Club500">
        Bring your <span className="gold">skills</span> to the game
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 980, margin: "0 auto" }}>
        <p
          className="rv"
          style={{
            margin: "0 0 32px",
            maxWidth: 680,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(var(--tx),0.7)",
          }}
        >
          Club500 runs on people who show up: coaches, designers, developers,
          accountants, photographers, lawyers. Offer what you&apos;re good at.
        </p>

        {!loaded ? null : offer ? (
          <div className="glass rv in" style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
            <h2 className="display gold" style={{ margin: "0 0 10px" }}>Asante, {offer.name.split(" ")[0]}!</h2>
            <p style={{ margin: "0 auto 24px", maxWidth: 520, font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
              Your offer to help with {offer.area.toLowerCase()} is in. The team
              matches volunteers to clubs and projects every week; you&apos;ll
              hear from us on {offer.email}.
            </p>
            <button
              className="pill-ghost"
              type="button"
              onClick={() => {
                localStorage.removeItem("c500-volunteer-offer");
                setOffer(null);
                setForm({ name: "", email: "", phone: "", county: "", message: "" });
                setArea("");
              }}
            >
              Submit a different offer
            </button>
          </div>
        ) : (
          <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)" }}>
            <div className="mono-label" style={{ marginBottom: 14 }}>Your area of expertise</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
              {AREAS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(a)}
                  className="tag-pill"
                  style={{
                    cursor: "pointer",
                    background: area === a ? "#1B5E3C" : "transparent",
                    color: area === a ? "#fff" : "rgba(var(--tx),0.75)",
                    borderColor: area === a ? "#1B5E3C" : "rgba(var(--tx),0.18)",
                    padding: "10px 18px",
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
            {errors.area && (
              <div style={{ font: '500 12.5px/1.4 var(--font-inter-tight), sans-serif', color: "rgb(240,120,100)", marginBottom: 8 }}>
                {errors.area}
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <Field label="Full name" error={errors.name}>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={errors.name ? errStyle : inputStyle} />
                </Field>
                <Field label="County">
                  <input value={form.county} onChange={(e) => setForm({ ...form, county: e.target.value })} placeholder="e.g. Nakuru" style={inputStyle} />
                </Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <Field label="Email" error={errors.email}>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" style={errors.email ? errStyle : inputStyle} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="07XX XXX XXX" style={errors.phone ? errStyle : inputStyle} />
                </Field>
              </div>
              <Field label="What would you like to help with? (optional)">
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Tell us a little about your experience and availability"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </Field>
              <button className="pill-btn" type="button" onClick={submit} disabled={busy} style={{ justifyContent: "center", padding: "15px 0", borderRadius: 12, opacity: busy ? 0.7 : 1 }}>
                <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>{busy ? "Submitting…" : "Offer your skills"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
