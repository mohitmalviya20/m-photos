import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBbFcjOhatfCGVrDyWzCCuMjiTJB0-8L1g",
  authDomain: "m-photos-9b914.firebaseapp.com",
  databaseURL: "https://m-photos-9b914.firebaseio.com",
  projectId: "m-photos-9b914",
  storageBucket: "m-photos-9b914.appspot.com",
  messagingSenderId: "531667781480",
  appId: "1:531667781480:web:3cafc872851523ed5078dd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
