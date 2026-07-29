import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    dataLayer: any[];
    clarity?: (...args: any[]) => void;
  }
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

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

type ConsentAction =
  | 'accept_all'
  | 'accept_necessary'
  | 'show_preferences'
  | 'save_preferences'
  | 'change'
  | 'first_consent';

function trackConsentClick(action: ConsentAction) {
  try {
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/log-consent`;
    const payload = JSON.stringify({
      action,
      categories: CookieConsent.getUserPreferences()?.acceptedCategories ?? [],
      page_url: window.location.href,
      referrer: document.referrer || undefined,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' });
      const ok = navigator.sendBeacon(url, blob);
      if (ok) return;
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
      },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* silent */
  }
}

function attachConsentClickListeners() {
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const btn = target.closest('[data-role]') as HTMLElement | null;
      if (!btn) return;
      const inBanner = btn.closest('#cc-main, .cm, .pm');
      if (!inBanner) return;
      const role = btn.getAttribute('data-role');
      switch (role) {
        case 'all':
        case 'accept-all':
          trackConsentClick('accept_all');
          break;
        case 'necessary':
        case 'accept-necessary':
          trackConsentClick('accept_necessary');
          break;
        case 'show':
        case 'show-preferences':
          trackConsentClick('show_preferences');
          break;
        case 'save':
        case 'save-preferences':
          trackConsentClick('save_preferences');
          break;
      }
    },
    true,
  );
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
      trackConsentClick('first_consent');
    },
    onConsent: () => {
      updateGtagConsent();
      updateClarityConsent();
    },
    onChange: () => {
      updateGtagConsent();
      updateClarityConsent();
      trackConsentClick('change');
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
    attachConsentClickListeners();
    setTimeout(() => CookieConsent.show(), 1000);
  });
}

export function showCookiePreferences() {
  CookieConsent.showPreferences();
}
