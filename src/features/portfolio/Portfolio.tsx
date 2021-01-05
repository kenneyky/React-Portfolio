import React from 'react'
import { NavBar } from './NavBar'
import { Heading } from './Heading'
import { Container } from 'react-bootstrap'
import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import { ContactMe } from './ContactMe'

export const Portfolio = () => {
    return (
        <Container>
            <NavBar />
            <Heading />
            <AboutMe />
            <Projects />
            <ContactMe />
        </Container>
    );
};
