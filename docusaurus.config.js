// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const websiteConfig = require('./website_config.json');

/** @type {import('@docusaurus/types').Config} */
const config = {

    title: 'Tinaël Devresse',
    tagline: 'Young Developer from Belgium',
    url: 'https://tinaeldevresse.eu',
    baseUrl: '/',

    deploymentBranch: websiteConfig.DEPLOYMENT_BRANCH,
    organizationName: websiteConfig.GITHUB_USER,
    projectName: websiteConfig.REPOSITORY_NAME,
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    customFields: {
        description: "Personal website of Tinaël Devresse, a blog about anything that crosses my mind which I think could interest y'all.",
        mType: 'website',
        twitter: websiteConfig.TWITTER_NAME,
        linkedIn: websiteConfig.LINKEDIN_NAME,
        github: websiteConfig.GITHUB_USER
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        localeConfigs: {
            en: { label: 'English' },
            fr: { label: 'Français' }
        }
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    showReadingTime: true,
                    editUrl: `https://github.com/${websiteConfig.GITHUB_USER}/${websiteConfig.REPOSITORY_NAME}/tree/master/`,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright ©2020-present Tinaël Devresse. Built with Docusaurus.`
                    },
                    postsPerPage: 3
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
                googleAnalytics: {
                    trackingID: websiteConfig.TRACKING_ID,
                    anonymizeIP: websiteConfig.ANONYMIZE_IP
                },
                gtag: {
                    trackingID: websiteConfig.TRACKING_ID,
                    anonymizeIP: websiteConfig.ANONYMIZE_IP
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'shareme',
                content:
                    '⭐️ If you like my content, please share it on your social networks! ⭐️'
            },
            navbar: {
                hideOnScroll: true,
                title: websiteConfig.REPOSITORY_NAME,
                logo: {
                    alt: 'td logo',
                    src: 'img/logo.png',
                    srcDark: 'img/logo.png'
                },
                items: [
                    {
                        label: 'Blog',
                        position: 'left',
                        to: '/blog'
                    },
                    {
                        label: 'Portfolio',
                        position: 'left',
                        to: '/portfolio',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    },
                    {
                        href: `https://github.com/${websiteConfig.GITHUB_USER}/${websiteConfig.REPOSITORY_NAME}`,
                        label: 'GitHub',
                        position: 'right'
                    }
                ]
            },
            footer: {
                links: [
                    {
                        items: [
                            {
                                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://twitter.com/${websiteConfig.TWITTER_NAME}'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path></svg></a>`
                            },
                            {
                                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/${websiteConfig.LINKEDIN_NAME}'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin' class='svg-inline--fa fa-linkedin fa-w-14' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path></svg></a>`
                            },
                            {
                                html: `<a class='footer__link-item' target='_blank' rel='noopener' href='https://${websiteConfig.GITHUB_USER}.github.io'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='github' class='svg-inline--fa fa-github fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path fill='currentColor' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path></svg></a>`
                            },
                            {
                                html: `<a class='footer__link-item' target='_blank' rel='noopener' href='https://opencollective.com/${websiteConfig.OPEN_COLLECTIVE_USER}'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='opencollective' class='svg-inline--fa fa-opencollective fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><path fill='currentColor' d='M209.765 128.15c0 16.013-4.9 31.34-13.266 44.575l33.447 33.447a128.918 128.918 0 0 0 25.783-77.35c0-29.265-9.754-55.751-26.47-77.336l-32.776 32.729a79.442 79.442 0 0 1 13.267 43.888l.015.047Z' /><path fill='currentColor' d='M127.513 210.355c-45.367-.086-82.125-36.838-82.22-82.205c.069-45.386 36.835-82.166 82.22-82.252c16.732 0 32.058 4.901 44.607 13.267l32.744-32.776A128.965 128.965 0 0 0 127.514.636C57.123.636 0 57.76 0 128.15c0 70.359 57.124 127.513 127.513 127.513a125.126 125.126 0 0 0 77.351-26.501l-33.447-33.431c-11.861 9.754-27.157 14.624-43.904 14.624Z' /></svg></a>`
                            }
                        ]
                    }
                ],
                copyright: `<span style='font-size: 10px;'>Copyright ©2020-present Tinaël Devresse. Built with Docusaurus.</span>`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp']
            },
            sitemap: {
                cacheTime: 600 * 1000, // 600 sec - cache purge period
                changefreq: 'weekly',
                priority: 0.5
            }
        })
};

module.exports = config;