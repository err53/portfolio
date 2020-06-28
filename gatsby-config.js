/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jason Huang`,
    description: `The personal site of an aspiring software developer.`,
    author: `@jhthenerd`,
  },
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Huang`,
        short_name: `Jason`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#edf2f7`,
        display: `browser`,
        icon: `src/images/icon.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
