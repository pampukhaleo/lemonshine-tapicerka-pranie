

## Plan: Update pricing data and titles

### Changes in `src/data/cleaning-pricing.ts`:

1. Update `apartmentPlans` array:
   - "Jednopokojowe" → "Mieszkanie <40m²", basePrice: 198.90 → 248.90
   - "Dwupokojowe" → "Mieszkanie <60m²", basePrice: 253.90 → 298.90
   - "Trzypokojowe" → "Mieszkanie <80m²", basePrice: 308.90 → 348.90

These are the base prices (Jednorazowo, discount=0). The frequency discounts will automatically apply to the new base prices.

No other files need changes — `CleaningPricing.tsx` renders titles and prices dynamically from this data.

