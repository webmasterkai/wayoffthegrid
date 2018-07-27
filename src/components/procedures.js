import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import {capitalize, get} from 'lodash'

function getTitle({ fields, headings }) {
  return get(headings, '[0].value', fields.slug)
}

const Procedures = () => (
  <StaticQuery
    query={graphql`
      query {
        items:allMarkdownRemark(
          filter: {fields: {slug: {ne: "/"}}}, sort: {fields: fields___position}
        ) {
          group(field: fields___category) {
            fieldValue
            totalCount
            edges {
              node {
                fields {
                  slug, category, position
                }
                headings(depth: h1) { value }
              }
            }
          }
        }
      }
    `}
    render={({ items }) => (
      <div className="no-print" style={{float: 'right', fontSize: '0.8rem'}}>
        {items.group.map(({ fieldValue, totalCount, edges }) => (
          <div>
            <h4>{capitalize(fieldValue)}</h4>
            <ol>
              {edges.map(({ node }) => {
                const title = getTitle(node)
                return (
                  <li key={node.fields.slug}>
                    <Link to={node.fields.slug}>{title}</Link>
                  </li>
                )
              })}
            </ol>
          </div>
        ))}
      </div>
    )}
  />
)

export default Procedures
