const base = import.meta.env.BASE_URL.replace(/\/$/, '');
// Linkurile interne trec prin u(), ca demo-ul să meargă și într-un subdirector (GitHub Pages).
export const u = (path: string) => `${base}${path}`;

// Telefonul și WhatsApp-ul sunt ale clientei. TODO(real): e-mail, program și pragul de livrare gratuită, de confirmat.
export const site = {
  name: 'Dof Land',
  tagline: 'Un colț de rai',
  locality: 'Poienarii Burchii, județul Prahova',
  phone: '0770 660 798',
  phoneHref: 'tel:+40770660798',
  whatsapp: '40770660798',
  email: 'contact@dofland.ro',
  schedule: [
    { days: 'Luni', hours: 'închis' },
    { days: 'Marți - Vineri', hours: '10:00 - 18:00, cu programare' },
    { days: 'Sâmbătă - Duminică', hours: '10:00 - 19:00' },
  ],
  courier: 'Sameday',
  shippingCost: 13.99,
  // null cât timp clienta nu a stabilit un prag de livrare gratuită
  freeShippingFrom: null as number | null,
};

export const nav: { label: string; href: string; sale?: boolean }[] = [
  { label: 'Căpșuni', href: '/magazin?categorie=capsuni' },
  { label: 'Lavandă', href: '/magazin?categorie=lavanda' },
  { label: 'Flori și plante', href: '/magazin?categorie=flori-si-plante' },
  { label: 'Îngrășăminte', href: '/magazin?categorie=ingrasaminte' },
  { label: 'Miere', href: '/magazin?categorie=miere' },
  { label: 'Seturi cadou', href: '/magazin?categorie=cadouri' },
  { label: 'Grădina educativă', href: '/gradina-educativa' },
  { label: 'Evenimente', href: '/evenimente' },
  { label: 'Vizitează-ne', href: '/viziteaza-ne' },
].map((item) => ({ ...item, href: u(item.href) }));

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const lei = (n: number) => `${n.toFixed(2).replace('.', ',')} lei`;

export const shippingNote = site.freeShippingFrom
  ? `Livrare prin ${site.courier}, ${lei(site.shippingCost)}. Gratuită peste ${site.freeShippingFrom} lei.`
  : `Livrare prin ${site.courier}, ${lei(site.shippingCost)}.`;
