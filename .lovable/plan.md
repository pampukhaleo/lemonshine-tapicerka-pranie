

## Plan: Исправление проблем безопасности

### Приоритет 1: Убрать Realtime с таблиц leads и lead_notes

CRM удалена, Realtime больше не нужен. Самый простой и надёжный фикс.

**Миграция SQL:**
```sql
ALTER PUBLICATION supabase_realtime DROP TABLE public.leads;
ALTER PUBLICATION supabase_realtime DROP TABLE public.lead_notes;
```

Это закрывает оба error-уровня сразу.

### Приоритет 2: Зафиксировать search_path у set_updated_at

**Миграция SQL:**
```sql
ALTER FUNCTION public.set_updated_at() SET search_path = public;
```

### Приоритет 3: Включить Leaked Password Protection

Это делается в Supabase Dashboard → Auth → Settings. Не требует миграции.

### Приоритет 4: Postgres upgrade

Делается через Supabase Dashboard → Settings → Infrastructure.

### Что НЕ трогаем
- `Anyone can insert leads` с `true` — это корректно, форма публичная.
- `is_admin` — уже безопасна, просто audit-reminder.

### Файлы
- `supabase/migrations/` — одна новая миграция (приоритеты 1-2)

