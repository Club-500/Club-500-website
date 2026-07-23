"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import { useLang } from "@/lib/i18n";

const PILLARS: [string, string, string][] = [
  [
    "Governance",
    "Strong clubs are built on strong leadership. We help clubs establish effective governance structures, define clear roles and responsibilities, strengthen accountability, and build systems that support long-term growth. From legal registration to club management practices, we help clubs operate with confidence and credibility.",
    "Club governance structures · Leadership development · Legal compliance · Policies and documentation",
  ],
  [
    "Branding",
    "A strong identity builds trust. We help clubs develop professional brands that reflect who they are and what they stand for. From logos and visual identity to communication and digital presence, we ensure clubs are seen, recognised and remembered.",
    "Club identity · Brand development · Graphic design · Digital presence",
  ],
  [
    "Media & Storytelling",
    "Every club has a story worth telling. We help clubs showcase their journey through photography, video, social media and content creation, increasing visibility for players, attracting supporters and creating new opportunities.",
    "Photography · Video production · Social media · Content creation · Club storytelling",
  ],
  [
    "Financial Sustainability",
    "Football should create value that lasts. We help clubs move beyond relying on personal contributions by introducing sustainable ways to generate income through memberships, fan subscriptions, partnerships, fundraising and commercial opportunities.",
    "Fan subscriptions · Revenue generation · Fundraising · Sponsorship readiness",
  ],
  [
    "Technology",
    "Technology should make running a club easier. Club500 provides digital tools that help clubs manage information, engage supporters, increase visibility and access opportunities through one connected platform.",
    "Club management tools · Digital club profiles · Fan platform · Data and insights",
  ],
  [
    "Fan Engagement",
    "Football belongs to its fans. We help clubs build stronger relationships with their communities by making it easier for supporters to connect, contribute and take part in the club's journey through memberships, events and shared experiences.",
    "Fan memberships · Community engagement · Matchday experiences · Club communities",
  ],
  [
    "Partnerships",
    "Growth happens through collaboration. We connect clubs with businesses, organisations, professionals and development partners who share a common goal of strengthening community football and creating opportunities for young people.",
    "Corporate partnerships · Sponsorships · Professional networks · Community collaborations",
  ],
  [
    "Capacity Building",
    "Knowledge creates stronger clubs. We equip club leaders with practical skills through workshops, webinars, mentorship and learning resources that help them make better decisions and build sustainable organisations.",
    "Webinars · Training programmes · Mentorship · Learning resources",
  ],
];

/* Placeholder roster — swap in real names, roles and headshots when available. */
const TEAM: [string, string, string | null][] = [
  ["Founder", "Founder & CEO", null],
  ["Ops Lead", "Head of Operations", null],
  ["Partnerships Lead", "Head of Partnerships", null],
  ["Community Lead", "Community & Fan Engagement", null],
];

