"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CLUBS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import ClubCrest from "@/components/ClubCrest";

export default function MyClub() {
  const { t } = useLang();
  const [club, setClub] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setClub(localStorage.getItem("c500-myclub"));
    } catch {}
    setLoaded(true);
  }, []);

  const pick = (name: string) => {
    setClub(name);
    try {
      localStorage.setItem("c500-myclub", name);
    } catch {}
  };

  const clear = () => {
    setClub(null);
    try {
      localStorage.removeItem("c500-myclub");
    } catch {}
  };

  if (!loaded) return null;

  const chosen = CLUBS.find(([n]) => n === club);

  return (
    <section style={{ padding: "24px clamp(20px, 4vw, 32px) 0", maxWidth: 1280, margin: "0 auto" }}>
      {chosen ? (
        <div
          className="glass rv in"
          style={{
            padding: "clamp(18px, 3vw, 26px)",
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            borderLeft: "3px solid #C98A00",
          }}
        >
          <div style={{ width: 64 }}>
            <ClubCrest name={chosen[0]} img={chosen[2]} />
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <div className="mono-label">{t("myclub.yours")}</div>
            <div style={{ font: '700 19px/1.25 var(--font-inter-tight), sans-serif', marginTop: 4 }}>
              {chosen[0]}
            </div>
            <div className="mono-label" style={{ marginTop: 4 }}>{chosen[1]}</div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/fanzone" className="tag-pill gold-pill">
              {t("nav.fanzone")} →
            </Link>
            <a href={chosen[3]} target="_blank" rel="noopener noreferrer" className="tag-pill">
              {t("myclub.visit")} →
            </a>
            <button
              type="button"
              onClick={clear}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                font: '500 13px/1 var(--font-inter-tight), sans-serif',
                color: "rgba(var(--tx),0.5)",
              }}
            >
              {t("myclub.change")}
            </button>
          </div>
        </div>
      ) : (
        <div className="glass rv" style={{ padding: "clamp(18px, 3vw, 26px)" }}>
          <div style={{ font: '700 17px/1.3 var(--font-inter-tight), sans-serif' }}>{t("myclub.q")}</div>
          <div style={{ font: '400 13.5px/1.5 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.55)", margin: "4px 0 14px" }}>
            {t("myclub.hint")}
          </div>
          <div className="no-scrollbar" style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {CLUBS.map(([name, county, img]) => (
              <button
                key={name}
                type="button"
                onClick={() => pick(name)}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1px solid rgba(var(--tx),0.15)",
                  background: "transparent",
                  borderRadius: 999,
                  padding: "8px 16px 8px 8px",
                  cursor: "pointer",
                  color: "var(--fg)",
                }}
              >
                <div style={{ width: 34 }}>
                  <ClubCrest name={name} img={img} />
                </div>
                <span style={{ font: '600 13.5px/1.2 var(--font-inter-tight), sans-serif', whiteSpace: "nowrap" }}>
                  {name}
                  <span style={{ display: "block", font: '500 11px/1.2 var(--font-inter-tight), sans-serif', color: "rgba(var(--tx),0.5)", textAlign: "left" }}>
                    {county}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
