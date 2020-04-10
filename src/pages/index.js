import React from "react"
//import { Link, graphql } from "gatsby"
//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Fade from "react-reveal/Fade"
//import Container from 'react-bootstrap/Container'

import '../stylesheets/index.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Card className="about-me border-0">
      <Fade bottom>
        <Card.Header className="section-title border-0">
          <h4>About Me</h4>
        </Card.Header>
        <Card.Body className="section-content">
          <p>
            I always been passionate about teaching myself web development. I started by building a blog during my free time working in customer service.
            I have a background in studying Materials Science Engineering in school and I've always had an interest in building and creating solutions that make people's lives easier. 
          </p>
          <p>My Skills include:</p>
          <ul>
            <li>JavaScript, HTML, CSS</li>
            <li>React, React Native</li>
            <li>Redux</li>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Restful APIs</li>
            <li>Heroku</li>
            <li>TDD : Mocha, Chai, Jasmine</li>
            <li>Travis CI</li>
            <li>Git, Github</li>
          </ul>
          <p>
            I know that the best technologies for a project may not be in my skillset, but I eager to learn new frameworks and languages to build on my web development knowledge!
          </p>
          <p>I also do things outside of coding! Some of my hobbies are:
            Argentine Tango dancing, hiking, camping, gardening and
            watercolor painting
          </p>
        </Card.Body>
      </Fade>
    </Card>
  </Layout>
)

export default IndexPage
