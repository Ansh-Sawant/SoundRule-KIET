import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
// import ContactUs from "./ContactUs";
// import Homemainpage from "./Homemainpage";
// import logo from "./Images/sound.jpeg";
// import Userpage from "./Userpage";

ReactDOM.render(
  <>
    {/* <Userpage name={"currUser"} email={"email"} photoURL={logo} /> */}
    {/* <Homemainpage user={"user"} handleLogout={"handleLogout"} /> */}
    <App />
    {/* <ContactUs /> */}
  </>,
  document.getElementById("root")
);
