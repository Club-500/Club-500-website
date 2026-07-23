"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AudienceIntroModal({
  headline,
  body,
  ctaLabel,
  ctaHref,
  onClose,
}: {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(10,10,10,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass"
        style={{
          position: "relative",
          maxWidth: 560,
          width: "100%",
          padding: "clamp(28px, 5vw, 44px)",
          background: "var(--panel)",
          border: "1px solid var(--glass-border)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid rgba(var(--tx),0.2)",
            background: "transparent",
            color: "var(--fg)",
            cursor: "pointer",
            font: '600 16px/1 var(--font-inter-tight), sans-serif',
          }}
        >
          ✕
        </button>
        <h2 className="display" style={{ margin: "0 0 16px", maxWidth: 440, fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
          {headline}
        </h2>
        <p style={{ margin: "0 0 28px", font: '400 15px/1.65 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.68)" }}>
          {body}
        </p>
        <Link href={ctaHref} onClick={onClose} className="ball-pop">
          <button className="pill-btn" type="button" style={{ background: "var(--gold)", color: "#141310" }}>
            <span className="txt">{ctaLabel}</span>
            <span className="circ" style={{ background: "#0a0a0a" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
