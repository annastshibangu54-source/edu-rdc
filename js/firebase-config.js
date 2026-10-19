// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8PVf2sKt-n_8ANjUr7Iiv1PQkGJrjB-E",
  authDomain: "edu-rdc.firebaseapp.com",
  projectId: "edu-rdc",
  storageBucket: "edu-rdc.firebasestorage.app",
  messagingSenderId: "567182543451",
  appId: "1:567182543451:web:0d08c9303bfb18e4200d7e",
  measurementId: "G-3ELD77JK5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
