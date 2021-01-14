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
                        image="/assets/portfolio/stock-app.PNG"
                        link
                        header='Stock Lookup'
                        href="https://kylekenney.azurewebsites.net/stocks"
                        description='A simple application that looks up stocks by their symbol.'
                    />
                    <Card 
                        image="/assets/portfolio/sp500-app.PNG"
                        link
                        header='SP500'
                        href="https://kylekenney.azurewebsites.net/sp500"
                        description='An in depth look at the sp500 and the companies that are a part of it.'
                    />
                </Card.Group>
                
            </Container>
            
        </Segment>
    )
}
