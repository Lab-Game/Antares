import Image from "next/image";
import styles from "./page.module.css";
import { EmbeddedSponsors } from "./sponsors/embedded-sponsors";

export default function HomePage() {
  return (
    <main>
      <div className="site-page">
        <p>
          FIRST Robotics Competition Team 6962, Antares, was founded in 2018 at <a href="https://khanlabschool.org/" target="_blank" rel="noopener noreferrer">Khan Lab School</a>. As a team, our goal is to bring engineering and design experience and leadership skills to the students in our community. In the spirit of our host school, we aim to bring students of all ages together, lowering the age barrier to STEM education. In our first year of competition, we were awarded the Highest Rookie Seed award by FRC, and have only done more since.
        </p>

        <div className={styles.photoFrame}>
          <Image
            className={styles.photo}
            src="/team-photos/team-2026.webp"
            alt="Antares team photo"
            fill
            preload
            sizes="(min-width: 760px) 760px, 100vw"
          />
        </div>

        Antares is a diverse group of STEM-passionate students from grades
        6 through 12, all motivated to learn and succeed together.
      </div>
      <EmbeddedSponsors />
    </main>
  );
}
