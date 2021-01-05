import React from 'react'
import {Container, Segment, Header} from 'semantic-ui-react'

export const AboutMe = () => {
    return (
        <div id="About_Me">
            <Segment 
                vertical
                textAlign="center"
                style={{padding: '8em 0em'}}
                id="About_Me"
                >
                <Container>
                    <Header as='h1'  style={{ fontSize: '2em' , padding: '0em 2em'}}>
                        About Me
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        I am a full-stack software engineer located in Vienna, VA.
                        I am a driven hard-worker who is passionate about solving problems through software development.
                    </p>

                    <p style={{fontSize: '1.33em'}}>
                        I have received my BS from Central Washington University in CS from Ellensburg, WA.
                        I currently work as a software development engineer for Leidos in Vienna, VA.
                        Take a look at some of my projects below!
                    </p>
                </Container>
            </Segment>
        </div>
    )
}
