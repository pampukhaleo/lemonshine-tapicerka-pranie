
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
    price: '130 zł',
    image: 'furniture/23.jpg',
    popular: true
  },
  {
    name: 'Pranie 3-osobowej kanapy',
    subtitle: '1,7-2.5 m.',
    price: '150 zł',
    image: 'furniture/25.jpg',
    popular: true
  },
  {
    name: 'Pranie średniego naróżnika',
    subtitle: 'do 2,5×1,5 m.',
    price: '170 zł',
    image: 'furniture/34.jpg',
    popular: true
  },
  {
    name: 'Pranie dużego narożnika',
    subtitle: 'od 2,5×1,5 m.',
    price: 'od 200 zł',
    image: 'furniture/33.jpg',
    popular: false
  },
  {
    name: 'Pranie dużego fotela',
    subtitle: '',
    price: '60 zł',
    image: 'furniture/28.jpg',
    popular: false
  },
  {
    name: 'Pranie elementu rozkładanego',
    subtitle: 'kanapy',
    price: '50 zł',
    image: 'furniture/30.jpg',
    popular: false
  },
  {
    name: 'Pranie materaca',
    subtitle: 'z jednej strony',
    price: '130 zł',
    image: 'furniture/35.jpg',
    popular: true
  },
  {
    name: 'Pranie osobnej poduszki',
    subtitle: 'od kanapy',
    price: '20 zł',
    image: 'furniture/31.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła konferencyjnego',
    subtitle: '',
    price: '30 zł',
    image: 'furniture/29.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła tapicerowanego',
    subtitle: 'siedzenie',
    price: '20 zł',
    image: 'furniture/26.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela małego',
    subtitle: 'bez oparć tapicerowanych',
    price: '50 zł',
    image: 'furniture/27.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła biurowego',
    subtitle: '',
    price: '40 zł',
    image: 'furniture/24.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła z oparciem',
    subtitle: '',
    price: '40 zł',
    image: 'furniture/22.jpg',
    popular: false
  }
];
