export const CLUBS: [name: string, county: string, img: string][] = [
  ["Kivumbini United FC", "Nakuru", "/crests/kivumbini-united-fc.webp"],
  ["Webuye Sportiff FC", "Bungoma", "/crests/webuye-sportiff-fc.webp"],
  ["Kamaliza FC", "Kajiado", "/crests/kamaliza-fc.webp"],
  ["Miguta Guardians FC", "Kiambu", "/crests/miguta-guardians-fc.webp"],
  ["Kapkatet Youth FC", "Kericho", "/crests/kapkatet-youth-fc.webp"],
  ["Shimanzi FC", "Mombasa", "/crests/shimanzi-fc.webp"],
  ["Uhola FC", "Siaya", "/crests/uhola-fc.webp"],
  ["Goodhope FC", "Mombasa", "/crests/goodhope-fc.webp"],
  ["Matobo Central FC", "Kericho", "/crests/matobo-central-fc.webp"],
  ["Uefa Despanol SC", "Nairobi", "/crests/uefa-despanol-sc.webp"],
  ["Kajiado Youth FC", "Kajiado", "/crests/kajiado-youth-fc.webp"],
];

/** Real, publicly-sourced facts per club — league, ground, socials, and a short bio.
    Only fields we could verify are included; nothing here is invented. */
export type ClubDetail = {
  league: string;
  ground?: string;
  founded?: string;
  motto?: string;
  about: string;
  facebook?: string;
  banner?: string;
};

