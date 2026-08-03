import { SitePage } from "@/components/site-page";

export default function BlogPage() {
  return (
    <SitePage
      eyebrow="Updates"
      title="Blog"
      description="Build notes, match recaps, announcements, and behind-the-scenes progress will live here."
    >
      <h2>Recent stories</h2>
      <p>
        This first pass keeps the structure ready for future posts without forcing a
        publishing workflow yet.
      </p>
    </SitePage>
  );
}
