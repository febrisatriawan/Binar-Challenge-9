import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrPRpnYpRQzktqFUI8p3QcYCC3UQQrxao",
  authDomain: "binar-chall-9-kel-1.firebaseapp.com",
  projectId: "binar-chall-9-kel-1",
  storageBucket: "binar-chall-9-kel-1.appspot.com",
  messagingSenderId: "931008907881",
  appId: "1:931008907881:web:f3a3c26f78538035f470f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
