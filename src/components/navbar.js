import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import headshot from "../images/headshoticon1.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Image, Row, Col, Nav} from 'react-bootstrap'

import '../stylesheets/navbar.css';

export default function Navb() {
  return (
    <Container id="page-header" fluid>
      <Image className="headshot" src={headshot} roundedCircle/>
      <div className="blurb">
        <h2 className="text-center">Natalie Estrada</h2>
        <h3 className="text-center">Full Stack Software Engineer</h3>
      </div>
      <Navbar className="nav">
        <Nav className="links mx-auto">
          <Link to="/">About</Link>
          <Link to="portfolio">Portfolio</Link>
          <a href="https://github.com/nmestrada" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/natalie-estrada-dev/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </Nav>
      </Navbar>
    </Container>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }