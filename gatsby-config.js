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
    `gatsby-plugin-next-seo`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
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
        name: `Long Island JavaScript Meetup`,
        short_name: `LIJS`,
        description: `Fluky.dev | Resources for front end developers.`,
        start_url: `/`,
        lang: "en",
        background_color: `#00304D`,
        theme_color: `#0066CC`,
        display: `minimal-ui`,
        icon: "src/images/lijs-logo.png",
        icons: [
          {
            src: "lijs-logo-512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "lijs-logo-192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
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
