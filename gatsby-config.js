require('dotenv').config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: 'Community Blog',
    siteTitleAlt: 'Community International',
    siteHeadline: 'CommUnity International is The Alliance of independent agencies.',
    siteUrl: 'https://communityblog.com',
    siteDescription: 'CommUnity International is The Alliance of independent agencies which engage consumers through insightful, innovative and powerful communication, locally and globally.',
    siteLanguage: 'hu',
    siteImage: '/banner.jpg',
    author: '@grabovszky'
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-jodie',
      options: {
        navigation: [
          { name: 'All Posts', slug: '/blog' },
          { name: 'Business', slug: '/blog' },
          { name: 'Design', slug: '/blog' },
          { name: 'Development', slug: '/blog' },
          { name: 'Marketing', slug: '/blog' },
          { name: 'Events', slug: '/blog' },
        ],
        projectsPath: 'content/blog',
        projectsUrl: '/blog',
        projectsPrefix: '/blog',
        homepagePageLimit: 2,
        homepageProjectLimit: 9,
        formatString: 'DD.MM.YYYY'
      }
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: 'Work Sans',
            file: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400..700&display=swap'
          }
        ]
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Community Blog',
        short_name: 'community-international',
        description: 'CommUnity International is The Alliance of independent agencies which engage consumers through insightful, innovative and powerful communication, locally and globally.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#E2007A',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable_icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-ZSE178LLRX'],
        gtagConfig: {
          optimize_id: 'GTM-5QRLSTB',
          anonymize_ip: true,
          cookie_expires: 0
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    },
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
}
