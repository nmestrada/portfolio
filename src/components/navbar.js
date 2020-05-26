import React, {useState} from "react"
import { Link } from "gatsby"
import {FiGithub} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaTerminal} from 'react-icons/fa'

export default function Navb() {
  const [showMenu, setMenu] = useState('hidden')
  const [isOpen, setOpen] = useState(true)
  console.log(window.innerWidth)
  return (
      <div className="flex items-center justify-between flex-wrap p-6">  
            <div className="flex items-center">
                <FaTerminal/> Natalie Estrada
            </div>
            <div className="flex items-center">  
            <button className={showMenu} type="button">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path  fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path  fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
            </button> 
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