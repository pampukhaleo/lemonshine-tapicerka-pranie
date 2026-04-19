
## План: уточнить и заменить 3 фото

### Что вижу
- Все 9 файлов лежат в `public/cleaning/` (проверил `ls`).
- В `src/data/pricing.ts` пути `image: '/cleaning/...jpg'` уже прописаны для всех 9 позиций.
- В `Pricing.tsx` (строка 104-106) `<img src={item.image}>` рендерится.

Технически фото **уже на странице**. Если вы их не видите — это кэш браузера (Ctrl+Shift+R / Cmd+Shift+R обновит).

### Что предлагаю сделать сейчас
Вы прислали 3 новых файла — заменить ими существующие:
1. `user-uploads://mycie_prysznicuwanny-2.jpg` → `public/cleaning/mycie_prysznicuwanny.jpg` (перезапись)
2. `user-uploads://mycie_zmywarki-2.jpg` → `public/cleaning/mycie_zmywarki.jpg` (перезапись)
3. `user-uploads://sprzatanie_balkonu-2.jpg` → `public/cleaning/sprzatanie_balkonu.jpg` (перезапись)

Имена файлов оставляем те же — `pricing.ts` править не нужно.

### Файлы
- `public/cleaning/mycie_prysznicuwanny.jpg` (заменить)
- `public/cleaning/mycie_zmywarki.jpg` (заменить)
- `public/cleaning/sprzatanie_balkonu.jpg` (заменить)

### После применения
Сделайте hard refresh (Ctrl+Shift+R), чтобы браузер подтянул новые файлы вместо закэшированных.
