"use client";

import { useState } from "react";
import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import TikTokEmbed from "@/components/TikTokEmbed";

const CLIPS: [id: string, title: string, thumb: string][] = [
  ["7654226359215983879", "The future of grassroots football in Kenya", "/podcast-thumbs/7654226359215983879.webp"],
  ["7654842884776086804", "What your club stands to gain from Club500", "/podcast-thumbs/7654842884776086804.webp"],
  ["7655977180287094034", "3 reasons your club should join Club500", "/podcast-thumbs/7655977180287094034.webp"],
  ["7656252680670629127", "Your career could help transform football", "/podcast-thumbs/7656252680670629127.webp"],
];

export default function PodcastPage() {
  const [active, setActive] = useState(0);
  const [id, title] = CLIPS[active];
  const url = `https://www.tiktok.com/@club500.africa/video/${id}`;

  return (
    <>
      <RevealInit />
      <PageHead eyebrow="The Club500 podcast">
        Stories, Strategy & Transformation from Kenya&apos;s{" "}
        <span className="gold">Football Future</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1100, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/podcast-banner.webp"
          alt="The Club500 Podcast — Football. Community. Conversations."
          className="rv"
          style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 20, marginBottom: 28, display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <p
          className="rv"
          style={{
            margin: "0 0 28px",
            maxWidth: 640,
            font: '400 16px/1.65 var(--font-inter-tight), sans-serif',
            color: "rgba(var(--tx),0.7)",
          }}
        >
          Featured videos from Club500 — stories, moments and what we&apos;re
          building, straight from our own channel.
        </p>

        <div
          className="rv rv-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(20px, 4vw, 40px)",
            alignItems: "start",
          }}
        >
          <div key={id} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <TikTokEmbed url={url} videoId={id} />
            <div style={{ font: '600 15px/1.4 var(--font-inter-tight), sans-serif', textAlign: "center", maxWidth: 340, margin: "0 auto" }}>
              {title}
            </div>
          </div>

          <div className="no-scrollbar" style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 620, overflowY: "auto" }}>
            {CLIPS.map(([cid, ctitle, thumb], i) => (
              <button
                key={cid}
                type="button"
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: 14,
                  padding: 10,
                  border: active === i ? "1.5px solid var(--gold)" : "1px solid rgba(var(--tx),0.12)",
                  background: active === i ? "rgba(245,179,1,0.08)" : "transparent",
                  color: "var(--fg)",
                  transition: "all .2s",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 92,
                    borderRadius: 8,
                    overflow: "hidden",
                    flexShrink: 0,
                    background: "var(--imgbg)",
                    position: "relative",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <span style={{ font: '500 13.5px/1.4 var(--font-inter-tight), sans-serif', color: active === i ? "var(--fg)" : "rgba(var(--tx),0.7)" }}>
                  {ctitle}
                </span>
              </button>
            ))}
          </div>
        </div>

        <a
          href="https://www.tiktok.com/@club500.africa"
          target="_blank"
          rel="noopener noreferrer"
          className="pill-ghost rv"
          style={{ display: "inline-block", marginTop: 32 }}
        >
          Follow @club500.africa for more ↗
        </a>
      </div>
    </>
  );
}
