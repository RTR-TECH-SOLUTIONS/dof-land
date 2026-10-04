const base = import.meta.env.BASE_URL.replace(/\/$/, '');
// Linkurile interne trec prin u(), ca demo-ul să meargă și într-un subdirector (GitHub Pages).
export const u = (path: string) => `${base}${path}`;

// TODO(real): toate datele de contact de mai jos sunt provizorii, se înlocuiesc cu cele ale clientei.
export const site = {
  name: 'Dof Land',
  tagline: 'Un colț de rai',
  locality: 'Poienarii Burchii, județul Prahova',
  phone: '0700 000 000',
  phoneHref: 'tel:+40700000000',
  whatsapp: '40700000000',
  email: 'contact@dofland.ro',
  schedule: [
    { days: 'Luni', hours: 'închis' },
    { days: 'Marți - Vineri', hours: '10:00 - 18:00, cu programare' },
    { days: 'Sâmbătă - Duminică', hours: '10:00 - 19:00' },
  ],
  freeShippingFrom: 250,
  giftFrom: 100,
  shippingCost: 19,
};

export const nav: { label: string; href: string; sale?: boolean }[] = [
  { label: 'Lavandă', href: '/magazin?categorie=lavanda' },
  { label: 'Miere', href: '/magazin?categorie=miere' },
  { label: 'Flori și plante', href: '/magazin?categorie=flori-si-plante' },
  { label: 'Cadouri', href: '/magazin?categorie=cadouri' },
  { label: 'Promoții', href: '/magazin?categorie=promotii', sale: true },
  { label: 'Grădina educativă', href: '/gradina-educativa' },
  { label: 'Vizitează-ne', href: '/viziteaza-ne' },
].map((item) => ({ ...item, href: u(item.href) }));

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const lei = (n: number) => `${n.toFixed(2).replace('.', ',')} lei`;
