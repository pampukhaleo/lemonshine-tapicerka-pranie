# Чому сторінки не індексуються — діагностика

## Що показав GSC
- **Discovered – currently not indexed (2):** `/biznes/`, `/outsourcing/`
- **Crawled – currently not indexed (4):** `/blog/`, `/cennik/`, `/blog/czy-warto-samemu-prac-tapicerke-meblowa/`, `/blog/rodzaje-plam-na-tapicerce-jak-sobie-z-nimi-poradzic/`
- Indexed: 9 сторінок

Усі ці URL-и **повинні** індексуватися — це ключові комерційні та контентні сторінки. Це не нормальна ситуація.

## Знайдена причина (критично)

Я перевірив, що віддає сервер на кожен URL (`curl` без JS — саме так бачить Googlebot при першому проході):

| URL | Розмір відповіді | `<title>` | `canonical` |
|---|---|---|---|
| `/` | 75630 B | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/biznes/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/outsourcing/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/pranie-tapicerki/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/mycie-okien/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/cennik/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |
| `/blog/` | **75630 B** | Lemonshine - Sprzątanie Wrocław | `https://lemonshine.pl/` |

**Кожен URL віддає байт-у-байт ідентичний HTML головної сторінки**, з canonical-тегом, що вказує на `/`. Тобто Google бачить усі підсторінки як **дублі головної з явним сигналом «канонічна — це /»**, і коректно відмовляється їх індексувати окремо.

Те, що *хоч щось* проіндексовано (9 сторінок), — це тому, що Googlebot інколи виконує JS і бачить справжній контент, але canonical→/ все одно перешкоджає.

## Чому так сталося

У проєкті стоїть `vite-react-ssg` (build-команда `vite-react-ssg build`), яка має генерувати окремі HTML-файли для кожного маршруту (`dist/biznes/index.html`, `dist/blog/index.html` тощо) з правильними тегами через `react-helmet-async`. На live-сайті цих файлів немає — на будь-який шлях віддається `dist/index.html` з головної.

Можливі причини:
1. Lovable hosting публікує не результат `npm run build` (SSG), а звичайний `vite build`, який віддає тільки SPA-shell.
2. SSG будується, але `vite-react-ssg` не знаходить маршрути (через структуру `routes` у `src/App.tsx`) і генерує тільки `/`.
3. Hosting/CDN перехоплює всі шляхи й завжди віддає кореневий `index.html`.

Окремо: `scripts/create-404.js` копіює `dist/index.html` у `dist/404.html` для GitHub Pages SPA-fallback — тобто проєкт спочатку був задуманий під gh-pages, але зараз публікується через Lovable.

## Що пропоную зробити

### Крок 1. Підтвердити, що збирає Lovable hosting
Запустити локально `npm run build` і подивитися, чи з'являються файли:
- `dist/biznes/index.html`
- `dist/outsourcing/index.html`
- `dist/blog/index.html`
- `dist/cennik/index.html`
- `dist/blog/czy-warto-samemu-prac-tapicerke-meblowa/index.html` тощо

Якщо так — проблема в hosting (треба писати в Lovable support, бо вони сервлять `/index.html` замість `dist/<route>/index.html`).
Якщо ні — проблема в конфігурації `vite-react-ssg` (треба фіксити її).

### Крок 2. Залежно від результату
- **Якщо SSG не генерує per-route HTML** — налаштувати `vite-react-ssg` (entry, routing, getStaticPaths для блогу вже є).
- **Якщо генерує, але hosting не сервить** — або (а) звернутися в підтримку Lovable, або (б) перевести на gh-pages (вже все готово — `CNAME`, `404.html`-скрипт), або (в) розгорнути на Vercel/Netlify, де SSG-вихід коректно сервиться.

### Крок 3. Після фіксу
- Запросити переіндексацію в GSC для уражених URL-ів («Inspect URL» → «Request indexing»).
- Натиснути «Validate fix» на `Discovered – currently not indexed` і `Crawled – currently not indexed`.

## Технічні деталі для розробника

- `src/main.tsx` використовує `ViteReactSSG` з масивом маршрутів із `src/App.tsx`.
- `src/App.tsx` визначає 9 статичних маршрутів + динамічний `blog/:slug` з `getStaticPaths`.
- Кожна сторінка (`Biznes.tsx`, `Outsourcing.tsx`, `MycieOkien.tsx`, …) використовує `<SEOHead>` з власним `canonical`, `title`, `jsonLd` — тобто на рівні React-коду все правильно.
- `vite.config.ts` має `ssr.external: ["react-helmet-async", "react", "react-dom"]` — це коректно для SSG.
- `package.json`: `"build": "vite-react-ssg build"`.
- Проблема **не в коді React-сторінок** — проблема у тому, що згенерований SSG-HTML не доходить до Googlebot.

## Підсумок щодо запитання

Так, причини зрозумілі: **всі підсторінки виглядають для Google як дублі головної з canonical на головну**. Усі ці сторінки **потрібно** індексувати — це не «можна ігнорувати». Перший крок (Крок 1) дасть точну відповідь, у який бік копати.
