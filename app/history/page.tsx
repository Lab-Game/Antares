import { SeasonCard } from "@/app/history/season-card";

// Add a season by appending one entry below; image/blogPosts/links are all optional.
const seasons = [
  {
    year: "2027",
    name: "BioCore",
    blogPosts: [
      {
        label: "Pre-Season",
        href: "https://docs.google.com/document/d/1V-Im31zFGo_coVZop82ItUPRIz8JuNgjPoxAJzR_sv8/preview",
      },
      {
        label: "Week 1",
        href: "https://docs.google.com/document/d/1SvJyobxlLf8fYxCimZlJNOBXJwD3oTegwxf4R9baoMo/preview",
      },
      {
        label: "Week 2",
        href: "https://docs.google.com/document/d/1U9Y4P0SCUdubb-AE1MZKU8XMMxqKfBTgOY7NDBzsZnU/preview",
      },
      {
        label: "Week 3",
        href: "https://docs.google.com/document/d/1yF3X6UrQMm3FFEmn6YP3EattiMSmcEPaUboGkobUFTM/preview",
      },
    ]
  },
  {
    year: "2026",
    name: "Rebuilt",
    image: { src: "/robot-images/2026-CAD.png", alt: "2026 CAD" },
  },
  {
    year: "2025",
    name: "Reefscape",
    image: { src: "/robot-images/2025-CAD.png", alt: "2025 CAD" },
    blogPosts: [
      { label: "Week 1", href: "/blog-PDFs/2025Week1Blog.pdf" },
      { label: "Week 2", href: "/blog-PDFs/2025Week2Blog.pdf" },
      { label: "Week 3", href: "/blog-PDFs/2025Week3Blog.pdf" },
      { label: "Weeks 4 and 5", href: "/blog-PDFs/Antares2025Week4_5Blog.pdf" },
      { label: "Weeks 6 and 7", href: "/blog-PDFs/2025AntaresWeek6&7Blog.pdf" },
      { label: "Week 8", href: "/blog-PDFs/2025AntaresWeek8Blog.pdf" },
      { label: "Weeks 9 to 12", href: "/blog-PDFs/2025AntaresWeeks9to12Blog.pdf" },
      { label: "Capitol City Classic", href: "/blog-PDFs/2025CCCBlog.pdf" },
    ],
  },
  {
    year: "2024",
    name: "Crescendo",
    image: { src: "/robot-images/2024-CAD.png", alt: "2024 CAD" },
    blogPosts: [
      { label: "Offseason", href: "/blog-PDFs/ANTARES_Offseason_blog.pdf" },
      { label: "Weeks 1 and 2", href: "/blog-PDFs/ANTARES_Week_1_2_blog.pdf" },
      { label: "Weeks 3 and 4", href: "/blog-PDFs/ANTARES-Week-3-4.pdf" },
    ],
  },
  {
    year: "2023",
    name: "Charged Up",
    image: { src: "/robot-images/2023-photo.jpg", alt: "2023 Photo" },
    blogPosts: [
      {
        label: "Weeks 1 to 3",
        href: "https://docs.google.com/document/d/1jPqF1wl1fpsS3Z3vZIF8mhnYsgGOZQYB9XV-C3ATmN4/preview",
      },
      {
        label: "Weeks 4 to 6",
        href: "https://docs.google.com/document/d/1oqWgfKmR4ZTY3XF_sQkCs3bJxaYQO6Udv1iyQMez27U/preview",
      },
    ],
  },
  {
    year: "2022",
    name: "Rapid React",
    image: { src: "/robot-images/2022-whiteboard.jpg", alt: "2022 Photo" },
    blogPosts: [
      {
        label: "Pre-Season and Week 1",
        href: "https://docs.google.com/document/d/15Fu87GMnb15SDpC-s1ouw3y6gRH5HqNqlxPW7NRTrUk/preview",
      },
      {
        label: "Weeks 2 and 3",
        href: "https://docs.google.com/document/d/1ToPgXZ-vTaOERvVS_70WnIOybmjOgv1y9kQHTzQfx5c/preview",
      },
      {
        label: "Weeks 4 and 5",
        href: "https://docs.google.com/document/d/1mUlwq41prp9BVE0Qq_ntnO7ekPK0DcGdBGhrC9wWyFg/preview",
      },
      {
        label: "Weeks 6 and 7",
        href: "https://docs.google.com/document/d/1BH1ZVnRoxGyraTjYGyqLCvqP5k_dmXSCeBrN8gfDnaY/preview",
      },
      {
        label: "Season Recap",
        href: "https://docs.google.com/document/d/1pdkHilT2aNJox8RFxs8ZII2xJq4QzanjyLT783SvpRA/preview",
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="site-page">
      {seasons.map((season) => (
        <SeasonCard key={season.year} {...season} />
      ))}
    </main>
  );
}

