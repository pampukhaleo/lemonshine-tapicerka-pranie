## Problem
The hero image on `/pranie-tapicerki/` is a transparent WebP, but it's rendered with `rounded-2xl shadow-lg` and a max-width container, which creates a visible card/box around it.

## Changes (src/components/Hero.tsx)
- Remove `rounded-2xl shadow-lg` from the `<img>` className so the transparent background blends with the section gradient.
- Remove `mb-4` and tighten max-width so the figure feels anchored next to the heading rather than floating in a square.
- Keep `loading="eager"`, `fetchPriority="high"`, alt text, and dimensions intact.

No other components, routes, or styles are touched.