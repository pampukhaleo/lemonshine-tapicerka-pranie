## Goal
Make the hero image sit visually closer to the heading/text on `/pranie-tapicerki/`, matching the reference (person overlaps the text column edge, no big gap).

## Changes (src/components/Hero.tsx)
- Reduce the grid gap on the hero row (`gap-12` → `gap-4 lg:gap-0`) so columns sit tight.
- Make the image bigger and flush-left within its column: drop `mx-auto`, allow `lg:max-w-none w-full`, and add a negative left margin on desktop (`lg:-ml-12`) so the figure overlaps toward the text.
- Keep transparent background (no shadow/rounded).