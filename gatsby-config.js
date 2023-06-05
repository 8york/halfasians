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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};