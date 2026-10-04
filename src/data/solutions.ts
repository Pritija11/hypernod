import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "cloud-infrastructure",
    index: "01",
    title: "Cloud Infrastructure",
    summary:
      "Modern infrastructure designed for reliable applications, services, and digital products.",
    description:
      "HyperNod designs and manages cloud infrastructure for businesses that need their applications, websites, and internal systems to stay online and perform well as they grow. Working out of Kathmandu, Nepal, we set up compute, storage, and networking in a way that is practical for small teams to run day to day, while still holding up under real production traffic. Instead of handing over a server and walking away, we help plan the infrastructure around how the business actually operates, then stay involved as requirements change.",
    features: [
      "Cloud compute and virtual server provisioning",
      "Scalable hosting for websites, applications, and APIs",
      "Network architecture, firewalls, and access control",
      "Automated backups and disaster recovery planning",
      "Infrastructure monitoring, alerting, and uptime tracking",
      "Migration from legacy servers or other hosting providers",
    ],
    audience:
      "Built for startups, growing SMEs, and development teams in Nepal and abroad that need infrastructure they can depend on without hiring a full in-house ops team.",
  },
  {
    slug: "digital-platforms",
    index: "02",
    title: "Digital Platforms",
    summary:
      "Practical digital platforms that help businesses create, launch, and improve customer experiences.",
    description:
      "Beyond infrastructure, HyperNod builds the digital platforms that businesses use to reach and serve their customers — websites, web applications, customer portals, and internal tools. We focus on platforms that are built for a specific business need rather than generic templates, so the end result fits how the team actually works and how customers actually behave. Every platform we build is deployed on infrastructure we already understand well, which keeps performance and security consistent from day one.",
    features: [
      "Business websites and marketing platforms",
      "Customer and client portals",
      "E-commerce and online ordering systems",
      "Internal dashboards and operations tools",
      "API design and third-party integrations",
      "Ongoing platform maintenance and improvements",
    ],
    audience:
      "Suited to businesses that are ready to move beyond a basic website and need a digital platform that supports how their customers and staff actually use it.",
  },
  {
    slug: "technology-solutions",
    index: "03",
    title: "Technology Solutions",
    summary:
      "Connected systems and technical foundations built with long-term scalability in mind.",
    description:
      "Many businesses end up with infrastructure, software, and tools that were added over time and never properly connected. HyperNod's technology solutions work focuses on tying these pieces together — integrating systems, automating repetitive processes, and setting up the technical foundations that make future growth easier instead of harder. This is where we act less like a vendor and more like a technical partner, helping teams make decisions about architecture, tooling, and process before problems show up in production.",
    features: [
      "Systems and software integration",
      "Process automation and internal workflow tooling",
      "DevOps setup, CI/CD pipelines, and deployment automation",
      "Technical consulting and infrastructure audits",
      "Custom software development for specific business needs",
      "Long-term scalability and architecture planning",
    ],
    audience:
      "A fit for businesses with more than one system in play that need those systems working together, plus founders who want a technical advisor rather than a one-off contractor.",
  },
];
