import React, { useState, useEffect } from "react";
import app from "./fire";
import "./App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import logo from './Images/sound.jpeg';

const db = app.firestore();

const Userpage = (props) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [users, setUsers] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const username = props.name;
    const video = e.target.videoname.value;
    const cate = e.target.category.value;
    const profilepic = props.photoURL;
    if (!username || !fileUrl) {
      return;
    }
    await db
      .collection("users")
      .doc(video)
      .set({
        name: username,
        videoname: video,
        thumbnail: thumbnailUrl,
        avatar: fileUrl,
        category: cate,
        profilepic: profilepic,
        dateadded: `${date}/${month}/${year}`,
      });
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onThumbnailFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setThumbnailUrl(await fileRef.getDownloadURL());
  };

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
      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

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
              <Button onClick={props.onSubmit}>SIGN IN</Button>        
              </Nav>
          </Navbar.Collapse>

        </Navbar> */}
      <div style={{ paddingTop: "60px" }}>
        <Container fluid>
          <div className="personalProfile">
            <div style={{ padding: "30px" }}>
              <Row>
                <Col xs md={2}></Col>
                <Col xs={12} md={2} style={{ textAlign: "center" }}>
                  <Image
                    src={props.photoURL}
                    width="120"
                    height="120"
                    alt="profile"
                    roundedCircle
                  />
                </Col>
                <Col xs={12} md={4} style={{ textAlign: "center" }}>
                  <h1>{props.name}</h1>
                  <h5>{props.email}</h5>
                </Col>
                <Col xs md={4}></Col>
              </Row>
            </div>
          </div>

          <Row>
            <Col></Col>
          </Row>
        </Container>
        <div style={{ paddingTop: "50px", margin: "25px" }}>
          <h3>Upload Video</h3>
          <br />
          <form onSubmit={onSubmit}>
            <p>
              File: &nbsp;
              <input type="file" accept="video/*" onChange={onFileChange} />
            </p>
            <p>
              Video Name:&nbsp;
              <input type="text" name="videoname" placeholder="VIDEO NAME" />
            </p>
            <p>
              Thumbnail:&nbsp;
              <input
                type="file"
                accept="image/*"
                onChange={onThumbnailFileChange}
              />
            </p>
            <label for="category">Category: &nbsp; </label>
            <select name="category">
              <option value="New Song">New Song</option>
              <option value="Religious">Religious</option>
              <option value="Old Is Gold">Old Is Gold</option>
              <option value="Instrumental">Instrumental</option>
              <option value="Sad">Sad</option>
              <option value="Rap">Rap</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <button>Submit</button>
          </form>
        </div>

        <div style={{ paddingTop: "50px", margin: "25px" }}>
          <h3>Your Videos</h3>
          <Container fluid>
            <Row>
              {users.map((user) => {
                return user.name === props.name ? (
                  <Col md={3} key={user.videoname}>
                    <video
                      width="320"
                      height="180"
                      src={user.avatar}
                      poster={user.thumbnail}
                      controls
                    />
                    <Row style={{ marginBottom: "20px" }}>
                      <Col xs={2}>
                        <Image
                          src={props.photoURL}
                          width="40"
                          height="40"
                          alt="profile"
                          roundedCircle
                        />
                      </Col>
                      <Col xs>
                        <h6>{user.videoname}</h6> {user.name} <br /> Date:
                        {user.dateadded}
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  ""
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Userpage;
