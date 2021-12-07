// Import the functions you need from the SDKs you need

import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAihojIkdBliDuGowerr7n3oLNwtGg1RmY",
  authDomain: "firegram-77b28.firebaseapp.com",
  projectId: "firegram-77b28",
  storageBucket: "firegram-77b28.appspot.com",
  messagingSenderId: "1000618491280",
  appId: "1:1000618491280:web:9a766eff7947a7cc8f8715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
