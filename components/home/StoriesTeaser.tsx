import Link from "next/link";

const ITEMS: [string, string, string, string][] = [
  ["Newsroom", "Club and movement news from every county.", "/newsroom", "Read the latest"],
  ["Events", "The National Launch Tour and local club events.", "/events", "See what's on"],
  ["Podcast", "Stories, strategy and transformation.", "/podcast", "Listen in"],
];

export default function StoriesTeaser() {
  return (
    <section style={{ padding: "32px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
      <h2 className="display rv" style={{ margin: "0 0 24px" }}>
        Stories from the <span className="gold">grassroots</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 14,
        }}
      >
        {ITEMS.map(([title, desc, href, cta], i) => (
          <Link
            key={title}
            href={href}
            className={"glass club-card rv rv-d" + i}
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, color: "#fff" }}
          >
            <div style={{ font: '600 19px/1.2 var(--font-inter-tight), sans-serif' }}>{title}</div>
            <p style={{ margin: 0, font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)", flex: 1 }}>
              {desc}
            </p>
            <span className="gold" style={{ font: '600 14px/1 var(--font-inter-tight), sans-serif' }}>
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
