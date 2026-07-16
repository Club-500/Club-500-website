import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Mission from "@/components/home/Mission";
import FeaturedClubs from "@/components/home/FeaturedClubs";
import EarnBanner from "@/components/home/EarnBanner";
import MediaStrip from "@/components/home/MediaStrip";
import SponsorStrip from "@/components/home/SponsorStrip";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Hero />
      <Ticker />
      <Mission />
      <FeaturedClubs />
      <EarnBanner />
      <MediaStrip />
      <SponsorStrip />
    </>
  );
}
