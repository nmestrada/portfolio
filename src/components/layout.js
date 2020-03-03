/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Header from "./header"
import "../stylesheets/layout.scss"

import Container from 'react-bootstrap/Container'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid className="mx-0 px-0">
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Header />
      <Container className="main mx-auto">
        <main className="page-content">{children}</main>
      </Container>
        <footer>
          <div className="footer">
            <span>© {new Date().getFullYear()} Natalie Estrada</span>
          </div>
        </footer>
    </Container>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
