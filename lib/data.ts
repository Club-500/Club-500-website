export const CLUBS: [name: string, county: string, img: string, site: string][] = [
  ["Kivumbini United FC", "Nakuru", "/crests/kivumbini-united-fc.webp", "https://kivumbiniunitedfootballclub.club500.africa/"],
  ["Webuye Sportiff FC", "Bungoma", "/crests/webuye-sportiff-fc.webp", "https://webuyesportifffc.club500.africa/"],
  ["Kamaliza FC", "Kajiado", "/crests/kamaliza-fc.webp", "https://kamalizafc.club500.africa/"],
  ["Miguta Guardians FC", "Kiambu", "/crests/miguta-guardians-fc.webp", "https://migutaguardiansfc.club500.africa/"],
  ["Kapkatet Youth FC", "Kericho", "/crests/kapkatet-youth-fc.webp", "https://kapkatetyouthfc.club500.africa/"],
  ["Shimanzi FC", "Mombasa", "/crests/shimanzi-fc.webp", "https://shimanzifc.club500.africa/"],
  ["Uhola FC", "Kakamega", "/crests/uhola-fc.webp", "https://uholafc.club500.africa/"],
  ["Goodhope FC", "Nairobi", "/crests/goodhope-fc.webp", "https://goodhopefootballclub.club500.africa/"],
  ["Matobo Central FC", "Bomet", "/crests/matobo-central-fc.webp", "https://matobocentralfc.club500.africa/"],
  ["Uefa Despanol SC", "Kisumu", "/crests/uefa-despanol-sc.webp", "https://uefasespanolsportsclub.club500.africa/"],
  ["Kajiado Youth FC", "Kajiado", "/crests/kajiado-youth-fc.webp", "https://kajiadoyouthfc.club500.africa/"],
];

export const EVENT_IMG =
  "/crests/event-hero.webp";
export const PODCAST_IMG =
  "/crests/podcast-hero.webp";

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
