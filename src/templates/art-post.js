import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import heroStyles from '../components/hero.module.css'

class ArtPageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArtPage')
    const content = documentToReactComponents(post.content.json, options)

    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log("content", content);
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>

            <div>
              {content}
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
      content {
        json
      }
    }
  }
`
