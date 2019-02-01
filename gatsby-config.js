module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-starter-lighthouse100.netlify.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-'],
        gtagConfig: {
          anonymize_ip: true
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lighthouse100.netlify.com',
        short_name: 'lighthouse',
        start_url: `/?utm_source=a2hs`,
        background_color: `#fff`,
        theme_color: `#050`,
        display: `standalone`,
        icon: `src/images/lg-square.jpg`,
        legacy: false
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-starter-lighthouse100.netlify.com',
        sitemap: 'https://gatsby-starter-lighthouse100.netlify.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/'
          }
        ]
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
