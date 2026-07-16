import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import PartnerImpact from "@/components/partners/PartnerImpact";

const TIERS: [string, string, string, string][] = [
  ["Platinum", "National", "Platform-wide presence: every page, every microsite, every broadcast.", "#cfd8e3"],
  ["Gold", "Regional", "Own one of 8 regions: every club, story and event inside it.", "#f0b429"],
  ["Silver", "County", "Back a county and its cluster of community clubs.", "#a7a7a7"],
  ["Pillar", "Continental", "Attach your brand to one of the 8 strategic pillars of the movement.", "#8d99a6"],
];

export default function PartnersPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="National · Regional · County · Pillar">
        Partner with the <span className="gold">movement</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
        <p className="rv" style={{ margin: 0, maxWidth: 700, font: '400 clamp(1.2rem, 2vw, 1.6rem)/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.8)" }}>
          Four tiers, one inheritance system: sponsor a county and your brand automatically appears on every club microsite inside it. No per-club negotiation, ever.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {TIERS.map(([badge, scope, desc, color], i) => (
            <div key={badge} className={"glass club-card rv rv-d" + i} style={{ padding: 30, display: "flex", flexDirection: "column", gap: 20, borderTop: `3px solid ${color}` }}>
              <span className="tag-pill" style={{ alignSelf: "flex-start", borderColor: color, color }}>{badge}</span>
              <div className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{scope}</div>
              <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)", flex: 1 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }} className="rv">
          {["National sponsor", "Regional sponsor", "County sponsor", "Pillar sponsor", "Your brand here"].map((l) => (
            <div key={l} style={{ border: "1.5px dashed rgba(255,255,255,0.25)", borderRadius: 16, height: 90, display: "flex", alignItems: "center", justifyContent: "center", padding: 12, textAlign: "center" }}>
              <span className="mono-label">{l}</span>
            </div>
          ))}
        </div>
        <PartnerImpact />
        <div className="rv" style={{ background: "#f0b429", color: "#0a0a0a", borderRadius: 28, padding: "clamp(28px, 4vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>Become a partner</div>
          <button className="pill-btn" type="button" style={{ background: "#0a0a0a", color: "#fff" }}>
            <span className="txt">Get the sponsorship pack</span>
            <span className="circ" style={{ background: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
