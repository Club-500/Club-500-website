"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { EVENT_IMG } from "@/lib/data";

const EVENTS: [string, string, string, string][] = [
  ["12 Jan", "Nairobi", "Club500 National Launch Tour — Nairobi Edition", "Official programme launch for clubs, communities, sponsors and media."],
  ["02 Feb", "Mombasa", "Coaching & Performance Workshop", "Coach training on new performance methodologies and sports science."],
  ["15 Feb", "Kisumu", "Community Ownership Forum", "Governance, the community share ownership model and investment opportunities."],
];

export default function EventsPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Workshops · Festivals · Trials">
        Club500 <em className="serif-accent gold">events</em>
      </PageHead>
      <div style={{ padding: "0 32px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "21/8", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={EVENT_IMG} alt="Club500 events" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.8), transparent 60%)" }} />
          <div style={{ position: "absolute", left: 28, bottom: 24 }} className="mono-label gold">
            Next up — National Launch Tour
          </div>
        </div>
      </div>
      <div style={{ padding: "40px 32px 96px", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column" }}>
        {EVENTS.map(([date, city, title, desc], i) => (
          <div key={title} className={"rv rv-d" + i} style={{ display: "flex", gap: 32, alignItems: "baseline", padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap" }}>
            <div style={{ width: 120, flexShrink: 0 }}>
              <div style={{ font: '600 26px/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }} className="gold">
                {date}
              </div>
              <div className="mono-label" style={{ marginTop: 8 }}>{city}</div>
            </div>
            <div style={{ flex: "1 1 300px" }}>
              <div style={{ font: '600 clamp(1.3rem, 2.6vw, 2rem)/1.15 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}>
                {title}
              </div>
              <p style={{ margin: "10px 0 0", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)", maxWidth: 560 }}>
                {desc}
              </p>
            </div>
            <span className="tag-pill">RSVP →</span>
          </div>
        ))}
      </div>
    </>
  );
}
