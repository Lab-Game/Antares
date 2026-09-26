import Image from "next/image";
import styles from "./page.module.css";

export default function SponsorsPage() {
  return <main>
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className="page-title">Our Sponsors</h1>
        <p>
          We appreciate the support of our generous sponsors, whose contributions make our team&apos;s achievements possible. These sponsors help us acquire materials for robots, bring students to distant competitions, and create educational opportunities. Thank you for enabling us to inspire and educate the next generation of engineers and innovators!
        </p>
      </div>
    </div>
    <div className={styles.body}>
      <h2>Platinum</h2>
      <div className={styles.sponsorSection}>
        <Image
          className={styles.logo}
          src="/sponsor-logos/PowerTec-logo.svg"
          alt="PowerTec Logo"
          width={1280}
          height={180}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/SmugMug-logo.svg"
          alt="SmugMug Logo"
          width={550}
          height={119}
        />
      </div>
      <h2>Gold</h2>
      <div className={styles.sponsorSection}>
        <Image
          className={styles.logo}
          src="/sponsor-logos/GlobalLogic-logo.svg"
          alt="GlobalLogic Logo"
          width={800}
          height={182}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/Legion_Technologies-logo.svg"
          alt="Legion Technologies Logo"
          width={800}
          height={143}
        />
      </div>
      <h2>Silver</h2>
      <div className={styles.sponsorSection}>
        <Image
          className={styles.logo}
          src="/sponsor-logos/Abbott_Laboratories-logo.webp"
          alt="Abbott Laboratories Logo"
          width={1000}
          height={250}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/CMS-logo.webp"
          alt="CMS Logo"
          width={998}
          height={366}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/Altair_Engineering-logo.svg"
          alt="Altair Engineering Logo"
          width={263}
          height={54}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/Apple-logo.svg"
          alt="Apple Logo"
          width={44}
          height={54}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/General_Catalyst-logo.svg"
          alt="General Catalyst Logo"
          width={400}
          height={54}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/haas-logo.svg"
          alt="Haas Logo"
          width={181}
          height={72}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/HalloApp-logo.svg"
          alt="HalloApp Logo"
          width={259}
          height={54}
        />
        <Image
          className={styles.logo}
          src="/sponsor-logos/Saints_Capital-logo.svg"
          alt="Saints Capital Logo"
          width={170}
          height={42}
        />
      </div>
      <h2>Bronze</h2>
      <div className={styles.sponsorSection}>
        <div className={styles.textSponsor}>Lockheed Martin</div>
        <div className={styles.textSponsor}>PG&E</div>
        <div className={styles.textSponsor}>Intuitive Foundation</div>
        <div className={styles.textSponsor}>FIRST NorCal</div>
      </div>
    </div>
  </main>;
}
