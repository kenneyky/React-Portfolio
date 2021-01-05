import React from 'react'
import {Segment, Card, Header} from 'semantic-ui-react'

import {Container} from 'react-bootstrap'

export const Projects = () => {
    return (
        <Segment 
            inverted
            vertical 
            textAlign="center"
            style={{padding: '8em 0em'}}
            id="Projects"
        >
            <Container>
                <Header
                as="h1"
                inverted
                >
                    Projects
                </Header>
                <Card.Group centered>
                    <Card 
                        header='Coming soon!'
                    />
                </Card.Group>
                
            </Container>
            
        </Segment>
    )
}
