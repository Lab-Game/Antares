import Image from "next/image";

import { SitePage } from "@/components/site-page";

export default function HomePage() {
  return (
    <SitePage>
      <p>This is the homepage of Antares, FIRST Robotics Competition team 6962,
        based at <a href="https://khanlabschool.org/">Khan Lab School</a> in
        Mountain View, California.</p>

      <div className="photo-frame">
        <Image
          className="photo"
          src="/images/team-2026.webp"
          alt="Antares team photo"
          fill
          priority
          sizes="(min-width: 760px) 760px, 100vw"
        />
      </div>
    </SitePage>
  );
}
