The user wants the cookie consent modal to be non-dismissible and centered, with only the "Accept all" and "Settings" buttons visible.

Changes to make in `src/lib/cookieConsent.ts`:

1. Update `guiOptions.consentModal.position` from `"bottom center"` to `"middle center"`.
2. Add `disablePageInteraction: true` at the top level of the `CookieConsent.run(...)` configuration object so the page cannot be interacted with until a choice is made.
3. Remove the Polish translation `acceptNecessaryBtn: "Tylko niezbędne"` from `consentModal`. This will hide the "Only necessary" button in the modal.

After the code change is approved and applied, I will verify the file builds and that the banner renders correctly in the preview (centered, page overlay blocking clicks).