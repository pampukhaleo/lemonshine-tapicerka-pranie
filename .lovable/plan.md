
## План: добавить/заменить картинки в cennik

### Что вижу
Загружено 10 файлов. Соответствие названиям в `src/data/pricing.ts`:

**Таб Pranie (`pricingItems`)** — заменить `image` на новые:
1. `Pranie_osobnej_poduszki.jpg` → "Pranie osobnej poduszki" (сейчас `/furniture/31.jpg`)
2. `Pranie_fotela_małego.jpg` → "Pranie fotela małego" (сейчас `/furniture/27.jpg`)
3. `Pranie_krzesła_biurowego.jpg` → "Pranie krzesła biurowego" (сейчас `/furniture/24.jpg`)
4. `Pranie_krzesła_tapicerowanego.jpg` → "Pranie krzesła tapicerowanego" (сейчас `/furniture/26.jpg`)
5. `Pranie_krzesła_z_oparciem.jpg` → "Pranie krzesła z oparciem" (сейчас `/furniture/22.jpg`)
6. `Pranie_krzesła.jpg` → "Pranie krzesła" (конференционного, сейчас `/furniture/29.jpg`)

**Таб Sprzątanie (`cleaningPricingItems`)** — перезаписать существующие файлы более качественными:
7. `Czyszczenie_lodówki.jpg` → перезапись `public/cleaning/czyszczenie_lodowki.jpg`
8. `Mycie_piekarnika.jpg` → перезапись `public/cleaning/mycie_piekarnika.jpg`
9. `Mycie_prysznicuwanny.jpg` → перезапись `public/cleaning/mycie_prysznicuwanny.jpg`
10. `Mycie_zmywarki.jpg` → перезапись `public/cleaning/mycie_zmywarki.jpg`

### Что делаем

1. **Скопировать 6 новых картинок мебели** в `public/furniture/` с латинскими именами (без польских символов, чтобы избежать проблем с URL):
   - `pranie_osobnej_poduszki.jpg`
   - `pranie_fotela_malego.jpg`
   - `pranie_krzesla_biurowego.jpg`
   - `pranie_krzesla_tapicerowanego.jpg`
   - `pranie_krzesla_z_oparciem.jpg`
   - `pranie_krzesla.jpg`

2. **Перезаписать 4 файла в `public/cleaning/`** свежими версиями (имена не меняем — `pricing.ts` править не надо).

3. **Обновить `src/data/pricing.ts`** — для 6 позиций мебели заменить пути в поле `image` на новые `/furniture/<имя>.jpg`. Цены, названия, подписи — не трогаем.

### Что НЕ трогаем
- Структуру `Pricing.tsx` и табов
- Цены, названия товаров, подписи
- Остальные позиции в `pricingItems` (наружники, материац, кanapy и т.д.)
- `windowPricingItems`

### Файлы
- `public/furniture/*.jpg` — 6 новых файлов
- `public/cleaning/*.jpg` — 4 перезаписи
- `src/data/pricing.ts` — обновить 6 строк `image`

### После применения
Hard refresh (Ctrl+Shift+R), чтобы браузер подтянул новые картинки вместо закэшированных старых.
