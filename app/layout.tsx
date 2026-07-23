import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppSplash from "@/components/AppSplash";
import CookieNotice from "@/components/CookieNotice";
import InstallPrompt from "@/components/InstallPrompt";
import { LanguageProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";
import { CLUBS, clubSlug } from "@/lib/data";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://club-500.vercel.app"),
  title: "Club500 | Grassroots to Greatness",
  description:
    "500 community football clubs across Kenya's 47 counties, organized into 8 regions. A sustainable, investment-ready grassroots football ecosystem.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Club500 | Grassroots to Greatness",
    description:
      "500 community football clubs. 47 counties. One national platform giving Kenyan football the structure it deserves.",
    url: "https://club-500.vercel.app",
    siteName: "Club500",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Club500. Grassroots to Greatness." }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club500 | Grassroots to Greatness",
    description: "500 community football clubs. 47 counties. One national platform.",
    images: ["/og.png"],
  },
  appleWebApp: { capable: true, title: "Club500", statusBarStyle: "black-translucent" },
};

export const viewport = {
  themeColor: "#1D3FA1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/assets/hero-acac.webp" fetchPriority="high" />
        {CLUBS.slice(0, 5).map(([name]) => (
          <link
            key={name}
            rel="preload"
            as="image"
            href={`/crests/${clubSlug(name)}.webp`}
            fetchPriority="high"
          />
        ))}
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("c500-theme")==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").catch(function(){})})}`,
          }}
        />
        <LanguageProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <AppSplash />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <CookieNotice />
          <InstallPrompt />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
