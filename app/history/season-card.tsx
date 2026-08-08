import Image from "next/image";

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
    <div className="season-card">
      <h2 className="season-card__title">
        <span className="season-card__year">{year}</span> {name}
      </h2>

      <div className="season-card__body">
        {image && (
          <div className="season-card__image">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 760px) 360px, 100vw" />
          </div>
        )}

        {(blogPosts && blogPosts.length > 0) || (links && links.length > 0) ? (
          <div className="season-card__columns">
            {blogPosts && blogPosts.length > 0 && (
              <div>
                <ul className="season-card__links">
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
                <h3 className="season-card__section-title">Links</h3>
                <ul className="season-card__links">
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

      {!hasContent && <p className="season-card__empty">Details coming soon.</p>}
    </div>
  );
}
