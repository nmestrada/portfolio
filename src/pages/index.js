import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'semantic-ui-css/semantic.min.css'
import {Item, Label, List} from 'semantic-ui-react'
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
//import headshot from "../images/headshoticon1.jpg"

//query from docs
export const squareImage = graphql`
fragment squareImage on File {
    childImageSharp {
      fixed(height:140, width:140) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  `
//actual query
export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshoticon1.jpg" }) {
      ...squareImage
    }
  }
`
const IndexPage = () => {
    const data = useStaticQuery(query);
    console.log(data)
    return (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <Item.Group>
    <Item>
    <Item.Image 
        floated="right"
        >
            <Img 
                fixed={data.headshot.childImageSharp.fixed} 
            />
    </Item.Image>
        <Item.Content verticalAlign='middle'>
            <Item.Header> 
            About
            </Item.Header>
        
          <Item.Description>
            I've always been passionate about teaching myself web development. I started by building a blog during my free time working in customer service.
            I have a background studying Materials Science Engineering at University of Michigan and I've always loved problem solving, building projects and creating solutions that make people's lives easier. 
          </Item.Description>
        </Item.Content>
        
    </Item>
    <Item>
    <Item.Image src="https://images.unsplash.com/photo-1524671545465-3eadeda481e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <Item.Content verticalAlign='middle'>
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
        <Item.Image src="https://images.unsplash.com/photo-1507810004768-aa17b5e2759f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <Item.Content verticalAlign="middle">
          <Item.Header>Growing & Learning</Item.Header>
          <p>
            I know that the best technologies for a project may not be in my skillset, but I eager to learn new frameworks, libraries and languages to build on my web development knowledge!
          </p>
          <p>I also do things outside of coding! Some of my hobbies are:
            Argentine Tango dancing, hiking, camping, gardening and
            watercolor painting.
          </p>
        </Item.Content>
    </Item>
    </Item.Group>
  </Layout>
)
}

export default IndexPage
