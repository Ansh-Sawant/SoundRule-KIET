import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import logo from './Images/sound.jpeg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Userpage from './Userpage';
import Allvideos from './Allvideos';

const Homemainpage = (props) => {

    const currUser = props.user.displayName;
    const email = props.user.email;
    const photoURL = props.user.photoURL;

    return(
        <>

            <Router>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            
            <Link exact to="/">
                <img
                    src={logo}
                    width="70" height="35"
                    className="d-inline-block align-top"
                    alt="SoundRule" 
                />
                
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>      
                    <Nav.Link href="#contact">Contact Us</Nav.Link>      
                </Nav>
                <Nav>
                    <Button onClick= {props.handleLogout} > LOG OUT </Button>
                    <Link to="/user" >{currUser}</Link>
                </Nav>
            </Navbar.Collapse>            

            </Navbar>

            <Switch>
                <Route path="/" exact component={Allvideos}/>  
                <Route path="/user" render={(props) => (
                    <Userpage {...props} name={currUser} email={email} photoURL={photoURL}/>
                )} /> 
            </Switch>

            </Router>
            
        </>
    );

};

export default Homemainpage;