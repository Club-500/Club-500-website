"use client";

import { useEffect, useState } from "react";
import FootballLoader from "./FootballLoader";

export default function AppSplash() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("c500-splash-shown")) return;
    setVisible(true);
    const fadeTimer = setTimeout(() => setFading(true), 900);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("c500-splash-shown", "1");
    }, 1250);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease" }}>
      <FootballLoader label="Kicking off" />
    </div>
  );
}
