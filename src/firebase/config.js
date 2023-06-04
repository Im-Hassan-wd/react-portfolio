import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD6Vrx6ZCfD7CMl4KFdLs8rLiCqXoX5fk",
  authDomain: "warwick-portfolio.firebaseapp.com",
  projectId: "warwick-portfolio",
  storageBucket: "warwick-portfolio.appspot.com",
  messagingSenderId: "77691683669",
  appId: "1:77691683669:web:bd882760c85659640f25dc",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// timestamp
export const timestamp = firebase.firestore.Timestamp;
