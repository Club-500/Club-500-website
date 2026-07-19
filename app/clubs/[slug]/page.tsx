import Link from "next/link";
import { notFound } from "next/navigation";
import { CLUBS, REGION_OF_COUNTY, clubSlug, clubShort } from "@/lib/data";
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

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const club = CLUBS.find(([name]) => clubSlug(name) === slug);
  if (!club) notFound();
  const [name, county, img, site] = club;
  const short = clubShort(name);
  const region = REGION_OF_COUNTY[county] ?? "";

  const fixtures = FIXTURES.filter(([, h, a]) => h === short || a === short);
  const results = RESULTS.filter(([h, , a]) => h === short || a === short);
  const standingIx = STANDINGS.findIndex(([c]) => c === short);
  const standing = standingIx >= 0 ? STANDINGS[standingIx] : null;

  return (
    <>
      <RevealInit />
      <div style={{ padding: "clamp(110px, 18vw, 150px) clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        {/* header */}
        <div className="rv" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 28px)", flexWrap: "wrap", marginBottom: 28 }}>
          <div style={{ width: "clamp(88px, 14vw, 128px)" }}>
            <ClubCrest name={name} img={img} />
          </div>
          <div style={{ flex: "1 1 240px" }}>
            <h1 className="mega" style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>{name}</h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
              <span className="tag-pill gold-pill">{county} county</span>
              {region && <span className="tag-pill">{region} region</span>}
              {standing && <span className="tag-pill">#{standingIx + 1} in pilot league</span>}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/fanzone">
              <button className="pill-btn" type="button" style={{ padding: "14px 24px", borderRadius: 999 }}>
                Become a fan
              </button>
            </Link>
            <a href={site} target="_blank" rel="noopener noreferrer" className="pill-ghost">
              Official microsite ↗
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 14 }}>
          {/* fixtures */}
          <div className="glass rv" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
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

          {/* results */}
          <div className="glass rv rv-d1" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
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
                        background: won ? "#1B5E3C" : draw ? "rgba(var(--tx),0.15)" : "rgba(201,138,0,0.25)",
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

          {/* league position */}
          <div className="glass rv rv-d2" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
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

        <Link href="/clubs" style={{ display: "inline-block", marginTop: 24 }} className="tag-pill">
          ← All clubs
        </Link>
      </div>
    </>
  );
}
