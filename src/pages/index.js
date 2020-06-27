import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const imageUrl = get(this, 'props.data.contentfulHomepage.image.file.url')
    const posts = get(this, 'props.data.allContentfulArtPage.edges')
    console.log('posts', posts)
    return (
      <Layout location={this.props.location} title="Home">
       <img src={imageUrl} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulHomepage {
      id
      image {
        id
        file {
          url
        }
      }
    }
    allContentfulArtPage {
      edges {
        node {
          slug
        }
      }
    }
  }
`
