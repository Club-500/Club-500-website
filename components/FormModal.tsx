"use client";

import { useEffect } from "react";

export default function FormModal({
  title,
  formUrl,
  onClose,
}: {
  title: string;
  formUrl: string;
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
          maxWidth: 680,
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: "clamp(14px, 3vw, 20px)",
          background: "var(--panel)",
          border: "1px solid var(--glass-border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ font: '700 15px/1 var(--font-inter-tight), sans-serif' }}>{title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(var(--tx),0.2)",
              background: "transparent",
              color: "var(--fg)",
              cursor: "pointer",
              font: '600 16px/1 var(--font-inter-tight), sans-serif',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>
        {formUrl ? (
          <iframe
            src={formUrl}
            title={title}
            style={{ width: "100%", height: "clamp(700px, 120vw, 1200px)", border: "none", display: "block", borderRadius: 10 }}
          >
            Loading…
          </iframe>
        ) : (
          <p style={{ margin: "20px 0", font: '400 14.5px/1.6 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.6)", textAlign: "center" }}>
            This form is being finalized — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
