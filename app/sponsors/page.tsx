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
    </main>
  );
}
