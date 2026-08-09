"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { siteNavigation } from "@/lib/site-navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <Image
            className={styles.logo}
            src="/brand/transparent-icon.png"
            alt="Antares"
            width={164}
            height={211}
            unoptimized
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              className={`${styles.desktopLink}${pathname === item.href ? ` ${styles.active}` : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className={styles.mobileNav}>
          <summary className={styles.mobileToggle}>Menu</summary>
          <nav className={styles.mobilePanel} aria-label="Primary mobile">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                className={`${styles.mobileLink}${pathname === item.href ? ` ${styles.active}` : ""}`}
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
