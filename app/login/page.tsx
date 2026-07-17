"use client";

import { useState } from "react";
import Image from "next/image";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 12,
  color: "#fff",
  font: '500 15px/1 var(--font-inter-tight), sans-serif',
  padding: "15px 18px",
  outline: "none",
  width: "100%",
};

const socialBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  width: "100%",
  padding: "13px 0",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  font: '600 14px/1 var(--font-inter-tight), sans-serif',
  cursor: "pointer",
  transition: "background .2s, border-color .2s",
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.2C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.15 24.55c0-1.57-.14-3.09-.4-4.55H24v9.02h12.42c-.54 2.9-2.17 5.36-4.62 7.01l7.14 5.55C43.1 37.65 46.15 31.66 46.15 24.55z" />
      <path fill="#FBBC05" d="M10.54 28.58a14.5 14.5 0 0 1 0-9.16l-7.98-6.2a24.03 24.03 0 0 0 0 21.56l7.98-6.2z" />
      <path fill="#34A853" d="M24 48c6.47 0 11.9-2.14 15.87-5.82l-7.14-5.55c-1.98 1.33-4.53 2.12-8.73 2.12-6.26 0-11.57-4.22-13.46-9.92l-7.98 6.2C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const isSignup = mode === "signup";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(110px, 18vw, 140px) clamp(20px, 4vw, 32px) 72px",
      }}
    >
      <div
        className="glass rv in"
        style={{
          width: "100%",
          maxWidth: 460,
          padding: "clamp(28px, 4vw, 44px)",
          borderRadius: 24,
          textAlign: "center",
        }}
      >
        <Image
          src="/assets/club500-logo.jpg"
          alt="Club 500"
          width={72}
          height={72}
          style={{ height: 72, width: "auto", margin: "0 auto 20px", display: "block" }}
        />
        <h1 className="display" style={{ margin: "0 0 6px" }}>
          {isSignup ? "Create your account" : "Welcome back"}
        </h1>
        <p
          style={{
            margin: "0 0 26px",
            font: '400 14px/1.6 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {isSignup
            ? "Join Club500 to follow your club, play predictions and earn with your referral link."
            : "Sign in to your fan dashboard, predictions and earnings."}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          <button type="button" style={socialBtn}>
            <GoogleIcon /> Continue with Google
          </button>
          <button type="button" style={socialBtn}>
            <FacebookIcon /> Continue with Facebook
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 20px" }}>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
          <span style={{ font: '500 12px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.45)" }}>
            or with email
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
          {isSignup && <input placeholder="Full name" style={inputStyle} />}
          <input placeholder="Email address" type="email" style={inputStyle} />
          {isSignup && <input placeholder="Phone (M-Pesa)" type="tel" style={inputStyle} />}
          <input placeholder="Password" type="password" style={inputStyle} />
          <button
            className="pill-btn"
            type="button"
            style={{ justifyContent: "center", padding: "15px 0", borderRadius: 12, marginTop: 4 }}
          >
            <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif' }}>
              {isSignup ? "Create account" : "Sign in"}
            </span>
          </button>
        </div>

        {!isSignup && (
          <p style={{ margin: "16px 0 0", font: '400 13px/1.5 var(--font-inter-tight), sans-serif' }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)" }}>Forgot password?</a>
          </p>
        )}

        <p
          style={{
            margin: "22px 0 0",
            font: '400 14px/1.5 var(--font-inter-tight), sans-serif',
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {isSignup ? "Already have an account? " : "New here? "}
          <button
            type="button"
            onClick={() => setMode(isSignup ? "signin" : "signup")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "#f0b429",
              font: '600 14px/1.5 var(--font-inter-tight), sans-serif',
            }}
          >
            {isSignup ? "Sign in" : "Create an account"}
          </button>
        </p>
      </div>
    </div>
  );
}
