import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

/**
 * A list of platinum and gold sponsors intended to be embedded within
 * other pages.
 */
export function EmbeddedSponsors() {
  return (
    <div className={styles.embeddedSponsors}>
        <h2>Our Sponsors</h2>
        <div className={styles.embeddedSponsorsInfo}>Thank you to our generous sponsors, whose contributions help us inspire and educate the next generation of engineers and innovators!</div>
        <div className={styles.sponsorSection}>
            <Image
                className={styles.embeddedSponsorLogo}
                src="/sponsor-logos/PowerTec-logo.svg"
                alt="PowerTec Logo"
                width={1280}
                height={180}
            />
            <Image
                className={styles.embeddedSponsorLogo}
                src="/sponsor-logos/SmugMug-logo.svg"
                alt="SmugMug Logo"
                width={550}
                height={119}
            />
            <Image
                className={styles.embeddedSponsorLogo}
                src="/sponsor-logos/GlobalLogic-logo.svg"
                alt="GlobalLogic Logo"
                width={800}
                height={182}
            />
            <Image
                className={styles.embeddedSponsorLogo}
                src="/sponsor-logos/Legion_Technologies-logo.svg"
                alt="Legion Technologies Logo"
                width={800}
                height={143}
            />
        </div>
        <Link href="/sponsors" className={styles.moreSponsorsButton}>See More</Link>
    </div>
  );
}