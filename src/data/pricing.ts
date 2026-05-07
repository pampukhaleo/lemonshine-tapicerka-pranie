
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
    image: '/furniture/pranie_osobnej_poduszki.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła',
    subtitle: 'konferencyjnego',
    price: '30 zł',
    image: '/furniture/pranie_krzesla.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła tapicerowanego',
    subtitle: 'siedzenie',
    price: '20 zł',
    image: '/furniture/pranie_krzesla_tapicerowanego.jpg',
    popular: false
  },
  {
    name: 'Pranie fotela małego',
    subtitle: 'bez oparć tapicerowanych',
    price: '50 zł',
    image: '/furniture/pranie_fotela_malego.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła biurowego',
    subtitle: 'obrotowego',
    price: '30 zł',
    image: '/furniture/pranie_krzesla_biurowego.jpg',
    popular: false
  },
  {
    name: 'Pranie krzesła z oparciem',
    subtitle: 'okrągłe',
    price: '40 zł',
    image: '/furniture/pranie_krzesla_z_oparciem.jpg',
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
    image: '/cleaning/mycie_naczyn.jpg',
    popular: true
  },
  {
    name: 'Mycie mikrofali',
    subtitle: '',
    price: '15 zł',
    image: '/cleaning/mycie_mikrofali.jpg',
    popular: true
  },
  {
    name: 'Mycie piekarnika',
    subtitle: '',
    price: '10-60 zł',
    image: '/cleaning/mycie_piekarnika.jpg',
    popular: true
  },
  {
    name: 'Mycie okapu',
    subtitle: '',
    price: '10-60 zł',
    image: '/cleaning/mycie_okapu.jpg',
    popular: false
  },
  {
    name: 'Sprzątanie szafek kuchennych',
    subtitle: '',
    price: '10-40 zł',
    image: '/cleaning/sprzatanie_szafek_kuchennych.jpg',
    popular: false
  },
  {
    name: 'Czyszczenie lodówki',
    subtitle: '',
    price: '50 zł',
    image: '/cleaning/czyszczenie_lodowki.jpg',
    popular: false
  },
  {
    name: 'Sprzątanie balkonu',
    subtitle: '',
    price: '10 zł',
    image: '/cleaning/sprzatanie_balkonu.jpg',
    popular: false
  },
  {
    name: 'Mycie zmywarki',
    subtitle: '',
    price: '20-50 zł',
    image: '/cleaning/mycie_zmywarki.jpg',
    popular: false
  },
  {
    name: 'Mycie prysznicu/wanny',
    subtitle: '',
    price: '20-100 zł',
    image: '/cleaning/mycie_prysznicuwanny.jpg',
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
