module.exports = {
  siteMetadata: {
    title: 'Tiny func',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`fenix`,`roboto`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts-pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-remove-trailing-slashes',
  ],
}
