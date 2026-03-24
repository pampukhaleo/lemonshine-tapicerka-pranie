export const frequencyTabs = [
  { id: 'weekly', label: 'Raz w tygodniu', discount: 0.20, badge: '-20%' },
  { id: 'biweekly', label: 'Raz na dwa tygodnie', discount: 0.15, badge: '-15%' },
  { id: 'monthly', label: 'Raz na miesiąc', discount: 0.10, badge: '-10%' },
  { id: 'once', label: 'Jednorazowo', discount: 0, badge: null },
];

export const apartmentPlans = [
  {
    id: 'one-room',
    title: 'Mieszkanie <40m²',
    basePrice: 248.90,
    description: 'Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu.',
  },
  {
    id: 'two-room',
    title: 'Mieszkanie <60m²',
    basePrice: 298.90,
    description: 'Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu.',
  },
  {
    id: 'three-room',
    title: 'Mieszkanie <80m²',
    basePrice: 348.90,
    description: 'Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu.',
  },
];

export const calculatePrice = (basePrice: number, discount: number): string => {
  const price = basePrice * (1 - discount);
  return price.toFixed(2).replace('.', ',');
};
