"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function MobileCTA() {
  const { t } = useLang();
  return (
    <Link href="/clubs" className="mobile-cta">
      <span>{t("cta.join")}</span>
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M5 13L13 5M13 5H6M13 5V12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
