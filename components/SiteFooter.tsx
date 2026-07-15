import Link from "next/link";
import Image from "next/image";

const COLUMNS: [string, [string, string][]][] = [
  [
    "Explore",
    [
      ["Clubs", "/clubs"],
      ["Newsroom", "/newsroom"],
      ["Fan Zone", "/fanzone"],
      ["About", "/about"],
    ],
  ],
  [
    "Grow",
    [
      ["Earn", "/earn"],
      ["Partners", "/partners"],
      ["Events", "/events"],
      ["Podcast", "/podcast"],
    ],
  ],
  ["Account", [["Sign in", "/login"]]],
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "72px 32px 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 56,
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
            <div
              style={{
                alignSelf: "flex-start",
                padding: "12px 16px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Image
                src="/assets/club500-logo.png"
                alt="Club 500"
                width={60}
                height={63}
                style={{ height: 60, width: "auto", display: "block" }}
              />
            </div>
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
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span className="mono-label">Club500 © 2026 — All rights reserved</span>
          <span className="mono-label">47 Counties · 8 Regions · 500 Clubs</span>
        </div>
      </div>
    </footer>
  );
}
