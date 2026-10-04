import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Gauge,
  LockKeyhole,
  Server,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Flexible infrastructure designed for modern applications and workloads.",
  },
  {
    icon: Server,
    title: "Compute & Hosting",
    text: "Reliable compute and hosting environments for websites, applications and services.",
  },
  {
    icon: LockKeyhole,
    title: "Security Focused",
    text: "Infrastructure designed with security, reliability and operational discipline in mind.",
  },
  {
    icon: Gauge,
    title: "Built to Scale",
    text: "Cloud resources that can grow alongside changing business requirements.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <ScrollReveal direction="left" className="about-visual">
            <div className="about-visual-box">
              <div className="about-visual-header">
                <span className="about-status-dot" />
                <span>HYPERNOD CLOUD</span>
              </div>

              <div className="about-server-stack">
                <div className="about-server">
                  <div className="about-server-icon">
                    <Server size={20} />
                  </div>

                  <div>
                    <strong>Compute</strong>
                    <span>Cloud workloads</span>
                  </div>

                  <div className="about-server-status">
                    Active
                  </div>
                </div>

                <div className="about-server">
                  <div className="about-server-icon">
                    <Cloud size={20} />
                  </div>

                  <div>
                    <strong>Cloud Services</strong>
                    <span>Infrastructure services</span>
                  </div>

                  <div className="about-server-status">
                    Ready
                  </div>
                </div>

                <div className="about-server">
                  <div className="about-server-icon">
                    <Gauge size={20} />
                  </div>

                  <div>
                    <strong>Scalable</strong>
                    <span>Flexible resources</span>
                  </div>

                  <div className="about-server-status">
                    Online
                  </div>
                </div>
              </div>

              <div className="about-visual-footer">
                <span>Cloud Infrastructure</span>
                <span>●</span>
                <span>Nepal</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal
            direction="right"
            className="about-content"
            delay={100}
          >
            <div className="section-header left">
              <span className="section-label">About Hypernod</span>

              <h2 className="section-title">
                Cloud technology for businesses ready to grow.
              </h2>

              <p className="section-description">
                Hypernod is a cloud technology startup based in Kathmandu,
                Nepal, focused on building practical and reliable cloud
                infrastructure for businesses, developers and modern
                digital products.
              </p>
            </div>

            <p className="about-text">
              We bring together cloud compute, hosting, storage, networking
              and managed infrastructure into solutions that are easier to
              understand, deploy and manage.
            </p>

            <p className="about-text">
              Whether you are launching a new application, moving workloads
              to the cloud or looking for dependable infrastructure to
              support your business, Hypernod is being built around the
              needs of growing teams.
            </p>

            <Link href="/about" className="about-link">
              Learn more about Hypernod
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>

        {/* Capabilities */}
        <ScrollReveal
          direction="up"
          className="about-capabilities reveal-stagger"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="about-capability">
                <div className="about-capability-icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}