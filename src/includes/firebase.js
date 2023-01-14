import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmC2oydsiE-NVFZPlwhVkQ5QxyrHdlXbw",
  authDomain: "music-bfccd.firebaseapp.com",
  projectId: "music-bfccd",
  storageBucket: "music-bfccd.appspot.com",
  appId: "1:674617510212:web:e2eb24e3c24688a6f86f11",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
