"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const LINKS: [string, string][] = [
  ["/clubs", "Clubs"],
  ["/fanzone", "Fan Zone"],
  ["/volunteer", "Volunteer"],
  ["/partners", "Partners"],
  ["/events", "Events"],
  ["/about", "About"],
];

const STORIES: [string, string][] = [
  ["/newsroom", "Newsroom"],
  ["/podcast", "Podcast"],
];

const navLinkStyle = (active: boolean): React.CSSProperties => ({
  font: '500 12px/1 var(--font-inter-tight), sans-serif',
  letterSpacing: "0.02em",
  color: active ? "#fff" : "rgba(var(--tx),0.85)",
  background: active ? "#1B5E3C" : "transparent",
  padding: "10px 14px",
  borderRadius: 999,
  transition: "all .2s",
  whiteSpace: "nowrap",
});

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const storiesActive = STORIES.some(([href]) => pathname === href);

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
        background: "rgba(14,16,15,0.8)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(var(--tx),0.08)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 60 }}>
        <Image
          src="/assets/club500-logo.jpg"
          alt="Club 500"
          width={72}
          height={72}
          style={{ height: "clamp(52px, 9vw, 72px)", width: "auto" }}
          priority
        />
      </Link>

      <nav
        className="glass site-nav-desktop"
        style={{ display: "flex", gap: 2, padding: "6px 8px", borderRadius: 999, alignItems: "center" }}
      >
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} style={navLinkStyle(pathname === href)}>
            {label}
          </Link>
        ))}
        <div className="stories-wrap" style={{ position: "relative" }}>
          <button
            type="button"
            className="stories-btn"
            style={{
              ...navLinkStyle(storiesActive),
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Stories
            <svg width="9" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="stories-menu">
            {STORIES.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  padding: "11px 16px",
                  font: '500 13px/1 var(--font-inter-tight), sans-serif',
                  color: pathname === href ? "#C98A00" : "rgba(var(--tx),0.85)",
                  borderRadius: 10,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ display: "flex", gap: 10, alignItems: "center", zIndex: 60 }}>
        <ThemeToggle />
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
            border: "1px solid rgba(var(--tx),0.25)",
            background: "rgba(var(--tx),0.06)",
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
            color: pathname === "/" ? "#C98A00" : "#fff",
            padding: "14px 16px",
            borderRadius: 12,
            background: pathname === "/" ? "rgba(201,138,0,0.12)" : "transparent",
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
                color: active ? "#C98A00" : "#fff",
                padding: "14px 16px",
                borderRadius: 12,
                background: active ? "rgba(201,138,0,0.12)" : "transparent",
              }}
            >
              {label}
            </Link>
          );
        })}
        <div className="mono-label" style={{ padding: "14px 16px 4px" }}>Stories</div>
        {STORIES.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                font: '500 15px/1 var(--font-inter-tight), sans-serif',
                color: active ? "#C98A00" : "rgba(var(--tx),0.85)",
                padding: "12px 16px 12px 28px",
                borderRadius: 12,
                background: active ? "rgba(201,138,0,0.12)" : "transparent",
              }}
            >
              {label}
            </Link>
          );
        })}
        <div style={{ marginTop: 14 }}>
          <ThemeToggle big />
        </div>
        <Link
          href="/login"
          className="pill-ghost"
          style={{ justifyContent: "center", marginTop: 10, padding: "15px 0" }}
        >
          Sign in
        </Link>
      </nav>
    </aside>
    </>
  );
}
