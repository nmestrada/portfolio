
import React from "react"

import Layout from "../components/layout"
//Components
import {Item, Button, Icon, Grid, Image} from 'semantic-ui-react'

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

const Portfolio = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Grid className="projects-container" as={Item.Group}columns={2} divided >
        <Item className="project weJay" >
          <Item.Content>
          <Item.Header
          className="section-title"
          as={Grid}
          >
                WeJay
                <a 
                    href="https://github.com/weJayCapstone/weJay"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button  
                        color='teal'
                    >
                        <Icon name="github"/>Github
                    </Button>
                </a>
          </Item.Header>
          <div className="section-content">
            <p>
              Built with: <strong>Node.js, React Native, Expo SDK, Redux, Google Firestore, Spotify API</strong>
            </p>
            <p>
              A collaborative music mobile application. Users can vote on songs on a host's Spotify Playlist, creating an enjoyable music experience for all! 
            </p>
            
            <p> I was 1 of 3 Full Stack Developers who worked on this project.</p>
            <p>Check out our weJay walkthrough <a href="https://www.youtube.com/watch?v=2NvC6te1Nak" target="_blank"
                rel="noopener noreferrer">video</a> on youtube!</p>
        </div>
        </Item.Content>
        <Image.Group className="images" size='small'>
              <Image src={weJay1} alt="wejay"/>
              <Image src={weJay2} alt="wejay"/>
              <Image src={weJay3} alt="wejay"/>
              <Image src={weJay4} alt="wejay"/>
        </Image.Group>
        </Item>
        <Item className="project beerHopper">
        <Item.Image src={beerHopper1} size="large"/>
        <Item.Content >
          <Item.Header className="section-title" as={Grid}>
            BeerHopper
              <a
                href="https://beerhopperfullstack.herokuapp.com/beers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color='purple'> Heroku
                </Button>
              </a>
              <a
                href="https://github.com/TeamForLoops/beerHopper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color='teal'>
                    <Icon name="github"/>Github
                </Button>
              </a>
          </Item.Header>
          <Item.Description className="section-content">
            <p>Built with:
              <strong> Node.js, React, Redux, Sequelize, PostgreSQL, Express, React, Stripe API, Passport,
              React Bootstrap</strong>
            </p>
            <p>An e-commerce site built in a week and half sprint. Features include checkout with Stripe, filtering and searching products, sign in and sign up, and administrator access. This site is live! Please check it out at the Heroku link above!</p>
            
            <p>I was 1 of 4 Full Stack Developers who worked on this project</p>
          </Item.Description>
          </Item.Content>
        </Item>
        <Item className="project plantify">
            <Item.Content verticalAlign='middle'>
          <Item.Header className="section-title" as={Grid}>
            Plantify
              <a
                href="https://github.com/nmestrada/Plantify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color='teal'>
                    <Icon name="github"/>Github
                </Button>
              </a>
          </Item.Header>
          <Item.Description className="section-content">
            <p> Built With: <strong>Node.js, React Native, Google Firestore, ExpoSDK, Clarfai API</strong></p>
            <p>
              A mobile application to help the user identify plants by taking a
              photo. For the plant enthusiasts out there just like me! 
            </p>
            <p>Used custom trained Machine Learning photo recognition API to store images of plants I owned</p>
            
            <p>I was the Sole Developer on this project</p>
          </Item.Description>
          </Item.Content>
          <Image.Group size="small" className="images">
              <Item.Image src={plantify1}/>
              <Item.Image src={plantify2}/>
              <Item.Image src={plantify3}/>
            </Image.Group>
        </Item>
    </Grid>
    
  </Layout>
)

export default Portfolio
