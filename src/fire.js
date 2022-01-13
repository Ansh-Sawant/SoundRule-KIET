import firebase from "firebase";
import "firebase/storage";

// THIS COMPONENT IS FOR DETAILS OF SOUNDRULE PROJECT IN FIREBASE

var firebaseConfig = {};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
