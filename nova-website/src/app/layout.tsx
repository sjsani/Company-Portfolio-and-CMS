import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteSettingsQuery,heroQuery } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This replaces your static metadata export
export async function generateMetadata(): Promise<Metadata> {
  const site = await sanityClient.fetch(siteSettingsQuery);
  const hero = await sanityClient.fetch(heroQuery);

  return {
    title: site?.siteTitle || "Nova Website",
    description: hero?.heroDescription || "Welcome to Nova Digital",
    icons: {
      icon: site.logoUrl|| "/favicon.ico", // fallback if Sanity doesn't have favicon
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

