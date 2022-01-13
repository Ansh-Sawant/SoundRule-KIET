import React from "react";
import { Modal } from "react-bootstrap";
import cimage from "./Images/centerimg.png";

// LOGIN PAGE OF SOUNDRULE

// ***** "MyVerticallyCenteredModal" is for "More About SoundRule". It will open in center.
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
        <ul>
          <li>First sign in through your Google account to access the site.</li>
          <li>
            After successful login, you will see the main page of the site
            showing videos/audios uploaded by all users. In this page, you can
            enjoy watching all user's content.
          </li>
          <li>
            There are seven categories in the main page- New Song, Religious,
            Old Is Gold, Instrumental, Sad, Rap and Other. You can click "See
            More" to see all the videos under that category.
          </li>
          <li>
            Also there will be a User's page showing by the name of the user.
          </li>
          <li>
            On User's page you can upload video and update your profile. Here,
            you can also see your uploaded videos (if any).
          </li>
        </ul>
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
        <div className="mainBody">
          <h1 className="soundRule">
            Sound<span style={{ color: "rgb(228, 20, 72)" }}>Rule</span>
            <span className="nameKIET"> KIET</span>
          </h1>
          <h2 className="tagline"> Where Words Fail, Music Speaks </h2>

          <div className="loginBoxROW">
            <div className="loginBox">
              <img src={cimage} alt="cimage" />
              <br />
            </div>
          </div>
          {/* Sign In Buttons */}
          <div className="loginBoxROW" style={{ textAlign: "center" }}>
            <p onClick={props.onSubmit} className="signInButton">
              SIGN IN
            </p>
            <p onClick={() => setModalShow(true)} className="signInButton">
              More About SoundRule
            </p>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homelogin;
