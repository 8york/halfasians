/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Halfasian",
    description:
      "Halfasian is a project for two visual artists DC and 8york. Their performance include music, textile and poetry",
    siteUrl: "https://halfasiansmain.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./assets/images",
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
