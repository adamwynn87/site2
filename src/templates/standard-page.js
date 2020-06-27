import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


class StandardPageTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulStandardPage')
        const nav = [
            {
                text: "Selected Works",
                link: `art/aa`
            }
        ]
        const data = JSON.parse(post.content.content)
        console.log('data', data)
        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <div className="wrapper">
                        <h1 className="section-headline">{post.title}</h1>
                        
                        <div>
                            {documentToReactComponents(data)}
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}

export default StandardPageTemplate

export const pageQuery = graphql`
  query StandardPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulStandardPage(slug: { eq: $slug }) {
      title,
      content {
        content
      }
    }
  }
`
