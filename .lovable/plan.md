

# Редизайн главной страницы + маршрут /pranie-tapicerki/

## Обзор

Полная переделка главной страницы (`/`) по макетам и добавление маршрута `/pranie-tapicerki/`, ведущего на текущую страницу Klient.

## Новые файлы

### 1. `src/data/cleaning-pricing.ts` -- данные для ценника спrzатания
Базовые цены (при "Jednorazowo") и множители скидок:
- Jednopokojowe: 248.63 zl (при -20% = 198.90)
- Dwupokojowe: 317.38 zl (при -20% = 253.90)
- Trzypokojowe: 386.13 zl (при -20% = 308.90)

Табы: Raz w tygodniu (-20%), Raz na dwa tygodnie (-15%), Raz na miesiac (-10%), Jednorazowo (0%)

### 2. `src/components/TrustIndicators.tsx`
4 иконки в ряд: 0% Ryzyka, Wlasny sprzet i chemia, Terminowosc, Zrobimy to za Ciebie

### 3. `src/components/CleaningPricing.tsx`
Секция "Cennik sprzatania mieszkania" с табами частоты и 3 карточками цен. useState для выбранной частоты, динамический пересчет цен.

### 4. `src/components/CleaningChecklist.tsx`
Секция "Co obejmuje sprzatanie mieszkania?" -- 12 пунктов в 2 колонки с иконками

### 5. `src/components/AdditionalServices.tsx`
Секция "Dodatkowe uslugi" -- 4 карточки с фото из pricing.ts:
- Pranie kanapy (200 zl), фото /furniture/23.jpg
- Pranie naroznika (250 zl), фото /furniture/34.jpg
- Pranie materaca (200+ zl), фото /furniture/35.jpg
- Pranie wykladziny (15-20 zl/m2), фото /furniture/wykladzina.jpg

Кнопка "Zobacz pelna liste" ведет на /cennik/

### 6. `src/components/Testimonials.tsx`
3 отзыва: Anna Kowalska (Opole), Piotr Nowak (Opole), Maria Wisniewska (Brzeg)

### 7. `src/components/StatsBar.tsx`
Полоса: 1500 wykonanych uslug, 500+ zadowolonych klientow, 100%/98%, 24h czas reakcji, 5 srednia ocen Google

## Измененные файлы

### 8. `src/pages/Home.tsx` -- полная переделка
Новая структура:
1. Header (variant="home", обновленный)
2. Hero -- фоновое фото /heroImg.webp с желтоватым оверлеем, заголовок "Sprzatanie Wroclaw", 2 CTA кнопки
3. TrustIndicators
4. CleaningPricing
5. CleaningChecklist
6. AdditionalServices
7. Promotions (существующий компонент, добавить подзаголовок "na sprzataniu mieszkania")
8. Testimonials
9. StatsBar
10. OrderForm (существующий, заголовок "Zamow Sprzatanie / Zamow Pranie Tapicerki")
11. FAQ (существующий)
12. Footer (существующий)

### 9. `src/components/Header.tsx`
- Убрать dropdown "Kim jestes?" 
- Добавить табы услуг в навигации: Sprzatanie (`/`), Pranie tapicerki (`/pranie-tapicerki/`), Mycie okien (неактивно)
- Для варианта home: показать табы + телефон + "Zamow Nasze Uslugi"
- Мобильное меню обновить аналогично

### 10. `src/nav-items.tsx`
- Добавить маршрут `/pranie-tapicerki/` рендерящий `<Klient />`
- Старый маршрут `/klient/` оставить для обратной совместимости

## Порядок реализации

1. Создать `cleaning-pricing.ts`
2. Создать новые компоненты (TrustIndicators, CleaningPricing, CleaningChecklist, AdditionalServices, Testimonials, StatsBar)
3. Обновить Header.tsx -- табы услуг
4. Переписать Home.tsx
5. Обновить nav-items.tsx -- добавить /pranie-tapicerki/

