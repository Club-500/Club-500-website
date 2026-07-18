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
  const [restReady, setRestReady] = useState(false);

  useEffect(() => {
    const vids = () => refs.map((r) => r.current).filter(Boolean) as HTMLVideoElement[];
    const tryPlay = () => vids().forEach((v) => v.play().catch(() => {}));
    tryPlay();
    // Only the first video loads up front; fetch the other two once the page is idle
    const idle = setTimeout(() => {
      setRestReady(true);
      setTimeout(tryPlay, 100);
    }, 2500);
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
      clearTimeout(idle);
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
          src={restReady ? "/assets/hero-kick.mp4" : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={vidStyle(active === 1)}
        />
        <video
          ref={refs[2]}
          src={restReady ? "/assets/hero-play.mp4" : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
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
          padding: "0 clamp(20px, 4vw, 32px) clamp(40px, 6vw, 64px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <h1 className="mega hero-up hd-1" style={{ margin: 0, maxWidth: 820 }}>
          Grassroots to <span className="gold">Greatness</span>
        </h1>
        <p
          className="hero-up hd-2"
          style={{
            margin: 0,
            maxWidth: 560,
            font: '400 17px/1.6 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.78)",
          }}
        >
          500 community football clubs. 47 counties. One national platform
          giving Kenyan football the structure it deserves.
        </p>
        <div
          className="hero-up hd-3"
          style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}
        >
          <Link href="/clubs/apply">
            <button className="hero-role" type="button">I run a club</button>
          </Link>
          <Link href="/fanzone">
            <button className="hero-role" type="button">I&apos;m a fan</button>
          </Link>
          <Link href="/partners">
            <button className="hero-role" type="button">I want to partner</button>
          </Link>
          <Link href="/volunteer">
            <button className="hero-role" type="button">I want to volunteer</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
