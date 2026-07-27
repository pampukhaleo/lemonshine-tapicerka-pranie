## Проверка соответствия документации vanilla-cookieconsent v3

Сверил наш `src/lib/cookieConsent.ts` + `index.html` с тремя страницами доков. Всё ключевое соответствует, кода менять не нужно.

### Что совпадает с документацией

| Требование из доков | У нас |
|---|---|
| Установка `vanilla-cookieconsent@3.1.0` через npm | ✅ 3.1.0 в package.json |
| Импорт CSS `vanilla-cookieconsent/dist/cookieconsent.css` | ✅ в `cookieConsent.ts` |
| `gtag('consent', 'default', {...: 'denied'})` **до** GTM | ✅ в `index.html` перед GTM-снипетом |
| `dataLayer` инициализируется до gtag | ✅ |
| `updateGtagConsent()` в `onFirstConsent`, `onConsent`, `onChange` | ✅ во всех трёх коллбэках |
| Категория `necessary` с `enabled:true, readOnly:true` | ✅ |
| `autoClear` для `_ga*`, `_gid`, `_gcl*` | ✅ + добавлены `_clck`/`_clsk` для Clarity |
| Ссылка на политику приватности в описании | ✅ `/polityka-prywatnosci/` |
| `cookieTable` в preferencesModal | ✅ |

### Осознанные отличия от примера в доках (не ошибки)

1. **3 категории вместо 5.** Пример показывает `necessary/analytics/advertisement/functionality/security`. У нас только первые три — соответствует ТЗ клиента и покрывает GA + Google Ads. `functionality_storage`/`security_storage`/`personalization_storage` в дефолтах Consent Mode оставлены `denied` — этого достаточно, отдельная категория для них не требуется.

2. **`acceptedCategory` вместо `acceptedService`.** В доках пример использует гранулярные services внутри категории. Мы не определяем services — тогда правильный API именно `acceptedCategory(cat)`, что и стоит в коде. Согласие на категорию автоматически покрывает все её сервисы.

3. **`wait_for_update: 500`** — добавлено в дефолтах Consent Mode (доки это допускают, GTM-рекомендация).

4. **`autoShow: false` + ручной `CookieConsent.show()` через 1000 мс** — соответствует ТЗ и не противоречит докам (сами доки допускают отключение автопоказа).

### Итог

Реализация корректна по документации. Правок в коде не требуется. Если захотите — можно опционально:
- Добавить `services` внутри категорий с человекочитаемыми лейблами (это только UX preferencesModal, поведение не меняется).
- Расширить до 5 категорий, если появится нужда в functionality/security cookies.

Обе доработки необязательные — дайте знать, если делать.