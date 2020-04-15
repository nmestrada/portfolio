import React from "react"
//import { Link, graphql } from "gatsby"
import 'semantic-ui-css/semantic.min.css'
import {Item, Label, List} from 'semantic-ui-react'

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
        
        <Item.Content className="section-content">
            <Item.Header className="section-title border-0"> 
            About
            </Item.Header>
        
          <Item.Description>
            I always been passionate about teaching myself web development. I started by building a blog during my free time working in customer service.
            I have a background studying Materials Science Engineering at University of Michigan and I've always had an interest in building and creating solutions that make people's lives easier. 
          </Item.Description>
        </Item.Content>
        <Item.Image src={headshot} />
    </Item>
    <Item>
    <Item.Image src="https://images.unsplash.com/photo-1524671545465-3eadeda481e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <Item.Content>
        <Item.Header>Tech Stack</Item.Header>
            <List>
            <List.Item>
                Languages:
                <Label color="yellow">JavaScript, HTML, CSS</Label>
            </List.Item>
            <List.Item>
                Client side:
                <Label color="purple">React, React Native, Redux, Bootstrap</Label>
            </List.Item>
            <List.Item>
                Backend: <Label color="teal">Node.js, Express.js</Label>
            </List.Item>
            <List.Item>
                Database: <Label color="blue">Sequelize, PostgreSQL, Firestore</Label>
            </List.Item>
            <List.Item>
                Tools: 
                <Label color="olive">TDD : Mocha, Chai, Jasmine</Label>
                <Label color="green">Travis CI</Label>
                <Label color="pink">Git, Github</Label>    
                <Label color="orange">Restful APIs</Label>
                <Label color="violet">Heroku</Label>
            </List.Item>
            
            
            </List>
        </Item.Content>
    </Item>
    <Item>
        <Item.Content>
          <Item.Header>Growing & Learning</Item.Header>
          <p>
            I know that the best technologies for a project may not be in my skillset, but I eager to learn new frameworks, libraries and languages to build on my web development knowledge!
          </p>
          <p>I also do things outside of coding! Some of my hobbies are:
            Argentine Tango dancing, hiking, camping, gardening and
            watercolor painting
          </p>
        </Item.Content>
        <Item.Image src="https://images.unsplash.com/photo-1507810004768-aa17b5e2759f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </Item>
    </Item.Group>
  </Layout>
)

export default IndexPage
