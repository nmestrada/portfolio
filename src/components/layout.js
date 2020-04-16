
import React from "react"

import Navbar from "./navbar"
import Footer from './footer'
import {Container} from 'semantic-ui-react'
import './layout.css'

const Layout = ({ children }) => {

  return (
    <Container fluid className="mx-0 px-0">
      <Navbar/>
      <Container className="main">
        <main className="page-content">{children}</main>
      </Container>
        <Footer/>
    </Container>
  )
}


export default Layout
