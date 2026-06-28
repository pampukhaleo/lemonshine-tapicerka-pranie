import React, { useEffect, useState } from 'react';
import { Star, BadgeCheck } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

const GoogleLogo = ({ className = '' }: { className?: string }) => (
  <span className={`font-bold tracking-tight ${className}`} style={{ fontFamily: 'Arial, sans-serif' }}>
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC05' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </span>
);

const GoogleG = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.6 39.5 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.4 35.8 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/>
  </svg>
);

const Stars = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        style={{ width: size, height: size }}
        className={
          i < Math.round(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground/30'
        }
      />
    ))}
  </div>
);

const AVATAR_COLORS = [
  'bg-blue-500',
  'bg-red-500',
  'bg-green-600',
  'bg-orange-500',
  'bg-purple-500',
  'bg-teal-500',
];

const Avatar = ({ name, photoUri }: { name: string; photoUri?: string }) => {
  const color = AVATAR_COLORS[(name?.charCodeAt(0) ?? 0) % AVATAR_COLORS.length];
  return (
    <div className="relative shrink-0">
      {photoUri ? (
        <img
          src={photoUri}
          alt={name}
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className={`w-10 h-10 rounded-full ${color} text-white font-bold flex items-center justify-center`}>
          {name?.[0]?.toUpperCase() ?? '?'}
        </div>
      )}
      <span className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
        <GoogleG size={12} />
      </span>
    </div>
  );
};

const ReviewCard = ({ r }: { r: Review }) => {
  const [expanded, setExpanded] = useState(false);
  const text = r.text?.text ?? '';
  const isLong = text.length > 140;

  return (
    <div className="bg-lemon-50 border border-border rounded-xl p-5 h-full flex flex-col shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={r.authorAttribution?.displayName ?? '?'} photoUri={r.authorAttribution?.photoUri} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-foreground text-sm truncate">
              {r.authorAttribution?.displayName}
            </span>
            <BadgeCheck className="w-4 h-4 text-[#1a73e8] fill-[#1a73e8] [&>path]:stroke-white" />
          </div>
          <div className="text-xs text-muted-foreground">
            {r.relativePublishTimeDescription}
          </div>
        </div>
      </div>
      <Stars rating={r.rating} />
      <p className={`text-sm text-foreground/80 mt-3 ${expanded ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-[#1a73e8] text-sm mt-2 self-start hover:underline"
        >
          {expanded ? 'Zwiń' : 'Read more'}
        </button>
      )}
    </div>
  );
};

interface Props {
  title?: string;
  className?: string;
}

const NaszeOpinie = ({ title = 'Co mówią nasi klienci', className }: Props) => {
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

  const reviews = data?.reviews ?? [];

  return (
    <section className={cn("py-16", className || "bg-background")}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-10">
          {title}
        </h2>

        {/* Google summary bar */}
        <div className="max-w-6xl mx-auto bg-lemon-50 rounded-2xl px-6 py-5 md:px-8 md:py-6 mb-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <GoogleLogo className="text-2xl md:text-3xl" />
              <span className="text-2xl md:text-3xl font-bold text-foreground">Reviews</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl md:text-2xl font-bold text-foreground">
                {(data?.rating ?? 5).toFixed(1)}
              </span>
              <Stars rating={data?.rating ?? 5} size={18} />
              <span className="text-sm text-muted-foreground">
                ({data?.userRatingCount ?? 52})
              </span>
            </div>
          </div>
          <a
            href={data?.googleMapsUri ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1765cc] text-white font-medium rounded-full px-6 py-2.5 text-sm transition-colors shrink-0"
          >
            Review us on Google
          </a>
        </div>

        {/* Reviews carousel */}
        {reviews.length > 0 && (
          <div className="max-w-6xl mx-auto mb-12">
            <Carousel opts={{ align: 'start', loop: reviews.length > 4 }} className="w-full">
              <CarouselContent className="-ml-4">
                {reviews.map((r, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <ReviewCard r={r} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {reviews.length > 1 && (
                <>
                  <CarouselPrevious className="hidden md:flex -left-4" />
                  <CarouselNext className="hidden md:flex -right-4" />
                </>
              )}
            </Carousel>
          </div>
        )}

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
