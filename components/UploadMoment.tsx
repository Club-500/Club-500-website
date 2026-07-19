"use client";

import { useEffect, useRef, useState } from "react";

type Moment = { img: string; caption: string; date: string };

/** Downscale to keep localStorage light. */
function shrink(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => {
      const max = 900;
      const scale = Math.min(1, max / Math.max(im.width, im.height));
      const c = document.createElement("canvas");
      c.width = Math.round(im.width * scale);
      c.height = Math.round(im.height * scale);
      c.getContext("2d")!.drawImage(im, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg", 0.82));
    };
    im.onerror = reject;
    im.src = url;
  });
}

export default function UploadMoment() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [busy, setBusy] = useState(false);
  const [moments, setMoments] = useState<Moment[]>([]);
  const [justDone, setJustDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const m = localStorage.getItem("c500-moments");
      if (m) setMoments(JSON.parse(m));
    } catch {}
  }, []);

  const onFile = async (f: File | undefined) => {
    if (!f || !f.type.startsWith("image/")) return;
    try {
      setPreview(await shrink(f));
    } catch {}
  };

  const submit = () => {
    if (!preview) return;
    setBusy(true);
    setTimeout(() => {
      const next = [{ img: preview, caption: caption.trim(), date: new Date().toISOString().slice(0, 10) }, ...moments].slice(0, 6);
      setMoments(next);
      try {
        localStorage.setItem("c500-moments", JSON.stringify(next));
      } catch {}
      setPreview(null);
      setCaption("");
      setBusy(false);
      setOpen(false);
      setJustDone(true);
      setTimeout(() => setJustDone(false), 5000);
    }, 650);
  };

  return (
    <div style={{ width: "100%" }}>
      {!open ? (
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <button
            className="pill-btn"
            type="button"
            onClick={() => setOpen(true)}
            style={{ background: "#141310", color: "#fff" }}
          >
            <span className="txt">Upload your moment</span>
            <span className="circ" style={{ background: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M9 13V4M9 4L5 8M9 4l4 4" stroke="#141310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          {justDone && (
            <span style={{ font: '700 14px/1.3 var(--font-inter-tight), sans-serif', color: "#141310" }}>
              Sent! Your moment is in review for Fan of the Week.
            </span>
          )}
        </div>
      ) : (
        <div
          style={{
            background: "rgba(10,10,10,0.1)",
            borderRadius: 16,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {preview ? (
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt="Your upload"
                style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 12 }}
              />
              <button
                type="button"
                onClick={() => setPreview(null)}
                style={{ background: "none", border: "none", cursor: "pointer", font: '600 13px/1 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.6)", padding: 0 }}
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onFile(e.dataTransfer.files?.[0]);
              }}
              style={{
                border: "2px dashed rgba(10,10,10,0.4)",
                borderRadius: 14,
                padding: "26px 16px",
                background: "transparent",
                cursor: "pointer",
                font: '600 14px/1.4 var(--font-inter-tight), sans-serif',
                color: "rgba(10,10,10,0.75)",
              }}
            >
              Tap to choose a photo, or drop one here
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => onFile(e.target.files?.[0])}
          />
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Describe the moment (optional)"
            maxLength={120}
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(10,10,10,0.25)",
              borderRadius: 12,
              color: "#141310",
              font: '500 15px/1 var(--font-inter-tight), sans-serif',
              padding: "13px 16px",
              outline: "none",
              width: "100%",
            }}
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={submit}
              disabled={!preview || busy}
              style={{
                background: preview ? "#141310" : "rgba(10,10,10,0.25)",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "12px 24px",
                font: '700 14px/1 var(--font-inter-tight), sans-serif',
                cursor: preview ? "pointer" : "default",
                opacity: busy ? 0.7 : 1,
              }}
            >
              {busy ? "Uploading…" : "Submit moment"}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setPreview(null);
              }}
              style={{ background: "none", border: "1px solid rgba(10,10,10,0.35)", borderRadius: 999, padding: "12px 20px", font: '600 14px/1 var(--font-inter-tight), sans-serif', color: "#141310", cursor: "pointer" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {moments.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <div style={{ font: '700 12px/1 var(--font-inter-tight), sans-serif', color: "rgba(10,10,10,0.6)", marginBottom: 8 }}>
            Your moments · in review
          </div>
          <div className="no-scrollbar" style={{ display: "flex", gap: 8, overflowX: "auto" }}>
            {moments.map((m, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={m.img}
                alt={m.caption || "Fan moment"}
                title={m.caption}
                style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 10, flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
