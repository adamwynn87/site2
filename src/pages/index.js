import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const imageUrl = get(this, 'props.data.contentfulHomepage.image.file.url')
    const posts = get(this, 'props.data.allContentfulArtCategory.edges')

    const {id} = posts[0].node

    const nav = [
      {
        text: "Selected Works",
        link: `art-section?${id}`
      },
      {
        text: "CV",
        link: "/cv/"
      },
      {
        text: "Contact",
        link: "/contact/"
      },
    ]
    
  
    return (
      <Layout location={this.props.location} title="Home" navList={nav}>
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
    allContentfulArtCategory {
      edges {
        node {
          id
        }
      }
    }
  }
`
