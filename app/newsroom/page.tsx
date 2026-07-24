import Link from "next/link";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const FORMATS = ["Articles", "Photo", "Video", "Podcast"];
const REGIONS = ["Nairobi", "Central", "Rift Valley", "Eastern", "Coast", "Western", "Nyanza", "N. Eastern"];

export default function NewsroomPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Coming soon · 8 regions, growing every month">
        The <span className="gold">newsroom</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/newsroom-banner.webp"
          alt="Club500 Newsroom — Every Club. Every County. Every Story."
          className="rv"
          style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 20, marginBottom: 28, display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <div
          className="glass rv"
          style={{
            padding: "clamp(28px, 5vw, 48px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 40,
            borderLeft: "3px solid var(--gold)",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h1 className="display" style={{ margin: "0 0 10px" }}>We&apos;re building a national newsroom</h1>
            <p style={{ margin: 0, font: '400 15px/1.65 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
              Club500 is recruiting accredited community journalists — including
              interns — in every county to report on grassroots football as it
              happens. Every story is reviewed by an editor before it publishes
              here, tagged by region, county and club.
            </p>
          </div>
          <Link href="/journalist">
            <button className="pill-btn ball-pop" type="button" style={{ padding: "14px 26px", borderRadius: 999 }}>
              Apply for accreditation →
            </button>
          </Link>
        </div>

        <div className="mono-label rv" style={{ marginBottom: 12 }}>What you&apos;ll be able to filter by, once stories start landing</div>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12, opacity: 0.55 }}>
          {FORMATS.map((f) => (
            <span key={f} className="tag-pill">{f}</span>
          ))}
        </div>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40, opacity: 0.55 }}>
          {REGIONS.map((r) => (
            <span key={r} className="tag-pill">{r}</span>
          ))}
        </div>

        <div className="glass rv in" style={{ padding: "clamp(28px, 5vw, 48px)", textAlign: "center" }}>
          <div style={{ font: '700 20px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 8 }}>
            No stories published yet
          </div>
          <p style={{ margin: "0 auto", maxWidth: 460, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>
            Reports from our accredited journalists will appear here as they&apos;re
            filed and approved. Know your county&apos;s football clubs and their
            stories? Be one of the first to report on them.
          </p>
        </div>
      </div>
    </>
  );
}
