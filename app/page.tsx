import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className="site-page">
      <p>
        This is the homepage of Antares, FIRST Robotics Competition team 6962, based
        at <a href="https://khanlabschool.org/">Khan Lab School</a> in Mountain
        View, California.
      </p>

      <div className={styles.photoFrame}>
        <Image
          className={styles.photo}
          src="/team-photos/team-2026.webp"
          alt="Antares team photo"
          fill
          priority
          sizes="(min-width: 760px) 760px, 100vw"
        />
      </div>

      <p className={styles.contact}>
        <a href="mailto:contact@team6962.com">contact@team6962.com</a><br />
        1200 Villa Street<br />
        Mountain View, CA 94041
      </p>
    </main>
  );
}
