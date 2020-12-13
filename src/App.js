import React, { useState } from "react";
import fire from "./fire";
import firebase from "firebase";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./Images/sound.jpeg";
import Homelogin from "./Homelogin";
import Homemainpage from "./Homemainpage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  const [user, setUser] = useState("");

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        setUser(result.user);
      })
      .catch(function (error) {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User Signed In");
        console.log(user);
      } else {
        console.log("User Not Signed In");
      }
    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  };

  return (
    <>
      {user ? (
        <Homemainpage user={user} handleLogout={handleLogout} />
      ) : (
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
                <Button onClick={onSubmit}>SIGN IN</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Homelogin {...props} onSubmit={onSubmit} />}
            />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route
              render={(props) => <Homelogin {...props} onSubmit={onSubmit} />}
            />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
