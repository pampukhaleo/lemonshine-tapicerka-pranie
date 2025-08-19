export interface ContentBlock {
  type: 'paragraph' | 'image';
  content: string;
  alt?: string; // for images
  caption?: string; // for images
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'czy-warto-samemu-prac-tapicerke-meblowa',
    title: 'Czy warto samemu prać tapicerkę meblową?',
    subtitle: 'Domowe sposoby kontra profesjonalne czyszczenie – sprawdź, co naprawdę działa.',
    excerpt: 'Wiele osób próbuje radzić sobie samemu z czyszczeniem tapicerki. Sprawdź, kiedy domowe metody mają sens, a kiedy lepiej zaufać profesjonalistom.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-20',
    category: 'Porady',
    readTime: '6 min',
    content: [
      {
        type: 'paragraph',
        content: 'Wiele osób próbuje radzić sobie samemu - trochę wody, płyn do naczyń, soda albo wynajęty odkurzacz piorący. Przy świeżych plamach to działa - jeśli rozleje się kawa czy sok, szybka reakcja w domu potrafi lekko oświetlić plamę - ale nie zawsze ostatecznie usunąć.'
      },
      {
        type: 'image',
        content: 'blogPic/cup.jpg',
        alt: 'Porównanie efektów domowego i profesjonalnego czyszczenia tapicerki',
        caption: 'Różnica między domowym a profesjonalnym czyszczeniem'
      },
      {
        type: 'paragraph',
        content: 'Gorzej, gdy plama jest starsza albo w tapicerkę wniknął zapach. Środki domowe działają tylko powierzchniowo - wewnątrz materiału zostaje brud i bakterie. Często po wyschnięciu kanapa pachnie gorzej niż przed praniem, a plama wraca.'
      },
      {
        type: 'paragraph',
        content: 'Do tego dochodzi czas schnięcia. Po domowym czyszczeniu sofa bywa mokra nawet dwa dni, co sprzyja stęchliźnie.'
      },
      {
        type: 'image',
        content: '/before_after/11.jpg',
        alt: 'Mokra tapicerka po domowym czyszczeniu',
        caption: 'Tapicerka po domowym czyszczeniu może być mokra przez długi czas'
      },
      {
        type: 'paragraph',
        content: 'Każda tkanina reaguje inaczej. Welur, welwet czy mikrofibra wymagają delikatnego podejścia. Zbyt mocny środek albo gorąca woda mogą zostawić ślady lub odbarwienia.'
      },
      {
        type: 'paragraph',
        content: 'Jeśli plama jest stara, materiał intensywnie pachnie albo mebel jest delikatny - warto oddać go w ręce fachowców. Profesjonalne pranie usuwa brud i zapachy głęboko w tkaninie, a kanapa po czyszczeniu zostaje sucha. Efekt utrzymuje się znacznie dłużej niż po domowych metodach.'
      }
    ]
  },
  {
    id: 2,
    slug: 'jak-dbac-o-tapicerke-skorzana',
    title: 'Jak dbać o tapicerkę skórzaną? Praktyczny poradnik',
    excerpt: 'Skórzane meble wymagają szczególnej opieki. Dowiedz się, jak przedłużyć ich żywotność.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-15',
    category: 'Porady',
    readTime: '5 min',
    content: [
      {
        type: 'paragraph',
        content: 'Skórzane meble to inwestycja na lata, ale wymagają odpowiedniej pielęgnacji. W tym artykule dowiesz się, jak dbać o tapicerkę skórzaną, aby służyła Ci jak najdłużej.'
      },
      {
        type: 'paragraph',
        content: 'Pierwszym krokiem w pielęgnacji skóry jest regularne odkurzanie. Używaj szczotki o miękkim włosiu, aby usunąć kurz i drobne zabrudzenia z powierzchni i szczelin.'
      },
      {
        type: 'paragraph',
        content: 'Co 3-6 miesięcy warto przeprowadzać głębsze czyszczenie specjalnymi środkami do skóry. Unikaj używania zwykłych detergentów, które mogą wysuszyć i uszkodzić materiał.'
      },
      {
        type: 'paragraph',
        content: 'Pamiętaj o nawilżaniu skóry odpowiednimi balsamami. Dzięki temu zachowa swoją elastyczność i naturalny blask.'
      },
      {
        type: 'paragraph',
        content: 'Unikaj umieszczania skórzanych mebli w bezpośrednim świetle słonecznym i blisko źródeł ciepła, które mogą powodować pękanie i blaknięcie.'
      }
    ]
  },
  {
    id: 3,
    slug: 'top-5-najczestszych-plam-na-tapicerce',
    title: 'Top 5 najczęstszych plam na tapicerce i sposoby ich usuwania',
    excerpt: 'Kawa, wino, tłuszcz - każda plama ma swój sposób usuwania. Poznaj sprawdzone metody.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-10',
    category: 'Poradnik',
    readTime: '7 min',
    content: [
      {
        type: 'paragraph',
        content: 'Plamy na tapicerce to codzienność w każdym domu. Ważne jest szybkie reagowanie i zastosowanie odpowiedniej metody usuwania.'
      },
      {
        type: 'paragraph',
        content: '1. Plamy z kawy - natychmiast osusz płyn, następnie zastosuj roztwór octu z wodą w proporcji 1:2.'
      },
      {
        type: 'paragraph',
        content: '2. Plamy z wina czerwonego - posyp solą, aby wchłonęła płyn, następnie użyj wody gazowanej do wypłukania.'
      },
      {
        type: 'paragraph',
        content: '3. Plamy tłuszczowe - posyp talkiem lub skrobią kukurydzianą, pozostaw na 15 minut, następnie odkurz.'
      },
      {
        type: 'paragraph',
        content: '4. Plamy z krwi - użyj zimnej wody z dodatkiem amoniaku (1 łyżka na szklankę wody).'
      },
      {
        type: 'paragraph',
        content: '5. Plamy z tuszu - alkohol izopropylowy nałożony na watę pomoże rozpuścić tusz.'
      },
      {
        type: 'paragraph',
        content: 'Pamiętaj: zawsze testuj środek na niewidocznym fragmencie tapicerki przed użyciem na głównej plamie.'
      }
    ]
  },
  {
    id: 4,
    slug: 'dlaczego-warto-regularnie-czyscic-tapicerke',
    title: 'Dlaczego warto regularnie czyścić tapicerkę?',
    excerpt: 'Regularne czyszczenie to nie tylko estetyka, ale przede wszystkim zdrowie całej rodziny.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-05',
    category: 'Zdrowie',
    readTime: '4 min',
    content: [
      {
        type: 'paragraph',
        content: 'Regularne czyszczenie tapicerki to nie tylko kwestia estetyki - ma bezpośredni wpływ na zdrowie domowników.'
      },
      {
        type: 'paragraph',
        content: 'W tapicerce gromadzą się kurz, alergeny, bakterie i roztocza, które mogą wywoływać reakcje alergiczne i problemy oddechowe.'
      },
      {
        type: 'paragraph',
        content: 'Brudna tapicerka jest idealnym środowiskiem dla rozwoju pleśni i grzybów, szczególnie w wilgotnych pomieszczeniach.'
      },
      {
        type: 'paragraph',
        content: 'Regularne czyszczenie profesjonalnymi metodami usuwa do 99% alergenów i bakterii, poprawiając jakość powietrza w domu.'
      },
      {
        type: 'paragraph',
        content: 'Czysta tapicerka dłużej zachowuje swój pierwotny wygląd i trwałość, co oznacza oszczędność pieniędzy w długiej perspektywie.'
      },
      {
        type: 'paragraph',
        content: 'Zalecamy profesjonalne czyszczenie tapicerki co 6-12 miesięcy, w zależności od intensywności użytkowania.'
      }
    ]
  },
  {
    id: 5,
    slug: 'jak-przygotowac-meble-do-profesjonalnego-czyszczenia',
    title: 'Jak przygotować meble do profesjonalnego czyszczenia?',
    excerpt: 'Kilka prostych kroków, które pomogą osiągnąć najlepszy efekt czyszczenia tapicerki.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-01',
    category: 'Przygotowanie',
    readTime: '6 min',
    content: [
      {
        type: 'paragraph',
        content: 'Odpowiednie przygotowanie mebli przed przyjazdem specjalistów znacznie wpływa na efektywność czyszczenia.'
      },
      {
        type: 'paragraph',
        content: 'Usuń wszystkie luźne przedmioty z mebli - poduszki, koce, zabawki. Pozwoli to na dotarcie do wszystkich zakamarków.'
      },
      {
        type: 'paragraph',
        content: 'Przeprowadź podstawowe odkurzanie powierzchni, aby usunąć większe zanieczyszczenia i sierść zwierząt.'
      },
      {
        type: 'paragraph',
        content: 'Przesuń meble, aby specjaliści mieli łatwy dostęp ze wszystkich stron. Pamiętaj o zabezpieczeniu podłogi.'
      },
      {
        type: 'paragraph',
        content: 'Wskaż wszelkie problematyczne plamy i zabrudzenia, aby mogły zostać potraktowane specjalnymi środkami.'
      },
      {
        type: 'paragraph',
        content: 'Zapewnij odpowiednią wentylację pomieszczenia - otwórz okna lub włącz klimatyzację.'
      },
      {
        type: 'paragraph',
        content: 'Jeśli masz zwierzęta domowe, zabezpiecz je w innym pomieszczeniu podczas czyszczenia.'
      },
      {
        type: 'paragraph',
        content: 'Po czyszczeniu poczekaj 2-4 godziny przed ponownym użytkowaniem mebli, aby tapicerka całkowicie wyschła.'
      }
    ]
  }
];
