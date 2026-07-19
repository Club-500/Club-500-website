import { ReactNode } from "react";

export default function PageHead({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div style={{ padding: "clamp(104px, 17vw, 150px) clamp(20px, 4vw, 32px) clamp(22px, 4vw, 40px)", maxWidth: 1280, margin: "0 auto" }}>
      <div className="mono-label rv" style={{ marginBottom: 18 }}>
        {eyebrow}
      </div>
      <h1 className="mega rv rv-d1" style={{ margin: 0 }}>
        {children}
      </h1>
    </div>
  );
}
