import type { ImageMetadata } from 'astro';

// TODO(real): catalogul vine din Supabase (sau Medusa); prețurile și gramajele de aici sunt provizorii.
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });
export const img = (name: string): ImageMetadata => images[`../assets/img/${name}.jpg`].default;

export type Category = { slug: string; name: string; image: string };

export const categories: Category[] = [
  { slug: 'capsuni', name: 'Căpșuni', image: 'capsuni' },
  { slug: 'lavanda', name: 'Lavandă', image: 'buchete-client' },
  { slug: 'flori-si-plante', name: 'Flori și plante', image: 'flori-sezon' },
  { slug: 'substrat-si-ingrasaminte', name: 'Substrat și îngrășăminte', image: 'atelier-masa-client' },
  { slug: 'miere', name: 'Miere', image: 'miere-raft' },
  { slug: 'cadouri', name: 'Cadouri', image: 'set-cadou' },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  unit: string;
  image: string;
  short: string;
  description: string[];
  details: string[];
  bestseller?: boolean;
  pickupOnly?: boolean;
  stock?: 'low' | 'order';
};

export const products: Product[] = [
  {
    slug: 'saculet-parfumat-lavanda-50g',
    name: 'Săculeț parfumat cu lavandă, 50 g',
    category: 'lavanda',
    price: 15,
    unit: 'bucată',
    image: 'saculet-unul-client',
    short: 'Flori uscate de lavandă, în săculeț de organza sau de in.',
    description: [
      'Florile sunt culese de mână în iunie, uscate la umbră și scuturate de pe tulpină. Nu adăugăm parfum și nici ulei: mirosul este doar al plantei.',
      'Țineți săculețul în dulap, în sertarul cu lenjerie sau lângă pernă. Când parfumul slăbește, frecați ușor săculețul între palme și se întoarce.',
    ],
    details: ['50 g flori uscate de lavandă', 'Săculeț de organza sau de in, la alegere', 'Ține moliile departe de haine', 'Parfumul durează cel puțin un an'],
    bestseller: true,
  },
  {
    slug: 'set-3-saculeti-lavanda',
    name: 'Set 3 săculeți cu lavandă, 3 x 50 g',
    category: 'lavanda',
    price: 39,
    oldPrice: 45,
    unit: 'set',
    image: 'saculeti-client',
    short: 'Trei săculeți pentru dulap, sertar și mașină.',
    description: [
      'Același săculeț de 50 g, în set de trei: unul mov de in, unul de organza albă și unul de organza mov.',
      'Fiecare vine cu eticheta Dof Land, deci setul se poate împărți și dărui.',
    ],
    details: ['3 săculeți x 50 g', 'In și organza', 'Cu etichetă, gata de dăruit'],
    bestseller: true,
  },
  {
    slug: 'buchet-lavanda-uscata',
    name: 'Buchet de lavandă uscată, 100 de fire',
    category: 'lavanda',
    price: 35,
    unit: 'buchet',
    image: 'buchete-client',
    short: 'Legat de mână cu sfoară de iută, tulpini de 30 cm.',
    description: [
      'Tăiem lavanda când primele flori de pe spic s-au deschis, apoi o uscăm cu capul în jos, la întuneric, ca să își păstreze culoarea.',
      'Buchetul stă bine într-o vază fără apă și își ține forma ani la rând.',
    ],
    details: ['Aproximativ 100 de fire', 'Tulpini de circa 30 cm', 'Ambalat în hârtie kraft'],
    bestseller: true,
  },
  {
    slug: 'lavanda-uscata-vrac-100g',
    name: 'Flori de lavandă uscate, vrac, 100 g',
    category: 'lavanda',
    price: 25,
    unit: 'pungă',
    image: 'lavanda-vrac-client',
    short: 'Pentru săculeți făcuți acasă, săpun sau ceai.',
    description: [
      'Flori scuturate și cernute, fără tulpini. Sunt aceleași flori pe care le punem în săculeții noștri.',
    ],
    details: ['100 g flori uscate', 'Pungă de hârtie resigilabilă', 'Recolta din iunie'],
  },
  {
    slug: 'coronita-lavanda',
    name: 'Coroniță de lavandă, 25 cm',
    category: 'lavanda',
    price: 85,
    stock: 'order',
    unit: 'bucată',
    image: 'coronita',
    short: 'Împletită din lavandă proaspătă, se usucă pe ușă.',
    description: [
      'O împletim la comandă, din lavandă abia tăiată. În două săptămâni se usucă de la sine și rămâne așa.',
    ],
    details: ['Diametru 25 cm', 'Realizată la comandă, în 3 zile', 'Disponibilă în iunie și iulie'],
  },
  {
    slug: 'miere-poliflora-400g',
    name: 'Miere polifloră, 400 g',
    category: 'miere',
    price: 32,
    unit: 'borcan',
    image: 'miere-borcan',
    short: 'Din stupii de la marginea lanului, extrasă la rece.',
    description: [
      'Albinele culeg din lavandă, din livadă și din florile de câmp din jurul grădinii. Mierea este doar extrasă și strecurată, fără încălzire.',
      'Se zaharisește peste iarnă. Este semnul că nu a fost încălzită.',
    ],
    details: ['400 g, borcan de sticlă', 'Extrasă la rece', 'Recolta din acest an'],
    bestseller: true,
  },
  {
    slug: 'miere-salcam-400g',
    name: 'Miere de salcâm, 400 g',
    category: 'miere',
    price: 38,
    stock: 'low',
    unit: 'borcan',
    image: 'miere-raft',
    short: 'Deschisă la culoare, rămâne lichidă mult timp.',
    description: [
      'Culeasă în mai, când înfloresc salcâmii. Are gust blând și se potrivește în ceai sau pe pâine cu unt.',
    ],
    details: ['400 g, borcan de sticlă', 'Recolta din luna mai', 'Cantitate limitată'],
  },
  {
    slug: 'lavanda-la-ghiveci',
    name: 'Lavandă la ghiveci, Lavandula angustifolia',
    category: 'flori-si-plante',
    price: 22,
    unit: 'ghiveci',
    image: 'lavanda-ghiveci',
    short: 'Plantă de doi ani, în ghiveci de 14 cm.',
    description: [
      'Plante înmulțite la noi, din butași. Rezistă la ger și înfloresc din primul an după plantare.',
    ],
    details: ['Ghiveci de 14 cm', 'Plantă de 2 ani', 'Se plantează la soare, în sol care nu ține apa'],
  },
  {
    slug: 'capsuni-proaspete-500g',
    name: 'Căpșuni proaspete, caserolă de 500 g',
    category: 'capsuni',
    price: 18,
    unit: 'caserolă',
    image: 'capsuni',
    short: 'Culese în dimineața în care veniți să le luați.',
    description: [
      'Căpșunile sunt cultura noastră principală. Le culegem coapte, de aceea nu le trimitem prin curier: se ridică de la grădină.',
    ],
    details: ['Caserolă de 500 g', 'Doar cu ridicare de la grădină', 'Sezon: mai - iunie'],
    pickupOnly: true,
    bestseller: true,
  },
  {
    slug: 'substrat-pentru-capsuni-20l',
    name: 'Substrat pentru căpșuni, sac de 20 l',
    category: 'substrat-si-ingrasaminte',
    price: 29,
    unit: 'sac',
    image: 'atelier-masa-client',
    short: 'Același substrat pe care îl folosim la răsadurile noastre.',
    description: ['Amestec de turbă și perlit, ușor acid, potrivit pentru căpșuni la ghiveci, în jardiniere sau în strat înălțat.'],
    details: ['Sac de 20 l', 'pH 5,5 - 6,5', 'Ajunge pentru 6 - 8 plante la ghiveci'],
  },
  {
    slug: 'substrat-universal-flori-10l',
    name: 'Substrat universal pentru flori, sac de 10 l',
    category: 'substrat-si-ingrasaminte',
    price: 17,
    unit: 'sac',
    image: 'rasaduri',
    short: 'Pentru ghivece, jardiniere și răsaduri.',
    description: ['Substrat afânat, cu îngrășământ de pornire, bun pentru majoritatea florilor de balcon și de grădină.'],
    details: ['Sac de 10 l', 'Cu îngrășământ de pornire', 'pH 6 - 7'],
  },
  {
    slug: 'ingrasamant-organic-granulat-1kg',
    name: 'Îngrășământ organic granulat, 1 kg',
    category: 'substrat-si-ingrasaminte',
    price: 24,
    unit: 'pungă',
    image: 'gradina-straturi',
    short: 'Pentru căpșuni, legume și flori, cu eliberare lentă.',
    description: ['Granule organice care se încorporează în sol primăvara și după recoltare. Nu ard rădăcinile.'],
    details: ['Pungă de 1 kg', 'Ajunge pentru aproximativ 10 mp', 'Se aplică de 2 ori pe an'],
  },
  {
    slug: 'plante-aromatice-ghiveci-set-3',
    name: 'Plante aromatice la ghiveci, set de 3',
    category: 'flori-si-plante',
    price: 27,
    unit: 'set',
    image: 'gradina-lazi',
    short: 'Busuioc, mentă și cimbru, în ghivece de 10 cm.',
    description: ['Trei plante aromatice crescute la noi, bune de ținut pe pervaz sau de mutat în grădină.'],
    details: ['3 ghivece de 10 cm', 'Busuioc, mentă, cimbru', 'Livrare de luni până miercuri'],
  },
  {
    slug: 'rasad-capsun-6-buc',
    name: 'Răsad de căpșun, set de 6 ghivece',
    category: 'capsuni',
    bestseller: true,
    price: 30,
    unit: 'set',
    image: 'rasaduri',
    short: 'Aceleași plante pe care le răsădesc copiii la ateliere.',
    description: [
      'Stoloni înrădăcinați în ghivece de 7 cm, din stratul nostru de căpșuni. Se plantează toamna sau primăvara devreme.',
    ],
    details: ['6 ghivece de 7 cm', 'Rodesc din al doilea an', 'Livrare de luni până miercuri'],
  },
  {
    slug: 'buchet-flori-de-sezon',
    name: 'Buchet cu flori de sezon',
    category: 'flori-si-plante',
    price: 45,
    unit: 'buchet',
    image: 'flori-sezon',
    short: 'Tăiat în dimineața în care veniți să îl luați.',
    description: [
      'Lalele primăvara, trandafiri vara, crizanteme toamna, plus ce a mai înflorit în săptămâna respectivă. Buchetul nu se trimite prin curier.',
    ],
    details: ['15 - 20 de fire', 'Doar cu ridicare de la grădină', 'Comandă cu o zi înainte'],
    pickupOnly: true,
  },
  {
    slug: 'cos-cadou-dof-land',
    name: 'Coș cadou Dof Land',
    category: 'cadouri',
    price: 149,
    oldPrice: 169,
    unit: 'coș',
    image: 'set-cadou',
    short: 'Miere, doi săculeți și un buchet de lavandă, în coș de răchită.',
    description: [
      'Cele mai cerute produse ale noastre, așezate într-un coș de răchită cu paie. Putem adăuga un bilet scris de mână.',
    ],
    details: ['Miere polifloră, 400 g', '2 săculeți cu lavandă, 50 g', 'Buchet de lavandă uscată', 'Coș de răchită'],
    bestseller: true,
  },
  {
    slug: 'pachet-miere-2x400g',
    name: 'Pachet miere, polifloră + salcâm, 2 x 400 g',
    category: 'miere',
    price: 62,
    oldPrice: 70,
    unit: 'pachet',
    image: 'miere-raft',
    short: 'Câte un borcan din fiecare, la preț de pachet.',
    description: ['Cele două feluri de miere pe care le avem anul acesta, într-un singur colet.'],
    details: ['Miere polifloră, 400 g', 'Miere de salcâm, 400 g'],
  },
  {
    slug: 'set-5-saculeti-pentru-dulap',
    name: 'Set 5 săculeți pentru dulap, 5 x 50 g',
    category: 'lavanda',
    price: 60,
    oldPrice: 75,
    unit: 'set',
    image: 'saculeti-client',
    short: 'Câte unul pentru fiecare raft și sertar.',
    description: ['Cinci săculeți de 50 g, la prețul a patru. Îi amestecăm: in mov și organza.'],
    details: ['5 săculeți x 50 g', 'In și organza', 'Plătiți patru, primiți cinci'],
  },
  {
    slug: 'cos-rachita-cu-lavanda',
    name: 'Coș de răchită cu lavandă uscată',
    category: 'cadouri',
    price: 95,
    unit: 'coș',
    image: 'buchet-cos',
    short: 'Aranjament pentru masă sau pervaz, gata făcut.',
    description: [
      'Un coș mic de răchită, umplut cu lavandă uscată. Nu are nevoie de apă și nici de îngrijire.',
    ],
    details: ['Coș de 20 cm', 'Aproximativ 150 de fire', 'Ambalat în cutie'],
  },
];

export const discount = (p: Product) => (p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0);
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? '';
