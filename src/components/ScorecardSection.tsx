import type { ScorecardHole } from "../types/golf";

type ScorecardSectionProps = {
  holes: ScorecardHole[];
  totalPar: number;
  totalScore: number;
};

function ScorecardRow({ hole }: { hole: ScorecardHole }) {
  return (
    <div className="scorecard-row">
      <span>{hole.number}</span>
      <span>{hole.par}</span>
      <strong>{hole.strokes}</strong>
    </div>
  );
}

export function ScorecardSection({
  holes,
  totalPar,
  totalScore,
}: ScorecardSectionProps) {
  return (
    <section className="section split" id="scorecard">
      <div>
        <p className="eyebrow">Scorecard</p>
        <h2>Quick entry for an active round</h2>
        <p>
          This static scorecard models offline-friendly local form state while
          backend score persistence is still future work.
        </p>
      </div>
      <div className="scorecard">
        <div className="scorecard-header">
          <span>Hole</span>
          <span>Par</span>
          <span>Strokes</span>
        </div>
        {holes.map((hole) => (
          <ScorecardRow hole={hole} key={hole.number} />
        ))}
        <div className="scorecard-total">
          <span>Total</span>
          <span>{totalPar}</span>
          <strong>{totalScore}</strong>
        </div>
      </div>
    </section>
  );
}
