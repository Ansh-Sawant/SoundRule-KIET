import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import app from "./fire";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const db = app.firestore();

const Userpage = (props) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [users, setUsers] = useState([]);

  const onVideoSubmit = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const username = props.name;
    const video = e.target.videoname.value;
    const cate = e.target.category.value;
    const profilepic = props.photoURL;
    if (!username || !video || !cate) {
      window.alert(
        "All Fields Are Necessary On Uploading Your Video. Please Fill Again"
      );
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

  const onUserDetailSubmit = async (e) => {
    e.preventDefault();
    const username = props.name;
    const email = props.email;
    const universityRoll = e.target.universityRoll.value;
    const branch = e.target.branch.value;
    const yearOfStudy = e.target.yearOfStudy.value;
    if (!username || !universityRoll || !branch || !yearOfStudy) {
      window.alert(
        "All Fields Are Necessary On Updating Your Profile. Please Fill Again"
      );
      return;
    }
    await db.collection("usersdetail").doc(username).set({
      Name: username,
      Email: email,
      UniversityRoll: universityRoll,
      Branch: branch,
      Year: yearOfStudy,
    });
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      window.alert("File Size Should Be Less Than 10 mb! Please Try Again");
      return;
    }
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
                <Col
                  xs={12}
                  md={4}
                  style={{ textAlign: "center", color: "whitesmoke" }}
                >
                  <h1>{props.name}</h1>
                  <h5>{props.email}</h5>
                </Col>
                <Col xs md={4}></Col>
              </Row>
            </div>
          </div>
        </Container>

        <Container>
          <Row
            style={{ marginTop: "40px", fontFamily: "'Roboto', sans-serif" }}
          >
            <Col xs={12} className="noteBox">
              <h5>NOTE:- </h5>
              <p>
                &nbsp; - The Maximum Size of the Video must be 10 mb <br />
                &nbsp; - All Fields Are Necessary On Uploading Your Video and
                Updating Your Profile
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col xs={0} sm={1}></Col>

            <Col
              xs={12}
              sm={5}
              style={{
                paddingTop: "40px",
                margin: "25px 0px",
              }}
            >
              <div>
                <h3 style={{ color: "#E0A800" }}>Upload Video</h3>
                <br />
                <form onSubmit={onVideoSubmit}>
                  <p>
                    File: &nbsp;
                    <input
                      type="file"
                      accept="video/*"
                      onChange={onFileChange}
                    />
                  </p>
                  <p>
                    Video Name:&nbsp;
                    <input
                      type="text"
                      name="videoname"
                      placeholder="VIDEO NAME"
                    />
                  </p>
                  <p>
                    Thumbnail:&nbsp;
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onThumbnailFileChange}
                    />
                  </p>
                  <p>
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
                  </p>
                  <button>Submit</button>
                </form>
              </div>
            </Col>

            <Col xs={0} sm={1}></Col>

            <Col
              xs={12}
              sm={5}
              style={{ paddingTop: "40px", margin: "25px 0px" }}
            >
              <h3 style={{ color: "#E0A800" }}>Update Your Profile</h3>
              <br />
              <form onSubmit={onUserDetailSubmit}>
                <p>
                  University Roll Number: &nbsp;
                  <input
                    type="text"
                    name="universityRoll"
                    placeholder="University Roll Number"
                  />
                </p>
                <p>
                  <label for="branch">Branch: &nbsp; </label>
                  <select name="branch">
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="ME">ME</option>
                    <option value="EN">EN</option>
                  </select>
                </p>
                <p>
                  <label for="yearOfStudy">Year Of Study: &nbsp; </label>
                  <select name="yearOfStudy">
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Four">Four</option>
                  </select>
                </p>
                <button>Submit</button>
              </form>
            </Col>
          </Row>
        </Container>

        <div style={{ paddingTop: "20px", margin: "25px" }}>
          <h3 style={{ color: "#E0A800" }}>Your Videos</h3>
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
                        <h6>{user.videoname}</h6> {user.name} | {user.dateadded}{" "}
                        | {user.category}
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
