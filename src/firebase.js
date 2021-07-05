// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiMNe90jz2W0pkgmiKzB2KU2g8G7agl9k",
    authDomain: "twitter-clone-c1178.firebaseapp.com",
    projectId: "twitter-clone-c1178",
    storageBucket: "twitter-clone-c1178.appspot.com",
    messagingSenderId: "1032425248862",
    appId: "1:1032425248862:web:4df3de057d8c3ad4803ccf",
    measurementId: "G-2503DSDV79"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db ;