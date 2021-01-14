import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgO0JwDwr-N9zK2MZFCW0NrW5pA5_HrDQ",
  authDomain: "challenge-c7583.firebaseapp.com",
  projectId: "challenge-c7583",
  storageBucket: "challenge-c7583.appspot.com",
  messagingSenderId: "794676503484",
  appId: "1:794676503484:web:9b557a076f386b1a99c1b9",
  measurementId: "G-97TLEN10XR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

