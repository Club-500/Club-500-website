const REFS: [string, string, number][] = [
  ["Brian Otieno", "Kisumu", 214],
  ["Amina Hassan", "Mombasa", 187],
  ["Kevin Kiprop", "Eldoret", 163],
  ["Grace Wanjiru", "Nairobi", 151],
  ["Dennis Koech", "Kericho", 139],
];

export default function TopReferrers() {
  return (
    <section style={{ padding: "96px 32px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="rv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <h2 className="display" style={{ margin: 0 }}>
          Top referrers <em className="serif-accent gold">this week</em>
        </h2>
        <span className="mono-label">Weekly bonus · KES 5,000</span>
      </div>
      <div>
        {REFS.map(([name, town, count], i) => (
          <div
            key={name}
            className={"rv rv-d" + Math.min(i, 2)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 3vw, 40px)",
              flexWrap: "wrap",
              padding: "clamp(20px, 3vw, 34px) 0",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <span
              className="display"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                color: i === 0 ? "#f0b429" : "rgba(255,255,255,0.25)",
                width: 70,
              }}
            >
              0{i + 1}
            </span>
            <div
              style={{
                width: "clamp(72px, 8vw, 110px)",
                height: "clamp(72px, 8vw, 110px)",
                borderRadius: "50%",
                flexShrink: 0,
                border: i === 0 ? "3px solid #f0b429" : "1px solid rgba(255,255,255,0.25)",
                background: "linear-gradient(135deg, #262626, #101010)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: '400 clamp(1.6rem, 3vw, 2.4rem)/1 var(--font-bebas-neue), sans-serif',
                color: i === 0 ? "#f0b429" : "rgba(255,255,255,0.85)",
              }}
            >
              {name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <div className="display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.2rem)" }}>
                {name}
              </div>
              <div className="mono-label" style={{ marginTop: 8 }}>
                {town}
                {i === 0 ? " · Bonus winner" : ""}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="display" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
                <span className={i === 0 ? "gold" : ""}>{count}</span>
              </div>
              <div className="mono-label" style={{ marginTop: 6 }}>
                Referrals
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
