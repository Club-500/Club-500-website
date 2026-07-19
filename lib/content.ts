/* =============================================================================
   CLUB500 EDITABLE CONTENT
   =============================================================================
   This is the one file to edit for week-to-week content updates.
   No code knowledge needed beyond keeping the quotes and commas as they are.

   - FIXTURES    -> "This weekend" strip on the homepage + Fan Zone predictions
   - RESULTS     -> "Last weekend" scores in the Fan Zone
   - STANDINGS   -> league table in the Fan Zone [club, played, won, drawn, lost, points]
   - ODDS        -> prediction multipliers per fixture [home win, draw, away win]
   - SENTIMENT   -> % of fans picking each outcome (should add up to 100)
   - BOOST_INDEX -> which fixture (0, 1 or 2...) carries the 2x points boost
   - NEWS        -> Newsroom stories [region, format, headline, byline]
   - EVENTS      -> Events page [date, city, title, description, tag]
   - PODCAST     -> Podcast episodes [number, title, guest, summary]

   After editing, redeploy the site and the new content is live.
   ========================================================================== */

export const FIXTURES: [when: string, home: string, away: string, venue: string][] = [
  ["Sat 25 Jul · 15:00", "Kivumbini United", "Kapkatet Youth", "Nakuru ASK Grounds"],
  ["Sat 25 Jul · 15:00", "Shimanzi FC", "Goodhope FC", "Tononoka Grounds, Mombasa"],
  ["Sun 26 Jul · 14:00", "Webuye Sportiff", "Uhola FC", "Webuye Stadium"],
];

export const RESULTS: [home: string, homeScore: number, away: string, awayScore: number][] = [
  ["Kivumbini United", 2, "Matobo Central", 1],
  ["Uhola FC", 0, "Shimanzi FC", 0],
  ["Goodhope FC", 1, "Kamaliza FC", 3],
];

export const STANDINGS: [club: string, p: number, w: number, d: number, l: number, pts: number][] = [
  ["Kapkatet Youth", 6, 5, 1, 0, 16],
  ["Kivumbini United", 6, 4, 1, 1, 13],
  ["Kamaliza FC", 6, 3, 2, 1, 11],
  ["Shimanzi FC", 6, 2, 2, 2, 8],
  ["Uhola FC", 6, 1, 2, 3, 5],
];

export const ODDS: [number, number, number][] = [
  [2.1, 3.25, 2.8],
  [1.95, 3.4, 3.1],
  [2.45, 3.1, 2.3],
];

export const SENTIMENT: [number, number, number][] = [
  [52, 23, 25],
  [44, 28, 28],
  [38, 30, 32],
];

export const BOOST_INDEX = 1;

export const NEWS: [region: string, format: string, headline: string, byline: string][] = [
  ["Coast", "Video", "Mombasa derby ends in stoppage-time drama", "Jane Wanjiku · Mombasa Bureau"],
  ["Nyanza", "Articles", "Kisumu county launches its first two Club500 academies", "Otieno Ouma · Kisumu Bureau"],
  ["Rift Valley", "Photo", "Matchday in Kericho: gallery from Kapkatet Youth FC", "Dennis Koech · Kericho"],
  ["Western", "Articles", "Webuye Sportiff onboard 400 new fans in one weekend", "Faith Naliaka · Bungoma"],
  ["National", "Podcast", "EP 05: What community ownership really means", "Club500 Podcast"],
  ["Nairobi", "Video", "Goodhope FC training day: inside the setup", "Peter Mwangi · Nairobi Bureau"],
];

export const EVENTS: [date: string, city: string, title: string, description: string, tag: string][] = [
  ["12 Jan", "Nairobi", "Club500 National Launch Tour: Nairobi Edition", "Official programme launch for clubs, communities, sponsors and media.", "Launch"],
  ["02 Feb", "Mombasa", "Coaching & Performance Workshop", "Coach training on new performance methodologies and sports science.", "Workshop"],
  ["15 Feb", "Kisumu", "Community Ownership Forum", "Governance, the community share ownership model and investment opportunities.", "Forum"],
];

export const PODCAST: [num: string, title: string, guest: string, summary: string][] = [
  ["Episode 01", "Why Community-Owned Clubs Are the Future", "CEO, Ubuntu Impact Labs", "How the Club500 model will structure 500 clubs and create more than 5,000 jobs."],
  ["Episode 02", "Inside the Commercial Engine of Modern Football Clubs", "Commercial Director, Club500", "Sponsoring, merchandising, ticketing, academies: how clubs will generate sustainable revenue."],
  ["Episode 03", "Youth Development: Building the Next Generation of Talent", "Head of Academies", "New academies, scouting innovations and opportunities for young players."],
  ["Episode 04", "Sports Science & Athlete Wellness in Grassroots Football", "Head of Health & Performance", "Nutrition, physiotherapy, injury prevention and mental wellness."],
];
