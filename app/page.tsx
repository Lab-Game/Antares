import Link from "next/link";

import { SitePage } from "@/components/site-page";
import { siteNavigation } from "@/lib/site-navigation";

const featureLinks = siteNavigation.filter((item) => item.href !== "/");

export default function HomePage() {
  return (
    <SitePage
      eyebrow="FRC Team 6962"
      title="Antares builds with precision, discipline, and a dark-blue identity."
      description="A simple home base for team updates, training notes, sponsor relationships, build logs, and internal resources."
    >
      <div className="content-grid">
        <section className="feature-card feature-card--primary">
          <h2>What this site does</h2>
          <p>
            It gives the team one clean place for public information and a separate
            internal route for future team-only material.
          </p>
          <div className="cta-row">
            <Link className="button button--accent" href="/donate">
              Support the team
            </Link>
            <Link className="button button--ghost" href="/training">
              Training notes
            </Link>
          </div>
        </section>

        <section className="feature-card">
          <h2>Quick links</h2>
          <ul className="link-list">
            {featureLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SitePage>
  );
}
