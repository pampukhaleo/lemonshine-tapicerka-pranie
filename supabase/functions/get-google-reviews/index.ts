// deno-lint-ignore-file no-explicit-any
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
};

const FALLBACK = {
  rating: 5.0,
  userRatingCount: 52,
  googleMapsUri: 'https://www.google.com/maps/search/?api=1&query=LemonShine+Wroc%C5%82aw',
  displayName: 'LemonShine - Sprzątanie Mieszkań i Biur Wrocław',
  reviews: [
    {
      authorAttribution: { displayName: 'Anna K.', uri: '' },
      rating: 5,
      relativePublishTimeDescription: '2 tygodnie temu',
      text: { text: 'Świetna obsługa, kanapa wygląda jak nowa. Polecam!' },
    },
    {
      authorAttribution: { displayName: 'Piotr N.', uri: '' },
      rating: 5,
      relativePublishTimeDescription: 'miesiąc temu',
      text: { text: 'Profesjonalne podejście, punktualnie i dokładnie.' },
    },
    {
      authorAttribution: { displayName: 'Maria W.', uri: '' },
      rating: 5,
      relativePublishTimeDescription: 'miesiąc temu',
      text: { text: 'Fantastyczny efekt, dywan pachnie świeżością.' },
    },
    {
      authorAttribution: { displayName: 'Tomasz B.', uri: '' },
      rating: 5,
      relativePublishTimeDescription: '2 miesiące temu',
      text: { text: 'Sprzątanie po remoncie wykonane perfekcyjnie.' },
    },
    {
      authorAttribution: { displayName: 'Katarzyna L.', uri: '' },
      rating: 5,
      relativePublishTimeDescription: '3 miesiące temu',
      text: { text: 'Bardzo miła ekipa i świetna jakość usługi.' },
    },
  ],
};

let cache: { at: number; data: any } | null = null;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
      return json(cache.data);
    }

    const placeId = Deno.env.get('GOOGLE_PLACE_ID');
    const lovableKey = Deno.env.get('LOVABLE_API_KEY');
    const mapsKey = Deno.env.get('GOOGLE_MAPS_API_KEY');

    if (!placeId || !lovableKey || !mapsKey) {
      cache = { at: Date.now(), data: FALLBACK };
      return json(FALLBACK);
    }

    const url = `https://connector-gateway.lovable.dev/google_maps/places/v1/places/${placeId}?languageCode=pl`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        'X-Connection-Api-Key': mapsKey,
        'X-Goog-FieldMask':
          'id,displayName,rating,userRatingCount,googleMapsUri,reviews',
      },
    });

    if (!res.ok) {
      console.error('Places API error', res.status, await res.text());
      return json(FALLBACK);
    }

    const data = await res.json();
    const result = {
      rating: data.rating ?? FALLBACK.rating,
      userRatingCount: data.userRatingCount ?? FALLBACK.userRatingCount,
      googleMapsUri: data.googleMapsUri ?? FALLBACK.googleMapsUri,
      displayName: data.displayName?.text ?? FALLBACK.displayName,
      reviews: (data.reviews ?? []).slice(0, 6),
    };
    cache = { at: Date.now(), data: result };
    return json(result);
  } catch (e) {
    console.error('get-google-reviews error', e);
    return json(FALLBACK);
  }
});

function json(data: unknown) {
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
