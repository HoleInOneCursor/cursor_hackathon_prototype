import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Course = {
  id: number;
  name: string;
  location: string;
  par: number;
  yardage: number;
  signatureHole: string;
};

type RecentRound = {
  course: string;
  date: string;
  score: number;
  fairwaysHit: number;
  greensInRegulation: number;
  putts: number;
};

type ScorecardHole = {
  number: number;
  par: number;
  strokes: number;
};

const courses: Course[] = [
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

const recentRounds: RecentRound[] = [
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

const scorecard: ScorecardHole[] = [
  { number: 1, par: 4, strokes: 5 },
  { number: 2, par: 5, strokes: 5 },
  { number: 3, par: 3, strokes: 3 },
  { number: 4, par: 4, strokes: 4 },
  { number: 5, par: 4, strokes: 6 },
  { number: 6, par: 3, strokes: 4 },
];

const totalScore = scorecard.reduce((sum, hole) => sum + hole.strokes, 0);
const totalPar = scorecard.reduce((sum, hole) => sum + hole.par, 0);

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <article className="stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{helper}</span>
    </article>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <nav aria-label="Primary navigation">
          <a href="#dashboard">Dashboard</a>
          <a href="#courses">Courses</a>
          <a href="#scorecard">Scorecard</a>
        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Fairway Log</p>
            <h1>Plan rounds, track scores, and review your golf trends.</h1>
            <p className="hero-copy">
              A simple front-end prototype for the golfing application described
              in the README. It previews the core MVP screens before a backend is
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
              Through 6 holes: {totalScore} strokes,{" "}
              {totalScore - totalPar > 0 ? "+" : ""}
              {totalScore - totalPar}
            </p>
          </aside>
        </div>
      </section>

      <section className="section" id="dashboard">
        <div className="section-heading">
          <p className="eyebrow">Dashboard</p>
          <h2>Recent performance at a glance</h2>
        </div>
        <div className="stats-grid">
          <StatCard label="Average score" value="81.7" helper="Last 3 rounds" />
          <StatCard label="Fairways hit" value="59%" helper="Improved by 8%" />
          <StatCard label="Greens in regulation" value="52%" helper="Stable trend" />
          <StatCard label="Putting average" value="33.0" helper="Putts per round" />
        </div>
      </section>

      <section className="section split" id="courses">
        <div>
          <p className="eyebrow">Courses</p>
          <h2>Pick a course to start planning</h2>
          <p>
            Saved and nearby courses can show par, yardage, and hole-by-hole
            details as the application grows.
          </p>
        </div>
        <div className="course-list">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
              </div>
              <dl>
                <div>
                  <dt>Par</dt>
                  <dd>{course.par}</dd>
                </div>
                <div>
                  <dt>Yards</dt>
                  <dd>{course.yardage.toLocaleString()}</dd>
                </div>
              </dl>
              <span>{course.signatureHole}</span>
            </article>
          ))}
        </div>
      </section>

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
          {scorecard.map((hole) => (
            <div className="scorecard-row" key={hole.number}>
              <span>{hole.number}</span>
              <span>{hole.par}</span>
              <strong>{hole.strokes}</strong>
            </div>
          ))}
          <div className="scorecard-total">
            <span>Total</span>
            <span>{totalPar}</span>
            <strong>{totalScore}</strong>
          </div>
        </div>
      </section>

      <section className="section" id="history">
        <div className="section-heading">
          <p className="eyebrow">Round history</p>
          <h2>Completed rounds</h2>
        </div>
        <div className="round-list">
          {recentRounds.map((round) => (
            <article className="round-card" key={`${round.course}-${round.date}`}>
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
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
