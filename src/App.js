import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fire from "./fire";
import firebase from "firebase";
import Homelogin from "./Homelogin";
import Homemainpage from "./Homemainpage";

function App() {
  const [user, setUser] = useState("");

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        setUser(result.user);
      })
      .catch(function (error) {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User Signed In");
        console.log(user);
      } else {
        console.log("User Not Signed In");
      }
    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  };

  return (
    <>
      {user ? (
        <Homemainpage user={user} handleLogout={handleLogout} />
      ) : (
        <Homelogin onSubmit={onSubmit} />
      )}
    </>
  );
}

export default App;
