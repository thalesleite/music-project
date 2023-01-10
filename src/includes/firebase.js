import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmC2oydsiE-NVFZPlwhVkQ5QxyrHdlXbw",
  authDomain: "music-bfccd.firebaseapp.com",
  projectId: "music-bfccd",
  storageBucket: "music-bfccd.appspot.com",
  appId: "1:674617510212:web:e2eb24e3c24688a6f86f11",
};

export default firebase.initializeApp(firebaseConfig);
