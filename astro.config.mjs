// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Demo-ul se publică pe GitHub Pages, într-un subdirector. Local rulează la rădăcină.
// TODO(real): pe domeniul clientei se pune domeniul în `site` și se scoate `base`.
const onPages = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: onPages ? '/dof-land' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
