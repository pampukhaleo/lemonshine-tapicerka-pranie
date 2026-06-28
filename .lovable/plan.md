2 quick edits on the Pranie Tapicerki page:

1. Order form title: change "Zamów Sprzątanie" to "Zamów pranie" in `src/components/OrderForm.tsx`.

2. Hero image adjustments in `src/components/Hero.tsx`:
- Hide the image on mobile (`hidden lg:flex` instead of `block`).
- Make it larger on desktop by widening its absolute wrapper from `lg:w-1/2` to `lg:w-[55%]` (or similar).
- Keep it anchored top-right (`lg:absolute lg:right-0 lg:top-0 lg:bottom-0`) and use `object-cover`/`object-bottom` so the person fills the available height.
- Preserve text readability by keeping the content column with `lg:min-h-[520px]` and `relative z-10`.

After edits, visually check the desktop hero so the image is bigger/stretched and no longer appears below the heading on mobile.