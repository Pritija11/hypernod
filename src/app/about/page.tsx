import type { Metadata } from "next";
import {
  Globe2,
  HeartHandshake,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHeader from "@/components/sections/PageHeader";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { OG_IMAGES, SITE, TWITTER_IMAGES } from "@/lib/constants";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "HyperNod is a technology startup based in Kathmandu, Nepal, building cloud infrastructure and digital platforms for businesses in Nepal and abroad.",
  keywords: [
    "HyperNod",
    "technology startup Nepal",
    "cloud company Kathmandu",
    "Nepali tech startup",
    "about HyperNod",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    title: "About — HyperNod",
    description:
      "A technology startup based in Kathmandu, Nepal, building cloud infrastructure and digital platforms for growing businesses.",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "About — HyperNod",
    description:
      "A technology startup based in Kathmandu, Nepal, building cloud infrastructure and digital platforms for growing businesses.",
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
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability first",
    text: "Infrastructure decisions are made for stability, not for what looks impressive on a slide. Uptime and data safety come before anything else.",
  },
  {
    icon: Sparkles,
    title: "No unnecessary complexity",
    text: "We size infrastructure and software to what a business actually needs today and can grow into, not to what sounds most advanced.",
  },
  {
    icon: Target,
    title: "Built for the business, not a template",
    text: "Every setup starts from how a specific team actually works, rather than a one-size-fits-all package sold the same way to everyone.",
  },
  {
    icon: HeartHandshake,
    title: "In it for the long run",
    text: "We think of client relationships in years, not single projects, which is why most of our work continues well past the initial launch.",
  },
];

const stats = [
  { icon: MapPin, value: "Kathmandu", label: "Headquartered in Nepal" },
  { icon: Layers, value: String(solutions.length), label: "Core solution areas" },
  { icon: ShieldCheck, value: String(services.length), label: "Hands-on services" },
  { icon: Globe2, value: "Nepal + Global", label: "Where we work" },
];

const faqItems = [
  {
    question: "Is HyperNod a Nepali company?",
    answer:
      "Yes. HyperNod is a technology startup founded and based in Kathmandu, Nepal, building cloud infrastructure, digital platforms, and technology solutions for businesses.",
  },
  {
    question: "Where is HyperNod based?",
    answer:
      "HyperNod is based in Kathmandu, Nepal. Our team works directly with clients both inside Nepal and internationally, with most communication and project work happening remotely.",
  },
  {
    question: "Do you only work with businesses in Nepal?",
    answer:
      "No. While HyperNod is proudly based in Nepal, we work with businesses outside the country as well. Cloud infrastructure, digital platforms, and technology solutions are delivered the same way regardless of location.",
  },
  {
    question: "What kind of businesses does HyperNod work with?",
    answer:
      "Mostly startups, small and medium businesses, and development teams that need dependable infrastructure or a digital platform but don't have the resources for a full in-house technical team.",
  },
  {
    question: "How can I get in touch with the HyperNod team?",
    answer:
      "The fastest way is through the contact section below, or by emailing us directly. We respond personally — there is no ticketing system or account manager between you and the people doing the work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="About"
          breadcrumbLabel="About"
          title="A technology startup building cloud infrastructure from Kathmandu, Nepal"
          description="HyperNod is a technology startup focused on cloud infrastructure, digital platforms, and technology solutions for businesses that are ready to build, launch, and scale. We're based in Kathmandu, Nepal, and work with clients both in Nepal and internationally who want a technical partner rather than just a vendor."
        />

        <section className="section">
          <div className="container">
            <div className="section-header left">
              <span className="section-label">Our story</span>

              <h2 className="section-title">
                Why we started HyperNod
              </h2>
            </div>

            <p className="prose">
              HyperNod started from a simple observation: businesses in Nepal
              building something real — a product, a platform, an online
              business — were often stuck choosing between generic hosting
              providers with no hands-on support, or international vendors
              with no local context and pricing that didn&apos;t make sense
              for a growing team. There wasn&apos;t a clear option built
              specifically around how Nepali startups and SMEs actually
              operate.
            </p>

            <p className="prose">
              We built HyperNod to be that option: a technology startup that
              treats cloud infrastructure, digital platforms, and technology
              solutions as connected parts of the same job, delivered by a
              team that is reachable, understands the infrastructure it
              manages, and stays involved long after the first deployment.
              What started as infrastructure work for a handful of early
              clients in Kathmandu has grown into a broader practice serving
              businesses in Nepal and abroad.
            </p>
          </div>
        </section>

        <section className="section section-teal stat-band">
          <div className="container">
            <div className="stat-grid">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <ScrollReveal
                    key={stat.label}
                    delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                  >
                    <div className="stat-item">
                      <div className="stat-icon">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <p className="stat-number">{stat.value}</p>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-header left">
              <span className="section-label">What we believe</span>

              <h2 className="section-title">
                A few principles that don&apos;t change from client to client
              </h2>
            </div>

            <div className="value-grid">
              {values.map((value, i) => {
                const Icon = value.icon;

                return (
                  <ScrollReveal
                    key={value.title}
                    delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                  >
                    <div className="value-item">
                      <div className="value-icon">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-split">
              <ScrollReveal direction="left">
                <div className="section-header left">
                  <div className="split-icon">
                    <MapPin size={20} strokeWidth={1.7} />
                  </div>

                  <span className="section-label">Where we work</span>

                  <h2 className="section-title">
                    Based in Kathmandu, working across Nepal and beyond
                  </h2>

                  <p className="section-description">
                    HyperNod is headquartered in {SITE.location}, where our
                    team designs, builds, and manages infrastructure day to
                    day. As part of Nepal&apos;s growing technology and
                    startup community, we work closely with local founders —
                    but our infrastructure and platform work isn&apos;t
                    limited by geography, and a meaningful share of our
                    clients are based outside Nepal.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <div className="section-header left">
                  <div className="split-icon">
                    <Users size={20} strokeWidth={1.7} />
                  </div>

                  <span className="section-label">Who we work with</span>

                  <h2 className="section-title">
                    Startups, growing teams, and development partners
                  </h2>

                  <p className="section-description">
                    Our clients range from early-stage startups launching
                    their first product, to established small and medium
                    businesses moving onto more reliable infrastructure, to
                    development teams that need a dependable infrastructure
                    partner so they can stay focused on their own product.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions about HyperNod"
          items={faqItems}
        />

        <CTA secondaryHref="/solutions" secondaryLabel="Explore our solutions" />
      </main>

      <Footer />
    </>
  );
}
