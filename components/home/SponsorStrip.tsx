import Link from "next/link";

const PARTNERS = [
  "National sponsor",
  "Regional sponsor",
  "County sponsor",
  "Pillar sponsor",
  "Your brand here",
];

export default function SponsorStrip() {
  return (
    <section style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="rv mono-label" style={{ marginBottom: 20 }}>
        Official partners
      </div>
      <div
        className="rv rv-d1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        {PARTNERS.map((p) => (
          <Link
            key={p}
            href="/partners"
            style={{
              border: "1.5px dashed rgba(255,255,255,0.22)",
              borderRadius: 16,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
              textAlign: "center",
            }}
          >
            <span className="mono-label">{p}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
