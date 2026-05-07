import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://lemonshine.pl';

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/pranie-tapicerki/', label: 'Pranie tapicerki' },
  { href: '/mycie-okien/', label: 'Mycie okien' },
  { href: '/cennik/', label: 'Cennik' },
  { href: '/biznes/', label: 'Sprzątanie dla firm' },
  { href: '/outsourcing/', label: 'Outsourcing' },
  { href: '/blog/', label: 'Blog' },
  { href: '/polityka-prywatnosci/', label: 'Polityka prywatności' },
];

// route key '' = home
const routes = {
  '': {
    title: 'Pranie tapicerki Wrocław, Opole | Lemonshine',
    description: 'Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu. Czyszczenie kanap, foteli, narożników i materacy. Bezpieczne środki, gwarancja jakości.',
    h1: 'Profesjonalne pranie tapicerki we Wrocławiu i Opolu',
    paragraphs: [
      'Lemonshine to profesjonalna ekipa zajmująca się praniem tapicerki meblowej, czyszczeniem kanap, foteli, narożników i materacy w Opolu, Wrocławiu i okolicach.',
      'Używamy bezpiecznych, hipoalergicznych środków oraz profesjonalnego sprzętu ekstrakcyjnego. Gwarantujemy widoczny efekt – usuwamy plamy, kurz, roztocza i nieprzyjemne zapachy.',
      'Oferujemy także sprzątanie mieszkań, mycie okien oraz usługi dla firm i partnerów outsourcingowych. Sprawdź cennik lub umów termin online.',
    ],
  },
  'pranie-tapicerki': {
    title: 'Pranie tapicerki meblowej Wrocław | Lemonshine',
    description: 'Profesjonalne pranie tapicerki meblowej we Wrocławiu i Opolu – kanapy, fotele, narożniki, materace. Bezpieczne środki, dojazd, gwarancja efektu.',
    h1: 'Pranie tapicerki meblowej we Wrocławiu',
    paragraphs: [
      'Pierzemy tapicerkę kanap, foteli, narożników, krzeseł oraz materacy. Stosujemy metodę ekstrakcyjną, która głęboko czyści włókna i usuwa kurz, roztocza i alergeny.',
      'Działamy w Opolu, Wrocławiu i okolicach. Wycena jest darmowa, a większość zleceń realizujemy w ciągu 24-48 godzin od kontaktu.',
      'Sprawdź cennik prania tapicerki lub od razu zamów usługę przez formularz online.',
    ],
  },
  'mycie-okien': {
    title: 'Mycie okien Wrocław – profesjonalnie | Lemonshine',
    description: 'Profesjonalne mycie okien we Wrocławiu i Opolu. Mycie szyb, ram i parapetów z obu stron. Bezsmugowy efekt, własny sprzęt i środki.',
    h1: 'Mycie okien we Wrocławiu',
    paragraphs: [
      'Myjemy okna w mieszkaniach, domach, biurach i lokalach usługowych w Opolu i Wrocławiu. Czyścimy szyby z obu stron, ramy, uszczelki i parapety.',
      'Używamy własnego sprzętu i profesjonalnych środków, które nie pozostawiają smug. Pracujemy szybko, dokładnie i bezpiecznie.',
      'Skontaktuj się z nami, aby otrzymać szybką wycenę mycia okien w Twoim obiekcie.',
    ],
  },
  'cennik': {
    title: 'Cennik sprzątania i prania tapicerki | Lemonshine',
    description: 'Sprawdź cennik sprzątania mieszkań, prania tapicerki i mycia okien we Wrocławiu i Opolu. Przejrzyste ceny, rabaty za stałą współpracę.',
    h1: 'Cennik usług Lemonshine',
    paragraphs: [
      'Przejrzysty cennik wszystkich usług: sprzątanie mieszkań, pranie tapicerki, mycie okien. Ceny zależą od metrażu i stopnia zabrudzenia – minimalna wartość zlecenia to 150 zł.',
      'Dla regularnych klientów oferujemy rabaty do 20%. Dla firm wystawiamy faktury VAT i zawieramy umowy na stałą współpracę.',
      'Wybierz interesującą Cię usługę z listy lub skontaktuj się z nami w celu indywidualnej wyceny.',
    ],
  },
  'biznes': {
    title: 'Sprzątanie dla firm Wrocław | Lemonshine',
    description: 'Sprzątanie biur, hoteli, restauracji i placówek medycznych we Wrocławiu i Opolu. Faktura VAT, rabat do 20%, elastyczne godziny pracy.',
    h1: 'Sprzątanie dla biznesu',
    paragraphs: [
      'Obsługujemy biura, coworkingi, hotele, restauracje, kawiarnie i placówki medyczne. Pierzemy tapicerkę, czyścimy materace, dywany i wykładziny.',
      'Pracujemy elastycznie – również wieczorami i w weekendy, aby nie zakłócać pracy Twojego zespołu. Wystawiamy faktury VAT i zawieramy umowy na stałą obsługę.',
      'Skontaktuj się, aby otrzymać indywidualną ofertę dla swojej firmy.',
    ],
  },
  'outsourcing': {
    title: 'Outsourcing sprzątania | Lemonshine',
    description: 'Outsourcing prania tapicerki i sprzątania dla firm sprzątających, zarządców nieruchomości i agencji. White-label, ceny partnerskie, pełne wsparcie.',
    h1: 'Outsourcing usług sprzątania',
    paragraphs: [
      'Pracujemy z firmami sprzątającymi, zarządcami nieruchomości i agencjami nieruchomości. Działamy w modelu white-label – pod Twoją marką.',
      'Oferujemy specjalne ceny partnerskie, pomoc w wycenach oraz szkolenia z zakresu czyszczenia tapicerki, dywanów i materacy.',
      'Skontaktuj się, aby omówić warunki współpracy.',
    ],
  },
  'blog': {
    title: 'Blog o praniu tapicerki – porady | Lemonshine',
    description: 'Praktyczne porady o pielęgnacji tapicerki, usuwaniu plam i czyszczeniu mebli. Dowiedz się więcej o profesjonalnym praniu kanap i foteli.',
    h1: 'Blog Lemonshine',
    paragraphs: [
      'Praktyczne porady o pielęgnacji tapicerki, usuwaniu plam, doborze środków oraz utrzymaniu czystości w domu i biurze.',
      'Eksperci Lemonshine dzielą się wiedzą zdobywaną przy setkach realizacji w Opolu i Wrocławiu.',
      'Przeglądaj wszystkie artykuły poniżej.',
    ],
  },
  'polityka-prywatnosci': {
    title: 'Polityka prywatności | Lemonshine',
    description: 'Polityka prywatności Lemonshine – zasady przetwarzania danych osobowych klientów oraz informacje o plikach cookies.',
    h1: 'Polityka prywatności',
    paragraphs: [
      'Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych przez Lemonshine.',
      'Dokument zawiera informacje o administratorze danych, celu i podstawie przetwarzania, a także prawach przysługujących użytkownikom.',
      'Pełna treść dokumentu dostępna jest na tej stronie.',
    ],
  },
};

