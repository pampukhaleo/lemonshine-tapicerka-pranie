
## План: добавить фото к товарам в табе Sprzątanie на /cennik/

### Что делаем

1. Скопировать 9 загруженных фото в `public/cleaning/` с теми же именами:
   - `mycie_naczyn.jpg`
   - `mycie_mikrofali.jpg`
   - `mycie_piekarnika.jpg`
   - `mycie_okapu.jpg`
   - `sprzatanie_szafek_kuchennych.jpg`
   - `czyszczenie_lodowki.jpg`
   - `sprzatanie_balkonu.jpg`
   - `mycie_zmywarki.jpg`
   - `mycie_prysznicuwanny.jpg`

2. В `src/data/pricing.ts` обновить массив `cleaningPricingItems` — заменить `image: '/placeholder.svg'` на соответствующие пути `/cleaning/<имя>.jpg` для каждой из 9 позиций (соответствие по названию товара).

### Что не трогаем
- Структуру `Pricing.tsx`, табы, цены, подписи.
- Массивы `pricingItems` и `windowPricingItems` — там уже есть свои фото.

### Файлы
- `public/cleaning/*.jpg` (9 новых файлов через lov-copy)
- `src/data/pricing.ts` (обновить 9 строк `image`)
