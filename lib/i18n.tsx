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
  // audience intros
  "aud.fan.h": { en: "Football needs more than players. It needs people like you.", sw: "Soka inahitaji zaidi ya wachezaji. Inahitaji watu kama wewe." },
  "aud.fan.b": {
    en: "Every great football club starts with a community that believes in it. Club500 gives you a simple way to support your local club, follow its journey, celebrate its progress, and become part of something bigger than match day. Your support helps clubs grow stronger, create more opportunities for young players, and build a lasting impact in their communities.",
    sw: "Kila klabu bora ya soka huanza na jamii inayoiamini. Club500 inakupa njia rahisi ya kuunga mkono klabu yako ya karibu, kufuatilia safari yake, kusherehekea maendeleo yake, na kuwa sehemu ya kitu kikubwa zaidi ya siku ya mechi. Msaada wako husaidia klabu kukua, kuunda fursa zaidi kwa wachezaji vijana, na kujenga matokeo ya kudumu katika jamii zao.",
  },
  "aud.fan.cta": { en: "Join as a Fan", sw: "Jiunge kama Shabiki" },
  "aud.club.h": { en: "Your club deserves more than just surviving.", sw: "Klabu yako inastahili zaidi ya kuishi tu." },
  "aud.club.b": {
    en: "Running a community football club takes passion, but passion alone isn't enough. Club500 helps clubs become stronger, more sustainable institutions through better governance, increased visibility, fan support, funding opportunities, technology, and access to a growing network of professionals and partners. We help you spend less time struggling and more time building a club your community can be proud of.",
    sw: "Kuendesha klabu ya soka ya jamii kunahitaji shauku, lakini shauku pekee haitoshi. Club500 husaidia klabu kuwa taasisi imara na endelevu zaidi kupitia utawala bora, mwonekano ulioongezeka, uungwaji mkono wa mashabiki, fursa za ufadhili, teknolojia, na upatikanaji wa mtandao unaokua wa wataalamu na washirika.",
  },
  "aud.club.cta": { en: "Register Your Club", sw: "Sajili Klabu Yako" },
  "aud.partner.h": { en: "Invest in the future of community football.", sw: "Wekeza katika mustakabali wa soka ya jamii." },
  "aud.partner.b": {
    en: "Club500 connects partners with a growing network of ambitious community football clubs across Kenya. Whether you're looking to create social impact, support youth development, strengthen your brand, or reach passionate local communities, we make meaningful partnerships possible. Together, we can build stronger clubs and stronger communities.",
    sw: "Club500 huunganisha washirika na mtandao unaokua wa klabu za soka za jamii zenye malengo makubwa kote Kenya. Iwe unatafuta kuunda matokeo ya kijamii, kusaidia maendeleo ya vijana, kuimarisha chapa yako, au kufikia jamii za karibu zenye shauku, tunafanya ushirikiano wenye maana kuwezekana.",
  },
  "aud.partner.cta": { en: "Become a Partner", sw: "Kuwa Mshirika" },
  "aud.volunteer.h": { en: "Your skills can change the game.", sw: "Ujuzi wako unaweza kubadilisha mchezo." },
  "aud.volunteer.b": {
    en: "Behind every successful football club are people contributing far beyond the pitch. Whether you're a designer, marketer, developer, accountant, lawyer, coach, photographer, or simply passionate about community football, Club500 gives you an opportunity to use your expertise where it creates real impact while growing your own experience and network.",
    sw: "Nyuma ya kila klabu ya soka yenye mafanikio kuna watu wanaochangia zaidi ya uwanjani. Iwe wewe ni mbunifu, mtaalamu wa masoko, msanidi programu, mhasibu, wakili, kocha, mpiga picha, au ni mpenzi tu wa soka ya jamii, Club500 inakupa fursa ya kutumia utaalamu wako mahali panapoleta matokeo halisi.",
  },
  "aud.volunteer.cta": { en: "Offer Your Skills", sw: "Toa Ujuzi Wako" },
  // fixtures strip
  "fixtures.title": { en: "This weekend", sw: "Wikendi hii" },
  "fixtures.cta": { en: "Play predictions", sw: "Cheza ubashiri" },
  "pred.market": { en: "Matchday predictions", sw: "Ubashiri wa mechi" },
  "pred.slip": { en: "Your slip", sw: "Slipu yako" },
  "pred.locked": { en: "Slip locked · settles Sunday", sw: "Slipu imefungwa · Jumapili" },
  // impact
  "pulse.h": { en: "Already on the ground in 10 counties", sw: "Tayari tuko mashinani katika kaunti 10" },
  "pulse.sub": {
    en: "33 community clubs and counting. Yours could be next.",
    sw: "Klabu 33 za jamii na zinaongezeka. Yako inaweza kuwa ifuatayo.",
  },
  "pulse.latest": { en: "Latest to join: Kajiado Youth FC, Kajiado", sw: "Mpya zaidi kujiunga: Kajiado Youth FC, Kajiado" },
  "pulse.cta": { en: "See the full map →", sw: "Tazama ramani kamili →" },
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
  "fz.title1": { en: "Fans are the", sw: "Mashabiki ndio" },
  "fz.title2": { en: "heartbeat", sw: "moyo" },
  "fz.title3": { en: "of every club.", sw: "wa kila klabu." },
  "fz.body": {
    en: "A football club doesn't belong to eleven players — it belongs to the entire community. By becoming an official fan, you're helping your club grow, create opportunities for players, and build a stronger future for local football. Small acts of support today can shape the next generation of talent tomorrow.",
    sw: "Klabu ya soka haimilikiwi na wachezaji kumi na mmoja tu — inamilikiwa na jamii nzima. Kwa kuwa shabiki rasmi, unasaidia klabu yako kukua, kuunda fursa kwa wachezaji, na kujenga mustakabali imara wa soka ya mtaa. Msaada mdogo leo unaweza kuunda kizazi kijacho cha vipaji kesho.",
  },
  "fz.open": { en: "Open the Fan Zone", sw: "Fungua Kona ya Mashabiki" },
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
  // fan zone page
  "fzp.eyebrow": { en: "The Fan Zone", sw: "Kona ya Mashabiki" },
  "fzp.h1a": { en: "Your club. Your voice. Your", sw: "Klabu yako. Sauti yako. Zawadi" },
  "fzp.h1b": { en: "reward", sw: "yako" },
  "fzp.intro": {
    en: "Being a Club500 fan means more than following scores. It means showing up for your club, celebrating its wins, and helping it grow — match updates, stories and behind-the-scenes access, all in one place.",
    sw: "Kuwa shabiki wa Club500 ni zaidi ya kufuatilia matokeo. Ni kujitokeza kwa klabu yako, kusherehekea ushindi wake, na kusaidia ikue — habari za mechi, hadithi na mambo ya nyuma ya pazia, yote mahali pamoja.",
  },
  "fzp.results": { en: "Results", sw: "Matokeo" },
  "fzp.predict": { en: "Predict", sw: "Bashiri" },
  "fzp.vote": { en: "Vote", sw: "Piga kura" },
  "fzp.earn": { en: "Earn", sw: "Pata" },
  "fzp.lastweekend": { en: "Last weekend", sw: "Wikendi iliyopita" },
  "fzp.standings": { en: "Standings · Pilot league", sw: "Msimamo · Ligi ya majaribio" },
  "fzp.predictions": { en: "Predictions", sw: "Ubashiri" },
  "fzp.settles": { en: "Fan points only · Settles Sun 18:00", sw: "Pointi za mashabiki tu · Hufungwa Jumapili 18:00" },
  "fzp.confirm": { en: "Confirm picks", sw: "Thibitisha chaguo" },
  "fzp.locked": { en: "Picks locked. Good luck!", sw: "Chaguo zimefungwa. Kila la heri!" },
  "fzp.mvp": { en: "Matchday · Vote MVP", sw: "Siku ya mechi · Chagua MVP" },
  "fzp.leaderboard": { en: "National fan leaderboard", sw: "Orodha ya mashabiki kitaifa" },
  // clubs page
  "cl.eyebrow": { en: "New clubs join every month. 33 live today, 500 on the way.", sw: "Klabu mpya hujiunga kila mwezi. 33 ziko hewani, 500 zinakuja." },
  "cl.h1a": { en: "Find your", sw: "Tafuta" },
  "cl.h1b": { en: "club", sw: "klabu yako" },
  "cl.search": { en: "Search club or county…", sw: "Tafuta klabu au kaunti…" },
  "cl.apply": { en: "Don't see your club? Apply to join Club500", sw: "Huoni klabu yako? Omba kujiunga na Club500" },
  "cl.applynow": { en: "Apply now →", sw: "Omba sasa →" },
  "cl.clubsjoin": { en: "How clubs join", sw: "Jinsi klabu zinavyojiunga" },
  "cl.fansjoin": { en: "How fans join", sw: "Jinsi mashabiki wanavyojiunga" },
  // page heads
  "vp.eyebrow": { en: "Volunteer with Club500", sw: "Jitolee na Club500" },
  "vp.h1a": { en: "Bring your", sw: "Leta" },
  "vp.h1b": { en: "skills", sw: "ujuzi wako" },
  "vp.h1c": { en: "to the game", sw: "kwenye mchezo" },
  "pp.h1a": { en: "Back 500 clubs. Reach a", sw: "Unga mkono klabu 500. Fikia" },
  "pp.h1b": { en: "nation", sw: "taifa" },
  "ab.h1a": { en: "Why Club500", sw: "Kwa nini Club500" },
  "ab.h1b": { en: "exists", sw: "ipo" },
  "ev.h1a": { en: "Club500", sw: "Matukio ya" },
  "ev.h1b": { en: "events", sw: "Club500" },
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
