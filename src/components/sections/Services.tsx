import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">What we offer</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-xl">
            Services built around
            <br />
            how your business actually runs.
          </h2>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.slug}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
              >
                <article className="services-card">
                  <div className="services-card-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={3}>
          <Link href="/services" className="services-link">
            View all services in detail
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
