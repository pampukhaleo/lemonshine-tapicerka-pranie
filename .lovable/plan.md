

## Проблема

Форма отправки заявок не работает из-за конфликта RLS-политик.

**Причина:** В коде `OrderForm.tsx` после вставки вызывается `.select().single()` — это требует SELECT-доступа к таблице. Но SELECT-политика разрешает чтение только авторизованным админам (`is_admin(auth.uid())`). Анонимный пользователь с сайта не может прочитать вставленную строку, и запрос падает с ошибкой RLS.

В логах БД видно: `"new row violates row-level security policy for table leads"` — это Postgres сообщает об ошибке при попытке SELECT после INSERT.

## Решение

Убрать `.select().single()` из вызова insert в `OrderForm.tsx`. Вместо этого генерировать UUID на клиенте для передачи в Telegram-уведомление.

### Изменения в файле `src/components/OrderForm.tsx`:

1. Импортировать `crypto.randomUUID()` или использовать uuid-генерацию
2. Заменить:
   ```ts
   const { data: createdLead, error } = await supabase
     .from('leads')
     .insert(leadData)
     .select()
     .single();
   ```
   На:
   ```ts
   const leadId = crypto.randomUUID();
   const { error } = await supabase
     .from('leads')
     .insert({ ...leadData, id: leadId });
   ```
3. Использовать `leadId` вместо `createdLead.id` при вызове edge function

Никаких миграций или изменений RLS не требуется.

