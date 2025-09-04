
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
    price: '250 zł',
    image: 'furniture/23.jpg',
    popular: true
  },
  {
    name: 'Pranie 3-osobowej kanapy',
    subtitle: '1,7-2.5 m.',
    price: '280 zł',
    image: 'furniture/25.jpg',
    popular: true
  },
  {
    name: 'Pranie średniego naróżnika',
    subtitle: 'do 2,5×1,5 m.',
    price: '300 zł',
    image: 'furniture/34.jpg',
    popular: true
  },
  {
    name: 'Pranie dużego narożnika',
    subtitle: 'od 2,5×1,5 m.',
    price: 'od 400 zł',
    image: 'furniture/33.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela',
    subtitle: 'dużego',
    price: '150 zł',
    image: 'furniture/28.jpg',
    popular: false
  },
  {
    name: 'Pranie elementu rozkładanego',
    subtitle: 'kanapy',
    price: '80 zł',
    image: 'furniture/30.jpg',
    popular: false
  },
  {
    name: 'Pranie materaca',
    subtitle: 'z jednej strony',
    price: 'od 300 zł',
    image: 'furniture/35.jpg',
    popular: true
  },
  {
    name: 'Pranie osobnej poduszki',
    subtitle: 'od kanapy',
    price: '30 zł',
    image: 'furniture/31.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła',
    subtitle: 'konferencyjnego',
    price: '60 zł',
    image: 'furniture/29.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła tapicerowanego',
    subtitle: 'siedzenie',
    price: '40 zł',
    image: 'furniture/26.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela małego',
    subtitle: 'bez oparć tapicerowanych',
    price: '80 zł',
    image: 'furniture/27.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła biurowego',
    subtitle: 'obrotowego',
    price: '60 zł',
    image: 'furniture/24.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła z oparciem',
    subtitle: '',
    price: '70 zł',
    image: 'furniture/22.jpg',
    popular: false
  }
];
