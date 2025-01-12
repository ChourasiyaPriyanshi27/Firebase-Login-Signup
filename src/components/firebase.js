// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4-hynTTHua9KxCkTDydlh8k6fuJl737U",
  authDomain: "login-with-firebase-43a4c.firebaseapp.com",
  projectId: "login-with-firebase-43a4c",
  storageBucket: "login-with-firebase-43a4c.firebasestorage.app",
  messagingSenderId: "456371695938",
  appId: "1:456371695938:web:c399d9f13a8280e74e58db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;