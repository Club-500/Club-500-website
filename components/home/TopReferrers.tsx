const REFS: [string, string, number][] = [
  ["Brian Otieno", "Kisumu", 214],
  ["Amina Hassan", "Mombasa", 187],
  ["Kevin Kiprop", "Eldoret", 163],
  ["Grace Wanjiru", "Nairobi", 151],
  ["Dennis Koech", "Kericho", 139],
];

export default function TopReferrers() {
  return (
    <section style={{ padding: "64px clamp(20px, 4vw, 32px)", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="rv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <h2 className="display" style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Top referrers <span className="gold">this week</span>
        </h2>
        <span className="mono-label">Weekly bonus · KES 5,000</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 14,
        }}
      >
        {REFS.map(([name, town, count], i) => (
          <div
            key={name}
            className={"club-card rv rv-d" + Math.min(i, 3)}
            style={{
              position: "relative",
              borderRadius: 20,
              padding: "22px 20px",
              overflow: "hidden",
              background:
                i === 0
                  ? "radial-gradient(circle at 50% 0%, rgba(201,138,0,0.28) 0%, rgba(201,138,0,0.06) 45%, rgba(var(--tx),0.04) 75%)"
                  : "rgba(var(--tx),0.04)",
              border: i === 0 ? "1px solid rgba(201,138,0,0.4)" : "1px solid rgba(var(--tx),0.09)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <span
                className="display"
                style={{ fontSize: "1.3rem", color: i === 0 ? "#C98A00" : "rgba(var(--tx),0.3)" }}
              >
                0{i + 1}
              </span>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: i === 0 ? "2px solid #C98A00" : "1px solid rgba(var(--tx),0.25)",
                  background: "linear-gradient(135deg, #262626, #101010)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  font: '700 0.95rem/1 var(--font-inter-tight), sans-serif',
                  color: i === 0 ? "#C98A00" : "rgba(var(--tx),0.85)",
                }}
              >
                {name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
            </div>
            <div style={{ font: '600 16px/1.25 var(--font-inter-tight), sans-serif' }}>{name}</div>
            <div className="mono-label" style={{ marginTop: 6 }}>
              {town}
              {i === 0 ? " · Bonus winner" : ""}
            </div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid rgba(var(--tx),0.1)",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <span className="display" style={{ fontSize: "1.9rem" }}>
                <span className={i === 0 ? "gold" : ""}>{count}</span>
              </span>
              <span className="mono-label">Referrals</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
