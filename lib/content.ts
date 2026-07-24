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

// Countdown target for the next flagship event (ISO date with EAT offset)
export const LAUNCH = {
  date: "2026-09-12T15:00:00+03:00",
  label: "FKF Division One League begins",
};

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



