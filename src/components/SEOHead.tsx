
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Lemonshine - Profesjonalne Pranie Tapicerki Opole, Wrocław | Czyszczenie Kanap",
  description = "Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu. Czyszczenie kanap, foteli, narożników i materacy. Bezpieczne środki, gwarancja jakości.",
  keywords = "pranie tapicerki, pranie tapicerki meblowej, czyszczenie kanapy, pranie kanapy, czyszczenie materaca, czyszczenie tapicerki meblowej, pranie tapicerki opole, pranie tapicerki wrocław, pranie narożnika",
  canonical,
  ogImage = "https://lemonshine.pl/lemonshine.png"
}: SEOHeadProps) => {
  const fullTitle = title.includes('Lemonshine') ? title : `${title} | Lemonshine`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
