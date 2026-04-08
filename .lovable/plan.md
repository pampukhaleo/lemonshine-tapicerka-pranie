

## Plan: Убрать поле `service` из формы и заявок

### Что делаем
Поле `service` всегда `'sprzątanie'` и бесполезно — `source` уже показывает откуда заявка. Убираем `service` из формы, но оставляем колонку в БД (там уже есть данные).

### Изменения

1. **`src/components/OrderForm.tsx`** — убрать `service` из `formData` state, из `leadData`, и из тела запроса к Telegram Edge Function.

2. **`src/components/crm/LeadCreateDialog.tsx`** — убрать поле `service` из формы создания лида. Передавать пустую строку или значение по умолчанию в insert (колонка NOT NULL).

3. **`src/components/crm/LeadsTable.tsx`** — убрать отображение «Usługa» из карточки лида.

4. **`src/components/crm/LeadDetails.tsx`** — убрать отображение service.

5. **`supabase/functions/send-lead-gleb/index.ts`** — убрать service из Telegram-сообщения.

6. **Миграция** — сделать колонку `service` nullable или задать default, чтобы новые заявки без service не падали:
   ```sql
   ALTER TABLE public.leads ALTER COLUMN service DROP NOT NULL;
   ALTER TABLE public.leads ALTER COLUMN service SET DEFAULT '';
   ```

### Файлы
- `src/components/OrderForm.tsx`
- `src/components/crm/LeadCreateDialog.tsx`
- `src/components/crm/LeadsTable.tsx`
- `src/components/crm/LeadDetails.tsx`
- `supabase/functions/send-lead-gleb/index.ts`
- `supabase/migrations/` — новая миграция

