import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AnshPic from "./Images/Ansh Sawant.jpg";
import AbhishekPic from "./Images/Abhishek.jpeg";
import AayanPic from "./Images/Aayan.jpeg";

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
                  href="https://www.linkedin.com/in/ansh-sawant-1709/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br />
                Roll No. - 1900290130029 <br /> Email - ansh.1923it1033@kiet.edu{" "}
              </p>
            </Col>
          </Row>

          <div style={{ margin: "10px" }}> &nbsp; </div>

          <Row
            style={{
              backgroundColor: "lightgreen",
              padding: "15px",
              borderRadius: "7px",
            }}
          >
            <Col md={2}>
              <Image
                src={AbhishekPic}
                width="80"
                height="80"
                alt="Abhishek Singh"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                <b>Abhishek Singh</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/abhishek-singh-4a47bb1b0/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br />
                Roll No. - 1900290130007 <br /> Email -
                abhishek.1923it1146@kiet.edu
              </p>
            </Col>
          </Row>

          <div style={{ margin: "10px" }}> &nbsp; </div>

          <Row
            style={{
              backgroundColor: "lightcoral",
              padding: "15px",
              borderRadius: "7px",
            }}
          >
            <Col md={2}>
              <Image
                src={AayanPic}
                width="80"
                height="80"
                alt="Aayan Srivastava"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                <b>Aayan Srivastava</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/aayan-srivastava-91a803190/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br />
                Roll No. - 1900290130002 <br /> Email -
                aayan.1923it1055@kiet.edu
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer" style={{ position: "relative", bottom: "-82px" }}>
        <footer style={{ padding: "15px" }}>
          Copyright &copy; SoundRule 2020 - 2021 <br /> Email-
          soundrule.it2023@gmail.com
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
