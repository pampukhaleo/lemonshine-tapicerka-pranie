
import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building2, Handshake, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';

const clientTypes = [
  {
    id: 'klient',
    title: 'Klient indywidualny',
    subtitle: 'Dla Twojego domu',
    description: 'Profesjonalne czyszczenie kanap, foteli, materacy i dywanów w Twoim domu.',
    icon: HomeIcon,
    link: '/klient/',
    features: ['Czyszczenie mebli tapicerowanych', 'Pranie materacy', 'Dywany i wykładziny'],
    gradient: 'from-lemon-400 to-lemon-600',
    hoverGradient: 'hover:from-lemon-500 hover:to-lemon-700',
  },
  {
    id: 'biznes',
    title: 'Dla firm (B2B)',
    subtitle: 'Dla Twojego biznesu',
    description: 'Kompleksowe usługi czyszczenia dla biur, hoteli, restauracji i obiektów komercyjnych.',
    icon: Building2,
    link: '/biznes/',
    features: ['Czyszczenie biur', 'Obsługa hoteli', 'Faktura VAT'],
    gradient: 'from-mint-500 to-mint-700',
    hoverGradient: 'hover:from-mint-600 hover:to-mint-800',
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    subtitle: 'Rozszerz swoją ofertę',
    description: 'Partnerstwo dla firm chcących oferować usługi czyszczenia swoim klientom.',
    icon: Handshake,
    link: '/outsourcing/',
    features: ['Usługi white-label', 'Elastyczne warunki', 'Pełne wsparcie'],
    gradient: 'from-lemon-500 to-mint-500',
    hoverGradient: 'hover:from-lemon-600 hover:to-mint-600',
  },
];

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lemonshine",
    "description": "Profesjonalne usługi czyszczenia tapicerki meblowej w Opolu i Wrocławiu",
    "url": "https://lemonshine.pl",
    "logo": "https://lemonshine.pl/lemonshine.png",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "sameAs": [
      "https://www.facebook.com/lemonshine.opole",
      "https://www.instagram.com/lemonshine_opole/"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Lemonshine - Profesjonalne Pranie Tapicerki | Opole, Wrocław"
        description="Profesjonalne usługi czyszczenia tapicerki meblowej dla klientów indywidualnych, firm i partnerów. Wybierz swój profil i dowiedz się więcej."
        canonical="https://lemonshine.pl/"
        jsonLd={[jsonLd]}
      />

      {/* Header - simplified for home page */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="/104933_LemonShine_Flat_HP_R_01.png" 
            alt="Lemonshine logo" 
            className="h-10 object-contain rounded-2xl"
          />
          <Button variant="outline" size="sm" className="border-mint-600 text-mint-600 hover:bg-mint-50" asChild>
            <a href="tel:+48662117886">
              <Phone className="w-4 h-4 mr-2" />
              +48 662 117 886
            </a>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Profesjonalne usługi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lemon-500 to-mint-500">
              czyszczenia tapicerki
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Wybierz swój profil, aby poznać ofertę dopasowaną do Twoich potrzeb
          </p>
        </div>

        {/* Client type cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mb-12">
          {clientTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Link
                key={type.id}
                to={type.link}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-heading font-bold text-foreground mb-1">
                  {type.title}
                </h2>
                <p className="text-sm text-mint-600 font-medium mb-3">
                  {type.subtitle}
                </p>
                <p className="text-muted-foreground mb-6">
                  {type.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-mint-600 font-semibold group-hover:text-mint-700 transition-colors">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-center text-muted-foreground">
          <div>
            <span className="block text-3xl font-bold text-foreground">500+</span>
            <span className="text-sm">zadowolonych klientów</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div>
            <span className="block text-3xl font-bold text-foreground">4.9</span>
            <span className="text-sm">ocena w Google</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div>
            <span className="block text-3xl font-bold text-foreground">7 dni</span>
            <span className="text-sm">w tygodniu</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
