import { SectionHeading } from "./SectionHeading";

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
};

const dashboardStats: StatCardProps[] = [
  { label: "Average score", value: "81.7", helper: "Last 3 rounds" },
  { label: "Fairways hit", value: "59%", helper: "Improved by 8%" },
  { label: "Greens in regulation", value: "52%", helper: "Stable trend" },
  { label: "Putting average", value: "33.0", helper: "Putts per round" },
];

function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <article className="stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{helper}</span>
    </article>
  );
}

export function DashboardSection() {
  return (
    <section className="section" id="dashboard">
      <SectionHeading
        eyebrow="Dashboard"
        title="Recent performance at a glance"
      />
      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <StatCard
            helper={stat.helper}
            key={stat.label}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  );
}
