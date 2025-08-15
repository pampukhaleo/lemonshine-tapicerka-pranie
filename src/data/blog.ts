
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'jak-dbac-o-tapicerke-skorzana',
    title: 'Jak dbać o tapicerkę skórzaną? Praktyczny poradnik',
    excerpt: 'Skórzane meble wymagają szczególnej opieki. Dowiedz się, jak przedłużyć ich żywotność.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-15',
    category: 'Porady',
    readTime: '5 min',
    content: [
      'Skórzane meble to inwestycja na lata, ale wymagają odpowiedniej pielęgnacji. W tym artykule dowiesz się, jak dbać o tapicerkę skórzaną, aby służyła Ci jak najdłużej.',
      'Pierwszym krokiem w pielęgnacji skóry jest regularne odkurzanie. Używaj szczotki o miękkim włosiu, aby usunąć kurz i drobne zabrudzenia z powierzchni i szczelin.',
      'Co 3-6 miesięcy warto przeprowadzać głębsze czyszczenie specjalnymi środkami do skóry. Unikaj używania zwykłych detergentów, które mogą wysuszyć i uszkodzić materiał.',
      'Pamiętaj o nawilżaniu skóry odpowiednimi balsamami. Dzięki temu zachowa swoją elastyczność i naturalny blask.',
      'Unikaj umieszczania skórzanych mebli w bezpośrednim świetle słonecznym i blisko źródeł ciepła, które mogą powodować pękanie i blaknięcie.'
    ]
  },
  {
    id: 2,
    slug: 'top-5-najczestszych-plam-na-tapicerce',
    title: 'Top 5 najczęstszych plam na tapicerce i sposoby ich usuwania',
    excerpt: 'Kawa, wino, tłuszcz - każda plama ma swój sposób usuwania. Poznaj sprawdzone metody.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-10',
    category: 'Poradnik',
    readTime: '7 min',
    content: [
      'Plamy na tapicerce to codzienność w każdym domu. Ważne jest szybkie reagowanie i zastosowanie odpowiedniej metody usuwania.',
      '1. Plamy z kawy - natychmiast osusz płyn, następnie zastosuj roztwór octu z wodą w proporcji 1:2.',
      '2. Plamy z wina czerwonego - posyp solą, aby wchłonęła płyn, następnie użyj wody gazowanej do wypłukania.',
      '3. Plamy tłuszczowe - posyp talkiem lub skrobią kukurydzianą, pozostaw na 15 minut, następnie odkurz.',
      '4. Plamy z krwi - użyj zimnej wody z dodatkiem amoniaku (1 łyżka na szklankę wody).',
      '5. Plamy z tuszu - alkohol izopropylowy nałożony na watę pomoże rozpuścić tusz.',
      'Pamiętaj: zawsze testuj środek na niewidocznym fragmencie tapicerki przed użyciem na głównej plamie.'
    ]
  },
  {
    id: 3,
    slug: 'dlaczego-warto-regularnie-czyscic-tapicerke',
    title: 'Dlaczego warto regularnie czyścić tapicerkę?',
    excerpt: 'Regularne czyszczenie to nie tylko estetyka, ale przede wszystkim zdrowie całej rodziny.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-05',
    category: 'Zdrowie',
    readTime: '4 min',
    content: [
      'Regularne czyszczenie tapicerki to nie tylko kwestia estetyki - ma bezpośredni wpływ na zdrowie domowników.',
      'W tapicerce gromadzą się kurz, alergeny, bakterie i roztocza, które mogą wywoływać reakcje alergiczne i problemy oddechowe.',
      'Brudna tapicerka jest idealnym środowiskiem dla rozwoju pleśni i grzybów, szczególnie w wilgotnych pomieszczeniach.',
      'Regularne czyszczenie profesjonalnymi metodami usuwa do 99% alergenów i bakterii, poprawiając jakość powietrza w domu.',
      'Czysta tapicerka dłużej zachowuje swój pierwotny wygląd i trwałość, co oznacza oszczędność pieniędzy w długiej perspektywie.',
      'Zalecamy profesjonalne czyszczenie tapicerki co 6-12 miesięcy, w zależności od intensywności użytkowania.'
    ]
  },
  {
    id: 4,
    slug: 'jak-przygotowac-meble-do-profesjonalnego-czyszczenia',
    title: 'Jak przygotować meble do profesjonalnego czyszczenia?',
    excerpt: 'Kilka prostych kroków, które pomogą osiągnąć najlepszy efekt czyszczenia tapicerki.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-01',
    category: 'Przygotowanie',
    readTime: '6 min',
    content: [
      'Odpowiednie przygotowanie mebli przed przyjazdem specjalistów znacznie wpływa na efektywność czyszczenia.',
      'Usuń wszystkie luźne przedmioty z mebli - poduszki, koce, zabawki. Pozwoli to na dotarcie do wszystkich zakamarków.',
      'Przeprowadź podstawowe odkurzanie powierzchni, aby usunąć większe zanieczyszczenia i sierść zwierząt.',
      'Przesuń meble, aby specjaliści mieli łatwy dostęp ze wszystkich stron. Pamiętaj o zabezpieczeniu podłogi.',
      'Wskaż wszelkie problematyczne plamy i zabrudzenia, aby mogły zostać potraktowane specjalnymi środkami.',
      'Zapewnij odpowiednią wentylację pomieszczenia - otwórz okna lub włącz klimatyzację.',
      'Jeśli masz zwierzęta domowe, zabezpiecz je w innym pomieszczeniu podczas czyszczenia.',
      'Po czyszczeniu poczekaj 2-4 godziny przed ponownym użytkowaniem mebli, aby tapicerka całkowicie wyschła.'
    ]
  }
];
