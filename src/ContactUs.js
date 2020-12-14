import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// THIS PAGE IS FOR CONTACTING THE SOUNDRULE TEAM

const ContactUs = () => {
  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <h1>Contact Us</h1>
        <br />
        <Container fluid>
          <Row>
            <Col>
              <form>
                <p>
                  Name:{" "}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </p>
                <p>
                  University Roll No:{" "}
                  <input
                    type="text"
                    name="universityRoll"
                    placeholder="Enter Your University Roll"
                  />
                </p>
                <p>
                  <textarea
                    name="detailContact"
                    placeholder="Tell Us In Detail"
                    rows="4"
                    cols="50"
                  />
                </p>
                <p>
                  <button>Submit</button>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
