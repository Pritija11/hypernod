import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              href="/"
              className="brand"
              aria-label="HyperNod home"
            >
              <span
                className="brand-mark"
                aria-hidden="true"
              >
                <Image src={SITE.logo} alt="" width={32} height={32} />
              </span>

              <span className="brand-name">
                HyperNod
              </span>
            </Link>

            <p className="footer-description">
              Technology infrastructure and digital
              solutions for what&apos;s next.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <p className="footer-heading">
                Explore
              </p>

              <Link href="/solutions">
                Solutions
              </Link>

              <Link href="/services">
                Services
              </Link>

              <Link href="/about">
                About
              </Link>

              <Link href="/approach">
                Our Approach
              </Link>

              <Link href="/contact">
                Contact
              </Link>
            </div>

            <div className="footer-column">
              <p className="footer-heading">
                Contact
              </p>

              <a
                href={`mailto:${SITE.email}`}
                className="footer-contact-item"
              >
                <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.email}</span>
              </a>

              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="footer-contact-item"
              >
                <Phone size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.phone}</span>
              </a>

              <span className="footer-contact-item footer-location">
                <MapPin size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.address}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} HyperNod.
            All rights reserved.
          </p>

          <nav className="footer-legal-links" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}