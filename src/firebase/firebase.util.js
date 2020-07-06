import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdNY4lCgoQZSqPDRigKOkX1kNDFFWqi6I",
  authDomain: "clothing-ecommerce-3f38d.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-3f38d.firebaseio.com",
  projectId: "clothing-ecommerce-3f38d",
  storageBucket: "clothing-ecommerce-3f38d.appspot.com",
  messagingSenderId: "691793295645",
  appId: "1:691793295645:web:3f6665be00eb548c1889f4",
  measurementId: "G-X0M7DQQYMS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
