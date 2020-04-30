module.exports = {
  siteMetadata: {
    title: `Long Island JavaScript Meetup`,
    description: `Welcome to Long Island JavaScript Meetup! We meet on the last Wednesday of each month and discuss all things JavaScript.`,
    author: `@gojutin`,
    siteUrl: "https://www.lijs.org",
    keywords: [
      "javascript",
      "meetup",
      "group",
      "typescript",
      "react",
      "reactjs",
      "svelte",
      "vue",
      "node",
      "nodejs",
      "deno",
      "angular",
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
