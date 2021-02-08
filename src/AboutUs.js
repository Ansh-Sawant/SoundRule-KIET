import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AnshPic from "./Images/Ansh Sawant.jpg";

// THIS PAGE IS FOR THE CREATORE OF THIS WEBSITE

const AboutUs = () => {
  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <h1>About Us</h1>
        <br />

        <Container>
          <Row
            style={{
              backgroundColor: "lightblue",
              padding: "15px",
              borderRadius: "7px",
            }}
          >
            <Col md={2}>
              <Image
                src={AnshPic}
                width="80"
                height="80"
                alt="Ansh Sawant"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                <b>Ansh Sawant</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ansh-sawant/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br />
                Roll No. - 1900290130029 <br /> Email - ansh.1923it1033@kiet.edu{" "}
              </p>
            </Col>
          </Row>

          <div style={{ margin: "10px" }}> &nbsp; </div>
        </Container>
      </div>
      <div
        className="footer"
        style={{ position: "relative", bottom: "-365px" }}
      >
        <footer style={{ padding: "15px" }}>
          Copyright &copy; SoundRule 2020 - 2021 <br /> Email-
          soundrule.it2023@gmail.com
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
