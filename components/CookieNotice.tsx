"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export default function CookieNotice() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // sessionStorage only: the notice returns every time the site is reopened
    try {
      if (!sessionStorage.getItem("c500-cookies")) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (v: "accepted" | "declined") => {
    try {
      sessionStorage.setItem("c500-cookies", v);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-card"
      role="dialog"
      aria-label="Cookie notice"
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "max(16px, env(safe-area-inset-bottom))",
        zIndex: 80,
        width: "min(560px, calc(100vw - 24px))",
        background: "var(--panel)",
        border: "1px solid rgba(var(--tx),0.15)",
        borderRadius: 18,
        padding: "18px 20px",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 6 }}>
        {t("cookie.title")}
      </div>
      <p
        style={{
          margin: "0 0 14px",
          font: '400 13.5px/1.55 var(--font-inter-tight), sans-serif',
          color: "rgba(var(--tx),0.65)",
        }}
      >
        {t("cookie.body")}
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => choose("accepted")}
          style={{
            background: "#1B5E3C",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "11px 22px",
            font: '600 14px/1 var(--font-inter-tight), sans-serif',
            cursor: "pointer",
          }}
        >
          {t("cookie.accept")}
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          style={{
            background: "transparent",
            color: "rgba(var(--tx),0.75)",
            border: "1px solid rgba(var(--tx),0.25)",
            borderRadius: 999,
            padding: "11px 22px",
            font: '500 14px/1 var(--font-inter-tight), sans-serif',
            cursor: "pointer",
          }}
        >
          {t("cookie.decline")}
        </button>
      </div>
    </div>
  );
}
