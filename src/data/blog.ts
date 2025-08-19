export interface ContentBlock {
  type: 'paragraph' | 'image' | 'heading' | 'list';
  content: string;
  alt?: string; // for images
  caption?: string; // for images
  level?: number; // for headings (1-6)
  listType?: 'ordered' | 'unordered'; // for lists
  items?: string[]; // for lists
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
    slug: 'plama-wraca-po-praniu-kanapy',
    title: 'Plama wraca po praniu kanapy? Najczęstsze przyczyny',
    excerpt: 'Dlaczego plamy powracają po samodzielnym czyszczeniu tapicerki? Poznaj główne przyczyny tego zjawiska i sposoby zapobiegania.',
    author: 'Ekspert Lemonshine',
    date: '2024-01-18',
    category: 'Problemy',
    readTime: '8 min',
    content: [
      {
        type: 'paragraph',
        content: 'Wielu klientów po samodzielnym praniu tapicerki zauważa, że plamy, które wydawały się usunięte, po kilku dniach znowu „wychodzą" na powierzchnię. To zjawisko jest dość częste i ma kilka przyczyn, o których warto wiedzieć, aby uniknąć rozczarowania.'
      },
      {
        type: 'heading',
        content: '1. Resztki brudu i detergentu w głębi materiału',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Najczęstsza przyczyna powracających plam to niedokładne wypłukanie kanapy. Kiedy podczas prania środek czyszczący wnika w gąbkę i nie zostaje całkowicie odessany, pozostaje w głębi tkaniny. Gdy tapicerka wysycha, brud i resztki chemii są „podciągane" z powrotem na powierzchnię, tworząc szarą obwódkę lub ciemniejsze przebarwienie.'
      },
      {
        type: 'heading',
        content: '2. Zbyt duża ilość wody',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Przy samodzielnym praniu często stosuje się zbyt dużo wody, co powoduje przemoczenie gąbki i pianki w środku kanapy. Woda transportuje zanieczyszczenia w głąb, a w trakcie schnięcia brud migruje z powrotem ku górze. Efekt? Plama znika tylko na chwilę, by po kilku dniach znowu się pojawić.'
      },
      {
        type: 'heading',
        content: '3. Tłuste i trudne plamy',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Niektóre zabrudzenia - szczególnie tłuste, olejowe czy po kawie - wymagają specjalistycznej chemii i metod neutralizacji. Jeśli użyje się wyłącznie domowych środków, plama może zostać rozbita, ale nie całkowicie usunięta. Po wyschnięciu resztki zanieczyszczenia są znowu widoczne.'
      },
      {
        type: 'heading',
        content: '4. Nieodpowiednia chemia czyszcząca',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Uniwersalne środki dostępne w marketach często zostawiają osad, który działa jak magnes na nowe zabrudzenia. Kanapa po takim praniu nie tylko szybciej się brudzi, ale też może pokazać „stare" plamy, które nie zostały dokładnie wyczyszczone.'
      },
      {
        type: 'heading',
        content: '5. Zbyt wolne schnięcie tapicerki',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Jeśli kanapa schnie kilka dni w wilgotnym pomieszczeniu, zanieczyszczenia mają więcej czasu, aby przemieścić się ku powierzchni. Dodatkowo wilgoć sprzyja rozwojowi nieprzyjemnego zapachu, a nawet pleśni.'
      },
      {
        type: 'heading',
        content: 'Jak zapobiec powracaniu plam?',
        level: 2
      },
      {
        type: 'list',
        content: 'Sposoby zapobiegania powracaniu plam',
        listType: 'unordered',
        items: [
          'Stosować profesjonalne metody ekstrakcyjne – odsysanie brudu i chemii w tym samym czasie',
          'Nie używać nadmiernej ilości wody – pranie powinno być kontrolowane i precyzyjne',
          'Dobierać odpowiednie środki do rodzaju plamy – inne działają na tłuszcz, inne na barwniki czy kawę',
          'Zapewnić szybkie schnięcie – np. poprzez wietrzenie pomieszczenia, użycie osuszacza lub nawiewu'
        ]
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
