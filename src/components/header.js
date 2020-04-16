//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container} from 'semantic-ui-react'


const Header = () => (
    <Container id="page-header" textAlign="center">
        <div className="blurb my-4">
            <h2>Natalie Estrada</h2>
            <h3>Full Stack Software Engineer</h3>
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
