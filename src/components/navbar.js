import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {Menu} from 'semantic-ui-react'

export default function Navb() {
  return (
      <Menu 
        primary
        fixed="top"
      >
        <Menu.Item>
            <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item >
            <Link to="portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item>
            <a href="https://github.com/nmestrada">
            <FaGithub />
            </a>
        </Menu.Item>
        
        <Menu.Item>
            <a href="https://www.linkedin.com/in/natalie-estrada-dev/"
            >
            <FaLinkedin />
            </a>
        </Menu.Item>
      </Menu>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }