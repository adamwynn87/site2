import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArtCategory.edges')
    const pageId = this.props.location.search.slice(1)
    const post = posts.find(i => i.node.id === pageId).node

    const arts = get(this, 'props.data.allContentfulArtPage.edges')
    const pageArts = arts.filter(i => i.node.artCategory.id === pageId)
    console.log("pageArts", pageArts);
    return (
      <Layout location={this.props.location} >
        <div className="sidebar"></div>
        <div className="content"></div>

        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">{post.name}</h2>
            <ul className="article-list">
              {pageArts.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <Link to={`/art/${node.slug}`}>{node.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query artSectionsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArtCategory {
      edges {
        node {
          id
          name
        }
      }
    }
    allContentfulArtPage {
      edges {
        node {
          id,
          title,
          slug
          artCategory {
            id,
          }
        }
      }
    }
  }
`
