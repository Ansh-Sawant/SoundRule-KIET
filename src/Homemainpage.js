import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import logo from './Images/sound.jpeg';

const Homemainpage = (props) => {

    return(
        <>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="70" height="35"
                    className="d-inline-block align-top"
                    alt="SoundRule" 
                />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>      
                    <Nav.Link href="#contact">Contact Us</Nav.Link>      
                </Nav>
                <Nav>
                <Button onClick= {props.handleLogout} > LOG OUT </Button>
                <Nav.Link href="#"> {props.user.displayName} </Nav.Link>        
                </Nav>
            </Navbar.Collapse>

            </Navbar>

            <h1>W</h1>
            <h1>Welcome {props.user.displayName} </h1>
        </>
    );

};

export default Homemainpage;