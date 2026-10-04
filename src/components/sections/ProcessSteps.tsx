import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by learning how the business actually runs today — the systems in place, the constraints, and what growth is expected to look like over the next year.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan the infrastructure or platform around that reality, choosing an architecture that fits the team's size and budget without overbuilding.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We set up, configure, and launch the infrastructure or platform, testing against real usage before it goes live for customers or staff.",
  },
  {
    number: "04",
    title: "Support & Improve",
    description:
      "We stay involved after launch — monitoring, maintaining, and adjusting the setup as the business and its technical needs change.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section section-blue">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">How we work</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-lg">
            A straightforward process, from first conversation to ongoing
            support.
          </h2>
        </ScrollReveal>

        <div className="process-grid">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
            >
              <div className="process-step">
                <p className="process-step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
