## Замена изображений

**Загрузить 5 картинок в Lovable Assets:**
- `sprzątanie.jpg` → новый хиро-фон для Sprzątanie
- `pranie_tapicerki.jpg` → новый хиро-фон для Pranie Tapicerki
- `mycie_okien.jpg` → новый хиро-фон для Mycie okien
- `Dlaczego_Lemonshine_sprzątanie.jpg` → картинка в блоке «Dlaczego LemonShine?» на Sprzątanie
- `Dlaczego_Lemonshine_mycie_okien.jpg` → картинка для блока «Dlaczego LemonShine?» на Mycie okien

**Правки в коде:**
1. `src/pages/Home.tsx` — заменить `heroBgAsset` на новый asset Sprzątanie.
2. `src/components/Hero.tsx` (Pranie Tapicerki) — заменить `heroBgAsset` на новый asset.
3. `src/components/window/WindowHero.tsx` — заменить `heroBgAsset` на новый asset Mycie okien.
4. `src/components/sprzatanie/DlaczegoLemonShine.tsx` — заменить `glebImg` на новую картинку.
5. `src/components/window/DlaczegoMycie.tsx` — сейчас блок без картинки (только текст по центру + волна). Переделать в такой же двухколоночный layout, как в `DlaczegoLemonShine.tsx` (текст слева, новая картинка справа), сохранив декоративную волну снизу.

Старые хиро-ассеты (`banner-sprzatanie.webp`) и `gleb-like-banner.webp` не удаляю — могут ещё использоваться; просто перестаю на них ссылаться в этих местах.
