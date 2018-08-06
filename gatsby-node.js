/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path')

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(
    ['transform-regenerator'],
    ['transform-runtime']
  ),
})

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  await pages('posts');
  await pages('markdown');

  async function pages(type) {
    const pagesResults = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "${type}-pages" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                path
                layout
                template
              }
            }
          }
        }
      }
    }
  `)

    if (pagesResults.errors) throw pagesResults.errors

    pagesResults.data.allFile.edges.forEach(({ node }) => {
      const { path } = node.childMarkdownRemark.frontmatter

      if (typeof path === 'undefined')
        throw new Error(
          'path must defined in frontmatter for node' +
          JSON.stringify(node, null, 4)
        )
      if (path.substring(0, 1) !== '/')
        throw new Error(
          'path must be prefixed in frontmatter with "/"' +
          JSON.stringify(node, null, 4)
        )

      const {
        layout,
        template,
        title
      } = node.childMarkdownRemark.frontmatter

      createPage({
        path,
        layout: (layout || type),
        component: resolve(`src/templates/${template || type}.js`),
      })
    })
  }
}
