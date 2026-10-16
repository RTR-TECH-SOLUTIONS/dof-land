// Ateliere, pachete pentru școli și calendarul sezonului, din documentul clientei
// „DOF LAND Calendar Evenimente Ateliere 2027”.
// TODO(real): clienta le numește „tarife de testat”; se confirmă înainte de lansare.

export type Workshop = { name: string; duration: string; includes: string; price: string };

export const workshops: Workshop[] = [
  { name: 'Micul grădinar', duration: '60 - 90 min', includes: 'Plantare în ghiveci, etichetă cu numele plantei și instrucțiuni de îngrijire', price: '30 lei / copil' },
  { name: 'Detectivii naturii', duration: '60 - 75 min', includes: 'Misiuni de observare: frunze, semințe, insecte polenizatoare și forme din grădină', price: '20 lei / copil' },
  { name: 'Ghiveciul meu pictat', duration: '60 - 90 min', includes: 'Decorarea unui ghiveci și plantarea unei flori sau a unei plante aromatice', price: '25 lei / copil' },
  { name: 'Săculeț parfumat cu lavandă', duration: '45 - 60 min', includes: 'Umplere, decorare și personalizare; în perioada recoltei', price: '20 lei / participant' },
  { name: 'Culorile recoltei', duration: '60 - 75 min', includes: 'Tablou sau colaj din frunze, semințe și materiale naturale', price: '25 lei / copil' },
  { name: 'Semințe și polenizatori', duration: '60 - 90 min', includes: 'Joc educativ, observare și semănarea unui amestec potrivit sezonului', price: '25 lei / copil' },
  { name: 'Atelier de miere și plante', duration: '45 - 60 min', includes: 'Poveste despre plantele melifere și degustare opțională, cu verificarea alergiilor', price: '25 lei / participant' },
  { name: 'Atelier pentru familie', duration: '90 min', includes: 'Adultul și copilul realizează împreună o activitate de sezon', price: '70 lei / pereche' },
  { name: 'Atelier privat sau aniversare', duration: '2 - 3 ore', includes: 'Atelier ales, decor simplu, activitate ghidată și zonă rezervată', price: 'de la 700 lei / grup' },
];

export const schoolPackages = [
  { name: 'Explorator', duration: '60 min', includes: 'Tur ghidat, joc de observare, fișă simplă de activitate', price: 20 },
  { name: 'Explorator și plantare', duration: '90 - 120 min', includes: 'Tur, atelier de plantare și ghiveciul copilului pentru acasă', price: 45 },
  { name: 'Științe ale naturii', duration: '2 - 2,5 ore', includes: 'Stații practice: biodiversitate, plante, apă și sol, plus un mini-proiect de echipă', price: 50 },
  { name: 'Experiență de sezon', duration: '2 - 3 ore', includes: 'Tur tematic, atelier de sezon, produs realizat și diplomă de explorator', price: 60 },
];

export const calendar = [
  { month: 'Aprilie', theme: 'Paște și trezirea grădinii', activities: 'Vânătoarea de ouă și a comorilor naturii, atelier de decorat ouă, primul ghiveci plantat, tur „Ce se trezește primăvara?”', audience: 'Familii cu copii de 3 - 10 ani, grădinițe', price: '45 lei / copil, pachet familie 120 lei' },
  { month: 'Mai', theme: 'Micii grădinari', activities: 'Plantare de răsaduri, flori semănate pentru polenizatori, „de la sămânță la farfurie”, ghivece personalizate', audience: 'Școli, grădinițe, familii', price: '45 lei / copil, program școlar extins 65 - 85 lei' },
  { month: 'Iunie', theme: 'Ziua Copilului și început de vară', activities: 'Festivalul Micilor Grădinari, traseu cu provocări, atelier de coronițe și flori, picnic și colț foto', audience: 'Familii, grupuri organizate', price: 'bilet 35 lei / copil, atelier 20 - 35 lei' },
  { month: 'Iulie', theme: 'Lavandă, flori și simțuri', activities: 'Atelier de săculeți cu lavandă, buchețele, vânătoare de culori și miresme, fotografii în grădină', audience: 'Familii, adulți, grupuri mici', price: '50 lei / atelier, ședință foto 30 - 60 lei / familie' },
  { month: 'August', theme: 'Vara gusturilor din grădină', activities: 'Culegem și observăm legume, degustare de sezon, atelier de semințe și plante aromatice, „detectivii biodiversității”', audience: 'Familii, tabere de zi, grupuri', price: 'de la 45 lei / copil, pachet familie 120 lei' },
  { month: 'Septembrie', theme: 'Înapoi la natură', activities: 'Ateliere pentru clase, jurnalul grădinii, plantare de toamnă, științe ale naturii, polenizatorii', audience: 'Școli, grădinițe, after-school', price: '50 lei / copil, două activități 70 lei' },
  { month: 'Octombrie', theme: 'Sărbătoarea recoltei', activities: 'Festival de toamnă, dovleci decorați, artă cu frunze și semințe, traseu senzorial, mini-târg cu produse Dof Land', audience: 'Familii, școli, comunitate', price: 'bilet 35 lei / copil, atelier 25 lei' },
];

export const eventDay = [
  ['10:30', 'Primirea participanților și regulile de explorare'],
  ['11:00', 'Tur ghidat prin grădină, 20 - 30 de minute'],
  ['11:45', 'Atelierul principal, cu locuri rezervate'],
  ['12:45', 'Pauză, degustare de sezon sau timp liber'],
  ['13:15', 'Joc de familie sau traseu cu provocări'],
  ['14:00', 'Fotografii, magazinul cu produse și încheierea'],
];
