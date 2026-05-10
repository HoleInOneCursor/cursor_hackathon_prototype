import type { RecentRound } from "../types/golf";
import { SectionHeading } from "./SectionHeading";

type RoundHistorySectionProps = {
  rounds: RecentRound[];
};

function RoundCard({ round }: { round: RecentRound }) {
  return (
    <article className="round-card">
      <div>
        <h3>{round.course}</h3>
        <p>{round.date}</p>
      </div>
      <strong>{round.score}</strong>
      <p>
        {round.fairwaysHit} fairways, {round.greensInRegulation} GIR,{" "}
        {round.putts} putts
      </p>
    </article>
  );
}

export function RoundHistorySection({ rounds }: RoundHistorySectionProps) {
  return (
    <section className="section" id="history">
      <SectionHeading eyebrow="Round history" title="Completed rounds" />
      <div className="round-list">
        {rounds.map((round) => (
          <RoundCard round={round} key={`${round.course}-${round.date}`} />
        ))}
      </div>
    </section>
  );
}
