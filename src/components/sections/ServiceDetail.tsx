import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Service } from "@/types";

type ServiceDetailProps = {
  service: Service;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <ScrollReveal>
      <div id={service.slug} className="service-row">
        <div className="service-row-icon">
          <Icon size={22} strokeWidth={1.7} />
        </div>

        <div className="service-row-content">
          <h2 className="heading-sm">{service.title}</h2>

          <p className="service-row-description">{service.description}</p>

          <ul className="feature-list service-row-features">
            {service.features.map((feature) => (
              <li key={feature}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="service-row-audience">{service.audience}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
