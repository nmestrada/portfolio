import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {Menu, Responsive, Icon} from 'semantic-ui-react'

export default function Navb() {
  return (
      <>
      <Responsive
        as={Menu}
        icon='labeled' 
        fluid widths={4} 
        fixed='bottom' 
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Menu.Item
            name="About"
            activeClassName="active"
            as={Link}
            to="/"
        >
        </Menu.Item>
        <Menu.Item
            name="Portfolio"
            activeClassName="active"
            as = {Link}
            to="portfolio"
        />
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
      </Responsive>
      <Responsive
      borderless
      as={Menu}
      icon='labeled' 
      widths={5} 
      fixed='top' 
      minWidth={Responsive.onlyComputer.minWidth}
    >
            
            <Menu.Menu>
            <Menu.Item position="left" header>
                <Icon color="grey" size="mini" name="terminal"/> 
            </Menu.Item>
            <Menu.Item
            name="About"
            activeClassName="active"
            as={Link}
            to="/"
            />
            <Menu.Item
                name="Portfolio"
                activeClassName="active"
                as = {Link}
                to="portfolio"
            />
            <Menu.Item>
                <a href="https://github.com/nmestrada"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Icon size="large" color="black" name='github'/>
                </a>
            </Menu.Item>
            
            <Menu.Item>
                <a href="https://www.linkedin.com/in/natalie-estrada-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Icon size="large" color="black" name='linkedin'/>
                </a>
            </Menu.Item>
            </Menu.Menu>
    </Responsive>
    </>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }