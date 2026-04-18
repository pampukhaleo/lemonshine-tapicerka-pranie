

## План: Добавить поле "Miasto" в формы

### Что меняем

1. **`src/components/OrderForm.tsx`**
   - Добавить поле `city` в state формы (по умолчанию пусто, обязательное).
   - Добавить новый `<Input>` "Miasto *" после поля Adres.
   - Передавать `city` в Supabase insert и в edge function `send-lead-gleb`.

2. **БД (миграция)**
   - Добавить колонку `city text` в таблицу `leads` (nullable, чтобы не сломать существующие записи).

3. **`supabase/functions/send-lead-gleb/index.ts`**
   - Принимать `city` в payload.
   - Добавить строку `<b>Miasto:</b> ...` в Telegram-сообщение (между Adres и preferred_date).

### Что НЕ трогаем
- `notify-telegram` и `send-lead` — не используются текущей формой.
- Существующие лиды без города — поле просто будет пустым.

### Файлы
- `src/components/OrderForm.tsx`
- `supabase/functions/send-lead-gleb/index.ts`
- новая миграция в `supabase/migrations/`

