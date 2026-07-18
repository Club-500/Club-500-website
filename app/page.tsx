import Hero from "@/components/home/Hero";
import FixturesStrip from "@/components/home/FixturesStrip";
import ImpactStrip from "@/components/home/ImpactStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import FeaturedClubs from "@/components/home/FeaturedClubs";
import FanZoneSteps from "@/components/home/FanZoneSteps";
import TeaserRow from "@/components/home/TeaserRow";
import StoriesTeaser from "@/components/home/StoriesTeaser";
import RevealInit from "@/components/RevealInit";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Hero />
      <FixturesStrip />
      <ImpactStrip />
      <AboutSnapshot />
      <FeaturedClubs />
      <FanZoneSteps />
      <TeaserRow />
      <StoriesTeaser />
      <MobileCTA />
    </>
  );
}
