import Link from "next/link";
import { Gauge, ShieldCheck, Sparkles, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const points = [
  {
    icon: ShieldCheck,
    title: "Reliable by design",
    description:
      "Infrastructure built with redundancy and operational discipline, not left to chance.",
  },
  {
    icon: Sparkles,
    title: "Simple to work with",
    description:
      "Clear communication and practical solutions, without unnecessary complexity.",
  },
  {
    icon: Gauge,
    title: "Built to scale",
    description:
      "Systems that grow with your business, from first launch to steady growth.",
  },
  {
    icon: Users,
    title: "A team that listens",
    description:
      "We work closely with every team we build for, not at a distance.",
  },
];

export default function WhyHypernod() {
  return (
    <section id="approach" className="section section-lime">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Our approach</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-xl">
            Simple technology.
            <br />
            Serious foundations.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="why-lede">
            We believe good technology should feel clear, dependable, and
            purposeful. HyperNod focuses on building systems that are useful
            today while leaving room for tomorrow.
          </p>
        </ScrollReveal>

        <div className="why-grid">
          {points.map((point, i) => {
            const Icon = point.icon;

            return (
              <ScrollReveal
                key={point.title}
                delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              >
                <div className="why-point">
                  <div className="why-point-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={4}>
          <Link href="/approach" className="why-link">
            More on our approach
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
