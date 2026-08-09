import Image from "next/image";
import styles from "./season-card.module.css";

type SeasonLink = {
  label: string;
  href: string;
};

type SeasonCardProps = {
  year: string;
  name: string;
  image?: {
    src: string;
    alt: string;
  };
  blogPosts?: SeasonLink[];
  links?: SeasonLink[];
};

// One card per competition season, gracefully collapsing sections whose data isn't available yet.
export function SeasonCard({ year, name, image, blogPosts, links }: SeasonCardProps) {
  const hasContent = image || (blogPosts && blogPosts.length > 0) || (links && links.length > 0);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <span className={styles.year}>{year}</span> {name}
      </h2>

      <div className={styles.body}>
        {image && (
          <div className={styles.image}>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 760px) 360px, 100vw" />
          </div>
        )}

        {(blogPosts && blogPosts.length > 0) || (links && links.length > 0) ? (
          <div className={styles.columns}>
            {blogPosts && blogPosts.length > 0 && (
              <div>
                <ul className={styles.links}>
                  {blogPosts.map((post) => (
                    <li key={post.href}>
                      <a href={post.href} target="_blank" rel="noopener noreferrer">
                        {post.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {links && links.length > 0 && (
              <div>
                <h3 className={styles.sectionTitle}>Links</h3>
                <ul className={styles.links}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {!hasContent && <p className={styles.empty}>Details coming soon.</p>}
    </div>
  );
}
