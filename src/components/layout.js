
import React from "react"

import Navbar from "./navbar"
//import Footer from './footer'

const Layout = ({ children }) => {

  return (
    <div className="mx-0 px-0">
      <Navbar/>
      <div className="main">
        <main className="page-content">{children}</main>
      </div>
        {/* <Footer/> */}
    </div>
  )
}


export default Layout
