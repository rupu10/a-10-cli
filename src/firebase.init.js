// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF_0BG_ADanfCSTc21GvM81J-OcnBM2wM",
  authDomain: "a-10-recipe-book.firebaseapp.com",
  projectId: "a-10-recipe-book",
  storageBucket: "a-10-recipe-book.firebasestorage.app",
  messagingSenderId: "436255723100",
  appId: "1:436255723100:web:85104bec879fff76fce099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

