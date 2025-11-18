// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want
//  to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSVT9h21rEClnRo1edxpwdtwAr1n9mZc",
  authDomain: "blog-3f40e.firebaseapp.com",
  projectId: "blog-3f40e",
  storageBucket: "blog-3f40e.firebasestorage.app",
  messagingSenderId: "523757664633",
  appId: "1:523757664633:web:6779e9ed1e4a4e8ca1d7a8",
  measurementId: "G-9BMGNLZX16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
