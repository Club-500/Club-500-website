"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState("error");
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("c500-newsletter") || "[]");
      list.push({ email, date: new Date().toISOString() });
      localStorage.setItem("c500-newsletter", JSON.stringify(list));
    } catch {}
    setState("done");
    setEmail("");
  };

  if (state === "done") {
    return (
      <p style={{ margin: 0, font: '500 14px/1.5 var(--font-inter-tight), sans-serif', color: "#f0b429" }}>
        You&apos;re subscribed. Karibu to the movement!
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
          placeholder="Your email address"
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
          style={{
            background: "#f0b429",
            color: "#0a0a0a",
            border: "none",
            borderRadius: 999,
            padding: "13px 24px",
            font: '600 14px/1 var(--font-inter-tight), sans-serif',
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
      {state === "error" && (
        <p style={{ margin: "8px 0 0", font: '500 12.5px/1.4 var(--font-inter-tight), sans-serif', color: "rgb(240,120,100)" }}>
          Enter a valid email address
        </p>
      )}
    </div>
  );
}
