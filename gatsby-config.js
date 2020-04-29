module.exports = {
  siteMetadata: {
    title: `Long Island JavaScript Meetup`,
    description: `Welcome to LIJS! We meet on `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lijs-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        groupUrlName: "long-island-javascript-group",
        eventsOptions: [
          {
            status: `upcoming`,
            desc: `false`,
            page: 10,
          },
          {
            status: `past`,
            desc: `true`,
            page: 50,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
