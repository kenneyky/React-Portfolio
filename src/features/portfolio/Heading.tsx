import React from 'react'
import {Container, Header, Image, Segment} from 'semantic-ui-react'

export const Heading = () => {
    return (
            <Segment 
            id="Home"
            inverted
            vertical
            textAlign="center"
            style={{minHeight: 700, padding: '8em 0em'}}>
            <Container text>
                <Image circular centered size='medium' src='/assets/portfolio/kyle.jpg'/>
                <Header
                    inverted
                    as='h1'
                    content="Kyle Kenney"
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                    }}
                />
                <Header
                    inverted
                    as='h2'
                    content="Software Engineer in Vienna, VA"
                />
            </Container>

        
        </Segment>
    )
}
