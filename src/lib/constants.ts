import type { NavLink } from "@/types";

export const SITE = {
  name: "HyperNod",
  tagline: "Infrastructure for what's next.",
  description:
    "HyperNod is a technology startup building modern cloud infrastructure, digital platforms, and technology solutions for businesses ready to build, launch, and scale.",
  url: "https://hypernod.cloud",
  email: "hello@hypernod.cloud",
  location: "Kathmandu, Nepal",
  address: "Sundhara, Kathmandu, Nepal",
  phone: "+977 01-4258697",
  logo: "/images/logo-mark.png",
};

export const OG_IMAGES = [`${SITE.url}/opengraph-image`];
export const TWITTER_IMAGES = [`${SITE.url}/twitter-image`];

export const NAV_LINKS: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
];
