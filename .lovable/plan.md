

## Plan: Vertically center icon and text in checklist cards

### File: `src/components/CleaningChecklist.tsx`, line 39

Change `items-start` to `items-center` in the flex container class so the icon and text are vertically centered within each card.

```
- className="flex items-start gap-3 md:gap-4 ..."
+ className="flex items-center gap-3 md:gap-4 ..."
```

One line change, no other files affected.

