// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDczHtRa0bM0NSDRfbuZo0gUrfWLYYMdfo",
  authDomain: "carbon-loop.firebaseapp.com",
  projectId: "carbon-loop",
  storageBucket: "carbon-loop.appspot.com",
  messagingSenderId: "714594464291",
  appId: "1:714594464291:web:2c3249480bff0c29f37796",
  measurementId: "G-5BCK75BH8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();