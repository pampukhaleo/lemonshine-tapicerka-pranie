## Задача
На мобильной версии заменить фоновые картинки в hero-секциях трёх страниц на загруженные фото (десктоп остаётся без изменений).

## Маппинг файлов
- `/` (Sprzątanie) → `user-uploads://sprzątanie.jpg`
- `/pranie-tapicerki/` → `user-uploads://pranie_tapicerki.jpg`
- `/mycie-okien/` → `user-uploads://mycie_okien.jpg`

## Реализация
1. Загрузить 3 файла через `lovable-assets create` из `/mnt/user-uploads/`, создать pointer-файлы:
   - `src/assets/sprzatanie-hero-mobile.jpg.asset.json`
   - `src/assets/pranie-tapicerki-hero-mobile.jpg.asset.json`
   - `src/assets/mycie-okien-hero-mobile.jpg.asset.json`
2. В каждом hero-компоненте (`src/pages/Home.tsx`, `src/components/Hero.tsx`, `src/components/window/WindowHero.tsx`) вместо одного `<div style={{backgroundImage: url(desktop)}}>` использовать два слоя:
   - мобильный: `className="absolute inset-0 bg-cover bg-center md:hidden"` со стилем мобильной картинки
   - десктопный: `className="absolute inset-0 bg-cover bg-right hidden md:block"` со стилем текущей десктопной картинки
3. Градиент-оверлей и содержимое hero не трогаем.

## Проверка
- `bun run build`
- Скриншот через Playwright на viewport 390×844 для трёх страниц, чтобы убедиться, что нужные фото видны.
