import Link from "next/link";

const TILES: [string, string, string][] = [
  ["Clubs", "Find a club near you — 8 regions, 47 counties", "/clubs"],
  ["Newsroom", "Live coverage from every region", "/newsroom"],
  ["Fan Zone", "Upload, vote, earn, belong", "/fanzone"],
  ["Earn", "Your link is your earning power", "/earn"],
];

export default function ActionTiles() {
  return (
    <section style={{ padding: "72px 32px 0", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 14,
        }}
      >
        {TILES.map(([t, d, href], i) => (
          <Link
            key={t}
            href={href}
            className={"glass club-card rv rv-d" + i}
            style={{
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <span
              style={{
                font: '600 15px/1 var(--font-inter-tight), sans-serif',
                color: "rgba(255,255,255,0.3)",
              }}
            >
              0{i + 1}
            </span>
            <div>
              <div className="display" style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", color: "#fff" }}>
                {t}
              </div>
              <p
                style={{
                  margin: "10px 0 0",
                  font: '400 14px/1.5 var(--font-inter-tight), sans-serif',
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {d}
              </p>
            </div>
            <span className="gold" style={{ font: '600 14px/1 var(--font-inter-tight), sans-serif' }}>
              Enter →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
