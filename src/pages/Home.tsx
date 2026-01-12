
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building2, Handshake, ArrowRight, Phone, Shield, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const clientTypes = [
  {
    id: 'klient',
    title: 'Dla domu',
    subtitle: 'Mieszkania i domy prywatne',
    icon: HomeIcon,
    link: '/klient/',
  },
  {
    id: 'biznes',
    title: 'Dla firm',
    subtitle: 'Biura, restauracje, lokale',
    icon: Building2,
    link: '/biznes/',
  },
  {
    id: 'outsourcing',
    title: 'Współpraca',
    subtitle: 'Firmy sprzątające i partnerzy',
    icon: Handshake,
    link: '/outsourcing/',
  },
];

const cooperationBenefits = [
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    description: 'Stosujemy sprawdzone i bezpieczne metody, odpowiednie do każdej przestrzeni.',
  },
  {
    icon: User,
    title: 'Indywidualność',
    description: 'Godziny pracy, częstotliwość i zakres dostosowujemy do realnych potrzeb klienta.',
  },
  {
    icon: FileText,
    title: 'Odpowiedzialność i formalność',
    description: 'Terminowość, jasna komunikacja i rozliczenia fakturowe to nasz standard.',
  },
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Lemonshine - Profesjonalne Pranie Tapicerki | Opole, Wrocław"
        description="Profesjonalne usługi czyszczenia tapicerki meblowej dla klientów indywidualnych, firm i partnerów. Wybierz swój profil i dowiedz się więcej."
        canonical="https://lemonshine.pl/"
        jsonLd={[jsonLd]}
      />

      {/* Header */}
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
      <main className="flex-1">
        {/* Hero Selection Section */}
        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Kim jesteś?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Wybierz sekcję, a wyświetlimy ci odpowiednią stronę
              </p>
            </div>

            {/* Animated Cards */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:h-[400px]">
              {clientTypes.map((type) => {
                const IconComponent = type.icon;
                const isHovered = hoveredCard === type.id;
                const hasHover = hoveredCard !== null;
                
                return (
                  <Link
                    key={type.id}
                    to={type.link}
                    className={cn(
                      "group relative bg-lemon-400 rounded-3xl p-8 flex flex-col justify-end overflow-hidden transition-all duration-500 ease-out",
                      "md:min-h-0 min-h-[200px]",
                      // Desktop flex animation
                      isHovered ? "md:flex-[1.6]" : hasHover ? "md:flex-[0.7]" : "md:flex-1"
                    )}
                    onMouseEnter={() => setHoveredCard(type.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background gradient overlay on hover */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-lemon-500/50 to-transparent transition-opacity duration-500",
                      isHovered ? "opacity-100" : "opacity-0"
                    )} />
                    
                    {/* Icon */}
                    <div className={cn(
                      "absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500",
                      isHovered ? "scale-110 bg-white/30" : ""
                    )}>
                      <IconComponent className="w-7 h-7 text-foreground" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground whitespace-nowrap">
                        {type.title}
                      </h2>
                      
                      {/* Subtitle - appears on hover */}
                      <div className={cn(
                        "overflow-hidden transition-all duration-500 ease-out",
                        isHovered ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 md:max-h-0 md:opacity-0",
                        // Always visible on mobile
                        "max-h-20 opacity-100 mt-2 md:max-h-0 md:opacity-0 md:mt-0",
                        isHovered && "md:max-h-20 md:opacity-100 md:mt-2"
                      )}>
                        <p className="text-foreground/80">
                          {type.subtitle}
                        </p>
                      </div>
                      
                      {/* Arrow indicator - appears on hover */}
                      <div className={cn(
                        "flex items-center gap-2 text-foreground font-medium overflow-hidden transition-all duration-500 ease-out",
                        // Always visible on mobile, animated on desktop
                        "max-h-10 opacity-100 mt-4 md:max-h-0 md:opacity-0 md:mt-0",
                        isHovered && "md:max-h-10 md:opacity-100 md:mt-4"
                      )}>
                        <span>Zobacz więcej</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Jedno podejście. Trzy kierunki współpracy.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Wielu klientów trafia do nas nie tylko z powodu tego, że „coś jest brudne", 
                lecz także z uwagi na skargi pracowników, gości lub użytkowników przestrzeni.
              </p>
              <p>
                Lemonshine powstał jako serwis czyszczenia oparty na porządku, przewidywalności 
                i dopasowaniu do realnych potrzeb klienta.
              </p>
              <p>
                Obsługujemy zarówno osoby prywatne, firmy, jak i partnerów biznesowych — 
                zawsze w jasno określonym modelu współpracy.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="px-4 py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Dlaczego Lemonshine nie jest „firmą od wszystkiego"
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Od początku wiedzieliśmy, że największym problemem w usługach czyszczenia 
                    nie jest brak ofert, ale brak odpowiedzialności i powtarzalności.
                  </p>
                  <p>
                    Dlatego Lemonshine został zbudowany wokół wąskiej specjalizacji i jasnych zasad pracy.
                  </p>
                  <p>
                    Zamiast dopasowywać usługę do ceny, skupiamy się na procesie dopasowanym do klienta.
                  </p>
                  <p>
                    To podejście sprawdza się zarówno w mieszkaniach prywatnych, 
                    jak i w środowisku biznesowym.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/history.jpg" 
                    alt="Zespół Lemonshine przy pracy" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cooperation Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
              Jak wygląda współpraca z Lemonshine
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cooperationBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-lemon-100 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-lemon-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-br from-lemon-50 to-mint-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Gotowy do współpracy?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Wybierz odpowiednią ofertę lub skontaktuj się z nami bezpośrednio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lemon-500 hover:bg-lemon-600 text-foreground font-semibold px-8"
                asChild
              >
                <Link to="/klient/">
                  Wybierz ofertę
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-mint-600 text-mint-600 hover:bg-mint-50 font-semibold px-8"
                asChild
              >
                <a href="tel:+48662117886">
                  <Phone className="w-5 h-5 mr-2" />
                  Skontaktuj się z nami
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
