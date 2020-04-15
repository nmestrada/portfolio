
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
//Effects
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade"
//Components
// import Video from "../components/Video"
import {Item} from 'semantic-ui-react'

//styling
import '../stylesheets/portfolio.css'
//images
import beerHopper1 from "../images/beerHopper1.png"
import weJay1 from "../images/weJay1.png"
import weJay2 from "../images/weJay2.png"
import weJay3 from "../images/weJay3.png"
import weJay4 from "../images/weJay4.png"
import plantify1 from "../images/plantify1.jpg"
import plantify2 from "../images/plantify2.jpg"
import plantify3 from "../images/plantify3.jpg"
//import plantify4 from "../images/plantify4.jpg"

const Portfolio = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Item.Group className="projects-container">
        <Item className="project weJay">
          <Item.Content>
          <Item.Header className="section-title">
            <h3 className="project-title">WeJay</h3>
            <h4 className="icons">
              <a
                href="https://github.com/weJayCapstone/weJay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaGithub/>
              </a>
            </h4>
          </Item.Header>
          <Item.Description className="section-content">
            <p>
              Built with: <strong>Node.js, React Native, Expo SDK, Redux, Google Firestore, Spotify API</strong>
            </p>
            <p>
              A collaborative music mobile application. Users can vote on songs on a host's Spotify Playlist, creating an enjoyable music experience for all! 
            </p>
            <div className="images">
              <img src={weJay1} alt="wejay"></img>
              <img src={weJay2} alt="wejay"></img>
              <img src={weJay3} alt="wejay"></img>
              <img src={weJay4} alt="wejay"></img>
            </div>
            <p> I was 1 of 3 Full Stack Developers who worked on this project.</p>
            <p>Check out our weJay walkthrough <a href="https://www.youtube.com/watch?v=2NvC6te1Nak" target="_blank"
                rel="noopener noreferrer">video</a> on youtube!</p>
        </Item.Description>
        </Item.Content>
        </Item>
        <Item className="project beerHopper">
            <Item.Content>
          <Item.Header className="section-title">
            <h3 className="project-title">BeerHopper</h3>
            <h4 className="icons">
              <a
                href="https://beerhopperfullstack.herokuapp.com/beers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroku Link{" "}
              </a>
              -
              <a
                href="https://github.com/TeamForLoops/beerHopper"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github <FaGithub />
              </a>
            </h4>
          </Item.Header>
          <Item.Description className="section-content">
            <p>Built with:
              <strong> Node.js, React, Redux, Sequelize, PostgreSQL, Express, React, Stripe API, Passport,
              React Bootstrap</strong>
            </p>
            <p>An e-commerce site built in a week and half sprint. Features include checkout with Stripe, filtering and searching products, sign in and sign up, and administrator access. This site is live! Please check it out at the Heroku link above!</p>
            <Item.Image src={beerHopper1} />
            <p>I was 1 of 4 Full Stack Developers who worked on this project</p>
          </Item.Description>
          </Item.Content>
        </Item>
        <Item className="project plantify">
            <Item.Content>
          <Item.Header className="section-title">
            <h3 className="project-title">Plantify</h3>
            <h4 className="icons">
              {" "}
              <a
                href="https://github.com/nmestrada/Plantify"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github <FaGithub />
              </a>
            </h4>
          </Item.Header>
          <Item.Description className="section-content">
            <p> Built With: <strong>Node.js, React Native, Google Firestore, ExpoSDK, Clarfai API</strong></p>
            <p>
              A mobile application to help the user identify plants by taking a
              photo. For the plant enthusiasts out there just like me! 
            </p>
            <p>Used custom trained Machine Learning photo recognition API to store images of plants I owned</p>
            <div className="images">
              <Item.Image src={plantify1}/>
              <Item.Image src={plantify2}/>
              <Item.Image src={plantify3}/>
            </div>
            <p>I was the Sole Developer on this project</p>
          </Item.Description>
          </Item.Content>
        </Item>
        <Link to="/">Home</Link>
    </Item.Group>
    
  </Layout>
)

export default Portfolio
