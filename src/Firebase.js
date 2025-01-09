// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCYvzPqo9YzV59g2DFXWnlelSl3F6p6Js",
  authDomain: "cosulting.firebaseapp.com",
  projectId: "cosulting",
  storageBucket: "cosulting.firebasestorage.app",
  messagingSenderId: "451291021989",
  appId: "1:451291021989:web:70ad13fb4b0e11c744c34c",
  measurementId: "G-K70VL8ZT99",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
