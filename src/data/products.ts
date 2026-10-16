import type { ImageMetadata } from 'astro';

// TODO(real): catalogul vine din Supabase (sau Medusa).
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });
export const img = (name: string): ImageMetadata => images[`../assets/img/${name}.jpg`].default;

export type Category = { slug: string; name: string; image: string };

export const categories: Category[] = [
  { slug: 'capsuni', name: 'Căpșuni', image: 'stoloni-aprica' },
  { slug: 'lavanda', name: 'Lavandă', image: 'buchete-client' },
  { slug: 'flori-si-plante', name: 'Flori și plante', image: 'muscate' },
  { slug: 'ingrasaminte', name: 'Îngrășăminte', image: 'ingrasamant' },
  { slug: 'miere', name: 'Miere', image: 'miere-raft' },
  { slug: 'cadouri', name: 'Seturi cadou', image: 'set-cadou' },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  priceFrom?: boolean;
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

// Denumirile, descrierile și prețurile sunt cele trimise de clientă (tabelul din 16 oct. 2026).
export const products: Product[] = [
  {
    slug: 'stoloni-capsuni-donna',
    name: 'Stoloni de căpșuni, soi Donna',
    category: 'capsuni',
    price: 3.5,
    unit: 'bucată',
    image: 'stoloni-donna',
    short: 'Pentru înființarea unei culturi de căpșuni în grădină.',
    description: [
      'Stoloni de căpșuni din soiul Donna, potriviți pentru înființarea unei culturi în grădină. O alegere practică pentru cei care doresc să își cultive propriile căpșuni.',
    ],
    details: ['Soi Donna', 'Preț pe bucată', 'Din cultura noastră de la Poienarii Burchii'],
    bestseller: true,
  },
  {
    slug: 'stoloni-capsuni-aprica',
    name: 'Stoloni de căpșuni, soi Aprica',
    category: 'capsuni',
    price: 3.5,
    unit: 'bucată',
    image: 'stoloni-aprica',
    short: 'Pentru grădină sau pentru spații special amenajate.',
    description: [
      'Stoloni de căpșuni din soiul Aprica, ideali pentru plantarea în grădină sau în spații special amenajate. Potriviți pentru grădinarii care doresc să își dezvolte propria cultură de căpșuni.',
    ],
    details: ['Soi Aprica', 'Preț pe bucată', 'Din cultura noastră de la Poienarii Burchii'],
  },
  {
    slug: 'set-3-saculeti-lavanda-50g',
    name: 'Săculeți cu lavandă 50 g, set de 3 bucăți',
    category: 'lavanda',
    price: 12.99,
    unit: 'set',
    image: 'saculeti-client',
    short: 'Pentru dulapuri, sertare și spații de depozitare.',
    description: [
      'Bucură-te de parfumul delicat al lavandei cu acest set de 3 săculeți aromați, ideali pentru parfumarea dulapurilor, sertarelor sau a spațiilor de depozitare. O alegere inspirată și pentru un mic cadou parfumat.',
    ],
    details: ['3 săculeți x 50 g', 'Lavandă uscată', 'Potrivit și ca mic cadou'],
    bestseller: true,
  },
  {
    slug: 'set-5-saculeti-lavanda-30g',
    name: 'Săculeți cu lavandă 30 g, set de 5 bucăți',
    category: 'lavanda',
    price: 12.99,
    unit: 'set',
    image: 'saculet-unul-client',
    short: 'Cinci săculeți mai mici, câte unul pentru fiecare raft.',
    description: [
      'Set de 5 săculeți cu lavandă parfumată, perfecți pentru a aduce o notă florală și proaspătă în locuință. Ideali pentru dulapuri, sertare sau pentru a fi oferiți în dar.',
    ],
    details: ['5 săculeți x 30 g', 'Lavandă uscată', 'Pentru dulapuri și sertare'],
  },
  {
    slug: 'sapun-cu-lavanda',
    name: 'Săpun cu lavandă, diverse modele',
    category: 'lavanda',
    price: 14.99,
    unit: 'bucată',
    image: 'sapun-lavanda',
    short: 'Modele variate, potrivit și pentru un cadou.',
    description: [
      'Săpun cu lavandă, disponibil în modele variate, potrivit pentru momentele de răsfăț și pentru un cadou cu parfum floral. Designurile diverse îl fac potrivit pentru diferite ocazii.',
    ],
    details: ['Diverse modele', 'Modelul se alege la confirmarea comenzii'],
  },
  {
    slug: 'lumanare-cu-lavanda',
    name: 'Lumânare cu lavandă, diverse modele',
    category: 'lavanda',
    price: 14.99,
    unit: 'bucată',
    image: 'lumanare',
    short: 'Pentru decorul casei și pentru seri liniștite.',
    description: [
      'Lumânare cu lavandă, disponibilă în modele variate, ideală pentru a completa decorul casei și pentru a crea o atmosferă plăcută. O alegere potrivită pentru relaxare sau pentru un cadou deosebit.',
    ],
    details: ['Diverse modele', 'Modelul se alege la confirmarea comenzii'],
  },
  {
    slug: 'miere-poliflora-380ml',
    name: 'Miere polifloră, 380 ml',
    category: 'miere',
    price: 29.99,
    unit: 'borcan',
    image: 'miere-borcan',
    short: 'Gust dulce și aromă florală.',
    description: [
      'Miere polifloră cu gust dulce și aromă florală, potrivită pentru micul dejun, îndulcirea băuturilor sau deserturi. Un produs apreciat pentru savoarea sa și pentru versatilitatea în bucătărie.',
    ],
    details: ['Borcan de 380 ml', 'Miere polifloră'],
    bestseller: true,
  },
  {
    slug: 'miere-poliflora-200ml',
    name: 'Miere polifloră, 200 ml',
    category: 'miere',
    price: 18.99,
    unit: 'borcan',
    image: 'miere-raft',
    short: 'Ambalaj mic, pentru consumul zilnic sau cadou.',
    description: [
      'Miere polifloră în ambalaj practic, ideală pentru consumul zilnic sau pentru a fi oferită cadou. Se potrivește perfect alături de ceai, iaurt, pâine prăjită sau deserturi.',
    ],
    details: ['Borcan de 200 ml', 'Miere polifloră'],
  },
  {
    slug: 'set-cadou-miere-lavanda',
    name: 'Set cadou cu miere, săculeț de lavandă, lumânare și săpun',
    category: 'cadouri',
    price: 49.99,
    unit: 'set',
    image: 'set-cadou',
    short: 'Miere 200 ml cu linguriță, săculeț, lumânare și săpun.',
    description: [
      'Un set cadou deosebit, care îmbină savoarea mierii cu parfumul delicat al lavandei. Conține miere, un săculeț parfumat, o lumânare și un săpun, fiind potrivit pentru aniversări, sărbători sau alte ocazii speciale.',
    ],
    details: ['Miere polifloră, 200 ml, cu linguriță pentru miere', 'Săculeț cu lavandă', 'Lumânare cu lavandă', 'Săpun cu lavandă'],
    bestseller: true,
  },
  {
    slug: 'set-cadou-lavanda',
    name: 'Set cadou cu săculeț de lavandă, lumânare și săpun',
    category: 'cadouri',
    price: 29.99,
    unit: 'set',
    image: 'cosuri-lavanda',
    short: 'Trei produse cu lavandă, gata de dăruit.',
    description: [
      'Un cadou elegant, cu produse inspirate de parfumul lavandei. Setul conține un săculeț parfumat, o lumânare și un săpun, fiind o alegere potrivită pentru a oferi un mic moment de răsfăț unei persoane dragi.',
    ],
    details: ['Săculeț cu lavandă', 'Lumânare cu lavandă', 'Săpun cu lavandă'],
  },
  {
    slug: 'set-cadou-diverse-produse',
    name: 'Set cadou cu diverse produse',
    category: 'cadouri',
    price: 49.99,
    priceFrom: true,
    unit: 'set',
    image: 'buchet-cos',
    short: 'Îl alcătuim din ce avem în sezon.',
    description: [
      'Set cadou cu o selecție de produse atent alese, potrivit pentru a surprinde plăcut persoanele dragi. Ideal pentru aniversări, sărbători sau alte ocazii speciale. Conținutul poate varia în funcție de produsele disponibile.',
    ],
    details: ['Conținutul variază după sezon', 'Spuneți-ne bugetul și ocazia, pe WhatsApp'],
  },
  {
    slug: 'butasi-lavanda',
    name: 'Butași de lavandă',
    category: 'flori-si-plante',
    price: 4.99,
    unit: 'bucată',
    image: 'lavanda-ghiveci',
    short: 'Pentru grădini, alei și spații decorative.',
    description: [
      'Butași de lavandă potriviți pentru amenajarea grădinilor, aleilor sau spațiilor decorative. O plantă apreciată pentru florile sale parfumate și aspectul elegant.',
    ],
    details: ['Preț pe bucată', 'Din lavanda noastră'],
    bestseller: true,
  },
  {
    slug: 'urechelnite-ghiveci-12cm',
    name: 'Urechelnițe, ghiveci de 12 cm',
    category: 'flori-si-plante',
    price: 14.99,
    unit: 'ghiveci',
    image: 'urechelnite',
    short: 'Pentru rocării, jardiniere și amenajări de exterior.',
    description: [
      'Urechelnițe decorative în ghiveci de 12 cm, potrivite pentru grădini, rocării, jardiniere și amenajări de exterior. Plantele oferă un aspect decorativ deosebit și sunt potrivite pentru diverse aranjamente.',
    ],
    details: ['Ghiveci de 12 cm'],
  },
  {
    slug: 'rasad-muscate',
    name: 'Răsad de mușcate',
    category: 'flori-si-plante',
    price: 7.99,
    unit: 'bucată',
    image: 'muscate',
    short: 'Pentru balcoane, terase și grădini.',
    description: [
      'Răsaduri de mușcate ideale pentru decorarea balcoanelor, teraselor și grădinilor. Disponibile pentru amenajări florale pline de culoare, în funcție de varietățile existente.',
    ],
    details: ['Preț pe bucată', 'Culorile depind de varietățile disponibile'],
  },
  {
    slug: 'rasad-petunii',
    name: 'Răsad de petunii',
    category: 'flori-si-plante',
    price: 4.99,
    unit: 'bucată',
    image: 'petunii',
    short: 'Pentru jardiniere, ghivece și ronduri de flori.',
    description: [
      'Petunii potrivite pentru jardiniere, ghivece și ronduri de flori. Florile lor colorate sunt ideale pentru a înfrumuseța balcoanele, terasele și grădinile în sezonul cald.',
    ],
    details: ['Preț pe bucată'],
  },
  {
    slug: 'rasad-primule',
    name: 'Răsad de primule',
    category: 'flori-si-plante',
    price: 6.99,
    unit: 'bucată',
    image: 'primule',
    short: 'Culoare în grădină la începutul primăverii.',
    description: [
      'Primule decorative, ideale pentru a aduce culoare grădinii sau balconului la începutul primăverii. Potrivite pentru ghivece, jardiniere și aranjamente florale de sezon.',
    ],
    details: ['Preț pe bucată'],
  },
  {
    slug: 'rasaduri-flori-primavara-6',
    name: 'Răsaduri de flori de primăvară, 6 plante',
    category: 'flori-si-plante',
    price: 24.99,
    unit: 'set',
    image: 'rasaduri',
    short: 'Pentru ghivece, jardiniere și straturi de flori.',
    description: [
      'Set de 6 plante decorative de primăvară, ideal pentru amenajarea ghivecelor, jardinierelor și straturilor de flori. O combinație potrivită pentru a aduce culoare și prospețime spațiilor exterioare.',
    ],
    details: ['6 plante', 'Combinația depinde de ce a crescut în sezon'],
  },
  {
    slug: 'plante-aromatice-mix-6',
    name: 'Plante aromatice, mix de 6 plante',
    category: 'flori-si-plante',
    price: 18.99,
    unit: 'set',
    image: 'aromatice',
    short: 'Pentru grădină, balcon sau bucătărie.',
    description: [
      'Mix de plante aromatice potrivite pentru grădină, balcon sau bucătărie. Ideale pentru cei care doresc să aibă la îndemână plante proaspete pentru preparate culinare și pentru a înfrumuseța spațiul.',
    ],
    details: ['6 plante aromatice'],
  },
  {
    slug: 'bulbi-lalele-5',
    name: 'Bulbi de lalele, 5 bucăți',
    category: 'flori-si-plante',
    price: 25,
    unit: 'set',
    image: 'bulbi-lalele',
    short: 'Pentru grădină, ghivece sau jardiniere.',
    description: [
      'Bulbi de lalele potriviți pentru plantarea în grădină, ghivece sau jardiniere. Ideali pentru a obține flori decorative și colorate în sezonul de primăvară.',
    ],
    details: ['5 bulbi', 'Se plantează toamna, înfloresc primăvara'],
  },
  {
    slug: 'bulbi-zambile',
    name: 'Bulbi de zambile',
    category: 'flori-si-plante',
    price: 5,
    unit: 'bucată',
    image: 'zambile',
    short: 'Flori parfumate, în grădină sau la ghiveci.',
    description: [
      'Bulbi de zambile potriviți pentru cultivarea în grădină sau în ghivece. Alege-i pentru a te bucura de flori decorative și de parfumul lor specific în sezonul de înflorire.',
    ],
    details: ['Preț pe bucată', 'Se plantează toamna, înfloresc primăvara'],
  },
  {
    slug: 'leandru-ghiveci-12cm',
    name: 'Leandru, ghiveci de 12 cm',
    category: 'flori-si-plante',
    price: 19.99,
    unit: 'ghiveci',
    image: 'leandru-mic',
    short: 'Pentru terase, balcoane și grădini.',
    description: [
      'Leandru decorativ în ghiveci de 12 cm, potrivit pentru terase, balcoane și grădini. O plantă apreciată pentru aspectul său ornamental și pentru florile sale colorate, în condiții adecvate de cultivare.',
    ],
    details: ['Ghiveci de 12 cm'],
  },
  {
    slug: 'leandru-ghiveci-25cm',
    name: 'Leandru, ghiveci de 25 cm',
    category: 'flori-si-plante',
    price: 39.99,
    unit: 'ghiveci',
    image: 'leandru-mare',
    short: 'Plantă mai mare, cu prezență pe terasă.',
    description: [
      'Leandru decorativ în ghiveci de 25 cm, ideal pentru amenajarea teraselor, balcoanelor și grădinilor. Dimensiunea mai mare a ghiveciului îl face potrivit pentru cei care își doresc o plantă decorativă cu prezență vizuală mai pronunțată.',
    ],
    details: ['Ghiveci de 25 cm'],
  },
  {
    slug: 'ingrasamant-capsuni-500g',
    name: 'Îngrășământ pentru căpșuni, 500 g',
    category: 'ingrasaminte',
    price: 22.99,
    unit: 'pungă',
    image: 'ingrasamant',
    short: 'Pentru o cultură de căpșuni îngrijită.',
    description: [
      'Îngrășământ destinat plantelor de căpșuni, conceput pentru a susține dezvoltarea acestora și pentru a contribui la obținerea unei culturi îngrijite. Se utilizează conform instrucțiunilor de pe ambalaj.',
    ],
    details: ['500 g', 'Se folosește conform instrucțiunilor de pe ambalaj'],
  },
  {
    slug: 'ingrasamant-flori-500g',
    name: 'Îngrășământ pentru flori, 500 g',
    category: 'ingrasaminte',
    price: 22.99,
    unit: 'pungă',
    image: 'ingrasamant-flori',
    short: 'Pentru creșterea plantelor ornamentale.',
    description: [
      'Îngrășământ pentru îngrijirea florilor, potrivit pentru susținerea creșterii și dezvoltării plantelor ornamentale. Recomandat pentru utilizare conform instrucțiunilor producătorului.',
    ],
    details: ['500 g', 'Se folosește conform instrucțiunilor producătorului'],
  },
];

export const discount = (p: Product) => (p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0);
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? '';
