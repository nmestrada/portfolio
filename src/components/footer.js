import React from "react"
import { Link } from "gatsby"
import {Segment,Container, List} from 'semantic-ui-react'

const Footer = () => {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '2em 0em' }}>
          <Container textAlign="center">
            <p>© {new Date().getFullYear()} Natalie Estrada</p>
            <span>Built With:  </span>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Gatsby.js
                </List.Item>
                <List.Item as='a' href='#'>
                    Semantic UI
                </List.Item>
            </List>
          </Container>
        </Segment>
    )
}
export default Footer