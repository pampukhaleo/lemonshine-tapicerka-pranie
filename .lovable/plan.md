## Что делаем

Заменяем нынешний костыль с «оболочками» (`scripts/create-route-shells.js` — невидимый `#seo-fallback` div с H1 и parag) на **настоящий статический рендеринг** через `vite-react-ssg` — точно так же, как сделано на chea-taic.be (european-arbitration-nexus).

Разница принципиальная:
- **Сейчас:** краулер видит фейковый `<div id="seo-fallback">` с парой абзацев, а реальный контент страницы — пустой `<div id="root">`, который заполняет JS.
- **После:** при `vite build` каждая страница (`/`, `/pranie-tapicerki/`, `/cennik/`, `/blog/<slug>/` и т.д.) пре-рендерится в полноценный HTML со **всем реальным контентом** — заголовками, текстами, ценами, FAQ, формами. Helmet вставляет per-route `<title>`, `<meta description>`, `<link rel=canonical>`, OG-теги прямо в `<head>` каждого файла.

Для пользователя ничего не меняется (React гидрирует HTML и работает как обычно). Для Ahrefs/Google/соцсетей каждая страница — это нормальная статическая HTML-страница с уникальным контентом.

## Шаги

### 1. Установить зависимости
- `vite-react-ssg` (SSG-движок)
- Уже есть: `react-helmet-async`, `react-router-dom`

### 2. Переделать `src/App.tsx`
Сейчас роуты заданы через `navItems` + `<BrowserRouter>` внутри App. Для `vite-react-ssg` нужно **экспортировать массив `routes`** в формате `RouteRecord[]` (как в chea-taic). Структура:
```
routes = [{
  path: '/',
  element: <RootLayout/>,   // QueryClient, Toaster, Tooltip, ScrollToTop
  children: [
    { index: true, Component: Home },
    { path: 'pranie-tapicerki', Component: Klient },
    { path: 'klient', Component: Klient },
    { path: 'biznes', Component: Biznes },
    { path: 'mycie-okien', Component: MycieOkien },
    { path: 'outsourcing', Component: Outsourcing },
    { path: 'cennik', Component: Pricing },
    { path: 'blog', Component: BlogIndex },
    { path: 'blog/:slug', Component: BlogPost,
      getStaticPaths: () => blogPosts.map(p => `blog/${p.slug}`) },
    { path: 'polityka-prywatnosci', Component: PrivacyPolicy },
    { path: '*', Component: NotFound },
  ],
}]
```

### 3. Переделать `src/main.tsx`
```ts
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
export const createRoot = ViteReactSSG({ routes, basename: '/' });
```
Лишний `<HelmetProvider>` убираем — `vite-react-ssg` подключает его сам.

### 4. Обновить `package.json`
```json
"build": "vite-react-ssg build && node scripts/generate-sitemap.js"
```
`build:dev` оставляем на обычный `vite build` (для Lovable preview).

### 5. Перенести SEO-метаданные в `<SEOHead>` каждой страницы
`SEOHead` уже есть и работает через Helmet. Нужно убедиться, что **каждая страница** (`Home`, `Klient`, `Biznes`, `MycieOkien`, `Outsourcing`, `Pricing`, `BlogIndex`, `BlogPost`, `PrivacyPolicy`) рендерит `<SEOHead>` с уникальными `title` (≤60), `description` (≤160), `canonical`. Сегодня большинство страниц это уже делают — пробежимся и подровняем.

### 6. Удалить старый костыль
- `scripts/create-route-shells.js` — удалить.
- В `index.html` — оставить только базовый каркас без захардкоженных `<title>`/`<meta description>`/`<link canonical>` (как в chea-taic), чтобы не конфликтовало с Helmet.
- В `vite.config.ts` — добавить `dedupe: ['react','react-dom','react-helmet-async']` (необходимо для SSG).

### 7. Проверить SSG-совместимость компонентов
- Все обращения к `window`/`document`/`localStorage` обернуть в `typeof window !== 'undefined'`.
- Supabase-клиент инициализируется только на клиенте (он и так через React-хуки).
- `<Helmet>` уже SSR-safe.
- Картинки, `framer-motion`, формы — работают.

### 8. Sitemap и robots
Существующие `scripts/generate-sitemap.js` и `public/robots.txt` оставляем, проверим что в sitemap включены все нужные URL.

## Что меняется в DX и хостинге

- Lovable preview (`bun dev`) работает как раньше через обычный Vite-dev — SSG включается только на `vite build`.
- Lovable hosting просто отдаёт сгенерированные `dist/<route>/index.html` напрямую — никаких настроек хостинга менять не надо, SPA-fallback продолжит работать для динамических URL.
- Бандл по-прежнему code-split, гидрация быстрая.

## Чего НЕ делаем

- Не трогаем дизайн, формы заказа, Telegram-функцию, цены, бизнес-логику.
- Не меняем поддомены/CNAME/DNS.
- Не вводим i18n (в chea-taic он есть, нам он не нужен).
- Не переписываем компоненты — только роутинг и SEO-метаданные.

## Результат

После публикации все 6 ошибок Ahrefs закроются естественным путём:
- **H1 missing** — каждая страница имеет реальный H1 в HTML.
- **Title too long / Duplicate canonical** — Helmet выставляет per-route уникальные значения.
- **Low word count** — реальный контент страницы (а не 3 абзаца fallback) в HTML.
- **Orphan / No outgoing links** — Header и Footer пре-рендерятся, краулер видит реальное меню.

Плюс бонус: соцсети (Facebook, LinkedIn, Slack, Twitter) начнут показывать корректные превью для каждой страницы — сейчас они видят только метаданные с главной.
