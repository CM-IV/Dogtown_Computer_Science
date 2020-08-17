module.exports = {
  siteMetadata: {
    title: `Dogtown Computer Science`,
    description: `A Computer Science blog made with the barebones gatsby starter.`,
    author: `CMIV`,
    pathPrefix: `/Dogtown_Computer_Science`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog-posts`,
        name: `markdown-pages`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cpu-pngrepo-com.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
