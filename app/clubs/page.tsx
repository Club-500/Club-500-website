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
        Our <em className="serif-accent gold">clubs</em>
      </PageHead>
      <div style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto" }}>
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
            marginBottom: 36,
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
              minWidth: 280,
            }}
          />
          <span className="mono-label">{list.length} clubs</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 14,
          }}
        >
          {list.map(([name, county, img], i) => (
            <div
              key={name}
              className={"club-card glass rv rv-d" + (i % 4)}
              style={{ padding: 20, borderRadius: 24 }}
            >
              <div
                className="img-wrap"
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#141414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={name}
                  style={{ width: "72%", height: "72%", objectFit: "contain" }}
                />
              </div>
              <div style={{ font: '600 17px/1.25 var(--font-inter-tight), sans-serif' }}>{name}</div>
              <div className="mono-label" style={{ margin: "8px 0 14px" }}>
                {county} county
              </div>
              <span className="tag-pill gold-pill">Become a fan →</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
