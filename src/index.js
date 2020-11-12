import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Allvideos from './Allvideos';
import Userpage from './Userpage';
import logo from './Images/sound.jpeg';

ReactDOM.render(
  <React.StrictMode>
    {/* <Allvideos /> */}
    {/* <Userpage name={"currUser"} email={"email"} photoURL={logo}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
