

## Plan: Удалить CRM из сайта

CRM полностью изолирована — это отдельный роут `/crm` и папка компонентов. Ни одна другая страница или компонент от неё не зависит.

### Что удаляем

1. **Файлы CRM-компонентов** (6 файлов):
   - `src/pages/CRM.tsx`
   - `src/components/crm/CRMDashboard.tsx`
   - `src/components/crm/CRMLogin.tsx`
   - `src/components/crm/LeadsTable.tsx`
   - `src/components/crm/LeadDetails.tsx`
   - `src/components/crm/LeadCreateDialog.tsx`
   - `src/components/crm/LeadEditDialog.tsx`
   - `src/components/crm/CalendarView.tsx`
   - `src/components/crm/Statistics.tsx`

2. **`src/nav-items.tsx`** — убрать импорт CRM и запись роута `/crm`.

3. **`src/hooks/useAuth.tsx`** — можно оставить (используется только CRM, но не мешает). Или удалить если хочешь почистить.

### Что НЕ трогаем
- Таблицы `leads`, `admins`, `lead_notes` в БД — данные остаются
- Edge Functions (`send-lead-gleb`, `notify-telegram`) — заявки продолжают приходить в Telegram
- `OrderForm.tsx` — формы на сайте работают как раньше

### Результат
Роут `/crm` перестанет существовать. Заявки по-прежнему сохраняются в БД и приходят в Telegram.

