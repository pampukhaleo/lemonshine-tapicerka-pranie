
# Plan: Redesign Mycie Okien page

Привести страницу `/mycie-okien/` к структуре со скриншота. Hero оставляем как есть.

## Новая структура секций (в порядке сверху вниз)

1. `WindowHero` — без изменений
2. **Co myjemy?** — новый блок (3 карточки в стиле `CoCzyscimy`)
3. **Jak myjemy?** — новый блок (3 пункта с иконками слева, текст справа)
4. **Mycie okien dla firm Wrocław** — новый блок (по образцу `SprzatanieBiur`, 3 иконки + CTA)
5. **Dlaczego LemonShine?** — новый/переиспользуемый блок (короткий текст по центру + декоративная иллюстрация)
6. **Co mówią nasi klienci** — `NaszeOpinie` (Google reviews + статистика 1500+/100%/5★)
7. **Zamów Sprzątanie** — `OrderForm`
8. **Контакты в 3 колонки**: Telefon / Godziny pracy / Obszar działania
9. **FAQ** — `WindowFAQ`

Убираем со страницы: `TrustIndicators`, `WindowPricing`, `Promotions`, `Testimonials`, `StatsBar` (статистика теперь внутри `NaszeOpinie`).

## Новые файлы

- `src/components/window/CoMyjemy.tsx` — 3 карточки:
  - Mycie okien zewnętrznych — «Mieszkania, domy i biurowce do 4 piętra. Myjemy metodą WFP (woda demineralizowana — bez detergentów). Idealne dla okien bez smug, bez zhalow, bez ryzyka.»
  - Mycie witryn sklepowych — «Stały grafik — codziennie/co tydzień lub miesięcznie. Czysta witryna to pierwsze wrażenie Twojego sklepu.»
  - Mycie paneli fotowoltaicznych — «Brudne panele tracą nawet 30% wydajności. Myjemy wodą demineralizowaną — panele wracają do pełnej mocy.»
  - Стиль: те же карточки что в `CoCzyscimy` (lemon-50, фото 4:3, кнопка `Zapytaj o ofertę`). Картинки — пока placeholder из `public/window/window-1.jpg`...`window-3.jpg`, потом заменим при необходимости.

- `src/components/window/JakMyjemy.tsx` — 3 строки с круглой иконкой слева (Lucide: `Droplets`, `ArrowUp`/`Ruler`, `Wrench`), заголовок + описание:
  - Metoda WFP — czysta woda, zero detergentów
  - Zasięg do 11,5 metra
  - Tradycyjne mycie wewnątrz

- `src/components/window/MycieDlaFirm.tsx` — копия структуры `SprzatanieBiur` (3 крупные иконки + подписи + CTA `Zapytaj o ofertę dla firmy`). Переиспользуем уже подгруженные ассеты `staly-grafik.webp`, `faktura-vat.webp`, `umowa-poufnosc.webp`. Текст: «Obsługujemy sklepy, restauracje, biura, hotele, obiekty usługowe i inne obiekty. Stały grafik, faktura VAT, umowa. Przyjeżdżamy rano przed otwarciem, wieczorem po zamknięciu, lub o innej dogodnej godzinie — bez zakłócania Twojej pracy.»

- `src/components/window/DlaczegoMycie.tsx` — короткая центрированная секция «Dlaczego LemonShine?» с текстом «Dokładność to nasz standard. Woda demineralizowana, czyste narzędzia, każdy centymetr szyby — ramy, uszczelki, parapet. Pracujemy tak przy każdym wyjeździe, bo stawiamy na stałą współpracę, nie jednorazowe zlecenia.» + та же декоративная SVG-волна снизу что в hero (мягкий переход).

- `src/components/window/KontaktyInfo.tsx` — 3 колонки на lemon-50 фоне с иконками `Phone` / `Clock` / `MapPin`:
  - Telefon — +48 662 117 886 (tel: link)
  - Godziny pracy — Pn-Nd: 8:00–20:00
  - Obszar działania — Wrocław (20 km)

## Изменения в существующих файлах

- `src/pages/MycieOkien.tsx`:
  - Убрать импорты и рендер: `TrustIndicators`, `WindowPricing`, `Promotions`, `Testimonials`, `StatsBar`.
  - Добавить новые: `CoMyjemy`, `JakMyjemy`, `MycieDlaFirm`, `DlaczegoMycie`, `NaszeOpinie`, `KontaktyInfo`.
  - Порядок в `<main>`: Hero → CoMyjemy → JakMyjemy → MycieDlaFirm → DlaczegoMycie → NaszeOpinie → OrderForm → KontaktyInfo → WindowFAQ.

SEO/JSON-LD остаются как есть.

## Что НЕ трогаем

- `WindowHero` — оставляем последнее согласованное состояние.
- `WindowFAQ`, `OrderForm`, `NaszeOpinie` — без изменений.
- Глобальный дизайн-токены, цвета, шрифты — без изменений.
