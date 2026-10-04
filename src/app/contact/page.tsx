import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { OG_IMAGES, SITE, TWITTER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HyperNod, a technology startup based in Sundhara, Kathmandu, Nepal. Reach out about cloud infrastructure, digital platforms, or technology solutions.",
  keywords: [
    "contact HyperNod",
    "HyperNod Kathmandu",
    "cloud infrastructure Nepal contact",
    "technology startup Nepal",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    title: "Contact — HyperNod",
    description:
      "Get in touch with HyperNod, a technology startup based in Sundhara, Kathmandu, Nepal.",
    locale: "en_US",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — HyperNod",
    description:
      "Get in touch with HyperNod, a technology startup based in Sundhara, Kathmandu, Nepal.",
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
      name: "Contact",
      item: `${SITE.url}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact HyperNod",
  url: `${SITE.url}/contact`,
  about: {
    "@type": "Organization",
    name: SITE.name,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sundhara",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Contact"
          breadcrumbLabel="Contact"
          title="Tell us what you're building"
          description="Whether you need cloud infrastructure, a digital platform, or a technical partner for an existing system, send us a message and we'll follow up directly — no ticketing system, no account manager in between."
        />

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Office</p>
                    <p>{SITE.address}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Phone</p>
                    <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="contact-info-label">Email</p>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
