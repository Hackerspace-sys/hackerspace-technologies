import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages 
    ? 'https://hackerspace-sys.github.io' 
    : 'https://hackerspace-technologies.pages.dev',
  base: isGitHubPages ? '/hackerspace-technologies/' : '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
