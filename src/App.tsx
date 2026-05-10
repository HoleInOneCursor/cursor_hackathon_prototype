import { CoursesSection } from "./components/CoursesSection";
import { HeroSection } from "./components/HeroSection";
import { RoundHistorySection } from "./components/RoundHistorySection";
import { ScorecardSection } from "./components/ScorecardSection";
import { courses, recentRounds, scorecard } from "./data/golfData";
import { getScorecardTotals } from "./utils/scorecard";
import { Dashboard } from "../web/src/components/dashboard/Dashboard";

export function App() {
  const { totalPar, totalScore } = getScorecardTotals(scorecard);

  return (
    <main>
      <HeroSection totalPar={totalPar} totalScore={totalScore} />
      <Dashboard />
      <CoursesSection courses={courses} />
      <ScorecardSection
        holes={scorecard}
        totalPar={totalPar}
        totalScore={totalScore}
      />
      <RoundHistorySection rounds={recentRounds} />
    </main>
  );
}
