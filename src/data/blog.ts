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
  mainPicture: string;
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
    mainPicture: 'Czy_warto_samemu_prac_tapicerke_meblowa.jpg',
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
        content: 'blogPic/divan.jpg',
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
    mainPicture: 'Plama_wraca_po_praniu_kanapy_Najczestsze_przyczyny.jpg',
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
    slug: 'rodzaje-plam-na-tapicerce-jak-sobie-z-nimi-poradzic',
    title: 'Rodzaje plam na tapicerce. Jak sobie z nimi poradzić?',
    subtitle: 'Przewodnik po najczęstszych plamach i skutecznych metodach ich usuwania.',
    excerpt: 'Plamy na tapicerce to codzienność w domach z dziećmi i zwierzętami. Dowiedz się, z którymi plamami poradzisz się sam, a kiedy lepiej wezwać profesjonalistów.',
    author: 'Ekspert Lemonshine',
    date: '2025-08-20',
    category: 'Porady',
    readTime: '9 min',
    mainPicture: 'Rodzaje_plam.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Plamy na tapicerce - to codzienność, szczególnie w domach z dziećmi, zwierzętami albo wśród miłośników kawy i słodyczy. W tym artykule dowiesz się, z jakimi plamami da się poradzić domowymi sposobami, a kiedy lepiej nie ryzykować i wezwać profesjonalną pomoc.'
      },
      {
        type: 'heading',
        content: 'Plama z kawy',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Plamy z kawy należą do jednych z najczęstszych i najbardziej uporczywych zabrudzeń na tapicerce. Zawierają taniny, które wnikają głęboko w strukturę tkaniny i mogą powodować trwałe przebarwienia. Czas reakcji jest tutaj kluczowy – im szybciej zareagujemy, tym większa szansa na całkowite usunięcie śladu. Najlepiej unikać gorącej wody – może ona utrwalić plamę. W warunkach domowych warto użyć chłodnej wody z dodatkiem łagodnego detergentu, ale przy zaschniętych lub wielowarstwowych zabrudzeniach pomoc specjalisty może okazać się niezbędna.'
      },
      {
        type: 'image',
        content: 'blogPic/lemonshine_1.webp',
        alt: 'Usuwanie plamy z kawy z tapicerki - przed i po',
        caption: 'Efekt profesjonalnego usuwania plamy z kawy'
      },
      {
        type: 'heading',
        content: 'Plama z krwi',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Krew to białko – a białka pod wpływem ciepła się ścinają. Dlatego najważniejszą zasadą przy tego typu plamach jest unikanie ciepłej lub gorącej wody, która tylko pogłębi problem. Świeżą plamę najlepiej delikatnie osuszyć papierowym ręcznikiem, a następnie przemyć zimną wodą z odrobiną mydła. Starsze plamy z krwi są trudne do usunięcia bez odpowiednich enzymatycznych środków czyszczących, które rozkładają białko i pomagają w usunięciu tego typu plam.'
      },
      {
        type: 'image',
        content: 'blogPic/lemonshine_2.webp',
        alt: 'Usuwanie plamy z krwi z tapicerki',
        caption: 'Profesjonalne czyszczenie plam z krwi wymaga specjalnych środków'
      },
      {
        type: 'heading',
        content: 'Plama z moczu',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Plamy z moczu – szczególnie zwierzęcego – są problematyczne nie tylko ze względu na wygląd, ale przede wszystkim na zapach. Mocz wnika w głąb struktury tapicerki i przy nieprawidłowym czyszczeniu może powodować powracający zapach amoniaku. Domowe sposoby często jedynie maskują problem. Profesjonalne środki z enzymami nie tylko rozkładają plamę, ale neutralizują zapachy. Warto działać szybko, zanim płyn zdąży wyschnąć i wniknąć głębiej. Polecamy jak najszybciej zwrócić się do specjalisty, gdy plama z moczu pojawi się na tapicerce.'
      },
      {
        type: 'heading',
        content: 'Plama z czekolady',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Czekolada łączy w sobie tłuszcz, cukier i barwniki, co czyni ją wyjątkowo złożonym przeciwnikiem. Pocieranie na sucho może tylko pogorszyć sytuację – cząsteczki tłuszczu wnikają wtedy głębiej. Jeśli plama jest świeża, najlepiej delikatnie usunąć jej nadmiar łyżeczką, a następnie przemyć tkaninę zimną wodą. Starsze ślady wymagają działania środkiem tłuszczowym oraz środkiem do rozpuszczania cukru. W przypadku jasnych materiałów może być konieczne zastosowanie środka o właściwościach oksydacyjnych.'
      },
      {
        type: 'heading',
        content: 'Plama z czerwonego wina',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Plamy z czerwonego wina to jedne z najbardziej uporczywych. Zawierają silne barwniki pochodzenia naturalnego (antocyjany), które głęboko wnikają w strukturę materiału. Jeśli nie zareagujemy natychmiast, mogą pozostać na tapicerce na stałe. Trik z zasypaniem plamy solą działa jedynie wtedy, gdy reagujemy natychmiast — sól absorbuje część cieczy, ale nie usuwa barwnika. W praktyce domowe metody rzadko dają zadowalające efekty. Wino często wymaga użycia kwaśnych środków do usuwania barwników. Plamy z czerwonego wina na jasnej tapicerce to jeden z najczęstszych powodów zgłoszeń do profesjonalnych firm czyszczących.'
      },
      {
        type: 'heading',
        content: 'Plama z atramentu, długopisu, markera',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Plamy po tuszu i długopisach to najczęstszy problem w domach z dziećmi. Tusz zawiera bardzo intensywne pigmenty i alkohole, które natychmiast barwią materiał. Przypadkowe narysowanie linii na kanapie może stać się permanentnym problemem, jeśli nie zareagujemy odpowiednio. Zwykła woda nic nie zdziała — potrzeba rozpuszczalników lub specjalnych preparatów do barwników. Zmywacz do paznokci (aceton) może pomóc, ale nie zalecamy go stosować, gdzyż istnieje duże ryzyko uszkodzenia materiału.'
      },
      {
        type: 'image',
        content: 'blogPic/lemonshine_3.webp',
        alt: 'Usuwanie różnych rodzajów plam z tapicerki',
        caption: 'Różne rodzaje plam wymagają specjalistycznego podejścia'
      }
    ]
  }
];
