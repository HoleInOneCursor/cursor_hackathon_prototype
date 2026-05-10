import { DashboardSection } from "../../../../src/components/DashboardSection";
import { DemoFeedbackBanner } from "./DemoFeedbackBanner";
import { DemoGreptileNits } from "./DemoGreptileNits";

export function Dashboard() {
  return (
    <>
      <DashboardSection />
      <DemoFeedbackBanner />
      <DemoGreptileNits />
    </>
  );
}
