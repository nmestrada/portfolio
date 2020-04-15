import React from "react"
//import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//materialize imports
import { Card, CardTitle } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Card className="about-me border-0">
        <div className="section-title border-0">
          <h4>About Me</h4>
        </div>
        <div className="section-content">
          <p>
            I always been passionate about teaching myself web development. I started by building a blog during my free time working in customer service.
            I have a background studying Materials Science Engineering at University of Michigan and I've always had an interest in building and creating solutions that make people's lives easier. 
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
        </div>
    </Card>
  </Layout>
)

export default IndexPage
