"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { PODCAST } from "@/lib/content";


const CATEGORIES = [
  "Governance & Ownership",
  "Finance & Sustainability",
  "Sports Science & Health",
  "Branding & Media",
];

export default function PodcastPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="The Club500 podcast">
        Stories, Strategy & Transformation from Kenya&apos;s{" "}
        <span className="gold">Football Future</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
          {CATEGORIES.map((c) => (
            <span key={c} className="tag-pill">{c}</span>
          ))}
        </div>
        <div
          className="rv rv-d1"
          style={{
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(var(--tx),0.1)",
            aspectRatio: "16/9",
            maxWidth: 860,
          }}
        >
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
      <div style={{ padding: "16px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {PODCAST.map(([num, title, guest, summary], i) => (
            <div
              key={num}
              className={"glass club-card rv rv-d" + (i % 4)}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>{num}</span>
              <div style={{ font: '600 17px/1.35 var(--font-inter-tight), sans-serif' }}>{title}</div>
              <div className="mono-label">Guest: {guest}</div>
              <p style={{ margin: 0, font: '400 13.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", flex: 1 }}>
                {summary}
              </p>
              <a
                href="https://www.youtube.com/embed/ejMjl-svEUE"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-ghost"
                style={{ alignSelf: "flex-start", padding: "10px 20px" }}
              >
                Listen ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
