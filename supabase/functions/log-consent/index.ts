import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  action: z.enum([
    'accept_all',
    'accept_necessary',
    'show_preferences',
    'save_preferences',
    'change',
    'first_consent',
  ]),
  categories: z.array(z.string()).optional(),
  page_url: z.string().max(2048).optional(),
  referrer: z.string().max(2048).optional(),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const raw = await req.text();
    const json = raw ? JSON.parse(raw) : {};
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const ip =
      req.headers.get('cf-connecting-ip') ??
      req.headers.get('x-real-ip') ??
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      null;

    const { error } = await supabase.from('consent_logs').insert({
      action: parsed.data.action,
      categories: parsed.data.categories ?? null,
      page_url: parsed.data.page_url ?? null,
      referrer: parsed.data.referrer ?? null,
      user_agent: req.headers.get('user-agent'),
      ip,
    });

    if (error) {
      console.error('consent_logs insert failed', error);
      return new Response(JSON.stringify({ error: 'insert_failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('log-consent error', e);
    return new Response(JSON.stringify({ error: 'internal' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
