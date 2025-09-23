
import { Helmet } from 'react-helmet-async';

const normalizePathWithTrailingSlash = (path: string): string => {
  if (!path) return '/';
  if (path === '/') return path;
  return path.endsWith('/') ? path : `${path}/`;
};

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  robots?: string;
  ogType?: "website" | "article";
  siteName?: string;
  jsonLd?: object | object[];
  twitterCard?: "summary_large_image" | "summary";
}

const SEOHead = ({ 
  title = "Lemonshine - Profesjonalne Pranie Tapicerki Opole, Wrocław | Czyszczenie Kanap",
  description = "Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu. Czyszczenie kanap, foteli, narożników i materacy. Bezpieczne środki, gwarancja jakości.",
  keywords = "pranie tapicerki, pranie tapicerki meblowej, czyszczenie kanapy, pranie kanapy, czyszczenie materaca, czyszczenie tapicerki meblowej, pranie tapicerki opole, pranie tapicerki wrocław, pranie narożnika",
  canonical,
  ogImage = "https://lemonshine.pl/lemonshine.png",
  ogImageAlt = "Lemonshine - Profesjonalne pranie tapicerki",
  robots = "index,follow",
  ogType = "website",
  siteName = "Lemonshine",
  jsonLd,
  twitterCard = "summary_large_image"
}: SEOHeadProps) => {
  const fullTitle = title.includes('Lemonshine') ? title : `${title} | Lemonshine`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://lemonshine.pl/';
  const normalizedCanonical = normalizePathWithTrailingSlash(canonical || currentUrl.replace('https://lemonshine.pl', '') || '/');
  const absoluteCanonical = canonical?.startsWith('http') ? canonical : `https://lemonshine.pl${normalizedCanonical}`;
  const absoluteOgImage = ogImage?.startsWith('http') ? ogImage : `https://lemonshine.pl/${ogImage.replace(/^\/+/, '')}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={absoluteCanonical} />
      
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:url" content={absoluteCanonical} />
      
      {ogType === "article" && (
        <>
          <meta property="article:author" content="Lemonshine" />
          <meta property="article:section" content="Czyszczenie" />
        </>
      )}
      
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
