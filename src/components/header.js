//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Image} from 'semantic-ui-react'
import headshot from "../images/headshoticon1.jpg"


const Header = () => (
    <Container id="page-header" fluid >
        <div className="blurb my-4">
            <h2 className="text-center">Natalie Estrada</h2>
            <h3 className="text-center">Full Stack Software Engineer</h3>
        </div>
    </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