function PillarAccordion() {
  const [active, setActive] = useState(0);
  const [name, body, focus] = PILLARS[active];
  return (
    <div className="rv rv-d1">
      <div className="no-scrollbar" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 16 }}>
        {PILLARS.map(([n], i) => (
          <button
            key={n}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className="tag-pill"
            style={{
              flexShrink: 0,
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: active === i ? "var(--gold)" : "transparent",
              color: active === i ? "#0a0a0a" : "rgba(var(--tx),0.75)",
              borderColor: active === i ? "var(--gold)" : "rgba(var(--tx),0.18)",
              padding: "9px 16px",
            }}
          >
            {String(i + 1).padStart(2, "0")} · {n}
          </button>
        ))}
      </div>
      <div
        key={name}
        className="glass"
        style={{ padding: "clamp(20px, 3.5vw, 30px)" }}
      >
        <h3 className="h3" style={{ margin: "0 0 12px" }}>{name}</h3>
        <p style={{ margin: "0 0 14px", font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.68)" }}>
          {body}
        </p>
        <div className="mono-label" style={{ marginBottom: 6 }}>Current focus</div>
        <p style={{ margin: 0, font: '500 13px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
          {focus}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <RevealInit />
      <div style={{ position: "relative" }}>
        <PageHead eyebrow="About Club500">
          {t("ab.h1a")} <span className="gold">{t("ab.h1b")}</span>
        </PageHead>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/club500-logo.jpg"
          alt="Club500 official logo"
          className="about-logo rv"
          style={{
            position: "absolute",
            right: "clamp(20px, 4vw, 32px)",
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(300px, 24vw)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Our story */}
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 20px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 16px" }}>
          Our <span className="gold">story</span>
        </h2>
        <div className="rv rv-d1" style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ margin: 0, font: '400 15.5px/1.7 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.68)" }}>
            Community football has always been the heartbeat of the game. Across Kenya, thousands of clubs
            nurture talented players, unite communities, and inspire young people every day. Yet behind the
            passion lies a familiar struggle. Many clubs operate with limited resources, rely on a handful of
            committed individuals, and lack access to the systems, visibility and support needed to grow
            sustainably.
          </p>
          <p style={{ margin: 0, font: '400 15.5px/1.7 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.68)" }}>
            Club500 was created to change that. Rather than focusing on short-term solutions, we are building
            a long-term ecosystem where clubs can access the right support, strengthen their operations,
            engage their communities, attract partners, and create opportunities for everyone connected to
            the game.
          </p>
          <p style={{ margin: 0, font: '600 15.5px/1.7 var(--font-inter-tight), sans-serif' }}>
            Because when community football thrives, communities thrive too.
          </p>
        </div>
      </div>

      {/* Vision + Mission as pull quotes */}
      <div style={{ padding: "clamp(20px, 4vw, 32px) clamp(20px, 4vw, 32px) 24px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
        <div className="glass rv" style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid var(--blue)" }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Our vision</div>
          <p
            style={{
              margin: 0,
              font: '600 clamp(1.05rem, 1.8vw, 1.3rem)/1.55 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            To build Africa&apos;s largest and most connected community football ecosystem, where every
            grassroots club has the opportunity to grow, thrive and transform the lives of the communities
            it serves.
          </p>
        </div>
        <div className="glass rv rv-d1" style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid var(--gold)" }}>
          <div className="mono-label" style={{ marginBottom: 12 }}>Our mission</div>
          <p
            style={{
              margin: 0,
              font: '600 clamp(1.05rem, 1.8vw, 1.3rem)/1.55 var(--font-inter-tight), sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            To empower community football clubs with the tools, support, partnerships and opportunities
            they need to become sustainable institutions that create lasting impact on and beyond the pitch.{" "}
            <span className="gold">Grassroots to Greatness.</span>
          </p>
        </div>
      </div>

      {/* 8 Pillars of Impact */}
      <div style={{ padding: "clamp(28px, 5vw, 44px) clamp(20px, 4vw, 32px) 20px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 8px" }}>
          8 pillars of <span className="gold">impact</span>
        </h2>
        <p className="rv" style={{ margin: "8px 0 24px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 620 }}>
          Tap a pillar to see what it covers and how it helps clubs grow.
        </p>
        <PillarAccordion />
      </div>

      {/* Meet the team */}
      <div style={{ padding: "clamp(28px, 5vw, 44px) clamp(20px, 4vw, 32px) 20px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="display rv" style={{ margin: "0 0 8px" }}>
          Meet the <span className="gold">team</span>
        </h2>
        <p className="rv" style={{ margin: "8px 0 24px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", maxWidth: 620 }}>
          The people building Club500 day to day.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          {TEAM.map(([name, role, photo], i) => (
            <div key={name} className={"rv rv-d" + Math.min(i, 3)} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(var(--tx),0.14)",
                  background: "linear-gradient(135deg, #262626, #101010)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ font: '700 1.4rem/1 var(--font-inter-tight), sans-serif', color: "var(--gold)" }}>
                    {name.split(" ").map((w) => w[0]).join("")}
                  </span>
                )}
              </div>
              <div style={{ font: '600 14.5px/1.3 var(--font-inter-tight), sans-serif' }}>{name}</div>
              <div className="mono-label" style={{ marginTop: 4 }}>{role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "20px clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            background: "var(--blue)",
            color: "#fff",
            borderRadius: 24,
            padding: "clamp(24px, 4vw, 44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h2 className="display" style={{ margin: "0 0 6px" }}>
              Grassroots to <span className="gold">Greatness</span>
            </h2>
            <p style={{ margin: 0, font: '400 15px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.75)" }}>
              Whether you run a club, cheer for one, or want to build the
              movement, there&apos;s a place for you.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/clubs/apply" className="pill-btn" style={{ background: "var(--gold)", color: "#141310", padding: "14px 24px", borderRadius: 999 }}>
              Register your club
            </a>
            <a href="/fanzone" className="pill-ghost">
              Join as a fan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
