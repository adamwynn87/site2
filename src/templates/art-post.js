import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'


class ArtPageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArtPage')
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>


            {post.vimeoId.length && post.vimeoId.map((id, index) => {
                return (<div className="video-wrapper" key={'video-' + index}>
                  <iframe className="iframe" src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>)
              })
            }

            {post.images.map((item, index) => <img src={item.file.url} key={index} />)}

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
      vimeoId
      images {
        id
        file {
          contentType
          url
        }
      }
    }
  }
`
