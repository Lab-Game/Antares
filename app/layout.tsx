import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Antares",
  description: "FRC Team 6962 Antares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.variable}>
        <div className="page-background" />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
