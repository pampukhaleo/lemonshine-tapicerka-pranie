## Цель
Добавить блок «Cennik sprzątania mieszkania» (компонент `CleaningPricing`) на страницу `/cennik`, разместив его **над табами** Sprzątanie / Pranie tapicerki / Mycie okien — всегда видимый, независимо от выбранной вкладки.

## Изменения

**`src/pages/Pricing.tsx`**
- Импортировать `CleaningPricing` из `@/components/CleaningPricing`.
- Вставить `<CleaningPricing />` сразу после Hero-секции и перед секцией с табами и карточками услуг.
- Блок будет идентичен главной: 4 таба частоты (-20% / -15% / -10% / Jednorazowo) и 3 карточки квартир с динамическим расчётом цены.

## Что НЕ меняется
- Сам компонент `CleaningPricing` и данные `cleaning-pricing.ts` остаются как есть (общий источник).
- Логика табов услуг, sticky-поведение, FAQ, форма заказа — без изменений.
