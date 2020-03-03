import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Navbar from 'react-bootstrap/Navbar'

import  {Nav} from 'react-bootstrap'

import '../stylesheets/navbar.scss';

export default function Navb() {
  return (
      <Navbar className="nav"
        sticky="top"
        fixed="top" 
        variant="dark"
      >
        <Nav className="links m-auto">
            <Nav.Item>
                <Link to="/">About</Link>
            </Nav.Item>
            <Nav.Item >
                <Link to="portfolio">Portfolio</Link>
            </Nav.Item>
            <Nav.Link href="https://github.com/nmestrada">
                <FaGithub />
            </Nav.Link>
          
          <Nav.Link
            href="https://www.linkedin.com/in/natalie-estrada-dev/"
          >
            <FaLinkedin />
          </Nav.Link>
        </Nav>
      </Navbar>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }