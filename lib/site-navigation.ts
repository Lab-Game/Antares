import type { Route } from "next";

export const siteNavigation: { href: Route; label: string }[] = [
  { href: "/training", label: "Training" },
  { href: "/history", label: "History" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/donate", label: "Donate" },
  { href: "/internal", label: "Internal" },
];
