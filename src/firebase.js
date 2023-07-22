// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH0ghnhEFCcKr2nJuxyZKOyJVJbIvlzCQ",
  authDomain: "inta-clone-46443.firebaseapp.com",
  projectId: "inta-clone-46443",
  storageBucket: "inta-clone-46443.appspot.com",
  messagingSenderId: "713510136164",
  appId: "1:713510136164:web:a14fbf12e16e7a72917271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
