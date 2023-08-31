// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from  'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3DBUE__aWT8CW_9CJjQYJe6cz4vAcfkw",
  authDomain: "chatapp-8830d.firebaseapp.com",
  projectId: "chatapp-8830d",
  storageBucket: "chatapp-8830d.appspot.com",
  messagingSenderId: "1090559903222",
  appId: "1:1090559903222:web:e1114b88d680217731f3d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)