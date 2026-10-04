import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import ServiceDetail from "@/components/sections/ServiceDetail";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/services";
import { OG_IMAGES, SITE, TWITTER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud hosting, managed infrastructure, security, custom digital platforms, data storage, and technical support from HyperNod, a technology startup based in Kathmandu, Nepal.",
  keywords: [
    "HyperNod services",
    "cloud hosting Nepal",
    "managed infrastructure Nepal",
    "technical support Nepal",
    "custom software Nepal",
    "technology startup Nepal",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    title: "Services — HyperNod",
    description:
      "Cloud hosting, managed infrastructure, security, custom digital platforms, data storage, and technical support, delivered end to end.",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — HyperNod",
    description:
      "Cloud hosting, managed infrastructure, security, custom digital platforms, data storage, and technical support, delivered end to end.",
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
      name: "Services",
      item: `${SITE.url}/services`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, i) => ({
    "@type": "Service",
    position: i + 1,
    name: service.title,
    description: service.description,
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
    question: "What services does HyperNod offer?",
    answer:
      "HyperNod offers six core services: cloud hosting and compute, managed infrastructure, security and monitoring, custom digital platforms, storage and data systems, and technical support. Most clients combine two or three of these depending on what they already have in place.",
  },
  {
    question: "Can HyperNod manage infrastructure I already have, or only new setups?",
    answer:
      "Both. We regularly take over maintenance and monitoring for infrastructure that already exists, as well as design and build new infrastructure from scratch for businesses that are just getting started.",
  },
  {
    question: "Do you offer ongoing support after a project is delivered?",
    answer:
      "Yes. Technical support is one of our core services, not an afterthought. Once infrastructure or a platform is live, we remain available for monitoring, incident response, and ongoing changes as the business grows.",
  },
  {
    question: "Is HyperNod only for businesses based in Nepal?",
    answer:
      "No. HyperNod is a technology startup based in Kathmandu, Nepal, and we serve clients both within Nepal and internationally. Our services are delivered remotely, so location is rarely a limiting factor.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "Reach out through the contact section below with a short description of your current setup and what you're trying to solve. We'll recommend the right combination of services rather than selling you more than you need.",
  },
];

export default function ServicesPage() {
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
          eyebrow="Services"
          breadcrumbLabel="Services"
          title="Practical, hands-on technology services for growing businesses"
          description="HyperNod delivers six core services that cover the full lifecycle of a business's technology — from the infrastructure underneath an application to the people who answer when something breaks. Each service below can be used on its own or combined, and all of them are delivered by the same team based in Kathmandu, Nepal."
        />

        <section className="section service-list-section">
          <div className="container">
            <div className="service-list">
              {services.map((service) => (
                <ServiceDetail key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions about HyperNod's services"
          items={faqItems}
        />

        <CTA secondaryHref="/solutions" secondaryLabel="Explore our solutions" />
      </main>

      <Footer />
    </>
  );
}
