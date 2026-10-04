import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

type CTAProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  secondaryHref = "/solutions",
  secondaryLabel = "See what we build",
}: CTAProps) {
  return (
    <section id="contact" className="section section-teal">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Start a conversation</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-xl">
            Have something
            <br />
            worth building?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="cta-description">
            Tell us what you&apos;re working on. We would love to hear about
            it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="cta-actions">
            <Button href={`mailto:${SITE.email}`} variant="primary">
              {SITE.email}
              <span aria-hidden="true">↗</span>
            </Button>

            <Button href={secondaryHref} variant="secondary" className="cta-btn-light">
              {secondaryLabel}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
