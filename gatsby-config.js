const { SITE_TITLE, SITE_SUBTITLE, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_AUTHOR, SITE_URL } = require('./config')

require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    subTitle: SITE_SUBTITLE,
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    author: SITE_AUTHOR,
    siteUrl: SITE_URL
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lucius LLP',
        short_name: 'Lucius',
        start_url: '/',
        background_color: '#12264f',
        theme_color: '#12264f',
        display: 'minimal-ui',
        icon: 'src/images/icon_lucius.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins']
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
