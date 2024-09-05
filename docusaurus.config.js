// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docs.savutro.dev',
  tagline: 'Turtles are better',
  favicon: 'img/favicon.ico',
  url: 'https://docs.savutro.dev',
  baseUrl: '/',
  organizationName: 'savutro', 
  projectName: 'dev-docs', 
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          //routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ["@orama/plugin-docusaurus-v3"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'docs.savutro.dev',
        logo: {
          alt: 'logo',
          src: 'img/turtle.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Intro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'learningsSidebar',
            position: 'left',
            label: 'Learnings',
          },
          {
            href: 'https://github.com/savutro',
            position: 'right',
            className: 'navbar-item-github', 
            'aria-label': 'GitHub Repository', 
            html: '<i class="fab fa-github fa-xl"></i>'
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'ttg',
                to: '/docs/intro',
              },
              {
                label: 'dev-docs',
                to: '/docs/intro',
              },
              {
                label: 'zolaBlog',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://google.com',
              },
              {
                label: 'Discord',
                href: 'https://google.com',
              },
              {
                label: 'Twitter',
                href: 'https://google.com',
              },
            ],
          },
          {
            title: 'Shoutouts',
            items: [
              {
                label: 'eza',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;