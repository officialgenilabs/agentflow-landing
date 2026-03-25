import { ChaosToggle } from "./ChaosToggle";
import { SectionHeading } from "./SectionHeading";

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeading
            eyebrow="Operational drag"
            title="Missed follow-up and weak visibility cost more than most teams realize."
            description="AgentFlow is built for the real estate chaos that leaks revenue quietly: slow replies, messy next steps, admin clutter, and a backend that makes the business feel less organized than it actually is."
          />
          <ChaosToggle />
        </div>
      </div>
    </section>
  );
}
