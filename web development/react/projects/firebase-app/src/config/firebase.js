// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAreJXGD-7ttzY5LRildteF_xUNjZQEzw4",
  authDomain: "vite-contact-dc4f6.firebaseapp.com",
  projectId: "vite-contact-dc4f6",
  storageBucket: "vite-contact-dc4f6.firebasestorage.app",
  messagingSenderId: "442499456760",
  appId: "1:442499456760:web:90f62f591646ce02d5a50d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);