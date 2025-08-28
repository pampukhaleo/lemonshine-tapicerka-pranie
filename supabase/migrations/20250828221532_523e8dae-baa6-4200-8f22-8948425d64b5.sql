
-- 1) Добавляем поле price в leads
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS price numeric(12,2);

-- Неотрицательная цена (без привязки ко времени — допустимо в CHECK)
ALTER TABLE public.leads
  ADD CONSTRAINT leads_price_non_negative CHECK (price IS NULL OR price >= 0);

-- 2) Индексы для календаря и месячной аналитики
CREATE INDEX IF NOT EXISTS leads_preferred_date_idx ON public.leads (preferred_date);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at);

-- 3) Триггер для авто-обновления updated_at
-- Функция public.set_updated_at уже существует согласно вашему проекту.
DROP TRIGGER IF EXISTS set_updated_at_on_leads ON public.leads;

CREATE TRIGGER set_updated_at_on_leads
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();
