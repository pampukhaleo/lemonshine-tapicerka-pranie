import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Review {
  authorAttribution: { displayName: string; uri?: string; photoUri?: string };
  rating: number;
  relativePublishTimeDescription: string;
  text: { text: string };
}

interface ReviewsData {
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  displayName: string;
  reviews: Review[];
}

const stats = [
  { value: '1500+', label: 'Wykonanych usług' },
  { value: '100%', label: 'Zadowolonych klientów' },
  { value: '5★', label: 'Ocen Google' },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.round(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground/30'
        }`}
      />
    ))}
  </div>
);

const Initial = ({ name }: { name: string }) => (
  <div className="w-10 h-10 rounded-full bg-mint-100 text-mint-700 font-bold flex items-center justify-center shrink-0">
    {name?.[0]?.toUpperCase() ?? '?'}
  </div>
);

const NaszeOpinie = () => {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    let cancel = false;
    supabase.functions
      .invoke('get-google-reviews', { body: {} })
      .then((res) => {
        if (cancel) return;
        if (res.data) setData(res.data as ReviewsData);
      })
      .catch((e) => console.error('reviews fetch failed', e));
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-10">
          Nasze opinie
        </h2>

        {/* Google business summary card */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-lemon-400 flex items-center justify-center text-2xl font-heading font-bold text-foreground shrink-0">
              L
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-heading font-bold text-foreground text-lg leading-tight">
                {data?.displayName ?? 'LemonShine - Sprzątanie Mieszkań i Biur Wrocław'}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <span className="text-2xl font-bold text-foreground">
                  {(data?.rating ?? 5).toFixed(1)}
                </span>
                <Stars rating={data?.rating ?? 5} />
                <span className="text-sm text-muted-foreground">
                  ({data?.userRatingCount ?? 52} opinii)
                </span>
              </div>
            </div>
            <Button
              asChild
              className="bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold"
            >
              <a
                href={data?.googleMapsUri ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz w Google
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
          {(data?.reviews ?? []).slice(0, 6).map((r, i) => (
            <Card key={i} className="border-0 shadow-md bg-card h-full">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Initial name={r.authorAttribution?.displayName ?? '?'} />
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm truncate">
                      {r.authorAttribution?.displayName}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {r.relativePublishTimeDescription}
                    </div>
                  </div>
                </div>
                <Stars rating={r.rating} />
                <p className="text-sm text-muted-foreground mt-3 line-clamp-5">
                  {r.text?.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats bar */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-mint-600 mb-2">{s.value}</div>
                <div className="text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaszeOpinie;
