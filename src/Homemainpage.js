import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./Images/sound.jpeg";
import Userpage from "./Userpage";
import Allvideos from "./Allvideos";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Homemainpage = (props) => {
  const currUser = props.user.displayName;
  const email = props.user.email;
  const photoURL = props.user.photoURL;

  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Link exact to="/">
            <img
              src={logo}
              width="70"
              height="35"
              className="d-inline-block align-top"
              alt="SoundRule"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link
                to="/aboutus"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Button variant="warning" onClick={props.handleLogout}>
                LOG OUT
              </Button>
              <Link
                to="/user"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                {currUser}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Allvideos} />
          <Route
            path="/user"
            render={(props) => (
              <Userpage
                {...props}
                name={currUser}
                email={email}
                photoURL={photoURL}
              />
            )}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
};

export default Homemainpage;
