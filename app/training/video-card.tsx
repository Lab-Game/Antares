import Image from "next/image";
import styles from "./video-card.module.css";

type VideoCardProps = {
  title: string;
  description: string;
  youtubeId: string;
};

// Compact left-text / right-thumbnail row for one training video.
export function VideoCard({ title, description, youtubeId }: VideoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a
        className={styles.thumbnail}
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={`${title} video thumbnail`}
          width={200}
          height={150}
          unoptimized
        />
      </a>
    </div>
  );
}
