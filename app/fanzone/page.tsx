"use client";

import { useEffect, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import ClubCrest from "@/components/ClubCrest";
import { FIXTURES, ODDS, SENTIMENT, BOOST_INDEX } from "@/lib/content";
import { CLUBS, clubShort } from "@/lib/data";
import { useLiveOdds, loadPicks, savePicks, loadLocked, saveLocked } from "@/lib/market";
import { useLang } from "@/lib/i18n";
import CapturePill from "@/components/CapturePill";
import StrikerStreak from "@/components/fanzone/StrikerStreak";

const CREST_BY_SHORT: Record<string, string> = Object.fromEntries(
  CLUBS.map(([name, , img]) => [clubShort(name), img])
);

type Pick = "1" | "X" | "2";


export default function FanZonePage() {
  const { t } = useLang();
  const [picks, setPicks] = useState<Record<number, Pick>>({});
  const [locked, setLocked] = useState(false);
  const [burst, setBurst] = useState(false);
  const { odds: liveOdds, flash } = useLiveOdds();

  useEffect(() => {
    setPicks(loadPicks() as Record<number, Pick>);
    setLocked(loadLocked());
  }, []);
  const chosen = Object.entries(picks).filter(([, v]) => v);
  const pickCount = chosen.length;
  const combined = chosen.reduce((acc, [i, p]) => {
    const j = p === "1" ? 0 : p === "X" ? 1 : 2;
    const mult = ODDS[Number(i)][j] * (Number(i) === BOOST_INDEX ? 2 : 1);
    return acc * mult;
  }, 1);
  const potential = pickCount === 0 ? 0 : Math.round(100 * combined);

  const setPick = (i: number, p: Pick) =>
    setPicks((prev) => {
      const next = { ...prev, [i]: prev[i] === p ? undefined : p } as Record<number, Pick>;
      savePicks(next);
      return next;
    });

  return (
    <>
      <RevealInit />
      <PageHead eyebrow={t("fzp.eyebrow")}>
        {t("fzp.h1a")} <span className="gold">{t("fzp.h1b")}</span>.
      </PageHead>
      <div
        style={{
          padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(30px, 5vw, 48px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/fanzone-banner.webp"
          alt="Fan Zone — Every Fan. Every Club. One Movement."
          className="rv"
          style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 20, display: "block", margin: "0 auto" }}
        />

        <p
          className="rv"
          style={{
            margin: 0,
            maxWidth: 640,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(var(--tx),0.72)",
          }}
        >
          {t("fzp.intro")}
        </p>

        <nav
          aria-label="Fan Zone sections"
          className="no-scrollbar fz-chipnav"
          style={{
            position: "sticky",
            top: 96,
            zIndex: 12,
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "8px 4px",
            margin: "-16px -4px 0",
            background: "var(--bg)",
          }}
        >
          {[["#game", "Play"], ["#predict", t("fzp.predict")], ["#fantasy", "Fantasy"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="tag-pill"
              style={{ flexShrink: 0, background: "var(--glass-bg)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Striker Streak mini game */}
        <div id="game" className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)", scrollMarginTop: 120 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="tag-pill gold-pill">Half-time game</span>
              <h2 className="display" style={{ margin: 0 }}>Striker Streak</h2>
            </div>
            <span className="mono-label">Works offline · no sign-in needed</span>
          </div>
          <StrikerStreak />
        </div>

        {/* Predictions market */}
        <div id="predict" className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)", scrollMarginTop: 120 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="live-dot"></span>
              <h2 className="display" style={{ margin: 0 }}>{t("fzp.predictions")}</h2>
            </div>
            <span className="mono-label">{t("fzp.settles")}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
            {FIXTURES.map(([when, home, away, venue], i) => {
              const odds = liveOdds[i];
              const sent = SENTIMENT[i];
              return (
                <div key={home} className={"pred-card" + (picks[i] ? " picked" : "")}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <span className="mono-label">{when}</span>
                    {i === BOOST_INDEX && (
                      <span style={{ font: '700 11px/1 var(--font-inter-tight), sans-serif', color: "#141310", background: "var(--gold)", borderRadius: 999, padding: "5px 10px" }}>
                        2x BOOST
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {CREST_BY_SHORT[home] && <ClubCrest name={home} img={CREST_BY_SHORT[home]} size="30px" />}
                    <span style={{ font: '700 16.5px/1.35 var(--font-inter-tight), sans-serif', flex: 1 }}>
                      {home} <span style={{ color: "rgba(var(--tx),0.4)", fontWeight: 500 }}>v</span> {away}
                    </span>
                    {CREST_BY_SHORT[away] && <ClubCrest name={away} img={CREST_BY_SHORT[away]} size="30px" />}
                  </div>
                  <div className="mono-label" style={{ marginTop: -6 }}>{venue}</div>
                  <div style={{ display: "flex", gap: 8 }} role="group" aria-label={`Prediction: ${home} v ${away}`}>
                    {(["1", "X", "2"] as Pick[]).map((p, j) => {
                      const active = picks[i] === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          aria-pressed={active}
                          className={
                            "odds-btn" +
                            (active ? " active" : "") +
                            (flash && flash.i === i && flash.j === j ? (flash.up ? " odds-up" : " odds-down") : "")
                          }
                          onClick={() => setPick(i, p)}
                          disabled={locked}
                          style={{ opacity: locked && !active ? 0.45 : 1 }}
                        >
                          <span style={{ font: '500 10.5px/1 var(--font-inter-tight), sans-serif', letterSpacing: "0.04em", color: active ? "rgba(255,255,255,0.75)" : "rgba(var(--tx),0.5)" }}>
                            {j === 0 ? home.split(" ")[0] : j === 1 ? "Draw" : away.split(" ")[0]}
                          </span>
                          <span style={{ font: '800 17px/1 var(--font-inter-tight), sans-serif', fontVariantNumeric: "tabular-nums" }}>
                            {odds[j].toFixed(2)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", gap: 2 }}>
                      <span style={{ width: `${sent[0]}%`, background: "var(--blue-hover)" }}></span>
                      <span style={{ width: `${sent[1]}%`, background: "rgba(var(--tx),0.2)" }}></span>
                      <span style={{ width: `${sent[2]}%`, background: "var(--gold)" }}></span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                      <span style={{ font: '500 10.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.45)" }}>{sent[0]}%</span>
                      <span style={{ font: '500 10.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.45)" }}>{sent[1]}%</span>
                      <span style={{ font: '500 10.5px/1 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.45)" }}>{sent[2]}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* pick slip */}
          <div
            style={{
              marginTop: 16,
              borderRadius: 14,
              border: pickCount > 0 ? "1px solid rgba(58, 95, 217,0.5)" : "1px dashed rgba(var(--tx),0.2)",
              background: pickCount > 0 ? "rgba(58, 95, 217,0.08)" : "transparent",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              position: "relative",
              overflow: "visible",
            }}
          >
            {burst && (
              <span aria-hidden="true" className="confetti-stage">
                {Array.from({ length: 18 }).map((_, k) => (
                  <i key={k} className="confetti-bit" style={{ left: `${(k * 137) % 100}%`, animationDelay: `${(k % 6) * 60}ms`, background: k % 3 === 0 ? "var(--gold)" : k % 3 === 1 ? "var(--blue-hover)" : "#e9e9e4" }} />
                ))}
              </span>
            )}
            {locked ? (
              <>
                <span style={{ font: '700 15px/1.3 var(--font-inter-tight), sans-serif', color: "var(--blue-hover)" }}>
                  {t("fzp.locked")}
                </span>
                <span className="mono-label">Settles Sun 18:00 · potential +{potential.toLocaleString()} pts</span>
              </>
            ) : (
              <>
                <div style={{ display: "flex", gap: 18, alignItems: "baseline", flexWrap: "wrap" }}>
                  <span style={{ font: '700 15px/1 var(--font-inter-tight), sans-serif' }}>
                    Slip · {pickCount}/{FIXTURES.length}
                  </span>
                  {pickCount > 0 && (
                    <>
                      <span className="mono-label">Combined {combined.toFixed(2)}x</span>
                      <span style={{ font: '800 16px/1 var(--font-inter-tight), sans-serif' }} className="gold">
                        +{potential.toLocaleString()} pts
                      </span>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  disabled={pickCount === 0}
                  onClick={() => {
                    setLocked(true);
                    saveLocked(true);
                    setBurst(true);
                    setTimeout(() => setBurst(false), 1600);
                  }}
                  style={{
                    background: pickCount > 0 ? "var(--blue)" : "rgba(var(--tx),0.08)",
                    color: pickCount > 0 ? "#fff" : "rgba(var(--tx),0.4)",
                    border: "none",
                    borderRadius: 999,
                    padding: "12px 26px",
                    font: '700 14px/1 var(--font-inter-tight), sans-serif',
                    cursor: pickCount > 0 ? "pointer" : "default",
                  }}
                >
                  {t("fzp.confirm")}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Fantasy league + fan of the week */}
        <div id="fantasy" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, scrollMarginTop: 120 }}>
          <div className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)", display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>Season One</span>
            <h2 className="display" style={{ margin: 0 }}>Club500 Fantasy League</h2>
            <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", flex: 1 }}>
              Build your XI from real players across all onboarded clubs. Weekly
              scores from real match data, county derbies, and a national
              table. Launching with the national season.
            </p>
            <div style={{ alignSelf: "flex-start" }}>
              <CapturePill
                label="Join the waitlist"
                doneText="You're on the waitlist"
                storageKey="c500-fantasy-waitlist"
              />
            </div>
          </div>
          <div
            className="rv rv-d1"
            style={{
              background: "var(--gold)",
              color: "#0a0a0a",
              borderRadius: 20,
              padding: "clamp(20px, 3vw, 30px)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)" }}>Top fan of the week</div>
            <div style={{ display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap", flex: 1 }}>
              {/* polaroid-style frame */}
              <div
                style={{
                  background: "#fdfcf7",
                  padding: "9px 9px 30px",
                  borderRadius: 5,
                  transform: "rotate(-3deg)",
                  boxShadow: "0 14px 32px -12px rgba(0,0,0,0.5)",
                  width: 138,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(160deg, #101a3a, #1D3FA1)",
                    aspectRatio: "1/1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                  }}
                >
                  <span style={{ font: '800 2.4rem/1 var(--font-inter-tight), sans-serif', color: "var(--gold)" }}>BO</span>
                </div>
                <div style={{ textAlign: "center", marginTop: 9, font: '600 12px/1.2 var(--font-inter-tight), sans-serif', color: "#2a2a2a" }}>
                  Brian O. · Kisumu ⭐
                </div>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <h2 className="display" style={{ margin: "0 0 4px", fontSize: "1.4rem" }}>Brian Otieno</h2>
                <div style={{ font: '500 13px/1.3 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.6)", marginBottom: 10 }}>
                  Kisumu · Uhola FC fan
                </div>
                <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.7)" }}>
                  Recognised for showing up to every matchday this month and
                  rallying the loudest section of the ground. Featured every week
                  across the platform.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
