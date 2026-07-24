import Link from "next/link";
import { notFound } from "next/navigation";
import { CLUBS, CLUB_DETAILS, REGION_OF_COUNTY, clubSlug, clubShort } from "@/lib/data";
import { FIXTURES, RESULTS, STANDINGS } from "@/lib/content";
import ClubCrest from "@/components/ClubCrest";
import RevealInit from "@/components/RevealInit";

export function generateStaticParams() {
  return CLUBS.map(([name]) => ({ slug: clubSlug(name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const club = CLUBS.find(([name]) => clubSlug(name) === slug);
  return { title: club ? `${club[0]} | Club500` : "Club | Club500" };
}

const GROWTH_JOURNEY: [string, "Done" | "In Progress" | "Upcoming"][] = [
  ["Governance", "Done"],
  ["Branding", "Done"],
  ["Fan Growth", "In Progress"],
  ["Financial Sustainability", "In Progress"],
  ["Infrastructure", "Upcoming"],
];

const STAGE_COLOR: Record<string, string> = {
  Done: "var(--blue-hover)",
  "In Progress": "var(--gold)",
  Upcoming: "rgba(var(--tx),0.3)",
};

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="rv" style={{ scrollMarginTop: 110, padding: "clamp(28px, 5vw, 44px) 0" }}>
      {children}
    </div>
  );
}

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const club = CLUBS.find(([name]) => clubSlug(name) === slug);
  if (!club) notFound();
  const [name, county, img] = club;
  const short = clubShort(name);
  const region = REGION_OF_COUNTY[county] ?? "";
  const detail = CLUB_DETAILS[name];

  const fixtures = FIXTURES.filter(([, h, a]) => h === short || a === short);
  const results = RESULTS.filter(([h, , a]) => h === short || a === short);
  const standingIx = STANDINGS.findIndex(([c]) => c === short);
  const standing = standingIx >= 0 ? STANDINGS[standingIx] : null;

  return (
    <>
      <RevealInit />

      {/* 1. Hero */}
      <div style={{ padding: "clamp(110px, 18vw, 150px) clamp(20px, 4vw, 32px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="rv" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 28px)", flexWrap: "wrap" }}>
          <div style={{ width: "clamp(88px, 14vw, 128px)" }}>
            <ClubCrest name={name} img={img} eager />
          </div>
          <div style={{ flex: "1 1 240px" }}>
            <h1 className="mega" style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>{name}</h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
              <span className="tag-pill gold-pill">✓ Verified · Club500</span>
              <span className="tag-pill">{county} county</span>
              {region && <span className="tag-pill">{region} region</span>}
              {standing && <span className="tag-pill">#{standingIx + 1} in pilot league</span>}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/fanzone">
              <button className="pill-btn ball-pop" type="button" style={{ padding: "14px 24px", borderRadius: 999 }}>
                Become an Official Fan
              </button>
            </Link>
            {detail?.facebook && (
              <a href={detail.facebook} target="_blank" rel="noopener noreferrer" className="pill-ghost">
                Follow on Facebook ↗
              </a>
            )}
          </div>
        </div>
        {detail?.banner && (
          <div className="rv" style={{ marginTop: "clamp(20px, 3vw, 32px)", borderRadius: 20, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={detail.banner} alt={`${name} team photo`} style={{ width: "100%", height: "auto", maxHeight: 420, objectFit: "cover", display: "block" }} loading="eager" />
          </div>
        )}
      </div>

      <div style={{ padding: "0 clamp(20px, 4vw, 32px)", maxWidth: 1280, margin: "0 auto" }}>
        {/* 2. About the club */}
        <Section id="overview">
          <h2 className="display" style={{ margin: "0 0 14px" }}>About the club</h2>
          <p style={{ margin: 0, maxWidth: 700, font: '400 15.5px/1.7 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.7)" }}>
            {detail?.about ??
              `${name} is a community football club based in ${county}${region ? `, part of Club500's ${region} region` : ""}.`}
          </p>
        </Section>

        {/* 3. Club snapshot */}
        <Section id="snapshot">
          <h2 className="display" style={{ margin: "0 0 16px" }}>Club snapshot</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              ["League", detail?.league ?? "FKF League"],
              ["Home ground", detail?.ground ?? "—"],
              ["Home county", county],
              ["Region", region || "—"],
              ["Founded", detail?.founded ?? "—"],
              ["Verified", "Yes · Club500"],
            ].map(([label, value]) => (
              <div key={label} className="glass" style={{ padding: "16px 18px" }}>
                <div className="mono-label" style={{ marginBottom: 6 }}>{label}</div>
                <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif' }}>{value}</div>
              </div>
            ))}
          </div>
          {detail?.motto && (
            <p style={{ margin: "14px 0 0", font: '500 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              Motto: <span className="gold">&ldquo;{detail.motto}&rdquo;</span>
            </p>
          )}
        </Section>

        {/* 4. Growth journey */}
        <Section id="progress">
          <h2 className="display" style={{ margin: "0 0 6px" }}>Growth journey</h2>
          <p style={{ margin: "0 0 20px", font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
            Club500 develops clubs over time — here&apos;s where {short} stands today.
          </p>
          <div className="glass" style={{ padding: "clamp(18px, 3vw, 26px)", display: "flex", flexDirection: "column", gap: 4 }}>
            {GROWTH_JOURNEY.map(([stage, status], i) => (
              <div
                key={stage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 0",
                  borderBottom: i < GROWTH_JOURNEY.length - 1 ? "1px solid rgba(var(--tx),0.08)" : "none",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: STAGE_COLOR[status],
                  }}
                />
                <span style={{ flex: 1, font: '600 14.5px/1.3 var(--font-inter-tight), sans-serif' }}>{stage}</span>
                <span className="mono-label" style={{ color: STAGE_COLOR[status] }}>{status}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Latest updates */}
        <Section id="updates">
          <h2 className="display" style={{ margin: "0 0 16px" }}>Latest updates</h2>
          <div className="glass" style={{ padding: "clamp(24px, 4vw, 36px)", textAlign: "center" }}>
            <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              No updates from {short} yet. Community events, partnerships and player achievements
              will appear here once the club starts posting.
            </p>
          </div>
        </Section>

        {/* fixtures / results / standing — existing live data */}
        <Section id="matches">
          <h2 className="display" style={{ margin: "0 0 16px" }}>Fixtures &amp; results</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 14 }}>
            <div className="glass" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
              <div className="mono-label" style={{ marginBottom: 14 }}>Upcoming fixtures</div>
              {fixtures.length === 0 ? (
                <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
                  No fixtures scheduled this week. Check back after the weekend.
                </p>
              ) : (
                fixtures.map(([when, h, a, venue], i) => (
                  <div key={h + a} style={{ padding: "12px 0", borderBottom: i < fixtures.length - 1 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
                    <div style={{ font: '600 15.5px/1.35 var(--font-inter-tight), sans-serif' }}>
                      {h} <span style={{ color: "rgba(var(--tx),0.4)" }}>v</span> {a}
                    </div>
                    <div className="mono-label" style={{ marginTop: 4 }}>{when} · {venue}</div>
                  </div>
                ))
              )}
            </div>

            <div className="glass" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
              <div className="mono-label" style={{ marginBottom: 14 }}>Recent results</div>
              {results.length === 0 ? (
                <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
                  First matchday results land this weekend.
                </p>
              ) : (
                results.map(([h, hs, a, as_], i) => {
                  const won = (h === short && hs > as_) || (a === short && as_ > hs);
                  const draw = hs === as_;
                  return (
                    <div key={h + a} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < results.length - 1 ? "1px solid rgba(var(--tx),0.1)" : "none" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          font: '800 12px/1 var(--font-inter-tight), sans-serif',
                          background: won ? "var(--blue)" : draw ? "rgba(var(--tx),0.15)" : "rgba(245, 179, 1,0.25)",
                          color: won ? "#fff" : "var(--fg)",
                        }}
                      >
                        {won ? "W" : draw ? "D" : "L"}
                      </span>
                      <span style={{ font: '600 14.5px/1.3 var(--font-inter-tight), sans-serif', flex: 1 }}>
                        {h} {hs} - {as_} {a}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            <div className="glass" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
              <div className="mono-label" style={{ marginBottom: 14 }}>Pilot league</div>
              {standing ? (
                <>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span className="gold" style={{ font: '800 clamp(2.4rem, 5vw, 3.4rem)/1 var(--font-inter-tight), sans-serif' }}>
                      #{standingIx + 1}
                    </span>
                    <span style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.7)" }}>
                      {standing[5]} pts from {standing[1]} games
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 14, marginTop: 14 }}>
                    {[["W", standing[2]], ["D", standing[3]], ["L", standing[4]]].map(([l, v]) => (
                      <div key={l as string}>
                        <div style={{ font: '800 20px/1 var(--font-inter-tight), sans-serif' }}>{v}</div>
                        <div className="mono-label" style={{ marginTop: 4 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p style={{ margin: 0, font: '400 14px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
                  Joins the league table next season.
                </p>
              )}
              <Link href="/fanzone" className="gold" style={{ display: "inline-block", marginTop: 16, font: '600 14px/1 var(--font-inter-tight), sans-serif' }}>
                Full table in the Fan Zone →
              </Link>
            </div>
          </div>
        </Section>

        {/* 6. Support the club */}
        <Section id="support">
          <div
            style={{
              background: "var(--blue)",
              color: "#fff",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 40px)",
            }}
          >
            <h2 className="display" style={{ margin: "0 0 8px", color: "#fff" }}>
              Support <span className="gold">{short}</span>
            </h2>
            <p style={{ margin: "0 0 22px", font: '400 15px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.75)", maxWidth: 520 }}>
              Every bit of support helps the club grow — here&apos;s how to get involved.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/fanzone">
                <button className="pill-btn ball-pop" type="button" style={{ background: "var(--gold)", color: "#141310", padding: "14px 24px", borderRadius: 999 }}>
                  Become an Official Fan
                </button>
              </Link>
              <Link href="/volunteer" className="pill-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                Volunteer with {short}
              </Link>
              <Link href="/partners" className="pill-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                Partner with {short}
              </Link>
              {detail?.facebook && (
                <a href={detail.facebook} target="_blank" rel="noopener noreferrer" className="pill-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                  Follow on Facebook ↗
                </a>
              )}
            </div>
          </div>
        </Section>

        {/* 7. Gallery */}
        <Section id="gallery">
          <h2 className="display" style={{ margin: "0 0 16px" }}>Gallery</h2>
          <div className="glass" style={{ padding: "clamp(24px, 4vw, 36px)", textAlign: "center" }}>
            <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)" }}>
              More matchday and community photos from {short} are on the way.
            </p>
          </div>
        </Section>

        {/* 8. Footer nav */}
        <div className="rv" style={{ padding: "8px 0 clamp(44px, 9vw, 72px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              ["#overview", "Overview"],
              ["#progress", "Progress"],
              ["#updates", "Updates"],
              ["#support", "Support"],
              ["#gallery", "Gallery"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="tag-pill">{label}</a>
            ))}
          </nav>
          <Link href="/clubs" className="tag-pill">← All clubs</Link>
        </div>
      </div>
    </>
  );
}
