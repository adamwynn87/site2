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

    return (
      <Layout location={this.props.location}  title="Select works" navList={navList}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <Link to={`/art-section?${node.id}`}>{node.name}</Link>
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
  query artIndexQuery {
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
  }
`