export const CLUB_DETAILS: Record<string, ClubDetail> = {
  "Kivumbini United FC": {
    league: "FKF County League · Nakuru",
    about:
      "Kivumbini United FC is a community football club based in Nakuru, competing in the FKF county league structure alongside the region's other grassroots sides.",
    facebook: "https://www.facebook.com/p/Kivumbini-United-Fc-100077971535146/",
    banner: "/club-banners/kivumbini-united-fc.webp",
  },
  "Webuye Sportiff FC": {
    league: "FKF Division One · Zone D",
    founded: "2023",
    motto: "Sky Is The Limit",
    about:
      "Webuye Sportiff FC is based in Webuye, Bungoma County, competing in the FKF Division One League, Zone D. Established in 2023 under the motto \"Sky Is The Limit,\" the club is a major grassroots talent incubator in Western Kenya, hosting scouting missions and working with initiatives like the Joseph Waswa (JW) Foundation to help players progress into the Kenyan Premier League and National Super League.",
    facebook: "https://www.facebook.com/p/Webuye-Sportiff-FC-100091248484146/",
    banner: "/club-banners/webuye-sportiff-fc.webp",
  },
  "Kamaliza FC": {
    league: "FKF League",
    about: "Kamaliza FC is a community football club based in Kajiado County, competing in the FKF league structure.",
    facebook: "https://www.facebook.com/kamalizajd/",
    banner: "/club-banners/kamaliza-fc.webp",
  },
  "Miguta Guardians FC": {
    league: "FKF Githunguri Sub-County League",
    ground: "Miguta Primary School",
    about:
      "Miguta Guardians FC is a community football club based in the Miguta/Githunguri area of Kiambu County, regularly competing in the FKF Githunguri Sub-County League with home and away fixtures at venues including Miguta Primary School.",
    facebook: "https://www.facebook.com/p/Miguta-Guardians-Fc-100064216774568/",
    banner: "/club-banners/miguta-guardians-fc.webp",
  },
  "Kapkatet Youth FC": {
    league: "FKF Division Two · Central Zone B",
    ground: "Kapkatet Ground",
    about:
      "Kapkatet Youth FC is based in Kericho County, competing in the FKF Division Two League, Central Zone B, with home matches at Kapkatet Ground. The club is a competitive regional fixture, regularly facing sides like Naivasha Syfa FC and Plantech FC.",
    facebook: "https://www.fkfleagues.co.ke/team/0161/Kapkatet-Youth-FC",
    banner: "/club-banners/kapkatet-youth-fc.webp",
  },
  "Shimanzi FC": {
    league: "FKF Division Two · Northern Zone (Pool A)",
    ground: "Makande Primary School Grounds",
    motto: "One Team, One Family",
    about:
      "Shimanzi FC is based in Mombasa, competing in the FKF Division Two Northern Zone League (Pool A), with home fixtures at Makande Primary School Grounds. The club plays under the motto \"One Team, One Family.\"",
    facebook: "https://www.facebook.com/shimanzifc/",
    banner: "/club-banners/shimanzi-fc.webp",
  },
  "Uhola FC": {
    league: "FKF Siaya County Mozzart Bet League",
    ground: "Uhola Primary School",
    about:
      "Uhola FC is based in Siaya County, competing in the FKF Siaya County Mozzart Bet League with home matches at Uhola Primary School. The club regularly faces other Siaya-based sides including Kuza Talanta and Abimbo Rangers.",
    facebook: "https://www.facebook.com/groups/829332462667345/",
    banner: "/club-banners/uhola-fc.webp",
  },
  "Goodhope FC": {
    league: "FKF Division Two · Northern Zone",
    about:
      "Also known as Good Hope Soccer Academy, the club is based in Mombasa and competes in the FKF Division Two Northern Zone League. Managed by head coach Linda Seda, it also takes part in regional tournaments such as the Sisi Ni Dola Super Cup, with a mission built around nurturing talent, building character, and equipping youth with life skills.",
    facebook: "https://www.facebook.com/p/Goodhope-soccer-academy-100064174953917/",
    banner: "/club-banners/goodhope-fc.webp",
  },
  "Matobo Central FC": {
    league: "FKF Lower Rift Regional League · Zone B1",
    ground: "Motobo Primary School",
    about:
      "Matobo Central FC is based in Kericho, playing home matches at Motobo Primary School in the FKF Lower Rift Regional League, Zone B1, against regional sides including Cheptalal FC, Kapkatet FC and KWS Jumbos.",
    facebook: "https://www.facebook.com/p/Matobo-Central-Football-Club-100031961486910/",
    banner: "/club-banners/matobo-central-fc.webp",
  },
  "Uefa Despanol SC": {
    league: "FKF Nairobi East Regional League · Zone A",
    about:
      "UEFA Despanol SC is an amateur football club based in Umoja 2, Nairobi, competing in the FKF Nairobi East Regional League, Zone A. The club is dedicated to nurturing local talent and youth empowerment through community engagement.",
    facebook: "https://www.facebook.com/Sc.uefadespanol/",
    banner: "/club-banners/uefa-despanol-sc.webp",
  },
  "Kajiado Youth FC": {
    league: "FKF League",
    about: "Kajiado Youth FC is a community football club based in Kajiado County, competing in the FKF league structure.",
    facebook: "https://www.facebook.com/p/KAJIADO-YOUTH-FC-100083201897528/",
    banner: "/club-banners/kajiado-youth-fc.webp",
  },
};


export const REGION_OF_COUNTY: Record<string, string> = {
  Nakuru: "Rift Valley",
  Bungoma: "Western",
  Kajiado: "Rift Valley",
  Kiambu: "Central",
  Kericho: "Rift Valley",
  Mombasa: "Coast",
  Kakamega: "Western",
  Nairobi: "Nairobi",
  Bomet: "Rift Valley",
  Kisumu: "Nyanza",
  Siaya: "Nyanza",
};


export const ALL_COUNTIES = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa",
  "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
  "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu",
  "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa",
  "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
  "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi",
  "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot",
];

export const LIVE_COUNTIES = new Set([
  "Nakuru", "Bungoma", "Kajiado", "Kiambu", "Kericho", "Mombasa", "Siaya", "Nairobi",
]);



export function clubSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Short name as used in fixtures/results/standings (no FC/SC suffix). */
export function clubShort(name: string): string {
  return name.replace(/\s+(FC|SC)$/i, "").trim();
}
