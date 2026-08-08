import Image from "next/image";

type VideoCardProps = {
  title: string;
  description: string;
  youtubeId: string;
};

// Compact left-text / right-thumbnail row for one training video.
export function VideoCard({ title, description, youtubeId }: VideoCardProps) {
  return (
    <div className="video-card">
      <div className="video-card__info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a
        className="video-card__thumb"
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
