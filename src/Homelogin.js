import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import cimage from "./Images/centerimg.png";

const Homelogin = (props) => {
  return (
    <>
      <div className="bg">
        <Container fluid className="mainBody">
          <h1 className="soundRule">
            Sound<span style={{ color: "rgb(228, 20, 72)" }}>Rule</span>
            <span style={{ fontSize: "25px" }}> KIET</span>
          </h1>
          <h2 className="tagline"> Where Words Fail, Music Speaks </h2>
          <Row>
            <Col xs sm={3} md={4}></Col>
            <Col xs={12} sm={6} md={4}>
              <div className="textStyle">
                <div className="loginBox">
                  <Image src={cimage} fluid rounded />
                  <br />
                  <Button
                    variant="warning"
                    onClick={props.onSubmit}
                    className="signInButton"
                  >
                    SIGN IN
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs sm={3} md={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homelogin;
