"use client";

import { useEffect, useState } from "react";

/** Turns a dead CTA into a tiny email/phone capture with a done state. */
export default function CapturePill({
  label,
  doneText,
  storageKey,
  placeholder = "Email or phone",
}: {
  label: string;
  doneText: string;
  storageKey: string;
  placeholder?: string;
}) {
  const [phase, setPhase] = useState<"idle" | "open" | "busy" | "done">("idle");
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey)) setPhase("done");
    } catch {}
  }, [storageKey]);

  const submit = () => {
    const v = value.trim();
    const okEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
    const okPhone = /^(\+?254|0)?[17]\d{8}$/.test(v.replace(/\s/g, ""));
    if (!okEmail && !okPhone) {
      setErr(true);
      return;
    }
    setPhase("busy");
    setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ v, date: new Date().toISOString() }));
      } catch {}
      setPhase("done");
    }, 550);
  };

  if (phase === "done") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          font: '600 13px/1.3 var(--font-inter-tight), sans-serif',
          color: "var(--blue-hover)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        {doneText}
      </span>
    );
  }

  if (phase === "idle") {
    return (
      <button className="pill-ghost" type="button" onClick={() => setPhase("open")} style={{ padding: "10px 20px" }}>
        {label}
      </button>
    );
  }

  return (
    <span style={{ display: "inline-flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
      <input
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setErr(false);
        }}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder={placeholder}
        style={{
          background: "rgba(var(--tx),0.06)",
          border: err ? "1.5px solid rgba(240,100,80,0.8)" : "1px solid rgba(var(--tx),0.25)",
          borderRadius: 999,
          color: "var(--fg)",
          font: '500 14px/1 var(--font-inter-tight), sans-serif',
          padding: "10px 16px",
          outline: "none",
          width: 190,
        }}
      />
      <button
        type="button"
        onClick={submit}
        disabled={phase === "busy"}
        style={{
          background: "var(--blue)",
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "10px 18px",
          font: '700 13px/1 var(--font-inter-tight), sans-serif',
          cursor: "pointer",
          opacity: phase === "busy" ? 0.7 : 1,
        }}
      >
        {phase === "busy" ? "…" : "OK"}
      </button>
    </span>
  );
}
