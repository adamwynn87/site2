import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'


class ArtPageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArtPage')
    console.log('da post', post)

    const arts = get(this, 'props.data.allContentfulArtPage.edges')

    console.log('arts', arts)

    const navList = arts.map(i => ({
      text: i.node.title,
      link: i.node.slug
    }))

    // const content = documentToReactComponents(post.content.json, options)

    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    // console.log("content", content);
    return (
      <Layout location={this.props.location} navList={navList}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>

            <div>
            
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArtPageTemplate

export const pageQuery = graphql`
  query ArtPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArtPage(slug: { eq: $slug }) {
      title,
    }
    allContentfulArtPage {
      edges {
        node {
          title,
          slug
        }
      }
    }
  }
`
