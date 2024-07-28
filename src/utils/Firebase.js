// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhzBGmX5iV5eIXRBN6FwbxbvJ0VNmmWVE",
  authDomain: "netflix-gpt-clone-33e72.firebaseapp.com",
  projectId: "netflix-gpt-clone-33e72",
  storageBucket: "netflix-gpt-clone-33e72.appspot.com",
  messagingSenderId: "1091436758102",
  appId: "1:1091436758102:web:b54ecedb44eb698f87a7f7",
  measurementId: "G-RLE3W7B8SS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
