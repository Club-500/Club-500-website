"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import Countdown from "@/components/Countdown";
import { useLang } from "@/lib/i18n";

export default function EventsPage() {
  const { t } = useLang();
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Workshops · Festivals · Trials">
        {t("ev.h1a")} <span className="gold">{t("ev.h1b")}</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) clamp(44px, 9vw, 72px)", maxWidth: 1280, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/events-banner.webp"
          alt="Club500 Events — Launches. Workshops. Community Gatherings."
          className="rv"
          style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 20, marginBottom: 20, display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <Countdown />

        <div className="glass rv" style={{ padding: "clamp(28px, 5vw, 48px)", textAlign: "center", marginTop: 14 }}>
          <div style={{ font: '700 18px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 8 }}>
            More events coming soon
          </div>
          <p style={{ margin: "0 auto", maxWidth: 460, font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>
            Workshops, festivals and trials will be announced here as they&apos;re
            confirmed.
          </p>
        </div>
      </div>
    </>
  );
}
