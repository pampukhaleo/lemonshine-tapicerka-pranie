

## Plan: SEO-фикс и чистка после реструктуризации

### Изменения

1. **`public/robots.txt`** — убрать `Disallow: /crm` (CRM удалена).

2. **`public/sitemap.xml`** — добавить `/pranie-tapicerki/` и `/mycie-okien/`, обновить lastmod даты.

3. **`src/pages/Klient.tsx`** — изменить canonical с `/klient/` на `/pranie-tapicerki/`. Обновить sameAs в JSON-LD на актуальные соцсети (`lemonshine_pl`).

4. **`src/components/Footer.tsx`** — обновить текст описания компании, чтобы отражал все три сервиса. Исправить ссылки "Oferta", "O nas", "Realizacje" на рабочие якоря или страницы.

5. **`index.html`** — добавить `preload` для `/heroImg-home.png` (основной LCP-ресурс главной страницы).

6. **`src/pages/Home.tsx`** — обновить sameAs в JSON-LD на актуальные ссылки соцсетей.

### Что НЕ трогаем
- Страницы `/biznes/` и `/outsourcing/` — оставляем для обратной совместимости, не мешают.
- Формы и Edge Functions — работают корректно.

### Файлы
- `public/robots.txt`
- `public/sitemap.xml`
- `src/pages/Klient.tsx`
- `src/pages/Home.tsx`
- `src/components/Footer.tsx`
- `index.html`

