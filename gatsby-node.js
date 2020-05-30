const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const artPost = path.resolve('./src/templates/art-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulArtPage {
              edges {
                node {
                  title
                  slug
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

        const posts = result.data.allContentfulArtPage.edges
        posts.forEach((post, index) => {
          console.log("post", post);
          createPage({
            path: `/art-post/${post.node.slug}/`,
            component: artPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
