// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e66f7.firebaseapp.com",
  projectId: "mern-estate-e66f7",
  storageBucket: "mern-estate-e66f7.appspot.com",
  messagingSenderId: "856449099051",
  appId: "1:856449099051:web:be3a97eaefd18038a2516e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
