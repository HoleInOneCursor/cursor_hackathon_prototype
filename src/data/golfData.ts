import type { Course, RecentRound, ScorecardHole } from "../types/golf";

export const courses: Course[] = [
  {
    id: 1,
    name: "Cedar Valley Golf Club",
    location: "Austin, TX",
    par: 72,
    yardage: 6818,
    signatureHole: "Hole 14 - risk-reward par 5 over water",
  },
  {
    id: 2,
    name: "Lakeside Links",
    location: "Madison, WI",
    par: 70,
    yardage: 6342,
    signatureHole: "Hole 7 - island green par 3",
  },
  {
    id: 3,
    name: "Pine Ridge Municipal",
    location: "Raleigh, NC",
    par: 71,
    yardage: 6550,
    signatureHole: "Hole 18 - uphill finisher framed by pines",
  },
];

export const recentRounds: RecentRound[] = [
  {
    course: "Cedar Valley Golf Club",
    date: "May 8",
    score: 82,
    fairwaysHit: 8,
    greensInRegulation: 9,
    putts: 33,
  },
  {
    course: "Lakeside Links",
    date: "May 2",
    score: 78,
    fairwaysHit: 10,
    greensInRegulation: 11,
    putts: 31,
  },
  {
    course: "Pine Ridge Municipal",
    date: "Apr 25",
    score: 85,
    fairwaysHit: 7,
    greensInRegulation: 8,
    putts: 35,
  },
];

export const scorecard: ScorecardHole[] = [
  { number: 1, par: 4, strokes: 5 },
  { number: 2, par: 5, strokes: 5 },
  { number: 3, par: 3, strokes: 3 },
  { number: 4, par: 4, strokes: 4 },
  { number: 5, par: 4, strokes: 6 },
  { number: 6, par: 3, strokes: 4 },
];
