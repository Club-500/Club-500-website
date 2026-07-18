"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang();

  const seg = (active: boolean): React.CSSProperties => ({
    padding: "9px 16px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    font: '600 13px/1 var(--font-inter-tight), sans-serif',
    background: active ? "#1B5E3C" : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,0.7)",
    transition: "all .2s",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, font: '500 13px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.6)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2c2.5 2.6 4 6.1 4 10s-1.5 7.4-4 10c-2.5-2.6-4-6.1-4-10s1.5-7.4 4-10z" />
        </svg>
        {t("footer.language")}
      </span>
      <div
        style={{
          display: "inline-flex",
          gap: 2,
          padding: 3,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <button type="button" style={seg(lang === "en")} onClick={() => setLang("en")}>
          English
        </button>
        <button type="button" style={seg(lang === "sw")} onClick={() => setLang("sw")}>
          Kiswahili
        </button>
      </div>
    </div>
  );
}
