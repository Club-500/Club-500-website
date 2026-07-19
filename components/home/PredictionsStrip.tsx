"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FIXTURES, SENTIMENT, BOOST_INDEX } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { useLiveOdds, loadPicks, savePicks, loadLocked, type Picks, type PickVal } from "@/lib/market";

export default function PredictionsStrip() {
  const { t } = useLang();
  const { odds, flash } = useLiveOdds();
  const [picks, setPicks] = useState<Picks>({});
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setPicks(loadPicks());
    setLocked(loadLocked());
  }, []);

  const pickCount = Object.values(picks).filter(Boolean).length;

  const toggle = (i: number, p: PickVal) => {
    if (locked) return;
    const next: Picks = { ...picks, [i]: picks[i] === p ? undefined : p };
    setPicks(next);
    savePicks(next);
  };

  return (
    <section
      style={{
        borderBottom: "1px solid rgba(var(--tx),0.08)",
        padding: "18px clamp(20px, 4vw, 32px) 20px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
            <span className="live-dot"></span>
            <span style={{ font: '700 14px/1 var(--font-inter-tight), sans-serif' }}>
              {t("pred.market")}
            </span>
            <span className="mono-label">· {t("fixtures.title")}</span>
          </span>
          <Link
            href="/fanzone#predict"
            className="gold"
            style={{ font: '700 13.5px/1 var(--font-inter-tight), sans-serif', whiteSpace: "nowrap" }}
          >
            {locked
              ? t("pred.locked")
              : pickCount > 0
              ? `${t("pred.slip")}: ${pickCount}/${FIXTURES.length} →`
              : `${t("fixtures.cta")} →`}
          </Link>
        </div>

        <div className="no-scrollbar" style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 2 }}>
          {FIXTURES.map(([when, home, away], i) => (
            <div
              key={home}
              style={{
                flexShrink: 0,
                minWidth: 265,
                border: picks[i] ? "1px solid rgba(46,155,99,0.55)" : "1px solid rgba(var(--tx),0.12)",
                borderRadius: 14,
                padding: "12px 14px",
                transition: "border-color .2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ font: '650 13.5px/1.3 var(--font-inter-tight), sans-serif' }}>
                  {home} <span style={{ color: "rgba(var(--tx),0.4)" }}>v</span> {away}
                </span>
                {i === BOOST_INDEX ? (
                  <span style={{ font: '700 9.5px/1 var(--font-inter-tight), sans-serif', color: "#141310", background: "#C98A00", borderRadius: 999, padding: "4px 8px", flexShrink: 0 }}>
                    2x
                  </span>
                ) : (
                  <span className="mono-label" style={{ fontSize: 10.5, flexShrink: 0 }}>{when.split("·")[1]}</span>
                )}
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {(["1", "X", "2"] as PickVal[]).map((p, j) => {
                  const active = picks[i] === p;
                  const isFlash = flash && flash.i === i && flash.j === j;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => toggle(i, p)}
                      aria-pressed={active}
                      className={isFlash ? (flash!.up ? "odds-up" : "odds-down") : ""}
                      style={{
                        flex: 1,
                        cursor: locked ? "default" : "pointer",
                        borderRadius: 10,
                        padding: "7px 0 6px",
                        border: active ? "1.5px solid #1B5E3C" : "1px solid rgba(var(--tx),0.16)",
                        background: active ? "#1B5E3C" : "transparent",
                        color: active ? "#fff" : "var(--fg)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        transition: "all .18s",
                        opacity: locked && !active ? 0.45 : 1,
                      }}
                    >
                      <span style={{ font: '500 9.5px/1 var(--font-inter-tight), sans-serif', color: active ? "rgba(255,255,255,0.75)" : "rgba(var(--tx),0.5)" }}>
                        {j === 0 ? "1" : j === 1 ? "X" : "2"}
                      </span>
                      <span style={{ font: '800 14.5px/1 var(--font-inter-tight), sans-serif', fontVariantNumeric: "tabular-nums" }}>
                        {odds[i][j].toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div style={{ display: "flex", height: 3, borderRadius: 2, overflow: "hidden", gap: 2, marginTop: 8 }}>
                <span style={{ width: `${SENTIMENT[i][0]}%`, background: "#2E9B63" }}></span>
                <span style={{ width: `${SENTIMENT[i][1]}%`, background: "rgba(var(--tx),0.18)" }}></span>
                <span style={{ width: `${SENTIMENT[i][2]}%`, background: "#C98A00" }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
