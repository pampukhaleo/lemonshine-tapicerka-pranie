
-- 1) Нормализуем “старые” статусы в данных
UPDATE public.leads
SET status = 'new'
WHERE status IN ('contacted', 'in_progress');

-- 2) Снимаем DEFAULT, чтобы не держал старый тип
ALTER TABLE public.leads ALTER COLUMN status DROP DEFAULT;

-- 3) Создаём новый enum с тремя значениями (идемпотентно)
DO $$
BEGIN
  CREATE TYPE public.lead_status_new AS ENUM ('new','completed','cancelled');
EXCEPTION
  WHEN duplicate_object THEN
    NULL;
END$$;

-- 4) Меняем тип колонки на новый enum (без UTC-сдвигов, только статус)
ALTER TABLE public.leads
  ALTER COLUMN status TYPE public.lead_status_new
  USING (
    CASE
      WHEN status::text IN ('new','completed','cancelled')
        THEN status::text::public.lead_status_new
      ELSE 'new'::public.lead_status_new
    END
  );

-- 5) Возвращаем DEFAULT уже на новый тип
ALTER TABLE public.leads
  ALTER COLUMN status SET DEFAULT 'new'::public.lead_status_new;

-- 6) Удаляем старый тип и переименовываем новый в исходное имя
DROP TYPE public.lead_status;
ALTER TYPE public.lead_status_new RENAME TO lead_status;
