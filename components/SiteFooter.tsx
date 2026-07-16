import Link from "next/link";
import Image from "next/image";

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
      {/* football rolling along the top line of the footer */}
      <div className="footer-ball" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <defs>
            <clipPath id="footBallClip">
              <circle cx="32" cy="32" r="30" />
            </clipPath>
          </defs>
          <circle cx="32" cy="32" r="30" fill="#f5f5f0" stroke="#161616" strokeWidth="2" />
          <g clipPath="url(#footBallClip)">
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
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
              maxWidth: 340,
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
              Building the future of community football in Kenya. An Ubuntu
              Initiative.
            </p>
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
            marginTop: 48,
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
