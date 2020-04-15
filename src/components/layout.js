import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Header from "./header"


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
    <div className="mx-0 px-0">
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Header />
      <div className="container">
        <main className="page-content">{children}</main>
      </div>
        <footer className="page-footer">
          <div className="container">
            <span>© {new Date().getFullYear()} Natalie Estrada</span>
          </div>
        </footer>
    </div>
  )
}

export default Layout
