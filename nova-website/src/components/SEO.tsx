// components/SEO.tsx
"use client";
import Head from "next/head";

interface SEOProps {
  siteSeo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: { asset: { url: string } };
  };
}

export default function SEO({ siteSeo }: SEOProps) {
  const finalTitle = siteSeo?.title || "Default Site Title";
  const finalDescription = siteSeo?.description || "Default site description";
  const finalKeywords = siteSeo?.keywords?.join(", ") || "";
  const finalOgImage = siteSeo?.ogImage?.asset?.url || "";

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
