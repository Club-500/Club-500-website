"use client";

import { useState } from "react";

const LINK = "club500.africa/f/shabiki254";
const MSG = encodeURIComponent(
  "Join my club on Club500 and support grassroots football in Kenya! " + "https://" + LINK
);

export default function ReferralShare() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("https://" + LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <div
      className="glass"
      style={{ padding: "clamp(18px, 3vw, 26px)", marginBottom: 14, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <div className="mono-label">Your referral link</div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            font: '600 12.5px/1 var(--font-inter-tight), sans-serif',
            color: "#2E9B63",
            border: "1px solid rgba(46,155,99,0.4)",
            borderRadius: 999,
            padding: "7px 13px",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
          Paid via M-Pesa, straight to your phone
        </span>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <div
          style={{
            flex: "1 1 220px",
            display: "flex",
            alignItems: "center",
            background: "rgba(var(--tx),0.05)",
            border: "1px solid rgba(var(--tx),0.15)",
            borderRadius: 12,
            padding: "13px 16px",
            font: '600 14px/1 var(--font-inter-tight), sans-serif',
            color: "rgba(var(--tx),0.85)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {LINK}
        </div>
        <button
          type="button"
          onClick={copy}
          style={{
            border: "1px solid rgba(var(--tx),0.25)",
            background: "transparent",
            color: "var(--fg)",
            borderRadius: 12,
            padding: "12px 18px",
            font: '600 13.5px/1 var(--font-inter-tight), sans-serif',
            cursor: "pointer",
            minWidth: 92,
          }}
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
        <a
          href={`https://wa.me/?text=${MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "#25D366",
            color: "#0b2b18",
            borderRadius: 12,
            padding: "12px 18px",
            font: '700 13.5px/1 var(--font-inter-tight), sans-serif',
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
          </svg>
          Share on WhatsApp
        </a>
      </div>
    </div>
  );
}
