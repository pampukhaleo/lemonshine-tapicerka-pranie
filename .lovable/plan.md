## Zmiany

1. **Naprawić numer telefonu w headerze (`src/components/Header.tsx`)**
   - Desktop: tekst `+48 662 117 883` → `+48 662 117 886` (linia ~136)
   - Mobile: tekst `+48 662 117 883` → `+48 662 117 886` (linia ~199)
   - Atrybuty `href="tel:+48662117886"` są już poprawne, zmieniamy tylko wyświetlany tekst.

2. **Ukryć blok "Cennik sprzątania mieszkania" na stronie Sprzątanie (`src/pages/Home.tsx`)**
   - Zakomentować (nie usuwać) sekcję `<div id="cennik"><CleaningPricing /></div>`.
   - Przycisk "Sprawdź cennik" w hero nadal kieruje na `#cennik` — przekierować go na `/cennik/` lub usunąć kotwicę, żeby nie prowadził w pustkę. **Proponuję:** zmienić link przycisku na `#zamow` (formularz zamówienia), bo strona `/cennik/` ma być ukryta z nawigacji (patrz pkt 3).

3. **Ukryć stronę Cennik z nawigacji (`src/components/Header.tsx`)**
   - Usunąć `{ label: 'Cennik', to: '/cennik/' }` z tablicy `quickLinks` (desktop dropdown + mobile menu znikną automatycznie).
   - Route `/cennik/` w `App.tsx` zostaje — strona dostępna pod bezpośrednim linkiem, tylko niewidoczna w menu.
   - Sprawdzić inne miejsca z linkiem do `/cennik/` (Footer itp.) — **pytanie poniżej**.

## Pytanie

Czy w stopce (Footer) i w innych miejscach (np. linki w treści) też ukryć link do `/cennik/`, czy tylko z górnego menu? Domyślnie zakładam: **tylko z górnej nawigacji**, stopka bez zmian.
