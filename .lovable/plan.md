

## Plan: Updates to Pranie Tapicerki page

### 1. Timeline connector lines color (About.tsx)
In the "Nasze rozwiązanie" steps timeline, the connector lines between steps are all `bg-mint-500`. Change:
- Lines after step 0 and step 1 (first two) → `bg-lemon-400` (yellow)
- Lines after step 2 and step 3 (last two) → keep `bg-mint-500` (green)

Update line 106 to use conditional color based on `index`: `index < 2 ? 'bg-lemon-400' : 'bg-mint-500'`.

### 2. Services heading text (Services.tsx)
- Line 23: Change `"Cennik Prania Tapicerki we Wrocławiu"` → `"Cennik Prania Tapicerki"`
- Line 26: Change description → `"Sprawdź cennik na pranie tapicerki meblowej i zamów usługę już teraz!"`

### 3. Reorder blocks in Klient.tsx
Move `<OrderForm />` from its current position (line 265) to after `<Results />` (Opinie naszych klientów). New order:
```
Hero → About → Services → Promotions → Results → OrderForm → Equipment → Blog → FAQ
```

### 4. Remove Comparison block (Klient.tsx)
Remove `<Comparison />` (line 268) and its import (line 11).

### 5. Remove CleaningProcess block (Klient.tsx)
Remove `<CleaningProcess />` (line 270) and its import (line 12).

### Files to modify
- `src/components/About.tsx` — conditional line colors
- `src/components/Services.tsx` — heading/description text
- `src/pages/Klient.tsx` — reorder blocks, remove Comparison and CleaningProcess

