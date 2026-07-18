"use client";

import { useEffect, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const REGIONS = ["Nairobi", "Central", "Rift Valley", "Eastern", "Coast", "Western", "Nyanza", "N. Eastern"];
const FORMATS = ["Article", "Photo report", "Video", "Podcast"];

type Story = {
  id: number;
  title: string;
  region: string;
  county: string;
  club: string;
  format: string;
  status: "In review" | "Published" | "Draft";
  date: string;
};

type Application = {
  name: string;
  email: string;
  phone: string;
  county: string;
  outlet: string;
  sample: string;
  date: string;
};

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 12,
  color: "#fff",
  font: '500 15px/1.4 var(--font-inter-tight), sans-serif',
  padding: "14px 16px",
  outline: "none",
  width: "100%",
};

const errStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1.5px solid rgba(240,100,80,0.7)",
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ font: '500 13px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.65)" }}>
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

export default function JournalistPage() {
  const [application, setApplication] = useState<Application | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [app, setApp] = useState({ name: "", email: "", phone: "", county: "", outlet: "", sample: "" });
  const [appErrors, setAppErrors] = useState<Record<string, string>>({});

  const [story, setStory] = useState({ title: "", region: "", county: "", club: "", format: "Article", body: "" });
  const [storyErrors, setStoryErrors] = useState<Record<string, string>>({});
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    try {
      const a = localStorage.getItem("c500-journalist-application");
      if (a) setApplication(JSON.parse(a));
      const s = localStorage.getItem("c500-journalist-stories");
      if (s) setStories(JSON.parse(s));
    } catch {}
    setLoaded(true);
  }, []);

  const submitApplication = () => {
    const e: Record<string, string> = {};
    if (app.name.trim().length < 3) e.name = "Enter your full name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(app.email)) e.email = "Enter a valid email address";
    if (!/^(\+?254|0)?[17]\d{8}$/.test(app.phone.replace(/\s/g, ""))) e.phone = "Enter a valid Kenyan phone number";
    if (!app.county.trim()) e.county = "County is required";
    setAppErrors(e);
    if (Object.keys(e).length) return;
    const record: Application = { ...app, date: new Date().toISOString().slice(0, 10) };
    localStorage.setItem("c500-journalist-application", JSON.stringify(record));
    setApplication(record);
  };

  const submitStory = () => {
    const e: Record<string, string> = {};
    if (story.title.trim().length < 10) e.title = "Headline must be at least 10 characters";
    if (!story.region) e.region = "Select your region";
    if (!story.county.trim()) e.county = "County is required";
    if (story.body.trim().length < 50) e.body = "Report must be at least 50 characters";
    setStoryErrors(e);
    if (Object.keys(e).length) return;
    const rec: Story = {
      id: Date.now(),
      title: story.title.trim(),
      region: story.region,
      county: story.county.trim(),
      club: story.club.trim(),
      format: story.format,
      status: "In review",
      date: new Date().toISOString().slice(0, 10),
    };
    const next = [rec, ...stories];
    setStories(next);
    localStorage.setItem("c500-journalist-stories", JSON.stringify(next));
    setStory({ title: "", region: "", county: "", club: "", format: "Article", body: "" });
    setJustSubmitted(true);
    setTimeout(() => setJustSubmitted(false), 5000);
  };

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Accredited reporters · 47 counties">
        Journalist <span className="gold">portal</span>
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
        <div className="glass rv" style={{ padding: "clamp(22px, 4vw, 36px)" }}>
          {!loaded ? null : !application ? (
            <>
              <h2 className="display" style={{ margin: "0 0 6px" }}>Apply for accreditation</h2>
              <p style={{ margin: "0 0 24px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)" }}>
                Club500 accredits community journalists in every county. Once
                approved, you file reports straight to the national Newsroom.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Field label="Full name" error={appErrors.name}>
                  <input value={app.name} onChange={(e) => setApp({ ...app, name: e.target.value })} placeholder="e.g. Jane Wanjiku" style={appErrors.name ? errStyle : inputStyle} />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
                  <Field label="Email" error={appErrors.email}>
                    <input value={app.email} onChange={(e) => setApp({ ...app, email: e.target.value })} placeholder="you@example.com" style={appErrors.email ? errStyle : inputStyle} />
                  </Field>
                  <Field label="Phone (M-Pesa)" error={appErrors.phone}>
                    <input value={app.phone} onChange={(e) => setApp({ ...app, phone: e.target.value })} placeholder="07XX XXX XXX" style={appErrors.phone ? errStyle : inputStyle} />
                  </Field>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
                  <Field label="County" error={appErrors.county}>
                    <input value={app.county} onChange={(e) => setApp({ ...app, county: e.target.value })} placeholder="e.g. Kisumu" style={appErrors.county ? errStyle : inputStyle} />
                  </Field>
                  <Field label="Media outlet (optional)">
                    <input value={app.outlet} onChange={(e) => setApp({ ...app, outlet: e.target.value })} placeholder="Freelance is fine" style={inputStyle} />
                  </Field>
                </div>
                <Field label="Link to sample work (optional)">
                  <input value={app.sample} onChange={(e) => setApp({ ...app, sample: e.target.value })} placeholder="https://…" style={inputStyle} />
                </Field>
                <button className="pill-btn" type="button" onClick={submitApplication} style={{ justifyContent: "center", padding: "15px 0", borderRadius: 12 }}>
                  <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>Submit application</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #C98A00", display: "flex", alignItems: "center", justifyContent: "center", font: '700 1rem/1 var(--font-inter-tight), sans-serif', color: "#C98A00", flexShrink: 0 }}>
                  {application.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ font: '600 16px/1.2 var(--font-inter-tight), sans-serif' }}>{application.name}</div>
                  <div className="mono-label" style={{ marginTop: 4 }}>
                    {application.county} · Application received {application.date} · Accreditation pending review
                  </div>
                </div>
              </div>

              <h2 className="display" style={{ margin: "0 0 6px" }}>File a report</h2>
              <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)" }}>
                Reports go to your regional editor. Approved stories publish to
                the Newsroom, your region feed and the club&apos;s microsite.
              </p>
              {justSubmitted && (
                <div style={{ border: "1px solid rgba(201,138,0,0.5)", background: "rgba(201,138,0,0.08)", borderRadius: 12, padding: "14px 16px", marginBottom: 16, font: '500 14px/1.4 var(--font-inter-tight), sans-serif', color: "#C98A00" }}>
                  Report submitted. It is now in editor review.
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Field label="Headline" error={storyErrors.title}>
                  <input value={story.title} onChange={(e) => setStory({ ...story, title: e.target.value })} placeholder="What happened?" style={storyErrors.title ? errStyle : inputStyle} />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14 }}>
                  <Field label="Region" error={storyErrors.region}>
                    <select value={story.region} onChange={(e) => setStory({ ...story, region: e.target.value })} style={{ ...(storyErrors.region ? errStyle : inputStyle), appearance: "none" }}>
                      <option value="">Select…</option>
                      {REGIONS.map((r) => (
                        <option key={r} value={r} style={{ background: "#141414" }}>{r}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Format">
                    <select value={story.format} onChange={(e) => setStory({ ...story, format: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                      {FORMATS.map((f) => (
                        <option key={f} value={f} style={{ background: "#141414" }}>{f}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14 }}>
                  <Field label="County" error={storyErrors.county}>
                    <input value={story.county} onChange={(e) => setStory({ ...story, county: e.target.value })} placeholder="e.g. Mombasa" style={storyErrors.county ? errStyle : inputStyle} />
                  </Field>
                  <Field label="Club (optional)">
                    <input value={story.club} onChange={(e) => setStory({ ...story, club: e.target.value })} placeholder="e.g. Shimanzi FC" style={inputStyle} />
                  </Field>
                </div>
                <Field label="Report" error={storyErrors.body}>
                  <textarea
                    value={story.body}
                    onChange={(e) => setStory({ ...story, body: e.target.value })}
                    rows={6}
                    placeholder="Match result, community event, club milestone…"
                    style={{ ...(storyErrors.body ? errStyle : inputStyle), resize: "vertical" }}
                  />
                </Field>
                <button className="pill-btn" type="button" onClick={submitStory} style={{ justifyContent: "center", padding: "15px 0", borderRadius: 12 }}>
                  <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>Submit for review</span>
                </button>
              </div>
            </>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="glass rv rv-d1" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
            <div className="mono-label" style={{ marginBottom: 16 }}>Your stories</div>
            {stories.length === 0 ? (
              <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.5)" }}>
                No stories filed yet. Your submitted reports and their review
                status will appear here.
              </p>
            ) : (
              stories.map((s, i) => (
                <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < stories.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ font: '600 14.5px/1.35 var(--font-inter-tight), sans-serif' }}>{s.title}</div>
                    <div className="mono-label" style={{ marginTop: 4 }}>
                      {s.region} · {s.county}{s.club ? ` · ${s.club}` : ""} · {s.format} · {s.date}
                    </div>
                  </div>
                  <span className="tag-pill gold-pill" style={{ flexShrink: 0 }}>{s.status}</span>
                </div>
              ))
            )}
          </div>
          <div className="glass rv rv-d2" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
            <div className="mono-label" style={{ marginBottom: 16 }}>How publishing works</div>
            {[
              ["1", "Apply", "One-time accreditation review by the editorial team"],
              ["2", "Draft & submit", "File your report with region, county and club tags"],
              ["3", "Editor review", "Your regional editor fact-checks and signs off"],
              ["4", "Published", "Live on the Newsroom, region feed and club microsite. You're paid per published story"],
            ].map(([n, t, d], i) => (
              <div key={n} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <span style={{ font: '700 14px/1.4 var(--font-inter-tight), sans-serif', color: i === 3 ? "#C98A00" : "rgba(255,255,255,0.35)", width: 20, flexShrink: 0 }}>{n}</span>
                <div>
                  <div style={{ font: '600 14.5px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <div style={{ font: '400 13px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
