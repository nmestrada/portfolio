//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headshot from "../images/headshoticon1.jpg"


const Header = () => (
    <div className="row center-align">
        <div className="col s4 offset-s4">
            <div className="card horizontal" >
                <div className="card-stacked valign-wrapper">
                    <div className="card-content left-align"> 
                        <h5>Natalie Estrada</h5>
                        <p>Full Stack Software Engineer</p>
                    </div>
                </div>
                <div class="card-content">
                    <img className="circle" alt="headshot"src={headshot}/>
                </div>
            </div>
        </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
