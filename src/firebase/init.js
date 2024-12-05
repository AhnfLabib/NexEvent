// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //API
  authDomain: "nexevent-377be.firebaseapp.com",
  projectId: "nexevent-377be",
  storageBucket: "nexevent-377be.firebasestorage.app",
  messagingSenderId: "405124353639",
  appId: "1:405124353639:web:4ac36af4ff8ee9b6f70ec2"
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };

// Initialize Firebase



