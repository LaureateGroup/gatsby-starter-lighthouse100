module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-starter-lighthouse100.netlify.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['UA-'],
        // This object gets passed directly to the gtag config command
        // This config will be shared accross all trackingIds
        gtagConfig: {
          anonymize_ip: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lighthouse100.netlify.com',
        short_name: 'lighthouse100',
        start_url: `/?utm_source=a2hs`,
        background_color: `#fff`,
        theme_color: `#050`,
        display: `standalone`,
        icon: `src/images/lg-square.jpg`
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
