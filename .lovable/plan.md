## Что просят

В письме: настроить cookie consent и Google Consent Mode v2 — сейчас их нет, из-за этого некорректно работают Google Analytics и Google Ads/ремаркетинг.

В PDF-инструкции предлагается использовать библиотеку **CookieConsent v3 by Orest Bida** (`cookieconsent@3.1.0`) — с конфигом категорий (necessary / analytics / advertisement), польскими переводами, интеграцией с `gtag('consent', ...)` и Microsoft Clarity.

## Могу ли я это сделать на сайте?

Да, полностью. Стек (React + Vite + GTM в `index.html`) идеально подходит. Пример из PDF написан для Joomla (эндпоинт `/index.php?option=com_ajax...` для трекинга кликов) — эту часть адаптируем под наш GTM (`dataLayer.push`) вместо серверного beacon.

## План внедрения

### 1. Добавить `Consent Mode` default в `index.html` (ДО GTM-скрипта)
Перед существующим GTM-снипетом вставить дефолтные denied-состояния — это критично для Google Ads/EEA:

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
</script>
```

### 2. Установить библиотеку
`bun add vanilla-cookieconsent` (пакет автора инструкции, v3).

### 3. Создать `src/lib/cookieConsent.ts`
Инициализация по конфигу из PDF:
- Категории: `necessary` (readOnly), `analytics`, `advertisement`
- Польские тексты из PDF (модалка + preferences + таблицы cookies `_ga`, `_gid`, `_gcl*`, `_clck`, `_clsk`)
- Ссылка на политику приватности — наша `/polityka-prywatnosci/` (а не `rekinysukcesu.pl` из шаблона)
- Хуки `onFirstConsent / onConsent / onChange` → `gtag('consent','update', {...})` в соответствии с выбранными категориями
- Убираем Joomla-endpoint для трекинга кликов — заменяем на `dataLayer.push({event:'consent_...'})`, чтобы события были доступны в GTM
- Импорт CSS: `import 'vanilla-cookieconsent/dist/cookieconsent.css'`

### 4. Подключить в `src/App.tsx` (или `main.tsx`)
`useEffect` при mount → `run(config)` + `CookieConsent.show()` через `setTimeout` (как в инструкции).

### 5. Добавить кнопку «Ustawienia cookies» в `Footer.tsx`
Открывает preferences-модалку: `CookieConsent.showPreferences()` — требование RODO (пользователь должен иметь возможность изменить решение).

### 6. Обновить `PrivacyPolicy.tsx`
Секция 6 (Cookies) — обновить список: добавить упоминание Google Consent Mode и что пользователь может управлять через кнопку в футере.

### 7. Проверить сборку и preview
Убедиться, что модалка появляется, `dataLayer` получает `consent update`, GTM видит события.

## Что НЕ трогаем
- Существующий GTM-контейнер `GTM-KCSB3GVG` и `send-lead-gleb`
- Логику форм и трекинг конверсий (`trackConversion` уже пушит в dataLayer — начнёт работать корректно после consent update)
- Внутри GTM должно быть настроено, что теги Google Ads/GA4 отправляются с учётом Consent Mode — это делается в UI GTM, не в коде (об этом стоит предупредить пользователя отдельно)

## Технические детали
- Библиотека: `vanilla-cookieconsent` v3.x (~15 KB gzip), no deps, SSR-safe (используем в `useEffect`, только на клиенте — важно для SSG сборки через `vite-react-ssg`)
- Стили не конфликтуют с Tailwind (изолированный CSS с префиксом `.cc-*`)
- Cookie для хранения выбора: `cc_cookie` (управляется библиотекой)

Подтверди — стартую реализацию.
