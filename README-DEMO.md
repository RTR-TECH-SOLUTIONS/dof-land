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
- Coș (adăugare, cantitate, ștergere, prag de livrare gratuită), păstrat în `localStorage`.
- Comanda și cererea de ofertă se deschid în WhatsApp, cu textul gata scris.
- Filtru pe categorii și pe promoții, căutare cu sugestii în antet, meniu de mobil.

## Ce este provizoriu (de confirmat cu clienta)
- Telefon, e-mail, program: `src/data/site.ts`.
- Produse, gramaje, prețuri, texte: `src/data/products.ts`.
- Ateliere (durată, vârste, perioade) și tarifele de vizitare: în paginile respective, marcate `TODO(real)`.
- Indicațiile de drum și „40 de minute de București” nu sunt verificate.
- Praguri: cadou de la 100 lei, livrare gratuită de la 250 lei, livrare 19 lei.
- Poze: fișierele cu sufixul `-client` sunt ale clientei (cele de la ateliere sunt decupate, fără fețe). Restul sunt de pe Unsplash și se înlocuiesc.
- Reducerile și pachetele sunt inventate.
- Pozele cu copii primite de la clientă nu sunt folosite: e nevoie de acordul părinților.

## Cerut de clientă (4 oct. 2026, WhatsApp)
- Îngrășăminte și substrat în magazin, evenimente (max. 30 persoane), căpșunile ca produs principal.
- Culturi: lavandă, căpșuni, trandafiri, lalele, plante aromatice, flori de sezon; 5000 mp.
- Textele de la „Povestea noastră” sunt ale ei. Locul nu e casă: a fost amenajat pentru activitățile cu copii.
- Produsele noi, prețurile și detaliile de la evenimente sunt tot provizorii.

## La proiectul real
1. Catalog și comenzi în baza de date (Supabase + plată online, Netopia sau Stripe), pagini de produs randate la cerere, pe VPS + Coolify.
2. Checkout cu ramburs și card, e-mail de confirmare prin Resend.
3. Panou pentru clientă: produse, stoc, comenzi, cereri de ofertă.
4. Research de cuvinte cheie RO, SEO on-page și local, schema `LocalBusiness` și `Product`.
5. Pachet legal: cookie, termeni, confidențialitate, ANPC + SOL, credit RTR în footer.
6. Fonturi găzduite local, în loc de Google Fonts.
