import type { Route } from "next";

export const siteNavigation: { href: Route; label: string }[] = [
  { href: "/history", label: "History" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/donate", label: "Donate" },
  { href: "/training", label: "Training" },
  { href: "/internal", label: "Internal" },
];
