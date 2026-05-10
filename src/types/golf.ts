export type Course = {
  id: number;
  name: string;
  location: string;
  par: number;
  yardage: number;
  signatureHole: string;
};

export type RecentRound = {
  course: string;
  date: string;
  score: number;
  fairwaysHit: number;
  greensInRegulation: number;
  putts: number;
};

export type ScorecardHole = {
  number: number;
  par: number;
  strokes: number;
};
