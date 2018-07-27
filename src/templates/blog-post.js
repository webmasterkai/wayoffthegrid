import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Procedures from '../components/procedures'

function getTitle({ fields, headings }) {
  return get(headings, '[0].value', fields.slug)
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const title = get(post, 'headings[0].value', siteTitle)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet title={title} />
        <Procedures />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      headings(depth:h1){
        value
      }
    }
  }
`
