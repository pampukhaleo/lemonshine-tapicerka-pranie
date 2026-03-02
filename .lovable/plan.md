

## Plan: Create "Mycie Okien" (Window Cleaning) Page

The new page will follow the same structure as the Home page, reusing existing components where possible and creating new ones specific to window cleaning.

### Page Structure (7 blocks + header/footer)

1. **Hero** - similar to Home hero with background image, title "Profesjonalne **Mycie Okien**", CTA buttons "Zamów Mycie Okien" + "Zobacz zakres usług"
2. **TrustIndicators** - reuse existing component as-is (0% Ryzyka, Własny sprzęt, Terminowość, Zrobimy to za Ciebie)
3. **WindowPricing** - new component with 3 cards: Umycie jednego okna (30 zł), Umycie obudowy balkonu (20 zł), Mycie paneli szklanych 1m² (10 zł) + minimum order notice + "Zobacz pełny cennik" button
4. **Promotions** - reuse existing component (same promotions apply, text adjusted for "mycie" instead of "sprzątanie")
5. **OrderForm** - reuse existing component
6. **Testimonials** - reuse existing component
7. **FAQ** - new `WindowFAQ` component with window-cleaning-specific questions

### Files to Create
- **`src/pages/MycieOkien.tsx`** - main page, assembles all blocks
- **`src/components/window/WindowPricing.tsx`** - pricing block with 3 service cards (illustration images from screenshots as reference, will use placeholder/icon approach)
- **`src/components/window/WindowFAQ.tsx`** - FAQ specific to window cleaning

### Files to Modify
- **`src/nav-items.tsx`** - add route `/mycie-okien/` pointing to MycieOkien page
- **`src/components/Header.tsx`** - enable "Mycie okien" tab (remove `disabled: true`, set `to: '/mycie-okien/'`)

### Header Navigation Update
The "Mycie okien" tab is currently disabled. It will be enabled and linked to `/mycie-okien/`.

### Hero Section
Will reuse the same pattern as Home hero (background image with overlay), but with window-cleaning text. The uploaded screenshot shows a kitchen/window image - we'll need a hero image or use a gradient fallback initially.

### WindowPricing Component
Based on screenshot 3:
- 3 cards in a row with illustrations/icons
- Each card: title, subtitle, price in green, "Zamów" button
- Minimum order notice (150 zł) below
- "Zobacz pełny cennik" link at bottom

### Promotions
Reuse existing `Promotions` component - the promotions (10% over 300zł, review discount, neighbor discount) apply across services. The description text says "mycie" which matches.

