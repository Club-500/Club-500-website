"use client";

import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";
import ShareButton from "@/components/ShareButton";
import CapturePill from "@/components/CapturePill";
import { EVENT_IMG } from "@/lib/data";
import { EVENTS } from "@/lib/content";
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
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <Countdown />
        <div
          className="rv"
          style={{
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(var(--tx),0.1)",
            position: "relative",
            aspectRatio: "21/7",
            minHeight: 200,
            marginBottom: 14,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src={EVENT_IMG} alt="Club500 events" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent 60%)" }} />
          <div style={{ position: "absolute", left: "clamp(18px, 3vw, 28px)", bottom: "clamp(14px, 2.5vw, 22px)", right: "clamp(18px, 3vw, 28px)" }}>
            <span className="tag-pill gold-pill">Next up</span>
            <div className="display" style={{ marginTop: 10, color: "#fff" }}>National Launch Tour</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 14 }}>
          {EVENTS.map(([date, city, title, desc, kind], i) => (
            <div
              key={title}
              className={"glass club-card rv rv-d" + i}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag-pill">{kind}</span>
                <div style={{ textAlign: "right" }}>
                  <div className="gold" style={{ font: '700 18px/1 var(--font-inter-tight), sans-serif' }}>{date}</div>
                  <div className="mono-label" style={{ marginTop: 4 }}>{city}</div>
                </div>
              </div>
              <div style={{ font: '600 18px/1.3 var(--font-inter-tight), sans-serif', flex: 1 }}>{title}</div>
              <p style={{ margin: 0, font: '400 14px/1.55 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)" }}>{desc}</p>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <CapturePill
                  label="RSVP"
                  doneText="You're on the list"
                  storageKey={`c500-rsvp-${title}`}
                  placeholder="Email or phone"
                />
                <ShareButton title={title} text={`${title} · ${date}, ${city}. Club500.`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
