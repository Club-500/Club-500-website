"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { EVENT_IMG } from "@/lib/data";

const EVENTS: [string, string, string, string, string][] = [
  ["12 Jan", "Nairobi", "Club500 National Launch Tour: Nairobi Edition", "Official programme launch for clubs, communities, sponsors and media.", "Launch"],
  ["02 Feb", "Mombasa", "Coaching & Performance Workshop", "Coach training on new performance methodologies and sports science.", "Workshop"],
  ["15 Feb", "Kisumu", "Community Ownership Forum", "Governance, the community share ownership model and investment opportunities.", "Forum"],
];

export default function EventsPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Workshops · Festivals · Trials">
        Club500 <span className="gold">events</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            position: "relative",
            aspectRatio: "21/7",
            minHeight: 200,
            marginBottom: 14,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src={EVENT_IMG} alt="Club500 events" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent 60%)" }} />
          <div style={{ position: "absolute", left: "clamp(18px, 3vw, 28px)", bottom: "clamp(14px, 2.5vw, 22px)", right: "clamp(18px, 3vw, 28px)" }}>
            <span className="tag-pill gold-pill">Next up</span>
            <div className="display" style={{ marginTop: 10 }}>National Launch Tour</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 14 }}>
          {EVENTS.map(([date, city, title, desc, kind], i) => (
            <div
              key={title}
              className={"glass club-card rv rv-d" + i}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag-pill">{kind}</span>
                <div style={{ textAlign: "right" }}>
                  <div className="gold" style={{ font: '700 18px/1 var(--font-inter-tight), sans-serif' }}>{date}</div>
                  <div className="mono-label" style={{ marginTop: 4 }}>{city}</div>
                </div>
              </div>
              <div style={{ font: '600 18px/1.3 var(--font-inter-tight), sans-serif', flex: 1 }}>{title}</div>
              <p style={{ margin: 0, font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>{desc}</p>
              <button className="pill-ghost" type="button" style={{ alignSelf: "flex-start", padding: "10px 20px" }}>
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
