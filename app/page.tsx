import Hero from "@/components/home/Hero";
import ImpactStrip from "@/components/home/ImpactStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import FeaturedClubs from "@/components/home/FeaturedClubs";
import FanZoneSteps from "@/components/home/FanZoneSteps";
import TeaserRow from "@/components/home/TeaserRow";
import StoriesTeaser from "@/components/home/StoriesTeaser";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Hero />
      <ImpactStrip />
      <AboutSnapshot />
      <FeaturedClubs />
      <FanZoneSteps />
      <TeaserRow />
      <StoriesTeaser />
    </>
  );
}
