"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import TopReferrers from "@/components/home/TopReferrers";
import { FIXTURES } from "@/lib/data";
import ReferralShare from "@/components/ReferralShare";

const MVPS = ["Kiprop Kirui (Kapkatet Youth)", "Salim Juma (Shimanzi FC)", "Mary Achieng (Uhola FC)"];

const LEADERS: [string, string, number][] = [
  ["Nakuru Massive", "Nakuru", 4210],
  ["Coast Ultras", "Mombasa", 3980],
  ["Green Army 254", "Kericho", 3644],
  ["City Faithful", "Nairobi", 3320],
];

const BONUSES: [string, string][] = [
  ["Weekly top referrer", "KES 5,000"],
  ["20 referrals", "+KES 1,000"],
  ["50 referrals", "+KES 3,000"],
  ["100 referrals", "+KES 10,000"],
];

type Pick = "1" | "X" | "2";

const ODDS: [number, number, number][] = [
  [2.1, 3.25, 2.8],
  [1.95, 3.4, 3.1],
  [2.45, 3.1, 2.3],
];
const SENT: [number, number, number][] = [
  [52, 23, 25],
  [44, 28, 28],
  [38, 30, 32],
];
const BOOST_IX = 1;

export default function FanZonePage() {
  const [voted, setVoted] = useState<string | null>(null);
  const [picks, setPicks] = useState<Record<number, Pick>>({});
  const [locked, setLocked] = useState(false);
  const [refs, setRefs] = useState(100);
  const earnings = refs * 250;
  const chosen = Object.entries(picks).filter(([, v]) => v);
  const pickCount = chosen.length;
  const combined = chosen.reduce((acc, [i, p]) => {
    const j = p === "1" ? 0 : p === "X" ? 1 : 2;
    const mult = ODDS[Number(i)][j] * (Number(i) === BOOST_IX ? 2 : 1);
    return acc * mult;
  }, 1);
  const potential = pickCount === 0 ? 0 : Math.round(100 * combined);

  const setPick = (i: number, p: Pick) =>
    setPicks((prev) => ({ ...prev, [i]: prev[i] === p ? undefined : p } as Record<number, Pick>));

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="The Fan Zone">
        Your club. Your voice. Your <span className="gold">reward</span>.
      </PageHead>
      <div
        style={{
          padding: "0 clamp(20px, 4vw, 32px) 72px",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        <p
          className="rv"
          style={{
            margin: 0,
            maxWidth: 640,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(var(--tx),0.72)",
          }}
        >
          Follow your club. Get real match updates, stories and
          behind-the-scenes access, and earn when you bring friends along.
        </p>
        {/* Predictions market */}
        <div className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)" }}>
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
              <h2 className="display" style={{ margin: 0 }}>Predictions</h2>
            </div>
            <span className="mono-label">Fan points only · Settles Sun 18:00</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
            {FIXTURES.map(([when, home, away, venue], i) => {
              const odds = ODDS[i];
              const sent = SENT[i];
              return (
                <div
                  key={home}
                  style={{
                    border: picks[i] ? "1px solid rgba(46,155,99,0.55)" : "1px solid rgba(var(--tx),0.12)",
                    borderRadius: 16,
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    transition: "border-color .2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <span className="mono-label">{when}</span>
                    {i === BOOST_IX && (
                      <span style={{ font: '700 11px/1 var(--font-inter-tight), sans-serif', color: "#141310", background: "#C98A00", borderRadius: 999, padding: "5px 10px" }}>
                        2x BOOST
                      </span>
                    )}
                  </div>
                  <div style={{ font: '700 16.5px/1.35 var(--font-inter-tight), sans-serif' }}>
                    {home} <span style={{ color: "rgba(var(--tx),0.4)", fontWeight: 500 }}>v</span> {away}
                  </div>
                  <div className="mono-label" style={{ marginTop: -6 }}>{venue}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {(["1", "X", "2"] as Pick[]).map((p, j) => {
                      const active = picks[i] === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPick(i, p)}
                          disabled={locked}
                          style={{
                            flex: 1,
                            cursor: locked ? "default" : "pointer",
                            borderRadius: 12,
                            padding: "10px 0 8px",
                            border: active ? "1.5px solid #1B5E3C" : "1px solid rgba(var(--tx),0.16)",
                            background: active ? "#1B5E3C" : "transparent",
                            color: active ? "#fff" : "var(--fg)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3,
                            transition: "all .18s",
                            opacity: locked && !active ? 0.45 : 1,
                          }}
                        >
                          <span style={{ font: '500 10.5px/1 var(--font-inter-tight), sans-serif', letterSpacing: "0.04em", color: active ? "rgba(255,255,255,0.75)" : "rgba(var(--tx),0.5)" }}>
                            {j === 0 ? home.split(" ")[0] : j === 1 ? "Draw" : away.split(" ")[0]}
                          </span>
                          <span style={{ font: '800 17px/1 var(--font-inter-tight), sans-serif' }}>
                            {odds[j].toFixed(2)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", gap: 2 }}>
                      <span style={{ width: `${sent[0]}%`, background: "#2E9B63" }}></span>
                      <span style={{ width: `${sent[1]}%`, background: "rgba(var(--tx),0.2)" }}></span>
                      <span style={{ width: `${sent[2]}%`, background: "#C98A00" }}></span>
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
              border: pickCount > 0 ? "1px solid rgba(46,155,99,0.5)" : "1px dashed rgba(var(--tx),0.2)",
              background: pickCount > 0 ? "rgba(46,155,99,0.08)" : "transparent",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {locked ? (
              <>
                <span style={{ font: '700 15px/1.3 var(--font-inter-tight), sans-serif', color: "#2E9B63" }}>
                  Picks locked. Good luck!
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
                  onClick={() => setLocked(true)}
                  style={{
                    background: pickCount > 0 ? "#1B5E3C" : "rgba(var(--tx),0.08)",
                    color: pickCount > 0 ? "#fff" : "rgba(var(--tx),0.4)",
                    border: "none",
                    borderRadius: 999,
                    padding: "12px 26px",
                    font: '700 14px/1 var(--font-inter-tight), sans-serif',
                    cursor: pickCount > 0 ? "pointer" : "default",
                  }}
                >
                  Confirm picks
                </button>
              </>
            )}
          </div>
        </div>

        {/* Fantasy league + fan of the week */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)", display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="tag-pill gold-pill" style={{ alignSelf: "flex-start" }}>Season One</span>
            <h2 className="display" style={{ margin: 0 }}>Club500 Fantasy League</h2>
            <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", flex: 1 }}>
              Build your XI from real players across all onboarded clubs. Weekly
              scores from real match data, county derbies, and a national
              table. Launching with the national season.
            </p>
            <button className="pill-ghost" type="button" style={{ alignSelf: "flex-start" }}>
              Join the waitlist
            </button>
          </div>
          <div
            className="rv rv-d1"
            style={{
              background: "#C98A00",
              color: "#0a0a0a",
              borderRadius: 20,
              padding: "clamp(20px, 3vw, 30px)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)" }}>Fan of the week</div>
            <h2 className="display" style={{ margin: 0 }}>Your moment could be next</h2>
            <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.7)", flex: 1 }}>
              Upload your matchday photos and videos. The best fan moment every
              week is featured across the platform and club microsites.
            </p>
            <button
              className="pill-btn"
              type="button"
              style={{ background: "#0a0a0a", color: "var(--fg)", alignSelf: "flex-start" }}
            >
              <span className="txt">Upload your moment</span>
              <span className="circ" style={{ background: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* MVP vote + leaderboard */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: "clamp(20px, 3vw, 30px)" }}>
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
                    border: voted === m ? "1.5px solid #C98A00" : "1px solid rgba(var(--tx),0.15)",
                    background: voted === m ? "rgba(201,138,0,0.12)" : "transparent",
                    color: "var(--fg)",
                    font: '500 15px/1.3 var(--font-inter-tight), sans-serif',
                    transition: "all .2s",
                  }}
                >
                  {m} {voted === m && <span className="gold">✓</span>}
                </button>
              ))}
            </div>
            {voted && (
              <div className="mono-label gold" style={{ color: "#C98A00", marginTop: 16 }}>
                +50 fan points earned
              </div>
            )}
          </div>
          <div className="glass rv rv-d1" style={{ padding: "clamp(20px, 3vw, 30px)" }}>
            <div className="mono-label" style={{ marginBottom: 18 }}>National fan leaderboard</div>
            {LEADERS.map(([name, town, pts], i) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: i < 3 ? "1px solid rgba(var(--tx),0.1)" : "none",
                }}
              >
                <span
                  style={{
                    font: '700 1rem/1 var(--font-inter-tight), sans-serif',
                    color: i === 0 ? "#C98A00" : "rgba(var(--tx),0.3)",
                    width: 30,
                  }}
                >
                  {i + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ font: '600 16px/1.2 var(--font-inter-tight), sans-serif' }}>{name}</div>
                  <div className="mono-label" style={{ marginTop: 4 }}>{town}</div>
                </div>
                <span style={{ font: '700 1.1rem/1 var(--font-inter-tight), sans-serif' }}>
                  {pts.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Earn — merged from the old Earn page */}
        <div className="rv">
          <h2 className="display" style={{ margin: "0 0 8px" }}>
            Earn with your <span className="gold">referral link</span>
          </h2>
          <p style={{ margin: "0 0 24px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 560 }}>
            Every fan gets a personal referral link. Share it and you earn KES 250
            each time someone joins a club through it, paid straight to your
            phone. Withdraw anytime.
          </p>
          <p style={{ margin: "-12px 0 24px", maxWidth: 560, font: '500 13.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.5)" }}>
            How payouts work: you earn a fixed amount each time someone joins
            your club through your link. No recruiting required beyond that,
            no tiers, no catch.
          </p>
          <ReferralShare />
          <div
            style={{
              background: "#C98A00",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 44px)",
              color: "#0a0a0a",
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <div style={{ flex: "1 1 300px", minWidth: 260 }}>
              <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)", marginBottom: 10 }}>
                Earnings calculator
              </div>
              <h3 className="display" style={{ margin: "0 0 22px" }}>How much can you earn?</h3>
              <input
                type="range"
                min="0"
                max="500"
                value={refs}
                onChange={(e) => setRefs(Number(e.target.value))}
                style={{ width: "100%", maxWidth: 420 }}
              />
              <div style={{ marginTop: 12, font: '600 16px/1 var(--font-inter-tight), sans-serif' }}>
                {refs} people referred
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)", marginBottom: 8 }}>You earn</div>
              <div style={{ font: '800 clamp(2.4rem, 5vw, 4rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.03em" }}>
                KES {earnings.toLocaleString()}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {BONUSES.map(([label, amount]) => (
              <div key={label} className="glass" style={{ padding: 22 }}>
                <div className="mono-label" style={{ marginBottom: 10 }}>{label}</div>
                <div className="gold" style={{ font: '700 24px/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.01em" }}>
                  {amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly top referrers */}
      <TopReferrers />
    </>
  );
}
