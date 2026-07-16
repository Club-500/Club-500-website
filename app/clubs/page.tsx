"use client";

import { useMemo, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { CLUBS, REGION_OF_COUNTY } from "@/lib/data";

const RAIL: [string, number][] = [
  ["All", 33],
  ["Nairobi", 5],
  ["Central", 4],
  ["Rift Valley", 8],
  ["Eastern", 3],
  ["Coast", 4],
  ["Western", 5],
  ["Nyanza", 3],
  ["N. Eastern", 1],
];

const CLUB_STEPS: [string, string][] = [
  ["Apply", "Register your club's details: county, grounds, squad and current officials."],
  ["Onboard", "Adopt the Club500 constitution and community-ownership governance framework."],
  ["Go live", "Your club gets its own microsite, referral engine and sponsor rail, and joins the national platform."],
];

const FAN_STEPS: [string, string][] = [
  ["Pick your club", "Find your local club below and open its official site."],
  ["Become a fan", "Sign up on the club's site. It's free and takes a minute."],
  ["Get your link", "Your personal referral link is generated instantly. Share it and earn every time someone joins."],
];

export default function ClubsPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("All");
  const list = useMemo(
    () =>
      CLUBS.filter(([n, c]) => {
        const matchQ = (n + c).toLowerCase().includes(q.toLowerCase());
        const matchR = region === "All" || REGION_OF_COUNTY[c] === region;
        return matchQ && matchR;
      }),
    [q, region]
  );
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="33 onboarded · 467 to go">
        Our <span className="gold">clubs</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {RAIL.map(([r, n]) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className="tag-pill"
              style={{
                cursor: "pointer",
                background: region === r ? "#f0b429" : "transparent",
                color: region === r ? "#0a0a0a" : "rgba(255,255,255,0.75)",
                borderColor: region === r ? "#f0b429" : "rgba(255,255,255,0.18)",
              }}
            >
              {r} · {n}
            </button>
          ))}
        </div>
        <div
          className="rv"
          style={{
            marginBottom: 32,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search club or county…"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 999,
              color: "#fff",
              font: '500 14px/1 var(--font-inter-tight), sans-serif',
              padding: "14px 24px",
              outline: "none",
              flex: "1 1 220px",
              maxWidth: 340,
            }}
          />
          <span className="mono-label">{list.length} clubs</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
            marginBottom: 56,
          }}
        >
          {list.map(([name, county, img, site], i) => (
            <a
              key={name}
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className={"club-card glass rv rv-d" + (i % 4)}
              style={{ padding: 20, borderRadius: 20, display: "block", color: "#fff" }}
            >
              <div
                className="img-wrap"
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "#141414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async"
                  src={img}
                  alt={name}
                  style={{ width: "72%", height: "72%", objectFit: "contain" }}
                />
              </div>
              <div style={{ font: '600 16px/1.25 var(--font-inter-tight), sans-serif' }}>{name}</div>
              <div className="mono-label" style={{ margin: "6px 0 12px" }}>
                {county} county
              </div>
              <span className="tag-pill gold-pill">Visit club site →</span>
            </a>
          ))}
        </div>

        {/* How joining works */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: "clamp(22px, 3vw, 32px)" }}>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              How <span className="gold">clubs</span> join
            </h2>
            <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)" }}>
              Any community club in Kenya can apply. About 10 clubs are
              onboarded per county.
            </p>
            {CLUB_STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "#f0b429", width: 24, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>{d}</p>
                </div>
              </div>
            ))}
            <button className="pill-ghost" type="button" style={{ marginTop: 20 }}>
              Register your club
            </button>
          </div>
          <div className="glass rv rv-d1" style={{ padding: "clamp(22px, 3vw, 32px)" }}>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              How <span className="gold">fans</span> join
            </h2>
            <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.55)" }}>
              Free for every fan, and your referral link earns you money from
              day one.
            </p>
            {FAN_STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "#f0b429", width: 24, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>{d}</p>
                </div>
              </div>
            ))}
            <a href="/fanzone" className="pill-ghost" style={{ marginTop: 20, display: "inline-flex" }}>
              Learn about earning
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
