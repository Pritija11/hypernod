import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions } from "@/data/solutions";

export default function Solutions() {
  return (
    <section id="solutions" className="section section-blue">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">What we build</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-xl">
            Technology designed
            <br />
            to move businesses forward.
          </h2>
        </ScrollReveal>

        <div className="solutions-grid">
          {solutions.map((solution, i) => (
            <ScrollReveal key={solution.slug} delay={((i + 1) as 1 | 2 | 3)}>
              <article className="solutions-card">
                <p className="eyebrow">{solution.index}</p>
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={4}>
          <Link href="/solutions" className="solutions-link">
            View all solutions in detail
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
