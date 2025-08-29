
-- 1) Нормализация текущих строк: маппим старые статусы на 'new'
update public.leads
set status = 'new'
where status in ('contacted', 'in_progress');

-- 2) Создаём новый enum с нужными значениями
do $$
begin
  create type public.lead_status_new as enum ('new', 'completed', 'cancelled');
exception
  when duplicate_object then null;
end
$$;

-- 3) Переводим колонку на новый тип
alter table public.leads
  alter column status type public.lead_status_new
  using (
    case
      when status in ('new', 'completed', 'cancelled') then status::text::public.lead_status_new
      when status in ('contacted', 'in_progress') then 'new'::public.lead_status_new
      else 'new'::public.lead_status_new
    end
  );

-- 4) Удаляем старый enum и переименовываем новый в lead_status
drop type if exists public.lead_status;
alter type public.lead_status_new rename to lead_status;

-- 5) Возвращаем дефолт на колонку status
alter table public.leads alter column status set default 'new';
