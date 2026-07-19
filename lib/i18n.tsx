"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "sw";

const DICT: Record<string, { en: string; sw: string }> = {
  // nav
  "nav.home": { en: "Home", sw: "Nyumbani" },
  "nav.clubs": { en: "Clubs", sw: "Klabu" },
  "nav.fanzone": { en: "Fan Zone", sw: "Kona ya Mashabiki" },
  "nav.volunteer": { en: "Volunteer", sw: "Kujitolea" },
  "nav.partners": { en: "Partners", sw: "Washirika" },
  "nav.events": { en: "Events", sw: "Matukio" },
  "nav.about": { en: "About", sw: "Kuhusu" },
  "nav.stories": { en: "Stories", sw: "Habari" },
  "nav.newsroom": { en: "Newsroom", sw: "Chumba cha Habari" },
  "nav.podcast": { en: "Podcast", sw: "Podikasti" },
  "nav.signin": { en: "Sign in", sw: "Ingia" },
  // hero
  "hero.sub": {
    en: "500 community football clubs. 47 counties. One national platform giving Kenyan football the structure it deserves.",
    sw: "Klabu 500 za soka za mashinani. Kaunti 47. Jukwaa moja la kitaifa linaloipa soka ya Kenya muundo inaostahili.",
  },
  "hero.runclub": { en: "I run a club", sw: "Ninaongoza klabu" },
  "hero.fan": { en: "I'm a fan", sw: "Mimi ni shabiki" },
  "hero.partner": { en: "I want to partner", sw: "Nataka ushirikiano" },
  "hero.volunteer": { en: "I want to volunteer", sw: "Nataka kujitolea" },
  // fixtures strip
  "fixtures.title": { en: "This weekend", sw: "Wikendi hii" },
  "fixtures.cta": { en: "Play predictions", sw: "Cheza ubashiri" },
  // impact
  "pulse.h": { en: "Already on the ground in 10 counties", sw: "Tayari tuko mashinani katika kaunti 10" },
  "pulse.sub": {
    en: "33 community clubs and counting. Yours could be next.",
    sw: "Klabu 33 za jamii na zinaongezeka. Yako inaweza kuwa ifuatayo.",
  },
  "pulse.latest": { en: "Latest to join: Kajiado Youth FC, Kajiado", sw: "Mpya zaidi kujiunga: Kajiado Youth FC, Kajiado" },
  "pulse.cta": { en: "See the full map →", sw: "Tazama ramani kamili →" },
  "impact.clubs": { en: "Community clubs", sw: "Klabu za jamii" },
  "impact.counties": { en: "Counties", sw: "Kaunti" },
  "impact.regions": { en: "Regions", sw: "Mikoa" },
  "impact.jobs": { en: "Jobs targeted", sw: "Ajira zinazolengwa" },
  "impact.latest": {
    en: "Latest club to join: Kajiado Youth FC, Kajiado. New clubs join every month.",
    sw: "Klabu mpya zaidi kujiunga: Kajiado Youth FC, Kajiado. Klabu mpya hujiunga kila mwezi.",
  },
  // about snapshot
  "snapshot.body": {
    en: "Club500 connects grassroots football clubs across Kenya's 47 counties with the governance, funding, media and fan support they need to grow. Local passion, turned into lasting community impact.",
    sw: "Club500 inaunganisha klabu za soka za mashinani katika kaunti zote 47 za Kenya na utawala, ufadhili, vyombo vya habari na uungwaji mkono wa mashabiki zinaohitaji kukua. Shauku ya mtaa, inageuzwa kuwa matokeo ya kudumu kwa jamii.",
  },
  "snapshot.read": { en: "Read our full story →", sw: "Soma hadithi yetu kamili →" },
  // featured clubs
  "featured.lead": { en: "Meet the clubs already building the movement.", sw: "Kutana na klabu ambazo tayari zinajenga harakati." },
  "featured.title1": { en: "Featured", sw: "Klabu" },
  "featured.title2": { en: "clubs", sw: "teule" },
  "featured.all": { en: "All clubs →", sw: "Klabu zote →" },
  // fan zone steps
  "fz.eyebrow": { en: "The Fan Zone · Karibu", sw: "Kona ya Mashabiki · Karibu" },
  "fz.title1": { en: "Belong first.", sw: "Kuwa sehemu kwanza." },
  "fz.title2": { en: "Earn", sw: "Pata" },
  "fz.title3": { en: "along the way.", sw: "ukiendelea." },
  "fz.open": { en: "Open the Fan Zone", sw: "Fungua Kona ya Mashabiki" },
  "fz.s1t": { en: "Join your club", sw: "Jiunge na klabu yako" },
  "fz.s1d": { en: "It takes a minute.", sw: "Inachukua dakika moja tu." },
  "fz.s2t": { en: "Follow along", sw: "Fuatilia" },
  "fz.s2d": { en: "Match updates, stories, behind the scenes.", sw: "Habari za mechi, hadithi, nyuma ya pazia." },
  "fz.s3t": { en: "Share your link", sw: "Sambaza kiungo chako" },
  "fz.s3d": { en: "Earn when friends join too.", sw: "Pata pesa marafiki wakijiunga pia." },
  // footer
  "footer.explore": { en: "Explore", sw: "Chunguza" },
  "footer.stories": { en: "Stories", sw: "Habari" },
  "footer.getinvolved": { en: "Get involved", sw: "Shiriki" },
  "footer.register": { en: "Register your club", sw: "Sajili klabu yako" },
  "footer.journalists": { en: "Journalists", sw: "Wanahabari" },
  "footer.blurb": { en: "Building the future of community football in Kenya.", sw: "Tunajenga mustakabali wa soka ya jamii nchini Kenya." },
  "footer.subscribe": { en: "Subscribe for updates", sw: "Jisajili upate habari" },
  "footer.rights": { en: "All rights Reserved CLUB500 2026", sw: "Haki zote zimehifadhiwa CLUB500 2026" },
  "footer.language": { en: "Language", sw: "Lugha" },
  // newsletter
  "nl.placeholder": { en: "Your email address", sw: "Barua pepe yako" },
  "nl.button": { en: "Subscribe", sw: "Jisajili" },
  "nl.done": { en: "You're subscribed. Karibu to the movement!", sw: "Umejisajili. Karibu kwenye harakati!" },
  "nl.error": { en: "Enter a valid email address", sw: "Weka barua pepe sahihi" },
  // cookie
  "cookie.title": { en: "We use cookies", sw: "Tunatumia vidakuzi" },
  "cookie.body": {
    en: "Club500 uses cookies to keep you signed in, remember your club and understand how fans use the platform, so we can make it better.",
    sw: "Club500 hutumia vidakuzi kukuweka umeingia, kukumbuka klabu yako na kuelewa jinsi mashabiki wanavyotumia jukwaa, ili tuliboreshe.",
  },
  "cookie.accept": { en: "Accept cookies", sw: "Kubali vidakuzi" },
  "cookie.decline": { en: "Decline", sw: "Kataa" },
  // mobile CTA
  "cta.join": { en: "Join your club", sw: "Jiunge na klabu yako" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => DICT[k]?.en ?? k });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("c500-lang");
      if (saved === "sw") setLangState("sw");
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("c500-lang", l);
    } catch {}
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
