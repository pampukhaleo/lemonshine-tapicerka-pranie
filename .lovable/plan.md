

## Plan: Mobile 2-column cards layout

### Problem
On mobile, card grids in `Services.tsx` and `CleaningPricing.tsx` show 1 card per row (no `grid-cols-2` base class). The `/cennik/` page already has `grid-cols-2` but cards need to be more compact on mobile (smaller padding, text, buttons) as shown in the screenshot.

### Changes

#### 1. `src/components/Services.tsx` (line 30)
- Change `grid md:grid-cols-2 lg:grid-cols-4 gap-8` → `grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8`
- Reduce card padding on mobile: `p-3 md:p-6`
- Smaller image height on mobile: `h-32 md:h-48`
- Smaller text on mobile: title `text-sm md:text-xl`, price `text-lg md:text-2xl`
- Compact button: smaller on mobile

#### 2. `src/components/CleaningPricing.tsx` (line 58)
- Change `grid md:grid-cols-3 gap-6` → `grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6`
- Reduce padding on mobile: `p-3 md:p-6`
- Smaller text on mobile for title and price

#### 3. `src/pages/Pricing.tsx` (lines 100-132)
- Reduce gap on mobile: `gap-3 md:gap-6`
- Reduce card padding on mobile: `p-2 md:p-4`
- Match screenshot style: compact "Zamów →" button with arrow, smaller font sizes on mobile

### Summary
3 files modified. All product card grids become 2 columns on mobile with compact styling.

