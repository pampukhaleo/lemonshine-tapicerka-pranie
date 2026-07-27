## Мелкие правки под ТЗ

### 1. Задержка автопоказа баннера
В `src/lib/cookieConsent.ts` сейчас `setTimeout(() => CookieConsent.show(), 800)`. ТЗ требует `1000`. Меняем на 1000 мс — баннер по-прежнему автоматически показывается новым посетителям, ничего искать в футере не нужно.

### 2. Тексты кнопок vs. трекинг кликов
Проверил текущий код:

- consentModal: `Zgadzam się` / `Tylko niezbędne` / `Ustawienia` — совпадает с ТЗ.
- preferencesModal: `Wyrażam zgodę` / `Nie wyrażam zgody` / `Zapisz ustawienia` — совпадает с ТЗ.

Тексты уже буква в букву как в спецификации, править не нужно.

Дополнительно: наш слушатель кликов в `attachConsentClickListeners` привязан не к тексту кнопок, а к атрибуту `data-role`, который `vanilla-cookieconsent` ставит сам (`all`, `necessary`, `show`, `save`). Это надёжнее маппинга по тексту из ТЗ — не сломается при смене надписи или локализации. Оставляем как есть.

### Итог изменений
- `src/lib/cookieConsent.ts`: одна строка — задержка `800` → `1000`.
- Больше ничего не трогаем: логика, категории, Consent Mode, Clarity, Supabase-логирование уже соответствуют ТЗ.

После правки обновлю `COOKIE_CONSENT_CHANGES.md`, чтобы «short delay» звучало как «1 second delay».