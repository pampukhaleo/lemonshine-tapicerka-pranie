CREATE TABLE public.consent_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,
  categories jsonb,
  user_agent text,
  page_url text,
  referrer text,
  ip text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consent_logs TO anon, authenticated;
GRANT ALL ON public.consent_logs TO service_role;

ALTER TABLE public.consent_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consent logs"
ON public.consent_logs FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read consent logs"
ON public.consent_logs FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete consent logs"
ON public.consent_logs FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));