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
  icons: {
    icon: "/brand/dark-icon.png",
    shortcut: "/brand/dark-icon.png",
    apple: "/brand/dark-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.variable}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
