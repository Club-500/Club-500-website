"use client";

import { useEffect, useRef } from "react";

let scriptAppended = false;

function ensureTikTokScript() {
  if (scriptAppended || typeof document === "undefined") return;
  scriptAppended = true;
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

type TikTokWindow = typeof window & {
  tiktokEmbed?: { lib?: { render?: (nodes: Element[]) => void } };
};

export default function TikTokEmbed({ url, videoId }: { url: string; videoId: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    ensureTikTokScript();
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    const tryRender = () => {
      if (cancelled) return;
      const w = window as TikTokWindow;
      if (w.tiktokEmbed?.lib?.render) {
        w.tiktokEmbed.lib.render([el]);
      } else {
        setTimeout(tryRender, 200);
      }
    };
    tryRender();

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  return (
    <blockquote
      ref={ref}
      className="tiktok-embed"
      cite={url}
      data-video-id={videoId}
      style={{ maxWidth: 340, minWidth: 260, margin: "0 auto" }}
    >
      <section>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Watch on TikTok ↗
        </a>
      </section>
    </blockquote>
  );
}
