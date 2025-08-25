
-- 1) Тип статуса лида
do $$ begin
  create type public.lead_status as enum ('new','contacted','in_progress','completed','cancelled');
exception when duplicate_object then null; end $$;

-- 2) Таблица лидов
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  address text not null,
  service text not null,
  preferred_date date,
  preferred_time text,
  description text,
  status public.lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- 3) Таблица заметок по лидам
create table if not exists public.lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  note text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.lead_notes enable row level security;

-- 4) Таблица администраторов
create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.admins enable row level security;

-- 5) Хелпер-функция для RLS: проверка, является ли пользователь админом
create or replace function public.is_admin(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(select 1 from public.admins a where a.user_id = _user_id)
$$;

-- 6) Триггер обновления updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_leads_set_updated_at on public.leads;
create trigger trg_leads_set_updated_at
before update on public.leads
for each row
execute function public.set_updated_at();

-- 7) Политики RLS

-- leads: анонимные вставки (для формы на сайте)
drop policy if exists "Anyone can insert leads" on public.leads;
create policy "Anyone can insert leads"
on public.leads
for insert
to anon, authenticated
with check (true);

-- leads: читать могут только админы
drop policy if exists "Admins can read leads" on public.leads;
create policy "Admins can read leads"
on public.leads
for select
to authenticated
using (public.is_admin(auth.uid()));

-- leads: обновлять могут только админы
drop policy if exists "Admins can update leads" on public.leads;
create policy "Admins can update leads"
on public.leads
for update
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

-- leads: удалять могут только админы
drop policy if exists "Admins can delete leads" on public.leads;
create policy "Admins can delete leads"
on public.leads
for delete
to authenticated
using (public.is_admin(auth.uid()));

-- lead_notes: полный доступ только у админов
drop policy if exists "Admins can read lead notes" on public.lead_notes;
create policy "Admins can read lead notes"
on public.lead_notes
for select
to authenticated
using (public.is_admin(auth.uid()));

drop policy if exists "Admins can insert lead notes" on public.lead_notes;
create policy "Admins can insert lead notes"
on public.lead_notes
for insert
to authenticated
with check (public.is_admin(auth.uid()));

drop policy if exists "Admins can update lead notes" on public.lead_notes;
create policy "Admins can update lead notes"
on public.lead_notes
for update
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

drop policy if exists "Admins can delete lead notes" on public.lead_notes;
create policy "Admins can delete lead notes"
on public.lead_notes
for delete
to authenticated
using (public.is_admin(auth.uid()));

-- admins: пользователь видит только свою строку
drop policy if exists "Users can read their admin row" on public.admins;
create policy "Users can read their admin row"
on public.admins
for select
to authenticated
using (auth.uid() = user_id);

-- admins: управлять может только service_role (для добавления админов через Dashboard/Edge)
drop policy if exists "Service role can manage admins" on public.admins;
create policy "Service role can manage admins"
on public.admins
for all
to service_role
using (true)
with check (true);

-- 8) Индексы
create index if not exists leads_status_idx on public.leads(status);
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists lead_notes_lead_id_idx on public.lead_notes(lead_id);

-- 9) Realtime (на будущее)
alter table public.leads replica identity full;
alter table public.lead_notes replica identity full;

do $$ begin
  alter publication supabase_realtime add table public.leads;
exception when duplicate_object then null; end $$;

do $$ begin
  alter publication supabase_realtime add table public.lead_notes;
exception when duplicate_object then null; end $$;
