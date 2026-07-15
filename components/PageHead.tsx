import { ReactNode } from "react";

export default function PageHead({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div style={{ padding: "160px 32px 56px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="mono-label rv" style={{ marginBottom: 18 }}>
        {eyebrow}
      </div>
      <h1
        className="mega rv rv-d1"
        style={{ margin: 0, fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
      >
        {children}
      </h1>
    </div>
  );
}
