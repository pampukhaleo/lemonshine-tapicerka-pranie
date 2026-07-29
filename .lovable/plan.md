# Fix: GTM не получает consent 'update'

## Диагноз
В `src/lib/cookieConsent.ts` наша обёртка `gtag` определена так:

```ts
const gtag = (...args: any[]) => {
  window.dataLayer.push(args);   // push массива [...]
};
```

GTM Consent API ждёт, чтобы в dataLayer лежал **объект `arguments`** (с числовыми ключами и `length`), как в стандартном сниппете Google:

```js
function gtag(){ dataLayer.push(arguments); }
```

Мы вместо `arguments` пушим обычный массив (`[...args]`), поэтому GTM не распознаёт запись как команду `consent update` — «default» приходит из `index.html` (там сниппет правильный), а «update» из нашего кода игнорируется. Это ровно та проблема, что описана в PDF.

## Правка (один файл)

**`src/lib/cookieConsent.ts`** — заменить стрелочную функцию на классическую, использующую `arguments`:

```ts
function gtag() {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}
```

Вызовы `gtag('consent', 'update', {...})` остаются без изменений. После этой правки GTM Tag Assistant увидит событие `consent update` с корректными значениями `granted/denied` после клика по баннеру.

## Проверка
1. Открыть сайт в Tag Assistant, принять cookies → в списке событий появится `Consent` → `Update` с нужными сигналами.
2. Отозвать согласие через «Ustawienia cookies» → снова прилетит `Consent Update` со значениями `denied`.
3. Проверить, что `consent_analytics_granted` / `consent_advertisement_granted` по-прежнему появляются в dataLayer.

Больше ничего трогать не нужно — `index.html` (default), категории, autoClear, логирование и Clarity уже корректны.