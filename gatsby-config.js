module.exports = {
  siteMetadata: {
    title: 'Tiny func', 
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components',{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fenix`,
        ]
      }
    }],
};
