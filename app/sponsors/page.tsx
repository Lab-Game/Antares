import Image from "next/image";
import styles from "./page.module.css";

export default function SponsorsPage() {
  return (
    <main className="site-page">
      <p>
        Thank you to our generous sponsors, who make our team possible!
      </p>
      <Image
        className={styles.logo}
        src="/sponsor-logos/PowerTec-logo.svg"
        alt="PowerTec Logo"
        width={1280}
        height={180}
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
        src="/sponsor-logos/SmugMug-logo.svg"
        alt="SmugMug Logo"
        width={550}
        height={119}
      />
      <Image
        className={styles.logo}
        src="/sponsor-logos/Abbott_Laboratories-logo.webp"
        alt="Abbott Laboratories Logo"
        width={1000}
        height={250}
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
        src="/sponsor-logos/GlobalLogic-logo.svg"
        alt="GlobalLogic Logo"
        width={800}
        height={182}
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
        src="/sponsor-logos/Legion_Technologies-logo.svg"
        alt="Legion Technologies Logo"
        width={800}
        height={143}
      />
      <Image
        className={styles.logo}
        src="/sponsor-logos/Saints_Capital-logo.svg"
        alt="Saints Capital Logo"
        width={170}
        height={42}
      />
    </main>
  );
}
