## Контекст

Сайт теперь хостится на **Lovable** (не GitHub Pages). Lovable автоматически обслуживает SPA fallback: любой неизвестный путь отдаёт `index.html`. Однако Ahrefs (и другие краулеры без JS-рендеринга) видят на каждом URL **один и тот же** HTML — отсюда все 6 ошибок аудита: Orphan, No outgoing links, Duplicate without canonical, H1 missing, Title too long (78 симв.), Low word count (10 слов).

Хорошая новость: Lovable отдаёт **реальные файлы**, если они есть в `dist/<route>/index.html`. Значит подход с pre-rendered HTML-«оболочками» по-прежнему работает — нужно только наполнить их уникальным SEO-контентом.

## План исправления

### 1. Сократить базовый `<title>` и добавить canonical в корневой `index.html`
- Текущий title 78 симв. → новый ≤60 симв.: «Pranie tapicerki Wrocław, Opole | Lemonshine».
- Добавить `<link rel="canonical" href="https://lemonshine.pl/">` в `<head>`.
- Это сразу чинит главную страницу для Title too long, Duplicate canonical, H1.

### 2. Переписать `scripts/create-route-shells.js` для per-route SEO

Скрипт уже запускается после `vite build`. Расширяем его так, чтобы для каждого маршрута он:

1. Брал `dist/index.html` как шаблон.
2. Заменял в `<head>`:
   - `<title>` — уникальный, ≤60 симв.
   - `<meta name="description">` — уникальное, ≤160 симв.
   - `<link rel="canonical">` — точный URL страницы (с trailing slash).
3. Вставлял в `<body>` перед `<div id="root">` блок `<noscript>` (или обычный `<div>`, который React сразу заменит при гидрации):
   - `<h1>` с уникальным заголовком — закрывает H1 missing.
   - 2–3 коротких абзаца (>100 слов) — закрывает Low word count.
   - `<nav>` со ссылками на все ключевые разделы (`/`, `/pranie-tapicerki/`, `/mycie-okien/`, `/cennik/`, `/biznes/`, `/outsourcing/`, `/blog/`, `/polityka-prywatnosci/`) — закрывает Orphan и No outgoing links.

### 3. Расширить список статических маршрутов в скрипте

Сейчас только `cennik`, `blog`, `polityka-prywatnosci`. Добавить: `pranie-tapicerki`, `mycie-okien`, `biznes`, `outsourcing`. Иначе для них Lovable отдаёт SPA fallback — тот же `dist/index.html` без уникального SEO.

### 4. Дополнить `Footer.tsx` ссылками на `/biznes/` и `/outsourcing/`
Сейчас в «Szybkie Linki» их нет. Это даст incoming internal links и для пользователей, и для краулера, который рендерит JS.

### 5. Per-route метаданные

| URL | Title (≤60) | H1 |
|---|---|---|
| `/` | Pranie tapicerki Wrocław, Opole \| Lemonshine | Profesjonalne pranie tapicerki we Wrocławiu i Opolu |
| `/cennik/` | Cennik sprzątania i prania tapicerki \| Lemonshine | Cennik usług Lemonshine |
| `/pranie-tapicerki/` | Pranie tapicerki meblowej Wrocław \| Lemonshine | Pranie tapicerki meblowej |
| `/mycie-okien/` | Mycie okien Wrocław – profesjonalnie \| Lemonshine | Mycie okien we Wrocławiu |
| `/biznes/` | Sprzątanie dla firm Wrocław \| Lemonshine | Sprzątanie dla biznesu |
| `/outsourcing/` | Outsourcing sprzątania \| Lemonshine | Outsourcing usług sprzątania |
| `/blog/` | Blog o praniu tapicerki – porady \| Lemonshine | Blog Lemonshine |
| `/polityka-prywatnosci/` | Polityka prywatności \| Lemonshine | Polityka prywatności |
| `/blog/<slug>/` | из `blogPosts.title` (обрезка ≤60) | из `blogPosts.title` |

Для блог-постов title/description берутся из `src/data/blog.ts` (regex по slug/title/excerpt — slug-парсер уже есть в скрипте).

### Что НЕ меняется
- React-компоненты страниц и `SEOHead` остаются как есть — для пользователей и Google (он рендерит JS) ничего не ломается.
- Дизайн, формы заказа, табы — не трогаем.
- Никаких файлов `_redirects` / `_headers` — Lovable их не использует, SPA fallback встроен.

### Технический момент про `<noscript>` vs обычный `<div>`
Чтобы контент учитывался Ahrefs гарантированно, лучше вставлять блок как обычный `<div id="seo-fallback">` внутри `<div id="root">`. React при гидрации заменит содержимое `#root` своим деревом, поэтому пользователь этого не увидит. Краулер без JS прочитает H1, текст и ссылки.
