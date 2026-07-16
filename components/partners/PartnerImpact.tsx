const IMPACTS: [string, string, string, string, string][] = [
  ["Platinum · National", "Banking rails for 33 clubs", "Every onboarded club now has a club bank account and instant M-Pesa withdrawals for fan referral earnings.", "KES 4.2M", "paid out to fans"],
  ["Gold · Rift Valley", "12 full kit sets delivered", "Home and away kits, boots and training equipment for every onboarded club in the region.", "380", "players kitted"],
  ["Silver · Kajiado county", "Pitch renovation — Kajiado Youth", "Regraded pitch, new goalposts and perimeter fencing at the county's flagship community ground.", "1", "ground renovated"],
  ["Pillar · Health & Performance", "Sports medicine clinics", "Monthly physiotherapy and injury-screening clinics rotating through 8 regions.", "900+", "athlete check-ups"],
];

export default function PartnerImpact() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
        <h2 className="display" style={{ margin: 0 }}>What partners have <span className="gold">delivered</span></h2>
        <span className="mono-label">Real impact · updated monthly</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        {IMPACTS.map(([tier, title, desc, stat, statLabel], i) => (
          <div key={title} className={"glass club-card rv rv-d" + i} style={{ padding: 30, display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>{tier}</span>
            <div className="display" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>{title}</div>
            <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)", flex: 1 }}>{desc}</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
              <div className="display gold" style={{ fontSize: "2.2rem" }}>{stat}</div>
              <div className="mono-label" style={{ marginTop: 4 }}>{statLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
