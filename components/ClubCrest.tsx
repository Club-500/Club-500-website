"use client";

import { useState } from "react";

export default function ClubCrest({ name, img, size = "100%" }: { name: string; img: string; size?: string }) {
  const [err, setErr] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const initials = name
    .split(" ")
    .filter((w) => !["FC", "F.C", "SC", "Club"].includes(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={loaded || err ? "" : "img-skeleton"}
      style={{
        width: size,
        aspectRatio: "1/1",
        borderRadius: "50%",
        background: loaded && !err ? "#ffffff" : "var(--imgbg)",
        border: "1px solid rgba(var(--tx),0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
        transition: "background .3s",
      }}
    >
      {err ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1B5E3C",
            color: "#fff",
            font: '700 clamp(1rem, 4vw, 1.6rem)/1 var(--font-inter-tight), sans-serif',
            letterSpacing: "0.02em",
          }}
        >
          {initials}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setErr(true)}
          onLoad={() => setLoaded(true)}
          style={{ width: "78%", height: "78%", objectFit: "contain", opacity: loaded ? 1 : 0, transition: "opacity .3s" }}
        />
      )}
    </div>
  );
}
