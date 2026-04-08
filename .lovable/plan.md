

## Plan: Track source page and form for each lead

### Problem
Currently all leads come in with `source: 'website'` — no way to tell which page or form section they came from.

### Approach
1. **Add `source` column to `leads` table** via migration — a `text` field, default `'website'`.

2. **Add `source` prop to `OrderForm` component** — each page passes a specific source string like `'home'`, `'pranie-tapicerki'`, `'mycie-okien'`, `'cennik'`, `'outsourcing'`, `'biznes'`.

3. **Save source to DB** — include `source` in the insert query.

4. **Pass source to Telegram notification** — already sends `source`, just needs the real value instead of hardcoded `'website'`.

5. **Update all pages** that use `<OrderForm />` to pass the source prop:
   - `Home.tsx` → `source="home"`
   - `Klient.tsx` → `source="pranie-tapicerki"`
   - `MycieOkien.tsx` → `source="mycie-okien"`
   - `Pricing.tsx` → `source="cennik"`
   - `Outsourcing.tsx` → `source="outsourcing"`
   - `Biznes.tsx` → `source="biznes"`

6. **CRM LeadCreateDialog** — pass `source="crm"` for manually created leads.

7. **Show source in CRM** — display the source field in LeadDetails and LeadsTable so it's visible which page/form the lead came from.

### Technical details

**Migration SQL:**
```sql
ALTER TABLE leads ADD COLUMN source text DEFAULT 'website';
```

**OrderForm changes:**
```tsx
interface OrderFormProps {
  source?: string;
}

const OrderForm = ({ source = 'website' }: OrderFormProps) => {
  // ... in handleSubmit:
  const { error } = await supabase
    .from('leads')
    .insert({ ...leadData, id: leadId, source });
  // ... in Telegram call:
  source: source
};
```

**Telegram message** — already shows source, will now show the real page name.

### Files to modify
- `supabase/migrations/` — new migration file
- `src/components/OrderForm.tsx` — add `source` prop, save to DB
- `src/pages/Home.tsx`, `Klient.tsx`, `MycieOkien.tsx`, `Pricing.tsx`, `Outsourcing.tsx`, `Biznes.tsx` — pass source prop
- `src/components/crm/LeadCreateDialog.tsx` — pass `source="crm"`
- `src/components/crm/LeadsTable.tsx` — show source column
- `src/components/crm/LeadDetails.tsx` — show source field

