import {
  Cloud,
  Database,
  HeadphonesIcon,
  LockKeyhole,
  Server,
  Settings,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "cloud-hosting-compute",
    icon: Server,
    title: "Cloud Hosting & Compute",
    summary:
      "Scalable compute and hosting environments for websites, applications, and services.",
    description:
      "We set up and run cloud compute and hosting for businesses that need their websites, applications, and APIs to stay fast and available as traffic grows. This covers everything from a single production server to a multi-server setup split across compute, database, and caching layers, sized to match what the application actually needs rather than what is easiest to sell.",
    features: [
      "Virtual server and cloud compute provisioning",
      "Website, application, and API hosting",
      "Load balancing for higher-traffic setups",
      "Staging and production environment separation",
    ],
    audience:
      "For businesses running a website, web application, or API that needs hosting they can rely on.",
  },
  {
    slug: "managed-infrastructure",
    icon: Settings,
    title: "Managed Infrastructure",
    summary:
      "Infrastructure setup, monitoring, and maintenance handled end-to-end, so your team can focus on building.",
    description:
      "Once infrastructure is live, someone still has to patch it, watch it, and fix it when something breaks. Our managed infrastructure service takes that ongoing responsibility off a founder's or developer's plate, so the team can spend its time on the product rather than server maintenance.",
    features: [
      "Server patching and software updates",
      "Uptime monitoring and incident response",
      "Capacity planning as usage grows",
      "Regular infrastructure health reviews",
    ],
    audience:
      "For teams that already have infrastructure running but don't have the time or staff to maintain it properly.",
  },
  {
    slug: "security-monitoring",
    icon: LockKeyhole,
    title: "Security & Monitoring",
    summary:
      "Security-first infrastructure with continuous monitoring and operational discipline built in.",
    description:
      "Infrastructure security is treated as a starting requirement, not an add-on. We configure access control, firewalls, and monitoring from the beginning, then keep watching for unusual activity, failed logins, and performance issues after launch so problems are caught early rather than after they cause damage.",
    features: [
      "Firewall and access control configuration",
      "Server and application-level monitoring",
      "Alerting for downtime and suspicious activity",
      "Basic security audits for existing infrastructure",
    ],
    audience:
      "For businesses handling customer data or payments that need infrastructure held to a higher security standard.",
  },
  {
    slug: "custom-digital-platforms",
    icon: Cloud,
    title: "Custom Digital Platforms",
    summary:
      "Software and digital platforms designed and built around the way your business actually works.",
    description:
      "We design and build the software businesses use to run — customer portals, booking systems, internal dashboards, and similar platforms — rather than fitting the business into a generic template. The platform is built on infrastructure we already manage, so performance and security stay consistent from the first version onward.",
    features: [
      "Customer portals and client-facing platforms",
      "Internal dashboards and operations tools",
      "Booking, ordering, and workflow systems",
      "Third-party API and payment integrations",
    ],
    audience:
      "For businesses that have outgrown off-the-shelf software and need something built around their actual process.",
  },
  {
    slug: "storage-data-systems",
    icon: Database,
    title: "Storage & Data Systems",
    summary:
      "Reliable storage, backups, and data systems that keep information available and protected.",
    description:
      "We set up the databases, file storage, and backup systems that sit underneath an application, with a clear backup and recovery plan from the start. This matters most the day something goes wrong — a failed disk, a bad deployment, or a mistaken delete — when having a tested recovery process is the difference between an inconvenience and a disaster.",
    features: [
      "Database setup, tuning, and management",
      "Automated, scheduled backups",
      "Tested disaster recovery procedures",
      "File and object storage configuration",
    ],
    audience:
      "For any business storing customer, transaction, or operational data that cannot afford to lose it.",
  },
  {
    slug: "technical-support",
    icon: HeadphonesIcon,
    title: "Technical Support",
    summary:
      "Responsive, hands-on support from a team that understands the infrastructure behind your product.",
    description:
      "When something breaks, we already know how the infrastructure is set up, because we set it up. That means support that starts from an understanding of your actual environment instead of a generic troubleshooting script, with a direct line to the people who can fix the problem.",
    features: [
      "Direct access to the team managing your infrastructure",
      "Incident response for outages and critical issues",
      "Ongoing technical guidance as the business grows",
      "Support for both HyperNod-managed and existing infrastructure",
    ],
    audience:
      "For teams that want a technical partner to call when something goes wrong, not a ticket queue.",
  },
];
