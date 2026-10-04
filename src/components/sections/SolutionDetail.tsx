import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Solution } from "@/types";

type SolutionDetailProps = {
  solution: Solution;
  tone?: "default" | "soft";
};

export default function SolutionDetail({
  solution,
  tone = "default",
}: SolutionDetailProps) {
  return (
    <section
      id={solution.slug}
      className={`section solution-block ${
        tone === "soft" ? "solution-block-soft" : ""
      }`.trim()}
    >
      <div className="container">
        <div className="solution-block-grid">
          <ScrollReveal direction="left" className="solution-block-content">
            <p className="eyebrow">{solution.index} · {solution.title}</p>

            <h2 className="heading-lg">{solution.title}</h2>

            <p className="solution-block-description">
              {solution.description}
            </p>

            <p className="solution-block-audience">{solution.audience}</p>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={100}
            className="solution-block-features"
          >
            <ul className="feature-list">
              {solution.features.map((feature) => (
                <li key={feature}>
                  <Check size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
