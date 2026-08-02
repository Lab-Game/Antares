import type { ReactNode } from "react";
import Image from "next/image";

type SitePageProps = {
  eyebrow?: string;
  title: string;
  description: string;
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
      <section className="hero-card">
        {logoSrc ? (
          <div className="hero-branding">
            <Image className="hero-branding__logo" src={logoSrc} alt={logoAlt ?? ""} width={756} height={371} priority />
          </div>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {children}
      </section>
    </main>
  );
}
