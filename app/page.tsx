import Hero from "@/components/home/Hero";
import FixturesStrip from "@/components/home/FixturesStrip";
import ImpactStrip from "@/components/home/ImpactStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import FeaturedClubs from "@/components/home/FeaturedClubs";
import FanZoneSteps from "@/components/home/FanZoneSteps";
import RevealInit from "@/components/RevealInit";

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
    </>
  );
}
