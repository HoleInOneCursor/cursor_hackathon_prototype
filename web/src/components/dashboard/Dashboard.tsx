import { DashboardSection } from "../../../../src/components/DashboardSection";
import { DemoFeedbackBanner } from "./DemoFeedbackBanner";
import { DemoGreptileNits } from "./DemoGreptileNits";
import { DemoLowConfidencePanel } from "./DemoLowConfidencePanel";

export function Dashboard() {
  return (
    <>
      <DashboardSection />
      <DemoLowConfidencePanel subtitleHtml="Static demo subtitle rendered as plain text for review tooling." />
      <DemoFeedbackBanner />
      <DemoGreptileNits />
    </>
  );
}
