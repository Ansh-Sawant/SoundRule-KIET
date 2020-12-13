import React from "react";
import { Row, Col, Image, Modal, Container } from "react-bootstrap";
import "./App.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <video
                src={props.avatar}
                controls
                autoPlay
                className="videoModal"
              />
            </Col>
            <Col>
              <h5>{props.videoname}</h5>
              <p style={{ fontSize: "14px", color: "GrayText" }}>
                {props.dateadded}
              </p>
              <Row>
                <Col xs={2} md={1}>
                  <Image
                    src={props.profilepic}
                    width="40"
                    height="40"
                    alt="profile"
                    roundedCircle
                  />
                </Col>
                <Col xs md>
                  <b>{props.username}</b>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const Video = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const videoname = props.user.videoname;
  const username = props.user.name;
  const dateadded = props.user.dateadded;
  const avatar = props.user.avatar;
  const thumbnail = props.user.thumbnail;
  const profilepic = props.user.profilepic;

  return (
    <>
      {props.user.category === props.cate ? (
        <Col md={3} key={videoname}>
          <video src={avatar} poster={thumbnail} className="mainPageVideos" />
          <Row style={{ marginBottom: "20px" }}>
            <Col xs={2}>
              <Image
                src={profilepic}
                width="40"
                height="40"
                alt="profile"
                roundedCircle
              />
            </Col>
            <Col xs>
              <h6>{videoname}</h6> {username} | {dateadded}
              <p
                onClick={() => setModalShow(true)}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Expand
              </p>
              <MyVerticallyCenteredModal
                videoname={videoname}
                username={username}
                dateadded={dateadded}
                avatar={avatar}
                thumbnail={thumbnail}
                profilepic={profilepic}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Col>
      ) : (
        ""
      )}
    </>
  );
};

export default Video;
