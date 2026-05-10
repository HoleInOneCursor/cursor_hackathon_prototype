import { PrimaryNavigation } from "./PrimaryNavigation";

type HeroSectionProps = {
  totalScore: number;
  totalPar: number;
};

export function HeroSection({ totalScore, totalPar }: HeroSectionProps) {
  const scoreToPar = totalScore - totalPar;
  const scoreToParLabel = `${scoreToPar > 0 ? "+" : ""}${scoreToPar}`;

  return (
    <section className="hero">
      <PrimaryNavigation />
      <div className="hero-content">
        <div>
          <p className="eyebrow">Fairway Log</p>
          <h1>Plan rounds, track scores, and review your golf trends.</h1>
          <p className="hero-copy">
            A simple front-end prototype for the golfing application described in
            the README. It previews the core MVP screens before a backend is
            added.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#scorecard">
              Start a round
            </a>
            <a className="button secondary" href="#courses">
              Browse courses
            </a>
          </div>
        </div>
        <aside className="round-summary" aria-label="Current round summary">
          <span>Active round</span>
          <h2>Cedar Valley</h2>
          <p>
            Through 6 holes: {totalScore} strokes, {scoreToParLabel}
          </p>
        </aside>
      </div>
    </section>
  );
}
