module.exports = {
  siteMetadata: {
    title: "Krillian's Blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
