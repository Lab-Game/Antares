import Link from "next/link";
import Image from "next/image";

import { siteNavigation } from "@/lib/site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">
            <Image
              className="brand__icon"
              src="/brand/transparent-icon.png"
              alt=""
              width={329}
              height={422}
              unoptimized
              priority
            />
          </span>
          <span className="brand__text">
            <span>Antares</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {siteNavigation.map((item) => (
            <Link key={item.href} className="desktop-nav__link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary className="mobile-nav__toggle">Menu</summary>
          <nav className="mobile-nav__panel" aria-label="Primary mobile">
            {siteNavigation.map((item) => (
              <Link key={item.href} className="mobile-nav__link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
