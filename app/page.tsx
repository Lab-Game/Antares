import Link from "next/link";
import Image from "next/image";

import { SitePage } from "@/components/site-page";
import { siteNavigation } from "@/lib/site-navigation";

const featureLinks = siteNavigation.filter((item) => item.href !== "/");

export default function HomePage() {
  return (
    <SitePage
      logoSrc="/brand/transparent-logo.png"
      logoAlt="Antares transparent logo"
    >
      <h2>Team Photo</h2>
      <Image
        className="photo"
        src="/images/team-2024.webp"
        alt="Team Antares 2024 photo"
        width={1600}
        height={900}
        priority
      />

      <h2>What this site does</h2>
      <p>
        It gives the team one clean place for public information and a separate
        internal route for future team-only material.
      </p>
      <div className="actions">
        <Link className="button button--accent" href="/donate">
          Support the team
        </Link>
        <Link className="button button--ghost" href="/training">
          Training notes
        </Link>
      </div>

      <h2>Quick links</h2>
      <ul>
        {featureLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </SitePage>
  );
}
