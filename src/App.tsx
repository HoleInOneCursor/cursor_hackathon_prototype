import { CoursesSection } from "./components/CoursesSection";
import { DashboardSection } from "./components/DashboardSection";
import { HeroSection } from "./components/HeroSection";
import { RoundHistorySection } from "./components/RoundHistorySection";
import { ScorecardSection } from "./components/ScorecardSection";
import { courses, recentRounds, scorecard } from "./data/golfData";
import { getScorecardTotals } from "./utils/scorecard";

export function App() {
  const { totalPar, totalScore } = getScorecardTotals(scorecard);

  return (
    <main>
      <HeroSection totalPar={totalPar} totalScore={totalScore} />
      <DashboardSection />
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
