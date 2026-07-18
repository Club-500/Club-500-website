import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppSplash from "@/components/AppSplash";
import CookieNotice from "@/components/CookieNotice";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club500 | An Ubuntu Initiative",
  description:
    "500 community football clubs across Kenya's 47 counties, organized into 8 regions. A sustainable, investment-ready grassroots football ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("c500-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}`,
          }}
        />
        <AppSplash />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieNotice />
      </body>
    </html>
  );
}
