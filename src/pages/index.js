import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

function getTitle({ fields, headings }) {
  return get(headings, '[0].value', fields.slug)
}

class BlogIndex extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(data, 'site.siteMetadata.title')
    const posts = get(data, 'allMarkdownRemark.edges')
    const post = get(data, 'markdownRemark.html')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet title={siteTitle} />
        <div dangerouslySetInnerHTML={{ __html: post }} />
        <h2>Orientation and Procedures</h2>
        <ul>
        {posts.map(({ node }) => {
          const title = getTitle(node)
          return (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </li>
          )
        })}
      </ul>
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
    allMarkdownRemark(filter: { fields: { slug: { ne: "/"}} }) {
      edges {
        node {
          fields {
            slug
          }
          headings(depth:h1){
            value
          }
        }
      }
    }
  }
`
