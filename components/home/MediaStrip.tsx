import Link from "next/link";
import { EVENT_IMG, PODCAST_IMG } from "@/lib/data";

const ITEMS: [string, string, string, string][] = [
  ["Events", "Club500 National Launch Tour", EVENT_IMG, "/events"],
  ["Podcast", "Stories, strategy & transformation", PODCAST_IMG, "/podcast"],
];

export default function MediaStrip() {
  return (
    <section style={{ padding: "56px clamp(20px, 4vw, 32px)", maxWidth: 1280, margin: "0 auto" }}>
      <h2 className="display rv" style={{ margin: "0 0 32px" }}>
        Events &amp; <span className="gold">podcast</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 14,
        }}
      >
        {ITEMS.map(([kind, title, img, href], i) => (
          <Link
            key={kind}
            href={href}
            className={"club-card rv rv-d" + i}
            style={{
              display: "block",
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "16/9",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="img-wrap" style={{ position: "absolute", inset: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)",
              }}
            />
            <div style={{ position: "absolute", left: 24, right: 24, bottom: 22 }}>
              <div className="mono-label gold" style={{ color: "#f0b429", marginBottom: 8 }}>
                {kind}
              </div>
              <div
                style={{
                  font: '600 24px/1.15 var(--font-inter-tight), sans-serif',
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
