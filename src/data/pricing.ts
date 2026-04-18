
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
    price: '230 zł',
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
    price: '100 zł',
    image: '/furniture/28.jpg',
    popular: false
  },
  {
    name: 'Pranie elementu rozkładanego',
    subtitle: 'kanapy',
    price: '50 zł',
    image: '/furniture/30.jpg',
    popular: false
  },
  {
    name: 'Pranie materaca',
    subtitle: 'z jednej strony',
    price: '250+ zł',
    image: '/furniture/35.jpg',
    popular: true
  },
  {
    name: 'Pranie osobnej poduszki',
    subtitle: 'od kanapy',
    price: '30+ zł',
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
    subtitle: 'okrągłe',
    price: '40 zł',
    image: '/furniture/22.jpg',
    popular: false
  },
  {
    name: 'Pranie kanapy w krztałcie U',
    subtitle: 'duża',
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
    name: 'Mycie naczyń',
    subtitle: 'leżące w umywalce',
    price: '20 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Mycie mikrofali',
    subtitle: '',
    price: '15 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Mycie piekarnika',
    subtitle: '',
    price: '10-60 zł',
    image: '/placeholder.svg',
    popular: true
  },
  {
    name: 'Mycie okapu',
    subtitle: '',
    price: '10-60 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Sprzątanie szafek kuchennych',
    subtitle: '',
    price: '10-40 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Czyszczenie lodówki',
    subtitle: '',
    price: '50 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Sprzątanie balkonu',
    subtitle: '',
    price: '10 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Mycie zmywarki',
    subtitle: '',
    price: '20-50 zł',
    image: '/placeholder.svg',
    popular: false
  },
  {
    name: 'Mycie prysznicu/wanny',
    subtitle: '',
    price: '20-60 zł',
    image: '/placeholder.svg',
    popular: false
  },
];

export const windowPricingItems: PricingItem[] = [
  {
    name: 'Mycie okna',
    subtitle: '',
    price: '25-50 zł',
    image: '/window/window-1.jpg',
    popular: true
  },
  {
    name: 'Umycie obudowy balkonu',
    subtitle: 'szyby',
    price: 'od 20 zł',
    image: '/window/window-2.jpg',
    popular: true
  },
  {
    name: 'Mycie paneli szklanych',
    subtitle: '1 m²',
    price: '20 zł',
    image: '/window/window-3.jpg',
    popular: false
  },
];
