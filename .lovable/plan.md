## /  (Sprzątanie Wrocław)

1. **Hero**: на десктопе hero-картинка занимает левую половину прямоугольника, текст и кнопки — правую половину (как на 1-м скрине). На мобиле — текст под фоном, как сейчас.
   - Переделать `<section>` в `grid lg:grid-cols-2` с левой колонкой `bg-cover` (heroImg-home.png) и правой колонкой с заголовком, подзаголовком, двумя кнопками. Сохранить кнопки `Zamów sprzątanie` и `Zadzwoń teraz` (tel:+48886344660).

2. **Над формой `OrderForm`** добавить новый компонент `NaszeOpinie` (общий, в `src/components/shared/NaszeOpinie.tsx`):
   - Заголовок `Nasze opinie`.
   - Карточка с логотипом/именем `LemonShine - Sprzątanie Mieszkań i Biur Wrocław`, рейтинг 5.0, кол-во отзывов, ссылка `Zobacz wszystkie opinie w Google`.
   - Сетка из последних 5 отзывов (имя, аватар-инициал, звёзды, текст с line-clamp, дата).
   - Полоса статистики (1500+ / 100% / 5★) в стиле существующего `StatsBar` (lemon→mint градиент).
   - Источник данных: edge function `get-google-reviews`, кеш в памяти 6 ч.

3. **Edge function `get-google-reviews`** (`supabase/functions/get-google-reviews/index.ts`):
   - Деплоится автоматически.
   - Принимает `placeId` (с фронта или из env `GOOGLE_PLACE_ID`).
   - Зовёт `POST https://connector-gateway.lovable.dev/google_maps/places/v1/places/{placeId}` с заголовками `Authorization: Bearer LOVABLE_API_KEY`, `X-Connection-Api-Key: GOOGLE_MAPS_API_KEY`, `X-Goog-FieldMask: id,displayName,rating,userRatingCount,googleMapsUri,reviews`.
   - Возвращает `{ rating, userRatingCount, googleMapsUri, reviews: [...] }`.
   - CORS включён.
   - До получения настоящего Place ID — функция возвращает стат-заглушку (rating 5.0, 52, 3 текста-заглушки) если placeId не задан, чтобы блок не падал.
   - Требует подключения коннектора **Google Maps Platform** через `standard_connectors--connect` и добавления секрета `GOOGLE_PLACE_ID` после того, как пользователь пришлёт ID.

## /pranie-tapicerki/  (Klient.tsx)

1. **Текст под хедером** — компонент `About.tsx`, секция «Najczęstsze problemy» заменить на «Kiedy tapicerka potrzebuje profesjonalnego prania?» (3-й скрин). Сами 4 карточки (Widoczne plamy, Nieprzyjemne zapachy, Kurz i alergeny, Brak efektu) уже совпадают по контенту — только меняем заголовок и убираем подзаголовок. Блок «Nasze rozwiązanie» внутри `About.tsx` остаётся.

2. **Над «Nasze rozwiązanie»** добавить новый блок `CoCzyscimy` (4-й скрин): заголовок `Co czyścimy?`, 3 карточки (Wykładziny i dywany, Tapicerka meblowa, Samochodowa) с фото, описанием и жёлтой CTA `Zapytaj o ofertę` (скролл к `#zamow`). Дизайн взять из `Services.tsx` (`Cennik Prania Tapicerki`) — те же карточки `rounded-xl`, белый фон, изображение `aspect-[4/3]`, заголовок, описание, кнопка lemon. Сам `Services.tsx` (Cennik Prania Tapicerki) **скрыть** в `Klient.tsx`.
   - Картинки: использовать существующие `/cleaning/...` или `/before_after/...`. Если подходящих нет, создать через imagegen (ковёр, диван, автокресло).

3. **Скрыть** `Promotions` в `Klient.tsx`.

4. **Над `Results` (Zobacz Efekt Prania Tapicerki)** добавить новый блок `PranieDlaFirm` (5-й скрин): сетка 2 колонки — слева заголовок `Pranie tapicerki dla firm`, текст про офисы/отели/рестораны/салоны, жёлтая CTA `Zapytaj o ofertę dla firmy`; справа фото (офисный ковёр). Дизайн: lemon-50 фон / closed card в стиле `SprzatanieBiur`-ish, чтобы вписывалось.

5. **В `Results.tsx`**:
   - Заголовок → `Efekty naszej pracy`, описание убрать.
   - Секцию `Opinie naszych klientów` (3 захардкоженные отзыва) **удалить**, вместо неё рендерить тот же компонент `NaszeOpinie` из пункта Sprzątanie.2.
   - Stats-блок снизу оставить как есть.

## Technical section

- New files:
  - `src/components/shared/NaszeOpinie.tsx`
  - `src/components/sprzatanie/HeroSprzatanie.tsx` (вынести hero, чтобы Home.tsx был чище)
  - `src/components/klient/CoCzyscimy.tsx`
  - `src/components/klient/PranieDlaFirm.tsx`
  - `supabase/functions/get-google-reviews/index.ts`
- Edited files:
  - `src/pages/Home.tsx` — заменить inline hero на компонент, вставить `NaszeOpinie` над `OrderForm`.
  - `src/pages/Klient.tsx` — скрыть `Services`/`Promotions`, добавить `CoCzyscimy` (перед `About`'s rozwiązanie?  — фактически между `About` и `Results`), `PranieDlaFirm` перед `Results`. Проще: оставить порядок `Hero → About → CoCzyscimy → PranieDlaFirm → Results → OrderForm → Equipment → Blog → FAQ`. Подтвердите если порядок иной.
  - `src/components/About.tsx` — поменять заголовок секции и убрать подзаголовок (только для /pranie-tapicerki/; так как `About` используется только здесь — правим напрямую).
  - `src/components/Results.tsx` — обновить заголовок, удалить описание, удалить блок тестимониалов.
- Connector: попросим пользователя подключить Google Maps Platform; до этого блок отзывов работает на заглушке.
- Place ID: после получения от пользователя — добавим секрет `GOOGLE_PLACE_ID`.
