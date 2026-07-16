"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS: [string, string][] = [
  ["/clubs", "Clubs"],
  ["/fanzone", "Fan Zone"],
  ["/newsroom", "Newsroom"],
  ["/events", "Events"],
  ["/podcast", "Podcast"],
  ["/partners", "Partners"],
  ["/about", "About"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
        padding: "10px clamp(16px, 4vw, 32px)",
        background: "rgba(10,10,10,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 60 }}>
        <Image
          src="/assets/club500-logo.jpg"
          alt="Club 500"
          width={72}
          height={72}
          style={{ height: 72, width: "auto" }}
          priority
        />
      </Link>

      <nav
        className="glass site-nav-desktop"
        style={{ display: "flex", gap: 2, padding: "6px 8px", borderRadius: 999 }}
      >
        {LINKS.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                font: '500 11.5px/1 var(--font-inter-tight), sans-serif',
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active ? "#0a0a0a" : "rgba(255,255,255,0.85)",
                background: active ? "#f0b429" : "transparent",
                padding: "10px 13px",
                borderRadius: 999,
                transition: "all .2s",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div style={{ display: "flex", gap: 10, alignItems: "center", zIndex: 60 }}>
        <Link
          href="/login"
          className="pill-ghost site-nav-desktop"
          style={{ padding: "11px 22px" }}
        >
          Sign in
        </Link>
        <button
          type="button"
          className="site-nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.06)",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className={"burger" + (open ? " burger-open" : "")}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

    </header>

    <div
      className={"site-nav-backdrop" + (open ? " open" : "")}
      onClick={() => setOpen(false)}
    />
    <aside className={"site-nav-drawer" + (open ? " open" : "")} aria-hidden={!open}>
      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Link
          href="/"
          style={{
            font: '600 16px/1 var(--font-inter-tight), sans-serif',
            color: pathname === "/" ? "#f0b429" : "#fff",
            padding: "14px 16px",
            borderRadius: 12,
            background: pathname === "/" ? "rgba(240,180,41,0.12)" : "transparent",
          }}
        >
          Home
        </Link>
        {LINKS.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                font: '600 16px/1 var(--font-inter-tight), sans-serif',
                color: active ? "#f0b429" : "#fff",
                padding: "14px 16px",
                borderRadius: 12,
                background: active ? "rgba(240,180,41,0.12)" : "transparent",
              }}
            >
              {label}
            </Link>
          );
        })}
        <Link
          href="/login"
          className="pill-ghost"
          style={{ justifyContent: "center", marginTop: 14, padding: "15px 0" }}
        >
          Sign in
        </Link>
      </nav>
    </aside>
    </>
  );
}
