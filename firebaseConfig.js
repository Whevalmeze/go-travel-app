// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "go-travel-app-fb681.firebaseapp.com",
  projectId: "go-travel-app-fb681",
  storageBucket: "go-travel-app-fb681.appspot.com",
  messagingSenderId: "238216996521",
  appId: "1:238216996521:web:f12d68fc1191b18f01ebb8",
  measurementId: "G-LETW32QZJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app