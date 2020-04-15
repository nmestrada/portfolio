import React from "react"
//import { Link, graphql } from "gatsby"
import 'semantic-ui-css/semantic.min.css'
import {Item} from 'semantic-ui-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import headshot from "../images/headshoticon1.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <Item.Group>
    <Item className="about-me border-0">
        <Item.Image src={headshot} />
        <Item.Content className="section-content">
            <Item.Header className="section-title border-0">
            <h4>About Me</h4>
            </Item.Header>
        
          <Item.Description>
            I always been passionate about teaching myself web development. I started by building a blog during my free time working in customer service.
            I have a background studying Materials Science Engineering at University of Michigan and I've always had an interest in building and creating solutions that make people's lives easier. 
          </Item.Description>
        </Item.Content>
    </Item>
    <Item>
        <Item.Content>
        <Item.Header>Tech Stack</Item.Header>
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
        </Item.Content>
        <Item.Image src="https://images.unsplash.com/photo-1524671545465-3eadeda481e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
    </Item>
    <Item>
        <Item.Image src="https://images.unsplash.com/photo-1527849172727-968e0a43c6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <Item.Content>
          <Item.Header>Growing</Item.Header>
          <p>
            I know that the best technologies for a project may not be in my skillset, but I eager to learn new frameworks and languages to build on my web development knowledge!
          </p>
          <p>I also do things outside of coding! Some of my hobbies are:
            Argentine Tango dancing, hiking, camping, gardening and
            watercolor painting
          </p>
        </Item.Content>
    </Item>
    </Item.Group>
  </Layout>
)

export default IndexPage
