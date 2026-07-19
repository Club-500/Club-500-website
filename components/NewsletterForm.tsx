"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function NewsletterForm() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "busy" | "done">("idle");

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("busy");
    setTimeout(() => {
      try {
        const list = JSON.parse(localStorage.getItem("c500-newsletter") || "[]");
        list.push({ email, date: new Date().toISOString() });
        localStorage.setItem("c500-newsletter", JSON.stringify(list));
      } catch {}
      setState("done");
      setEmail("");
    }, 600);
  };

  if (state === "done") {
    return (
      <p style={{ margin: 0, font: '500 14px/1.5 var(--font-inter-tight), sans-serif', color: "#C98A00" }}>
        {t("nl.done")}
      </p>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={t("nl.placeholder")}
          style={{
            flex: "1 1 200px",
            background: "rgba(255,255,255,0.05)",
            border: state === "error" ? "1.5px solid rgba(240,100,80,0.7)" : "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            color: "#fff",
            font: '500 14px/1 var(--font-inter-tight), sans-serif',
            padding: "13px 20px",
            outline: "none",
          }}
        />
        <button
          type="button"
          onClick={submit}
          disabled={state === "busy"}
          style={{
            background: "#C98A00",
            color: "#0a0a0a",
            border: "none",
            borderRadius: 999,
            padding: "13px 24px",
            font: '600 14px/1 var(--font-inter-tight), sans-serif',
            cursor: "pointer",
          }}
        >
          {state === "busy" ? "…" : t("nl.button")}
        </button>
      </div>
      {state === "error" && (
        <p style={{ margin: "8px 0 0", font: '500 12.5px/1.4 var(--font-inter-tight), sans-serif', color: "rgb(240,120,100)" }}>
          {t("nl.error")}
        </p>
      )}
    </div>
  );
}
