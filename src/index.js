import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Homemainpage from "./Homemainpage";
// import logo from "./Images/sound.jpeg";
// import Userpage from "./Userpage";

ReactDOM.render(
  <React.StrictMode>
    {/* <Userpage name={"currUser"} email={"email"} photoURL={logo} /> */}
    {/* <Homemainpage user={"user"} handleLogout={"handleLogout"} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
