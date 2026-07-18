import Link from "next/link";
import { CLUBS } from "@/lib/data";

export default function FeaturedClubs() {
  return (
    <section style={{ padding: "32px clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="rv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 40,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div className="mono-label" style={{ marginBottom: 8 }}>
            Meet the clubs already building the movement.
          </div>
          <h2 className="display" style={{ margin: 0 }}>
            Featured <span className="gold">clubs</span>
          </h2>
        </div>
        <Link href="/clubs" className="tag-pill">
          All clubs →
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 14,
        }}
      >
        {CLUBS.slice(0, 5).map(([name, county, img, site], i) => (
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className={"club-card rv rv-d" + Math.min(i, 4)}
            style={{ display: "block" }}
          >
            <div
              className="img-wrap"
              style={{
                aspectRatio: "1/1",
                borderRadius: 20,
                overflow: "hidden",
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async"
                src={img}
                alt={name}
                style={{ width: "78%", height: "78%", objectFit: "contain" }}
              />
            </div>
            <div style={{ padding: "16px 6px 0" }}>
              <div style={{ font: '600 16px/1.25 var(--font-inter-tight), sans-serif', color: "#fff" }}>
                {name}
              </div>
              <div className="mono-label" style={{ marginTop: 6 }}>
                {county} county
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
