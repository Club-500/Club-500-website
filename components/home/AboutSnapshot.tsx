"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function AboutSnapshot() {
  const { t } = useLang();
  return (
    <section style={{ padding: "20px clamp(20px, 4vw, 32px) clamp(36px, 7vw, 56px)", maxWidth: 1280, margin: "0 auto" }}>
      <div
        className="glass rv"
        style={{ padding: "clamp(24px, 4vw, 40px)", borderLeft: "3px solid var(--blue)" }}
      >
        <p
          style={{
            margin: "0 0 18px",
            maxWidth: 820,
            font: '600 clamp(1.15rem, 2.2vw, 1.55rem)/1.5 var(--font-inter-tight), sans-serif',
            letterSpacing: "-0.01em",
          }}
        >
          {t("snapshot.body")}
        </p>
        <Link href="/about" className="gold" style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>
          {t("snapshot.read")}
        </Link>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/homepage-500clubs-banner.webp"
        alt="500 Clubs. 47 Counties, 1 Vision. Building the future of community football."
        className="rv"
        style={{ width: "100%", height: "auto", borderRadius: 20, marginTop: 14, display: "block" }}
      />
    </section>
  );
}
