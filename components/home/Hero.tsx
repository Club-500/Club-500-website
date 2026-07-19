"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

type Slide =
  | { kind: "img"; src: string }
  | { kind: "vid"; src: string; poster: string };

/* The rotation tells the slogan: grassroots dust, the players,
   and finally the stadium. Greatness, then back to the roots. */
const SLIDES: Slide[] = [
  { kind: "img", src: "/assets/hero-acac.webp" },
  { kind: "vid", src: "/assets/hero-kenyan1.mp4", poster: "/assets/hero-kenyan1-poster.jpg" },
  { kind: "img", src: "/assets/hero-acac2.webp" },
  { kind: "vid", src: "/assets/hero-lightskin.mp4", poster: "/assets/hero-lightskin-poster.jpg" },
  { kind: "vid", src: "/assets/hero-female.mp4", poster: "/assets/hero-female-poster.jpg" },
  { kind: "vid", src: "/assets/hero-stadium.mp4", poster: "/assets/hero-stadium-poster.jpg" },
];

export default function Hero() {
  const { t } = useLang();
  const vidRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [vidsReady, setVidsReady] = useState(false);

  useEffect(() => {
    const vids = () => vidRefs.current.filter(Boolean) as HTMLVideoElement[];
    const tryPlay = () => vids().forEach((v) => v.play().catch(() => {}));
    // The opening slide is an image, so videos can load quietly in the background
    const idle = setTimeout(() => {
      setVidsReady(true);
      setTimeout(tryPlay, 150);
    }, 2000);
    const onInteract = () => {
      tryPlay();
      document.removeEventListener("pointerdown", onInteract);
    };
    document.addEventListener("pointerdown", onInteract);
    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    const iv = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), 8000);
    return () => {
      clearInterval(iv);
      clearTimeout(idle);
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const layerStyle = (on: boolean): React.CSSProperties => ({
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
      className="hero-sec"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {SLIDES.map((s, i) =>
          s.kind === "img" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              alt=""
              fetchPriority={i === 0 ? "high" : "auto"}
              style={{
                ...layerStyle(active === i),
                transform: active === i ? "scale(1.05)" : "scale(1)",
                transition: "opacity 1.4s ease, transform 9s linear",
              }}
            />
          ) : (
            <video
              key={s.src}
              ref={(el) => {
                vidRefs.current[i] = el;
              }}
              src={vidsReady ? s.src : undefined}
              poster={s.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              style={layerStyle(active === i)}
            />
          )
        )}
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
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 clamp(20px, 4vw, 32px) clamp(40px, 6vw, 64px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(18px, 3vw, 28px)",
        }}
      >
        <h1 className="mega hero-up hd-1" style={{ margin: 0, maxWidth: 820, color: "#fff" }}>
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
          {t("hero.sub")}
        </p>
        <div
          className="hero-up hd-3 hero-roles"
          style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}
        >
          <Link href="/clubs/apply">
            <button className="hero-role" type="button">{t("hero.runclub")}</button>
          </Link>
          <Link href="/fanzone">
            <button className="hero-role" type="button">{t("hero.fan")}</button>
          </Link>
          <Link href="/partners">
            <button className="hero-role" type="button">{t("hero.partner")}</button>
          </Link>
          <Link href="/volunteer">
            <button className="hero-role" type="button">{t("hero.volunteer")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
