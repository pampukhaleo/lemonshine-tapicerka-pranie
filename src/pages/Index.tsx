
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import Equipment from "@/components/Equipment.tsx";
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy pranie tapicerki jest bezpieczne dla dzieci i zwierząt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, używamy wyłącznie bezpiecznych, certyfikowanych środków czyszczących, które są całkowicie bezpieczne dla dzieci i zwierząt domowych."
        }
      },
      {
        "@type": "Question", 
        "name": "Jak długo schnie tapicerka po praniu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tapicerka zazwyczaj schnie w ciągu 2-4 godzin dzięki naszym profesjonalnym maszynom ekstrakcyjnym."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie gwarancję na usługi?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy 100% gwarancję satysfakcji. Jeśli nie jesteś zadowolony z rezultatów, wrócimy i powtórzymy usługę za darmo."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie rodzaje plam potraficie usunąć?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Usuwamy praktycznie wszystkie rodzaje plam: od kawy, wina, krwi, po plamy organiczne i tłuste. Mamy specjalistyczne środki do każdego typu zabrudzenia."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        canonical="https://lemonshine.pl/"
        jsonLd={faqJsonLd}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OrderForm />
        <Results />
        <Equipment />
        <Blog />
        <FAQ />
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Index;
