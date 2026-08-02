import { SitePage } from "@/components/site-page";

export default function InternalPage() {
  return (
    <SitePage
      eyebrow="Team Only"
      title="Internal"
      description="This route is reserved for future team-only notes, tools, and workflows."
    >
      <section className="feature-card">
        <h2>Planned use</h2>
        <p>
          Access control is intentionally deferred for the first pass, but the route is
          already in place.
        </p>
      </section>
    </SitePage>
  );
}
