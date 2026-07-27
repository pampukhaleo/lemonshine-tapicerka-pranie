import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    dataLayer: any[];
    clarity?: (...args: any[]) => void;
  }
}

const gtag = (...args: any[]) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

const CAT_NECESSARY = 'necessary';
const CAT_ANALYTICS = 'analytics';
const CAT_ADVERTISEMENT = 'advertisement';

function updateGtagConsent() {
  const analytics = CookieConsent.acceptedCategory(CAT_ANALYTICS);
  const ads = CookieConsent.acceptedCategory(CAT_ADVERTISEMENT);

  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads ? 'granted' : 'denied',
    ad_user_data: ads ? 'granted' : 'denied',
    ad_personalization: ads ? 'granted' : 'denied',
  });

  if (ads) {
    window.dataLayer.push({ event: 'consent_advertisement_granted' });
  }
  if (analytics) {
    window.dataLayer.push({ event: 'consent_analytics_granted' });
  }
}

function updateClarityConsent() {
  const granted = CookieConsent.acceptedCategory(CAT_ANALYTICS);
  setTimeout(() => {
    if (typeof window.clarity === 'function') {
      window.clarity('consent', granted);
    }
  }, 1000);
}

let initialized = false;

export function initCookieConsent() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  CookieConsent.run({
    autoShow: false,

    onFirstConsent: () => {
      updateGtagConsent();
      updateClarityConsent();
    },
    onConsent: () => {
      updateGtagConsent();
      updateClarityConsent();
    },
    onChange: () => {
      updateGtagConsent();
      updateClarityConsent();
    },

    categories: {
      [CAT_NECESSARY]: {
        enabled: true,
        readOnly: true,
      },
      [CAT_ANALYTICS]: {
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' },
            { name: '_clsk' },
            { name: '_clck' },
          ],
        },
      },
      [CAT_ADVERTISEMENT]: {
        autoClear: {
          cookies: [{ name: /^_gcl/ }],
        },
      },
    },

    guiOptions: {
      consentModal: {
        layout: 'box wide',
        position: 'bottom center',
        flipButtons: true,
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: 'box',
        flipButtons: false,
        equalWeightButtons: true,
      },
    },

    language: {
      default: 'pl',
      translations: {
        pl: {
          consentModal: {
            title: 'Używamy plików cookie!',
            description:
              'Chcemy, aby korzystanie z naszej strony było dla Ciebie wygodne i bezproblemowe. Używamy plików cookies, które pomagają nam dostosować treści i reklamy do Twoich zainteresowań. Szczegóły znajdziesz w naszej <a href="/polityka-prywatnosci/">polityce prywatności</a>.',
            acceptAllBtn: 'Zgadzam się',
            acceptNecessaryBtn: 'Tylko niezbędne',
            showPreferencesBtn: 'Ustawienia',
          },
          preferencesModal: {
            title: 'Zaawansowane ustawienia plików cookie',
            acceptAllBtn: 'Wyrażam zgodę',
            acceptNecessaryBtn: 'Nie wyrażam zgody',
            savePreferencesBtn: 'Zapisz ustawienia',
            closeIconLabel: 'Zamknij',
            sections: [
              {
                title: 'Niezbędne pliki cookie',
                description:
                  'Te pliki są niezbędne, aby nasza strona działała prawidłowo. Dane z nich są używane do poprawy bezpieczeństwa i wykrywania błędów.',
                linkedCategory: CAT_NECESSARY,
              },
              {
                title: 'Cookies analityczne',
                description:
                  'Analityczne pliki cookie umożliwiają nam rozpoznanie i zliczenie liczby osób odwiedzających naszą stronę, sprawdzenie w jaki sposób się po niej poruszają oraz rejestrowanie treści, które oglądają.',
                linkedCategory: CAT_ANALYTICS,
                cookieTable: {
                  headers: {
                    name: 'Nazwa',
                    domain: 'Serwis',
                    description: 'Opis',
                    expiration: 'Wygasa',
                  },
                  body: [
                    {
                      name: '_ga',
                      domain: 'Google Analytics',
                      description: 'Główny plik cookie Google Analytics służący do rozróżniania użytkowników.',
                      expiration: 'Po 2 latach',
                    },
                    {
                      name: '_gid',
                      domain: 'Google Analytics',
                      description: 'Rejestruje unikalny identyfikator, który służy do generowania danych statystycznych.',
                      expiration: 'Po 24 godzinach',
                    },
                  ],
                },
              },
              {
                title: 'Cookies reklamowe',
                description:
                  'Reklamowe pliki cookie służą do wyświetlania spersonalizowanych reklam i mierzenia skuteczności kampanii Google Ads oraz remarketingu.',
                linkedCategory: CAT_ADVERTISEMENT,
                cookieTable: {
                  headers: {
                    name: 'Nazwa',
                    domain: 'Serwis',
                    description: 'Opis',
                    expiration: 'Wygasa',
                  },
                  body: [
                    {
                      name: '_gcl_*',
                      domain: 'Google Ads',
                      description: 'Służy do mierzenia skuteczności kampanii reklamowych Google Ads.',
                      expiration: 'Po 90 dniach',
                    },
                  ],
                },
              },
              {
                title: 'Więcej informacji',
                description:
                  'Po szczegółowe informacje zajrzyj do naszej <a href="/polityka-prywatnosci/">polityki prywatności</a>.',
              },
            ],
          },
        },
      },
    },
  }).then(() => {
    setTimeout(() => CookieConsent.show(), 800);
  });
}

export function showCookiePreferences() {
  CookieConsent.showPreferences();
}
