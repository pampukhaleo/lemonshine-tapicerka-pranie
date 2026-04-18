
## План: Привести `/cennik/` в соответствие со списком

### Что меняем

**`src/data/pricing.ts`** — переписываем три массива под точный список пользователя.

#### 1. `cleaningPricingItems` (Sprzątanie) — ПОЛНОСТЬЮ заменить
Сейчас там 4 пакета по метражу — они не соответствуют списку. Заменяем на 9 позиций:
- Mycie naczyń (leżące w umywalce) — 20 zł
- Mycie mikrofali — 15 zł
- Mycie piekarnika — 10–60 zł
- Mycie okapu — 10–60 zł
- Sprzątanie szafek kuchennych — 10–40 zł
- Czyszczenie lodówki — 50 zł
- Sprzątanie balkonu — 10 zł
- Mycie zmywarki — 20–50 zł
- Mycie prysznicu/wanny — 20–60 zł

Все с `image: '/placeholder.svg'` (фото для уборки в проекте нет — пользователь сможет потом добавить). `popular: true` для первых 3.

#### 2. `pricingItems` (Pranie tapicerki) — обновить цены/подписи
Сравнение с текущими:
| Позиция | Было | Станет |
|---|---|---|
| 3-osobowa kanapa | 220 | **230** |
| Fotel duży | 60+ | **100** |
| Element rozkładany | 40 | **50** |
| Osobna poduszka | 20 | **30+** |
| Krzesło z oparciem | 40 | **40** (добавить subtitle "okrągłe") |
| Kanapa U | 350+ | **350+** (добавить subtitle "duża") |

Остальные (2-os kanapa 200, narożnik 250/300+, materac 250+, krzesło konferencyjne 30, tapicerowane 20, fotel mały 50, biurowe 30, wykładzina 15-20) — без изменений или уже совпадают. Materac уже 200+ → меняем на **250+**.

#### 3. `windowPricingItems` (Mycie okien) — ПОЛНОСТЬЮ заменить
Сейчас 4 общих пакета. Заменяем на 3 точные позиции:
- Mycie okna — 25–50 zł
- Umycie obudowy balkonu (szyby) — od 20 zł
- Mycie paneli szklanych — 20 zł / 1 m²

Изображения: использовать `/window/window-1.jpg`, `/window/window-2.jpg`, `/window/window-3.jpg` (они уже есть в проекте, см. `WindowPricing.tsx`).

### Что НЕ трогаем
- Структуру табов в `Pricing.tsx` — она уже корректная.
- `cleaning-pricing.ts` (apartmentPlans) — это отдельная логика для калькулятора метража на другой странице, не связана с табом «Sprzątanie» в `/cennik/`.
- JSON-LD — он автоматом подхватит новые данные из `pricingItems`.
- Минимум 150 zł и блок «Co wpływa na cenę» — без изменений.

### Файлы
- `src/data/pricing.ts` — единственное изменение.
