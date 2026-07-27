# Cookie Consent & Google Consent Mode Implementation

## What was changed

1. **Installed the cookie consent library**
   - Added `vanilla-cookieconsent` to the project dependencies.

2. **Added Google Consent Mode defaults in `index.html`**
   - Inserted the Consent Mode default command before the GTM loader.
   - Default state: `ad_storage: 'denied'`, `analytics_storage: 'denied'`, `ad_user_data: 'denied'`, `ad_personalization: 'denied'`.
   - This ensures no marketing/analytics cookies are set until the user gives consent.

3. **Created the cookie consent configuration file**
   - File: `src/lib/cookieConsent.ts`
   - Configured the banner in Polish with the categories required by the provided instruction:
     - **Necessary** (always active, cannot be disabled)
     - **Analytics** (Google Analytics / statistics)
     - **Marketing** (Google Ads / remarketing / conversions)
     - **Personalization**
   - Added detailed descriptions for each category so users understand what they are accepting.
   - Included a "Read more" link to the privacy policy.

4. **Initialized the cookie consent banner**
   - Updated `src/App.tsx` to import and initialize the consent manager on application start.
   - The banner appears automatically for new visitors and reads the saved preference on return visits.

5. **Updated the footer**
   - Replaced the static "Cookies" text/link in `src/components/Footer.tsx` with a button labeled **"Ustawienia cookies"**.
   - Clicking the button reopens the cookie preferences modal.

6. **Consent-to-GTM integration**
   - When the user accepts or rejects a category, the consent state is pushed to the `dataLayer` using `gtag('consent', 'update', {...})`.
   - GTM can now conditionally fire Google Analytics, Google Ads, and remarketing tags based on the actual consent choice.

## Important note for full Google Ads / GA4 compliance

The code changes above are complete. However, the GTM container (`GTM-KCSB3GVG`) must also be configured in the Google Tag Manager UI to respect Consent Mode:
- Tags for Google Analytics, Google Ads, and remarketing should use the built-in consent checks.
- They should be blocked when `analytics_storage` or `ad_storage` is `denied`.
- This final step is done inside the GTM web interface, not in the website code.
