// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCao3NGBe4jiZ6u3MAp_6ohNPsy7TcfRdM",
  authDomain: "react-curso-c82c6.firebaseapp.com",
  projectId: "react-curso-c82c6",
  storageBucket: "react-curso-c82c6.appspot.com",
  messagingSenderId: "954885281694",
  appId: "1:954885281694:web:b904a18f33b5a8a178e88f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
