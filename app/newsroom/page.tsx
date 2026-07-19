"use client";

import { useState } from "react";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { EVENT_IMG } from "@/lib/data";
import { NEWS } from "@/lib/content";
import ShareButton from "@/components/ShareButton";

const FORMATS = ["All", "Articles", "Photo", "Video", "Podcast"];
const REGIONS = ["All", "Nairobi", "Central", "Rift Valley", "Eastern", "Coast", "Western", "Nyanza", "N. Eastern"];


export default function NewsroomPage() {
  const [format, setFormat] = useState("All");
  const [region, setRegion] = useState("All");

  const chip = (val: string, cur: string, set: (v: string) => void) => (
    <button
      key={val}
      onClick={() => set(val)}
      className="tag-pill"
      type="button"
      style={{
        cursor: "pointer",
        background: cur === val ? "#C98A00" : "transparent",
        color: cur === val ? "#0a0a0a" : "rgba(var(--tx),0.75)",
        borderColor: cur === val ? "#C98A00" : "rgba(var(--tx),0.18)",
      }}
    >
      {val}
    </button>
  );

  const list = NEWS.filter(
    ([r, f]) => (region === "All" || r === region) && (format === "All" || f === format)
  );

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="A national wire service. 8 regions, 500 clubs">
        The <span className="gold">newsroom</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "12px 18px", border: "1px solid rgba(var(--tx),0.12)", borderRadius: 999, overflow: "hidden" }}>
          <span className="live-dot" style={{ flexShrink: 0 }}></span>
          <span className="mono-label" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Live ticker: breaking headlines from every region, tagged by region, county and club
          </span>
        </div>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {FORMATS.map((f) => chip(f, format, setFormat))}
        </div>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {REGIONS.map((r) => chip(r, region, setRegion))}
        </div>

        {list.length > 0 && (
          <div className="rv" style={{ marginBottom: 14, position: "relative", borderRadius: 28, overflow: "hidden", border: "1px solid rgba(var(--tx),0.1)", aspectRatio: "21/9", minHeight: 300, background: "var(--imgbg)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src={EVENT_IMG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9), transparent 65%)" }} />
            <div style={{ position: "absolute", left: "clamp(20px, 4vw, 40px)", right: "clamp(20px, 4vw, 40px)", bottom: "clamp(20px, 3vw, 36px)" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                <span className="tag-pill gold-pill">{list[0][0]}</span>
                <span className="tag-pill">{list[0][1]}</span>
              </div>
              <div className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 3.6rem)", color: "#fff" }}>{list[0][2]}</div>
              <div className="mono-label" style={{ marginTop: 12, color: "rgba(255,255,255,0.7)" }}>By {list[0][3]} · ✔ Accredited</div>
            </div>
          </div>
        )}

        {list.length === 0 && (
          <div className="glass rv in" style={{ padding: "clamp(28px, 5vw, 48px)", textAlign: "center" }}>
            <div style={{ font: '700 20px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 8 }}>
              No stories here yet
            </div>
            <p style={{ margin: "0 auto 20px", maxWidth: 420, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>
              Nothing matches those filters right now. New reports land from
              every region each week.
            </p>
            <button
              className="pill-ghost"
              type="button"
              onClick={() => {
                setFormat("All");
                setRegion("All");
              }}
            >
              Show all stories
            </button>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {list.slice(1).map(([r, f, title, byline], i) => (
            <div key={title} className={"glass club-card rv rv-d" + (i % 3)} style={{ padding: 26, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <span className="tag-pill gold-pill">{r}</span>
                <span className="tag-pill">{f}</span>
              </div>
              <div className="display" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", flex: 1 }}>{title}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <div className="mono-label">By {byline} · ✔</div>
                <ShareButton title={title} text={`${title} — Club500 Newsroom`} />
              </div>
            </div>
          ))}
          <div className="rv" style={{ border: "1.5px dashed rgba(201,138,0,0.6)", borderRadius: 20, background: "rgba(201,138,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 180, padding: 26 }}>
            <span className="mono-label gold" style={{ color: "#C98A00" }}>In-feed sponsor slot</span>
          </div>
        </div>

        <div className="glass rv" style={{ marginTop: 56, padding: "clamp(24px, 4vw, 40px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, borderLeft: "3px solid #C98A00" }}>
          <div>
            <div className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>Report from your county</div>
            <p style={{ margin: "10px 0 0", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 480 }}>
              Draft → submit for review → editor approval → published and tagged to your region, county and club. One story, many surfaces.
            </p>
          </div>
          <Link href="/journalist">
            <button className="pill-btn" type="button" style={{ padding: "14px 26px", borderRadius: 999 }}>
              Get accredited →
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
