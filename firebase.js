// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHogkFkCU7UsWeUwooJmVkdzRx-_KejQs",
    authDomain: "tubespam-78be3.firebaseapp.com",
    projectId: "tubespam-78be3",
    storageBucket: "tubespam-78be3.appspot.com",
    messagingSenderId: "460680183927",
    appId: "1:460680183927:web:8c32c0c58e824acdc84672",
    measurementId: "G-W98LNPM9Y5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };