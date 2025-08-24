
import React from 'react';
import Header from '@/components/Header';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Polityka Prywatności"
        description="Polityka prywatności LemonShine - informacje o przetwarzaniu danych osobowych podczas korzystania z naszych usług prania tapicerki."
        canonical="https://lemonshine.pl/polityka-prywatnosci"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Polityka Prywatności
              </h1>
              <p className="text-xl text-muted-foreground">
                Informacje o przetwarzaniu danych osobowych przez LemonShine
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  1. Administrator danych
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>Administratorem Twoich danych osobowych jest <strong>LemonShine</strong></p>
                  <p>ul. Józefa Hallera 1/20, 45-867 Opole</p>
                  <p>NIP: 7543359677</p>
                  <p>E-mail: kontakt.lemonshine@gmail.com</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  2. Zakres zbieranych danych
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>W celach realizacji usługi i kontaktu przetwarzamy:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>imię i nazwisko</li>
                    <li>numer telefonu</li>
                    <li>adres e-mail (jeśli podasz)</li>
                  </ul>
                  <p>W celach marketingowych (newsletter) dodatkowo zbieramy Twój adres e-mail za Twoją odrębną zgodą.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  3. Cele i podstawy prawne przetwarzania
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Kontakt i realizacja usług</strong> – na podstawie prawnie uzasadnionego interesu administratora (Art. 6 ust. 1 lit. f RODO) lub umowy (Art. 6 ust. 1 lit. b RODO).</p>
                  <p><strong>Newsletter</strong> – wyłącznie na podstawie dobrowolnej zgody (Art. 6 ust. 1 lit. a RODO).</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  4. Okres przechowywania danych
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Dane kontaktowe:</strong> do momentu zakończenia świadczenia usługi i upływu okresu przedawnienia ewentualnych roszczeń (5 lat).</p>
                  <p><strong>Dane do newslettera:</strong> do czasu wycofania zgody.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  5. Odbiorcy danych
                </h2>
                <p className="text-muted-foreground">
                  Twoje dane mogą być udostępniane podwykonawcom (np. firmie kurierskiej, usługodawcy IT) wyłącznie w zakresie niezbędnym do realizacji usługi.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  6. Pliki cookies i narzędzia analityczne
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Na stronie korzystamy z:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>plików cookies niezbędnych do prawidłowego działania serwisu,</li>
                    <li>Google Analytics (analityka ruchu),</li>
                    <li>wbudowanych narzędzi Tilda (analiza statystyk),</li>
                    <li>opcjonalnie plików cookies marketingowych (jeśli wyrazisz zgodę).</li>
                  </ul>
                  <p>Możesz w każdej chwili zarządzać zgodami na pliki cookies w ustawieniach przeglądarki lub poprzez panel zgód na stronie.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  7. Twoje prawa
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Przysługuje Ci prawo do:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>dostępu do treści swoich danych,</li>
                    <li>sprostowania i usunięcia danych,</li>
                    <li>ograniczenia przetwarzania,</li>
                    <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                    <li>przenoszenia danych,</li>
                    <li>cofnięcia zgody (dot. newslettera) w dowolnym momencie.</li>
                  </ul>
                  <p>W celu realizacji swoich praw skontaktuj się z nami pod adresem kontakt.lemonshine@gmail.com.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  8. Zabezpieczenia
                </h2>
                <p className="text-muted-foreground">
                  Stosujemy środki techniczne i organizacyjne zapewniające ochronę Twoich danych przed nieuprawnionym dostępem, ujawnieniem lub utratą.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  9. Zmiany Polityki Prywatności
                </h2>
                <p className="text-muted-foreground">
                  Zastrzegamy sobie prawo do zmiany niniejszej polityki. O każdej istotnej zmianie poinformujemy na stronie internetowej.
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  Data ostatniej aktualizacji: 26-06-2025
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
