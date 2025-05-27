// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cookgpt-d677a.firebaseapp.com",
  projectId: "cookgpt-d677a",
  storageBucket: "cookgpt-d677a.firebasestorage.app",
  messagingSenderId: "46011534001",
  appId: "1:46011534001:web:298b23342e81f11e00b090",
  measurementId: "G-NEDF5QCY4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the auth instance
export { auth };