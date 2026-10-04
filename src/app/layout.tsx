
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hypernod.cloud"),

  title: {
    default: "HyperNod — Infrastructure for What's Next",
    template: "%s — HyperNod",
  },

  description:
    "HyperNod is a technology startup building modern cloud infrastructure, digital infrastructure, and technology solutions for businesses.",

  keywords: [
    "HyperNod",
    "HyperNod cloud",
    "cloud infrastructure",
    "cloud technology",
    "digital infrastructure",
    "technology startup",
    "cloud solutions",
    "business technology",
    "digital solutions",
  ],

  applicationName: "HyperNod",

  authors: [
    {
      name: "HyperNod",
      url: "https://hypernod.cloud",
    },
  ],

  creator: "HyperNod",
  publisher: "HyperNod",

  category: "Technology",

  alternates: {
    canonical: "https://hypernod.cloud",
  },

  openGraph: {
    type: "website",
    url: "https://hypernod.cloud",
    siteName: "HyperNod",
    title: "HyperNod — Infrastructure for What's Next",
    description:
      "HyperNod is a technology startup building modern cloud infrastructure and digital solutions for businesses.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "HyperNod — Infrastructure for What's Next",
    description:
      "HyperNod is a technology startup building modern cloud infrastructure and digital solutions for businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HyperNod",
  url: "https://hypernod.cloud",
  description:
    "HyperNod is a technology startup building modern cloud infrastructure and digital solutions for businesses.",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sundhara",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  email: "hello@hypernod.cloud",
  telephone: "+977 01-4258697",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HyperNod",
  url: "https://hypernod.cloud",
  description:
    "HyperNod — Infrastructure for What's Next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable}`}
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
