
import React from "react"

import Navbar from "./navbar"
//import Footer from './footer'
import "../css/index.css"

const Layout = ({ children }) => {

  return (
    <div className='container mx-0'>
      <Navbar/>
      <div className="main">
        <main className="page-content">{children}</main>
      </div>
        {/* <Footer/> */}
    </div>
  )
}


export default Layout
