

## Plan: Edit Mycie Okien page

### 1. WindowHero.tsx — Update text
- Title: "Profesjonalne **mycie okien**" (remove "bez smug i zacieków")
- Description: "Dokładnie myjemy okna w mieszkaniach, domach i obiektach firmowych."

### 2. WindowPricing.tsx — Update description
- Change line 51 description to: "Sprawdź cennik na mycie okien i zamów usługę już teraz!"

### 3. Add StatsBar under Testimonials
- In `MycieOkien.tsx`, import `StatsBar` and place it after `<Testimonials />`, before `<WindowFAQ />`
- The existing `StatsBar` component already matches the screenshot (1500+, 100%, 5★)

### 4. WindowFAQ.tsx — Replace FAQ content
Replace all questions with the 4 provided:
1. Czy potrzebuję mieć własny sprzęt lub chemię? → Nie, przyjeżdżamy z własnym...
2. Czy myjecie okna z obu stron? → Tak, myjemy okna z obu stron...
3. Czy usuwacie zabrudzenia znajdujące się wewnątrz okna oraz na ramach? → Tak, czyścimy nie tylko...
4. Jakie są dostępne formy płatności? → Akceptujemy płatność gotówką...

Also update the FAQ JSON-LD in `MycieOkien.tsx` to match.

### Files to modify
- `src/components/window/WindowHero.tsx`
- `src/components/window/WindowPricing.tsx`
- `src/components/window/WindowFAQ.tsx`
- `src/pages/MycieOkien.tsx`

