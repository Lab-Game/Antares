"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { siteNavigation } from "@/lib/site-navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/">
          <Image
            className="brand__logo"
            src="/brand/transparent-logo.png"
            alt="Antares"
            width={1027}
            height={600}
            unoptimized
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              className={`desktop-nav__link${pathname === item.href ? " is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary className="mobile-nav__toggle">Menu</summary>
          <nav className="mobile-nav__panel" aria-label="Primary mobile">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                className={`mobile-nav__link${pathname === item.href ? " is-active" : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
