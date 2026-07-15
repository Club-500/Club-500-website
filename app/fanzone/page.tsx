"use client";

import { useState } from "react";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const MVPS = ["Kiprop Kirui — Kapkatet Youth", "Salim Juma — Shimanzi FC", "Mary Achieng — Uhola FC"];
const LEADERS: [string, string, number][] = [
  ["Nakuru Massive", "Nakuru", 4210],
  ["Coast Ultras", "Mombasa", 3980],
  ["Green Army 254", "Kericho", 3644],
  ["City Faithful", "Nairobi", 3320],
];

export default function FanZonePage() {
  const [voted, setVoted] = useState<string | null>(null);
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Upload · Vote · Earn · Belong">
        The <em className="serif-accent gold">fan zone</em>
      </PageHead>
      <div style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>

        <div className="rv" style={{ background: "#f0b429", color: "#0a0a0a", borderRadius: 28, padding: "clamp(28px, 4vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)", marginBottom: 10 }}>Fan of the week</div>
            <div className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>Your moment could be <em className="serif-accent">next</em></div>
          </div>
          <button className="pill-btn" type="button" style={{ background: "#0a0a0a", color: "#fff" }}>
            <span className="txt">Upload your moment</span>
            <span className="circ" style={{ background: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>

        <div>
          <h2 className="display rv" style={{ margin: "0 0 28px" }}>From the <em className="serif-accent gold">stands</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {["Matchday crowd — Kivumbini", "Half-time flags — Webuye", "Goal celebration — Kamaliza"].map((cap, i) => (
              <div key={cap} className={"glass rv rv-d" + i} style={{ aspectRatio: "4/5", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 20, background: "linear-gradient(160deg, #1c1c1c, #101010)" }}>
                <span className="mono-label" style={{ marginBottom: 6 }}>Fan upload</span>
                <span style={{ font: '500 15px/1.4 var(--font-inter-tight), sans-serif' }}>{cap}</span>
              </div>
            ))}
            <div className="rv rv-d3" style={{ aspectRatio: "4/5", border: "1.5px dashed rgba(240,180,41,0.6)", borderRadius: 20, background: "rgba(240,180,41,0.05)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center" }}>
              <span className="mono-label gold" style={{ color: "#f0b429" }}>Sponsored — &quot;Photo of the match&quot; by [brand]</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: 30 }}>
            <div className="mono-label" style={{ marginBottom: 18 }}>Matchday · Vote MVP</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {MVPS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setVoted(m)}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                    borderRadius: 14,
                    padding: "16px 20px",
                    border: voted === m ? "1.5px solid #f0b429" : "1px solid rgba(255,255,255,0.15)",
                    background: voted === m ? "rgba(240,180,41,0.12)" : "transparent",
                    color: "#fff",
                    font: '500 15px/1.3 var(--font-inter-tight), sans-serif',
                    transition: "all .2s",
                  }}
                >
                  {m} {voted === m && <span className="gold">✓</span>}
                </button>
              ))}
            </div>
            {voted && <div className="mono-label gold" style={{ color: "#f0b429", marginTop: 16 }}>+50 fan points earned</div>}
          </div>
          <div className="glass rv rv-d1" style={{ padding: 30 }}>
            <div className="mono-label" style={{ marginBottom: 18 }}>National fan leaderboard</div>
            {LEADERS.map(([name, town, pts], i) => (
              <div key={name} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "14px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span className="display" style={{ fontSize: "1.4rem", color: i === 0 ? "#f0b429" : "rgba(255,255,255,0.3)", width: 34 }}>0{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ font: '600 16px/1.2 var(--font-inter-tight), sans-serif' }}>{name}</div>
                  <div className="mono-label" style={{ marginTop: 4 }}>{town}</div>
                </div>
                <span className="display" style={{ fontSize: "1.5rem" }}>{pts.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: 30, display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="mono-label">Your referral link</div>
            <div className="display" style={{ fontSize: "1.7rem" }}>Refer 100 → earn <span className="gold">KES 25,000</span></div>
            <Link href="/earn" className="gold" style={{ font: '600 14px/1 var(--font-inter-tight), sans-serif' }}>Open the Earn calculator →</Link>
          </div>
          <div className="glass rv rv-d1" style={{ padding: 30, display: "flex", flexDirection: "column", gap: 14, justifyContent: "center", alignItems: "flex-start" }}>
            <div className="mono-label">Merch</div>
            <div className="display" style={{ fontSize: "1.7rem" }}>Club store — <em className="serif-accent gold">coming soon</em></div>
            <span className="tag-pill">Get notified</span>
          </div>
        </div>
      </div>
    </>
  );
}
