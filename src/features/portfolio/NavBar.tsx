import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import { Icon } from 'semantic-ui-react';


export const NavBar = () => {
    return (

        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#Home">Kyle</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#About_Me">About Me</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact_Me">Contact Me</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                    <a href="https://github.com/kenneyky">
                         <Icon name="github" size="large" />
                     </a>
                     <a href="https://linkedin.com/in/kenneyky">
                         <Icon name="linkedin" size='large' />
                     </a>
            </Navbar.Collapse>
        </Navbar>
    );
}
