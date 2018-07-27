import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Procedures from '../components/procedures'

class BlogIndex extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(data, 'site.siteMetadata.title')
    const posts = get(data, 'allMarkdownRemark.edges')
    const post = get(data, 'markdownRemark.html')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet title={siteTitle} />
        <Procedures />
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq:"/"}} ) {
      html
    }

  }
`
