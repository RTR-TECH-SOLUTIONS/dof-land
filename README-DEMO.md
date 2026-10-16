# Dof Land, demo de prezentare

Astro 7 + Tailwind 4. `npm run dev` pentru lucru, `npm run build && npm run preview` pentru varianta finală.

## Pagini
- `/` pagina de start
- `/magazin` catalog cu filtru pe categorie (`?categorie=lavanda`)
- `/produs/[slug]` pagina de produs
- `/gradina-educativa` ateliere + cerere de ofertă
- `/evenimente` petreceri și zile de naștere, maximum 30 de persoane
- `/viziteaza-ne` experiențe, program, hartă

## Ce funcționează
- Coș (adăugare, cantitate, ștergere, cost de livrare), păstrat în `localStorage`.
- Comanda și cererea de ofertă se deschid în WhatsApp, cu textul gata scris.
- Filtru pe categorii, căutare cu sugestii în antet, meniu de mobil.

## Ce este provizoriu (de confirmat cu clienta)
- E-mail și program de vizitare: `src/data/site.ts`. Telefonul și WhatsApp-ul (0770 660 798) sunt ale clientei.
- Prag de livrare gratuită: nestabilit (`freeShippingFrom: null`). Plata: doar ramburs, de confirmat.
- Dacă plantele vii se trimit prin curier sau doar se ridică: de confirmat (`pickupOnly` pe produs).
- Tarifele atelierelor și ale calendarului sunt „de testat” după documentul ei: `src/data/garden.ts`.
- Indicațiile de drum și „40 de minute de București” nu sunt verificate.
- Poze: fișierele cu sufixul `-client` sunt ale clientei (cele de la ateliere sunt decupate, fără fețe). Restul sunt de pe Unsplash și se înlocuiesc.
- Pozele cu copii primite de la clientă nu sunt folosite: e nevoie de acordul părinților.

## Cerut de clientă (4 oct. 2026, WhatsApp)
- Îngrășăminte și substrat în magazin, evenimente (max. 30 persoane), căpșunile ca produs principal.
- Culturi: lavandă, căpșuni, trandafiri, lalele, plante aromatice, flori de sezon; 5000 mp.
- Textele de la „Povestea noastră” sunt ale ei. Locul nu e casă: a fost amenajat pentru activitățile cu copii.
- Produsele noi, prețurile și detaliile de la evenimente sunt tot provizorii.

## Trimis de clientă (16 oct. 2026, WhatsApp, fișierele în `client/`)
- Tabel cu 24 de produse: denumiri, descrieri și prețuri, preluate întocmai în `src/data/products.ts`.
- Domeniu dofland.ro, curier Sameday, 13,99 lei.
- Calendarul 2027 (aprilie - octombrie), 9 ateliere, 4 pachete pentru școli, ziua de eveniment: `src/data/garden.ts`.
- Firma: Hortismart Group, punct de lucru Poienarii Burchii.

## Poze provizorii de pe Wikimedia Commons (se înlocuiesc cu pozele clientei)
- sapun-lavanda.jpg: Savons à la lavande au marché d'Apt, Giåm, CC BY 2.0
- lumanare.jpg: Wax candles lit, Titus Tscharntke, domeniu public
- muscate.jpg: A Pelargonium peltatum red flower and plant, Bobjgalindo, CC BY 4.0
- petunii.jpg: Petunia flowers in BD, Anik Sarker, CC BY-SA 4.0
- primule.jpg: Primula vulgaris IMG 6303, Kızıl, CC BY-SA 4.0
- urechelnite.jpg: Isabela Kronemberger 2015, CC0
- leandru-mare.jpg: OleanderInPot, Miha Peče, CC BY-SA 4.0
- leandru-mic.jpg: Nerium oleander in pot D150722, Tangopaso, domeniu public
- bulbi-lalele.jpg: Tulipa humilis Lilliput bulbs, Шатилло Г.В., CC BY-SA 4.0
- zambile.jpg: Hyacinth Bulbs near Warsaw Central Station, Oleslawlama, CC BY-SA 4.0
- aromatice.jpg: Potted culinary herbs, Роман Рябенко, CC0
- stoloni-donna.jpg: Judgefloro, CC0
- stoloni-aprica.jpg: Strawberry plants grow in a pot, Shixart1985, CC BY 2.0
- ingrasamant.jpg, ingrasamant-flori.jpg: Sulphur bentonite pastilles, Tigersul, CC BY-SA 4.0

## La proiectul real
1. Catalog și comenzi în baza de date (Supabase + plată online, Netopia sau Stripe), pagini de produs randate la cerere, pe VPS + Coolify.
2. Checkout cu ramburs și card, e-mail de confirmare prin Resend.
3. Panou pentru clientă: produse, stoc, comenzi, cereri de ofertă.
4. Research de cuvinte cheie RO, SEO on-page și local, schema `LocalBusiness` și `Product`.
5. Pachet legal: cookie, termeni, confidențialitate, ANPC + SOL, credit RTR în footer.
6. Fonturi găzduite local, în loc de Google Fonts.
