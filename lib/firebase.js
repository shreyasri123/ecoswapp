// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgrmYLMGow8guDbZZI36zYu6y7_D18qDA",
  authDomain: "ecoswapp-884bb.firebaseapp.com",
  projectId: "ecoswapp-884bb",
  storageBucket: "ecoswapp-884bb.appspot.com",
  messagingSenderId: "183626041359",
  appId: "1:183626041359:web:43021a332440cea7d6fb7a",
  measurementId: "G-58ZL51KYNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);