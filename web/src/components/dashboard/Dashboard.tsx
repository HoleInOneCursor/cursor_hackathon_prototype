import { DashboardSection } from "../../../../src/components/DashboardSection";
import { DemoFeedbackBanner } from "./DemoFeedbackBanner";
import { DemoGreptileNits } from "./DemoGreptileNits";
import { DemoLowConfidencePanel } from "./DemoLowConfidencePanel";

export function Dashboard() {
  return (
    <>
      <DashboardSection />
      <DemoLowConfidencePanel subtitleHtml="<strong>Static demo subtitle</strong> rendered through raw HTML for review tooling." />
      <DemoFeedbackBanner />
      <DemoGreptileNits />
    </>
  );
}
