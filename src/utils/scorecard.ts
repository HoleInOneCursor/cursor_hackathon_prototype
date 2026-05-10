import type { ScorecardHole } from "../types/golf";

export function getScorecardTotals(holes: ScorecardHole[]) {
  return holes.reduce(
    (totals, hole) => ({
      totalPar: totals.totalPar + hole.par,
      totalScore: totals.totalScore + hole.strokes,
    }),
    { totalPar: 0, totalScore: 0 },
  );
}
