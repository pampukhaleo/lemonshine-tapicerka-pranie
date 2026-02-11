export const frequencyTabs = [
  { id: 'weekly', label: 'Raz w tygodniu', discount: 0.20, badge: '-20%' },
  { id: 'biweekly', label: 'Raz na dwa tygodnie', discount: 0.15, badge: '-15%' },
  { id: 'monthly', label: 'Raz na miesiąc', discount: 0.10, badge: '-10%' },
  { id: 'once', label: 'Jednorazowo', discount: 0, badge: null },
];

export const apartmentPlans = [
  {
    id: 'one-room',
    title: 'Jednopokojowe',
    basePrice: 248.63,
    area: 'do 35 m²',
    duration: '~2h',
    features: [
      'Kuchnia',
      'Łazienka',
      'Pokój',
      'Przedpokój',
    ],
  },
  {
    id: 'two-room',
    title: 'Dwupokojowe',
    basePrice: 317.38,
    area: 'do 55 m²',
    duration: '~3h',
    popular: true,
    features: [
      'Kuchnia',
      'Łazienka',
      '2 pokoje',
      'Przedpokój',
    ],
  },
  {
    id: 'three-room',
    title: 'Trzypokojowe',
    basePrice: 386.13,
    area: 'do 75 m²',
    duration: '~4h',
    features: [
      'Kuchnia',
      'Łazienka',
      '3 pokoje',
      'Przedpokój',
    ],
  },
];

export const calculatePrice = (basePrice: number, discount: number): string => {
  const price = basePrice * (1 - discount);
  return price.toFixed(2).replace('.', ',');
};
