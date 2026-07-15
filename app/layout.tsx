import type { Metadata } from "next";
import { Bebas_Neue, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppSplash from "@/components/AppSplash";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club500 — Earn as you grow your club",
  description:
    "500 community football clubs. 47 counties. One national movement — an Ubuntu Initiative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${interTight.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <AppSplash />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
