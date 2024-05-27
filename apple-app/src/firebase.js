// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTEvJ85igyR60gJlOnZ4h5OUtkCE2zEvk",
  authDomain: "react-aple-tv.firebaseapp.com",
  projectId: "react-aple-tv",
  storageBucket: "react-aple-tv.appspot.com",
  messagingSenderId: "980983872791",
  appId: "1:980983872791:web:b76c702fd4479d26470b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;