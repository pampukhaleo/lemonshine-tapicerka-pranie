## Goal
Enlarge hero image and position flush to top-right of section, extending beyond bottom padding — matching reference where person's head touches the top and image is significantly larger.

## Changes (src/components/Hero.tsx)
- Section: reduce `pb-16` to `pb-0 lg:pb-0` so the image bottom aligns with section edge.
- Image column: position absolutely on desktop, anchored top-right of the section. Use `lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2` wrapper.
- Image: scale up to fill the wrapper height (`lg:h-full lg:w-auto lg:ml-auto`), remove left negative margin.
- Keep mobile layout intact (image below text, centered).
- Ensure text column keeps min height (`lg:min-h-[520px]`) so absolute image has room.