import firebase from "firebase";
import "firebase/storage";

// THIS COMPONENT IS FOR DETAILS OF SOUNDRULE PROJECT IN FIREBASE

var firebaseConfig = {
  apiKey: "AIzaSyDhcWBkUmxVg5VkwNRCZYIp_SYZ3Sk9dtc",
  authDomain: "soundrule.firebaseapp.com",
  databaseURL: "https://soundrule.firebaseio.com",
  projectId: "soundrule",
  storageBucket: "soundrule.appspot.com",
  messagingSenderId: "718907645622",
  appId: "1:718907645622:web:f6fde78f15b470896b5017",
  measurementId: "G-SNW031C2SK",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
