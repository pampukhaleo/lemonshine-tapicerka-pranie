ALTER PUBLICATION supabase_realtime DROP TABLE public.leads;
ALTER PUBLICATION supabase_realtime DROP TABLE public.lead_notes;
ALTER FUNCTION public.set_updated_at() SET search_path = public;