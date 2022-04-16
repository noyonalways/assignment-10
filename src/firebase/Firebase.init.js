// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQmLInHZ2KUl-3C9Je5OSntY2If4jVU8",
  authDomain: "pic-man.firebaseapp.com",
  projectId: "pic-man",
  storageBucket: "pic-man.appspot.com",
  messagingSenderId: "452482791261",
  appId: "1:452482791261:web:079eb50358047addfa9ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;