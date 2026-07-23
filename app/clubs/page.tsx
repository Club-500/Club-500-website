"use client";

import { useMemo, useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { CLUBS, REGION_OF_COUNTY, clubSlug } from "@/lib/data";
import ClubCrest from "@/components/ClubCrest";
import CountyGrid from "@/components/CountyGrid";
import { useLang } from "@/lib/i18n";

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
  const { t } = useLang();
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
      <PageHead eyebrow={t("cl.eyebrow")}>
        {t("cl.h1a")} <span className="gold">{t("cl.h1b")}</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
        <img
          src="/assets/clubs-banner.webp"
          alt="500 Clubs. 47 Counties, 1 Vision. Building the future of community football."
          className="rv"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 20,
            marginBottom: 28,
            display: "block",
          }}
        />
        <a
          href="/clubs/apply"
          className="rv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            border: "1px solid rgba(245, 179, 1,0.45)",
            background: "rgba(245, 179, 1,0.07)",
            borderRadius: 16,
            padding: "16px 22px",
            marginBottom: 24,
            color: "var(--fg)",
          }}
        >
          <span style={{ font: '600 15px/1.4 var(--font-inter-tight), sans-serif' }}>
            {t("cl.apply")}
          </span>
          <span className="gold" style={{ font: '700 15px/1 var(--font-inter-tight), sans-serif' }}>
            {t("cl.applynow")}
          </span>
        </a>
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {RAIL.map(([r, n]) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className="tag-pill"
              style={{
                cursor: "pointer",
                background: region === r ? "var(--gold)" : "transparent",
                color: region === r ? "#0a0a0a" : "rgba(var(--tx),0.75)",
                borderColor: region === r ? "var(--gold)" : "rgba(var(--tx),0.18)",
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
            placeholder={t("cl.search")}
            style={{
              background: "rgba(var(--tx),0.05)",
              border: "1px solid rgba(var(--tx),0.15)",
              borderRadius: 999,
              color: "var(--fg)",
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
            gridTemplateColumns: "repeat(auto-fill, minmax(clamp(130px, 32vw, 220px), 1fr))",
            gap: "clamp(8px, 2vw, 14px)",
            marginBottom: 56,
          }}
        >
          {list.map(([name, county, img], i) => (
            <a
              key={name}
              href={`/clubs/${clubSlug(name)}`}
              className={"club-card glass rv rv-d" + (i % 4)}
              style={{ padding: "clamp(12px, 2.5vw, 20px)", borderRadius: 18, display: "block", color: "var(--fg)" }}
            >
              <div style={{ marginBottom: 10 }}>
                <ClubCrest name={name} img={img} size="clamp(40px, 12vw, 64px)" />
              </div>
              <div style={{ font: '600 clamp(13px, 3vw, 16px)/1.25 var(--font-inter-tight), sans-serif' }}>{name}</div>
              <div className="mono-label" style={{ margin: "6px 0 12px", fontSize: "clamp(10.5px, 2.4vw, 12px)" }}>
                {county} county
              </div>
              <span className="tag-pill gold-pill" style={{ fontSize: "clamp(10.5px, 2.4vw, 12px)", padding: "6px 12px" }}>View club →</span>
            </a>
          ))}
        </div>

        <CountyGrid />

        {/* How joining works */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
          <div className="glass rv" style={{ padding: "clamp(22px, 3vw, 32px)" }}>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              {t("cl.clubsjoin")}
            </h2>
            <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              Any community club in Kenya can apply. About 10 clubs are
              onboarded per county.
            </p>
            {CLUB_STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
                <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "var(--gold)", width: 24, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{d}</p>
                </div>
              </div>
            ))}
            <a href="/clubs/apply" className="pill-ghost" style={{ marginTop: 20, display: "inline-flex" }}>
              Apply to join Club500
            </a>
          </div>
          <div className="glass rv rv-d1" style={{ padding: "clamp(22px, 3vw, 32px)" }}>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              {t("cl.fansjoin")}
            </h2>
            <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              Free for every fan, and your referral link earns you money from
              day one.
            </p>
            {FAN_STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
                <span style={{ font: '700 15px/1.4 var(--font-inter-tight), sans-serif', color: "var(--gold)", width: 24, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{t}</div>
                  <p style={{ margin: "4px 0 0", font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{d}</p>
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
