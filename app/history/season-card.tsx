import Image from "next/image";
import styles from "./season-card.module.css";
import { ExternalLink } from 'lucide-react';

type SeasonLink = {
  label: string;
  href: string;
};

type SeasonCardProps = {
  techBinder?: string;
  year: string;
  name: string;
  overview?: string;
  image?: {
    src: string;
    alt: string;
  };
  blogPosts?: SeasonLink[];
  links?: SeasonLink[];
};

// One card per competition season, gracefully collapsing sections whose data isn't available yet.
export function SeasonCard({ year, name, overview, image, blogPosts, links, techBinder }: SeasonCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <h2 className={styles.title}>
          <span className={styles.year}>{year}</span> {name}
        </h2>
        {overview && <p className={styles.seasonOverview}>{overview}</p>}
        {(blogPosts && blogPosts.length > 0) || (links && links.length > 0) ? <>
          <span className={styles.sectionTitle}>Blog</span>
          <div>
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
        </> : null}
      </div>

      {image && (
        <div className={styles.robot}>
          <div className={styles.image}>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 760px) 360px, 100vw" />
          </div>
          {techBinder && (
            <a href={techBinder} className={styles.techBinderButton} target="_blank" rel="noopener noreferrer">
              Tech Binder <ExternalLink size={15} className={styles.externalLink} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
