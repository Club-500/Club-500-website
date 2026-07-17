import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const COLUMNS: [string, [string, string][]][] = [
  [
    "Explore",
    [
      ["Clubs", "/clubs"],
      ["Fan Zone", "/fanzone"],
      ["Newsroom", "/newsroom"],
      ["About", "/about"],
    ],
  ],
  [
    "Grow",
    [
      ["Partners", "/partners"],
      ["Events", "/events"],
      ["Podcast", "/podcast"],
      ["Journalists", "/journalist"],
    ],
  ],
  ["Account", [["Sign in", "/login"]]],
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "56px clamp(20px, 4vw, 32px) 36px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* striker dribbles past defenders and buries it in the goal */}
        <div className="goal-strip" aria-hidden="true">
          <div className="gs-ground" />

          <div className="gs-goal">
            <span className="gs-goal-text">Goal!</span>
            <svg width="74" height="60" viewBox="0 0 74 60" fill="none">
              <g className="gs-net" stroke="rgba(255,255,255,0.28)" strokeWidth="1">
                <path d="M8 8 V56 M16 8 V56 M24 8 V56 M32 8 V56 M40 8 V56 M48 8 V56 M56 8 V56 M64 8 V56" />
                <path d="M6 16 H68 M6 24 H68 M6 32 H68 M6 40 H68 M6 48 H68" />
              </g>
              <path d="M5 58 V6 H69 V58" stroke="#f0b429" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* defenders that get skipped past */}
          <div className="gs-def gs-def-1">
            <div className="gs-def-react-1">
              <svg width="32" height="54" viewBox="0 0 52 64" fill="none">
                <circle cx="26" cy="8" r="6" fill="#9aa4ad" />
                <path d="M26 14 C20.5 15 18 21 18.8 31 L31 31 C32 21 29.5 15 26 14 Z" fill="#5c666f" />
                <path d="M18.8 31 L31 31 L31.5 37 L18.3 37 Z" fill="#434b53" />
                <path d="M24 17 L16 21 L10 26" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="26" r="2.2" fill="#9aa4ad" />
                <path d="M28 17 L36 21 L42 26" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="26" r="2.2" fill="#9aa4ad" />
                <path d="M23 36 L17 45 L13 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 53 L8.5 53.6" stroke="#767f88" strokeWidth="4" strokeLinecap="round" />
                <path d="M27.5 36 L34 45 L38 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 53 L42.5 53.6" stroke="#767f88" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="gs-def gs-def-2">
            <div className="gs-def-react-2">
              <svg width="32" height="54" viewBox="0 0 52 64" fill="none">
                <circle cx="26" cy="8" r="6" fill="#9aa4ad" />
                <path d="M26 14 C20.5 15 18 21 18.8 31 L31 31 C32 21 29.5 15 26 14 Z" fill="#5c666f" />
                <path d="M18.8 31 L31 31 L31.5 37 L18.3 37 Z" fill="#434b53" />
                <path d="M24 17 L16 21 L10 26" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="26" r="2.2" fill="#9aa4ad" />
                <path d="M28 17 L36 21 L42 26" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="26" r="2.2" fill="#9aa4ad" />
                <path d="M23 36 L17 45 L13 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 53 L8.5 53.6" stroke="#767f88" strokeWidth="4" strokeLinecap="round" />
                <path d="M27.5 36 L34 45 L38 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 53 L42.5 53.6" stroke="#767f88" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* our striker: sprite-frame run cycle, kick pose, celebration pose */}
          <div className="gs-player">
            <div className="gs-player-inner">
              {/* run frame A */}
              <svg className="pose pose-run-a" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L19 22 L14.5 17.5" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14.5" cy="17.5" r="2.2" fill="#b9b9b2" />
                <path d="M25 36 L17 44 L11.5 52" stroke="#b9b9b2" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 52 L7 52.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="#f0b429" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M28 36 L37 42 L34.5 53" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34.5 53 L39.5 53.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L35 22 L40 17" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="17" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* run frame B */}
              <svg className="pose pose-run-b" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L23 23 L18 26" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="26" r="2.2" fill="#b9b9b2" />
                <path d="M25 36 L21 44 L15 50" stroke="#b9b9b2" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 50 L10.5 50.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="#f0b429" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M28 36 L33 43 L30 53" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 53 L35 53.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L33 23 L38 26" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="38" cy="26" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* strike pose */}
              <svg className="pose pose-kick" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L18 20 L12 15" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="15" r="2.2" fill="#b9b9b2" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="#f0b429" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M26 36 L24.5 45 L24 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 54 L28.6 54.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 36 L38 38 L47 31" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M47 31 L51 28.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L36 20 L42 24" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="24" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* celebration pose: arms up */}
              <svg className="pose pose-cele" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 16 L20 8 L15.5 2" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15.5" cy="2.5" r="2.2" fill="#b9b9b2" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="#f0b429" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M25.5 36 L24.5 45 L24 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 54 L28.6 54.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M28.5 36 L29.5 45 L30 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 54 L34.6 54.6" stroke="#f0b429" strokeWidth="4" strokeLinecap="round" />
                <path d="M30 16 L36 8 L40.5 2" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40.5" cy="2.5" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
            </div>
          </div>

          <div className="gs-ball-x">
            <div className="gs-ball-hop">
              <div className="gs-ball-y">
                <svg width="16" height="16" viewBox="0 0 64 64" fill="none">
                  <defs>
                    <clipPath id="gsBallClip">
                      <circle cx="32" cy="32" r="30" />
                    </clipPath>
                  </defs>
                  <circle cx="32" cy="32" r="30" fill="#f5f5f0" stroke="#161616" strokeWidth="2" />
                  <g clipPath="url(#gsBallClip)">
                    <g stroke="#161616" strokeWidth="2.4" strokeLinecap="round">
                      <line x1="32" y1="22" x2="32" y2="6" />
                      <line x1="41.5" y1="28.9" x2="56.8" y2="24.2" />
                      <line x1="37.9" y1="40.1" x2="47.3" y2="53.1" />
                      <line x1="26.1" y1="40.1" x2="16.7" y2="53.1" />
                      <line x1="22.5" y1="28.9" x2="7.2" y2="24.2" />
                    </g>
                    <path d="M32,22 L41.5,28.9 L37.9,40.1 L26.1,40.1 L22.5,28.9 Z" fill="#161616" />
                    <g fill="#161616">
                      <circle cx="32" cy="0.5" r="8.4" />
                      <circle cx="60.4" cy="23.2" r="8.4" />
                      <circle cx="49.6" cy="57" r="8.4" />
                      <circle cx="14.4" cy="57" r="8.4" />
                      <circle cx="3.6" cy="23.2" r="8.4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 400,
              flex: "1 1 300px",
            }}
          >
            <Image
              src="/assets/club500-logo.jpg"
              alt="Club 500"
              width={64}
              height={64}
              style={{ height: 64, width: "auto", alignSelf: "flex-start" }}
            />
            <p
              style={{
                margin: 0,
                font: '400 14px/1.6 var(--font-inter-tight), sans-serif',
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Building the future of community football in Kenya.
            </p>
            <div>
              <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 10 }}>
                Subscribe for updates
              </div>
              <NewsletterForm />
            </div>
          </div>
          <div style={{ display: "flex", gap: "clamp(32px, 5vw, 64px)", flexWrap: "wrap", paddingTop: 8 }}>
            {COLUMNS.map(([head, links]) => (
              <div
                key={head}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span className="mono-label">{head}</span>
                {links.map(([l, href]) => (
                  <Link
                    key={l}
                    href={href}
                    style={{
                      font: '500 14px/1 var(--font-inter-tight), sans-serif',
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: 44,
            paddingTop: 22,
            textAlign: "center",
          }}
        >
          <span className="mono-label">All rights Reserved CLUB500 2026</span>
        </div>
      </div>
    </footer>
  );
}
