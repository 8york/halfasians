/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Halfasian",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: './assets/images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./assets/data/`,
      },
    },
  ],
};
