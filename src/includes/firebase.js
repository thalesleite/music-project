import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, songsCollection, storage };
