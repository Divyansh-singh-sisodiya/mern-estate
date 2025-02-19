// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e651.firebaseapp.com",
  projectId: "mern-estate-7e651",
  storageBucket: "mern-estate-7e651.firebasestorage.app",
  messagingSenderId: "502516230068",
  appId: "1:502516230068:web:c007741bd956a04c5cf4e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);