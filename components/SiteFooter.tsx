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
              <svg width="30" height="52" viewBox="0 0 44 60" fill="none">
                <circle cx="22" cy="7" r="5.5" fill="#9aa4ad" />
                <path d="M22 13 C17 14 15 20 15.5 27 L28.5 27 C29 20 27 14 22 13 Z" fill="#5c666f" />
                <rect x="16" y="27" width="12" height="6" rx="2" fill="#3f474e" />
                <rect x="17" y="33" width="4" height="20" rx="2" fill="#9aa4ad" transform="rotate(8 19 33)" />
                <rect x="23" y="33" width="4" height="20" rx="2" fill="#9aa4ad" transform="rotate(-8 25 33)" />
                <rect x="14.5" y="14" width="3.6" height="14" rx="1.8" fill="#9aa4ad" transform="rotate(14 16 15)" />
                <rect x="25.9" y="14" width="3.6" height="14" rx="1.8" fill="#9aa4ad" transform="rotate(-14 28 15)" />
              </svg>
            </div>
          </div>
          <div className="gs-def gs-def-2">
            <div className="gs-def-react-2">
              <svg width="30" height="52" viewBox="0 0 44 60" fill="none">
                <circle cx="22" cy="7" r="5.5" fill="#9aa4ad" />
                <path d="M22 13 C17 14 15 20 15.5 27 L28.5 27 C29 20 27 14 22 13 Z" fill="#5c666f" />
                <rect x="16" y="27" width="12" height="6" rx="2" fill="#3f474e" />
                <rect x="17" y="33" width="4" height="20" rx="2" fill="#9aa4ad" transform="rotate(8 19 33)" />
                <rect x="23" y="33" width="4" height="20" rx="2" fill="#9aa4ad" transform="rotate(-8 25 33)" />
                <rect x="14.5" y="14" width="3.6" height="14" rx="1.8" fill="#9aa4ad" transform="rotate(14 16 15)" />
                <rect x="25.9" y="14" width="3.6" height="14" rx="1.8" fill="#9aa4ad" transform="rotate(-14 28 15)" />
              </svg>
            </div>
          </div>

          {/* our striker in the gold jersey */}
          <div className="gs-player">
            <div className="gs-player-inner">
              <svg width="34" height="56" viewBox="0 0 44 60" fill="none">
                <g className="p-limb p-arm-b">
                  <rect x="20.2" y="14" width="3.6" height="15" rx="1.8" fill="#b9b9b2" />
                </g>
                <g className="p-limb p-leg-b">
                  <rect x="20" y="31" width="4.2" height="22" rx="2.1" fill="#b9b9b2" />
                </g>
                <path d="M22 12.5 C16.5 13.5 14.6 20 15.2 28 L28.8 28 C29.4 20 27.5 13.5 22 12.5 Z" fill="#f0b429" />
                <rect x="15.6" y="28" width="12.8" height="6.5" rx="2" fill="#e9e9e4" />
                <g className="p-limb p-leg-f">
                  <rect x="20" y="31" width="4.2" height="22" rx="2.1" fill="#e9e9e4" />
                </g>
                <g className="p-limb p-arm-f">
                  <rect x="20.2" y="14" width="3.6" height="15" rx="1.8" fill="#e9e9e4" />
                </g>
                <circle cx="22" cy="6.5" r="5.5" fill="#e9e9e4" />
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
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
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
