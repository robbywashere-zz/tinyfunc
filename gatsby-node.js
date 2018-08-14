/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`);
const { get } = require('lodash');

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(
    []
    //   ['transform-regenerator'],
    //   ['transform-runtime']
  ),
})

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const pagesResults = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
                path
                layout
                template
            }
          }
        }
      }
    }
    `);


  if (pagesResults.errors) throw pagesResults.errors

  pagesResults.data.allMarkdownRemark.edges.forEach(({ node }) => {

    const {
      id,
      frontmatter: { layout, template, path },
      fields: { slug }
    } = node;


    createPage({
      path: path || slug,
      layout: layout,
      component: resolve(`src/templates/${template || 'main'}.js`),
      context: {
        id
      }
    })
  })


}


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
