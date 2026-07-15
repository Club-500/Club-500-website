"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS: [string, string][] = [
  ["/clubs", "Clubs"],
  ["/newsroom", "Newsroom"],
  ["/fanzone", "Fan Zone"],
  ["/earn", "Earn"],
  ["/partners", "Partners"],
  ["/about", "About"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src="/assets/club500-logo.jpg"
          alt="Club 500"
          width={46}
          height={46}
          style={{
            height: 46,
            width: "auto",
            borderRadius: 8,
            filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.6))",
          }}
          priority
        />
      </Link>
      <nav
        className="glass"
        style={{ display: "flex", gap: 4, padding: "6px 8px", borderRadius: 999 }}
      >
        {LINKS.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                font: '500 12px/1 var(--font-inter-tight), sans-serif',
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active ? "#0a0a0a" : "rgba(255,255,255,0.85)",
                background: active ? "#f0b429" : "transparent",
                padding: "10px 16px",
                borderRadius: 999,
                transition: "all .2s",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Link href="/login" className="pill-ghost" style={{ padding: "11px 22px" }}>
          Sign in
        </Link>
      </div>
    </header>
  );
}