const truncate = (s, max) => (s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…');

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const buildSeoBlock = ({ h1, paragraphs }) => {
  const navHtml = navLinks
    .map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`)
    .join('');
  const paras = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
  return `<div id="seo-fallback" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);">
  <h1>${escapeHtml(h1)}</h1>
  ${paras}
  <nav aria-label="Główna nawigacja">
    <ul>${navHtml}</ul>
  </nav>
</div>`;
};

const renderShell = (templateHtml, route) => {
  const { title, description, h1, paragraphs } = route;
  const canonical = route.canonical;
  let html = templateHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(truncate(title, 60))}</title>`);
  html = html.replace(
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(truncate(description, 160))}" />`
  );
  if (/<link\s+rel="canonical"[^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  </head>`);
  }

  const seoBlock = buildSeoBlock({ h1, paragraphs });
  html = html.replace('<div id="root"></div>', `<div id="root">${seoBlock}</div>`);

  return html;
};

const createRouteShells = () => {
  const distPath = path.join(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(distPath) || !fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html not found - build may have failed');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexPath, 'utf8');

  // Read blog data
  const blogDataPath = path.join(__dirname, '../src/data/blog.ts');
  const blogData = fs.readFileSync(blogDataPath, 'utf8');

  // Parse blog posts: slug, title, excerpt
  const blogPosts = [];
  const postRegex = /\{\s*id:\s*\d+,\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?excerpt:\s*'([^']+)'/g;
  let m;
  while ((m = postRegex.exec(blogData)) !== null) {
    blogPosts.push({ slug: m[1], title: m[2], excerpt: m[3] });
  }
  console.log(`📚 Parsed ${blogPosts.length} blog posts`);

  let createdFiles = 0;

  // 1. Home
  const homeRoute = { ...routes[''], canonical: `${SITE}/` };
  fs.writeFileSync(indexPath, renderShell(baseTemplate, homeRoute));
  console.log('✅ Wrote /index.html');
  createdFiles++;

  // 2. Static routes
  Object.entries(routes).forEach(([key, route]) => {
    if (key === '') return;
    const routeDir = path.join(distPath, key);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
    const routeIndexPath = path.join(routeDir, 'index.html');
    const withCanonical = { ...route, canonical: `${SITE}/${key}/` };
    fs.writeFileSync(routeIndexPath, renderShell(baseTemplate, withCanonical));
    console.log(`✅ Created /${key}/index.html`);
    createdFiles++;
  });

  // 3. Blog posts
  blogPosts.forEach(({ slug, title, excerpt }) => {
    const blogPostDir = path.join(distPath, 'blog', slug);
    if (!fs.existsSync(blogPostDir)) fs.mkdirSync(blogPostDir, { recursive: true });
    const blogPostIndexPath = path.join(blogPostDir, 'index.html');
    const titleWithBrand = `${title} | Lemonshine`;
    const route = {
      title: titleWithBrand,
      description: excerpt,
      h1: title,
      paragraphs: [excerpt, 'Przeczytaj cały artykuł na blogu Lemonshine – praktyczne porady ekspertów z Opola i Wrocławia.'],
      canonical: `${SITE}/blog/${slug}/`,
    };
    fs.writeFileSync(blogPostIndexPath, renderShell(baseTemplate, route));
    console.log(`✅ Created /blog/${slug}/index.html`);
    createdFiles++;
  });

  console.log(`\n🎉 Wrote ${createdFiles} route shell files with per-route SEO`);
};

createRouteShells();
