import React from "react"
//import { Link, graphql } from "gatsby"
//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Fade from "react-reveal/Fade"
import Container from 'react-bootstrap/Container'

import '../stylesheets/index.css'

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
            I started my career in customer service as a supervisor at
            Starbucks. Now I'm looking to transition to Software Engineering.
          </p>
          <p>My Skills include:</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Restful APIs</li>
          </ul>
          <p>
            I'm always up for learning new libraries, frameworks and languages.
          </p>
          <p>
            My Hobbies include: Argentine Tango dancing, gardening and
            watercolor painting
          </p>
        </Card.Body>
      </Fade>
    </Card>
  </Layout>
)

export default IndexPage
