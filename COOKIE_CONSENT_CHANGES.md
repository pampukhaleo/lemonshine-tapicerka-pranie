# Cookie Consent & Google Consent Mode Implementation

## Summary

This document lists every code change made to implement cookie consent and Google Consent Mode v2 on `lemonshine.pl`. It is intended for comparison with the external instruction PDF.

## What was changed

### 1. Installed the cookie consent library

- Added `vanilla-cookieconsent` (v3) to the project dependencies.
- Imported the library CSS in `src/lib/cookieConsent.ts`.

### 2. Added Google Consent Mode defaults in `index.html`

- Inserted a `gtag('consent', 'default', ...)` command **before** the Google Tag Manager loader script.
- Default state for all consent signals is `'denied'`:
  - `ad_storage: 'denied'`
  - `analytics_storage: 'denied'`
  - `ad_user_data: 'denied'`
  - `ad_personalization: 'denied'`
- Added `wait_for_update: 500` to give the consent banner time to load before GTM fires tags.
- This ensures no analytics or marketing cookies are set until the user explicitly grants consent.

### 3. Created the cookie consent configuration file

- File: `src/lib/cookieConsent.ts`
- Configured the banner in Polish with three consent categories:
  - **necessary** — always active, read-only, cannot be disabled.
  - **analytics** — Google Analytics / statistics.
  - **advertisement** — Google Ads, remarketing, conversion measurement.
- Added `autoClear` cookie rules so that revoked consent deletes the relevant cookies automatically:
  - Analytics: `_ga`, `_gid`, `_clsk`, `_clck`
  - Advertisement: `_gcl_*`
- Added detailed Polish descriptions for each category and a cookie table in the preferences modal.
- Included a link to the local privacy policy: `/polityka-prywatnosci/`.
- Configured the banner GUI:
  - Consent modal: `box wide`, bottom center, flipped buttons, equal weight.
  - Preferences modal: `box`, equal weight buttons.
- Banner buttons:
  - Main modal: `Zgadzam się`, `Tylko niezbędne`, `Ustawienia`.
  - Preferences modal: `Wyrażam zgodę`, `Nie wyrażam zgody`, `Zapisz ustawienia`.

### 4. Initialized the cookie consent banner

- Updated `src/App.tsx` to import and call `initCookieConsent()` on application start.
- The banner auto-shows after a short delay for new visitors and restores saved preferences for returning visitors.

### 5. Updated the footer

- Replaced the static "Cookies" link in `src/components/Footer.tsx` with a button labeled **"Ustawienia cookies"**.
- Clicking the button calls `CookieConsent.showPreferences()` and reopens the consent preferences modal.

### 6. Connected consent choices to Google Consent Mode

- On `onFirstConsent`, `onConsent`, and `onChange` the configuration calls `updateGtagConsent()`.
- `updateGtagConsent()` reads the user's accepted categories and pushes:
  ```js
  gtag('consent', 'update', {
    analytics_storage: <granted|denied>,
    ad_storage: <granted|denied>,
    ad_user_data: <granted|denied>,
    ad_personalization: <granted|denied>,
  });
  ```
- Also pushes custom Data Layer events for downstream GTM triggers:
  - `consent_advertisement_granted`
  - `consent_analytics_granted`
- GTM can now conditionally fire Google Analytics, Google Ads, and remarketing tags based on the user's actual consent choice.

### 7. Added Microsoft Clarity consent handling

- Added `updateClarityConsent()` in `src/lib/cookieConsent.ts`.
- When the analytics category is accepted/revoked, it calls `window.clarity('consent', true|false)` after a short delay so the Clarity script is already loaded.
- `_clck` and `_clsk` cookies are included in the analytics `autoClear` list.

### 8. Added consent action logging (audit trail)

- Created a new Supabase Edge Function: `supabase/functions/log-consent/index.ts`.
- Created a new table `public.consent_logs` to store every consent-related action.
- The edge function records:
  - `action` (`accept_all`, `accept_necessary`, `show_preferences`, `save_preferences`, `change`, `first_consent`)
  - `categories` accepted at that moment
  - `page_url` and `referrer`
  - `user_agent` and IP address
- The client sends these events asynchronously via `navigator.sendBeacon` (fallback to `fetch` with `keepalive`).
- Listener is attached to clicks inside the banner to detect which button was pressed (`accept_all`, `accept_necessary`, `show_preferences`, `save_preferences`).
- This provides a backend audit trail equivalent to the consent-tracking requirement in the instruction.

## Comparison with the instruction PDF

| Requirement from instruction | Implementation status |
|---|---|
| Google Consent Mode default `denied` before GTM | ✅ Implemented in `index.html` |
| Consent signals: `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` | ✅ Implemented |
| Consent update on accept/change/reject | ✅ Implemented via `gtag('consent', 'update', ...)` |
| Modal with necessary, analytics, and advertisement categories | ✅ Implemented (`necessary`, `analytics`, `advertisement`) |
| Polish translations | ✅ Implemented |
| Detailed category descriptions and cookie table | ✅ Implemented |
| Re-open preferences from footer | ✅ Implemented |
| Microsoft Clarity consent control | ✅ Implemented |
| Backend logging of consent actions | ✅ Implemented via Supabase Edge Function (`log-consent`) and `public.consent_logs` table |
| Joomla-specific `/index.php?option=com_ajax&plugin=consent_tracking` endpoint | ❌ Not applicable — this site is not built on Joomla. Replaced with the equivalent Supabase Edge Function. |

## Important note for full Google Ads / GA4 compliance

The code changes above are complete. However, the GTM container (`GTM-KCSB3GVG`) must also be configured in the Google Tag Manager UI to respect Consent Mode:

- Tags for Google Analytics, Google Ads, and remarketing should use the built-in consent checks.
- They should be blocked when `analytics_storage` or `ad_storage` is `denied`.
- The custom events `consent_analytics_granted` and `consent_advertisement_granted` can be used as triggers for optional consent-based tags.
- This final step is done inside the GTM web interface, not in the website code.
