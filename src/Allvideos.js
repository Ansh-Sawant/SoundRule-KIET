import React, { useEffect, useState } from "react";
import app from "./fire";
import { Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Video from "./Video";

const db = app.firestore();

const Allvideo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <Container fluid>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search By Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#newsongs">New Songs</Dropdown.Item>
              <Dropdown.Item href="#religious">Religious</Dropdown.Item>
              <Dropdown.Item href="#oldisgold">Old is Gold</Dropdown.Item>
              <Dropdown.Item href="#instrumental">Instrumental</Dropdown.Item>
              <Dropdown.Item href="#sadsongs">Sad Songs</Dropdown.Item>
              <Dropdown.Item href="#rap">Rap</Dropdown.Item>
              <Dropdown.Item href="#others">Others</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div id="newsongs" style={{ marginTop: "10px" }}>
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5> New Songs </h5>
              <Row>
                {users.map((user) => {
                  return <Video user={user} cate={"New Song"} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/newsong"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="religious" className="space">
            &nbsp;
          </div>

          <div>
            <h5>Religious</h5>
            <Row>
              {users.map((user) => {
                return <Video user={user} cate={"Religious"} />;
              })}
            </Row>
            <Row>
              <Link
                to="/religious"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="oldisgold" className="space">
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Old is Gold</h5>
              <Row>
                {users.map((user) => {
                  return <Video user={user} cate={"Old Is Gold"} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/oldisgold"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="instrumental" className="space">
            &nbsp;
          </div>
          <div>
            <h5>Instrumental</h5>
            <Row>
              {users.map((user) => {
                return <Video user={user} cate={"Instrumental"} />;
              })}
            </Row>
            <Row>
              <Link
                to="/instrumental"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="sadsongs" className="space">
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Sad Songs</h5>
              <Row>
                {users.map((user) => {
                  return <Video user={user} cate={"Sad"} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/sadsongs"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="rap" className="space">
            &nbsp;
          </div>
          <div>
            <h5>Rap</h5>
            <Row>
              {users.map((user) => {
                return <Video user={user} cate={"Rap"} />;
              })}
            </Row>
            <Row>
              <Link
                to="/rap"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="others" className="space">
            &nbsp;
          </div>
          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Others</h5>
              <Row>
                {users.map((user) => {
                  return <Video user={user} cate={"Other"} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/others"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Allvideo;
