"use client";

export default function ShareButton({ title, text }: { title: string; text?: string }) {
  const share = async () => {
    const payload = { title, text: text ?? title, url: "https://club-500.vercel.app" };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
    } catch {
      return; // user cancelled
    }
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${payload.text} ${payload.url}`)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <button
      type="button"
      onClick={share}
      aria-label={`Share: ${title}`}
      title="Share"
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "1px solid rgba(var(--tx),0.2)",
        background: "transparent",
        color: "rgba(var(--tx),0.65)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    </button>
  );
}
