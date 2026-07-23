"use client";

import { useEffect, useState } from "react";

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export default function InstallPrompt() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      try {
        if (localStorage.getItem("c500-install-dismissed")) return;
      } catch {}
      setEvt(e as BIPEvent);
      setTimeout(() => setShow(true), 12000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!show || !evt) return null;

  const dismiss = () => {
    setShow(false);
    try {
      localStorage.setItem("c500-install-dismissed", "1");
    } catch {}
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 12,
        bottom: "max(12px, env(safe-area-inset-bottom))",
        zIndex: 70,
        background: "var(--panel)",
        border: "1px solid rgba(var(--tx),0.15)",
        borderRadius: 16,
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      <span style={{ font: '600 13.5px/1.35 var(--font-inter-tight), sans-serif' }}>
        Install Club500 — works like an app
      </span>
      <button
        type="button"
        onClick={async () => {
          await evt.prompt();
          dismiss();
        }}
        style={{
          background: "var(--blue)",
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "9px 16px",
          font: '700 13px/1 var(--font-inter-tight), sans-serif',
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        Install
      </button>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        style={{ background: "none", border: "none", color: "rgba(var(--tx),0.5)", cursor: "pointer", font: '600 16px/1 var(--font-inter-tight), sans-serif', padding: 4 }}
      >
        ×
      </button>
    </div>
  );
}
