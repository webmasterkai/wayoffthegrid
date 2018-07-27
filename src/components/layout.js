import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
            {title}
        </h1>
      )
    } else {
      header = (
        <header>
          <h3 style={{ marginBottom: '0.3rem' }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
              {title}
            </Link>
          </h3>
          <h4>Saga 43 - Hull #39</h4>
        </header>

      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
