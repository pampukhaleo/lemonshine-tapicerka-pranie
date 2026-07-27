# Consent click audit logging

Отзыв на реализацию подтвердил: Consent Mode v2, категория `advertisement`, Clarity и dataLayer-события уже на месте. Остаётся один пункт — аудит-лог кликов по кнопкам cookie-баннера. У проекта нет PHP-бэкенда, поэтому пишем в Lovable Cloud (Supabase) через edge function.

## Что делаем

1. **Новая таблица `public.consent_logs`** (миграция):
   - Поля: `action` (accept_all / accept_necessary / show_preferences / save_preferences / change), `categories` (jsonb со списком принятых категорий), `user_agent`, `page_url`, `referrer`, `ip` (nullable), `created_at`.
   - GRANT `INSERT` для `anon` и `authenticated`, `ALL` для `service_role`.
   - RLS: `INSERT` разрешён всем (для публичной записи), `SELECT/UPDATE/DELETE` — только `is_admin(auth.uid())`.

2. **Edge function `log-consent`** (`supabase/functions/log-consent/index.ts`):
   - Public (без JWT), CORS.
   - Zod-валидация тела: `action`, опциональные `categories`, `page_url`, `referrer`.
   - Достаёт `user-agent` и IP из заголовков, вставляет строку в `consent_logs` через `SUPABASE_SERVICE_ROLE_KEY`.
   - Возвращает `{ok: true}`; ошибки логирует, но не блокирует UI.

3. **Клиентский трекер** в `src/lib/cookieConsent.ts`:
   - Функция `trackConsentClick(action)` шлёт `navigator.sendBeacon` (fallback — `fetch keepalive`) на edge function.
   - Хуки библиотеки: в `onFirstConsent` → определить `accept_all` vs `accept_necessary` по принятым категориям; в `onChange` → `save_preferences`.
   - Дополнительно: делегированный listener на клики по `[data-cc="show-preferencesModal"]`, `[data-cc="accept-all"]`, `[data-cc="accept-necessary"]` внутри `.cm`/`.pm` контейнеров баннера для точного различения кнопок до срабатывания коллбеков.
   - Никаких PII: не сохраняем имя/email, только техданные.

## Технические детали

- Edge function URL берётся из `import.meta.env.VITE_SUPABASE_URL` + `/functions/v1/log-consent`, апикей — `VITE_SUPABASE_PUBLISHABLE_KEY` в заголовке `apikey`.
- `sendBeacon` использует `Blob({type:'application/json'})`, поэтому CORS ответы должны разрешать `content-type` — стандартный `corsHeaders` из sdk это покрывает.
- Failure-mode: любые ошибки трекинга проглатываются (`try/catch`), UX баннера не должен ломаться.
- Никаких изменений UI/текстов баннера — только добавляется невидимый трекинг.

## Что НЕ трогаем

- Тексты, дизайн баннера, категории, Consent Mode defaults — всё уже соответствует инструкции.
- Clarity, dataLayer-события `consent_advertisement_granted` / `consent_analytics_granted` уже есть.
