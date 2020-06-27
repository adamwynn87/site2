const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const artPost = path.resolve('./src/templates/art-post.js')
    const standardPage = path.resolve('./src/templates/standard-page.js')
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
            allContentfulStandardPage {
              edges {
                node {
                  title
                  slug
                  content {
                    content
                  }
                }
              }
            }
          }
          `
      ).then(result => {
        console.log('res', result)
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        console.log('result', result)

        const artPosts = result.data.allContentfulArtPage.edges
        const standardPages = result.data.allContentfulStandardPage.edges


        const pages = [{
          pageType: artPosts,
          component: artPost,
          prefix: '/art/' 
        }, {
          pageType: standardPages,
          component: standardPage,
          prefix: '/page/'

        }]

        console.log("artPosts", artPosts)

        pages.map(({pageType, component, prefix}) => {
          pageType.forEach((post) => {
            console.log('post', post)
            createPage({
              path: `${prefix}${post.node.slug}/`,
              component,
              context: {
                slug: post.node.slug
              },
            })
          })
        })
      })
    )
  })
}
