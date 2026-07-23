"use client";

import { ALL_COUNTIES, LIVE_COUNTIES } from "@/lib/data";
import KenyaMap from "@/components/KenyaMap";

export default function CountyGrid() {
  return (
    <div className="glass rv" style={{ padding: "clamp(22px, 3.5vw, 32px)", marginBottom: 56 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <div>
          <h2 className="display" style={{ margin: 0 }}>
            Where we are, county by <span className="gold">county</span>
          </h2>
          <p style={{ margin: "6px 0 0", font: '400 14px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
            Blue counties have live clubs. The rest are on the way.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, font: '500 12.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
            <span style={{ width: 11, height: 11, borderRadius: 3, background: "var(--blue)", display: "inline-block" }}></span>
            Live · {LIVE_COUNTIES.size}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, font: '500 12.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.65)" }}>
            <span style={{ width: 11, height: 11, borderRadius: 3, border: "1px solid rgba(var(--tx),0.3)", display: "inline-block" }}></span>
            Coming · {47 - LIVE_COUNTIES.size}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "clamp(20px, 3vw, 36px)", flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 260px", maxWidth: 380, minWidth: 240, margin: "0 auto" }}>
          <KenyaMap />
        </div>
        <div
          style={{
            flex: "2 1 320px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))",
            gap: 8,
            alignContent: "flex-start",
          }}
        >
        {ALL_COUNTIES.map((c) => {
          const live = LIVE_COUNTIES.has(c);
          return (
            <div
              key={c}
              title={live ? `${c}: clubs live` : `${c}: coming soon`}
              style={{
                padding: "10px 8px",
                borderRadius: 10,
                textAlign: "center",
                font: '600 12px/1.2 var(--font-inter-tight), sans-serif',
                background: live ? "var(--blue)" : "transparent",
                color: live ? "#fff" : "rgba(var(--tx),0.55)",
                border: live ? "1px solid var(--blue)" : "1px solid rgba(var(--tx),0.14)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {c}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
