import React from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import cimage from "./Images/centerimg.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          More About SoundRule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Welcome to SoundRule. This website is for KIET Group Of Institution
          students. Students can upload their music audios and videos. Videos
          related to events happening in fests in college can also be uploaded
          by the students. For any cultural competitions in the college, winners
          can be decided by their videos or songs posted on this website.
        </p>
        <b>How To Use</b>
        <p>
          - First sign in through your Google account to access the site. <br />
          - After successful login, you will see the main page of the site
          showing videos/audios uploaded by all users. <br />- Also there will
          be a User's page showing by the name of the user
        </p>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        <p>Copyright &copy; SoundRule 2020 - 2021</p>
      </Modal.Footer>
    </Modal>
  );
}

const Homelogin = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

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
              <div className="loginBox">
                <img src={cimage} alt="cimage" />
                <br />
              </div>
            </Col>
            <Col xs sm={3} md={4}></Col>
          </Row>
          {/* Sign In Buttons */}
          <Row>
            <Col xs lg={4}></Col>
            <Col xs={12} lg={4} style={{ textAlign: "center" }}>
              <Button
                variant="warning"
                onClick={props.onSubmit}
                className="signInButton"
              >
                SIGN IN
              </Button>
              <Button
                variant="warning"
                onClick={() => setModalShow(true)}
                className="signInButton"
              >
                More About SoundRule
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col xs lg={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homelogin;
