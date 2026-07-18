export const CLUBS: [name: string, county: string, img: string, site: string][] = [
  ["Kivumbini United FC", "Nakuru", "https://club500.africa/img/cms/Clubs%20500%20logo/KIVUMBINI%20UNITED%20FOOTBALL%2020230403_204144%20-%20Creespine%20Musu.jpg", "https://kivumbiniunitedfootballclub.club500.africa/"],
  ["Webuye Sportiff FC", "Bungoma", "https://club500.africa/img/cms/Clubs%20500%20logo/WebuyeSportiffFC.jpg", "https://webuyesportifffc.club500.africa/"],
  ["Kamaliza FC", "Kajiado", "https://club500.africa/img/cms/Clubs%20500%20logo/308109549_465869512245827_140712839945695993_n.jpg", "https://kamalizafc.club500.africa/"],
  ["Miguta Guardians FC", "Kiambu", "https://club500.africa/img/cms/Clubs%20500%20logo/1773735072040%20-%20Grace%20Jigwiz.jpg", "https://migutaguardiansfc.club500.africa/"],
  ["Kapkatet Youth FC", "Kericho", "https://club500.africa/img/cms/Clubs%20500%20logo/Kapkatet%20Youth%20Club%20logo%20-%20Dennis%20Koech.jpg", "https://kapkatetyouthfc.club500.africa/"],
  ["Shimanzi FC", "Mombasa", "https://club500.africa/img/cms/Clubs%20500%20logo/shimanzi%20fc%20LOGO%20FINAL%20COPY%202024%20-%20Shimanzi%20fc.png", "https://shimanzifc.club500.africa/"],
  ["Uhola FC", "Kakamega", "https://club500.africa/img/cms/Clubs%20500%20logo/UHOLA%20FC.png", "https://uholafc.club500.africa/"],
  ["Goodhope FC", "Nairobi", "https://club500.africa/img/cms/Clubs%20500%20logo/646386468_1327394636076356_3545838292561900019_n-removebg-preview.png", "https://goodhopefootballclub.club500.africa/"],
  ["Matobo Central FC", "Bomet", "https://club500.africa/img/cms/Clubs%20500%20logo/Gemini_Generated_Image_4vlvlb4vlvlb4vlv-removebg-preview.png", "https://matobocentralfc.club500.africa/"],
  ["Uefa Despanol SC", "Kisumu", "https://club500.africa/img/cms/Clubs%20500%20logo/WhatsApp_Image_2023-07-05_at_09-55-40-removebg-preview%20-%20Derrick%20Ochieng.png", "https://uefasespanolsportsclub.club500.africa/"],
  ["Kajiado Youth FC", "Kajiado", "https://club500.africa/img/cms/Kajido/Gemini_Generated_Image_7hjfbm7hjfbm7hjf-removebg-preview.png", "https://kajiadoyouthfc.club500.africa/"],
];

export const EVENT_IMG =
  "https://club500.africa/img/cms/Capture%20d%E2%80%99%C3%A9cran%202025-11-27%20151212_1.png";
export const PODCAST_IMG =
  "https://club500.africa/img/cms/Capture%20d%E2%80%99%C3%A9cran%202025-11-27%20151229_1.png";

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
};

export const FIXTURES: [when: string, home: string, away: string, venue: string][] = [
  ["Sat 25 Jul · 15:00", "Kivumbini United", "Kapkatet Youth", "Nakuru ASK Grounds"],
  ["Sat 25 Jul · 15:00", "Shimanzi FC", "Goodhope FC", "Tononoka Grounds, Mombasa"],
  ["Sun 26 Jul · 14:00", "Webuye Sportiff", "Uhola FC", "Webuye Stadium"],
];

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
  "Nakuru", "Bungoma", "Kajiado", "Kiambu", "Kericho", "Mombasa", "Kakamega",
  "Nairobi", "Bomet", "Kisumu",
]);
