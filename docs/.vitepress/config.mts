import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tenrai.js',
  description:
    'A type-safe, feature-complete TypeScript wrapper for the Tenrai API v1',
  cleanUrls: true,
  appearance: 'dark',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
        {
          text: 'Usage',
          items: [{ text: 'API Examples', link: '/guide/examples' }],
        },
        {
          text: 'Advanced',
          items: [{ text: 'Error Handling', link: '/guide/error-handling' }],
        },
      ],
      '/api/': [
        {
          text: 'Introduction',
          items: [{ text: 'Overview', link: '/api/' }],
        },
        {
          text: 'Core Classes',
          items: [
            { text: 'TenraiClient', link: '/api/classes/TenraiClient' },
            { text: 'TenraiError', link: '/api/classes/TenraiError' },
            {
              text: 'TenraiClientOptions',
              link: '/api/interfaces/TenraiClientOptions',
            },
          ],
        },
        {
          text: 'Endpoints',
          items: [
            { text: 'AnimeEndpoint', link: '/api/classes/AnimeEndpoint' },
            { text: 'MangaEndpoint', link: '/api/classes/MangaEndpoint' },
            {
              text: 'CharactersEndpoint',
              link: '/api/classes/CharactersEndpoint',
            },
            { text: 'PeopleEndpoint', link: '/api/classes/PeopleEndpoint' },
            { text: 'SeasonsEndpoint', link: '/api/classes/SeasonsEndpoint' },
            { text: 'TopEndpoint', link: '/api/classes/TopEndpoint' },
            { text: 'RandomEndpoint', link: '/api/classes/RandomEndpoint' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gonzyui/tenrai.js' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/tenrai.js' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 gonzyui',
    },
    search: {
      provider: 'local',
    },
  },
});
