## Cel

Domknąć dwa brakujące elementy z audytu SEO/AI:

1. **AggregateRating** w JSON-LD na pozostałych stronach (Home, Biznes, Outsourcing, MycieOkien) — obecnie tylko `/klient/` ma rating.
2. **Service** JSON-LD na `/mycie-okien/` — strona ma LocalBusiness + FAQ + Breadcrumb, ale brakuje schematu usługi.

## Zmiany w plikach

### 1. `src/pages/Home.tsx`
Dodać `aggregateRating` do istniejącego `localBusinessLd`:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "47",
  "bestRating": "5"
}
```

### 2. `src/pages/Biznes.tsx`
Dodać `aggregateRating` do istniejącego LocalBusiness JSON-LD (te same wartości).

### 3. `src/pages/Outsourcing.tsx`
To samo — `aggregateRating` w LocalBusiness JSON-LD.

### 4. `src/pages/MycieOkien.tsx`
- Dodać `aggregateRating` do LocalBusiness JSON-LD.
- Dodać nowy `serviceJsonLd` z `@type: "Service"` (nazwa: "Mycie okien", obszar: Wrocław/Opole, provider: Lemonshine, offers z minimalną ceną) i podłączyć do tablicy `jsonLd` w `SEOHead`.

## Pytanie do potwierdzenia

Jakie wartości `ratingValue` i `reviewCount` użyć? Na `/klient/` obecnie jest jedna konkretna wartość — sprawdzę ją i użyję tej samej spójnie wszędzie, chyba że podasz inne (np. realne liczby z Google Maps).
