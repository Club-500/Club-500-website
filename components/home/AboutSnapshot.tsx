import Link from "next/link";

export default function AboutSnapshot() {
  return (
    <section style={{ padding: "24px clamp(20px, 4vw, 32px) 56px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid #1B5E3C" }}
      >
        <p
          style={{
            margin: "0 0 18px",
            maxWidth: 820,
            font: '600 clamp(1.15rem, 2.2vw, 1.55rem)/1.5 var(--font-inter-tight), sans-serif',
            letterSpacing: "-0.01em",
          }}
        >
          Club500 connects grassroots football clubs across Kenya&apos;s 47
          counties with the governance, funding, media and fan support they
          need to grow. Local passion, turned into lasting community impact.
        </p>
        <Link href="/about" className="gold" style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>
          Read our full story →
        </Link>
      </div>
    </section>
  );
}
