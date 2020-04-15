import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"
//should not use materialize incorrectly scales
export default function Navb() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
            <Link className="brand-logo center" to="/">NE</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                <Link to="/">About</Link>
                </li>
                <li>
                <Link to="portfolio">Portfolio</Link>
                </li>
                <li>
                    <a href="https://github.com/nmestrada">
                    <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/natalie-estrada-dev/">
                        <FaLinkedin />
                    </a>
                </li>
          </ul>
        </div>
      </nav>
      </div>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }