import React from "react"
import { Link } from "gatsby"
import {FiGithub} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaTerminal} from 'react-icons/fa'

export default function Navb() {
  return (
      <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">  
            <div className="flex items-center">
                <FaTerminal/> NE
            </div>
            <div className="flex items-center">   
            <Link
            className="active"
            to="/">
            About 
            </Link>
            <Link
                className="active"
                to="portfolio"
            >
                Portfolio
            </Link>
            <Link>
                <a href="https://github.com/nmestrada"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <FiGithub/>
                </a>
            </Link>
            
            <Link>
                <a href="https://www.linkedin.com/in/natalie-estrada-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <AiOutlineLinkedin/>
                </a>
            </Link>
            </div> 
    </div>
  )
}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }