import type { Metadata } from "next";
import {
  ArrowRight,
  Compass,
  Gauge,
  HeartHandshake,
  Layers,
  LifeBuoy,
  Users,
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHeader from "@/components/sections/PageHeader";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { OG_IMAGES, SITE, TWITTER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How HyperNod, a technology startup based in Kathmandu, Nepal, approaches cloud infrastructure, digital platforms, and technology solutions for growing businesses.",
  keywords: [
    "HyperNod approach",
    "technology startup Nepal",
    "cloud infrastructure methodology",
    "how HyperNod works",
  ],
  alternates: {
    canonical: "/approach",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/approach`,
    siteName: SITE.name,
    title: "Approach — HyperNod",
    description:
      "A straightforward approach to building and running cloud infrastructure and digital platforms, from a technology startup based in Nepal.",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Approach — HyperNod",
    description:
      "A straightforward approach to building and running cloud infrastructure and digital platforms, from a technology startup based in Nepal.",
    images: TWITTER_IMAGES,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Approach",
      item: `${SITE.url}/approach`,
    },
  ],
};

const principles = [
  {
    icon: Compass,
    title: "We start with your business, not a template",
    text: "Before any infrastructure is provisioned or any code is written, we look at how the business actually operates — current systems, team size, budget, and where it's trying to get to. The setup follows from that, not from a standard package.",
  },
  {
    icon: Layers,
    title: "Infrastructure decisions come before software decisions",
    text: "A well-built application on infrastructure that can't support it will eventually run into trouble. We make sure the foundation — hosting, storage, networking, security — is sound before layering platforms or custom software on top of it.",
  },
  {
    icon: Gauge,
    title: "Right-sized over over-engineered",
    text: "It's easy to recommend the most advanced architecture available. It's more useful to recommend the one that fits a team's current size and budget while leaving room to grow into something bigger when it's actually needed.",
  },
  {
    icon: Users,
    title: "Direct access to the people doing the work",
    text: "When you reach out to HyperNod, you're talking to someone who understands your infrastructure or platform directly, not a layer of account management between you and the engineers.",
  },
  {
    icon: HeartHandshake,
    title: "We stay after launch",
    text: "Most of our relationships with clients continue well past the initial build — monitoring, maintaining, and adjusting infrastructure as the business changes, rather than disappearing once the invoice is paid.",
  },
];

const diagramSteps = [
  {
    icon: Compass,
    label: "Understand the business",
  },
  {
    icon: Layers,
    label: "Infrastructure, then platform",
  },
  {
    icon: LifeBuoy,
    label: "Stay involved after launch",
  },
];

const faqItems = [
  {
    question: "Does HyperNod only handle infrastructure, or also software?",
    answer:
      "Both, and we see them as connected. Cloud infrastructure, digital platforms, and technology solutions are treated as one job rather than three separate vendors, which is part of why our approach starts with infrastructure before software decisions are made.",
  },
  {
    question: "How involved is HyperNod after a project goes live?",
    answer:
      "Ongoing involvement is the default, not an upsell. Most engagements include monitoring and maintenance after launch, and many clients continue working with us as their infrastructure or platform needs change over time.",
  },
  {
    question: "Do you follow a fixed process for every project?",
    answer:
      "The underlying principles stay the same — understand the business, get the infrastructure right, build what's actually needed, stay involved — but the specific steps depend heavily on whether we're starting from scratch or working with existing systems.",
  },
  {
    question: "How does HyperNod price its work?",
    answer:
      "Pricing depends on the scope — ongoing infrastructure management, a one-time platform build, or a mix of both. We discuss scope and pricing directly during the first conversation rather than publishing a fixed-rate card that rarely fits real projects.",
  },
  {
    question: "What makes your approach different from a typical agency?",
    answer:
      "Most agencies hand off a finished build and move to the next client. HyperNod is built around staying involved with the infrastructure and platforms we deliver, which changes how we make decisions from the very first conversation.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Approach"
          breadcrumbLabel="Approach"
          title="Simple technology, serious foundations"
          description="HyperNod's approach to cloud infrastructure, digital platforms, and technology solutions comes down to a small number of principles that don't change from project to project — whether we're setting up infrastructure for a first-time founder in Kathmandu or supporting a development team overseas. Here's how we actually work."
        />

        <section className="section section-blue approach-diagram-section">
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow">Our thinking, in short</p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="heading-sm approach-diagram-title">
                Infrastructure first, then everything else
              </h2>
            </ScrollReveal>

            <div className="approach-diagram">
              {diagramSteps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === diagramSteps.length - 1;

                return (
                  <ScrollReveal
                    key={step.label}
                    delay={(((i % 3) + 1) as 1 | 2 | 3)}
                    className="approach-diagram-row"
                  >
                    <div className="approach-diagram-step">
                      <div className="approach-diagram-icon">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>

                      <p>{step.label}</p>
                    </div>

                    {!isLast && (
                      <ArrowRight
                        className="approach-diagram-arrow"
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="principle-list">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div key={principle.title} className="principle-item">
                    <div className="principle-head">
                      <div className="principle-icon">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <h2 className="principle-title">{principle.title}</h2>
                    </div>

                    <p className="principle-text">{principle.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions about how we work"
          items={faqItems}
        />

        <CTA secondaryHref="/about" secondaryLabel="More about HyperNod" />
      </main>

      <Footer />
    </>
  );
}
