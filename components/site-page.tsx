import type { ReactNode } from "react";

type SitePageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function SitePage({ eyebrow, title, description, children }: SitePageProps) {
  return (
    <main className="site-page">
      <section className="hero-card">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {children}
      </section>
    </main>
  );
}
