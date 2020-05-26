import React from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
//import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'

//query from docs
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fixed(height: 140, width: 140) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `
// //actual query
// export const query = graphql`
//   query {
//     headshot: file(relativePath: { eq: "headshoticon1.jpg" }) {
//       ...squareImage
//     }
//   }
// `
const IndexPage = () => {
  //const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <div>
        <div>
          {/* <Img fixed={data.headshot.childImageSharp.fixed} /> */}
          <div>
            <h4>About</h4>

            <p>
              I've always been passionate about teaching myself web development.
              I started by building a blog during my free time working in
              customer service. I have a background studying Materials Science
              Engineering at University of Michigan and I've always loved
              problem solving, building projects and creating solutions that
              make people's lives easier.
            </p>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1524671545465-3eadeda481e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <h4>Tech Stack</h4>
          <ul>
            <li>
              Languages:
              <p>JavaScript, HTML, CSS</p>
            </li>
            <li>
              Client side:
              <p>
                React, React Native, Redux, Bootstrap
              </p>
            </li>
            <li>
              Backend: <p>Node.js, Express.js</p>
            </li>
            <li>
              Database:
              <p>Sequelize, PostgreSQL, Firestore</p>
            </li>
            <li>
              Tools:
              <p>TDD : Mocha, Chai, Jasmine</p>
              <p>Travis CI</p>
              <p>Git, Github</p>
              <p>Restful APIs</p>
              <p>Heroku</p>
            </li>
          </ul>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1507810004768-aa17b5e2759f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <h4>Growing & Learning</h4>
          <p>
            I know that the best technologies for a project may not be in my
            skillset, but I eager to learn new frameworks, libraries and
            languages to build on my web development knowledge!
          </p>
          <p>
            I also do things outside of coding! Some of my hobbies are:
            Argentine Tango dancing, hiking, camping, gardening and watercolor
            painting.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
