
export interface PricingItem {
  name: string;
  subtitle?: string;
  price: string;
  image: string;
  popular: boolean;
}

export const pricingItems: PricingItem[] = [
  {
    name: 'Pranie 2-osobowej kanapy',
    subtitle: 'do 1,7 m.',
    price: '200 zł',
    image: '/furniture/23.jpg',
    popular: true
  },
  {
    name: 'Pranie 3-osobowej kanapy',
    subtitle: '1,7-2.5 m.',
    price: '220 zł',
    image: '/furniture/25.jpg',
    popular: true
  },
  {
    name: 'Pranie średniego naróżnika',
    subtitle: 'do 2,5×1,5 m.',
    price: '250 zł',
    image: '/furniture/34.jpg',
    popular: false
  },
  {
    name: 'Pranie dużego narożnika',
    subtitle: 'od 2,5×1,5 m.',
    price: '300+ zł',
    image: '/furniture/33.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela',
    subtitle: 'dużego',
    price: '60+ zł',
    image: '/furniture/28.jpg',
    popular: false
  },
  {
    name: 'Pranie elementu rozkładanego',
    subtitle: 'kanapy',
    price: '40 zł',
    image: '/furniture/30.jpg',
    popular: false
  },
  {
    name: 'Pranie materaca',
    subtitle: 'z jednej strony',
    price: '200+ zł',
    image: '/furniture/35.jpg',
    popular: true
  },
  {
    name: 'Pranie osobnej poduszki',
    subtitle: 'od kanapy',
    price: '20 zł',
    image: '/furniture/31.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła',
    subtitle: 'konferencyjnego',
    price: '30 zł',
    image: '/furniture/29.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła tapicerowanego',
    subtitle: 'siedzenie',
    price: '20 zł',
    image: '/furniture/26.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela małego',
    subtitle: 'bez oparć tapicerowanych',
    price: '50 zł',
    image: '/furniture/27.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła biurowego',
    subtitle: 'obrotowego',
    price: '30 zł',
    image: '/furniture/24.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła z oparciem',
    subtitle: '',
    price: '40 zł',
    image: '/furniture/22.jpg',
    popular: false
  },
  {
    name: 'Pranie kanapy w krztałcie U',
    subtitle: '',
    price: '350+ zł',
    image: '/furniture/36.jpg',
    popular: false
  },
  {
    name: 'Pranie wykładziny',
    subtitle: '1m2',
    price: '15 - 20 zł',
    image: '/furniture/wykladzina.jpg',
    popular: true
  }
];

export const cleaningPricingItems: PricingItem[] = [
  {
    name: 'Sprzątanie mieszkania',
    subtitle: 'do 40 m²',
    price: 'od 199 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Sprzątanie mieszkania',
    subtitle: 'do 60 m²',
    price: 'od 249 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Sprzątanie mieszkania',
    subtitle: 'do 80 m²',
    price: 'od 299 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Sprzątanie mieszkania',
    subtitle: 'powyżej 80 m²',
    price: 'od 349 zł',
    image: '/placeholder.svg',
    popular: false
  },
];

export const windowPricingItems: PricingItem[] = [
  {
    name: 'Mycie okien standardowych',
    subtitle: 'do 5 okien',
    price: 'od 150 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Mycie okien',
    subtitle: '6-10 okien',
    price: 'od 250 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Mycie okien balkonowych',
    subtitle: 'drzwi balkonowe',
    price: 'od 50 zł/szt',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Mycie przeszkleń',
    subtitle: 'duże powierzchnie',
    price: 'wycena indywidualna',
    image: '/placeholder.svg',
    popular: false
  },
];
