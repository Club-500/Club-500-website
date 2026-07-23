"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import FormModal from "@/components/FormModal";
import { useLang } from "@/lib/i18n";

const VOLUNTEER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdp3h4Au-2AwaRvaQad-AjJiMLEgp9HuvyhKcT7oW3AzTisVQ/viewform?embedded=true";

const AREAS: [string, string][] = [
  ["Coaching", "Train and mentor players at grassroots level"],
  ["Design", "Brand, kit and matchday creative"],
  ["Media", "Photography, video and storytelling"],
  ["Legal", "Governance and compliance support"],
  ["Finance", "Bookkeeping and financial planning"],
  ["Technology", "Digital tools and club platforms"],
  ["Events", "Matchday and community event support"],
];

const SIZE = 280;
const HUDDLE_DOTS = [
  { x: 8, y: 20, d: "0s" },
  { x: 88, y: 12, d: "0.3s" },
  { x: 92, y: 70, d: "0.6s" },
  { x: 12, y: 78, d: "0.9s" },
  { x: 50, y: 4, d: "1.2s" },
  { x: 50, y: 92, d: "1.5s" },
];

function VolunteerHuddle() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: SIZE, aspectRatio: "1/1", margin: "0 auto" }}>
      <div
        style={{
          position: "absolute",
          inset: "38%",
          borderRadius: "50%",
          background: "var(--gold)",
          boxShadow: "0 0 40px rgba(245,179,1,0.35)",
        }}
      />
      {HUDDLE_DOTS.map((p, i) => (
        <span
          key={i}
          className="volunteer-dot"
          style={
            {
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 22,
              height: 22,
              marginLeft: -11,
              marginTop: -11,
              borderRadius: "50%",
              background: "var(--blue-hover)",
              animationDelay: p.d,
              "--dx": `${((p.x - 50) / 100) * SIZE}px`,
              "--dy": `${((p.y - 50) / 100) * SIZE}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function VolunteerPage() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <>
      <RevealInit />
      <PageHead eyebrow={t("vp.eyebrow")}>
        {t("vp.h1a")} <span className="gold">{t("vp.h1b")}</span> {t("vp.h1c")}
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="glass rv"
          style={{
            padding: "clamp(28px, 5vw, 48px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(24px, 4vw, 44px)",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <VolunteerHuddle />
          <div>
            <p style={{ margin: "0 0 24px", font: '400 16px/1.65 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.7)" }}>
              Club500 runs on people who show up: coaches, designers, developers,
              accountants, photographers, lawyers. Offer what you&apos;re good at
              — the team matches volunteers to clubs and projects every week.
            </p>
            <button className="pill-btn ball-pop" type="button" onClick={() => setOpen(true)} style={{ padding: "15px 26px", borderRadius: 999 }}>
              <span className="txt">Offer Your Skills</span>
              <span className="circ">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="mono-label rv" style={{ marginBottom: 14 }}>Ways to help</div>
        <div className="rv rv-d1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {AREAS.map(([name, desc]) => (
            <div key={name} className="glass" style={{ padding: "18px 20px" }}>
              <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 6 }}>{name}</div>
              <p style={{ margin: 0, font: '400 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <FormModal title="Offer Your Skills" formUrl={VOLUNTEER_FORM_URL} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
