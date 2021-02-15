require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Brandon Ly`,
    siteTitleAlt: `Brandon Ly`,
    siteHeadline: `Brandon Ly`,
    siteUrl: `https://blog.brandonly.me`,
    siteDescription: `Hi! Im Brandon, a highschool senior who's having a little too much fun with Discord bots and esports :)`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@pretty___pn`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://brandonly.me/github`,
          },
          {
            name: 'LinkedIn',
            url: 'https://brandonly.me/linkedin'
          },
          {
            name: `Twitter`,
            url: `https://brandonly.me/twitter`,
          },
          {
            name: `Instagram`,
            url: `https://brandonly.me/instagram`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Ly`,
        short_name: `Brandon Ly`,
        description: `Hi! Im Brandon, a highschool senior who's having a little too much fun with Discord bots and esports :)`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#bd93f9`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
