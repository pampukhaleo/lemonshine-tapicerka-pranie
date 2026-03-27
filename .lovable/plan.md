

## Plan: Redesign /cennik/ page with 3 tabbed sections

### Overview
Rewrite the Pricing page to have 3 tab sections: **Sprzątanie**, **Pranie tapicerki**, **Mycie okien**. The "Pranie tapicerki" tab uses the existing 15 items with images from `pricingItems`. The other two tabs get placeholder cards for now.

### File changes

#### 1. `src/data/pricing.ts`
Add two new exported arrays:

- **`cleaningPricingItems`** — 3-4 placeholder cards for Sprzątanie (title, price from `apartmentPlans` data, image set to `/placeholder.svg` as stub)
- **`windowPricingItems`** — 3 placeholder cards for Mycie okien (title/price from window data, image set to `/placeholder.svg` as stub)

Keep existing `pricingItems` array untouched — it becomes the Pranie tapicerki data.

#### 2. `src/pages/Pricing.tsx` — Full rewrite

**Structure:**
1. **Hero**: Title "Cennik na usługi sprzątania we Wrocławiu" + subtitle
2. **3 category tabs** (styled buttons, active = yellow/lemon background):
   - **Sprzątanie** — shows `cleaningPricingItems` (placeholder images, you'll add real ones later)
   - **Pranie tapicerki** — shows existing `pricingItems` (all 15 cards with current images)
   - **Mycie okien** — shows `windowPricingItems` (placeholder images)
3. **CTA block**: "Potrzebujesz wyceny?" + button
4. **"Co wpływa na cenę"** section: 4 info cards (Wielkość powierzchni, Stopień zabrudzenia, Zakres prac, Lokalizacja)
5. **OrderForm** component (reuse existing)
6. **FAQ** component (reuse existing)
7. **Footer**

**Tab implementation**: `useState` for active tab. Cards in `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` grid. Each card: image, title, subtitle, price, "Zamów" button linking to order form on page.

**Placeholder cards** for Sprzątanie and Mycie okien will use `/placeholder.svg` — ready to swap when you upload real images.

### Summary
- 2 files modified: `src/data/pricing.ts`, `src/pages/Pricing.tsx`
- All current pricing card images stay in the "Pranie tapicerki" tab
- Other two tabs get stub cards with placeholder images

