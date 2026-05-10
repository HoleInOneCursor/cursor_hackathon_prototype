import { DashboardSection } from "../../../../src/components/DashboardSection";
import { DemoGreptileNits } from "./DemoGreptileNits";
import { DemoLowConfidence } from "./DemoLowConfidence";

export function Dashboard() {
  return (
    <>
      <DashboardSection />
      <DemoGreptileNits />
      <DemoLowConfidence />
    </>
  );
}
