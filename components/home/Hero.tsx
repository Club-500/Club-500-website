"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const refs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const vids = refs.map((r) => r.current).filter(Boolean) as HTMLVideoElement[];
    const tryPlay = () => vids.forEach((v) => v.play().catch(() => {}));
    tryPlay();
    const onInteract = () => {
      tryPlay();
      document.removeEventListener("pointerdown", onInteract);
    };
    document.addEventListener("pointerdown", onInteract);
    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    const iv = setInterval(() => setActive((p) => (p + 1) % 3), 9000);
    return () => {
      clearInterval(iv);
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const vidStyle = (on: boolean): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: on ? 1 : 0,
    transition: "opacity 1.4s ease",
  });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <video
          ref={refs[0]}
          src="/assets/hero-female.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={vidStyle(active === 0)}
        />
        <video
          ref={refs[1]}
          src="/assets/hero-kick.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={vidStyle(active === 1)}
        />
        <video
          ref={refs[2]}
          src="/assets/hero-play.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={vidStyle(active === 2)}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0a0a0a 4%, rgba(10,10,10,0.35) 40%, rgba(10,10,10,0.25) 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 32px 56px",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <div
          className="hero-up hd-1"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <span className="live-dot"></span>
          <span className="mono-label" style={{ color: "rgba(255,255,255,0.8)" }}>
            Live — Clubs onboarded 33 / 500
          </span>
        </div>
        <h1 className="mega hero-up hd-2" style={{ margin: 0 }}>
          Earn as you
          <br />
          grow <em className="serif-accent gold">your</em> club
        </h1>
        <div
          className="hero-up hd-3"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: 420,
              font: '400 16px/1.6 var(--font-inter-tight), sans-serif',
              color: "rgba(255,255,255,0.7)",
            }}
          >
            500 community football clubs. 47 counties. One national movement —
            and your referral link is your earning power.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="glass"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                borderRadius: 16,
                padding: "6px 6px 6px 22px",
                background: "rgba(10,10,10,0.35)",
              }}
            >
              <span
                style={{
                  font: '500 13px/1.3 var(--font-inter-tight), sans-serif',
                  color: "rgba(255,255,255,0.85)",
                  paddingRight: 14,
                }}
              >
                One movement. 500 clubs. Yours is waiting.
              </span>
              <Link href="/clubs">
                <button
                  className="pill-btn"
                  type="button"
                  style={{ borderRadius: 12, padding: "12px 20px" }}
                >
                  <span style={{ font: '600 13px/1 var(--font-inter-tight), sans-serif' }}>
                    Find your club
                  </span>
                </button>
              </Link>
            </div>
            <Link href="/earn">
              <button className="pill-ghost" type="button">
                Start earning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
