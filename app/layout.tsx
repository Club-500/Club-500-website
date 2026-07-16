import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppSplash from "@/components/AppSplash";

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
    <html lang="en" className={interTight.variable}>
      <body>
        <AppSplash />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
