

## Оценка security warnings

Кратко по каждому — насколько реально опасно и что делать.

### 1. `is_admin` SECURITY DEFINER audit — 🟢 Низкий риск (info)
Это **не баг**, а напоминание провести аудит. Сейчас:
- `is_admin()` — read-only, корректно написана.
- Таблица `admins` пишется только `service_role`.
- Других SECURITY DEFINER функций, пишущих в `admins`, нет (проверил — есть только `set_updated_at`, она триггер, к admins не относится).

**Действие:** игнорировать (mark as ignored с обоснованием).

### 2. Edge Functions Return Raw Internal Errors — 🟡 Средний риск
Функции возвращают `error.message` и полный `details: data` от Telegram API. Утечка имён переменных, возможно намёков на конфиг.

**Действие:** заменить на generic `"Internal server error"`, детали только в `console.error`. Применить к `notify-telegram`, `notify-telegram-gleb`, `send-lead-gleb`.

### 3. Unused Telegram Edge Functions — 🟠 Реальный риск
`notify-telegram` и `notify-telegram-gleb` **никем не вызываются** (проверил весь src/), но открыты на публичный POST без авторизации. Любой может спамить твой Telegram.

**Действие:** **удалить обе функции** — `send-lead-gleb` единственная используется формой.

### 4. Leaked Password Protection Disabled — 🟢 Не применимо
У тебя нет пользовательской аутентификации на сайте (CRM удалён, формы анонимные). Эта опция бесполезна.

**Действие:** игнорировать с обоснованием "no user auth in app".

### 5. RLS Policy Always True — 🟡 Ложноположительное
Это про политику `Anyone can insert leads` с `WITH CHECK (true)`. Так и должно быть — форма публичная, любой посетитель должен мочь оставить заявку. Это уже обсуждалось в прошлом плане как "не трогаем".

**Действие:** игнорировать с обоснованием "public lead form by design".

### 6. Postgres version patches — 🟡 Средний риск
Делается только в Supabase Dashboard → Settings → Infrastructure. Я не могу это сделать.

**Действие:** показать ссылку, пользователь делает сам.

---

### Что реально буду менять

1. **Удалить** `supabase/functions/notify-telegram/` и `supabase/functions/notify-telegram-gleb/` (плюс убрать запись из `supabase/config.toml` для `notify-telegram`). Вызвать `supabase--delete_edge_functions` для деплоя.
2. **Переписать error handling** в `supabase/functions/send-lead-gleb/index.ts` — generic ошибки наружу, детали в логи.
3. **Пометить findings** в security-сканере: `is_admin_definer_audit`, `SUPA_auth_leaked_password_protection`, `SUPA_rls_policy_always_true` → ignore с обоснованием. `orphan_telegram_fns`, `edge_fn_error_leak` → mark_as_fixed после деплоя.

### Что пользователь делает сам
- Postgres upgrade в Supabase Dashboard (дам ссылку).

### Файлы
- удалить: `supabase/functions/notify-telegram/index.ts`, `supabase/functions/notify-telegram-gleb/index.ts`
- изменить: `supabase/functions/send-lead-gleb/index.ts`, `supabase/config.toml`

