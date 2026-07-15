"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

const STEPS: [string, string, string][] = [
  ["01", "Join a club", "Become a fan of your local club — it takes a minute."],
  ["02", "Get your link", "Your personal referral link is generated instantly."],
  ["03", "Share everywhere", "WhatsApp, Telegram, Facebook — your community is your network."],
  ["04", "Earn money", "You get paid every time someone joins through your link."],
];

const BONUSES: [string, string][] = [
  ["Weekly top referrer", "KES 5,000"],
  ["20 referrals", "+KES 1,000"],
  ["50 referrals", "+KES 3,000"],
  ["100 referrals", "+KES 10,000"],
];

export default function EarnPage() {
  const [refs, setRefs] = useState(100);
  const earnings = refs * 250;
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Your link is your earning power">
        Start earning with <em className="serif-accent gold">Club500</em>
      </PageHead>

      <div style={{ padding: "0 32px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
          {STEPS.map(([num, title, desc], i) => (
            <div key={num} className={"glass rv rv-d" + i} style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ font: '600 32px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.2)", letterSpacing: "-0.02em" }}>
                {num}
              </span>
              <div style={{ font: '600 20px/1.2 var(--font-inter-tight), sans-serif' }}>{title}</div>
              <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "56px 32px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            background: "#f0b429",
            borderRadius: 32,
            padding: "clamp(32px, 5vw, 64px)",
            color: "#0a0a0a",
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 340px", minWidth: 280 }}>
            <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)", marginBottom: 16 }}>
              Earnings calculator
            </div>
            <h2 className="display" style={{ margin: "0 0 32px", fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}>
              How much can <em className="serif-accent">you</em> earn?
            </h2>
            <input
              type="range"
              min="0"
              max="500"
              value={refs}
              onChange={(e) => setRefs(Number(e.target.value))}
              style={{ width: "100%", maxWidth: 420 }}
            />
            <div style={{ marginTop: 14, font: '600 18px/1 var(--font-inter-tight), sans-serif' }}>{refs} people referred</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mono-label" style={{ color: "rgba(10,10,10,0.55)", marginBottom: 8 }}>
              You earn
            </div>
            <div style={{ font: '600 clamp(3rem, 7vw, 6rem)/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.04em" }}>
              KES {earnings.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 36px" }}>
          Bonuses you can <em className="serif-accent gold">unlock</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {BONUSES.map(([label, amount], i) => (
            <div key={label} className={"glass rv rv-d" + i} style={{ padding: 28 }}>
              <div className="mono-label" style={{ marginBottom: 14 }}>{label}</div>
              <div style={{ font: '600 30px/1 var(--font-inter-tight), sans-serif', letterSpacing: "-0.02em" }} className="gold">
                {amount}
              </div>
            </div>
          ))}
        </div>
        <p className="rv" style={{ margin: "36px 0 0", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)", maxWidth: 520 }}>
          Fast &amp; easy withdrawals — withdraw anytime, no limits, sent instantly to your phone.
        </p>
      </div>
    </>
  );
}
