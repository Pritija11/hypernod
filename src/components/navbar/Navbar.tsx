"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link
          href="/"
          className="brand"
          aria-label="HyperNod home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            <Image src={SITE.logo} alt="" width={32} height={32} priority />
          </span>

          <span className="brand-name">HyperNod</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx({ active: isActive })}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-primary nav-cta">
          Talk to us
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="mobile-menu"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx({ active: isActive })}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Talk to us
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
