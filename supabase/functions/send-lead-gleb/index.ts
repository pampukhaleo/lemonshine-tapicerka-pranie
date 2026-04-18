import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Escape HTML characters to prevent Telegram API issues
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId, name, phone, email, address, city, preferred_date, preferred_time, description, source } = await req.json();

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN_GLEB');
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID_GLEB');

    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration for GLEB');
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Format the message in Polish with HTML formatting
    let message = `<b>🆕 Nowe zgłoszenie (GLEB)</b>\n\n`;
    message += `<b>Imię:</b> ${escapeHtml(name)}\n`;
    message += `<b>Telefon:</b> ${escapeHtml(phone)}\n`;
    if (email) {
      message += `<b>Email:</b> ${escapeHtml(email)}\n`;
    }
    message += `<b>Adres:</b> ${escapeHtml(address)}\n`;
    if (city) {
      message += `<b>Miasto:</b> ${escapeHtml(city)}\n`;
    }
    if (preferred_date) {
      message += `<b>Preferowana data:</b> ${escapeHtml(preferred_date)}\n`;
    }
    if (preferred_time) {
      message += `<b>Preferowana godzina:</b> ${escapeHtml(preferred_time)}\n`;
    }
    if (description) {
      message += `<b>Uwagi:</b> ${escapeHtml(description)}\n`;
    }
    message += `\n<b>Lead ID:</b> ${leadId}`;
    message += `\n<b>Źródło:</b> ${source || 'website'}`;

    console.log('Sending Telegram message (GLEB):', { chatId, messageLength: message.length });

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error (GLEB):', data);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Telegram message sent successfully (GLEB):', data.result.message_id);
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in send-lead-gleb function:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
