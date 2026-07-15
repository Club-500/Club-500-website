"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const EPS: [string, string, string][] = [
  ["EP 01", "Why community-owned clubs are the future", "CEO, Ubuntu Impact Labs"],
  ["EP 02", "Inside the commercial engine of modern football clubs", "Commercial Director, Club500"],
  ["EP 03", "Youth development: the next generation of talent", "Head of Academies"],
  ["EP 04", "Sports science & athlete wellness in grassroots football", "Head of Health & Performance"],
];

export default function PodcastPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Stories · Strategy · Transformation">
        The Club500 <em className="serif-accent gold">podcast</em>
      </PageHead>
      <div style={{ padding: "0 32px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "16/9", maxWidth: 860 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ejMjl-svEUE"
            title="Club500 Podcast"
            frameBorder="0"
            allowFullScreen
            style={{ display: "block" }}
          />
        </div>
      </div>
      <div style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto" }}>
        {EPS.map(([num, title, guest], i) => (
          <div key={num} className={"rv rv-d" + (i % 3)} style={{ display: "flex", gap: 28, alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap" }}>
            <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif', color: "#f0b429", letterSpacing: "0.12em", width: 60 }}>
              {num}
            </span>
            <div style={{ flex: "1 1 300px" }}>
              <div style={{ font: '600 clamp(1.2rem, 2.3vw, 1.8rem)/1.2 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }}>
                {title}
              </div>
              <div className="mono-label" style={{ marginTop: 8 }}>Guest — {guest}</div>
            </div>
            <span className="tag-pill">Listen →</span>
          </div>
        ))}
      </div>
    </>
  );
}
