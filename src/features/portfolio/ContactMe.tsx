import React from 'react'
import {Card, Container, Header, Image, Segment} from 'semantic-ui-react'

export const ContactMe = () => {
    return (
        <Segment 
        vertical 
        style={{padding: '8em 0em'}}
        id="Contact_Me"
        >
            <Container textAlign="center">
                <Header
                as="h1"
                textAlign='center'
                >
                    Contact Me
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    If you would like to contact me, feel free to message me on LinkedIn!
                </p>

                <Card centered
                    link
                    href="https://linkedin.com/in/kenneyky"
                >
                    <Image src='/assets/portfolio/LI-In-Bug.png'/>
                    <Card.Content>
                        <Card.Header>Go To LinkedIn Page</Card.Header>
                    </Card.Content>
                    
                </Card>
            </Container>
            
        </Segment>
    )
}
