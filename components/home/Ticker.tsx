const ITEMS = [
  "33 of 500 clubs onboarded",
  "47 counties · 8 regions",
  "An Ubuntu Initiative",
  "Community-owned football",
  "5,000+ jobs targeted by 2028",
];

export default function Ticker() {
  const row = ITEMS.concat(ITEMS);
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        overflow: "hidden",
        padding: "14px 0",
        background: "#0a0a0a",
      }}
    >
      <div className="ticker-track">
        {row.map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              paddingRight: 20,
              font: '500 14px/1 var(--font-inter-tight), sans-serif',
              color: "rgba(255,255,255,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            {t} <span className="gold" style={{ fontSize: 16 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
