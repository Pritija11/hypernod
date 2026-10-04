import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import SolutionDetail from "@/components/sections/SolutionDetail";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { solutions } from "@/data/solutions";
import { OG_IMAGES, SITE, TWITTER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Cloud infrastructure, digital platforms, and technology solutions from HyperNod, a technology startup based in Kathmandu, Nepal. Built for businesses that are ready to build, launch, and scale.",
  keywords: [
    "HyperNod solutions",
    "cloud infrastructure Nepal",
    "digital platforms Nepal",
    "technology solutions Nepal",
    "cloud hosting Kathmandu",
    "technology startup Nepal",
    "business technology solutions",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/solutions`,
    siteName: SITE.name,
    title: "Solutions — HyperNod",
    description:
      "Cloud infrastructure, digital platforms, and technology solutions built for businesses ready to build, launch, and scale.",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions — HyperNod",
    description:
      "Cloud infrastructure, digital platforms, and technology solutions built for businesses ready to build, launch, and scale.",
    images: TWITTER_IMAGES,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: `${SITE.url}/solutions`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: solutions.map((solution, i) => ({
    "@type": "Service",
    position: i + 1,
    name: solution.title,
    description: solution.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "Nepal",
  })),
};

const faqItems = [
  {
    question: "What cloud and technology solutions does HyperNod provide?",
    answer:
      "HyperNod provides three connected areas of work: cloud infrastructure (compute, hosting, storage, and networking), digital platforms (websites, portals, and internal tools), and technology solutions (systems integration, automation, and custom software). Most clients start with one area and expand into the others as their needs grow.",
  },
  {
    question: "Does HyperNod work with startups and small businesses in Nepal?",
    answer:
      "Yes. HyperNod is a technology startup based in Kathmandu, Nepal, and much of our work is with Nepali startups, SMEs, and development teams that need dependable infrastructure and digital platforms without the overhead of hiring a full internal technical team.",
  },
  {
    question: "Can HyperNod support businesses and teams outside Nepal?",
    answer:
      "Yes. While HyperNod is built and based in Nepal, our infrastructure and platform work is not limited geographically. We support businesses outside Nepal that want a dedicated technical partner for cloud infrastructure, digital platforms, or technology solutions.",
  },
  {
    question: "How is HyperNod different from a typical hosting provider?",
    answer:
      "A hosting provider generally sells you a server and leaves the rest to you. HyperNod sets up the infrastructure around your specific application, stays involved after launch, and can also build the digital platform and technology integrations that sit on top of that infrastructure — so you are working with one team instead of coordinating several.",
  },
  {
    question: "How do I get started with a HyperNod solution?",
    answer:
      "Reach out through the contact section below with a short description of what you are building or the infrastructure you currently have. We will follow up to understand your setup and recommend which of our solutions — cloud infrastructure, digital platforms, or technology solutions — fits best.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Solutions"
          breadcrumbLabel="Solutions"
          title="Cloud infrastructure, digital platforms, and technology solutions for growing businesses"
          description="HyperNod is a technology startup based in Kathmandu, Nepal, building the infrastructure and digital platforms that businesses rely on every day. Our work falls into three connected solutions: cloud infrastructure that keeps applications running, digital platforms that businesses use to reach customers, and technology solutions that tie systems together as a company grows. Below, each solution is explained in detail, including who it is built for and what is included."
        />

        {solutions.map((solution, i) => (
          <SolutionDetail
            key={solution.slug}
            solution={solution}
            tone={i % 2 === 0 ? "default" : "soft"}
          />
        ))}

        <ProcessSteps />

        <FAQSection
          title="Common questions about HyperNod's solutions"
          items={faqItems}
        />

        <CTA
          secondaryHref="/services"
          secondaryLabel="Explore our services"
        />
      </main>

      <Footer />
    </>
  );
}
