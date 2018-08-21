const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: { fields: { slug: { ne: "/"}} }) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const posMatch = new RegExp('^(\\d+)-(.*)')

  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    const category = path.dirname(filePath).substr(1)
    const pathMatch = posMatch.exec(path.basename(filePath))
    if (pathMatch) {
      const [ full, position, pageId ] = pathMatch
      createNodeField({ name: `position`, node, value: parseInt(position) })
      createNodeField({ name: `slug`, node, value: `/${category}/${pageId}/` })
    } else {
      createNodeField({ name: `slug`, node, value: filePath })
    }
    if (category) createNodeField({ name: `category`, node, value: category })
  }
}
