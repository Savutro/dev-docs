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

  // Set the production url of your site here
  url: 'https://docs.savutro.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'savutro', // Usually your GitHub org/user name.
  projectName: 'dev-docs', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
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
            html: '<i class="fab fa-github fa-lg"></i>'
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
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
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      // },
    }),
};

export default config;
