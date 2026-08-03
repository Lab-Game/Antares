import type { ReactNode } from "react";
import Image from "next/image";

type SitePageProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
};

export function SitePage({
  eyebrow,
  title,
  description,
  children,
  logoSrc,
  logoAlt,
}: SitePageProps) {
  return (
    <main className="site-page">
      {logoSrc ? (
        <Image
          className="site-page__logo"
          src={logoSrc}
          alt={logoAlt ?? ""}
          width={756}
          height={371}
          unoptimized
          priority
        />
      ) : null}
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p className="lead">{description}</p>
      {children}
    </main>
  );
}
