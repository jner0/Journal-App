// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env);

// Your web app's Firebase configuration
//dev-pro
// const firebaseConfig = {
//   apiKey: "AIzaSyCao3NGBe4jiZ6u3MAp_6ohNPsy7TcfRdM",
//   authDomain: "react-curso-c82c6.firebaseapp.com",
//   projectId: "react-curso-c82c6",
//   storageBucket: "react-curso-c82c6.appspot.com",
//   messagingSenderId: "954885281694",
//   appId: "1:954885281694:web:b904a18f33b5a8a178e88f",
// };

//testing
const firebaseConfig = {
  apiKey: "AIzaSyB4p7MRUkEmhhifKofXeAB3e1wLhxreR6A",
  authDomain: "test-cd2dd.firebaseapp.com",
  projectId: "test-cd2dd",
  storageBucket: "test-cd2dd.appspot.com",
  messagingSenderId: "856592848023",
  appId: "1:856592848023:web:f2c86224aaf1ea6ef885d2",
  measurementId: "G-VDD9BRFLTD"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
