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
    background: active ? "var(--blue)" : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,0.7)",
    transition: "all .2s",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
      <span
        aria-label={t("footer.language")}
        title={t("footer.language")}
        style={{ display: "inline-flex", alignItems: "center", color: "rgba(255,255,255,0.65)" }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
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
